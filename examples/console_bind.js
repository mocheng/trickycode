/**
 * This trick is to avoid explict anonymous funciton declaration.
 */

setTimeout(function() {
  console.log('after 100ms');
}, 100);

/**
 * It works like above code.
 * Actually, Fucntion.bind returns a new funciton wrapping that funciton.
 */
setTimeout(console.log.bind(console, 'after 200ms'), 200);

