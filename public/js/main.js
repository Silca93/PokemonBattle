import { icebeam, synthesis, confuseRay, surf, rest, sludgeBomb, petalDance, sleepPowder, healthCheck1, healthCheck2, venusaurDeath, laprasDeath, areYouConfused, areYouAsleep, VenuhealthCheck } from "./functions.js";
import { Venusaur } from "./pokemon.js";
import { Lapras } from "./pokemon.js";
import { menuSound } from "./functions.js";
import { selectConfuseRay, selectSurf, selectRest, selectIceBeam, laprasHealthBar, laprasSprite } from "./instances.js";
import { nextButton, battleText, combatHUD } from "./instances.js";
// import {  battleTheme,lowHpFx, victoryFx, faintFx, hit } from "./functions.js";
import { displayFightDesc1,displayFightDesc2,  fightDesc } from "./functions.js";
import { VenusaurAttack, iceupdateHPBar, surfupdateHPBar} from "./functions.js";
const hpBar = document.querySelector('.healthBar');
console.log(hpBar);


console.log("Venusaur's health : " + Venusaur.max_health);
console.log("Lapras's health : " + Lapras.max_health);

// venusaurCry() ;

combatHUD.style.display ="none"
laprasSprite.style.display = "none"
laprasHealthBar.style.display = "none"
fightDesc.innerHTML = "A wild venusaur appeared!";


healthCheck2();
selectIceBeam.addEventListener("click", function() {
  menuSound();
   if (Lapras.current_health > 0 && Lapras.asleep == false) {
    icebeam();
    
    healthCheck1();
            
        
   }else{
    areYouAsleep();
    setTimeout(() => {
      if (Lapras.asleep == false && Lapras.current_health > 0) {
        icebeam();
        healthCheck1();
      }else {
        laprasDeath()
      }
    }, 1000);
    

  
   }
    if(Lapras.current_health > 0 && Venusaur.current_health > 0 ) {
      if (Venusaur.confused == false && Venusaur.current_health > 0) {
        console.log("venusaur confusion status: " + Venusaur.confused);
        setTimeout(() => {
          if (Venusaur.current_health > 0 && Venusaur.confused == false){

            VenusaurAttack();
          }
          
            }, 4100);
            setTimeout(function() {
        
            combatHUD.style.display = "flex";
          }, 6500);
          }else {
            
            areYouConfused();
            setTimeout(function() {
        
              combatHUD.style.display = "flex";
            }, 6500);
            
          }
    
        
  }
    healthCheck2();
   
});

healthCheck2();


selectSurf.addEventListener("click", function() {
  menuSound();
  if (Lapras.current_health > 0 && Lapras.asleep == false) {
    surf();
    
    healthCheck1();
            
        
   }else{
    areYouAsleep();
    setTimeout(() => {
      if (Lapras.asleep == false && Lapras.current_health > 0) {
        surf();
        healthCheck1();
      }else {
        laprasDeath()
      }
    }, 1000);
    

   }
   if(Lapras.current_health > 0 && Venusaur.current_health > 0) {
    if (Venusaur.confused == false && Venusaur.current_health > 0) {
      console.log("venusaur confusion status: " + Venusaur.confused);
      setTimeout(() => {
        VenusaurAttack();
        
      }, 4100);
      setTimeout(function() {
  
        combatHUD.style.display = "flex";
      }, 6500);
    }else {
      
      areYouConfused();
      setTimeout(function() {
  
        combatHUD.style.display = "flex";
      }, 6500);
      
    }
    
        
  }
  healthCheck2();

   

});

healthCheck2();

selectRest.addEventListener("click", function() {
  menuSound();
  if (Lapras.current_health > 0) {
    rest();
    
    healthCheck1();

        
  }else{
    laprasDeath();

  }
  if(Lapras.current_health > 0 && Venusaur.current_health > 0) {
    if (Venusaur.confused == false && Venusaur.current_health > 0) {
      console.log("venusaur confusion status: " + Venusaur.confused);
      setTimeout(() => {
        VenusaurAttack();
        healthCheck2()
        
      }, 4100);
      setTimeout(function() {
  
        combatHUD.style.display = "flex";
      }, 6500);
    }else {
      areYouConfused();
      setTimeout(function() {
  
        combatHUD.style.display = "flex";
      }, 6500);
      
    }
  
      
}
    healthCheck2();
    
});


selectConfuseRay.addEventListener("click", function() {
  
  if (Lapras.current_health > 0) {
    confuseRay();
    
    healthCheck1();

        
  }else{
    laprasDeath();

  }
    if(Lapras.current_health > 0 && Venusaur.current_health > 0) {
        if (Venusaur.confused == false && Venusaur.current_health > 0) {
          console.log("venusaur confusion status: " + Venusaur.confused);
          setTimeout(() => {
            VenusaurAttack();
            
          }, 4100);
          setTimeout(function() {
      
            combatHUD.style.display = "flex";
          }, 6500);
        }else {
          
          areYouConfused();
          setTimeout(function() {
            combatHUD.style.display = "flex";
          }, 6500);
          
        }
    }
    healthCheck2();
});
    


