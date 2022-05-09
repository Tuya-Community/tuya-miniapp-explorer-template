const date = new Date()
const years = []
const months = []
const days = []
const hours = []
const mins = []
const formatTimeData = function (val) {
  return ('' + val).padStart(2, '0')
}

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

for (let i = 0; i <= 24; i++) {
  hours.push(formatTimeData(i))
}

for (let i = 0; i <= 60; i++) {
  mins.push(formatTimeData(i))
}

Page({
  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [3, 1, 1],
    hours: hours,
    mins: mins,
    startHour: '00',
    startMin: '00',
    endHour: '00',
    endMin: '00',
  },

  formatTimeData: function (val) {
    return ('' + val).padStart(2, '0')
  },
  bindChange: function (e) {
    console.log('pickerview 触发了onchange事件', e.detail.value)
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      // value: val
    })
  },
  startChange: function (e) {
    const val = e.detail.value
    this.setData({
      startHour: this.data.hours[val[0]],
      startMin: this.data.hours[val[1]],
    })
  },
  endChange: function (e) {
    const val = e.detail.value
    this.setData({
      endHour: this.data.hours[val[0]],
      endMin: this.data.hours[val[1]],
    })
  },
  pickstart: function (e) {},
  pickend: function (e) {},
})
