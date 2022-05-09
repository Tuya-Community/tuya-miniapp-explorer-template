var rotateZ = 0
var initScale = 1,
  scale = 1
var translateX = 0,
  translateY = 0

function setStyle(ins) {
  ins.selectComponent('#avatar').setStyle({
    transform:
      'rotateZ(' +
      rotateZ +
      'deg) scale(' +
      scale +
      ') translateX(' +
      translateX +
      'px) translateY(' +
      translateY +
      'px)',
  })
}

function multitouchstart(e, ins) {
  initScale = scale
}

function pinch(e, ins) {
  scale = initScale * e.detail.zoom
  setStyle(ins)
}

function pressmove2(e, ins) {
  console.log('press move2')
  translateX += e.detail.deltaX
  translateY += e.detail.deltaY

  setStyle(ins)
}

function pressmove(e, ins) {
  console.log('press move')
  translateX += e.detail.deltaX
  translateY += e.detail.deltaY

  setStyle(ins)
}

function touchstart(e, ins) {
  ins.selectComponent('#avatar').removeClass('avatar-animation')
}

function touchend(e, ins) {
  if (e.detail.touches.length > 0) return
  ins.selectComponent('#avatar').addClass('avatar-animation')
  if (scale < 0.7 || scale > 3.5) {
    ins.callMethod('vibrate')
  }
  if (scale < 0.7) {
    scale = 0.7
  }
  if (scale > 3.5) {
    scale = 3.5
  }
  translateY = translateX = 0
  setStyle(ins)
}

module.exports = {
  multitouchstart: multitouchstart,
  pinch: pinch,
  pressmove: pressmove,
  pressmove2: pressmove2,
  touchstart: touchstart,
  touchend: touchend,
}
