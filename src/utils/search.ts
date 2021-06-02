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
  // eslint-disable-next-line array-callback-return
  array.filter((student) => {
    let joinedTag = student.tags.join("");
    if (joinedTag.includes(trimmedTag)) {
      findedItem.push(student);
    }
  });
  return findedItem;
};

// export let fitering = (
//   name: string = "",
//   tag: string = "",
//   array: StudentType[]
// ) => {
//   let copyArray = [...array];
//   let findedItem: StudentType[] = [];

//   // Define Params
//   let trimmedName = getTrimmedString(name);
//   let trimmedTag = getTrimmedString(tag);

//   // Prepare Array
//   copyArray.filter((student) => {
//     let arrayFullname = getTrimmedFullname(student.firstName, student.lastName);
//     let joinedTag = student.tags.join("");
//     console.log("joined", joinedTag.includes(trimmedTag));
//     if (joinedTag.includes(trimmedTag)) {
//       findedItem.push(student);
//     }
//     // if (arrayFullname.includes(trimmedName)) {
//     //   findedItem.push(student);
//     // }

//     return {};
//   });
//   return findedItem;
// };
