function countNum() {
    var Count = 0;
    for (var i = 0; i < numArray.length; i++) {
      if (numArray[i] >= 0) {
        Count++;
      }
    }
    document.querySelector("#txtTotal2").innerHTML = "Có " + Count + " số dương";
  }
  document.querySelector("#btnCount").onclick = countNum;