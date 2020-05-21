//Variabile sezione tuo-biglietto
var sezioneBiglietto = document.getElementById("biglietto");
var titoloSezioneBiglietto = document.getElementById("titolo-box-tuo-biglietto");

//Variabili form
var buttonGenera = document.getElementById("form-genera");
var buttonAnnulla = document.getElementById("form-annulla");
var formNome = document.getElementById("form-nome");
var formKm = document.getElementById("form-km");
var formEta = document.getElementById("form-eta");

//Elementi biglietto
var biglNome = document.getElementById("bigl-nome");
var biglCosto = document.getElementById("bigl-costo");
var biglOfferta = document.getElementById("bigl-offerta");
var biglCarrozza = document.getElementById("bigl-carrozza");
var biglCodiceCp = document.getElementById("bigl-codicecp");

//Variabili di appoggio
var formKmValue;
var formEtaValue;


//Evento "Genera"
buttonGenera.addEventListener("click",
  function () {

    formKmValue = formKm.value;
    formEtaValue = formEta.value;

    //Calcolo il prezzo
    var prezzo = formKmValue * 0.21;
    var offerta = "Biglietto standard";

    //Calcolo i prezzi scontati
    if (formEtaValue == "minorenne") {

      prezzo = prezzo - ( prezzo * 0.2 );
      offerta = "Sconto under";

    } else if (formEtaValue == "over") {

      prezzo = prezzo - ( prezzo * 0.4 );
      offerta = "Sconto over";

    }

    //Compilazione elementi biglietto
    biglNome.innerHTML = formNome.value;
    biglCosto.innerHTML = prezzo.toFixed(2) + " euro";
    biglOfferta.innerHTML = offerta;
    biglCarrozza.innerHTML = Math.floor(Math.random() * 20) + 1;
    biglCodiceCp.innerHTML = Math.floor(Math.random() * 88888) + 11111;

    //Mostro il biglietto
    sezioneBiglietto.className = "visible";
    titoloSezioneBiglietto.className = "visible";

  }
);

//Evento "Annulla"
buttonAnnulla.addEventListener("click",
  function () {

    formNome.value = " ";
    biglNome.innerHTML = " ";
    formKm.value = " ";
    formEta.value = "maggiorenne";
    biglOfferta.innerHTML = " ";
    biglCosto.innerHTML = " ";
    biglCarrozza.innerHTML = " ";
    biglCodiceCp.innerHTML = " ";

  }
);
