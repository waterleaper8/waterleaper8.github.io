document.addEventListener('DOMContentLoaded', function() {
  const spinner = document.getElementById('loading');
  const video = document.getElementById('video');
  video.addEventListener('canplay', function() {
      spinner.classList.add('loaded');
  }, false);
}, false);
