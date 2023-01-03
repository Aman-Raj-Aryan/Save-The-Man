score = 0;
cross = true;
/*document.addEventListener('dblclick', function(event) {
  event.preventDefault();
}, false);*/

setTimeout(function () {
    let char = document.getElementById('man');
    jumpAudio = document.getElementById("audio3");
    char.addEventListener('click' ,
        function abc(){
            jumpAudio.play()
        }
        
        )
}, 500
    
)






var fs = document.getElementById('fs');


function fls1() {
    fs.style.visibility = 'visible'
}
fs.addEventListener('touchstart' , fls1 );


let bdy = document.getElementById('body')
function fls() {
    bdy.requestFullscreen();
    fs.style.visibility = 'visible'
    fs.style.visibility = 'hidden'
}


fs.addEventListener('dblclick' , fls );
fs.addEventListener('touchmove' , fls );

const restartButton = document.querySelector('#restart-button');
restartButton.addEventListener('click', function() {
  location.reload(); 
});




var audio = document.getElementById("audio");
function strt() {
    audio.play();
};

document.getElementById("body").addEventListener("touchstart", strt)



var man = document.getElementById("man");
var tiger = document.getElementById("tiger");

function ahead() {
left = parseInt(window.getComputedStyle(man ,null).getPropertyValue("left"));
    man.style.left = left + 35 + "px"
};
document.getElementById("btn2").addEventListener("touchstart", ahead);

function back() {
left = parseInt(window.getComputedStyle(man ,null).getPropertyValue("left"));
    man.style.left = left - 35 + "px"
};
document.getElementById("btn1").addEventListener("touchstart", back);







function add() {man.classList.add("ani");
/*left = parseInt(window.getComputedStyle(man ,null).getPropertyValue("left"));
man.style.left = left + 50 + "px"*/
} 

/*var character = document.querySelector('.ani');
function animate() {
    ani.style.animationFillMode = "forwards"
}*/

document.getElementById("man").addEventListener("touchstart",add)
document.getElementById("man").addEventListener("touchmove",add)
function remove() {man.classList.remove("ani");} 



setInterval(function() {
  man.classList.remove("ani");
}, 5700);




setInterval(function()
{const mx = parseInt(window.getComputedStyle(man ,null).getPropertyValue("left"));

const my = parseInt(window.getComputedStyle(man ,null).getPropertyValue("top"));

const tx = parseInt(window.getComputedStyle(tiger ).getPropertyValue("left"));

const ty = parseInt(window.getComputedStyle(tiger ).getPropertyValue("top"));


var disx = Math.abs(tx-mx);
var disy =Math.abs(my-ty);
/*console.log("dis Y is now :" ,disy);
console.log("dis X is now :" ,disx);*/
var gameover = document.getElementById("over");

var h1 = document.getElementById("head");


if(disx<=35 && disy<=60) {
var end = document.getElementById('audio2');
end.play();
audio.pause();
const restartButton = document.querySelector('#restart-button');
restartButton.style.visibility = 'visible'


    gameover.style.visibility = "visible";
    h1.style.visibility = "hidden";
    man.style.animationFillMode = "forwards"
   /*gameover.style.animation = + "over 2s linear infinite";*/
   tiger.classList.remove("obs")}
   else if (disx<=4&& cross){
  score+=1;
  scorelive(score);
  cross = false;
  setTimeout(()=>
      {cross = true} , 3000
  )
   }
  setTimeout(()=>{
      aniDur = parseFloat(window.getComputedStyle(tiger ).getPropertyValue("animation-duration"));
      newDur = aniDur - 0.0005;
      tiger.style.animationDuration = newDur + 's';
      
  }
      
  , 1000)     
   
  }, 5);
  
  
function scorelive(score){ document.querySelector('.score'). innerHTML = "Your Score : " + score}

       





















function aman(){document.getElementById("head").innerHTML = "Aman Raj Aryan ";}

document.getElementById("head").addEventListener("touchstart" ,aman);




function raj(){document.getElementById("head").innerHTML = "Hurry Up!";}

document.getElementById("head").addEventListener("touchmove" , raj);



function aryan(){document.getElementById("head").innerHTML = "Please Save Man From Tiger";}

document.getElementById("head").addEventListener("touchend" , aryan);

    function aa () {
    document.getElementById("head").innerHTML = "Don't Waste Your Time!";
}

document.getElementById("head").addEventListener("touchcancel" ,aa);
