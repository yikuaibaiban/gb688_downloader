// ==UserScript==
// @name         GB688 downloader;国标网下载
// @version      2024.09.26.01
// @license      Apache-2.0
// @namespace    https://github.com/yikuaibaiban/gb688_downloader
// @description  基于国标网显示规律在本地拼合成PDF并提供下载
// @author       yikuaibaiban
// @icon         data:image/png;base64,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
// @match        http://c.gb688.cn/*
// @grant        none
// ==/UserScript==

(function initStyles() {
    let style = document.createElement("style");
    style.appendChild(document.createTextNode(`/*编译器标记 勿删*/`));
    document.head.appendChild(style);
})();

// 编译器标记 勿删

(async function () {
    init()
})();