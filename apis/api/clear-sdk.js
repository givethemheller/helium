// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs-extra");

// assume this directory has a lot of files and folders
// With a callback:
fs.emptyDir("../../sdks/helium-sdk/src/api", err => {
  if (err) {
    console.error(err);
    process.exit();
  }
  console.log("api cleared");
  fs.emptyDir("../../sdks/helium-sdk/src/model", err => {
    if (err) {
      console.error(err);
      process.exit();
    }

    console.log("models cleared!");
    process.exit();
  });
});
