export function getFullname(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.toUpperCase();
}
export function getTrimmedFullname(
  firstName: string,
  lastName: string
): string {
  return getTrimmedString(`${firstName} ${lastName}`);
}

export function getTrimmedString(value: string) {
  return value
    .split(" ")
    .map((b) => b && b.toLowerCase().trim())
    .join("");
}

export function getAvarage(grades: string[]): number {
  let totalGrade: number = grades
    .map((val) => parseInt(val))
    .reduce((prev, current) => prev + current);

  return totalGrade / grades.length;
}
