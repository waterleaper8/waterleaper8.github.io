'use strict';

function resize() {
  let vw = document.body.clientWidth;// スクロールバーを除いた幅を取得
  document.documentElement.style.setProperty('--vw', vw + 'px');
}

resize();
window.onresize = resize;
