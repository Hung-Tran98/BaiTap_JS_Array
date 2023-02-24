function numSwap() {
    var Num1 = document.querySelector("#txtnum1").value;
    var Num2 = document.querySelector("#txtnum2").value;
    [numArray[Num1], numArray[Num2]] = [numArray[Num2], numArray[Num1]];
    document.querySelector("#txtTotal6").innerHTML =
      "Mảng sau khi đổi : " + numArray;
      console.log(numArray);
  }
  document.querySelector("#btnSwap").onclick = numSwap;