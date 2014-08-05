/**
 * This idea is from cubism homepage [http://square.github.io/cubism/]
 */

/**
 * @return   random number distributed like cosine in range [-10, 10].
 */
var random = (function () {
  var value = 0,
    i = 0;
  return function() {
    return value = Math.max(-10, Math.min(10, value + .8 * Math.random() - .4 + .2 * Math.cos(i += .2)));
  }
}());

// output streamlined random bar.
setInterval(function() {
  var random_length = Math.floor((random()*5+50));
  console.log(new Array(random_length).join('-'));
}, 1e2);
