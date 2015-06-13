
var $ = require('jquery');
$.fn.datetimepicker = require('../datetimepicker');

var css = require.resolve('css/datetimepicker.css');

exports.init = function(data) {
    alert(css);
    $('.form_date').datetimepicker({
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
};
