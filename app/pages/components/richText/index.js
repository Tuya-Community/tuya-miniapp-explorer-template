Page({
  data: {
    htmlContent: '<div><h1>Title</h1><p>Life is <i>like</i> a box of <b>chocolates</b>.</p></div>',
    isHTMLRender: false,
    nodes: [
      {
        name: 'div',
        attrs: {
          name: 'outer',
        },
        children: [
          {
            type: 'text',
            text: 'You never know what you are gonna get.',
          },
        ],
      },
    ],
    htmlContent1: '<div>You never know what you are gonna get.</div>',
    isNodesRender: false,
  },

  showHTMLRender() {
    this.setData({
      isHTMLRender: true,
    })
  },

  showNodeRender() {
    this.setData({
      isNodesRender: true,
    })
  },
})
