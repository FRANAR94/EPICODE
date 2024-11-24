/////////////////////////////////////////////////////////////////////
///////////////----Scrolla Mid NavBar Text---//////////////////////////
/////////////////////////////////////////////////////////////////////

window.addEventListener('scroll', function () {
  let midBlok = document.getElementById('midBlok')
  if (window.scrollY > 40) {
    midBlok.style.top = '-50px'
    midBlok.style.transform = 'scale(0)' // Sintassi corretta per scale
  } else {
    midBlok.style.top = '0px'
    midBlok.style.transform = 'scale(1)' // Ripristina la scala originale
  }
});


window.addEventListener('scroll', function () {
  let searchBarBox = document.getElementById('searchBarBox')
  let oneTest = document.getElementById("oneTest")
  let oneTestS = oneTest.innerHTML;

  if (window.scrollY > 40) {
    if (window.innerWidth <= 992) { 
      searchBarBox.style.top = '-100px' 
      searchBarBox.style.transform = 'scale(0.7)'
      searchBarBox.style.position = "styky"
    } else {
      searchBarBox.style.top = '-100px'
      searchBarBox.style.transform = 'scale(0.7)'
    }
  } else {
    searchBarBox.style.top = '0px'
    searchBarBox.style.transform = 'scale(0.7)'
    oneTest.innerHTML = oneTestS
  }
});

/////////////////////////////////////////////////////////////////////
///////////////----Innert icon in a carosell---//////////////////////////
/////////////////////////////////////////////////////////////////////


/* 
function icons() {
  let lineOne = document.getElementById("lineOne")


  for (let i = 2; i <= 62; i++) {
    let icon = document.createElement("div")
    icon.className ="boxIcon"
    icon.innerHTML = `<img src="./assets/icons/${i}.jpg"  width="40" height="40"> `
    lineOne.appendChild(icon)
    console.log(i)

    let boxIcon = document.querySelector("boxIcon")
    let iconName = document.createElement("p");
    iconName.textContent = iconName[i - 1];
    icon.appendChild(iconName)
  }
 
  
} icons() */


function icons() {
  let lineOne = document.getElementById("lineOne");
  let iconNames = [
    "A-frame",
    "Icone",
    "Agriturismi",
    "Baita",
    "Barche",
    "B&B",
    "Cambagna",
    "Camper",
    "Camping",
    "Casa particulares",
    "Case cicladiche",
    "Case galleggianti",
    "Case organiche",
    "Case sull'albero",
    "Castelli",
    "In cima al mondo",
    "Città popolari",
    "Container",
    "Spazi creativi",
    "Cucine professionali",
    "Cupole",
    "Dammusi",
    "Nel deserto",
    "Design",
    "Di Tendenza",
    "Dimore storiche",
    "Fienili",
    "Fronte lago",
    "Golf",
    "Grotte",
    "Hanok",
    "Isole",
    "Iurte",
    "Lago",
    "Luoghi remoti",
    "Luxe",
    "Mini case",
    "Minus",
    "Mulini",
    "Novità",
    "Parchi nazionali",
    "Pianoforte",
    "Piscine incredibili",
    "Polo nord",
    "Raid",
    "Ryokan",
    "Sci",
    "Spazi accessibili",
    "Spazi per giocare",
    "Spiaggia",
    "Stanza",
    "Sull'acqua",
    "Sulle piste",
    "Surf",
    "Torri",
    "Tropicali",
    "Trulli",
    "Vigneti",
    "Ville",
    "Vista mozzafiato",
    "Wow",
  ]


  for (let i = 2; i <= 62; i++) {
    let iconContainer = document.createElement("div") // Crea un contenitore per l'icona e il nome
    iconContainer.className = "boxIcon"

    let icon = document.createElement("img")
    icon.src = `./assets/icons/${i}.jpg`
    icon.width = "40"
    icon.height = "40"

    let iconName = document.createElement("p")
    iconName.textContent = iconNames[i - 2] // Usa i - 2 per accedere all'indice corretto dell'array

    iconContainer.appendChild(icon); // Aggiungi l'immagine al contenitore
    iconContainer.appendChild(iconName); // Aggiungi il nome al contenitore

    lineOne.appendChild(iconContainer); // Aggiungi il contenitore al lineOne
  }
}

icons()


/////////////////////////////////////////////////////////////////////
///////////////----Show n icon on carosell + function arrow--query view icon-//////////////////////////
/////////////////////////////////////////////////////////////////////


let cardContainer = document.getElementById("lineOne");
let icon = cardContainer.querySelectorAll("div");
let currentIndex = 0;
let numIcone = 6; // Inizializza numIcone qui

// Funzione per calcolare il numero di icone in base alla dimensione dello schermo
function calcolaNumIcone() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1400) { // xxl
    numIcone = 11
  } else if (screenWidth >= 1200) { // xl
    numIcone = 8
  } else if (screenWidth >= 992) { // lg
    numIcone = 7
  } else if (screenWidth >= 768) { // md
    numIcone = 5
  } else if (screenWidth >= 576) { // sm
    numIcone = 4
  } else { // xs
    numIcone = 2
  }
  return numIcone;
}

// Chiama la funzione al caricamento della pagina e al resize
calcolaNumIcone();
window.addEventListener('resize', calcolaNumIcone);

function showIcon(index) {

  const numIcone = calcolaNumIcone()
  // Nascondi tutte le icone
  for (let i = 0; i < icon.length; i++) {
    icon[i].style.display = "none"
  }

  // Mostra le icone calcolate in base all'indice e al numero di icone
  for (let i = index; i < index + numIcone && i < icon.length; i++) {
    icon[i].style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center";
  }
}

function nextIcon() {
  
  const numIcone = calcolaNumIcone()
  if (currentIndex < icon.length - 12) {
    currentIndex += 10
    showIcon(currentIndex)
  }

  // Disabilita "next" se si è alla fine
  nextButton.disabled = currentIndex >= icon.length - numIcone;

  // Abilita "prev" se non si è all'inizio
  prevButton.disabled = currentIndex === 0
}

function prevIcon() {
  const numIcone = calcolaNumIcone()
  if (currentIndex >= 12) {
    currentIndex -= 10
    showIcon(currentIndex)
  }

  // Disabilita "prev" se si è all'inizio
  prevButton.disabled = currentIndex === 0;

  // Abilita "next" se non si è alla fine
  nextButton.disabled = currentIndex >= icon.length - numIcone;
}

// Mostra le prime 16 icone all'avvio
showIcon(0);

// Aggiungi event listener per i pulsanti di navigazione
let prevButton = document.querySelector(".carousel-control-prev")
let nextButton = document.querySelector(".carousel-control-next")

prevButton.addEventListener("click", prevIcon)
nextButton.addEventListener("click", nextIcon)

/////////////////////////////////////////////////////////////////////
///////////////----box account---//////////////////////////
/////////////////////////////////////////////////////////////////////

let account = document.getElementById("account")
let logger = document.createElement("div")
logger.id = "logger"
logger.innerHTML = `
      <p><a href="#">Register</a></p>
      <p><a href="#">Sign in</a></p>
      <hr>
      <p><a href="#">Gift card</a></p>
      <p><a href="#">Rent with Airbnb</a></p>
      <p><a href="#">Suggest an experience</a></p>
      <p><a href="#">Help Center</a></p>
    `


account.addEventListener("click", (event) => {
  account.appendChild(logger)
  event.stopPropagation()
})

document.addEventListener("click", (event) => {
  if (!logger.contains(event.target)) {
    account.removeChild(logger)
  }
});


/////////////////////////////////////////////////////////////////////
///////////////----Locations---//////////////////////////
/////////////////////////////////////////////////////////////////////

let locationBox = document.getElementById("w");


let nameLocation = [
  "Genova",
  "Inverness",
  "Edimburgh",
  "Rapallo",
  "Milan",
  "Montecarlo",
  "Kirkwall",
  "Nordkapp",
  "Sauris",
  "Salerno",
  "Parigi",
  "San Diego",
  
];

let timeToGo = [
  "15 min drive",
  "2 hrs flight",
  "1.5 hrs flight",
  "2 hrs drive",
  "1.5 hrs drive",
  "2 hr drive",
  "1 hr drive",
  "10 hr flight",
  "6 hr drive",
  "3 hr fligt",
  "7 hrs flight",
  "3 hr flight",
  
];



for (let i = 1; i <= nameLocation.length; i++) {
 
  let card = document.createElement("div")
  card.className = "cardDestinaion"

  locationBox.appendChild(card)

  let img = document.createElement("img")
  img.src = `locations/${i}.jpg`  
  img.width = "400"
  img.height = "250"
  img.className = "location"
 
  img.addEventListener("mouseover", () => { 
    img.classList.remove("location");
    img.classList.add("locationew"); 
    img.style.transform = "scale(0.99)"
  });

  img.addEventListener("mouseout", () => { 
    img.classList.remove("locationew"); 
    img.classList.add("location"); 
    img.style.transform = "scale(1)"
  });

  card.appendChild(img)

  
  let textDiv = document.createElement("div")
  textDiv.className = "info"
  card.appendChild(textDiv)

  
  let text1 = document.createElement("p")
  text1.textContent = nameLocation[i - 1]
  text1.className = "nameLocation"
  textDiv.appendChild(text1)

  let text2 = document.createElement("p")
  text2.textContent = timeToGo[i - 1]
  text2.className = "timeToGo"
  textDiv.appendChild(text2)

}