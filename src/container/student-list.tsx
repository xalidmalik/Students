import { StudentCard } from "components/student-card";
import React from "react";
import { StudentType } from "utils/types";

type StudentListType = {
  students: StudentType[];
};

export const StudentList = ({ students }: StudentListType) => {
  return (
    <main>
      {students.map((data) => (
        <StudentCard key={data.id} {...data} />
      ))}
    </main>
  );
};
