export const mapKeys = (array, key) => {
  return (
    array.reduce((newObj, currentValue) => {
      newObj[currentValue[key]] = currentValue;
      return newObj;
    }, {})
  );
};