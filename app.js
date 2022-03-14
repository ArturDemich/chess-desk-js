const board = document.querySelector('#board')
const SQUARES_NUMBER = 100
const symbol = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const number = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let count = 0


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    
    if (i <= 8 && i != 0) {
    square.classList.add('symbol')
    target(square, count, symbol)
    } else if (i >= 91 && i != 99) {
        square.classList.add('symbol')
        target(square, count, symbol)
    } else if (i == 0 || i == 9 || i == 90 || i == 99) {
        square.classList.add('nook')
    } else if ( i == 10 || i == 19 || i == 20 || i == 29 || i == 30 || i == 39 || i == 40 || i == 49 || i == 50 || i == 59 || i == 60 || i == 69 || i == 70 || i == 79 || i == 80|| i == 89 ) {
        square.classList.add('number') 
        target(square, count, number)
    } else {
        square.classList.add('square')
    }

    
    if (i > 10 && i < 20) {
    setColor(square, i)    
    } else if (i > 20 && i <= 28) {
        setColorTwo(square, i)
    } else if (i > 30 && i < 39) {
        setColor(square, i)
    } else if (i >= 41 && i < 48) {
        setColorTwo(square, i)
    } else if (i >= 51 && i < 59) {
        setColor(square, i)
    } else if (i >= 61 && i < 68) {
        setColorTwo(square, i)
    } else if (i >= 71 && i < 79) {
        setColor(square, i)
    } else if (i >= 81 && i < 88) {
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

function target(elem, i, arr) {
    arr.forEach((element, index) => {
        if (i == index) {
            elem.innerHTML = `<p>${element}</p>`
            count++            
        }        
    })
    if (count == arr.length) {
        count = 0 
    }
      
}
