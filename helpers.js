const fs = require('fs');

displayContent = (items) => {
  for (var i=0; i<items.length; i++) {
      console.log(items[i]);
  }
};

readFolders = (path) => {
  return new Promise(function(resolve, reject) {
    fs.readdir(path, function(err, items) {
      if (err) {
        reject(err);
      } else {
        console.log(`${path} folder contains: `.blue);
        this.displayContent(items);
        resolve(items);
      }
    });
  });
};

readContent = (path1, path2) => {
  return Promise.all([readFolders(path1), readFolders(path2)]); 
}