/**
 *  add new layer and write "this.stop();"
 *  @see http://bitmap.dyndns.org/blog/archives/001389.html
 */
var items = fl.getDocumentDOM().library.getSelectedItems();
for (var i = 0; i < items.length; i++) {
  fl.getDocumentDOM().library.editItem(items[i].name);
  var timeline = fl.getDocumentDOM().getTimeline();
  timeline.addNewLayer("script");
  timeline.layers[0].frames[0].actionScript = "this.stop();"; 
}
