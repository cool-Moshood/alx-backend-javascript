export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const newArray = [];

  for (const x of array) {
    newArray[i] = appendString + x;
    i += 1;
  }
  return newArray;
}
