import { icebeam, synthesis, confuseRay, surf, rest, sludgeBomb, petalDance, sleepPowder, healthCheck1, healthCheck2, venusaurDeath, laprasDeath } from "./functions.js";
import { Venusaur } from "./pokemon.js";
import { Lapras } from "./pokemon.js";
import { venusaurCry, laprasCry } from "./functions.js";
import { selectConfuseRay, selectSurf, selectRest, selectIceBeam, laprasHealthBar, laprasSprite } from "./instances.js";
import { nextButton, battleText, combatHUD } from "./instances.js";
import { menuSound, battleTheme,lowHpFx, victoryFx, faintFx, hit } from "./functions.js";
import { displayFightDesc1,displayFightDesc2,  fightDesc } from "./functions.js";
import { VenusaurAttack, iceupdateHPBar, surfupdateHPBar} from "./functions.js";
const hpBar = document.querySelector('.healthBar');
console.log(hpBar);


console.log("Venusaur's health : " + Venusaur.max_health);
console.log("Lapras's health : " + Lapras.max_health);
// battleTheme();
// venusaurCry() ;

combatHUD.style.display ="none"
laprasSprite.style.display = "none"
laprasHealthBar.style.display = "none"
fightDesc.innerHTML = "A wild venusaur appeared!";


healthCheck2();
selectIceBeam.addEventListener("click", function() {
    icebeam();
    
    healthCheck1();
               
        

    if(Lapras.current_health > 0 && Venusaur.current_health > 0) {
        setTimeout(function() {
      
            VenusaurAttack();
          }, 4000);
          setTimeout(function() {
      
            combatHUD.style.display = "flex";
          }, 6500);
          
    }
    healthCheck2();
   
});

healthCheck2();
selectSurf.addEventListener("click", function() {
    surf();
    healthCheck1();
               
        

    if(Lapras.current_health > 0 && Venusaur.current_health > 0) {
        setTimeout(function() {
      
            VenusaurAttack();
          }, 4000);
          setTimeout(function() {
      
            combatHUD.style.display = "flex";
          }, 6500);

    }
    healthCheck2();
   
});

healthCheck2();
selectRest.addEventListener("click", function() {
    rest();
    healthCheck1();
    
        
               

    if(Lapras.current_health > 0 && Venusaur.current_health > 0) {
        setTimeout(function() {
      
            VenusaurAttack();
          }, 4000);
          setTimeout(function() {
      
            combatHUD.style.display = "flex";
          }, 6500);
    }
    healthCheck2();
    
});


healthCheck2();
selectConfuseRay.addEventListener("click", function() {
    confuseRay();
    healthCheck1();
           

    if(Lapras.current_health > 0 && Venusaur.current_health > 0) {
        setTimeout(function() {
      
            VenusaurAttack();
          }, 4000);
          setTimeout(function() {
      
            combatHUD.style.display = "flex";
          }, 6500);
    }
    healthCheck2();
});
    
     

  
 

