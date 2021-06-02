import { StudentType } from "./types";

export let searchName = (searchQuery: string, array: StudentType[]) => {
  let findedItem: StudentType[] = [];
  let searchWords = searchQuery
    .split(" ")
    .map((b) => b && b.toLowerCase().trim())
    .join("");
  array.filter((d) => {
    let data = d.firstName + d.lastName;
    let dataWords = data
      .split(" ")
      .map((b) => b && b.toLowerCase().trim())
      .join("");
    if (dataWords.includes(searchWords)) {
      findedItem.push(d);
    }
    return {};
  });
  return findedItem;
};

export let searchTag = (searchTag: string, array: StudentType[]) => {
  // eslint-disable-next-line array-callback-return
  const finded = array.filter((data) => {
    let findTag = data.tags.filter((d) => d.includes(searchTag));
    if (findTag.length > 0) return findTag;
  });
  return searchTag ? finded : array;
};
