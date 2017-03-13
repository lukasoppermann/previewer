const electron = require('electron')
const BrowserWindow = electron.BrowserWindow

let options = {
  width: 800,
  height: 600,
  center: true,
  index: 'file://' + process.cwd() + '/app/quickview.html',
  resizable: false,
  alwaysOnTop: false,
  titleBarStyle: 'hidden-inset'
}

function createWindow () {
  return new BrowserWindow(options)
}

module.exports = {
  createWindow: createWindow,
  options: options
}
