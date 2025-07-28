/**
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia
 */


// 屏幕可用工作区宽度
screen.availWidth
// 屏幕可用工作区高度
screen.availHeight

// 屏幕分辨率的宽
screen.width
// 屏幕分辨率的高
screen.height

// 网页正文部分上
window.screenTop
// 网页正文部分左
window.screenLeft

// 设置或获取位于给定对象左边界与窗口中目前可见内容的最左端之间的距离
window.scrollLeft
// 设置或获取位于给定对象最顶端与窗口中目前可见内容的最顶端之间的距离
window.scrollTop

// 设置或获取位于给定对象相对于版面或由offsetParent属性指定的父坐标的计算左侧位置
window.offsetLeft
// 设置或获取位于给定对象相对于版面或由offsetParent属性指定的父坐标的计算顶端位置
window.offsetTop

// 浏览器窗口的内部宽高，会随窗口的显示大小改变
window.innerWidth
window.innerHeight

// 网页可见区域宽度，不包括工具栏和滚动条，会随窗口的显示大小改变
document.body.clientWidth
document.documentElement.clientWidth
// 网页可见区域高度，不包括工具栏和滚动条，会随窗口的显示大小改变
document.body.clientHeight
document.documentElement.clientHeight

// 网页可见区域宽度，包括滚动条等边线，会随窗口的显示大小改变
document.body.offsetWidth
document.documentElement.offsetWidth
// 网页可见区域高度，包括滚动条等边线，会随窗口的显示大小改变
document.body.offsetHeight
document.documentElement.offsetHeight

// 网页正文全文宽度(不包括滚动条)，会随窗口的显示大小改变
document.body.scrollWidth
document.documentElement.scrollWidth
// 网页正文全文宽度(不包括滚动条)，会随窗口的显示大小改变
document.body.scrollHeight
document.documentElement.scrollHeight


/**
 * 监听窗口变化
 * window.onresize或者$(window).resize()触发两次 https://blog.csdn.net/soindy/article/details/53886921
 */

window.onresize = function () {
    var res;
    if (res) {
        clearTimeout(res)
    }
    res = setTimeout(function () {
        console.log($(window).width());
    }, 20);
}
$(window).resize(function () {
    $(window).width();
});
$(window).on('resize', function () {
    $(window).width();
});
$(window).resizeEnd({delay: 500}, function () {
    $(window).width();
});