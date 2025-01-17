// ==UserScript==
// @name         410 Redirect
// @author       unknown
// @description  Redirige les 410 vers jeuxvideo.to
// @icon         https://jvarchive.st/favicon-32x32.png
// @version      0.6
// @grant        none
// @run-at       document-body
// @include      /^(http|https):\/\/www\.jeuxvideo\.com\/(.*)$/
// @downloadURL  https://github.com/jvscript/userscripts/raw/main/archv.user.js
// @updateURL    https://github.com/jvscript/userscripts/raw/main/archv.user.js
// ==/UserScript==



let topic410 = document.getElementsByClassName("img-erreur")[0] &&
    ( document.getElementsByClassName("img-erreur")[0].src == "https://www.jeuxvideo.com/img/erreurs/e410.png" ||
    document.getElementsByClassName("img-erreur")[0].src == "https://www.jeuxvideo.com/img/erreurs/e404.png" );

if(topic410){
    var url = document.location.href.replace("www.jeuxvideo.com","jvarchive.st");
    document.location.href=url;
}
