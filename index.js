const homeScore = document.querySelector(".homeScore")
const guestScore = document.querySelector(".guestScore")
const btnn = document.querySelectorAll(".btnwrap");
const game = document.querySelector(".newgame")
const diff = document.querySelector(".diff");
console.log(btnn)
// console.log(score,plusOne)

btnn.forEach(element => {
    element.addEventListener("click",e=>{
        e.preventDefault()
let btn = e.target
let changeScore = btn.parentElement.previousElementSibling;
console.log(btn.parentElement.previousElementSibling)
if (btn.className === "one") {
  console.log("a");
    changeScore.textContent =  Number(changeScore.textContent) + 1
    changeColor()
} else if (btn.className === "two") {
  console.log("b");
  changeScore.textContent = Number(changeScore.textContent) + 2;
  changeColor();
} else if (btn.className === "three") {
  console.log("c");
 changeScore.textContent = Number(changeScore.textContent) + 3;
changeColor();
}
    })
});


// console.log(homeScore.textContent)
const changeColor = ()=>{
if (homeScore.textContent === guestScore.textContent) {
  homeScore.style.color = "yellow";
    guestScore.style.color = "yellow";
    diff.textContent = 'Draw';
} else if (Number(homeScore.textContent) > Number(guestScore.textContent)) {
  homeScore.style.color = "green";
  guestScore.style.color ="red"
  if (Number(homeScore.textContent) - Number(guestScore.textContent) === 1) {
  diff.textContent = `home leads with ${
    Number(homeScore.textContent) - Number(guestScore.textContent)
  } point`;
  }else{
diff.textContent = `home leads with ${
  Number(homeScore.textContent) - Number(guestScore.textContent)
} points`;
  }

} else if (Number(guestScore.textContent) > Number(homeScore.textContent)) {
  homeScore.style.color = "red";
  guestScore.style.color = "green";

   if ( Number(guestScore.textContent ) - Number(homeScore.textContent) === 1) {
     diff.textContent = `Guest leads with ${
       Number(guestScore.textContent) - Number(homeScore.textContent)
     } point`;
   } else {
     diff.textContent = `Guest leads with ${
       Number(guestScore.textContent) - Number(homeScore.textContent)
     } points`;
   }
  
}

}


const newGame = ()=>{
    homeScore.textContent = 0
    guestScore.textContent = 0
     diff.textContent = "";
    homeScore.style.color = "white";
    guestScore.style.color = "white";
}

game.addEventListener("click",newGame)