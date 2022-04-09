// HISTORY FUNCTION TO RETRIEVE AND DISPLAY THE USER'S INPUT
function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

// HISTORY FUNCTION TO RETRIEVE AND DISPLAY THE USER'S RESULT
function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormatedNumber(num);
  }
}

function getFormatedNumber(num) {
  if (num == "") {
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

// FUNCTION TO CLEAR COMAS IN OUTPUT FIELD
function reverseNumberFormat(num) {
  return Number(num.toString().replace(/,/g, ""));
}

var operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        // if output has a value
        output = output.substring(0, output.length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();

      if (output == "" && history != "") {
        console.log("output 1: " + output);
        console.log("history 1: " + history);
        if (isNaN(history[history.length - 1])) {
          history = history.substring(0, history.length - 1);
        }
      }

      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }
      }
    }
  });
}

var number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = reverseNumberFormat(getOutput());
    if (!isNaN(output)) {
      // if output is a number
      output = output + this.id;
      printOutput(output);
    }
  });
}
