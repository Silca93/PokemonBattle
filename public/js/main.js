import { icebeam, synthesis, confuseRay, surf, rest, sludgeBomb, petalDance, sleepPowder, healthCheck } from "./functions.js";
import { Venusaur } from "./pokemon.js";
import { Lapras } from "./pokemon.js"

console.log("A wants to battle B!");

console.log("start!");
console.log("Venusaur wants to battle !!");
 console.log("Venusaur's health : " + Venusaur.max_health);
 console.log("Lapras's health : " + Lapras.max_health);
 
 while (Venusaur.current_health > 0 && Lapras.current_health > 0){
    await new Promise(resolve => setTimeout(resolve, 500));
    let action = prompt("What should Lapras do?: \n1.Ice Beam  \n2.Surf ")
 
    switch(action) {
       case"1":
           icebeam();
           break;
       case"2":
           surf()
           break;
           default:   
          console.log("Invalid choice. Please select an action with 1 or 2")
             
           }
           
 
       
    
    
     
 healthCheck();

     if (Venusaur.current_health < 1){
       console.log("Venusaur fainted....Lapras wins!");
       break;
 
    }else{
 
    }


let VenusaurRandom = Math.floor(Math.random()*4);
console.log(VenusaurRandom);
 if (VenusaurRandom == 0){
    sludgeBomb();
 }else if (VenusaurRandom == 1){
    synthesis();
 }else if (VenusaurRandom == 2){
    sleepPowder();
 }else if(VenusaurRandom == 3) {
    sludgeBomb();
 }
 
 healthCheck();
 
 if (Lapras.current_health <= 0) {
    console.log("Lapras fainted....Venusaur wins! ");
    break;
 
 
 }else {
    
 }


}   