import { StudentType } from "./types";

export const getFullname = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`.toUpperCase();
};
export const getTrimmedFullname = (
  firstName: string,
  lastName: string
): string => {
  return getTrimmedString(`${firstName} ${lastName}`);
};

export const getTrimmedString = (value: string) => {
  return value
    .split(" ")
    .map((b) => b && b.toLowerCase().trim())
    .join("");
};

export const addTagCurrentStudent = (
  students: StudentType[],
  id: string,
  tag: string
) => {
  let shallowCopy: StudentType[] = JSON.parse(JSON.stringify(students));
  let currentStudent = shallowCopy.find((data: StudentType) => data.id === id);
  currentStudent?.tags.push(tag);
  return shallowCopy;
};

export const getAvarage = (grades: string[]): number => {
  let totalGrade: number = grades
    .map((val) => parseInt(val))
    .reduce((prev, current) => prev + current);

  return totalGrade / grades.length;
};
