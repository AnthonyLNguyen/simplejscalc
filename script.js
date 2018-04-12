window.save = 0;
window.saveused = 0;
window.newvalue = 0;
window.currop = "none";

function append(val) {
  if (document.getElementById("screen").value.includes(".") && val === "."){
  } else {
  if (window.newvalue === 1) {
    document.getElementById("screen").value = "0";
    window.newvalue = 0;
  }
  if (document.getElementById("screen").value === "0" && val != ".") {
    document.getElementById("screen").value = "";
  }
  document.getElementById("screen").value += val;
  }
}

function undo(){
  if (window.newvalue === 1) {
    document.getElementById("screen").value = "0";
    window.newvalue = 0;
  }
  
    document.getElementById("screen").value = document.getElementById("screen").value.substring(0, document.getElementById("screen").value.length - 1);
  if (document.getElementById("screen").value === "") {
    document.getElementById("screen").value = "0";
  }
}

function memory() {
  window.save = parseFloat(document.getElementById("screen").value);
  window.saveused = 1;
}

function softreset() {
  window.save = 0;
  window.saveused = 0;
  window.currop = "none";
}

function reset() {
  window.save = 0;
  window.saveused = 0;
  document.getElementById("screen").value = "0";
  window.currop = "none";
  window.newvalue = 0;
}

function ins(val) {
  append(val);
}

function math(op) {
  if (window.saveused === 1){
    equals();
  }
  window.currop = op;
  window.newvalue = 1;
  memory();
}

function eqbut(){
  equals();
  softreset();
  window.newvalue = 1;
}

function equals() {
  if (window.saveused === 1) {
    var op = window.currop;
    if (op === "+") {
      document.getElementById("screen").value =
        parseFloat(document.getElementById("screen").value) + window.save;
    }
    if (op === "-") {
      document.getElementById("screen").value =
        -parseFloat(document.getElementById("screen").value) + window.save;
    }
    if (op === "*") {
      document.getElementById("screen").value =
        parseFloat(document.getElementById("screen").value) * window.save;
    }
    if (op === "/") {
      document.getElementById("screen").value =
        1 / parseFloat(document.getElementById("screen").value) * window.save;
    }
  }
}
