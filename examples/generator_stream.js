/**
 * This file should be executed with '--harmony' flag.
 */
var Readable = require('stream').Readable;

var rs = new Readable();

/**
 * This is a generator.
 */
function* readStream() {
  for(var i=0; i<10; ++i) {
    yield i+'';
  }
  yield null;
};

var gen = readStream();

rs._read = function() {
  // next() returns an object with "value" and "done" keys. We only need value.
  this.push(gen.next().value);
};
rs.pipe(process.stdout);

