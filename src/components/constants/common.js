/*
  AUTHOR : SACHIN SAKRI
  DATE : 30/11/2020
  DESCRIPTION : Here two different functions are used to create a dynamic objects and arrays
*/

//function is used to create a dynamic initial state object
export const createObjectWithArray = (arr) => {
  const obj = {};
  arr.forEach((item) => {
    obj[item.title] = " ";
  });
  return obj;
};

//function is used to create a dynamic object while looping through array of objects
export const iterateThroughObject = (objs) => {
  const dataObject = {};
  for (let obj in objs) {
    dataObject[objs[obj]?.title] = "";
  }
  return dataObject;
};
