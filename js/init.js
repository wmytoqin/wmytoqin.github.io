var _window = {};

$(function() {
  _window.initVue = new Vue({
    el: '.window',
    data() {
      return {
        loginShow: true
      }
    }
  });
})