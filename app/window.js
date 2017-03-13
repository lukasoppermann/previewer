const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const path = require('path')

let options = {
  width: 800,
  height: 600,
  center: true,
  index: 'file://' + process.cwd() + '/app/quickview.html',
  resizable: false,
  alwaysOnTop: false,
  titleBarStyle: 'hidden-inset',
  icon: path.join(__dirname, 'assets/icons/png/256x256.png')
}

function createWindow () {
  return new BrowserWindow(options)
}

module.exports = {
  createWindow: createWindow,
  options: options
}
