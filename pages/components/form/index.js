Page({
  data: {
    resultContent: '',
    resultData: [
      {
        name: 'switch',
        value: '',
      },
      {
        name: 'slider',
        value: '',
      },
      {
        name: 'CheckboxGroup',
        value: '',
      },
      {
        name: 'RadioGroup',
        value: '',
      },
      {
        name: 'input',
        value: '',
      },
      {
        name: 'textarea',
        value: '',
      },
    ],
  },

  onLoad: () => {},

  handleSubmit(ev) {
    const value = ev.detail.value
    const resultData = []
    for (let name in value) {
      resultData.push({
        name,
        value: value[name],
      })
    }
    this.setData({
      resultData,
    })
  },

  handleReset(ev) {
    const value = ev.detail.value
    const resultData = []
    for (let name in value) {
      resultData.push({
        name,
        value: value[name],
      })
    }
    this.setData({
      resultData,
    })
  },

  handleTextareaInput(ev) {
    console.log('textarea input event ', ev)
  },
})
