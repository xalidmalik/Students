const url = "https://api.hatchways.io/assessment/students";

export async function fetchStudents() {
  return await fetch(url);
}
