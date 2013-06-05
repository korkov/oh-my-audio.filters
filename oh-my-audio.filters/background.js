if (localStorage["show_mp3"] == undefined)
    localStorage["show_mp3"] = true;
if (localStorage["exact_search"] == undefined)
    localStorage["exact_search"] = true;

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "oh-my-audio-filters")
      sendResponse(localStorage);
    else
      sendResponse({});
});
