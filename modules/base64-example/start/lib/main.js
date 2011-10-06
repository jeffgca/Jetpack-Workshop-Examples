const widgets = require("widget");
const tabs = require("tabs");

// This addon doesn't actually do anything. It only exists to test the
// base64.js module that you should write.

var widget = widgets.Widget({
  id: "mozilla-link",
  label: "Mozilla website",
  contentURL: "http://www.mozilla.org/favicon.ico",
  onClick: function() {
    tabs.open("http://www.mozilla.org/");
  }
});

console.log("The add-on is running.");
