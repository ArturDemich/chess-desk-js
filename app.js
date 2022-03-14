const board = document.querySelector('#board')
const SQUARES_NUMBER = 64


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    
    if (i < 8) {
    setColor(square, i)    
    } else if (i >= 9 && i < 16) {
        setColorTwo(square, i)
    } else if (i >= 16 && i < 24) {
        setColor(square, i)
    } else if (i >= 25 && i < 32) {
        setColorTwo(square, i)
    } else if (i >= 32 && i < 40) {
        setColor(square, i)
    } else if (i >= 41 && i < 48) {
        setColorTwo(square, i)
    } else if (i >= 48 && i < 56) {
        setColor(square, i)
    } else if (i >= 56 && i < 65) {
        setColorTwo(square, i)
    } 
   
    board.append(square)
}


function setColor(elem, i) {
    if (i % 2 == 0) {
    elem.style.backgroundColor = '#fff'
    elem.style.boxShadow = `0 0 2px #fff, 0 0 10px #fff`
    } 
}

function setColorTwo(elem, i) {
    if (i % 2 != 0) {
    elem.style.backgroundColor = '#fff'
    elem.style.boxShadow = `0 0 2px #fff, 0 0 10px #fff`
    } 
}
