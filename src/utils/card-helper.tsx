export function getFullname(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.toUpperCase();
}

export function getAvarage(grades: string[]): number {
  let totalGrade: number = grades
    .map((val) => parseInt(val))
    .reduce((prev, current) => prev + current);

  return totalGrade / grades.length;
}
