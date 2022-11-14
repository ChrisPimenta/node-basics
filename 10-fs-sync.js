// File System(fs) module sync or async. For now we do Sync.
// Reads should almost always rather be ASYNC otherwise the node app is blocked
const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// Create new file (combines the previous 2 files)
// If the file does not exist node will create it. If it does it will overwrite it.
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`);

// Let me append some stuff each run
writeFileSync(
    './content/result-sync-append.txt',
    `Here is some more`,
    { flag: 'a' }
);

console.log('done with this task')
console.log('starting with next task');
