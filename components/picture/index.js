import Render from './index.rjs'
Component({
  lifetimes: {
    created: function () {
      this.render = new Render(this)
    },
    ready: function (e) {
      this.render.renderCar()
    },
  },
})
