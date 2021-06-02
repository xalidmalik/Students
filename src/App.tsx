import { StudentList } from "container/student-list";
import { useStudent } from "hooks/useStudentContext";
import React from "react";

function App() {
  const { name, setName, tag, setTag } = useStudent();

  return (
    <div className="app">
      <div className="input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="search-input"
          placeholder="Search by tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
      </div>
      <StudentList />
    </div>
  );
}

export default App;
