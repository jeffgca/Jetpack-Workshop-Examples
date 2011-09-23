// Context-menu example.
let contextMenu = require('context-menu');
contextMenu.Item({
  label: 'Search Stack Overflow',
  image: require('self').data.url('favicon.ico'),
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", self.postMessage);',
  onMessage: function () {
    let selection = require('selection').text;
    let url = 'http://stackoverflow.com/search?q=' + selection;
    require('tabs').open(url);
  }
});


// Widget example.
require("widget").Widget({
  id: "StackOverflowJetpack",
  label: "Stack Overflow Search - Jetpack",
  contentURL: require('self').data.url('favicon.ico'),
  onClick: function() {
    require('tabs').open('http://stackoverflow.com/search?q=jetpack');
  }
});


// Panel example.
var panel = require("panel").Panel({
  contentURL: 'http://stackoverflow.com/search?q=jetpack'
});

require("widget").Widget({
  id: "StackOverflowJetpackPanel",
  label: "Stack Overflow Search - Jetpack",
  contentURL: require('self').data.url('favicon.ico'),
  panel: panel
});


// Notifications example.
require("notifications").notify({
  text: "New Stack Overflow Question!",
  iconURL: require('self').data.url('favicon.ico')
});


// Advanced notifications example.
var count = 0;
require('timers').setInterval(function() {
  require('page-worker').Page({
    contentURL: 'http://stackoverflow.com/search?q=jetpack',
    contentScript: 'self.postMessage({count: document.querySelector(".summarycount").innerHTML});',
    onMessage: function(msg) {
      if (msg.count > count) {
        require('notifications').notify({
          text: 'New Stack Overflow Question: ' + msg.count,
          iconURL: require('self').data.url('favicon.ico')
        });
      }
      this.destroy();
    }
  });
}, 5 * 60 * 1000);
