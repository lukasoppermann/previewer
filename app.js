const electron = require('electron')
const {app, BrowserWindow} = electron
const menu = require('./app/menu')

app.commandLine.appendSwitch('enable-experimental-web-platform-features');

const path = require('path')
const url = require('url')

let win
app.on('ready', function () {
    menu()
    win = require('./app/window').createWindow()

    win.setMySize = function(setWidth, setHeight){
      var {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
      setHeight += 40

      if(setWidth > width){
        setWidth = width
      }
      if(setHeight >= height){
        setHeight = height - 10
      }
      win.setSize(setWidth, setHeight)
    }
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'app/preview.html'),
        protocol: 'file:',
        slashes: true
    }))
})
