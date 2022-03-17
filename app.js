const board = document.querySelector('#board')
const SQUARES_NUMBER = 100
const symbol = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const number = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
let arrId = []
let count = 0
let countSquare = 0


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
        targetId(square)
        countSquare++
        createChessman(square, i)
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

function targetId(elem) {
    const arr = []
    for (let h = 0; h < number.length; h++) {
        for (let i = 0; i < symbol.length; i++) {
        arr.push(`${symbol[i] + number[h]}`)
      } 
    h++   
   }
   arr.forEach((element, index) => {
       if (countSquare == index) {
           elem.id = `${element}`
       }
   })   
 }

function createChessman(elem, i) {
    const div = document.createElement('div')
    div.classList.add('chessman')
    div.setAttribute('draggable', 'true')

    if ( i <= 29 || i >= 71 ) {                    
        elem.append(div)
    }   
}






const chessman = document.querySelectorAll('.chessman')
const placeholders = document.querySelectorAll('.square')
let chessmanActive 

chessman.forEach((elem) => {elem.addEventListener('dragstart', dragstart)}) 
chessman.forEach((elem) => {elem.addEventListener('dragend', dragend)})

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'),0)   
    chessmanActive = event.target 
}

function dragend(event) {
    event.target.className = 'chessman'        
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(chessmanActive)
}
