/**
 * integer value on combo operator '-~' result in value+1.
 * undefined, null, NaA are all treated as zero.
 */
console.log(-~NaN);
console.log(-~null);
console.log(-~undefined);
console.log(-~0);
console.log(-~1);
console.log(-~2);
console.log(-~-1);
console.log(-~-2);
