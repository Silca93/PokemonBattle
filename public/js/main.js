import { icebeam, synthesis, confuseRay, surf, rest, sludgeBomb, petalDance, sleepPowder, healthCheck } from "./functions.js";
import { Venusaur } from "./pokemon.js";
import { Lapras } from "./pokemon.js";
import { selectConfuseRay, selectSurf, selectRest, selectIceBeam } from "./instances.js";
import { nextButton, battleText } from "./instances.js";
import { menuSound } from "./functions.js";





// // let initialText = document.createElement("p");
// // initialText.innerText = "A wants to Battle B!";
// // initialText.style.color = "white"
// // battleText.appendChild(initialText);
// // function appendLog(message) {
// //    let p = document.createElement("p");
// //    p.innerText = message;
// //    battleText.appendChild(p);
// // }


nextButton.addEventListener("click", function() {
        let p = document.createElement("p");
        p.style.color = "white"
        p.style.fontFamily = "'Press Start 2P', system-ui"
        p.innerText = "Venusaur wants to battle!"
        battleText.appendChild(p);
        menuSound();
        
    
});





// console.log = (function(originalLogFunc) {
//    return function(message) {
//        originalLogFunc(message); // Logs the message to the console
//        appendLog(message); // Appends the message to the battleText div
//    };
// }(console.log));

console.log("Venusaur wants to battle !!");
console.log("Venusaur's health : " + Venusaur.max_health);
console.log("Lapras's health : " + Lapras.max_health);
 

// Lapras IceBeam attack //           
  selectIceBeam.addEventListener("click", function() {
      icebeam();
      appendLog("Ice Beam was used.");
           
      healthCheck();

      if (Venusaur.current_health < 1){
        console.log("Venusaur fainted....Lapras wins!");
        
  
     }else{
  
     }
 
 
 let VenusaurRandom = Math.floor(Math.random()*4);
 console.log(VenusaurRandom);
  if (VenusaurRandom == 0){
     petalDance();
  }else if (VenusaurRandom == 1){
     synthesis();
  }else if (VenusaurRandom == 2){
     sleepPowder();
  }else if (VenusaurRandom == 3) {
     sludgeBomb();
  }
  
  healthCheck();
  
  if (Lapras.current_health <= 0) {
     console.log("Lapras fainted....Venusaur wins! ");
     
  
  
    } 
  });
  




// Lapras Surf attack //    
  selectSurf.addEventListener("click", function() {
      surf();
      appendLog("Surf was used.");
      
      healthCheck();

      if (Venusaur.current_health < 1){
        console.log("Venusaur fainted....Lapras wins!");
        
  
     }else{
  
     }
 
 
 let VenusaurRandom = Math.floor(Math.random()*4);
 console.log(VenusaurRandom);
  if (VenusaurRandom == 0){
     petalDance();
  }else if (VenusaurRandom == 1){
     synthesis();
  }else if (VenusaurRandom == 2){
     sleepPowder();
  }else if (VenusaurRandom == 3) {
     sludgeBomb();
  }
  
  healthCheck();
  
  if (Lapras.current_health <= 0) {
     console.log("Lapras fainted....Venusaur wins! ");
     
  
  
    }

  });
  




// Lapras Rest attack //    
  selectRest.addEventListener("click", function() {
      rest();
      appendLog("Rest was used.");

      healthCheck();

      if (Venusaur.current_health < 1){
        console.log("Venusaur fainted....Lapras wins!");
        
  
     }else{
  
     }
 
 
 let VenusaurRandom = Math.floor(Math.random()*4);
 console.log(VenusaurRandom);
  if (VenusaurRandom == 0){
     petalDance();
  }else if (VenusaurRandom == 1){
     synthesis();
  }else if (VenusaurRandom == 2){
     sleepPowder();
  }else if (VenusaurRandom == 3) {
     sludgeBomb();
  }
  
  healthCheck();
  
  if (Lapras.current_health <= 0) {
     console.log("Lapras fainted....Venusaur wins! ");
     
  
  
    }

  });






// Lapras confusion attack //    
  selectConfuseRay.addEventListener("click", function() {
   confuseRay();
   appendLog("Rest was used.");

   healthCheck();

      if (Venusaur.current_health < 1){
        console.log("Venusaur fainted....Lapras wins!");
        
  
     }else{
  
     }
 
 
 let VenusaurRandom = Math.floor(Math.random()*4);
 console.log(VenusaurRandom);
  if (VenusaurRandom == 0){
     petalDance();
  }else if (VenusaurRandom == 1){
     synthesis();
  }else if (VenusaurRandom == 2){
     sleepPowder();
  }else if (VenusaurRandom == 3) {
     sludgeBomb();
  }
  
  healthCheck();
  
  if (Lapras.current_health <= 0) {
     console.log("Lapras fainted....Venusaur wins! ");
     
  
  
    }
   

});

  
       
    
    
     

// };    
 

