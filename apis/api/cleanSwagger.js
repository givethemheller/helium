var fs = require('fs')
fs.readFile('./swagger/swagger.yaml', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/%22/g, '')
    .replace(/~OR~/g, ".")
    .replace(/__/g, "");

  fs.writeFile('./swagger/swagger.yaml', result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});