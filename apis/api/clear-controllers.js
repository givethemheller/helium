// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs-extra");

// assume this directory has a lot of files and folders
// With a callback:
fs.emptyDir("./src/generated-controllers", err => {
  if (err) {
    console.error(err);
  }
  console.log("api cleared");
  setTimeout(process.exit(), 2000);
});
