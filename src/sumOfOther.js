function sumOfOther(array) {
  const newArr = [];
  let sumOfAll = 0;
  const len = array.length;
  for (let i = 0; i < len; i += 1) {
    sumOfAll += array[i];
  }
  for (let i = 0; i < len; i += 1) {
    newArr[i] = sumOfAll - array[i];
  }
  return newArr;
}
