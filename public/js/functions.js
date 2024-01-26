import { Lapras } from "./pokemon.js";
import { Venusaur } from "./pokemon.js";
import { selectConfuseRay, selectRest, selectSurf, selectIceBeam, battleText } from "./instances.js";
import { nextButton } from "./instances.js";
//text functions//
export let fightDesc = document.querySelector('.fightDesc')

export let displayFightDesc = (myDesc) => {
   menuSound();
   fightDesc.innerHTML = myDesc;
}

let texts = ["Lapras, go!", "Select your attack :"];
let currentIndex = 0;
// export let goNext = (newText) => {
      nextButton.addEventListener("click", function() {
         if (currentIndex < texts.length) {
            menuSound();
            let p = document.createElement("p");
            p.style.color = "white";
            p.style.fontFamily = "'Press Start 2P', system-ui";
            p.innerText = texts[currentIndex];
            fightDesc.innerText = ''; 
            fightDesc.appendChild(p);
            currentIndex++; 
        }
               
      });
// }




//audio functions//

export function menuSound () {
   let blip = new Audio("../public/assets/music/Abutton.mp3");
   blip.play();
} 

export function battleTheme () {
   let theme = new Audio("../public/assets/music/mainTheme.mp3");
   theme.play();
} 


export function iceBeamFx () {
   let iceBeamFx = new Audio("../public/assets/music/IceBeam.mp3");
   iceBeamFx.play();
} 
export function surfFx () {
   let surfFx = new Audio("../public/assets/music/Surf.mp3");
   surfFx.play();
} 
export function confuseRayFx () {
   let confuseRayFx = new Audio("../public/assets/music/ConfuseRay.mp3");
   confuseRayFx.play();
} 
export function restFx () {
   let restFx = new Audio("../public/assets/music/Rest.mp3");
   restFx.play();
} 

export function recovery () {
   let recovery = new Audio("../public/assets/music/recovery.mp3");
   recovery.play();
} 
export function sludgeBombFx () {
   let sludgeBombFx = new Audio("../public/assets/music/SludgeBomb.mp3");
   sludgeBombFx.play();
} 
export function petalDanceFx () {
   let petalDanceFx = new Audio("../public/assets/music/PetalDance.mp3");
   petalDanceFx.play();
} 

export function sleepPowderFx () {
   let sleepPowderFx = new Audio("../public/assets/music/SleepPowder.mp3");
   sleepPowderFx.play();
} 


//Lapras moves //


export let icebeam = () => {
   iceBeamFx();
   let dmgIcebeam = Lapras.attack*1.5;
   // textBattle.innerText = 'Lapras used Ice Beam!'
   displayFightDesc('Lapras used Ice Beam!')
   Venusaur.current_health = Venusaur.current_health - dmgIcebeam;
   console.log("Icebeam dealt " + dmgIcebeam + " hp to Venusaur. It's very effective!" )
   
   fightDesc.innerHTML = "Icebeam dealt " + dmgIcebeam + " hp to Venusaur. \n It's very effective!"
   console.log("Venusaur health: " + Venusaur.current_health);
 }
 
 
 
export let confuseRay = () => {
   confuseRayFx();
    let confuseChance = Math.random();
    
    if (confuseChance > 0.35) {
      //  console.log("Lapras used confuse ray!");
      //  console.log("Venusaur became confused!");
       displayFightDesc("Lapras used confuse ray!" + "\n Venusaur became confused!")

       return true;

    }else {
      //  console.log("Lapras used confuse ray! but it failed...");
       fightDesc.innerHTML = "Lapras used confuse ray! but it failed..."
      return false;
    }
 }
 

export let surf = () => {
   surfFx();
   let dmgsurf = Lapras.attack*0.75 
   displayFightDesc("Lapras used surf!")
   console.log("Lapras used surf!");
   Venusaur.current_health = Venusaur.current_health - dmgsurf;
   console.log("surf dealt " + dmgsurf + " hp to Venusaur")
   console.log("Venusaur health: " + Venusaur.current_health)
 }


export let rest = () => {
   restFx();
   displayFightDesc("Lapras used rest! A mimir.. \n Lapras rested to recover his health.")
   let hpRecovery = Lapras.max_health;
    console.log("Lapras used rest! Lapras fell asleep");
    Lapras.current_health = Lapras.max_health;
    console.log("Lapras recovered " + hpRecovery + " hp");
    
    
 }



// venusaur moves //

export let petalDance = () => {
   petalDanceFx();
   displayFightDesc("Venusaur used Petal Dance!");
   let dmgPetal = Venusaur.attack*1.5
   console.log("Venusaur used petal dance!");
   Lapras.current_health = Lapras.current_health - dmgPetal;
   console.log("petal dance dealt " + dmgPetal + "dmg to Lapras. It's very effective!" ) 
   fightDesc.innerHTML = "Venusaur used petal dance. \n Venusaur dealt " + dmgPetal + " dmg to Lapras. \n It's very effective!"
   console.log("Lapras health: " + Lapras.current_health)
  }
  
  
  
export let sleepPowder = () => {
   sleepPowderFx()
   displayFightDesc("Venusaur used sleep powder!")
     let sleepChance = Math.random();
     console.log(sleepChance);
     
     if (sleepChance > 0.25) {
      fightDesc.innerHTML = "venusaur used sleep powder! \n Lapras fell asleep..";
      
        console.log("Venusaur used sleep powder!");
        console.log("Lapras fell asleep.");
        return true;
     }else {
        console.log("Venusaur used sleep powder! but it failed...");
        return false;
     }
  }
  
 
export let synthesis = () => {

   displayFightDesc("Venusaur used synthesis!")
   recovery();
    let synthHpRecovery = Venusaur.max_health*0.5 
     console.log("Venusaur used synthesis!");
     Venusaur.current_health = Venusaur.current_health + synthHpRecovery
     console.log("Venusaur recovered " + synthHpRecovery + " hp to Venusaur")
     console.log("Venusaur hp : " + Venusaur.current_health);
  }
 
  
export let sludgeBomb = () => {
   sludgeBombFx()
   displayFightDesc("Venusaur used Sludge Bomb!")
    let dmgSludge = Venusaur.attack*0.7
     console.log("Venusaur used sludge bomb!");
     Lapras.current_health = Lapras.current_health - dmgSludge;
     console.log("Venusaur dealt " + dmgSludge + " damage to Lapras");
     console.log("Lapras health: " + Lapras.current_health)
     
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
