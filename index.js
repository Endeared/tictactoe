let container = document.getElementById("board");
let winCont = document.getElementById("winCont");
let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;
let c = 0;

function check() {
        let win1 = parseInt(box1.dataset.id) + parseInt(box2.dataset.id) + parseInt(box3.dataset.id)
        let win2 = parseInt(box4.dataset.id) + parseInt(box5.dataset.id) + parseInt(box6.dataset.id)
        let win3 = parseInt(box7.dataset.id) + parseInt(box8.dataset.id) + parseInt(box9.dataset.id)
        let win4 = parseInt(box1.dataset.id) + parseInt(box4.dataset.id) + parseInt(box7.dataset.id)
        let win5 = parseInt(box2.dataset.id) + parseInt(box5.dataset.id) + parseInt(box8.dataset.id)
        let win6 = parseInt(box3.dataset.id) + parseInt(box6.dataset.id) + parseInt(box9.dataset.id)
        let win7 = parseInt(box1.dataset.id) + parseInt(box5.dataset.id) + parseInt(box9.dataset.id)
        let win8 = parseInt(box3.dataset.id) + parseInt(box5.dataset.id) + parseInt(box7.dataset.id)
        let winArr = [win1, win2, win3, win4, win5, win6, win7, win8];
        for(let i = 0; i < winArr.length; i++) {
            let currentCheck = winArr[i];
            if (currentCheck === 6) {
                xWin()
                winArr = [];
                i = 10000;
                currentCheck = 100
                c = 10;
                break;
            } else if (currentCheck === 3) {
                oWin()
                winArr = [];
                i = 10000;
                currentCheck = 100
                c = 10;
                break;
            }
        }
        c++;
        console.log(c);
        if (c === 9) {
            draw()
            i = 10000;
        }
    }

for(let i = 0; i < gameBoard.length; i++) {
    let cell = document.createElement("div");
    cell.id = i + 1;
    cell.className = "cell";
    container.appendChild(cell)
    cell.innerHTML += " ";
    if (c <= 8) {
        cell.addEventListener('click', event => {
        if (count % 2 === 0) {
            cell.innerHTML += "<img src=\"https://cdn-icons-png.flaticon.com/512/75/75519.png\" width=\"400px\" height=\"150px\">"
            cell.setAttribute("data-id", 2)
            count++
            check()
        } else {
            cell.innerHTML += "<img src=\"https://www.symbols.com/images/symbol/2082_off-symbol.png\" width=\"400px\" height=\"150px\">"
            cell.setAttribute("data-id", 1)
            count++
            check()
        }
    })
    }

}

function xWin() {
    console.log("X wins")
    let xWin = document.createElement("div");
    xWin.id = "xWin";
    winCont.appendChild(xWin);
    xWin.innerHTML += "X WINS!"
    setTimeout(function(){
        location.reload();
    }, 1000)
}

function oWin() {
    console.log("O wins")
    let oWin = document.createElement("div");
    oWin.id = "oWin";
    winCont.appendChild(oWin);
    oWin.innerHTML += "O WINS!"
    setTimeout(function(){
        location.reload();
    }, 1000)
}

function draw() {
    console.log("O wins")
    let draw = document.createElement("div");
    draw.id = "draw";
    winCont.appendChild(draw);
    draw.innerHTML += "DRAW!"
    setTimeout(function(){
        location.reload();
    }, 1000)
}


let box1 = document.getElementById("1")
let box2 = document.getElementById("2")
let box3 = document.getElementById("3")
let box4 = document.getElementById("4")
let box5 = document.getElementById("5")
let box6 = document.getElementById("6")
let box7 = document.getElementById("7")
let box8 = document.getElementById("8")
let box9 = document.getElementById("9")
