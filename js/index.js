
var $ = require('jquery');
$.fn.datetimepicker = require('../datetimepicker');

exports.init = function(data) {
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
