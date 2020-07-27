const fs = require('fs'),
      zlib = require('zlib'),
      gunzip = zlib.createGunzip(),
      readStream = fs.createReadStream('example1.txt.gz'),
      writeStream = fs.createWriteStream('uncompressed.txt');
readStream.pipe(gunzip).pipe(writeStream);

