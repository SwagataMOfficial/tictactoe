// game variables and constants
const box = document.getElementsByClassName("grid-box");
const turn_text = document.querySelector(".turn");
const reset = document.querySelector(".btn");
turn = 'X';
gameover = false;


// game functions here

function checkWin(){
    win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    win.forEach(e=> {
        if(
            (Array.from(box)[e[0]].innerHTML === Array.from(box)[e[1]].innerHTML) &&
            (Array.from(box)[e[1]].innerHTML === Array.from(box)[e[2]].innerHTML) && 
            (Array.from(box)[e[0]].innerHTML !== '')
        ){
            gameover = true
        };
    });
};

function changeTurn(){
    if (turn === 'X'){
        turn = 'O';
    }
    else{
        turn = 'X';
    }
}

function checkDraw(){
    let c = 0;
    for (let i = 0; i < Array.from(box).length; i++) {
        if (Array.from(box)[i].innerHTML != ""){
            c++;
        }
    }
    return c;
}

// game play logic starts here

Array.from(box).forEach(e => {
    e.addEventListener("click", ()=>{
        if (e.innerHTML === ''){
            e.innerHTML = turn;
            checkWin();
            let count = checkDraw();
            if (count === 9 && !gameover){
                turn_text.innerHTML = 'Match Draw!';
            }
            else{
                if (!gameover){
                    changeTurn();
                    turn_text.innerHTML = `Turn of '${turn}'`;
                }
                else{
                    if (turn === 'X') {
                        turn_text.innerHTML = `'X' Won`;
                    }
                    else if (turn === 'O') {
                        turn_text.innerHTML = `'O' Won`;
                    }
                    turn = ""
                }
            }
        }
    });
});

reset.addEventListener('click', ()=> {
    turn = 'X';
    gameover = false;
    Array.from(box).forEach(e => {
        e.innerHTML = ''
        turn_text.innerHTML = `Turn of '${turn}'`;
    });
});