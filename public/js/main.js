import { icebeam, synthesis, confuseRay, surf, rest, sludgeBomb, petalDance, sleepPowder, healthCheck } from "./functions.js";
import { Venusaur } from "./pokemon.js";
import { Lapras } from "./pokemon.js";
import { selectConfuseRay, selectSurf, selectRest, selectIceBeam } from "./instances.js";
import { nextButton, battleText } from "./instances.js";
import { menuSound, battleTheme } from "./functions.js";
import { displayFightDesc, fightDesc } from "./functions.js";





// battleTheme();

fightDesc.innerHTML = "A wild venusaur appeared!"


// goNext("Lapras, go! \n \n What should Lapras do?" );
// goNext("Select your attack")
// goNext('what do we do now?')







console.log("Venusaur's health : " + Venusaur.max_health);
console.log("Lapras's health : " + Lapras.max_health);
 

// Lapras IceBeam attack //           
  selectIceBeam.addEventListener("click", function() {
      icebeam();
      
           
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
 

