import { useEffect, useState } from "react";
import { fetchStudents } from "utils/fetch-students";
import { searchName, searchTag } from "utils/search";
import { StudentType } from "utils/types";

export const useStudentHandler = ({
  tag,
  name,
}: {
  tag: string;
  name: string;
}) => {
  const [students, setStudents] = useState<StudentType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [result, setResult] = useState<StudentType[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchStudents()
      .then((response) => response.json())
      .then(({ students }: { students: StudentType[] }) => {
        setStudents(
          students.map((data) => {
            return { ...data, tags: [] };
          })
        );
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    const Searched = searchName(name, students);
    console.log("name", Searched);
    const finded = searchTag(tag, Searched);
    console.log("tag", finded);

    setResult(finded);
  }, [students, name, tag]);

  return { students, result, isLoading, error, setStudents };
};
