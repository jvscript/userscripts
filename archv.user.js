// ==UserScript==
// @name         archv.js
// @author       unknown
// @description  Redirige les 410 vers jvarchive.com
// @version      0.1
// @grant        none
// @include		/^(http|https):\/\/www\.jeuxvideo\.com\/forums\/(.*)$/
// ==/UserScript==


let topic410 = false;
if(document.getElementsByClassName("img-erreur")[0] && document.getElementsByClassName("img-erreur")[0].src == "https://www.jeuxvideo.com/img/erreurs/e410.png"){
	topic410 = true;
}

if(topic410){
    var url = document.location.href.replace("jeuxvideo.com","jvarchive.com");
    document.location.href=url;
}
