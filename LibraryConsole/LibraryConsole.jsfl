var names = [];
var library;
var items;

//initNames
function initNames() {
  names = [];
  library = fl.getDocumentDOM().library;
  items = library.items;
  for (var i = 0; i < items.length; i++) {
    names.push(items[i].name);
  }
}

//getNames
function getNames() {
  initNames();
  return names;
}

//run
function run(commands) {
  initNames();
  commands = commands.replace(/\s+$/, "");
  commands = commands.split(" ");
  var command = commands[0];
  var args = commands.slice(1, commands.length);
  if (this[command] != undefined) {
    this[command].apply(this, args);
  }
}

//ls
function ls() {
  if (arguments.length > 0) {
    var dir = arguments[0].replace(/[^\/]$/, "$&/");
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (name.match(new RegExp(dir))) {
        fl.trace(name);
      }
    }
  } else {
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (!name.match(/\//)) {
        fl.trace(name);
      }
    }
  }
}

//mv
function mv() {
  var source = arguments[0];
  var dest = arguments[1].replace(/\/$/, "");

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (name.match(new RegExp(source, "i"))) {
      library.moveToFolder(dest, name, true);
    }
  }
}

//cp
function cp() {
  var source = arguments[0];
  library.duplicateItem(source);
}

//rm
function rm() {
  var source = (arguments[0].match(/\$$/) == null) ? arguments[0] + "$" : arguments[0];
  source = "^" + source;
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (name.match(new RegExp(source, "i"))) {
      library.deleteItem(name);
    }
  }
}


//claer
function clear() {
  fl.outputPanel.clear();
}

//suggest
function suggest(word) {
  initNames();
  var result = [];
  for (var i =0; i < names.length; i++) {
    if (names[i].match(new RegExp("^" + word, "i"))) {
      result.push(names[i]);
    }
  }
  return result;
}
