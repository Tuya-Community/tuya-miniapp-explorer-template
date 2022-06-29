Page({
  data: {
    root: {
      children: [1, 4],
      nodes: {
        1: {
          id: 1,
          children: [2],
          type: 'view',
          nodes: {
            2: {
              id: 2,
              type: 'text',
              children: [3],
              nodes: {
                3: {
                  id: 3,
                  type: 'plain-text',
                  text: 'hello world',
                },
              },
            },
          },
          props: {
            class: 'abc',
          },
        },
        4: {
          id: 4,
          children: [5],
          type: 'view',
          nodes: {
            5: {
              id: 5,
              type: 'text',
              children: [6],
              nodes: {
                6: {
                  id: 6,
                  type: 'plain-text',
                  text: 'hello ray',
                },
              },
            },
          },
          props: {
            class: 'abc',
          },
        },
      },
    },
  },
  changeCount() {
    this.setData({
      count: this.data.count + 1,
    })
  },
  click() {
    console.log('aaaaa')
    this.setData({
      root: {},
    })
  },
  onPageTemplateTap() {
    console.log('onPageTemplateTap')
    this.setData({
      root: {
        type: 'view',
        children: [
          {
            content: '第一个 View',
          },
        ],
      },
    })
  },
})
