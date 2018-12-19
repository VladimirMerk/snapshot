if (typeof snapshotResult !== 'undefined') {
	snapshotResult.setGlobals(global, process, global, {}, console, require);
	global.main = snapshotResult.customRequire(process.argv[2]).main;
}

const util = require('util');

if (typeof main !== 'undefined') {
	main().then(
    result => {
			if (result !== undefined && result !== null) {
      	console.log(util.inspect(result));
			}
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
