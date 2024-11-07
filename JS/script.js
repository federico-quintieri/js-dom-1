// Devo selezionare i due bottoni ed assegnarli a delle variabili
const btnON_OFF = document.getElementById("ON_OFF");

// Devo selezionare anche l'immagine che dovrà cambiare
const imgLampada = document.getElementById("lampada");

// Devo aggiungere un evento ad entrambe le variabili

btnON_OFF.addEventListener("click", () => {
  // Checko la scritta dentro al botton per cambiare immagine
  //   console.log(btnON_OFF.innerText);
  if (btnON_OFF.innerText === "Accendi") {
    imgLampada.src = "./img/yellow_lamp.png";
    btnON_OFF.innerText = "Spegni";
    btnON_OFF.classList.add("btn-warning");
  } else {
    imgLampada.src = "./img/white_lamp.png";
    btnON_OFF.innerText = "Accendi";
    btnON_OFF.classList.remove("btn-warning");
  }
});
