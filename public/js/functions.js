import { Lapras } from "./pokemon.js";
import { Venusaur } from "./pokemon.js";


//Lapras moves //

export let icebeam = () => {
   let dmgIcebeam = Lapras.attack*1.5
    console.log("Lapras used icebeam!");
    Venusaur.current_health = Venusaur.current_health - dmgIcebeam;
    console.log("Icebeam dealt " + dmgIcebeam + " hp to Venusaur. It's very effective!" )
 }
 
 
 
export let confuseRay = () => {
    let confuseChance = Math.random();
    
    if (confuseChance > 0.35) {
       console.log("Lapras used confuse ray!");
       console.log("Venusaur became confused!");
       return true;
    }else {
       console.log("Lapras used confuse ray! but it failed...");
    return false;
    }
 }
 

export let surf = () => {
   let dmgsurf = Lapras.attack*0.75 
    console.log("Lapras used surf!");
    Venusaur.current_health = Venusaur.current_health - dmgsurf;
    console.log("surf dealt " + dmgsurf + " hp to Venusaur")
 }


export let rest = () => {
   let hpRecovery = Lapras.max_health;
    console.log("Lapras used rest! Lapras fell asleep");
    Lapras.current_health = Lapras.max_health;
    console.log("Lapras recovered " + hpRecovery + " hp");
    
 }



// venusaur moves //

export let petalDance = () => {
    let dmgPetal = Venusaur.attack*1.5
     console.log("Venusaur used petal dance!");
     Lapras.current_health = Lapras.current_health - dmgPetal;
     console.log("petal dance dealt " + dmgPetal + "dmg to Lapras. It's very effective!" )
  }
  
  
  
export let sleepPowder = () => {
     let sleepChance = Math.random();
     console.log(sleepChance);
     
     if (sleepChance > 0.25) {
        console.log("Venusaur used sleep powder!");
        console.log("Lapras fell asleep.");
        return true;
     }else {
        console.log("Venusaur used sleep powder! but it failed...");
        return false;
     }
  }
  
 
export let synthesis = () => {
    let synthHpRecovery = Venusaur.current_health + Venusaur.max_health*0.5 
     console.log("Venusaur used synthesis!");
     Venusaur.current_health = synthHpRecovery
     console.log("Venusaur recovered " + synthHpRecovery + " hp to Venusaur")
  }
 
  
export let sludgeBomb = () => {
    let dmgSludge = Venusaur.attack
     console.log("Venusaur used sludge bomb!");
     Lapras.current_health = Lapras.current_health - dmgSludge;
     console.log("Venusaur dealt " + dmgSludge + " damage to Lapras");
     
  }


  // game functions //


export let healthCheck = () => {
    let venuHealth = Venusaur.current_health;
    let laprasHealth = Lapras.current_health;
    
    if (venuHealth < 1 ) {
       venuHealth = 0;
              
    }else if (laprasHealth < 1) {
       laprasHealth = 0;
     }
  }     
