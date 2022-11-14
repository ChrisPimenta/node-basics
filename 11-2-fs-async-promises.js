const { readFile, writeFile } = require('fs').promises

// // You can turn node async functions into promises automatically with promisify! Above 1 line does all this code
// const { readFile, writeFile } = require('fs')
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const util = require('util')

// // Turns into this v
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grendae.txt', `This is awesome ${first}, ${second}`)
    } catch (error) {
        console.log(error);
    }
}

start();