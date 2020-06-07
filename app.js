const fs = require('fs');

// fs.mkdir('tutorial', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.writeFile('./tutorial/example.txt', '123', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('Dir & file created');
//             }
//         })
//     }
// })

// fs.unlink('./tutorial/example.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.rmdir('tutorial', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('folder & file deleted');
//             }
//         })
//     }
// })

fs.readdir('folder', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        for (let file of files) {
            fs.unlink('./folder/' + file, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('file ' + file + ' deleted');
                }
            })
        }
    }
})

