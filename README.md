# jquery-alert

# 插件 jquery.toastmessage.js
# github 地址
## https://github.com/akquinet/jquery-toastmessage-plugin

# 在线演示
## http://akquinet.github.io/jquery-toastmessage-plugin/

# api 文档
## https://github.com/akquinet/jquery-toastmessage-plugin/wiki

# jquery-notice.js 
>在上面基础上进行封装
```
 
            $.notice.warning('成功')
            $.notice.danger('成功')
            $.notice.info('成功')
            $.notice.success('成功')

        
```
>核心代码
```
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


```
[在线案例地址](https://hpstream.github.io/jquery-alert/)
