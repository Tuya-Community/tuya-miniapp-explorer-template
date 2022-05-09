Page({
  data: {
    level: "未获取",
    isCharging: "未获取"
  },

  getBatteryInfo() {
    const that = this
    ty.getBatteryInfo({
      complete: (res) => {
        console.log(`getBatteryInfo ====== complete`, JSON.stringify(res))
        const msg = res.isCharging ? '充电中' : '使用电池中';
        console.log(`getBatteryInfo ====== complete`, msg)
        that.setData({
          level: res.level,
          isCharging: msg,
        })
      },
    })
  }
})