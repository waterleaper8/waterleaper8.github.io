document.addEventListener('DOMContentLoaded', function() {
  const spinner = document.getElementById('loading');
  const video = document.getElementById('video');
  const type_ele = document.querySelector('typewritten-text');
  video.addEventListener('canplay', function() {
      spinner.classList.add('loaded');
      type_ele.start();
  }, {
    once: true
  });
});
