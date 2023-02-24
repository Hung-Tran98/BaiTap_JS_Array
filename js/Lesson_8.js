function primeNum() {
    var Count = 0;
    if (numArray != null) {
      for (var i = 0; i < numArray.length; i++) {
        for (var j = 1; j <= numArray[i]; j++) {
          if (numArray[i] % j == 0) Count++;
        }
        if (Count == 2) {
          document.querySelector("#txtTotal8").innerHTML =
            "Số nguyên tố là : " + numArray[i];
          return numArray[i];
        }
        Count = 0;
      }
      return (document.querySelector("#txtTotal8").innerHTML = "-1");
    }
    
  }
  document.querySelector("#btnPrimeNum").onclick = primeNum;