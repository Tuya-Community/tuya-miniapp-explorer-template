Component({
  click: function () {
    this.triggerEvent("xlComponentClick", void 0, {
      bubbles: true,
    })
  }
})
