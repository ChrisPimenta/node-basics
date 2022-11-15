const { createReadStream } = require('fs');
// Use this for files which could be large and need to be read/written in chunks rather.

// high water mark is how big you want to read the chunks. So a file of 180kb would be read 3 times by default or with 90000 watermark only twice
const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });

// Reads it in chunks instead of try the whole thing in one go! For big files you cant store into variable
// Buffer size default is 64kb... so chunks of that size will come
stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err);
})