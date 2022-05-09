import F2 from '@antv/f2'


const bar = function (newVal, oldVal, ownerInstance, ins) {
  ownerInstance.callMethod('getData', [{ value: 3333, isShow: true, a: 'hhhh' }, { value: 'aaa' }])


  const componentId = ownerInstance.el.componentId
  const query = ownerInstance.createSelectorQuery(componentId)
  query
    .select('#myCanvas')
    .fields({ size: true, scrollOffset: true, node: true }, function (res) {
      const canvas = res.node
      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ]

      // Step 1: 创建 Chart 对象
      const chart = new F2.Chart({
        el: canvas,
        pixelRatio: window.devicePixelRatio || 1, // 指定分辨率
      })
      // Step 2: 载入数据源
      chart.source(data)
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart.interval().position('genre*sold').color('genre')
      // Step 4: 渲染图表
      chart.render()

      // const ctx= canvas.getContext("2d");
      // ctx.fillStyle="#FF0000";
      // ctx.fillRect(0,0,150,75);
    })
    .exec()
}

const foo = "'hello world' from comm.sjs"

module.exports = {
  foo: foo,
  bar: bar,
}
