// https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard


// https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent
// https://blog.csdn.net/m0_37743842/article/details/105355280
// 监听粘贴事件
window.addEventListener('paste', function (event) {
    event = event || window.event
    const clipData = event.clipboardData || window.clipboardData
    const value = clipData.getData('text/plain')
    console.log(value)
    // 搜索剪切板items
    for (let i = 0; i < clipData.items.length; i++) {
        console.log(clipData.items[i])
        if (clipData.items[i].type.indexOf('image') !== -1) {
            const file = clipData.items[i].getAsFile();
            // break
        } else {
            // clipboardData.clearData(items[i].type)
            const str = clipData.getData(clipData.items[i].type);
            console.log(str)
        }
    }
})

// 监听拷贝事件，并将内容改为自定义的值
window.addEventListener('copy', function (event) {
    event = event || window.event
    event.clipboardData?.setData('text/plain', 'hello world')
    event.preventDefault()
})

// https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard_API
// 获取拷贝的内容
function getClipboardContents() {
    navigator.permissions.query({name: "clipboard-write"}).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            navigator.clipboard.readText().then(function (text) {
                console.log('Pasted content: ', text)
            }, function () {
                console.log("failure");
            });
        }
    });
}

// 将文本复制到剪贴板
function copyText() {
    navigator.permissions.query({name: "clipboard-write"}).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            navigator.clipboard.writeText('<empty clipboard>').then(function () {
                console.log("success");
            }, function () {
                console.log("failure");
            });
            /*const data = new DataTransfer();
            data.items.add("text/plain", 'hello world222');
            navigator.clipboard.write(data).then(function () {
                console.log("success");
            }, function () {
                console.log("failure");
            });*/
        }
        // 如果权限被拒绝，不要做任何操作。
    });

    // 被弃用旧的API
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand
    // https://www.cnblogs.com/qingheshiguang/p/17027162.html
    /*const textareaC = document.createElement('textarea');
    textareaC.setAttribute('readonly', 'readonly'); //设置只读属性防止手机上弹出软键盘
    textareaC.value = "hello world";
    document.body.appendChild(textareaC); //将textarea添加为body子元素
    textareaC.select();
    const res = document.execCommand('copy');
    document.body.removeChild(textareaC);//移除DOM元素*/
}