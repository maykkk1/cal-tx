
function getValue(resultadoDaSoma) {    
var tx5 = document.getElementById("tx5").value; ;
var tx8 = document.getElementById("tx8").value; ;
var resultadoDaSoma = (tx5*5) + (tx8*8) + ",00"
console.log(tx5, tx8)
document.getElementById("Resultado").innerHTML = resultadoDaSoma 
return resultadoDaSoma
}

