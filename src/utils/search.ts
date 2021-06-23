import { getTrimmedFullname, getTrimmedString } from "./helper";
import { StudentType } from "./types";

export let searchName = (name: string, array: StudentType[]) => {
  let findedItem: StudentType[] = [];
  let trimmedName = getTrimmedString(name);

  array.filter((student) => {
    let arrayFullname = getTrimmedFullname(student.firstName, student.lastName);
    if (arrayFullname.includes(trimmedName)) {
      findedItem.push(student);
    }
    return {};
  });
  return findedItem;
};

export let searchTag = (tag: string, array: StudentType[]) => {
  let findedItem: StudentType[] = [];
  let trimmedTag = getTrimmedString(tag);
  array.filter((student) => {
    let joinedTag = student.tags.join("").toLowerCase();
    if (joinedTag.includes(trimmedTag)) {
      findedItem.push(student);
    }
    return {};
  });
  return findedItem;
};
