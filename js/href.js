//网页加载完成点击链接新标签页面打开链接
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有链接元素
  var links = document.querySelectorAll('a');

  // 遍历所有链接元素，并添加target="_blank"属性
  for (var i = 0; i < links.length; i++) {
    links[i].setAttribute('target', '_blank');
  }
});
