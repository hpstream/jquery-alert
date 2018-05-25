;(function($){
    $.notice = {};
    var btn = {
        success : {
            bgColor: '#f0f9eb',
            textColor: '#67c23a',
        },
        info: {
            bgColor: '#f4f4f5',
            textColor: '#909399',
        },
        warning:{
            bgColor: '#fdf6ec',
            textColor: '#e6a23c',
        },
        danger:{
            bgColor: '#fef0f0',
            textColor: '#f56c6c'
        }
    }
    var option = {
        text: "Don't forget to star the repository if you like it.", // Text that is to be shown in the toast
        heading: '\n\n', // Optional heading to be shown on the toast
        
        showHideTransition: 'fade', // fade, slide or plain
        allowToastClose: true, // Boolean value true or false
        hideAfter: 1000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
        stack: 10, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
        position: 'top-center', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
        
        bgColor: 'rgba(255,0,0,0.4)',  // Background color of the toast
        textColor: '#eeeeee',  // Text color of the toast
        textAlign: 'left',  // Text alignment i.e. left, right or center
        loader: false,  // Whether to show loader or not. True by default
        loaderBg: '#9EC600',  // Background color of the toast loader
        beforeShow: function () {}, // will be triggered before the toast is shown
        afterShown: function () {}, // will be triggered after the toat has been shown
        beforeHide: function () {}, // will be triggered before the toast gets hidden
        afterHidden: function () {}  // will be triggered after the toast has been hidden
    }
    $.notice.warning = function(msg){
        btn['warning'].text = msg;
        var opt = $.extend(true,option,btn['warning'])
        $.toast(opt)
    }
    $.notice.info = function(msg){
        btn['info'].text = msg;
        var opt = $.extend(true,option,btn['info'])
        $.toast(opt)
    }
    $.notice.success = function(msg){
        btn['success'].text = msg;
        var opt = $.extend(true,option,btn['success'])
        $.toast(opt)
    }
    $.notice.danger = function(msg){
        btn['danger'].text = msg;
        var opt = $.extend(true,option,btn['danger'])
        $.toast(opt)
    }

})($)