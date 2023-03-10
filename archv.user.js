// ==UserScript==
// @name         JvArchive
// @author       unknown
// @description  Redirige les 410 vers jvarchive.com
// @version      0.2
// @grant        none
// @match	 ^(http|https):\/\/www\.jeuxvideo\.com\/forums\/(.*)$/
// @downloadURL  https://github.com/jvscript/userscripts/raw/main/archv.user.js
// @updateURL    https://github.com/jvscript/userscripts/raw/main/archv.user.js
// ==/UserScript==


let topic410 = false;
if(document.getElementsByClassName("img-erreur")[0] && document.getElementsByClassName("img-erreur")[0].src == "https://www.jeuxvideo.com/img/erreurs/e410.png"){
	topic410 = true;
}

if(topic410){
    var url = document.location.href.replace("jeuxvideo.com","jvarchive.com");
    document.location.href=url;
}
