// ==UserScript==
// @name         Fix risibank
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        https://risibank.fr/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=risibank.fr
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    .actions-right{ display: none }
    a[title="SkyCh.at"] { display: none }
    .mt-4 {margin: 0 !important }
` );
