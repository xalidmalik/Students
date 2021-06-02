import { createContext, Dispatch, FC, useContext } from "react";
import { StudentType } from "utils/types";
import { useStudentHandler } from "./useStudentHandler";

const StudentContext =
  createContext<
    | {
        students: StudentType[];
        isLoading: boolean;
        error: any;
        setStudents: Dispatch<React.SetStateAction<StudentType[]>>;
      }
    | undefined
  >(undefined);

const StudentProvider: FC<{ tag: string; name: string }> = ({
  children,
  tag,
  name,
}) => {
  const value = useStudentHandler({ tag, name });

  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
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
