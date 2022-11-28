Page({
  data: {
    showTopTips: false,

    radioItems: [
      { name: 'cell standard', value: '0', checked: true },
      { name: 'cell standard', value: '1' },
    ],
    checkboxItems: [
      { name: 'standard is dealt for u.', value: '0', checked: true },
      { name: 'standard is dealicient for u.', value: '1' },
    ],
    items: [
      { name: 'USA', value: 'USA' },
      { name: 'CHN', value: 'CHN', checked: 'true' },
      { name: 'BRA', value: 'BRA' },
      { name: 'JPN', value: 'JPN' },
      { name: 'ENG', value: 'ENG' },
      { name: 'TUR', value: 'TUR' },
    ],

    date: '2016-09-01',
    time: '12:01',

    countryCodes: ['+86', '+80', '+84', '+87'],
    countryCodeIndex: 0,

    countries: ['CHN', 'USA', 'ENG'],
    countryIndex: 0,

    accounts: ['Wechat', 'QQ', 'Email'],
    accountIndex: 0,

    isAgree: false,
    formData: {},
    rules: [
      {
        name: 'radio',
        rules: { required: false, message: 'Single choice list is required' },
      },
      {
        name: 'checkbox',
        rules: { required: true, message: 'Multiple choice list is required' },
      },
      {
        name: 'name',
        rules: { required: true, message: 'Please type in your name' },
      },
      {
        name: 'qq',
        rules: { required: true, message: 'qq required' },
      },
      {
        name: 'mobile',
        rules: [
          { required: true, message: 'mobile required' },
          { mobile: true, message: 'mobile wrong format' },
        ],
      },
      {
        name: 'vcode',
        rules: { required: true, message: 'Verification code is required' },
      },
      {
        name: 'idcard',
        rules: {
          validator: function (rule, value, param, modeels) {
            if (!value || value.length !== 18) {
              return 'idcard wrong format'
            }
          },
        },
      },
    ],
  },
  radioChange: function (e) {
    console.log('radio change value：', e.detail.value)

    var radioItems = this.data.radioItems
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value
    }

    this.setData({
      radioItems: radioItems,
      [`formData.radio`]: e.detail.value,
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox change value：', e.detail.value)

    var checkboxItems = this.data.checkboxItems,
      values = e.detail.value
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true
          break
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems,
      [`formData.checkbox`]: e.detail.value,
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
      [`formData.date`]: e.detail.value,
    })
  },
  formInputChange(e) {
    const { field } = e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]: e.detail.value,
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value,
    })
  },
  bindCountryCodeChange: function (e) {
    console.log('picker country code changed, value:', e.detail.value)

    this.setData({
      countryCodeIndex: e.detail.value,
    })
  },
  bindCountryChange: function (e) {
    console.log('picker country changed, value:', e.detail.value)

    this.setData({
      countryIndex: e.detail.value,
    })
  },
  bindAccountChange: function (e) {
    console.log('picker account changed, value:', e.detail.value)

    this.setData({
      accountIndex: e.detail.value,
    })
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length,
    })
  },
  submitForm() {
    this.selectComponent('#form').validate((valid, errors) => {
      console.log('valid', valid, errors)
      if (!valid) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message,
          })
        }
      } else {
        ty.showToast({
          title: 'Check passed',
        })
      }
    })
    // this.selectComponent('#form').validateField('mobile', (valid, errors) => {
    //     console.log('valid', valid, errors)
    // })
  },
})
