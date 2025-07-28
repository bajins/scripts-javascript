## 一、需求描述

在很多OA或者CRM项目中，基本上都会涉及到Excel的导入导出的问题。

首先想到了**POI**和阿里的**EasyExcel**。
如果是小打小闹，导几千数据玩玩，服务器本身基本没什么压力，但是动辄导出上万的数据，那服务器肯定是吃不消的（这里指的是没有对导出Excel服务器做优化或者负载处理）

## 二、设计思路

**传统Java后端导出Excel思路**

> 导出Excel，如果在Java后端的话，且导出的数据量比较大，且又处于高并发的情况，服务器内存会被瞬间占满（如果数据量较大，POI会有内存泄漏的风险），CPU占用率也会持续升高（生成Excel二进制文件，是非常吃CPU性能的）


**前端JavaScript导出Excel思路**

> 如果把 生成Excel的工作交给前端浏览器去完成，后端这是做一个数据发包，而浏览器拿到数据后在自己本地客户端执行生成文件，占用的CPU资源也是客户端的，即使再大的数据也对服务端没有太大影响

### 三、技术框架

- [https://github.com/SheetJS/js-xlsx](https://github.com/SheetJS/js-xlsx) （又名js-xlsx，npm库名称为xlsx，node库也叫node-xlsx，以下简称JX），免费版不支持样式调整。
- [https://github.com/protobi/js-xlsx](https://github.com/protobi/js-xlsx) （npm库命名为xlsx-style，以下简称XS）基于JX二次开发，使其支持样式调整，但其开发停留在2017年，所基于的JX版本老旧，缺失许多方法。因而诞生了这个项目。
- [https://github.com/Ctrl-Ling/XLSX-Style-Utils](https://github.com/Ctrl-Ling/XLSX-Style-Utils) 简称 XSU，其本体为xlsxStyle.utils.js


### 五、核心包描述

- xlsx.core.min.js JX最新版核心文件，建议在将网页表格导成workbook时使用其方法
- xlsxStyle.core.min.js XS最新版核心文件，因为其原本命名与JX一样，避免冲突改名成xlsxStyle
- xlsxStyle.utils.js 基于XS的方法二次封装，更好的控制导出excel的样式。简称XSU
