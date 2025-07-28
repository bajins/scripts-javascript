/**
 * toPrecision 处理精度，精度是从左至右第一个不为0的数开始数起。
 * toFixed 小数点后指定位数取整，从小数点开始数起
 */

/**
 * https://segmentfault.com/a/1190000019114128
 * @param arg1
 * @param arg2
 * @param operator
 * @returns {any|number}
 */
var operationNumber = function (arg1, arg2, operator) {
    var oper = ['+', '-', '*', '/'];
    // 不合法的运算
    if (isNaN(arg1) || isNaN(arg2) || oper.indexOf(operator) < 0) {
        return NaN;
    }
    // 除以0
    if (operator === '/' && Number(arg2) === 0) {
        return Infinity;
    }
    // 和0相乘
    if (operator === '*' && Number(arg2) === 0) {
        return 0;
    }
    // 相等两个数字相减
    if ((arg1 === arg2 || Number(arg1) === Number(arg2)) && operator === '-') {
        return 0;
    }
    var r1, r2, max, _r1, _r2;
    try {
        r1 = arg1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    max = Math.max(r1, r2)
    _r1 = max - r1;
    _r2 = max - r2;
    if (_r1 !== 0) {
        arg1 = arg1 + '0'.repeat(_r1)
    }
    if (_r2 !== 0) {
        arg2 = arg2 + '0'.repeat(_r2)
    }
    arg1 = Number(arg1.toString().replace('.', ''))
    arg2 = Number(arg2.toString().replace('.', ''))
    var r3 = operator === '*' ? (max * 2) : (operator === '/' ? 0 : max);
    var newNum = eval(arg1 + operator + arg2);

    if (r3 !== 0) {
        var nStr = newNum.toString();
        nStr = nStr.replace(/^-/, '');
        if (nStr.length < r3 + 1) {
            nStr = '0'.repeat(r3 + 1 - nStr.length) + nStr;
        }
        nStr = nStr.replace(new RegExp('(\\\d{' + r3 + '})$'), '.$1');
        if (newNum < 0) {
            nStr = '-' + nStr;
        }
        newNum = nStr * 1;
    }
    return newNum;
}
//加法
Number.prototype.myAdd = function (arg2) {
    return operationNumber(this, arg2, '+');
}
//减法
Number.prototype.mySub = function (arg2) {
    return operationNumber(this, arg2, '-');
}
//乘法
Number.prototype.myMul = function (arg2) {
    return operationNumber(this, arg2, '*');
}
// 除法
Number.prototype.myDiv = function (arg2) {
    return operationNumber(this, arg2, '/');
}


/**
 * 加
 * @param num1
 * @param num2
 * @returns {number}
 */
function add(num1, num2) {
    const num1Digits = (num1.toString().split('.')[1] || '').length;
    const num2Digits = (num2.toString().split('.')[1] || '').length;
    const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
}

/**
 * 加
 * @param num1
 * @param num2
 * @returns {number}
 */
function numAdd(num1: number, num2: number): number {
    let baseNum: number, baseNum1: number, baseNum2: number;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
}

/**
 * 减
 * @param num1被减数
 * @param num2减数
 */
function numSub(num1: number, num2: number): number {
    let baseNum: number, baseNum1: number, baseNum2: number;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum - num2 * baseNum) / baseNum;
}

/**
 * 剩
 * @param num1被乘数
 * @param num2乘数
 */
function numMulti(num1: number, num2: number): number {
    let baseNum: number = 0;
    try {
        baseNum += num1.toString().split(".")[1].length;
    } catch (e) {
    }
    try {
        baseNum += num2.toString().split(".")[1].length;
    } catch (e) {
    }
    return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
}

/**
 * 除
 * @param num1被除数
 * @param num2除数
 */
function numDiv(num1: number, num2: number) {
    let baseNum1: number = 0,
        baseNum2: number = 0;
    let baseNum3: number, baseNum4: number;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum3 = Number(num1.toString().replace(".", ""));
    baseNum4 = Number(num2.toString().replace(".", ""));
    return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
}


/**
 * ==================================== 26进制 ====================================
 */

/**
 * 10进制转26进制
 *
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function (n) {
    let ans = '';
    while (n) {
        if (n % 26 === 0) {
            ans += String.fromCharCode(26 + 64);
            n = (n / 26) - 1;
        } else {
            ans += String.fromCharCode(n % 26 + 64);
            n = ~~(n / 26);
        }
    }
    return ans.split('').reverse().join('');
};

/**
 * 10进制转26进制
 *
 * https://segmentfault.com/q/1010000006882066
 *
 * @param num
 * @returns {string|string}
 */
function convertTo26(num) {
    if (num <= 0) {
        throw RangeError("值不能小于等于0");
    }
    if (num <= 26) {
        return String.fromCharCode(num + 64)
    } else {
        return convertTo26(~~((num - 1) / 26)) + convertTo26(num % 26 || 26);
    }
}

/**
 * 10进制转26进制
 *
 * @param n
 * @returns {string}
 */
function createCellPos(n) {
    const ordA = 'A'.charCodeAt(0);
    const ordZ = 'Z'.charCodeAt(0);
    const len = ordZ - ordA + 1;
    let s = "";
    while (n >= 0) {
        s = String.fromCharCode(n % len + ordA) + s;
        n = Math.floor(n / len) - 1;
    }
    return s;
}

/**
 * 将26进制转10进制
 *
 * @param str
 * @returns {number}
 * @constructor
 */
const ConvertNum = function (str) {
    let n = 0;
    const s = str.match(/./g);//求出字符数组
    let j;
    let i = str.length - 1;
    j = 1;
    for (; i >= 0; i--, j *= 26) {
        const c = s[i].toUpperCase();
        if (c < 'A' || c > 'Z') {
            return 0;
        }
        n += (c.charCodeAt(0) - 64) * j;
    }
    return n;
};


/**
 * num : 一个整数
 * charSet : 一个字符集
 */
function base(num, charSet) {
    // 个位以内，直接返回
    if (num < charSet.length) {
        return charSet.substr(num, 1);
    }
    // 递归个位以上的部分
    const high = Math.floor(num / charSet.length);
    const unit = num % charSet.length;
    return base(high, charSet) + charSet.substr(unit, 1);
}

// 以下调用输出 0 - 32 的16进制形式：
for (let i = 0; i <= 32; i++) {
    document.write(base(i, '0123456789ABCDEF') + ' ');
}