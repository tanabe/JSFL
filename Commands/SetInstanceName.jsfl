/**
 *  open setting selected instance name prompt
 *  @see http://bitmap.dyndns.org/blog/archives/001581.html
 */
var instanceName = prompt("set intance name", "");
if (instanceName) {
  fl.getDocumentDOM().selection[0].name = instanceName;
}
