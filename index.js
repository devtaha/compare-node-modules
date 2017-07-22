const colors = require('colors');

require('./helpers');

this.content = {
  folder1: [],
  folder2: []
};

if (process.argv.length >= 4) {
  let folder1 = process.argv[2];
  let folder2 = process.argv[3];

  readContent(folder1, folder2)
  .then(result => {

    // compare now

    let firstContent = result[0];
    let secondContent = result[1];
    let commonItems = [];
    let missingIn1st = [];
    let missingIn2nd = [];

    firstContent.forEach(function(fItem) {
      if (secondContent.indexOf(fItem) !== -1) {
        commonItems.push(fItem);
      } else {
        missingIn2nd.push(fItem);
      }
    });

    missingIn1st = secondContent.filter(value => {
      return commonItems.indexOf(value) === -1;
    });

    console.log('Common Items: '.green);
    displayContent(commonItems);

    console.log('Missing in 1st: '.red);
    displayContent(missingIn1st);

    console.log('Missing in 2nd: '.red);
    displayContent(missingIn2nd);
  });
}