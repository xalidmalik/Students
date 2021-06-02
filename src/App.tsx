import { StudentList } from "container/student-list";
import { StudentProvider } from "hooks/useStudentContext";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  return (
    <StudentProvider name={name} tag={tag}>
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
    </StudentProvider>
  );
}

export default App;
