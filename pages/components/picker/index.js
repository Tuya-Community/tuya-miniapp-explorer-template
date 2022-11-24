Page({
  data: {
    array: [
      'U.S.',
      'China',
      'Brazil',
      'Japan',
      'India',
      'U.K.',
      'Australia'
    ],
    objectArray: [
      {
        id: 0,
        name: 'U.S.',
      },
      {
        id: 1,
        name: 'China',
      },
      {
        id: 2,
        name: 'Brazil',
      },
      {
        id: 3,
        name: 'Japan',
      },
    ],
    index: 0,
    multiArray: [
      [i18n.t('picker_1'), i18n.t('picker_2')],
      [i18n.t('picker_3'), i18n.t('picker_4'), i18n.t('picker_5'), i18n.t('picker_6'), i18n.t('picker_7')],
      [i18n.t('picker_8'), i18n.t('picker_9')],
    ],
    objectMultiArray: [
      [
        {
          id: 0,
          name: i18n.t('picker_1'),
        },
        {
          id: 1,
          name: i18n.t('picker_2'),
        },
      ],
      [
        {
          id: 0,
          name: i18n.t('picker_3'),
        },
        {
          id: 1,
          name: i18n.t('picker_4'),
        },
        {
          id: 2,
          name: i18n.t('picker_5'),
        },
        {
          id: 3,
          name: i18n.t('picker_6'),
        },
        {
          id: 4,
          name: i18n.t('picker_7'),
        },
      ],
      [
        {
          id: 0,
          name: i18n.t('picker_8'),
        },
        {
          id: 1,
          name: i18n.t('picker_9'),
        },
      ],
    ],
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    customItem: '全部',
  },
  bindPickerChange: function (e) {
    console.log('picker changed value', e.detail.value)
    this.setData({
      index: e.detail.value,
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker changed value', e.detail.value)
    this.setData({
      multiIndex: e.detail.value,
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('The modified column is', e.detail.column, '，the value is', e.detail.value)
    var data = {
      multiArray: this.data.multiArray,
      objectMultiArray: this.data.objectMultiArray,
      multiIndex: this.data.multiIndex,
    }
    data.multiIndex[e.detail.column] = e.detail.value
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = [i18n.t('picker_3'), i18n.t('picker_4'), i18n.t('picker_5'), i18n.t('picker_6'), i18n.t('picker_7')]
            data.multiArray[2] = [i18n.t('picker_8'), i18n.t('picker_9')]

            data.objectMultiArray[1] = [
              { name: i18n.t('picker_3'), id: 0 },
              { name: i18n.t('picker_4'), id: 1 },
              { name: i18n.t('picker_5'), id: 2 },
              { name: i18n.t('picker_6'), id: 3 },
              { name: i18n.t('picker_7'), id: 4 },
            ]

            data.objectMultiArray[2] = [
              { name: i18n.t('picker_8'), id: 0 },
              { name: i18n.t('picker_9'), id: 1 },
            ]

            break
          case 1:
            data.multiArray[1] = [i18n.t('picker_10'), i18n.t('picker_11'), i18n.t('picker_12')]
            data.multiArray[2] = [i18n.t('picker_13'), i18n.t('picker_14')]

            data.objectMultiArray[1] = [
              { name: i18n.t('picker_10'), id: 0 },
              { name: i18n.t('picker_11'), id: 1 },
              { name: i18n.t('picker_12'), id: 2 },
            ]

            data.objectMultiArray[2] = [
              { name: i18n.t('picker_13'), id: 0 },
              { name: i18n.t('picker_14'), id: 1 },
            ]
            break
        }
        data.multiIndex[1] = 0
        data.multiIndex[2] = 0

        break
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = [i18n.t('picker_8'), i18n.t('picker_9')]
                break
              case 1:
                data.multiArray[2] = [i18n.t('picker_15')]
                break
              case 2:
                data.multiArray[2] = [i18n.t('picker_16'), i18n.t('picker_17')]
                break
              case 3:
                data.multiArray[2] = [i18n.t('picker_18'), i18n.t('picker_19'), i18n.t('picker_20')]
                break
              case 4:
                data.multiArray[2] = [i18n.t('picker_21'), i18n.t('picker_22'), i18n.t('picker_23'), i18n.t('picker_24')]
                break
            }
            break
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = [i18n.t('picker_13'), i18n.t('picker_14')]
                break
              case 1:
                data.multiArray[2] = [i18n.t('picker_25'), i18n.t('picker_26')]
                break
              case 2:
                data.multiArray[2] = [i18n.t('picker_27'), i18n.t('picker_28'), i18n.t('picker_29')]
                break
            }
            break
        }
        data.multiIndex[2] = 0
        break
    }
    this.setData(data)
  },
  bindDateChange: function (e) {
    console.log('picker changed value:', e.detail.value)
    this.setData({
      date: e.detail.value,
    })
  },
  bindTimeChange: function (e) {
    console.log('picker changed value:', e.detail.value)
    this.setData({
      time: e.detail.value,
    })
  }
})
