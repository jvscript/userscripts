// ==UserScript==
// @name         Fix risibank
// @namespace    fix_risibank
// @version      0.1
// @match        https://risibank.fr/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=risibank.fr
// @grant        GM_addStyle
// @description  Fix risibank CSS
// ==/UserScript==

GM_addStyle (`
    .actions-right{ display: none }
    a[title="SkyCh.at"] { display: none }
    .mt-4, .mt-2 {margin: 0 !important }
`);
