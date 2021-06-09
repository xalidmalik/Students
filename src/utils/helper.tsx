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

export const getAvarage = (grades: string[]): number => {
  let totalGrade: number = grades
    .map((val) => parseInt(val))
    .reduce((prev, current) => prev + current);

  return totalGrade / grades.length;
};
