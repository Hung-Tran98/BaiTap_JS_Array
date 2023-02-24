var numArray = [];
function addNumber() {
  var Num = document.querySelector("#txtnum").value;
  numArray.push(" " + Num + " ");
  document.querySelector("#txtArray").innerHTML =
    "Array = [ " + numArray + " ]; ";
}
document.querySelector("#btnNum").onclick = addNumber;


function totalPositivity() {
  var Total = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] >= 0) {
      Total += Number(numArray[i]);
    }
  }
  document.querySelector("#txtTotal1").innerHTML = "Kết quả = " + Total;
}
document.querySelector("#btnSum").onclick = totalPositivity;