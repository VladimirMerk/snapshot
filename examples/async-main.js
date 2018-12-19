// Run with: run-in-snapshot examples/async-main.js

async function main() {
  await new Promise(resolve => resolve());
  return 'resolved';
}
