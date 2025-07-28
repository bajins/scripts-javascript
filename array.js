function sliceIntoChunks(arr, chunkSize) {
    arr = Array.prototype.slice.call(arr); // FileList等需要转换为数组
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        // slice(start, end) 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。
        // 原始数组不会被改变。
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

function group(array, subGroupLength) {
    array = Array.prototype.slice.call(array); // FileList等需要转换为数组
    let index = 0;
    let newArray = [];
    while (index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
    }
    return newArray;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sliceIntoChunks(arr, 3));


function spliceIntoChunks(arr, chunkSize) {
    arr = Array.prototype.slice.call(arr); // FileList等需要转换为数组
    const res = [];
    while (arr.length > 0) {
        // splice 做以下两件事:
        // 1. 删除从 startIdx 开始的 deleteCount 元素
        // 2. 将提供的新元素(newElem1, newElem2…)插入到myArray中，以索引startIdx开始
        // 该方法的返回值是一个包含所有已删除元素的数组，会更改原始数组
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(spliceIntoChunks(arr, 2));

// 数组转Map
const map = data.reduce((accumulator, item) => {
    accumulator.set(item.mainId + item.mtrlId, item);
    return accumulator;
}, new Map());
const map = data.map((item) => [item.mainId + item.mtrlId, item]);
const map = Object.fromEntries(data.map((item) => [item.mainId + item.mtrlId, item]));
// 保持顺序的MAP
const map = Array.prototype.map.call(data, function (item, index) {
    return {[index]: item};
});


/**
 * JS数组合并
 */

// ES6 解构
// https://baijiahao.baidu.com/s?id=1728150000803824413
// https://blog.csdn.net/weixin_43795643/article/details/104705299
// https://blog.csdn.net/m0_47634044/article/details/124852391
let arr = [];
let arr1 = ["1", "2", "3"];
arr = [...arr, ...arr1];

// let option = {"1": "", "2": ""};
// option = {...{}, ...option}; // 合并对象
// Object.assign({}, ...option);

arr.push(...arr1); // arr变成合并后的样子，arr1值不变
arr.unshift(...arr1);

arr.push.call(arr, ...arr1); // 原数组值不改变，返回拼接后数组的长度
arr.unshift.call(arr, ...arr1);

arr.push.apply(arr, arr1); // 原数组值不改变，返回拼接后数组的长度
arr.unshift.apply(arr, arr1);

// 遍历方法：forEach、map、filter、every、for、for in、for of等。
// 添加方法：push（后追加）、unshift（前追加）等。

// arr.concat(array)

// 原数组值不改变。
// 默认会把数组中的数字类型转成字符串类型。
// 数组的项是引用类型时会自动生成'[object Object]'，造成数据丢失或错误。
arr = (arr.join(',') + ',' + arr1.join(',')).split(',');

arr.splice(arr.length, 0, ...arr1); // 原数组值不变，返回空数组

