//up
(function () {
  var timeline = fl.getDocumentDOM().getTimeline();
  var selectedFrames = timeline.getSelectedFrames();
  if ((selectedFrames[0] - 1) >= 0) {
    timeline.setSelectedFrames([selectedFrames[0] - 1, selectedFrames[1], selectedFrames[1] + 1]);
  }
})();
