var Readable = require('stream').Readable;
var Fibers = require('fibers');

var rs = new Readable();

var readStream = Fibers(function() {
  for(var i=0; i<10; ++i) {
    Fibers.yield(i+'');
  }
  Fibers.yield(null);
});

rs._read = function() {
  this.push(readStream.run());
};
rs.pipe(process.stdout);

