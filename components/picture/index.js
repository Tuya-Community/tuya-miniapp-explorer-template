Component({
  data: {},
  lifetimes: {
    attached: function () {
      this.position = {
        x: 150,
        y: 150,
        vx: 2,
        vy: 2,
      }

      this.drawBall()
      this.interval = setInterval(this.drawBall, 17)
    },
    detached: function () {
      clearInterval(this.interval)
    },
  },
  methods: {
    drawBall() {
      const p = this.position
      p.x += p.vx
      p.y += p.vy
      if (p.x >= 300) {
        p.vx = -2
      }
      if (p.x <= 7) {
        p.vx = 2
      }
      if (p.y >= 300) {
        p.vy = -2
      }
      if (p.y <= 7) {
        p.vy = 2
      }

      const context = ty.createCanvasContext('myCanvas')

      function ball(x, y) {
        context.beginPath(0)
        context.arc(x, y, 5, 0, Math.PI * 2)
        context.setFillStyle('#1aad19')
        context.setStrokeStyle('rgba(1,1,1,0)')
        context.fill()
        context.stroke()
      }

      ball(p.x, 150)
      ball(150, p.y)
      ball(300 - p.x, 150)
      ball(150, 300 - p.y)
      ball(p.x, p.y)
      ball(300 - p.x, 300 - p.y)
      ball(p.x, 300 - p.y)
      ball(300 - p.x, p.y)

      context.draw()
    },
    drawImage: function () {
      const context = ty.createCanvasContext('myCanvas')
      let url =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50MCIgeDE9IjAlIiB4Mj0iMTAwJSIgeTE9IjAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkZDMDAiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTglIiBzdG9wLWNvbG9yPSIjQzNGRjQ1IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjM0JSIgc3RvcC1jb2xvcj0iIzM5RERGQyIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI1MSUiIHN0b3AtY29sb3I9IiM2MzgyRkMiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iNjclIiBzdG9wLWNvbG9yPSIjRkYzRkQ1IiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjgyJSIgc3RvcC1jb2xvcj0iI0ZFNDkxRiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZCOTAwIiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQxIiB4MT0iMCUiIHgyPSIwJSIgeTE9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSIyNCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC45Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNncmFkaWVudDApIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjZ3JhZGllbnQxKSIvPjwvc3ZnPg=='
      context.drawImage(url, 0, 0, 305, 305)
      context.draw()
    },
    start: function (e) {
      console.log('canvas touchstart', e)
    },
    longtap: function (e) {
      console.log('canvas longtap', e)
    },
    error: function (e) {
      console.log('canvas error', e)
    },
  },
})
