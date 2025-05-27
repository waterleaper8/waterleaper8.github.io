// モダンブラウザなら CSS Font Loading API が使える
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(function() {
    document.documentElement.classList.add('fonts-loaded');
  });
} else {
  // 非対応ブラウザ向けにタイムアウトで保険
  window.addEventListener('load', function() {
    setTimeout(function(){
      document.documentElement.classList.add('fonts-loaded');
    }, 500);
  });
}
