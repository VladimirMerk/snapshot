const path = require('path');
const {spawn} = require('child_process');

const mksnapshot = path.join(__dirname, 'node_modules/electron-mksnapshot/bin/mksnapshot');
const outputPath = path.join(
  __dirname,
  'node_modules/electron/dist/Electron.app',
  'Contents/Frameworks/Electron Framework.framework/Versions/Current/Resources/snapshot_blob.bin'
);

function createSnapshot(srcPath) {
  return new Promise((resolve, reject) => {
    let done = false;
    const child = spawn(
      mksnapshot,
      ['--no-use_ic', srcPath, '--startup-blob', outputPath],
      {encoding: 'utf8', stdio: 'inherit'},
    );

    child.on('exit', (code, signal) => {
      if (done) {
        return;
      }
      done = true;

      if (signal !== null) {
        reject(new Error(`mksnapshot terminated by signal ${signal}`));
      } else if (code !== 0) {
        reject(new Error(`mksnapshot exited with status ${code}`));
      } else {
        resolve();
      }
    })
  });
}

module.exports = {createSnapshot};
