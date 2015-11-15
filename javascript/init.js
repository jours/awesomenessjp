[
  demo.url + '/bower_components/three.js/build/three.min.js',
  demo.url + '/javascript/util.js',
  demo.url + '/javascript/app.js',
].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
});
