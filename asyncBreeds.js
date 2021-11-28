// import filesystem
const fs = require('fs');

// CHANGE 2: Moved the console.log into a new function:
const output = (data) => {
	console.log("Return Value: ", data);
};

const breedDetailsFromFile = (breed, callbackDone) => {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    //if (!error) return data;
    // CHANGE 1: SOLUTION: Instead, a callback should be passed in, and it will be given the data.
    if (!error) callbackDone(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
	console.log("breedDetailsFromFile: done");
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
const bombay = breedDetailsFromFile('Bombay', output);
