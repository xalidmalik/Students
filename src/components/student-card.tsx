import { AnimatePresence, motion } from "framer-motion";
import { useStudent } from "hooks/useStudentContext";
import { useView } from "hooks/useView";
import React, { memo, useState } from "react";
import { container, highContainer, item } from "utils/animation";
import { addTagCurrentStudent } from "utils/helper";
import { StudentType } from "utils/types";

type descriptionTextType = {
  label: string;
  value: string;
};

const DesciptionText = ({ label, value }: descriptionTextType) => (
  <motion.p
    variants={item}
    className="description-item"
    layout
  >{`${label}: ${value}`}</motion.p>
);

const StudentCard = memo<StudentType>(
  ({ fullName, company, email, grades, pic, skill, tags, id, avarage }) => {
    const { students, setStudents } = useStudent();
    const { controls, ref } = useView({ exit: true });
    const [expand, setExpand] = useState(false);
    const [tag, setTag] = useState("");

    const handleAddTag = (key: string) => {
      if (key === "Enter") {
        let newArr: StudentType[] = addTagCurrentStudent(students, id, tag);
        setStudents([...newArr]);
        setTag("");
      }
    };

    return (
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
            <motion.h2 className="title" layout>
              {fullName}
            </motion.h2>
            <motion.button
              className="expande"
              variants={item}
              onClick={() => setExpand((prev) => !prev)}
              layout
            >
              <motion.span
                initial={{ rotate: 0 }}
                animate={expand ? { rotate: 180 } : { rotate: 360 }}
                layout
              >
                {expand ? "-" : "+"}
              </motion.span>
            </motion.button>
          </motion.div>
          <motion.div variants={highContainer} className="description" layout>
            <DesciptionText label="Email" value={email} />
            <DesciptionText label="Company" value={company} />
            <DesciptionText label="Skill" value={skill} />
            <DesciptionText label="Avarage" value={`${avarage}%`} />
          </motion.div>
          <motion.div
            initial="initial"
            animate={expand ? "animate" : "exit"}
            variants={container}
            className="description expandable"
            layout
          >
            <AnimatePresence>
              {expand &&
                grades.map((data, index) => (
                  <DesciptionText
                    key={`${index}+${data}+${id}`}
                    label={`Test${index + 1}`}
                    value={data}
                  />
                ))}
            </AnimatePresence>
          </motion.div>
          <motion.div className="tag-container" layout>
            <AnimatePresence key="tag" exitBeforeEnter>
              {tags.length > 0 && (
                <motion.div className="tag-section" layout>
                  {tags?.map((data, index) => (
                    <motion.span
                      className="tag"
                      key={`${index}+${data}+${id}`}
                      layout
                    >
                      {data}
                    </motion.span>
                  ))}
                </motion.div>
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
              onKeyDown={(e) => handleAddTag(e.key)}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);

export const renderStudent = (data: StudentType) => {
  return <StudentCard key={data.id} {...data} />;
};
