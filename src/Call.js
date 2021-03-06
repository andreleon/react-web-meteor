import Data from './Data';

const call = function(eventName) {
  var args = Array.prototype.slice.call(arguments, 1);
  if (args.length && typeof args[args.length - 1] === "function") {
    var callback = args.pop();
  }


  const id = Data.ddp.method(eventName, args);
  Data.calls.push({
    id: id,
    callback: callback
  });
}

export default call;