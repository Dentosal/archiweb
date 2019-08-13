document.querySelector("button#settings").onclick = function() {
    chrome.runtime.openOptionsPage();
    window.close();
}