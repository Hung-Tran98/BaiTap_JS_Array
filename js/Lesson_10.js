function CompareNum(){
    var countNegative = 0;
    var countPositive = 0;
    for (var i = 0; i < numArray.length; i++) {
        if(numArray[i] > 0){
            countPositive++;
        }
        else if(numArray[i] < 0 ){
            countNegative++;
        }
        else{
            alert("Lỗi to chà bá!") ;
        }
    }
    if(countNegative > countPositive){
        document.getElementById("txtTotal10").innerHTML = "Số dương < số âm";
    }else if(countNegative < countPositive){
        document.getElementById("txtTotal10").innerHTML = "Số dương > số âm";
    }else{
        document.getElementById("txtTotal10").innerHTML = "Số dương = số âm";
    }
}
document.getElementById("btnCompareNum").onclick = CompareNum;