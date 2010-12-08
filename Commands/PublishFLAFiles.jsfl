/**
 *  publish all .fla files
 *  @see http://bitmap.dyndns.org/blog/archives/001198.html
 */
var dir = fl.browseForFolderURL("select target folder");

var fileList = FLfile.listFolder(dir + "/*.fla", "files");

for (var i = 0; i < fileList.length; i++) {
  var file = dir + "/" + fileList[i];
  var doc = fl.openDocument(file);
  doc.publish();
  doc.close();
}
