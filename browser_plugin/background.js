function logURL(requestDetails) {
    if (requestDetails.method != "GET") {
        return;
    }

    fetch('http://localhost:1928/url', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: requestDetails.url }),
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
        });
}

browser.webRequest.onCompleted.addListener(
    logURL,
    { urls: ["<all_urls>"] }
);
