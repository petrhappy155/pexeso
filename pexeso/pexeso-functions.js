let cards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9', 'card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9']

//Shuffle Cards
let shuffleCards = function (a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a
}

//Assign Cards 
let assignCards = function (cards) {
    let divs = document.querySelectorAll('.flip-card-back');
    let shuffledCards = shuffleCards(cards)
    divs.forEach(function (div, index) {
        div.classList.add(shuffledCards[index])
    })
}

let seconds = 0;
let minutes = 0;
let timerCont = document.querySelector('h1')

//Counter function
let stopWatch = function () {

    seconds++

    if (seconds > 59) {
        seconds = 0
        minutes++
    }

    timerCont.textContent = `${minutes} : ${seconds}`
}

let t = null;

//Start Counter function
let startTimer = function () {
    t = setInterval(stopWatch, 1000)

}

//Stop Counter function
let stopTimer = function () {
    clearInterval(t)
}

//Get Time text 

let getTime = function () {
    let playTime = timerCont.textContent
    return `Your time is: ${playTime}`
}





