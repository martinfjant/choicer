// Here be filter
export const filterByValue = (data: Array<any>, value: string | number) => {
  const stuff = data.filter(x => deepObjectIncludes(x, value));
  return stuff;
};

/* So, this is a little bit overkill, but I wanted to be able to filter on any value,
   no matter where it was. This can be used to filter on any value if need be, and it
   is recursive too! */
   
const deepObjectIncludes = (
  obj: object | any,
  value: string | number
): boolean => {
  /*Checks if a direct property of the object is what we want */
  if (Object.values(obj).includes(value)) {
    return true;
  }
  /* If not, goes one level deeper */
  /* Create an array of the keys of the current object */
  return (
    Object.keys(obj)
      /*Map over those keys, checking if their value is an object*/
      /*Also, because javascript is weird, null is an object, so we need to check for that too */
      .map(key => {
        if (typeof obj[key] == 'object' && obj[key] !== null) {
          /*If it is an object, run the function recursively*/
          return deepObjectIncludes(obj[key], value);
        } else {
          /*If it's not an object, compare the value to the one we're looking for and send it back*/
          return obj[key] === value;
        }
      })
      /* Reduce the produced array of boolenas to true if it contain true, or false othersie */
      .reduce((prev, curr) => prev || curr)
  );
};
