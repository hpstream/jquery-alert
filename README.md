# 前言
在项目中，我们经常需要完成某一个操作的时候，需要给用户提示。这么插件自己手写起来比较麻烦，于是在网上总结一些比较好用的插件。
# jquery-alert
我自己写的地址
[在线案例地址](https://hpstream.github.io/jquery-alert/)

# 插件 jquery.toastmessage.js
注意：由于没有在线cdn，所以可以在换成
[Jquery Toast Plugin](https://kamranahmed.info/toast#)
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
---
# jquery-comfirm.js（v3.3.0）
jquert-confirm 网站比较齐全
[官方网站](http://craftpip.github.io/jquery-confirm/#confirm)

[api文档](http://craftpip.github.io/jquery-confirm/#api)

