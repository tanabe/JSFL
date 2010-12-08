/**
 *  同一レイヤー上のオブジェクトに同じ名前を付ける
 */
var instanceName = prompt("set same instance name", "");
//if (instanceName) {
  var timeline = fl.getDocumentDOM().getTimeline();
  var selectedLayers = timeline.getSelectedLayers();
  //選択されたレイヤーが一つであることが条件
  if (selectedLayers.length == 1) {
    var selectedLayer = timeline.layers[selectedLayers[0]];
    var frames = selectedLayer.frames;
    for (var i = 0; i < frames.length; i++) {
      var frame = frames[i];
      if (i == frame.startFrame) {
        var elements = frame.elements;
        //フレームにオブジェクトが一つしか置かれてないことが条件
        if (elements.length == 1) {
          elements[0].name = instanceName || "";
        }
      }
    }
  }
//}

