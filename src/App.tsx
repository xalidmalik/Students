import { StudentList } from "container/student-list";
import { useStudent } from "hooks/useStudent";
import React from "react";

function App() {
  const { students } = useStudent();

  return (
    <div className="App">
      <StudentList students={students} />
    </div>
  );
}

export default App;
