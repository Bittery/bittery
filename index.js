const {app, Menu, Tray, shell, nativeImage} = require('electron')
const {url} = require("./package")
const bittery = require("./bittery")
let tray = null
let image = null
app.on('ready', () => {
  image = nativeImage.createFromPath(`${__dirname}/icons/icon.png`)
  image.setTemplateImage(true)
  tray = new Tray(image)
  app.dock.hide()
  const contextMenu = Menu.buildFromTemplate([
	{label: "About", click: () => shell.openExternal(url)},
    {label: "Quit", click: app.quit}
  ])
  tray.setToolTip('Bittery')
  tray.setPressedImage(`${__dirname}/icons/iconHighlight.png`)
  tray.setContextMenu(contextMenu)
  bittery.start()
})