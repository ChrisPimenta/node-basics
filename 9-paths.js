const path = require('path');

// Depending on the Operating System on the server could be '/' or '\' etc.
console.log(path.sep);

// Normalizes the path name, ignores slashes and applies the correct one automatically
const filePath = path.join(path.sep, '/content/', '/subfolder\\', 'test.txt');
console.log(filePath);


// returns test.txt
const base = path.basename(filePath);
console.log(base);

// Absolute path - gives the full PATH - BEST way for live deploys
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);