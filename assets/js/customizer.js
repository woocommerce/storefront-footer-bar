(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
(function ($) {
  wp.customize('sfb_background_color', function (value) {
    value.bind(function (to) {
      $('.sfb-footer-bar').css('background-color', to);
    });
  });
  wp.customize('sfb_text_color', function (value) {
    value.bind(function (to) {
      $('.sfb-footer-bar .widget').css('color', to);
    });
  });
  wp.customize('sfb_heading_color', function (value) {
    value.bind(function (to) {
      $('.sfb-footer-bar .widget h1, .sfb-footer-bar .widget h2, .sfb-footer-bar .widget h3, .sfb-footer-bar .widget h4, .sfb-footer-bar .widget h5, .sfb-footer-bar .widget h6').css('color', to);
    });
  });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY3VzdG9taXplci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7OztBQU1BLENBQUUsVUFBVSxDQUFWLEVBQWM7QUFDZixFQUFBLEVBQUUsQ0FBQyxTQUFILENBQWMsc0JBQWQsRUFBc0MsVUFBVSxLQUFWLEVBQWtCO0FBQ3ZELElBQUEsS0FBSyxDQUFDLElBQU4sQ0FBWSxVQUFVLEVBQVYsRUFBZTtBQUMxQixNQUFBLENBQUMsQ0FBRSxpQkFBRixDQUFELENBQXVCLEdBQXZCLENBQTRCLGtCQUE1QixFQUFnRCxFQUFoRDtBQUNBLEtBRkQ7QUFHQSxHQUpEO0FBTUEsRUFBQSxFQUFFLENBQUMsU0FBSCxDQUFjLGdCQUFkLEVBQWdDLFVBQVUsS0FBVixFQUFrQjtBQUNqRCxJQUFBLEtBQUssQ0FBQyxJQUFOLENBQVksVUFBVSxFQUFWLEVBQWU7QUFDMUIsTUFBQSxDQUFDLENBQUUseUJBQUYsQ0FBRCxDQUErQixHQUEvQixDQUFvQyxPQUFwQyxFQUE2QyxFQUE3QztBQUNBLEtBRkQ7QUFHQSxHQUpEO0FBTUEsRUFBQSxFQUFFLENBQUMsU0FBSCxDQUFjLG1CQUFkLEVBQW1DLFVBQVUsS0FBVixFQUFrQjtBQUNwRCxJQUFBLEtBQUssQ0FBQyxJQUFOLENBQVksVUFBVSxFQUFWLEVBQWU7QUFDMUIsTUFBQSxDQUFDLENBQUUsd0tBQUYsQ0FBRCxDQUE4SyxHQUE5SyxDQUFtTCxPQUFuTCxFQUE0TCxFQUE1TDtBQUNBLEtBRkQ7QUFHQSxHQUpEO0FBS0EsQ0FsQkQsRUFrQkssTUFsQkwiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIEN1c3RvbWl6ZXIgZW5oYW5jZW1lbnRzIGZvciBhIGJldHRlciB1c2VyIGV4cGVyaWVuY2UuXG4gKlxuICogQ29udGFpbnMgaGFuZGxlcnMgdG8gbWFrZSBUaGVtZSBDdXN0b21pemVyIHByZXZpZXcgcmVsb2FkIGNoYW5nZXMgYXN5bmNocm9ub3VzbHkuXG4gKi9cblxuKCBmdW5jdGlvbiggJCApIHtcblx0d3AuY3VzdG9taXplKCAnc2ZiX2JhY2tncm91bmRfY29sb3InLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFsdWUuYmluZCggZnVuY3Rpb24oIHRvICkge1xuXHRcdFx0JCggJy5zZmItZm9vdGVyLWJhcicgKS5jc3MoICdiYWNrZ3JvdW5kLWNvbG9yJywgdG8gKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHR3cC5jdXN0b21pemUoICdzZmJfdGV4dF9jb2xvcicsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YWx1ZS5iaW5kKCBmdW5jdGlvbiggdG8gKSB7XG5cdFx0XHQkKCAnLnNmYi1mb290ZXItYmFyIC53aWRnZXQnICkuY3NzKCAnY29sb3InLCB0byApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdHdwLmN1c3RvbWl6ZSggJ3NmYl9oZWFkaW5nX2NvbG9yJywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhbHVlLmJpbmQoIGZ1bmN0aW9uKCB0byApIHtcblx0XHRcdCQoICcuc2ZiLWZvb3Rlci1iYXIgLndpZGdldCBoMSwgLnNmYi1mb290ZXItYmFyIC53aWRnZXQgaDIsIC5zZmItZm9vdGVyLWJhciAud2lkZ2V0IGgzLCAuc2ZiLWZvb3Rlci1iYXIgLndpZGdldCBoNCwgLnNmYi1mb290ZXItYmFyIC53aWRnZXQgaDUsIC5zZmItZm9vdGVyLWJhciAud2lkZ2V0IGg2JyApLmNzcyggJ2NvbG9yJywgdG8gKTtcblx0XHR9ICk7XG5cdH0gKTtcbn0gKSggalF1ZXJ5ICk7XG4iXX0=
