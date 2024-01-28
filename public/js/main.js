import { icebeam, synthesis, confuseRay, surf, rest, sludgeBomb, petalDance, sleepPowder, healthCheck, healthCheck2, venusaurDeath, laprasDeath } from "./functions.js";
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



selectIceBeam.addEventListener("click", function() {
    icebeam();
    
    healthCheck();
    if (Venusaur.current_health <= 0){
        
       
        
        

    }else if(Lapras.current_health > 0) {
        setTimeout(function() {
      
            VenusaurAttack();
          }, 3500);
    }
    healthCheck();
    // if (Lapras.current_health <= 0) {
    //     console.log("Lapras fainted....Venusaur wins! ");
    //     fightDesc.innerHTML = "Lapras fainted... Venusaur wins!"
        
    //     setTimeout(() => {
    //     laprasDeath();
    //     faintFx ()
    //     combatHUD.style.display ="none"

    //     })
        
        
    // }
});

selectSurf.addEventListener("click", function() {
    surf();
    healthCheck();
    if (Venusaur.current_health <= 0){
        setTimeout(function() {
      
            venusaurDeath();
            faintFx ()
            victoryFx()
            fightDesc.innerHTML = "Venusaur fainted....Lapras wins!"
            combatHUD.style.display ="none"
          }, 1500);
        console.log("Venusaur fainted....Lapras wins!");
    }else if(Lapras.current_health > 0) {
        setTimeout(function() {
      
            VenusaurAttack();
          }, 3500);
    }
    healthCheck();
    // if (Lapras.current_health <= 0) {
    //     console.log("Lapras fainted....Venusaur wins! ");
    //     fightDesc.innerHTML = "Lapras fainted... Venusaur wins!";
    //     laprasDeath();
    //     combatHUD.style.display ="none";
    //     faintFx();
    // }
});

selectRest.addEventListener("click", function() {
    rest();
    healthCheck();
    if (Venusaur.current_health <= 0){
        console.log("Venusaur fainted....Lapras wins!");
    }else if(Lapras.current_health > 0) {
        setTimeout(function() {
      
            VenusaurAttack();
          }, 3500);
    }
    healthCheck();
    
});

selectConfuseRay.addEventListener("click", function() {
    confuseRay();
    healthCheck();
    if (Venusaur.current_health <= 0){
        console.log("Venusaur fainted....Lapras wins!");
    }else if(Lapras.current_health > 0) {
        setTimeout(function() {
      
            VenusaurAttack();
          }, 3500);
    }
    healthCheck2();
    if (Lapras.current_health <= 0) {
        console.log("Lapras fainted....Venusaur wins! ");
        fightDesc.innerHTML = "Lapras fainted... Venusaur wins!"
        laprasDeath();
        combatHUD.style.display ="none"
        faintFx();
    }
});
    
     

  
 

