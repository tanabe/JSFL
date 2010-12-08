package {

  import adobe.utils.*;
  import flash.display.*;
  import flash.events.*;
  import flash.text.*;
  import flash.ui.*;

  public class LibraryConsole extends MovieClip {

    private static var JSFL_PATH:String = "file:///path/to/LibraryConsole.jsfl";
    private var fileNames:Array;
    private var suggestions:Array;

    public function LibraryConsole() {
      initialize();
      input.tabEnabled = false;
    }

    public function initialize():void {
      fileNames = runScript(JSFL_PATH, "getNames", "").split(",");

      addEventListener(KeyboardEvent.KEY_DOWN, function(event:KeyboardEvent):void {
        //enter
        if (event.keyCode == Keyboard.ENTER) {
          runScript(JSFL_PATH, "run", input.text);
          input.text = "";
        }

        //tab
        if (event.keyCode == Keyboard.TAB) {
          var wordStartIndex:int =input.text.lastIndexOf(" ", input.caretIndex) + 1;
          var wordEndIndex:int = input.caretIndex;

          var word:String = input.text.substring(wordStartIndex, wordEndIndex);
          var suggestions:Array = runScript(JSFL_PATH, "suggest", word).split(",");
          if (suggestions.length > 0) {
            input.replaceText(wordStartIndex, wordEndIndex, suggestions[0]);
            input.setSelection(input.text.length, input.text.length);
          }
        }
      });
    }

    private function runScript(path:String, func:String, param:String):* {
      var jsfl:String = 'fl.runScript("' + arguments.join('","') + '");';
      return MMExecute(jsfl);
    }
  }
}
