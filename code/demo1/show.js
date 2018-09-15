function show (content) {
  // 操作 DOM 元素，将 content 显示到网页上
  document.getElementById('app').innerHTML = 'hello,' + content
}
// 通过 CommonJS 规范 导出 show 函数
module.exports = show