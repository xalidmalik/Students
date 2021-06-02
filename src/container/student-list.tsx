import { StudentCard } from "components/student-card";
import { useStudent } from "hooks/useStudentContext";
import React, { memo } from "react";

export const StudentList = memo(() => {
  const { result } = useStudent();

  return (
    <main>
      {result.slice(0, 100).map((data) => (
        <StudentCard key={data.id} {...data} />
      ))}
    </main>
  );
});
