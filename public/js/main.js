import { icebeam, synthesis, confuseRay, surf, rest, sludgeBomb, petalDance, sleepPowder, healthCheck } from "./functions.js";
import { Venusaur } from "./pokemon.js";
import { Lapras } from "./pokemon.js";
import { selectConfuseRay, selectSurf, selectRest, selectIceBeam } from "./instances.js";
import { nextButton, battleText } from "./instances.js";
import { menuSound, battleTheme,lowHpFx } from "./functions.js";
import { displayFightDesc1,displayFightDesc2,  fightDesc } from "./functions.js";
import { VenusaurAttack } from "./functions.js";


console.log("Venusaur's health : " + Venusaur.max_health);
console.log("Lapras's health : " + Lapras.max_health);
battleTheme();
fightDesc.innerHTML = "A wild venusaur appeared!";


selectIceBeam.addEventListener("click", function() {
    icebeam();
    healthCheck();
    if (Venusaur.current_health <= 0){
        console.log("Venusaur fainted....Lapras wins!");
    } else {
        VenusaurAttack();
    }
    healthCheck();
    if (Lapras.current_health <= 0) {
      fightDesc.innerHTML = "Lapras fainted... Venusaur wins!"
        console.log("Lapras fainted....Venusaur wins! ");
    }
});

selectSurf.addEventListener("click", function() {
    surf();
    healthCheck();
    if (Venusaur.current_health <= 0){
      fightDesc.innerHTML = "Venusaur fainted... Lapras wins!"
        console.log("Venusaur fainted....Lapras wins!");
    } else {
        VenusaurAttack();
    }
    healthCheck();
    if (Lapras.current_health <= 0) {
        console.log("Lapras fainted....Venusaur wins! ");
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
    }
});
    
     

  
 

