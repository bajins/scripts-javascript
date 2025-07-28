/**
 * typeof
 *
 * `[]`和`null`被`typeof`解释为`object`类型
 * 数字`Number`，布尔值`Boolean`，字符串`String`，函数`Function`，对象`Object`，
 * `Undefined`这一些数据类型在`typeof`下都被精准的解释，只有数组和`null`的数据类型不够精准。
 */
console.log(typeof 2);              // number
console.log(typeof true);           // boolean
console.log(typeof 'str');          // string
console.log(typeof []);             // object
console.log(typeof function () {
});   // function
console.log(typeof {});             // object
console.log(typeof (new Date));     // object
console.log(typeof undefined);      // undefined
console.log(typeof null);           // object


/**
 * instanceof
 *
 * 直接的字面量值判断数据类型，只有引用数据类型`Array`、`Function`、`Object`被精准判断
 * 数值`Number`，布尔值`Boolean`，字符串`String`等字面值不能被`instanceof`精准判断。
 * 在MDN中的解释：`instanceof`运算符用来测试一个对象在其原型链中是否存在一个构造函数的`prototype`属性。
 */
console.log(2 instanceof Number);               // false
console.log(true instanceof Boolean);           // false
console.log('str' instanceof String);           // false
console.log([] instanceof Array);               // true
console.log(function () {
} instanceof Function);  // true
console.log({} instanceof Object);              // true
console.log(new Date() instanceof Object);      // true
console.log(undefined instanceof Undefined);    // 报错
console.log(null instanceof Null);              // 报错


/**
 * constructor
 * 如果创建一个对象，更改它的原型，这种方式也变得不可靠了。
 */

console.log((2).constructor === Number);                 // true
console.log(true.constructor === Boolean);             // true
console.log(('str').constructor === String);             // true
console.log(([]).constructor === Array);                 // true
console.log((function () {
}).constructor === Function);   // true
console.log(({}).constructor === Object);                // true
console.log((new Date()).constructor === Date);          // true
console.log(undefined.constructor === Undefined);      // 报错
console.log(null.constructor === Null);                // 报错


/**
 * call
 *
 * `Object.prototype.toString.call()`即使改变对象的原型，依然会显示正确的数据类型
 */
const a = Object.prototype.toString;
console.log(a.call(2));             // [object Number]
console.log(a.call(true));          // [object Boolean]
console.log(a.call('str'));         // [object String]
console.log(a.call([]));            // [object Array]
console.log(a.call(function () {
}));  // [object Function]
console.log(a.call({}));            // [object Object]
console.log(a.call(new Date()));    // [object Date]
console.log(a.call(undefined));     // [object Undefined]
console.log(a.call(null));          // [object Null]


/**
 * 原型比较
 */
class Person {
}

let p1 = new Person()
console.log(Object.getPrototypeOf(p1) === Person.prototype);
console.log(p1.__proto__ === Person.prototype);
console.log(p1.constructor.prototype === Person.prototype);