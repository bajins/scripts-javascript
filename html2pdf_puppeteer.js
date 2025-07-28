const puppeteer = require('puppeteer');
const path = require('path');

/**
 * 自动滚动页面到底部，以触发所有懒加载元素的加载
 * @param {import('puppeteer').Page} page
 */
async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

async function generatePdfFromHtml() {
    console.log('开始生成 PDF...');
    const browser = await puppeteer.launch({
        // headless: false, // 设置为 false 可以在调试时看到浏览器界面
    });
    const page = await browser.newPage();

    try {
        // 1. 强制使用屏幕的媒体类型
        await page.emulateMediaType('screen');

        const filePath = path.resolve(__dirname, 'report.html');
        
        // 2. 导航到页面，并等待直到网络连接几乎空闲
        await page.goto(`file://${filePath}`, {
            waitUntil: 'networkidle0'
        });

        // 3. 处理懒加载：滚动页面到底部
        console.log('正在滚动页面以加载所有内容...');
        await autoScroll(page);

        // 4. 生成 PDF
        console.log('正在生成 PDF 文件...');
        await page.pdf({
            path: 'report_final.pdf',
            format: 'A4',
            // 开启背景打印，确保颜色和图片都正确
            printBackground: true,
            // 添加页眉
            displayHeaderFooter: true,
            headerTemplate: `
                <div style="font-size: 10px; width: 100%; text-align: center; padding: 0 20px;">
                    年度报告 - 机密
                </div>
            `,
            // 添加页脚，显示页码和总页数
            footerTemplate: `
                <div style="font-size: 10px; width: 100%; text-align: center; padding: 0 20px;">
                    <span class="pageNumber"></span> / <span class="totalPages"></span>
                </div>
            `,
            // 设置页边距，为页眉页脚留出空间
            margin: {
                top: '50px',
                bottom: '50px',
                left: '25px',
                right: '25px'
            }
        });

        console.log('✅ PDF 文件 "report_final.pdf" 生成成功！');

    } catch (error) {
        console.error('生成 PDF 时出错:', error);
    } finally {
        await browser.close();
    }
}

generatePdfFromHtml();