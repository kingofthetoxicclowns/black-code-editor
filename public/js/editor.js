const clearButtonEl = document.querySelector("#clear");

var htmlEditor = ace.edit('html');
htmlEditor.setOptions({
  showPrintMargin: false
})
htmlEditor.setTheme("ace/theme/light");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.resize();
htmlEditor.setHighlightActiveLine(false);

var cssEditor = ace.edit("css");
cssEditor.setOptions({
  showPrintMargin: false
})
cssEditor.setTheme("ace/theme/light");
cssEditor.session.setMode("ace/mode/css");
cssEditor.resize();
cssEditor.setHighlightActiveLine(false);

var jsEditor = ace.edit("js");
jsEditor.setOptions({
  showPrintMargin: false
})
jsEditor.setTheme("ace/theme/light");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.resize();
jsEditor.setHighlightActiveLine(false);

function compiler() {
  var htmlValue = htmlEditor.getValue();
  var cssValue = cssEditor.getValue();
  var jsValue = jsEditor.getValue();
  var result = document.getElementById("result").contentWindow.document;

  result.open();
  result.writeln(
    "<style>" +
    cssValue +
    "</style>" +
    htmlValue +
    "<script>" +
    jsValue +
    "</script>"
  );
  result.close();
}

var allButtons = document.querySelectorAll("#button-wrapper button");
var allPanels = document.querySelectorAll("#ide-container .panel-wrapper");

function switchPanel(panelIndex) {
  switcher(panelIndex);
}

switchPanel(0);

function runEdit(panelIndex) {
  switcher(panelIndex);
  compiler();
}

function switcher(panelIndex) {
  allButtons.forEach(function (node) {
    node.style.background = "";
    node.style.color = "";
  });
  allButtons[panelIndex].style.background = "#ffffff";
  allButtons[panelIndex].style.color = "#000000";
  allPanels.forEach(function (node) {
    node.style.display = "none";
  });
  allPanels[panelIndex].style.display = "block";
}

function saveTextAsFile() {

            var name = prompt("Please Enter File Name (without .html) :");
            if (name != null && name != "") {
              var fileNameToSaveAs = name+".html";
              var htmlValue = htmlEditor.getValue();
              var cssValue = cssEditor.getValue();
              var jsValue = jsEditor.getValue();

                textToWrite = '<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Document</title>\n'+'<style>\n'+cssValue+'\n</style>\n'+'</head>\n<body>\n'+htmlValue+'\n\<script>\n'+jsValue+'\n\<\/script>\n</body>\n</html>';

                var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs;
                downloadLink.innerHTML = "Download File";
                if (window.webkitURL != null) {
                  downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
                }
                else {
                  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                  downloadLink.onclick = destroyClickedElement;
                  downloadLink.style.display = "none";
                  document.body.appendChild(downloadLink);
                }
                downloadLink.click();
                }
        }

clearButtonEl.addEventListener("click", () => {
  htmlEditor.setValue("");
  cssEditor.setValue("");
  jsEditor.setValue("");
})
