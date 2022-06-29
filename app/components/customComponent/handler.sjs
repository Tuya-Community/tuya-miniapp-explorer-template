var tap = function (event, ownerInstance) {
  console.log('组件 sjs tap事件！！！！', event, ownerInstance)
}

var countObserver = function (newValue, oldValue, ownerInstance, instance) {
  console.log('count observer', newValue, oldValue, ownerInstance, instance)
  let comp = ownerInstance.callMethod('clickTest')
}

var add = function (a, b) {
  return a + b
}

module.exports = {
  tap: tap,
  countObserver: countObserver,
  add: add,
}
