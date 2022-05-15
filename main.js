var data = [
  {
    IndexText: "<h1>3022 Future Teller </h1><span>Hi, there_<br/><br/>You finally found this website! I am your cyber diviner from the future_</span><br/><br/><br/><span>Would you mind telling me your name?</span><br/><br><br><h2> Enter your name_</h2>",
    SecondPageText: "<span>Wooo! Exciting?! Let me tell you your future!</span><br><br>"
  }
];

var adj = [
  "Savvy", "Emotional", "Amazing", "Fancy", "Wild", "Creepy",
];
var noun1 = [
  "A-level", "B-level", "C-levl", "D-level",
];

var noun2 = [
  "Cyber Budda", "Cyber Poet", "VR Architect", "Outerspace Exploer", "Technologist", "Prosthesis Expert", "AI"
];

data[0].IndexText+="<form type=get action=\"2.html\"><table><tr><td>Name:</td><td><input type=text name=name size=10></td></tr><tr><td colspan=2><input type=submit value=\"Submit\"></td></tr></table></form>"

var vadj = Math.floor(Math.random() * adj.length);
var vnoun1 = Math.floor(Math.random() * noun1.length);
var vnoun2 = Math.floor(Math.random() * noun2.length);

function getParams() {
  var idx = document.URL.indexOf('?');
  var params = new Array();
  if (idx != -1) {
      var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
      for (var i = 0; i < pairs.length; i++) {
          nameVal = pairs[i].split('=');
          params[nameVal[0]] = nameVal[1];
      }
  }
  return params;
}
params = getParams();
myName = unescape(params["name"]);


data[0].SecondPageText += "<h3>" +myName+ "</h3>"+ "<h4> You are the " + "<br>" + adj[vadj] + " <br>"
  + noun1[vnoun1] + " <br>" + noun2[vnoun2] + "</h4>";


var allElements = document.getElementsByClassName("typeing");
for (var j = 0; j < allElements.length; j++) {
  var currentElementId = allElements[j].id;
  var currentElementIdContent = data[0][currentElementId];
  var element = document.getElementById(currentElementId);
  var devTypeText = currentElementIdContent;

  // type code
  var i = 0, isTag, text;
  (function type() {
    text = devTypeText.slice(0, ++i);
    if (text === devTypeText) return;
    element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
    var char = text.slice(-1);
    if (char === "<") isTag = true;
    if (char === ">") isTag = false;
    if (isTag) return type();
    setTimeout(type, 60);
  })();
}
