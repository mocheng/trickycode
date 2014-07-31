/**
 * @param str   string to be repeated
 * @param count repeat count
 * @return string that repeats {count} times
 */
function repeat(str, count) {
  return new Array(count+1).join(str);
}

console.log(repeat('abc', 1));
console.log(repeat('123', 2));
