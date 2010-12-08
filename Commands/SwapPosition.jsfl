var selection = fl.getDocumentDOM().selection;
if (selection.length === 2) {
  var temp = {};
  temp.x = selection[0].x;
  temp.y = selection[0].y;
  selection[0].x = selection[1].x;
  selection[0].y = selection[1].y;
  selection[1].x = temp.x;
  selection[1].y = temp.y;
}
