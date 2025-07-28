/**
 * `ECMAScript`定义了六种类型的错误。还可以使用`throw new Error("错误信息")`抛出自定义异常。
 *
 * 1. `ReferenceError` 找不到对象时
 * 2. `TypeError` 错误的使用了类型或对象的方法时
 * 3. `RangeError` 使用内置对象的方法时，参数超范围
 * 4. `SyntaxError` 语法写错了
 * 5. `EvalError` 错误的使用了Eval
 * 6. `URIError` URI错误
 */

try {
    // 可能发生错误的代码
} catch (err) {
    // 只有发生错误时才执行的代码
} finally {
    // 无论是否出错，肯定都要执行的代码
}

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class TimeoutError extends CustomError {
}

module.exports = {
    TimeoutError,
};