function evenNumber() {
  var Count = 0;
  for (i = numArray.length - 1; i >= 0; i--) {
    if (numArray[i] % 2 == 0) {
      document.querySelector("#txtTotal5").innerHTML =
        "Số chẵn cuối cùng trong mảng = " + numArray[i];
      Count++;
      return numArray[i];
    }
  }
  if (Count < 1) {
    return (document.querySelector("#txtTotal5").innerHTML = "-1");
  }
}

document.querySelector("#btnevenNumber").onclick = evenNumber;
