const fs = require('fs');

// fs.writeFile('example.txt', 'this is an example', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('File created');
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         })
//     }
// });

// fs.rename('example.txt', 'example2.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File renamed');
//     }
// });

// fs.appendFile('example2.txt', 'Some data', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Appended to file');
//     }
// });

fs.unlink('example2.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File deleted')
    }
})