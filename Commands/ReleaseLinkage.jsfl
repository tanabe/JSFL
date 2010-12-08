/**
 *  選択したアイテムのリンケージを解除する
 */
(function (document) {
  var library = document.library;
  var selectedItems = library.getSelectedItems();
  for (var i = 0; i < selectedItems.length; i++) {
    var item = selectedItems[i];
    item.linkageExportInFirstFrame = false;
    item.linkageExportForAS = false;
  }
})(fl.getDocumentDOM());
