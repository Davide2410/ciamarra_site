
var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  autoplay: {
     delay: 10000,
     disableOnInteraction: false,
   },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

// WINE "MODAL"
var card = document.getElementById("myCard");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  card.style.display = "none";
}

btn.onclick = function() {
  card.style.display = "block";
}
        
window.onclick = function(event) {      
  if(event.target == card) {
      card.style.display = "none";
    }
}

// COCKTAIL "MODAL"
var cardCok = document.getElementById("ckCard");

var btnCok = document.getElementById("ckBtn");

var spanCok = document.getElementsByClassName("close__2")[0];

spanCok.onclick = function() {
  cardCok.style.display = "none";
}

btnCok.onclick = function() {
  cardCok.style.display = "block";
}
        
window.onclick = function(event) {      
  if(event.target == cardCok) {
      cardCok.style.display = "none";
    }
}

// WHISKY MODAL

var whiskyCard = document.getElementById("whiskyCard");

var whiskyBtn = document.getElementById("whiskyBtn");

var whiskySpan = document.getElementsByClassName("close__3")[0];

whiskySpan.onclick = function() {
  whiskyCard.style.display = "none";
}

whiskyBtn.onclick = function() {
  whiskyCard.style.display = "block";
}
        
window.onclick = function(event) {      
  if(event.target == whiskyCard) {
      whiskyCard.style.display = "none";
    }
}

// RUM MODAL

var rumCard = document.getElementById("rumCard");

var rumBtn = document.getElementById("rumBtn");

var rumSpan = document.getElementsByClassName("close__4")[0];

rumSpan.onclick = function() {
  rumCard.style.display = "none";
}

rumBtn.onclick = function() {
  rumCard.style.display = "block";
}
        
window.onclick = function(event) {      
  if(event.target == rumCard) {
      rumCard.style.display = "none";
    }
}

// GIN MODAL

var ginCard = document.getElementById("ginCard");

var ginBtn = document.getElementById("ginBtn");

var ginSpan = document.getElementsByClassName("close__5")[0];

ginSpan.onclick = function() {
  ginCard.style.display = "none";
}

ginBtn.onclick = function() {
  ginCard.style.display = "block";
}
        
window.onclick = function(event) {      
  if(event.target == ginCard) {
      ginCard.style.display = "none";
    }
}