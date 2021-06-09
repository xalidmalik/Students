const url = "https://api.hatchways.io/assessment/students";

export const fetchStudents = async () => {
  return await fetch(url);
};
