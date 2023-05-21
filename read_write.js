const fs = require('fs');

fs.readFile('/Users/tuanhieptran/Documents/Stuffs/Huong/nodejs-webapp-by-hwuong/file1.txt', (err, data) => {
  if (err) throw err;

  console.log(data.toString());
});