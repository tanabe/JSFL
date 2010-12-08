//right
(function () {
  var timeline = fl.getDocumentDOM().getTimeline();
  var selectedFrames = timeline.getSelectedFrames();
    timeline.setSelectedFrames([selectedFrames[0], selectedFrames[1] + 1, selectedFrames[1] + 2]);
})();
