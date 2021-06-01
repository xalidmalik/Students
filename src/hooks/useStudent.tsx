import { useEffect, useState } from "react";
import { fetchStudents } from "utils/fetch-students";
import { StudentType } from "utils/types";

export const useStudent = () => {
  const [students, setStudents] = useState<StudentType[]>([]);

  useEffect(() => {
    fetchStudents()
      .then((response) => response.json())
      .then(({ students }: { students: StudentType[] }) =>
        setStudents(students)
      );
  }, []);
  return { students };
};
