// const EventEmitter = require('events');

// class Job extends EventEmitter {}
// job = new Job();

// job.on('done', function(timeDone){
//     console.log('Job was pronounced done at', timeDone);
// });

// job.emit('done', new Date());
// job.removeAllListeners();

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(numbers)); //output 6