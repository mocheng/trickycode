/**
 * This is my solution to goal challenge [https://github.com/eatnumber1/goal]
 */

function g(arg) {
  var str = 'g';

  function _(arg) {
    if (arg === 'al') {
      return str + 'oal';
    }

    str += 'o';
    return _;
  }

  if (arg) {
    return str + arg;
  } else {
    return _;
  }

}

console.log( g('al') );
console.log( g()('al') );
console.log( g()()('al') );
console.log( g()()()('al') );
console.log( g()()()()('al') );


