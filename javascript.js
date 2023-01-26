// Variabila pentru a tine evidenta preciziei recunoasterii
let recognitionAccuracy = 0;

// Creeaza un nou obiect de recunoastere a vocii
const recognition = new webkitSpeechRecognition();

// Seteaza optiuni pentru recunoastere
recognition.interimResults = true;

// Adauga un listener pentru cand recunoasterea incepe
recognition.onstart = function() {
  console.log("Recunoasterea a inceput.");
};

// Adauga un listener pentru cand recunoasterea se termina
recognition.onend = function() {
  console.log("Recunoasterea s-a terminat.");
};

// Adauga un listener pentru cand se primeste un rezultat intermediar
recognition.onresult = function(event) {
  // Ia ultimul rezultat intermediar
  const lastResult = event.results[event.results.length - 1];
  // Seteaza precizia recunoasterii
  recognitionAccuracy = lastResult[0].confidence;
  // Afiseaza textul recunoscut
  console.log("Text recunoscut: " + lastResult[0].transcript);
  document.getElementById('recognized-text').innerText = ("Text recunoscut: " + lastResult[0].transcript);
};

// Adauga un event listener pentru cand se atinge ecranul
document.addEventListener("touchstart", function() {
  // Incepe recunoasterea vocii
  recognition.start();
  // Afiseaza precizia recunoasterii
  console.log("Precizia recunoasterii: " + recognitionAccuracy);
  document.getElementById("accuracy").textContent= ("Precizia recunoasterii: " + recognitionAccuracy);
});
