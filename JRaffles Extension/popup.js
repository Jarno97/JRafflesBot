document.addEventListener('DOMContentLoaded', function () {
  const delay = time => new Promise(res => setTimeout(res, time))
  var codeField = document.getElementById('codes');
  var checkButton = document.getElementById('check');
  var AfewButton = document.getElementById('Afew');
  checkButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { method: "mahaCodes" }, async function (response) {
        if (response.text != null || response.text != undefined) {
          await delay(1000);
          codeField.innerText = response.text;
        }
      });
    });
  }, false);
  AfewButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { method: "afew" }, async function (response) {
        if (response.text != null || response.text != undefined) {
          await delay(1000);
          let links = [];
          links = response.text.split(';');
          codeField.innerText = links
          for (let i = 0; i < links.length; i++) {
            chrome.tabs.create({ url: links[i], active: false });
            await delay(1000);
          }
        }
      });
    });
  }, false);

})