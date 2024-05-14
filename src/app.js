/* eslint-disable */
import "bootstrap";
import "./style.css";

const simbolos = ["♦", "♥", "♠", "♣"];
const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];

function getCardsRandom() {
  const simboloRandom = simbolos[Math.floor(Math.random() * simbolos.length)];
  const valorRandom = valores[Math.floor(Math.random() * valores.length)];
  return { simbolo: simboloRandom, valor: valorRandom };
}

function showUsCards() {
  const carta = getCardsRandom();
  const cartaElement = document.querySelector(".carta");
  const numeroElement = cartaElement.querySelector(".numero");
  const simboloElement = cartaElement.querySelector(".simbolo");
  const simboloInvertidoElement = cartaElement.querySelector(
    ".simbolo-invertido"
  );

  numeroElement.textContent = carta.valor;
  simboloElement.textContent = carta.simbolo;
  simboloInvertidoElement.textContent = carta.simbolo;

  if (carta.simbolo === "♥" || carta.simbolo === "♦") {
    simboloElement.style.color = "red";
    numeroElement.style.color = "red";
    simboloInvertidoElement.style.color = "red";
  } else {
    simboloElement.style.color = "black";
    numeroElement.style.color = "black";
    simboloInvertidoElement.style.color = "black";
  }
}

var boton = document.getElementById("miBoton");
boton.addEventListener("click", function showUsCards() {
  location.reload();
});

window.onload = function() {
  showUsCards();
};
