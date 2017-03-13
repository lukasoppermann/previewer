const resolutionButtons = document.querySelectorAll('[data-resolution]')
var images
function setImageResolution (resolution, image) {
  const remote = require('electron').remote
  const win = remote.getCurrentWindow()
  let width = parseInt(image.getAttribute('data-width')) / parseInt(resolution)
  let height = parseInt(image.getAttribute('data-height')) / parseInt(resolution)
  image.width = width
  image.height = height

  win.setMySize(width, height)
  win.center()
}
resolutionButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    document.querySelector('[data-resolution][active]').removeAttribute('active')
    event.target.setAttribute('active','')
    images = document.querySelectorAll('.preview-images img')
    images.forEach((image) => {
      setImageResolution(event.target.getAttribute('data-resolution'), image)
    })
  })
})
