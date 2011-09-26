var data = require("self").data;
var tabs = require("tabs");
 
tabs.on('activate', function(tab) {
  tab.attach({
    contentScript: 'if (confirm("EXTERMINATE???")) ' + 
        '{ document.body.innerHTML = \'<img src="http://dailypop.files.wordpress.com/2010/04/dalek.gif">\'; ' + 
        'document.body.style.display="block"; };'
  });
});
