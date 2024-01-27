import { icebeam, synthesis, confuseRay, surf, rest, sludgeBomb, petalDance, sleepPowder, healthCheck, venusaurDeath, laprasDeath } from "./functions.js";
import { Venusaur } from "./pokemon.js";
import { Lapras } from "./pokemon.js";
import { venusaurCry, laprasCry } from "./functions.js";
import { selectConfuseRay, selectSurf, selectRest, selectIceBeam } from "./instances.js";
import { nextButton, battleText, combatHUD } from "./instances.js";
import { menuSound, battleTheme,lowHpFx, victoryFx } from "./functions.js";
import { displayFightDesc1,displayFightDesc2,  fightDesc } from "./functions.js";
import { VenusaurAttack, iceupdateHPBar, surfupdateHPBar } from "./functions.js";
const hpBar = document.querySelector('.healthBar');
console.log(hpBar);


console.log("Venusaur's health : " + Venusaur.max_health);
console.log("Lapras's health : " + Lapras.max_health);
// battleTheme();
// venusaurCry() ;
// laprasCry();
fightDesc.innerHTML = "A wild venusaur appeared!";



selectIceBeam.addEventListener("click", function() {
    icebeam();
    
    healthCheck();
    if (Venusaur.current_health <= 0){
        console.log("Venusaur fainted....Lapras wins!");
        fightDesc.innerHTML = "Venusaur fainted....Lapras wins!"
        venusaurDeath();
        victoryFx()
        combatHUD.style.display ="none"
        faintFx ()

    } else {
        VenusaurAttack();
    }
    healthCheck();
    if (Lapras.current_health <= 0) {
        console.log("Lapras fainted....Venusaur wins! ");
        fightDesc.innerHTML = "Lapras fainted... Venusaur wins!"
        laprasDeath();
        combatHUD.style.display ="none"
        faintFx ()
    }
});

selectSurf.addEventListener("click", function() {
    surf();
    healthCheck();
    if (Venusaur.current_health <= 0){
        fightDesc.innerHTML = "Venusaur fainted....Lapras wins!"
        venusaurDeath();
        victoryFx();
        combatHUD.style.display ="none"
        faintFx();

        console.log("Venusaur fainted....Lapras wins!");
    } else {
        VenusaurAttack();
    }
    healthCheck();
    if (Lapras.current_health <= 0) {
        console.log("Lapras fainted....Venusaur wins! ");
        fightDesc.innerHTML = "Lapras fainted... Venusaur wins!"
        laprasDeath();
        combatHUD.style.display ="none"
        faintFx();
    }
});

selectRest.addEventListener("click", function() {
    rest();
    healthCheck();
    if (Venusaur.current_health <= 0){
        console.log("Venusaur fainted....Lapras wins!");
    } else {
        VenusaurAttack();
    }
    healthCheck();
    if (Lapras.current_health <= 0) {
        console.log("Lapras fainted....Venusaur wins! ");
        fightDesc.innerHTML = "Lapras fainted... Venusaur wins!"
        laprasDeath();
        combatHUD.style.display ="none"
        faintFx();
    }
});

selectConfuseRay.addEventListener("click", function() {
    confuseRay();
    healthCheck();
    if (Venusaur.current_health <= 0){
        console.log("Venusaur fainted....Lapras wins!");
    } else {
        VenusaurAttack();
    }
    healthCheck();
    if (Lapras.current_health <= 0) {
        console.log("Lapras fainted....Venusaur wins! ");
        fightDesc.innerHTML = "Lapras fainted... Venusaur wins!"
        laprasDeath();
        combatHUD.style.display ="none"
        faintFx();
    }
});
    
     

  
 

