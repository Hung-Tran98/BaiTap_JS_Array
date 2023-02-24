function sortUp(a, b) {
  return a - b;
}
var numArrayCopy = [];
function numberSort() {
  for (var i = 0; i < numArray.length; i++) {
    numArrayCopy.push(numArray[i]);
  }
  document.querySelector("#txtTotal7").innerHTML =
    "Sắp xếp mảng tăng dần :" + numArrayCopy.sort(sortUp);
  console.log(numArrayCopy);
  console.log(numArray);
}
document.querySelector("#btnNumSort").onclick = numberSort;
