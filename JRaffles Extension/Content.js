chrome.runtime.onMessage.addListener(
    async function (request, sender, sendResponse) {
        if (request.method == "mahaCodes") {
            let codes = [];
            async function makeList() {
                var mahaCodes = document.querySelectorAll("td > a");

                for (var i = 0; i < mahaCodes.length; i += 1) {
                    if (mahaCodes[i].innerHTML.indexOf("Yes,") != -1) {
                        codes.push(mahaCodes[i].href);
                    }
                }
            }
            await makeList();
            await sendResponse({ method: "scrapeCodes", text: codes.join(";") });
        } else if (request.method == "afew") {
            let codes = [];
            async function makeList() {
                var mahaCodes = document.querySelectorAll("td > a");

                for (var i = 0; i < mahaCodes.length; i += 1) {
                    if (mahaCodes[i].innerHTML.indexOf("CONFIRM") != -1) {
                        codes.push(mahaCodes[i].href);
                    }
                }
            }
            await makeList();
            await sendResponse({ method: "afew", text: codes.join(";") });
        }
    }
)