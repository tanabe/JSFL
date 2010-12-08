fl.trace("start swap");

var library = fl.getDocumentDOM().library;
var selectedItems = library.getSelectedItems();

var itemA = selectedItems[0];
var itemB = selectedItems[1];

var source;
var target;

var sourceLinkageClassName;
var sourceLinkageBaseClass;
var sourceLinkageExportInFirstFrame;

var targetLinkageClassName;
var targetLinkageBaseClass;
var targetLinkageExportInFirstFrame;

if (itemA.linkageExportForAS) {
  source = itemA;
  target = itemB;
} else {
  source = itemB;
  target = itemA;
}

sourceLinkageClassName = source.linkageClassName;
sourceLinkageBaseClass = source.linkageBaseClass;
sourceLinkageExportInFirstFrame = source.linkageExportInFirstFrame;

targetLinkageClassName = target.linkageClassName;
targetLinkageBaseClass = target.linkageBaseClass;
targetLinkageExportInFirstFrame = target.linkageExportInFirstFrame;

source.linkageExportInFirstFrame = false;
source.linkageExportForAS = false;

target.linkageExportForAS = true;
target.linkageExportInFirstFrame = sourceLinkageExportInFirstFrame;
target.linkageBaseClass = sourceLinkageBaseClass;
target.linkageClassName = sourceLinkageClassName;

if (targetLinkageClassName) {
  source.linkageExportForAS = true;
  source.linkageExportInFirstFrame = targetLinkageExportInFirstFrame;
  source.linkageBaseClass = targetLinkageBaseClass;
  source.linkageClassName = targetLinkageClassName;
}

fl.trace("done");
