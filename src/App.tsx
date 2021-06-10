import { renderStudent } from "components/student-card";
import { AnimateSharedLayout } from "framer-motion";
import { useStudent } from "hooks/useStudentContext";
import React from "react";

export const App = () => {
  const { name, setName, tag, setTag, result } = useStudent();

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
      <main>
        <AnimateSharedLayout>{result.map(renderStudent)}</AnimateSharedLayout>
      </main>
    </div>
  );
};
