const app = getApp()

Component({
  options: {
    addGlobalClass: true,
  },

  // 0️⃣ type和value => {type, defaultValue}，默认类型设置为value类型，默认值为value，限制并转化传入类型为type。
  // 1️⃣ 如果只有type => 与5 相同， - 自动生成默认值，限制并转化传入类型
  // 2️⃣ 如果没有type，type设置为 null, 不去限制传入类型，默认类型设置为value类型，默认值为value。
  // 3️⃣ 如果是一个 {}， 默认类型设置为object，默认值为null，不去限制传入类型。
  // 4️⃣ 简化的定义方式 1.  myProperty1: true 默认类型为undefined 默认值为undefined，但是可接收传入的属性，不限制传入类型
  // 5️⃣ 简化的定义方式 2.  myProperty1: Boolean 默认类型为Boolean 默认值为false - 自动生成默认值，限制并转化传入类型
  // 6️⃣ 目前暂不考虑支持 optionalTypes

  properties: {
    count: {
      // 属性名
      type: Number,
      value: 0,
    },
  },
  pageLifetimes: {
    show() {
      console.log('pageLifetimes show')
    },
    hide() {
      console.log('pageLifetimes hide')
    },
    ready() {
      console.log('pageLifetimes ready')
    },
  },
  lifetimes: {
    created() {},
    attached() {
      // this.setData({
      //   count: this.data.count + 1,
      // })
    },
  },
  methods: {
    changeCount() {
      console.log(this.data.count)
      this.setData({
        count: this.data.count + 1,
      })
    },
  },
})
