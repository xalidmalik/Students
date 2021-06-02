import { createContext, Dispatch, FC, useContext, useState } from "react";
import { StudentType } from "utils/types";
import { useStudentHandler } from "./useStudentHandler";

const StudentContext =
  createContext<
    | {
        students: StudentType[];
        result: StudentType[];
        isLoading: boolean;
        error: any;
        setStudents: Dispatch<React.SetStateAction<StudentType[]>>;
        name: string;
        setName: Dispatch<React.SetStateAction<string>>;
        tag: string;
        setTag: Dispatch<React.SetStateAction<string>>;
      }
    | undefined
  >(undefined);

const StudentProvider: FC = ({ children }) => {
  const [name, setName] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const value = useStudentHandler({ tag, name });

  return (
    <StudentContext.Provider value={{ ...value, name, setName, tag, setTag }}>
      {children}
    </StudentContext.Provider>
  );
};

function useStudent() {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error("useStudentProvider must be used within a StudentProvider");
  }
  return context;
}

export { StudentProvider, useStudent };
