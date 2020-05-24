//Eventi
var buttonGenera = document.getElementById("genera");
var buttonAnnulla = document.getElementById("annulla");

//Variabili sezione "calcola"
var inputNome = document.getElementById("input-nome");
var inputKm = document.getElementById("input-km");
var selectEta = document.getElementById("select-eta");

//Variabili sezione "tuo-biglietto"
var bigliettoGenerato = document.getElementById("biglietto-generato");
var outputNome = document.getElementById("output-nome");
var outputOfferta = document.getElementById("output-offerta");
var outputCarrozza = document.getElementById("output-carrozza");
var outputCodiceCp = document.getElementById("output-codice-cp");
var outputCosto = document.getElementById("output-costo");



//Evento "Genera"
buttonGenera.addEventListener("click",
  function() {

    //genero degli alert in caso di dati mancanti o invalidi
    if (inputNome.value == "" || !isNaN(inputNome.value)) {
      alert("Inserisci il nome");
    }
    if (inputKm.value < 1) {
      alert("Inserisci i km");
    }
    if (selectEta.value == "default") {
      alert("Seleziona la fascia d'età");
    }

    //calcolo il prezzo standard e assegno la rispettiva offerta, valida per la fascia d'età 18-65 anni ("Maggiorenne")
    var prezzo = inputKm.value * 0.21;
    var offerta = "Biglietto Standard";

    //calcolo i prezzi scontati e assegno le rispettive offerte
    if (selectEta.value == "minorenne") {

      prezzo = prezzo - (prezzo * 0.2);
      offerta = "Sconto Under";

    } else if (selectEta.value == "over65") {

      prezzo = prezzo - (prezzo * 0.4);
      offerta = "Sconto Over";

    }

    //elementi "tuo-biglietto"
    outputNome.innerHTML = inputNome.value;
    outputOfferta.innerHTML = offerta;
    outputCarrozza.innerHTML = Math.floor(Math.random() * 20) + 1;
    outputCodiceCp.innerHTML = Math.floor(Math.random() * 80123) + 12345;
    outputCosto.innerHTML = prezzo.toFixed(2);

    //mostro il biglietto
    bigliettoGenerato.className = "biglietto-generato visible";

  }
);

//Evento "Annulla"
buttonAnnulla.addEventListener("click",
  function() {

    //elementi "calcola"
    inputNome.value = "";
    inputKm.value = "";
    selectEta.value = "default";

    //elementi "tuo-biglietto"
    outputNome.innerHTML = "";
    outputOfferta.innerHTML = "";
    outputCarrozza.innerHTML = "";
    outputCodiceCp.innerHTML = "";
    outputCosto.innerHTML = "";

    //nascondo il biglietto
    bigliettoGenerato.className = "biglietto-generato hidden";

  }
);
