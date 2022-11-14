// File System(fs) module sync or async. For now we do ASYNC
// User is not blocked from the read.
const { readFile, writeFile } = require('fs');

console.log('start');
// We show callback hell here - because we need to wait for each one to finish to then execute the callback.
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;

        writeFile('./content/result-async-append.txt', `Here is some more`, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log('done with this task')
        })
    })
})

console.log('starting with next task');