/* eslint-disable no-console */
Component({
  properties: {
    list: {
      type: Array,
      value: [],
    },
  },
  methods: {
    onTap() {
      const myEventDetail = {
        age: 18,
      } // detail对象，提供给事件监听函数
      const myEventOption = {
        bubbles: true,
        composed: true,
      } // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    },
  },
})
