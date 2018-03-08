
//var resposta = confirm("Deseja excluir?");

/*
console.log(resposta);
*/

var a = 10;
var b = 33;

function somar(a, b){

	return a + b;

}

console.log(somar(2, 5));

document.getElementById("btn-calcular").onclick = function(){

	var valorA = document.getElementById("valor-a").value;
	var valorB = document.getElementById("valor-b").value;
    
    if (valorA > 0 && valorB > 0) {
        alert(parseInt(valorA) + parseInt(valorB));
    }
    else {
	    alert("digite os valores");
        }
}