// @copyright   2013+, Alexander Korkov korkov@yandex.ru

function load(src, onload) {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL(src);
    (document.head||document.documentElement).appendChild(s);
    s.onload = onload;
}

var oh_my_audio = undefined;

function load_settings(onload) {
    chrome.extension.sendRequest({method: "oh-my-audio-filters"}, function(response) {
        if (response) {
            var s = document.createElement('script');
            s.text = "var oh_my_audio_filters = " + JSON.stringify(response) + ";";
            (document.head||document.documentElement).appendChild(s);
            onload();
        }
        else
            console.error("response undefined");
    });
}

load("lib/jquery.min.js", function() {
    load_settings(function() {
        load("oh-my-audio.filters.user.js");
    });
});
