function isIos() {
  return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

(() => {
  if (!isIos()) {
    return;
  }
  let startY, endY;
  document.addEventListener(
    'touchstart',
    function (e) {
      startY = e.touches[0].pageY;
    },
    { passive: false },
  );
  document.addEventListener(
    'touchmove',
    function (e) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      endY = e.touches[0].pageY; //记录手指触摸的移动中的坐标
      //手指下滑，页面到达顶端不能继续下滑
      if (endY > startY && scrollTop <= 0) {
        e.preventDefault();
      }
      //手指上滑，页面到达底部不能继续上滑
      if (endY < startY && scrollTop + clientHeight >= scrollHeight) {
        e.preventDefault();
      }
    },
    { passive: false },
  );
})();
