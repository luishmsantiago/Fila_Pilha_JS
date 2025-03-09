function addPilha() {
  var valor = document.getElementById("addTexto").value;

  if (valor.trim() === "") {
    alert("Digite um valor antes de adicionar à pilha");
    return;
  }

  for (var i = 1; i <= 5; i++) {
    var celula = document.getElementById("pilha" + i);
    if (celula.innerHTML === "") { 
      celula.innerHTML = valor;
      document.getElementById("addTexto").value = ""; // Limpa o input
      return;
    }
  }

  alert("A pilha está cheia (Overflow)!");
}

function addFila() {
  var valor = document.getElementById("addTexto").value;

  if (valor.trim() === "") {
    alert("Digite um valor antes de adicionar à Fila");
    return;
  }

  for (var i = 1; i <= 5; i++) {
    var celula = document.getElementById("fila" + i);
    if (celula.innerHTML === "") { 
      celula.innerHTML = valor;
      document.getElementById("addTexto").value = ""; // Limpa o input
      return;
    }
  }

  alert("A fila está cheia! (Overflow)");	
}

function filaToPilha() {
  if (document.getElementById("pilha5").innerHTML !== "") {
    alert("A Pilha está cheia! (Overflow)");
    return;
  }

  // Encontrar o primeiro elemento da fila (FIFO)
  let primeiraCelulaFilaIndex = null;
  for (let i = 1; i <= 5; i++) {
    if (document.getElementById("fila" + i).innerHTML !== "") {
      primeiraCelulaFilaIndex = i;
      break;
    }
  }

  if (primeiraCelulaFilaIndex === null) {
    alert("A fila está vazia (Underflow)!");
    return;
  }

  // Encontrar o primeiro espaço vazio na pilha
  let primeiraCelulaPilha = null;
  for (let i = 1; i <= 5; i++) {
    if (document.getElementById("pilha" + i).innerHTML === "") {
      primeiraCelulaPilha = document.getElementById("pilha" + i);
      break;
    }
  }

  // Transferência do primeiro item da fila para a pilha
  if (primeiraCelulaPilha) {
    primeiraCelulaPilha.innerHTML = document.getElementById("fila" + primeiraCelulaFilaIndex).innerHTML;
    document.getElementById("fila" + primeiraCelulaFilaIndex).innerHTML = ""; // Esvazia a célula da fila
  }
}

function pilhaToFila() {
  if (document.getElementById("fila5").innerHTML !== "") {
    alert("A Fila está cheia! (Overflow)");
    return;
  }

  // Encontrar o último elemento da pilha
  let ultimaCelulaPilhaIndex = null;
  for (let i = 5; i >= 1; i--) {
    if (document.getElementById("pilha" + i).innerHTML !== "") {
      ultimaCelulaPilhaIndex = i;
      break;
    }
  }

  if (ultimaCelulaPilhaIndex === null) {
    alert("A pilha está vazia! (Underflow)");
    return;
  }

  // Encontrar a última posição ocupada na fila
  let ultimaOcupadaFilaIndex = 0;
  for (let i = 1; i <= 5; i++) {
    if (document.getElementById("fila" + i).innerHTML !== "") {
      ultimaOcupadaFilaIndex = i;
    }
  }

  // O próximo espaço válido na fila será o imediatamente após o último ocupado
  let proximaCelulaFilaIndex = ultimaOcupadaFilaIndex + 1;
  
  // Se a posição calculada estiver dentro do limite, faz a transferência
  if (proximaCelulaFilaIndex <= 5) {
    document.getElementById("fila" + proximaCelulaFilaIndex).innerHTML =
      document.getElementById("pilha" + ultimaCelulaPilhaIndex).innerHTML;

    document.getElementById("pilha" + ultimaCelulaPilhaIndex).innerHTML = ""; // Esvazia a célula da pilha
  }
}