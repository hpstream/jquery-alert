;(function($){
    $.notice ={}

    $.notice.success = function(msg) {
        var options = { text: msg, type: 'success', position: 'top-center' };
        return $().toastmessage('showToast', options);
    };

    $.notice.danger = function(msg) {
        var options = { text: msg, type: 'error', position: 'top-center' };
        return $().toastmessage('showToast', options);
    };

    $.notice.info = function(msg) {
        var options = { text: msg, type: 'notice', position: 'top-center' };
        $().toastmessage('showToast', options);
    };

    $.notice.warning = function(msg) {
        var options = { text: msg, type: 'warning', position: 'top-center' };
        return $().toastmessage('showToast', options);
    };
})($)