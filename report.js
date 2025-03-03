const newman = require('newman');
require('dotenv').config();


newman.run(
  {
    //collection: 'https://documenter.getpostman.com/view/40659331/2sAYQghoo6?access_key=${process.env.secretKey}',
    collection: require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1, 
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to newman/ in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
