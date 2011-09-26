var tabs = require("tabs");
var url = require("self").data.url("index.html");

tabs.on("ready", 
    function(tab) {
        if (tab.url == url) {
            tab.attach({
                contentScript: 'window.addEventListener("message", '+
                  'function(ev) { alert("In content script, got: "+ ev.data);});'
            });    
        }
    }
);

tabs.open(url);
