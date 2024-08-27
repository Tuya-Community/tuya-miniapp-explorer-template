Page({
  data: {
    json: i18n.t('bluetoothAdapterStateChangeTips'),
  },
  onLoad() {
    ty.onBluetoothAdapterStateChange((res) => {
      this.setData({
        json: JSON.stringify(res),
      })
    })
  },
  onUnload() {
    ty.offBluetoothAdapterStateChange()
  },

  offBluetoothAdapterStateChange() {
    ty.showToast({ title: 'offBluetoothAdapterStateChange' })
    ty.offBluetoothAdapterStateChange((res) => {
      this.setData({
        json: JSON.stringify(res),
      })
    })
  },
})
