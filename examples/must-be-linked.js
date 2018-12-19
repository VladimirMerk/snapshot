// Run with: run-in-snapshot --link examples/must-be-linked.js

function main() {
  console.log("using console, which doesn't exist at snapshot generation time");
}

exports.main = main;
