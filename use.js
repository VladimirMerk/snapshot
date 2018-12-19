const util = require('util');

if (typeof main !== 'undefined') {
	main().then(
    result => {
      console.log(util.inspect(result));
      process.exit(0);
    },
    err => {
      console.error(err);
      process.exit(1);
    }
  );
} else {
  console.error('No snapshot loaded.');
	console.error('Your snapshot script must define a top-level function called "main".');
  process.exit(1);
}
