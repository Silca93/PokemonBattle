import { Lapras } from "./pokemon.js";
import { Venusaur } from "./pokemon.js";
import { selectConfuseRay, selectRest, selectSurf, surfAttack, selectIceBeam, battleText } from "./instances.js";
import { nextButton, venusaurSprite, laprasSprite, laprasHealthBar, combatHUD } from "./instances.js";
//text functions//
export let fightDesc = document.querySelector('.fightDesc')

export let pokemonSelection = document.querySelector(".selectScreen")

export let battleTransition = document.querySelector(".combatMap")

export let clickOnLapras = document.querySelector(".card")

clickOnLapras.addEventListener("click", function() {
   pokemonSelection.style.display = "none";
   battleTransition.style.display = "block";
   venusaurCry() ;
   battleTheme();
})

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
   let venusaurCry = new Audio("./public/assets/music/Venusaur.mp3");
   venusaurCry.play();
} 
export function laprasCry () {
   let laprasCry = new Audio("./public/assets/music/Lapras.mp3");
   laprasCry.play();
} 
export function menuSound () {
   let blip = new Audio("./public/assets/music/Abutton.mp3");
   blip.play();
} 

export function battleTheme () {
   let theme = new Audio("./public/assets/music/mainTheme3.mp3");
   theme.play();
   window.battleThemeAudio = theme;
} 
export function battleThemestop () {
   let theme = new Audio("./public/assets/music/mainTheme3.mp3");
   if (window.battleThemeAudio) { // Check if audio element is stored
      window.battleThemeAudio.pause(); // Use pause() to stop playback
      window.battleThemeAudio.currentTime = 0; // Reset playback position (optional)
    } else {
      console.warn("Audio element not found for stopping battle theme");
    }
} 
export function hit () {
   let hit = new Audio("./public/assets/music/hit.mp3");
   hit.play();
} 

export function superEffective () {
   let spEffective = new Audio("./public/assets/music/supereffective.mp3");
   spEffective.play();
} 

export function notEffective () {
   let notEffective = new Audio("./public/assets/music/noteffective.mp3");
   notEffective.play();
} 


export function iceBeamFx () {
   let iceBeamFx = new Audio("./public/assets/music/IceBeam.mp3");
   iceBeamFx.play();
} 
export function surfFx () {
   let surfFx = new Audio("./public/assets/music/Surf.mp3");
   surfFx.play();
} 
export function confuseRayFx () {
   let confuseRayFx = new Audio("./public/assets/music/ConfuseRay.mp3");
   confuseRayFx.play();
} 
export function restFx () {
   let restFx = new Audio("./public/assets/music/Rest.mp3");
   restFx.play();
} 

export function recovery () {
   let recovery = new Audio("./public/assets/music/recovery.mp3");
   recovery.play();
} 
export function sludgeBombFx () {
   let sludgeBombFx = new Audio("./public/assets/music/SludgeBomb.mp3");
   sludgeBombFx.play();
} 
export function petalDanceFx () {
   let petalDanceFx = new Audio("./public/assets/music/PetalDance.mp3");
   petalDanceFx.play();
} 

export function sleepPowderFx () {
   let sleepPowderFx = new Audio("./public/assets/music/SleepPowder.mp3");
   sleepPowderFx.play();
} 
export function lowHpFx () {
   let lowHpFx = new Audio("./public/assets/music/lowHp.mp3");
   lowHpFx.play();
} 
export function lowHpFxstop () {
   let lowHpFx = new Audio("./public/assets/music/lowHp.mp3");
   lowHpFx.stop();
} 
export function victoryFx () {
   let victoryFx = new Audio("./public/assets/music/victoryTheme.mp3");
   victoryFx.play();
} 
export function faintFx () {
   let faintFx = new Audio("./public/assets/music/faint.mp3");
   faintFx.play();
} 
export function confuseFx () {
   let confuseFx = new Audio("./public/assets/music/Confused.mp3");
   confuseFx.play();
} 


 
//Hp bar  damage functions//



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


export function confusionDamage () {
   let venuhpBar = document.querySelector(".health");
   let currentWidth = parseInt(window.getComputedStyle(venuhpBar).width);
   let decreaseAmount = 17;
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





//hp bar recovery functions //


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


//Death functions//

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
      setTimeout(() => {
         
         iceBeamFx();
      }, 200);
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
      setTimeout(() => {
         
         confuseRayFx();
      }, 200);
      combatHUD.style.display = "none"
      displayFightDesc1("Lapras used confuse ray!")
      setTimeout(() => {
         displayFightDesc2("Venusaur became confused!")
         Venusaur.confused = true;
         console.log("venusaur confusion status: " + Venusaur.confused);
         
      }, 2000);
      setTimeout(() => {
         confuseFx();
      }, 2100);
      if (Venusaur.confused = true) {
         console.log("venusaur confusion status: " + Venusaur.confused);
         
         let confusedMoveChance = Math.random();
         console.log(confusedMoveChance);
         
      }
      
      

       return true;

    }else {
      //  console.log("Lapras used confuse ray! but it failed...");
       fightDesc.innerHTML = "Lapras used confuse ray! but it failed..."
       combatHUD.style.display = "none"
       return false;
      
    }
 }
 

export let surf = () => {
   setTimeout(() => {
      
      surfFx();
   }, 200);
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
   Lapras.asleep = true;
   console.log("Lapras is asleep: " + Lapras.asleep);
   setTimeout(() => {
      
      restFx();
   }, 200);

   sleep();
   combatHUD.style.display = "none"
   
   setTimeout(() => {
      restupdateHPBar();
   }, 1500);
   displayFightDesc1("Lapras used rest! ")
   setTimeout(() => {
      displayFightDesc2("Lapras rested to recover his health.")
   }, 1500);
   let hpRecovery = Lapras.max_health;
   console.log("Lapras used rest! Lapras fell asleep");
   Lapras.current_health = Lapras.max_health;
   console.log("Lapras recovered " + hpRecovery + " hp");

}

 export let sleep = () => {
   let sleepEffect = document.createElement("div");
   sleepEffect.classList.add("sleepEffect");
 
   // Add two "Z" elements
   for (let i = 0; i < 2; i++) {
     let z = document.createElement("span");
     z.classList.add("z");
     z.textContent = "..Z";
     sleepEffect.appendChild(z);
     z.style.animationDelay = `${i * 0.6}s`;

   
   }
 
   // Append the sleep effect to the body or desired container
   document.body.appendChild(sleepEffect);
 
   // Remove the sleep effect after 1 second
   setTimeout(() => {
   sleepEffect.remove();
   }, 1000);
 };


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
   setTimeout(() => {
      
      Lapras.asleep = true;
     }, 3000);
     let sleepChance = Math.random();
   //   console.log(sleepChance);
     
     if (sleepChance > 0.25) {
      fightDesc.innerHTML = "Venusaur used sleep powder! \n Lapras fell asleep..";
      
        console.log("Venusaur used sleep powder!");
        console.log("Lapras is asleep.: " + Lapras.asleep);
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
   // console.log(VenusaurRandom);
   if (VenusaurRandom == 0 && Venusaur.current_health > 0){
      petalDance();
   }else if (VenusaurRandom == 1  && Venusaur.current_health > 0){
      synthesis();
   }else if (VenusaurRandom == 2  && Venusaur.current_health > 0){
      sleepPowder();
   }else if (VenusaurRandom == 3  && Venusaur.current_health > 0) {
      sludgeBomb();
   }
} 

export let areYouAsleep = () => {
   let wakeUpOdds = Math.random();
   if (wakeUpOdds < 0.5) {
      Lapras.asleep = false;
      setTimeout(() => {
         displayFightDesc1("Lapras woke up!")

         console.log(wakeUpOdds);
         console.log('Lapras is asleep: ' + Lapras.asleep);
      }, 500)
     
   }else {
      Lapras.asleep = true;
      setTimeout(()=> {
         displayFightDesc1("Lapras is fast asleep...");
         console.log(wakeUpOdds);
         console.log("Lapras is asleep:" + Lapras.asleep);
         sleep();
         restFx();
         combatHUD.style.display = "none";
      }, 500)
   }

}


let confusionDuration = [1,2,3,4]

// let i = 0;

export let areYouConfused = () => {
//    while (confusionDuration < 4) {


      let oddsOfConfusionSnapOut = Math.random();
      if (oddsOfConfusionSnapOut < 0.40) {
         
         setTimeout(() => {
            displayFightDesc1("Venusaur snapped out of confusion!")
            
         }, 4000);
         setTimeout(() => {
            Venusaur.confused = false;
            console.log("venusaur confusion status: " + Venusaur.confused);
            
         }, 4200);
   
         setTimeout(function() {
            if (Venusaur.current_health > 0){

               VenusaurAttack();
               healthCheck2()
            }
         }, 5000);
      }else {
      let confusedMoveChance = Math.random();
      console.log(confusedMoveChance);
         if (confusedMoveChance < 0.5) {
            console.log("venusaur confusion status: " + Venusaur.confused);
           
            setTimeout(() => {
               displayFightDesc1("Venusaur is confused... It hurt itself in it's confusion!")

               
            }, 4000);
            // confuseFx()
            setTimeout(function() {
   
               hit();
               venuIsHit();
            }, 4200);
            setTimeout(function() {
               console.log(Venusaur.current_health);
               Venusaur.current_health = Venusaur.current_health - 35;
               console.log(Venusaur.current_health);

               
               confusionDamage();
            }, 4400);

         
         }else {
            setTimeout(() => {
               console.log('venusaur' + Venusaur.confused);
               console.log('Venusaur managed to attack through confusion');
               VenusaurAttack();
            }, 4000);
         
         }
   
         
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
            battleThemestop();
            victoryFx()
            fightDesc.innerHTML = "Venusaur fainted....Lapras wins!"
            combatHUD.style.display ="none"
          }, 4000);
      
              
       }
  }  
  
  export let VenuhealthCheck = () => {
   let venuHealth = Venusaur.current_health;
  //  let laprasHealth = Lapras.current_health;
   
   if (venuHealth <= 0 ) {
   console.log("Venusaur fainted....Lapras wins!");

         venusaurDeath();
         faintFx ()
          // battleThemestop();
         victoryFx()
         fightDesc.innerHTML = "Venusaur fainted....Lapras wins!"
         combatHUD.style.display ="none"
        

      }
}       


  export let healthCheck2 = () => {
  if (Lapras.current_health <= 0) {
       
   console.log("Lapras fainted....Venusaur wins! ");
   
   
   setTimeout(() => {
      fightDesc.innerHTML = "Lapras fainted... Venusaur wins!"
      

      
   }, 3800);

   // setTimeout(() => {
   //    combatHUD.style.display ="none"
      
   // }, 4100);

   setTimeout(() => {
   laprasDeath();
   
   faintFx ()
   battleThemestop()

   }, 4400)
    
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
