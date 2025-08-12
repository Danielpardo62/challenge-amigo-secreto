let d = document;
let amigos = [];
let lista = d.getElementById("listaAmigos");
let resultado = d.getElementById("resultado");

function agregarAmigo() {
  if (d.getElementById("amigo").value.trim() !== "") {
    amigos.push(d.getElementById("amigo").value.trim());
    limpiarCaja();
    listaHTML();
  } else {
    alert("Por favor, inserte un nombre.");
  }
  return;
}

function limpiarCaja() {
  return (d.getElementById("amigo").value = "");
}

function crearLi(texto) {
  let li = d.createElement("li");
  li.textContent = texto;
  return li;
}

function listaHTML() {
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    lista.appendChild(crearLi(amigos[i]));
  }
  return;
}

function sortearAmigo() {
  if (amigos.length !== 0) {
    lista.innerHTML = "";
    resultado.innerHTML = "";
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];
    resultado.appendChild(
      crearLi(`El amigo secreto sorteado es: ${nombreSorteado}`)
    );
  } else {
    alert("No has ingresado nombres para sortear.");
  }
  amigos = [];
}
