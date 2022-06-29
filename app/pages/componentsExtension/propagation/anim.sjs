let wrapperX = 0,
  wrapperY = 0

function pressmovewrapper(e, ins) {
  wrapperX += e.detail.deltaX
  wrapperY += e.detail.deltaY

  ins.selectComponent('#wrapper').setStyle({
    left: wrapperX + 'px',
    top: wrapperY + 'px',
  })
}

let innerX = 0,
  innerY = 0

function pressmoveinner(e, ins) {
  innerX += e.detail.deltaX
  innerY += e.detail.deltaY

  ins.selectComponent('#inner').setStyle({
    left: innerX + 'px',
    top: innerY + 'px',
  })
}

module.exports = {
  pressmovewrapper: pressmovewrapper,
  pressmoveinner: pressmoveinner,
}
