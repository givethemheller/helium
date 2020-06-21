// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs-extra");

// assume this directory has a lot of files and folders
// With a callback:
fs.emptyDir("./dist", err => {
  if (err) {
    console.error(err);
    process.exit();
  }
  console.log("dist cleared!");
  process.exit();
});
