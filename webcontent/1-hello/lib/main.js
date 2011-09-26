var pageMod = require("page-mod").PageMod({
  include: ['*'],
  contentScript: 'alert("Heellooooooo, Looondoooon!!!!")',
  contentScriptWhen: 'end',
});