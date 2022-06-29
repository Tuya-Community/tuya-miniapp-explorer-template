Component({
  properties: {
    a: {
      type: Number,
      value: 0,
    },
  },
  data: {
    size: 1,
    b: 1
  },
  lifetimes: {
    created: function () {
      console.log('ff-canvas created')
    },
    attached: function (e) {
      console.log('ff-canvas attached')
    },
  },
  methods: {
    changeData: function () {
      this.setData({
        size: this.data.size + 1
      })
    },
    getData: function (params) {
   			this.setData({
				b: this.data.b + 1
			})
    }
  }
})