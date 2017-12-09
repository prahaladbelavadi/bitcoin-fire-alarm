var inherits = require('util').inherits;
var EventEmitter = require('events').EventEmitter;

function MyService(options) {
  EventEmitter.call(this);
  this.node = options.node;
}
inherits(MyService, EventEmitter);

MyService.dependencies = ['bitcoind'];

MyService.prototype.start = function(callback) {
  setImmediate(callback);
};

MyService.prototype.stop = function(callback) {
  setImmediate(callback);
};

MyService.prototype.getAPIMethods = function() {
  return [];
};

MyService.prototype.getPublishEvents = function() {
  return [];
};

module.exports = MyService;
