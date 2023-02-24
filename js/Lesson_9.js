var numArray2 = [];
function addNumber2() {
  var Num = document.querySelector("#txtnum3").value;
  numArray2.push(" " + Num + " ");
  document.querySelector("#txtArray2").innerHTML =
    "Array = [ " + numArray2 + " ]; ";
}
document.querySelector("#btnNum2").onclick = addNumber2;

function checkInt(a){
  var Count = 0;
    if (Math.floor(a) != Math.ceil(a)) {
         return Count = 0;
    }
        return Count = 1;
}

function countInt() {
  var Count = 0;
  for (var i = 0; i < numArray2.length; i++) {
    var Check = checkInt(numArray2[i]);
    if(Check == 1){
      Count ++;
    }
  }
  if (Count == 0) {
    return (document.getElementById("txtTotal9").innerHTML =
      "Không có số nguyên trong mảng!");
  } else {
    return (document.getElementById("txtTotal9").innerHTML =
      "Có " + Count + " số nguyên trong mảng!");
  }
}
document.getElementById("btnInterger").onclick = countInt;
