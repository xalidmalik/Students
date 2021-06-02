import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useStudent } from "hooks/useStudentContext";
import { useView } from "hooks/useView";
import React, { forwardRef, useState } from "react";
import { container, highContainer, item } from "utils/animation";
import { StudentType } from "utils/types";

export const StudentCard = forwardRef<HTMLDivElement, StudentType>((props) => {
  const { firstName, company, email, grades, pic, lastName, skill, tags, id } =
    props;
  const { students, setStudents } = useStudent();
  const { controls, ref } = useView({ exit: true });

  const [expand, setExpand] = useState(false);
  const [tag, setTag] = useState("");

  let fullName: string = `${firstName} ${lastName}`.toUpperCase();
  let totalGrade: number = grades
    .map((val) => parseInt(val))
    .reduce((prev, current) => prev + current);

  let avarage: number = totalGrade / grades.length;

  function handleAddTag(key: string, id: string, tag: string) {
    if (key === "Enter") {
      let newArr: StudentType[] = JSON.parse(JSON.stringify(students));
      let finded = newArr.find((data: StudentType) => data.id === id);
      finded?.tags.push(tag);
      setStudents([...newArr]);
      setTag("");
    }
  }

  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="card"
          initial="initial"
          animate={controls}
          exit="exit"
          variants={item}
          layout
          ref={ref}
        >
          <motion.div className="image-container" layout>
            <motion.img
              width={160}
              height={160}
              src={pic}
              alt={`${fullName} profile`}
              loading="lazy"
              layout
            />
          </motion.div>
          <motion.div className="content" layout>
            <motion.div variants={item} className="header" layout>
              <motion.h2 className="title">{fullName}</motion.h2>
              <motion.button
                className="expande"
                variants={item}
                onClick={() => setExpand((prev) => !prev)}
                layout
              >
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={expand ? { rotate: 180 } : { rotate: 360 }}
                >
                  {expand ? "-" : "+"}
                </motion.span>
              </motion.button>
            </motion.div>
            <motion.div variants={highContainer} className="description" layout>
              <motion.p
                variants={item}
                className="description-item"
              >{`Email: ${email}`}</motion.p>
              <motion.p
                variants={item}
                className="description-item"
              >{`Company: ${company}`}</motion.p>
              <motion.p
                variants={item}
                className="description-item"
              >{`Skill: ${skill}`}</motion.p>
              <motion.p
                variants={item}
                className="description-item"
              >{`Avarage: ${avarage}%`}</motion.p>
            </motion.div>
            <AnimatePresence key="expand" exitBeforeEnter>
              <motion.div
                initial="initial"
                animate={expand ? "animate" : "exit"}
                exit="exit"
                variants={container}
                className="description expandable"
                layout
              >
                {expand &&
                  grades.map((data, index) => (
                    <motion.p
                      variants={item}
                      layout
                      key={index}
                      className="description-item"
                    >{`Test${index + 1}: ${data}%`}</motion.p>
                  ))}
              </motion.div>
            </AnimatePresence>
            <motion.div className="tag-container" layout>
              <AnimatePresence key="tag" exitBeforeEnter>
                {tags.length > 0 && (
                  <div className="tag-section">
                    {tags?.map((data, index) => (
                      <span className="tag" key={index}>
                        {data}
                      </span>
                    ))}
                  </div>
                )}
              </AnimatePresence>
              <motion.input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
                type="text"
                className="search-input small"
                placeholder="Add a tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                onKeyDown={(e) => handleAddTag(e.key, id, tag)}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
});
