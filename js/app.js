/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let state = {
    boredom : 0,
    hunger : 0,
    sleepiness : 0,
}
let timer
let gameOver
/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector("#boredom-stat");
const sleepinessStatEl = document.querySelector("#sleepiness-stat");
const hungerStatEl = document.querySelector("#hunger-stat");

const playButtonEl = document.querySelector("#play")
const feedButtonEl = document.querySelector("#feed")
const sleepButtonEl = document.querySelector("#sleep")

const gameMessageEl = document.querySelector("#message")
const resetButtonEL = document.querySelector("#restart")

/*-------------------------------- Functions --------------------------------*/
function init (){
    resetButtonEL.classList.add('hidden')
    gameMessageEl.classList.add('hidden')
    gameOver=false
    timer= setInterval(runGame,2000)
    state.boredom=0
    state.hunger=0
    state.sleepiness=0
    render()
}
init()

function runGame(){
    updateStates()
    checkGameOver()
    render()
    
}
function render(){
    boredomStatEl.textContent =state.boredom
    sleepinessStatEl.textContent =state.sleepiness
    hungerStatEl.textContent =state.hunger
    if (gameOver){
        clearInterval(timer)
        resetButtonEL.classList.remove("hidden")
        gameMessageEl.classList.remove("hidden")
    }
}
function updateStates(){
    state.boredom += Math.floor(Math.random()*4)
    state.hunger += Math.floor(Math.random()*4)
    state.sleepiness += Math.floor(Math.random()*4)
}
function checkGameOver(){
    if (state.boredom>=10||state.hunger>=10 ||state.sleepiness>=10){
        gameOver = true
    }
}
function playBtnClick() {
    state.boredom=0
    render()
}
function feedBtnClick() {
    state.hunger=0
    render()
}function sleepBtnClick() {
    state.sleepiness=0
    render()
}


/*----------------------------- Event Listeners -----------------------------*/
playButtonEl.addEventListener('click', playBtnClick);
feedButtonEl.addEventListener('click', feedBtnClick);
sleepButtonEl.addEventListener('click', sleepBtnClick);

resetButtonEL.addEventListener('click', init)

