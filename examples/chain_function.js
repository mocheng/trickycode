/**
 * This code pattern is from kue [https://github.com/LearnBoost/kue/blob/master/lib/http/routes/json.js].
 */

function get(obj) {

  var pending = 0
    , res = {}
    , done
    , callback;

  return function _(arg) {
    //console.log('enter _');

    switch (typeof arg) {
      case 'function':
        callback = arg;
        break;

      case 'string':
        ++ pending;
        obj(arg, function(err, result) {
          if (done) return;

          if (err) {
            done = true;
            return callback(err);
          }

          res[arg] = result;

          --pending || callback(null, res);
        });

        break;
    }

    return _; // return this function to be chain-able
  };
}

function mockIO(arg, callback) {
  //console.log('enter mockIO');
  setTimeout(function() {
    callback(null, arg + ' tricky');
  }, 100);
}

function main() {
  get(mockIO)
    ('hello')
    ('world')
    (function(err, data) {
      console.log(data);
    });
}

main();
