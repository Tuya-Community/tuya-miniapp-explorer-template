Page({
  data: {
    switch1Checked: true,
    test: 'test',
    disabled: true,
  },
  switch1Change: (e) => {
    console.log('switch change', e)
  },
})
