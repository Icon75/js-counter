/*let titolo = document.querySelector("h1");
let pulsante = document.querySelector("#bottone");
let acceso = false;
let contatore = 0;
let reset = document.querySelector("#reset");
pulsante.addEventListener("click", function () {
  /*if (acceso) {
    titolo.textContent = "Ho acceso";
  } else {
    titolo.textContent = "Bella Giornata";
  }
  acceso = !acceso;
  titolo.classList.toggle("colorato")
  document.body.classList.toggle("scuro");

    contatore++;
    titolo.textContent = `Hai cliccato ${contatore} ${contatore === 1 ? "volta": "volte"}`;


});

reset.addEventListener("click", function(){
  
  document.body.classList.remove("scuro");
  titolo.classList.remove("colorato");
  contatore = 0;
  titolo.textContent = `Hai cliccato ${contatore} ${contatore === 1 ? "volta": "volte"}`;
})
  */


let aggiungo = document.querySelector("#bottone_aumenta");
let tolgo = document.querySelector("#bottone_diminuisce");
let contatore = 0;
let conteggio = document.querySelector("#numeri")
let resetta = document.querySelector("#reset");

function aggiornaTesto(){
  if (contatore % 2 === 0) {
    conteggio.textContent = `Il numero ${contatore} è pari`
  }else{
    conteggio.textContent = `Il numero ${contatore} è dispari`
  }
}

conteggio.textContent = `Clicca per iniziare il conteggio!`

aggiungo.addEventListener("click", function(){
  contatore++;
  aggiornaTesto();

});

tolgo.addEventListener("click", function(){
  contatore--;
  aggiornaTesto();
})

resetta.addEventListener("click", function(){
  contatore = 0;
  conteggio.textContent = `Clicca per iniziare il conteggio!`
})

