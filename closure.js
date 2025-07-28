/**
 * 原生封包闭包
 */
(function () {
    // 全局对象
    window.utils = {};
}());

(function (w) {
    // 全局对象
    var utils = function () {

    };
    // 兼容AMD,CMD和原生JS
    if (typeof define === "function" && (define.amd || define.cmd)) {
        define(function () {
            return new utils();
        });
    } else {
        w.utils = new utils();
    }
})(window);

!function (w) {
    // 全局对象
    var utils = function () {

    };
    // 兼容AMD,CMD和原生JS
    if (typeof define === "function" && (define.amd || define.cmd)) {
        define(function () {
            return new utils();
        });
    } else {
        w.utils = new utils();
    }
}(window);

;(function () {
    var utils = function () {
        // ...
    }
    // 兼容AMD,CMD和原生JS
    if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
        module.exports = utils;
    } else if (typeof define === 'function' && define.amd) {

        define(function () {
            return utils;
        });

    } else {
        this.utils = utils;
    }
}).call(function () {
    return this || (typeof window !== 'undefined' ? window : global);
});


/**
 * jQuery 封包闭包
 */

$(function (w) {
    // 全局对象
    window.utils = {};
}($));

(function ($) {
    // 全局对象
    window.utils = {};
})(jQuery);

$(function () {
    // 全局对象
    window.utils = {};
});

jQuery(function ($) {
    // 全局对象
    window.utils = {};
});

$(document).ready(function () {
    // 全局对象
    window.utils = {};
});