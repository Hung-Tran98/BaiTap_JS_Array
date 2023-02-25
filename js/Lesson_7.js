var numArrayCopy = [];
function numberSort() {
  for (var i = 0; i < numArray.length; i++) {
    numArrayCopy.push(numArray[i]);
  }
  document.querySelector("#txtTotal7").innerHTML =
    "Sắp xếp mảng tăng dần :" +
    numArrayCopy.sort(function sortUp(a, b) {
      return a - b;
    });
}
document.querySelector("#btnNumSort").onclick = numberSort;
