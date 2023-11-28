// ==UserScript==
// @name         BetterNoelshack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  BetterNoelshack
// @author       cogis
// @match        *://*.jeuxvideo.com/forums*
// @run-at       document-end
// @icon         https://www.google.com/s2/favicons?sz=64&domain=noelshack.com
// @grant        GM_xmlhttpRequest
// @connect      www.noelshack.com
// @downloadURL  https://github.com/jvscript/userscripts/raw/main/better-noelshack.user.js
// @updateURL    https://github.com/jvscript/userscripts/raw/main/better-noelshack.user.js
// ==/UserScript==

(function() {
    'use strict';
    const textArea = document.querySelector('#message_topic');

    textArea.addEventListener('drop', async (event) => {
        const dataTransfer = event.dataTransfer;
        if (dataTransfer.types && Array.from(dataTransfer.types).includes('Files')) {
            event.preventDefault();
            event.stopPropagation();
            const files = event.dataTransfer.files;
            handleFile(files);
        }

    });

    textArea.addEventListener('paste', async (event) => {       
        const clipboardData = event.clipboardData;
        if (clipboardData.types.includes('Files')) {
            event.preventDefault();
            const files = clipboardData.files;
            handleFile(files);
        }
    });

    // Upload image file and set the image link in text area
    async function handleFile(files) {
        for (const file of files) {
            if (file.type.includes("image")) {
                const formData = new FormData();
                formData.append('publication', '0');
                formData.append('domain', 'https://www.jeuxvideo.com');
                formData.append('fichier', file);

                const response = await sendRequest(formData);
                try {
                    const data = JSON.parse(response.responseText);
                    let imageUrl = data.url;
                    if(imageUrl) {
                        imageUrl = " " + imageUrl + " "
                        const position = textArea.selectionStart;
                        const before = textArea.value.substring(0, position);
                        const after = textArea.value.substring(position, textArea.value.length);
                        textArea.value = before + imageUrl + after;
                        textArea.selectionStart = textArea.selectionEnd = position + imageUrl.length;
                    }
                }
                catch (error) {
                    console.error("Error parsing JSON:", error);
                }
            }
        }

    }

    // Function to send XHR requests
    function sendRequest(formData) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'POST',
                url: 'https://www.noelshack.com/webservice/envoi.json',
                data: formData,
                onload: function(response) {
                    var responseXML = null;
                    // console.log(response);
                    resolve(response);
                },
                onerror: function(error) {
                    console.error(error);
                    reject(error);
                }
            });
        });
    }

})();
