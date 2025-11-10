// db later, until then ...
const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');
const filePath = path.join(rootDir, 'greyhoundData', 'fosters.json');

// helper fcn but not for utils. just for DRY
const getFostersFromGreyhoundData = (cb) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

// structure of the data.
module.exports = class Foster {
  constructor(name, imageUrl, bio, isCatsafe) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.bio = bio;
    this.isCatsafe = isCatsafe;
  }

  save() {
    getFostersFromGreyhoundData((fosters) => {
      // this , so make sure arrow fu ction
      fosters.push(this);

      // get first entry in.
      fs.writeFile(filePath, JSON.stringify(fosters), (err) => {
        console.log(err);
      });
    });
  }

  // call on class itself, and not an instantiated obj
  // callback is fcn in controller to tell what to do with the parsed filecontent.
  static fetchAll(cb) {
    getFostersFromGreyhoundData(cb);
  }
};
