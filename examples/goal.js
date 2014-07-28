/**
 * This is my solution to goal challenge [https://github.com/eatnumber1/goal]
 */
function g() {
  var str = 'go';

  return function _(arg) {
    if (arg === 'al') {
      return str + 'al';
    }

    str += 'o';
    return _;
  }
}

console.log( g()('al') );
console.log( g()()('al') );
console.log( g()()()('al') );
console.log( g()()()()('al') );
