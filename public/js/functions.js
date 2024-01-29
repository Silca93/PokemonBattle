import { Lapras } from "./pokemon.js";
import { Venusaur } from "./pokemon.js";
import { selectConfuseRay, selectRest, selectSurf, surfAttack, selectIceBeam, battleText } from "./instances.js";
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
                  // battleTheme();
               }, 100)
               
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
   let venusaurCry = new Audio("./../assets/music/Venusaur.mp3");
   venusaurCry.play();
} 
export function laprasCry () {
   let laprasCry = new Audio("./../assets/music/Lapras.mp3");
   laprasCry.play();
} 
export function menuSound () {
   let blip = new Audio("./../assets/music/Abutton.mp3");
   blip.play();
} 

export function battleTheme () {
   let theme = new Audio("./../assets/music/mainTheme.mp3");
   theme.play();
} 
export function battleThemestop () {
   let theme = new Audio("./../assets/music/mainTheme.mp3");
   theme.stop();
} 
export function hit () {
   let hit = new Audio("./../assets/music/hit.mp3");
   hit.play();
} 

export function superEffective () {
   let spEffective = new Audio("./../assets/music/supereffective.mp3");
   spEffective.play();
} 

export function notEffective () {
   let notEffective = new Audio("./../assets/music/noteffective.mp3");
   notEffective.play();
} 


export function iceBeamFx () {
   let iceBeamFx = new Audio("./../assets/music/IceBeam.mp3");
   iceBeamFx.play();
} 
export function surfFx () {
   let surfFx = new Audio("./../assets/music/Surf.mp3");
   surfFx.play();
} 
export function confuseRayFx () {
   let confuseRayFx = new Audio("./../assets/music/ConfuseRay.mp3");
   confuseRayFx.play();
} 
export function restFx () {
   let restFx = new Audio("./../assets/music/Rest.mp3");
   restFx.play();
} 

export function recovery () {
   let recovery = new Audio("./../assets/music/recovery.mp3");
   recovery.play();
} 
export function sludgeBombFx () {
   let sludgeBombFx = new Audio("./../assets/music/SludgeBomb.mp3");
   sludgeBombFx.play();
} 
export function petalDanceFx () {
   let petalDanceFx = new Audio("./../assets/music/PetalDance.mp3");
   petalDanceFx.play();
} 

export function sleepPowderFx () {
   let sleepPowderFx = new Audio("./../assets/music/SleepPowder.mp3");
   sleepPowderFx.play();
} 
export function lowHpFx () {
   let lowHpFx = new Audio("./../assets/music/lowHp.mp3");
   lowHpFx.play();
} 
export function lowHpFxstop () {
   let lowHpFx = new Audio("./../assets/music/lowHp.mp3");
   lowHpFx.stop();
} 
export function victoryFx () {
   let victoryFx = new Audio("./../assets/music/victoryTheme.mp3");
   victoryFx.play();
} 
export function faintFx () {
   let faintFx = new Audio("./../assets/music/faint.mp3");
   faintFx.play();
} 
export function confuseFx () {
   let confuseFx = new Audio("./../assets/music/Confused.mp3");
   confuseFx.play();
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



//hp recovery functions //


export function recoveryupdateHPBar() {
   let venuhpBar = document.querySelector(".health");
   let currentWidth = parseInt(window.getComputedStyle(venuhpBar).width);
   let increaseAmount = 85;
   let newWidth = currentWidth + increaseAmount;
   
   newWidth = Math.min(newWidth, 170);

   venuhpBar.style.width = newWidth + 'px';

}

export function restupdateHPBar() {
   let laprasHpBar = document.querySelector(".health2");
   let currentWidth = parseInt(window.getComputedStyle(laprasHpBar).width);
   let increaseAmount = 170;
   let newWidth = currentWidth + increaseAmount;
   
   newWidth = Math.min(newWidth, 170);

   laprasHpBar.style.width = newWidth + 'px';

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
   if (Lapras.current_health > 0) {
      iceBeamFx();
   combatHUD.style.display = "none";
   
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
   
 }
 
 
 
export let confuseRay = () => {
   
    let confuseChance = Math.random();
    
    if (confuseChance > 0.35) {
      //  console.log("Lapras used confuse ray!");
      //  console.log("Venusaur became confused!");
      confuseRayFx();
      combatHUD.style.display = "none"
      displayFightDesc1("Lapras used confuse ray!")
      setTimeout(() => {
         displayFightDesc2("Venusaur became confused!")
      }, 2000);
      setTimeout(() => {
         confuseFx();
      }, 2100);
      
      

       return true;

    }else {
      //  console.log("Lapras used confuse ray! but it failed...");
       fightDesc.innerHTML = "Lapras used confuse ray! but it failed..."
       combatHUD.style.display = "none"
      return false;
    }
 }
 

export let surf = () => {
   surfFx();
   combatHUD.style.display = "none"
   setTimeout(function () {
      surfAttack.style.opacity = "1";

   }, 100)
   surfAttack.classList.add('show');
   surfAttack.classList.add('translate');
   setTimeout(function () {
      surfAttack.style.opacity = "0";

   }, 900)
   setTimeout(function () {
      surfAttack.classList.remove("show")

   }, 1300)
   
   setTimeout(() => {
      notEffective();
   }, 2000);
   setTimeout(() => {
      surfAttack.classList.remove('translate');
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
   combatHUD.style.display = "none"
   setTimeout(() => {
      restupdateHPBar();
   }, 1500);
   displayFightDesc1("Lapras used rest! A mimir.. ")

   setTimeout(() => {
      displayFightDesc2("Lapras rested to recover his health.")
   }, 1500);
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
   if (Venusaur.current_health == 350) {
      sludgeBomb();
   }
   else{
      displayFightDesc2("Venusaur used synthesis!")
      recovery();
      setTimeout(() => {
         recoveryupdateHPBar();
         
      }, 2000);
       let synthHpRecovery = Venusaur.max_health*0.5 
        console.log("Venusaur used synthesis!");
        Venusaur.current_health = Venusaur.current_health + synthHpRecovery
        console.log("Venusaur recovered " + synthHpRecovery + " hp to Venusaur")
        console.log("Venusaur hp : " + Venusaur.current_health);
   }
    
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




export let healthCheck1 = () => {
    let venuHealth = Venusaur.current_health;
   //  let laprasHealth = Lapras.current_health;
    
    if (venuHealth <= 0 ) {
      console.log("Venusaur fainted....Lapras wins!");
        
        
        setTimeout(function() {
      
            venusaurDeath();
            faintFx ()
            // battleThemestop();
            victoryFx()
            fightDesc.innerHTML = "Venusaur fainted....Lapras wins!"
            combatHUD.style.display ="none"
          }, 4000);
      
              
       }
  }     


  export let healthCheck2 = () => {
  if (Lapras.current_health <= 0) {
       
   console.log("Lapras fainted....Venusaur wins! ");
   fightDesc.innerHTML = "Lapras fainted... Venusaur wins!"
   
   setTimeout(() => {
   laprasDeath();
   // battleThemestop();
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
