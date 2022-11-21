var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  var fausto = document.getElementById("fausto");
  var faustoCerto = document.getElementById("faustoCerto");

  if (chute == numeroSecreto) {
    faustoCerto.style.display = "block";
    fausto.style.display = "none";
    elementoResultado.innerHTML = "Acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 à 10";
  } else if (chute > numeroSecreto) {
    fausto.style.display = "block";
    faustoCerto.style.display = "none";
    elementoResultado.innerHTML =
      "Errou! O número secreto é menor que " + chute;
  } else if (chute < numeroSecreto) {
    fausto.style.display = "block";
    faustoCerto.style.display = "none";
    elementoResultado.innerHTML =
      "Errou! O número secreto é maior que " + chute;
  }
}
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    Chutar();
  }
});