import { Lapras } from "./pokemon.js";
import { Venusaur } from "./pokemon.js";
import { selectConfuseRay, selectRest, selectSurf, selectIceBeam, battleText } from "./instances.js";
import { nextButton, venusaurSprite, laprasSprite, laprasHealthBar, combatHUD } from "./instances.js";
//text functions//
export let fightDesc = document.querySelector('.fightDesc')

export let displayFightDesc1 = (myDesc) => {
   
   let p = document.createElement("p");
   p.style.color = "white";
   p.style.fontFamily = "'Press Start 2P', system-ui";
   fightDesc.innerHTML = "";
   p.innerText = myDesc;
   fightDesc.appendChild(p);
}

export let displayFightDesc2 = (myDesc) => {
   
   let p = document.createElement("p");
   p.style.color = "white";
   p.style.fontFamily = "'Press Start 2P', system-ui";
   fightDesc.innerHTML = "";
   p.innerText = myDesc;
   fightDesc.appendChild(p);
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
            if(currentIndex == 1){
               setTimeout(() => {
                  laprasCry();
               }, 500)
               
               laprasSprite.style.display = "block"
               laprasHealthBar.style.display = "block"
               

            }
            if (currentIndex == 2) {
             nextButton.style.display="none";
             combatHUD.style.display="flex"
            }
         }
               
      });
// }


//audio functions//
export function venusaurCry () {
   let venusaurCry = new Audio("../public/assets/music/Venusaur.mp3");
   venusaurCry.play();
} 
export function laprasCry () {
   let laprasCry = new Audio("../public/assets/music/Lapras.mp3");
   laprasCry.play();
} 
export function menuSound () {
   let blip = new Audio("../public/assets/music/Abutton.mp3");
   blip.play();
} 

export function battleTheme () {
   let theme = new Audio("../public/assets/music/mainTheme.mp3");
   theme.play();
} 
export function hit () {
   let hit = new Audio("../public/assets/music/hit.mp3");
   hit.play();
} 

export function superEffective () {
   let spEffective = new Audio("../public/assets/music/supereffective.mp3");
   spEffective.play();
} 

export function notEffective () {
   let notEffective = new Audio("../public/assets/music/noteffective.mp3");
   notEffective.play();
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
export function lowHpFx () {
   let lowHpFx = new Audio("../public/assets/music/lowHp.mp3");
   lowHpFx.play();
} 
export function victoryFx () {
   let victoryFx = new Audio("../public/assets/music/victoryTheme.mp3");
   victoryFx.play();
} 
export function faintFx () {
   let faintFx = new Audio("../public/assets/music/faint.mp3");
   faintFx.play();
} 


 
//Hp bar functionality//



export function iceupdateHPBar() {
   let venuhpBar = document.querySelector(".health");
   let currentWidth = parseInt(window.getComputedStyle(venuhpBar).width);
   let decreaseAmount = 110;
   let newWidth = currentWidth - decreaseAmount;
   
   newWidth = Math.max(newWidth, 0);

   venuhpBar.style.width = newWidth + 'px';

}

export function surfupdateHPBar() {
   let venuhpBar = document.querySelector(".health");
   let currentWidth = parseInt(window.getComputedStyle(venuhpBar).width);
   let decreaseAmount = 55;
   let newWidth = currentWidth - decreaseAmount;
   
   newWidth = Math.max(newWidth, 0);

   venuhpBar.style.width = newWidth + 'px';

}
export function sludgeupdateHPBar() {
   let laprashpBar = document.querySelector(".health2");
   let currentWidth = parseInt(window.getComputedStyle(laprashpBar).width);
   let decreaseAmount = 57;
   let newWidth = currentWidth - decreaseAmount;
   
   
   newWidth = Math.max(newWidth, 0);

   laprashpBar.style.width = newWidth + 'px';

}
export function petalupdateHPBar() {
   let laprashpBar = document.querySelector(".health2");
   let currentWidth = parseInt(window.getComputedStyle(laprashpBar).width);
   let decreaseAmount = 120;
   let newWidth = currentWidth - decreaseAmount;
   
   newWidth = Math.max(newWidth, 0);

   laprashpBar.style.width = newWidth + 'px';

}

export function venusaurDeath() {
   venusaurSprite.style.display ="none"
}


export function laprasDeath() {
   laprasSprite.style.display ="none"
}

  



//Lapras moves //
let battleStates = [];
   

export let icebeam = () => {
   iceBeamFx();
   setTimeout(function() {
      
      superEffective();
    }, 2300);
    setTimeout(function() {
      
      venuIsHit();
    }, 2400);
    setTimeout(function() {
      
      iceupdateHPBar();
    }, 2600);
   
   let dmgIcebeam = Lapras.attack*1.5;
   // textBattle.innerText = 'Lapras used Ice Beam!'
   
   displayFightDesc1('Lapras used Ice Beam!' )
   setTimeout(function() {
      displayFightDesc2("Its super effective!")

   }, 1000)
   
   Venusaur.current_health = Venusaur.current_health - dmgIcebeam;
   console.log("Icebeam dealt " + dmgIcebeam + " hp to Venusaur. It's very effective!" )
   
   
   
   console.log("Venusaur health: " + Venusaur.current_health);
 }
 
 
 
export let confuseRay = () => {
   
    let confuseChance = Math.random();
    
    if (confuseChance > 0.35) {
      //  console.log("Lapras used confuse ray!");
      //  console.log("Venusaur became confused!");
      confuseRayFx();
      displayFightDesc1("Lapras used confuse ray!")
      setTimeout(() => {
         displayFightDesc2("Venusaur became confused!")
      }, 2000);
      

       return true;

    }else {
      //  console.log("Lapras used confuse ray! but it failed...");
       fightDesc.innerHTML = "Lapras used confuse ray! but it failed..."
      return false;
    }
 }
 

export let surf = () => {
   surfFx();
   setTimeout(() => {
      notEffective();
   }, 2000);
   setTimeout(function() {
      
      venuIsHit();
    }, 2100);
   setTimeout(() => {
     surfupdateHPBar() ;
   }, 2500);
   
   let dmgsurf = Lapras.attack*0.75 
   displayFightDesc1("Lapras used surf!")
   setTimeout(() => {
      displayFightDesc2("It's not very effective")
      
   }, 2000);
   
   console.log("Lapras used surf!");
   Venusaur.current_health = Venusaur.current_health - dmgsurf;
   console.log("surf dealt " + dmgsurf + " hp to Venusaur")
   console.log("Venusaur health: " + Venusaur.current_health)
 }


export let rest = () => {
   restFx();
   displayFightDesc1("Lapras used rest! A mimir.. \n Lapras rested to recover his health.")
   let hpRecovery = Lapras.max_health;
    console.log("Lapras used rest! Lapras fell asleep");
    Lapras.current_health = Lapras.max_health;
    console.log("Lapras recovered " + hpRecovery + " hp");
    
    
 }



// venusaur moves //

export let petalDance = () => {
   petalDanceFx();
   setTimeout(() => {
      superEffective();
      
   }, 2000);
   setTimeout(function() {
      
      laprasIsHit();
    }, 2100);
   setTimeout(() => {
      petalupdateHPBar();
      
   }, 2500);
   
   
   
   displayFightDesc2("Venusaur used Petal Dance!");
   let dmgPetal = Venusaur.attack*1.5
   console.log("Venusaur used petal dance!");
   Lapras.current_health = Lapras.current_health - dmgPetal;
   console.log("petal dance dealt " + dmgPetal + "dmg to Lapras. It's very effective!" ) 
   fightDesc.innerHTML = "Venusaur used petal dance. \n It's very effective!"
   console.log("Lapras health: " + Lapras.current_health)
  }
  
  
  
export let sleepPowder = () => {
   sleepPowderFx()
   displayFightDesc2("Venusaur used sleep powder!")
     let sleepChance = Math.random();
     console.log(sleepChance);
     
     if (sleepChance > 0.25) {
      fightDesc.innerHTML = "Venusaur used sleep powder! \n Lapras fell asleep..";
      
        console.log("Venusaur used sleep powder!");
        console.log("Lapras fell asleep.");
        return true;
     }else {
        console.log("Venusaur used sleep powder! but it failed...");
        return false;
     }
  }
  
 
export let synthesis = () => {

   displayFightDesc2("Venusaur used synthesis!")
   recovery();
    let synthHpRecovery = Venusaur.max_health*0.5 
     console.log("Venusaur used synthesis!");
     Venusaur.current_health = Venusaur.current_health + synthHpRecovery
     console.log("Venusaur recovered " + synthHpRecovery + " hp to Venusaur")
     console.log("Venusaur hp : " + Venusaur.current_health);
  }
 
  
export let sludgeBomb = () => {
   sludgeBombFx()
   setTimeout(function() {
      
      hit();
    }, 3000);
    setTimeout(function() {
      
      laprasIsHit();
    }, 3100);
    setTimeout(function() {
      
      sludgeupdateHPBar();
    }, 3500);
   
   displayFightDesc2("Venusaur used Sludge Bomb!")
    let dmgSludge = Venusaur.attack*0.7
     console.log("Venusaur used sludge bomb!");
     Lapras.current_health = Lapras.current_health - dmgSludge;
     console.log("Venusaur dealt " + dmgSludge + " damage to Lapras");
     console.log("Lapras health: " + Lapras.current_health)
     
  }


  // game functions //

export let VenusaurAttack = () => {
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
} 




export let healthCheck = () => {
    let venuHealth = Venusaur.current_health;
   //  let laprasHealth = Lapras.current_health;
    
    if (venuHealth <= 0 ) {
      console.log("Venusaur fainted....Lapras wins!");
        
        
        setTimeout(function() {
      
            venusaurDeath();
            faintFx ()
            victoryFx()
            fightDesc.innerHTML = "Venusaur fainted....Lapras wins!"
            combatHUD.style.display ="none"
          }, 1500);
      
              
       }
  }     


  export let healthCheck2 = () => {
  if (Lapras.current_health <= 0) {
       
   console.log("Lapras fainted....Venusaur wins! ");
   fightDesc.innerHTML = "Lapras fainted... Venusaur wins!"
   
   setTimeout(() => {
   laprasDeath();
   faintFx ()
   combatHUD.style.display ="none"

   }, 1000)
    
  }


  }


  export let venuIsHit = () => {
   setTimeout(() => {
      venusaurSprite.style.display ='none';
      
   }, 50);
   setTimeout(() => {
      venusaurSprite.style.display ='block';
      
   }, 100);
   setTimeout(() => {
      venusaurSprite.style.display ='none';
      
   }, 150);
   setTimeout(() => {
      venusaurSprite.style.display ='block';
      
   }, 200);
   
  
  }
  export let laprasIsHit = () => {
   setTimeout(() => {
      laprasSprite.style.display ='none';
      
   }, 50);
   setTimeout(() => {
      laprasSprite.style.display ='block';
      
   }, 100);
   setTimeout(() => {
      laprasSprite.style.display ='none';
      
   }, 150);
   setTimeout(() => {
      laprasSprite.style.display ='block';
      
   }, 200);
   
  
  }
