let rotateZ = 0
let initScale = 1,
  scale = 1
let translateX = 0,
  translateY = 0

function setStyle(ins) {
  ins.selectComponent('#test').setStyle({
    left: translateX + 'px',
    top: translateY + 'px',
    transform: 'rotateZ(' + rotateZ + 'deg) scale(' + scale + ')',
  })
}

function rotate(e, ins) {
  let angle = e.detail.angle
  rotateZ += angle
  setStyle(ins)
}

function multitouchstart(e, ins) {
  initScale = scale
}

function pinch(e, ins) {
  scale = initScale * e.detail.zoom
  setStyle(ins)
}
function pressmove(e, ins) {
  translateX += e.detail.deltaX
  translateY += e.detail.deltaY
  setStyle(ins)
}

module.exports = {
  rotate: rotate,
  multitouchstart: multitouchstart,
  pinch: pinch,
  pressmove: pressmove,
}
