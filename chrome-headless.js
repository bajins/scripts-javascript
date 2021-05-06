/*
 * @Author: https://www.bajins.com
 * @Date: 2021-05-06 13:36:39
 * @LastEditTime: 2021-05-06 16:34:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: index.js
 */
// --remote-debugging-port=8000
// npm install chrome-remote-interface
// https://github.com/cyrus-and/chrome-remote-interface
const CDP = require('chrome-remote-interface');

/*CDP(async(client) => {
    const {Network, Page, Runtime} = client;
    try {
        await Network.enable();
        await Page.enable();
        await Network.setCacheDisabled({cacheDisabled: true});
        await Page.navigate({url: 'https://github.com'});
        await Page.loadEventFired();
        const result = await Runtime.evaluate({
            expression: 'document.documentElement.outerHTML'
        });
        const html = result.result.value;
        console.log(html);
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}).on('error', (err) => {
    console.error(err);
});*/

/**
 * 加载url并获取html内容
 * 
 * @param {String} url 
 */
async function loadUrlGetHtml(url) {
    let client;
    try {
        // connect to endpoint
        client = await CDP({ port: 8000, local: true });
        // https://chromedevtools.github.io/devtools-protocol
        const { Network, Page, Runtime, DOM, Debugger } = client;
        // setup handlers
        Network.requestWillBeSent((params) => {
            // console.log(params);
        });
        Network.responseReceived((params) => {
            // console.log(params);
        });

        Network.dataReceived((params) => {
            // console.log(params);
        });
        // 禁用缓存
        //await Network.setCacheDisabled({ cacheDisabled: true });

        // enable events then start!
        await Network.enable();
        await Page.enable();
        Page.navigate({ url: url }).then((res) => {
            // console.log(res);
        });
        await Page.loadEventFired();
        // console.log(DOM.getDocument);
        // console.log(DOM.getOuterHTML);
        // console.log(Debugger.getScriptSource);

        // 在页面完全加载后转储整个页面的HTML
        const result = await Runtime.evaluate({
            expression: 'document.documentElement.outerHTML'
        });
        const html = result.result.value; // 获取HTML
        console.log(html);

    } catch (err) {
        console.error(err);
    } finally {
        if (client) {
            await client.close();
        }
    }
}


// loadUrlGetHtml("chrome://version");
loadUrlGetHtml("https://github.com");
