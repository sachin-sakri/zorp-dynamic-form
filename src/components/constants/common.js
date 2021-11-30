export const createObjectWithArray = (arr) => {
  const obj = {};
  arr.forEach((item) => {
    obj[item.title] = ' ';
  });
  return obj;
};

export const iterateThroughObject = (objs) => {
  const dataObject = {};
  for (obj in objs) {
    dataObject[objs[obj]?.title] = '';
  }
  return dataObject;
};
