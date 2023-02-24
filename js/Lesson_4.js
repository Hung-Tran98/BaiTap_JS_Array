function minNumPositivity() {
    var Min = 0;
    var Count = 0;
    for (var i = 0; i < numArray.length; i++) {
      if (numArray[i] > 0) {
        Min = numArray[i];
        Count++;
        break;
      }
    }
    if (Count != 0) {
      for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0 && numArray[i] < Min) {
          Min = numArray[i];
        }
      }
      document.querySelector("#txtTotal4").innerHTML =
        "số " + Min + " là số dương nhỏ nhất !";
    } else {
      document.querySelector("#txtTotal4").innerHTML =
        "Không có số dương nào trong mảng!";
    }
  }
  document.querySelector("#btnMinPositivity").onclick = minNumPositivity;