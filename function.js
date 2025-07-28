/**
 * 函数默认参数
 */

function haosy(name, age) {// 利用短路原则赋值
    name = name || '测试';
    age = age || 1;
}

function test(name = '测试', age = 1) {// 基本用法
}

// 与解构赋值默认值结合，如果不传入参数的时候，每次都要 haosy({}) 要写 {} 比较麻烦
function test({name = '测试', age = 1}) {
}

function test({name = '测试', age = 1} = {}) {// 双重默认值
}


// 防重复触发
stopReapeatEvent = function (obj) {
    if (obj.callFlag) return true;
    obj.callFlag = !obj.callFlag;
    clearTimeout(obj.iTime);
    obj.iTime = setTimeout(function () {
        obj.callFlag = !obj.callFlag;
    }, 100);
}
//调用
// if (stopReapeatEvent(arguments.callee)) return;


/**
 * 利用闭包，让函数只执行一次
 * @param fn
 * @param args
 * @returns {(function(): void)|*}
 */
function runOnce(fn, args) {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw new Error('请传递一个函数');
    }
    try {
        return fn.apply(args || this, arguments);
    } finally {
        fn = null; // 返回函数执行一次后，将其设置为null，后面就不会执行了
    }
}

/**
 * 利用闭包，函数第一次调用后，不管再调用几次都将跳过执行过程，直接返回第一次执行的值
 * https://www.cnblogs.com/echolun/p/11123905.html
 * @param fn
 * @returns {(function(...[*]): (*))|*}
 */
function runOnce1(fn) {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw new Error('请传递一个函数');
    }
    let can, result;
    return function (...rest) {
        if (can) {
            return result;
        }
        try {
            result = fn.apply(this, rest);
        } finally {
            can = true;
            fn = null; // 返回函数执行一次后，将其设置为null，后面就不会执行了
        }
        return result;
    };
}