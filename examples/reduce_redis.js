/**
 * This code pattern is from mosca [https://github.com/mcollina/mosca/blob/master/lib/persistence/redis.js]
 */

var redis = require('redis');

var redisClient = redis.createClient();

/**
 * @pairs
 * @callback  this callback is invoked for each sucessfully set. Frankly, this is not a good design, Since
 * callback is supposed to be called at least once and at most once. Otherwise, it is no difference from
 * event listeners.
 */
function multi_set(pairs, callback) {

  function setter(multi, key) {
    multi.set(key, pairs[key], function(err, result) {
      callback(null, result);
    });
    return multi;
  }

  Object.keys(pairs).reduce(setter, redisClient.multi()).exec();
}

function main() {

  var pairs = {
    'trickycode:name': 'morgan',
    'trickycode:age': '100',
    'trickycode:gender': 'male'
  };

  multi_set(pairs, function(err, result) {
    console.log(result);
  });

}

main();
