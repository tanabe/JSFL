/**
 *  set library name to selected instance name
 *  @see http://bitmap.dyndns.org/blog/archives/001398.html
 */
var selectedItems = fl.getDocumentDOM().selection;
for (var i = 0; i < selectedItems.length; i++) {
    var element = selectedItems[i];
    var regex = /(.*\/)?(.*)$/;
    var result = regex.exec(element.libraryItem.name);
    element.name = result[2];
}
