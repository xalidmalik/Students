import { StudentCard } from "components/student-card";
import { useStudent } from "hooks/useStudentContext";
import React, { memo } from "react";

export const StudentList = memo(() => {
  const { students } = useStudent();

  return (
    <main>
      {students.map((data) => (
        <StudentCard key={data.id} {...data} />
      ))}
    </main>
  );
});
