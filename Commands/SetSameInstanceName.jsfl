/**
 *  ���ꃌ�C���[��̃I�u�W�F�N�g�ɓ������O��t����
 */
var instanceName = prompt("set same instance name", "");
//if (instanceName) {
  var timeline = fl.getDocumentDOM().getTimeline();
  var selectedLayers = timeline.getSelectedLayers();
  //�I�����ꂽ���C���[����ł��邱�Ƃ�����
  if (selectedLayers.length == 1) {
    var selectedLayer = timeline.layers[selectedLayers[0]];
    var frames = selectedLayer.frames;
    for (var i = 0; i < frames.length; i++) {
      var frame = frames[i];
      if (i == frame.startFrame) {
        var elements = frame.elements;
        //�t���[���ɃI�u�W�F�N�g��������u����ĂȂ����Ƃ�����
        if (elements.length == 1) {
          elements[0].name = instanceName || "";
        }
      }
    }
  }
//}

