import { icebeam, synthesis, confuseRay, surf, rest, sludgeBomb, petalDance, sleepPowder, healthCheck } from "./functions.js";
import { Venusaur } from "./pokemon.js";
import { Lapras } from "./pokemon.js";
import { selectConfuseRay, selectSurf, selectRest, selectIceBeam } from "./instances.js";
import { nextButton, battleText } from "./instances.js";
import { menuSound, battleTheme,lowHpFx } from "./functions.js";
import { displayFightDesc, fightDesc } from "./functions.js";
import { VenusaurAttack } from "./functions.js";





// battleTheme();







console.log("Venusaur's health : " + Venusaur.max_health);
console.log("Lapras's health : " + Lapras.max_health);
 
while (Venusaur.current_health > 1 && Lapras.current_health > 1) {
   
fightDesc.innerHTML = "A wild venusaur appeared!"
   // Lapras IceBeam attack //           
   selectIceBeam.addEventListener("click", function() {
         icebeam();
         
            
         healthCheck();

         if (Venusaur.current_health < 1){
         console.log("Venusaur fainted....Lapras wins!");
                 
         
   
      }else{
   
      }VenusaurAttack();

   

   healthCheck();
   
   if (Lapras.current_health < 150) {
      // lowHpFx();
   }else if (Lapras.current_health <= 0) {
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
   
      }VenusaurAttack();
   

   
   healthCheck();
   
   if (Lapras.current_health < 150) {
      // lowHpFx();
   }
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
   
      }VenusaurAttack();
   
   
   
   
   healthCheck();
   
   if (Lapras.current_health <= 0) {
      console.log("Lapras fainted....Venusaur wins! ");
         
   
      }

   });






   // Lapras confusion attack //    
   selectConfuseRay.addEventListener("click", function() {
      confuseRay();
      

      healthCheck();
      if (Lapras.current_health < 150) {
         // lowHpFx();
      }
         if (Venusaur.current_health < 1){
         console.log("Venusaur fainted....Lapras wins!");
         
   
      }else{
   
      }VenusaurAttack
   
   
   healthCheck();
   
   if (Lapras.current_health < 150) {
      // lowHpFx();
   }
   if (Lapras.current_health <= 0) {
      console.log("Lapras fainted....Venusaur wins! ");
         
   
      }
      

   });

}  
       
    
    
     

  
 

