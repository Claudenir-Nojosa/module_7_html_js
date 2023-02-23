

function check() {
    let primeiroNumero = document.getElementById("numA").value;
    let segundoNumero = document.getElementById("numB").value;

    if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
        document.getElementById("resultNaN").style.display ='block';
    } else {
        if (primeiroNumero > segundoNumero) {
            document.getElementById("resultA").style.display = 'block';
        } else if (primeiroNumero == segundoNumero) {
            document.getElementById("resultEqual").style.display = 'block';
        } else if (primeiroNumero < segundoNumero) {
            document.getElementById("resultB").style.display = 'block';
        }
    }
}

