import { App } from "App";
import { StudentProvider } from "hooks/useStudentContext";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <StudentProvider>
      <App />
    </StudentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
