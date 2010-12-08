/**
 *  move to 0,0 origin
 */
var doc = fl.getDocumentDOM();
for (var i in doc.selection) {
  doc.selection[i].x = 0;
  doc.selection[i].y = 0;
}
