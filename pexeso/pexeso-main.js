
assignCards(cards)
startTimer()


let clickedCards = []
let fail = []
let success = []
let counter = 0
let box = document.querySelectorAll('.box')
let divs = document.querySelectorAll('.flip-card-inner')



divs.forEach(function (div) {

    div.addEventListener('click', function (e) {

        clickedCards.push(e.path[0].nextElementSibling.classList)

        e.path[1].classList.add('is-flipped', 'disabled')

        fail.push(e.path[1])
        success.push(e.path[2])
        if (clickedCards.length === 2) {
            box.forEach(function (b) {
                b.classList.add('disabled')
            })

            if (clickedCards[0][1] === clickedCards[1][1]) {
                setTimeout(() => {
                    success.forEach(function (i) {
                        i.classList.add('slide-out-elliptic-top-bck')
                        success = []
                        box.forEach(function (b) {
                            b.classList.remove('disabled')
                        })
                    })
                }, 1000)

                clickedCards = []
                counter++
            }
            else {
                setTimeout(() => {
                    fail.forEach(function (i) {
                        i.classList.remove('is-flipped', 'disabled')
                        fail = []
                        success = []
                        clickedCards = []

                        box.forEach(function (b) {
                            b.classList.remove('disabled')
                        })
                    })
                }, 1000)
            }

            if (counter === 9) {
                stopTimer()

                setTimeout(() => {
                    let yourTime = document.querySelector('.yourTime')
                    let overlay = document.querySelector('.overlay')
                    yourTime.textContent = getTime()
                    overlay.classList.add('visible', 'swirl-in-fwd')

                }, 1000);
            }
        }
    })
})