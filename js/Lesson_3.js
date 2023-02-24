function minNum() {
    var Min = numArray[0];
    if(Min == undefined){
      document.querySelector("#txtTotal3").innerHTML =
      "Mảng trống!";
      return -1;
  }
    for (var i = 0; i < numArray.length; i++) {
      if (numArray[i] < Min) {
        Min = numArray[i];
      }
    }
    document.querySelector("#txtTotal3").innerHTML =
      "số " + Min + " là số nhỏ nhất !";
  }
  document.querySelector("#btnMin").onclick = minNum;