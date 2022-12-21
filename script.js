

function clicar() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var res = document.getElementById("resultado");
    n1 = Number(n1)
    n2 = Number(n2)
    var imc = n2/((n1 * n1)/10000)
    if (imc<  18.5) {
    res.innerHTML = `O resultado do IMC é de ${imc.toFixed(1)}. e está abaixo do normal, procure um médico especialista`
    } else if (imc > 18.5 && imc <= 24.9){
    res.innerHTML = `O resultado do IMC é de ${imc.toFixed(1)} e está normal.`
    } else if (imc > 25 && imc<= 29.9){
    res.innerHTML = `O resultado do IMC é de ${imc.toFixed(1)} e está acima do normal, procure um médico especialista.`
    } else if (imc > 30) {
    res.innerHTML = `O resultado do IMC é de ${imc.toFixed(1)} procure um médico especialista com urgência.`
    } else {
    res.innerHTML = `Parametro incorreto, por favor, insira novamente.`
    }
    return

}