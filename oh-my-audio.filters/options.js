function save_options() {
    localStorage["show_mp3"] = document.getElementById("show_mp3").checked;
    localStorage["exact_search"] = document.getElementById("exact_search").checked;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = chrome.i18n.getMessage("saved");
    setTimeout(function() {
        status.innerHTML = "";
    }, 750);
}

function restore_options() {
    document.getElementById("show_mp3").checked = localStorage["show_mp3"] == "true";
    document.getElementById("exact_search").checked = localStorage["exact_search"] == "true";
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);

var objects = document.getElementsByTagName('*');
for(var i = 0; i < objects.length; i++) {
    if (objects[i].dataset && objects[i].dataset.message) {
        objects[i].innerHTML = chrome.i18n.getMessage(objects[i].dataset.message);
    }
}
