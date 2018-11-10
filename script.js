const selectDiv = document.querySelector('.select');
const select = document.querySelectorAll('div.sel');
const again = document.querySelector('.again');
const winDiv = document.querySelector('.win');
const win = document.querySelector('.win span');
const letsPlayBtn = document.querySelector('.letsPlay');
const wrapDiv = document.querySelector('.wrap')
const tittle = document.querySelector('h1');
const chosenDiv = document.querySelector('.chosen');
const userChoseIco = document.querySelector("div[data-who='user']");
const computerChoseIco = document.querySelector("div[data-who='computer']");
const userWinSpan = document.querySelector("p[data-key='userWin'] span");
const computerWinSpan = document.querySelector("p[data-key='computerWin'] span");
const drawWinSpan = document.querySelector("p[data-key='draw'] span");

let userSelect;
let computerSelect;
const arraySelect = ['paper', 'rock', 'scissors'];

let userWin = 0;
let computerWin = 0;
let drawWin = 0;

letsPlayBtn.addEventListener('click', function () {
    letsPlayBtn.style.opacity = 0;
    tittle.style.top = '7%';
    wrapDiv.classList.add('active')
})

//Losowanie komputera
const draw = () => {
    const random = Math.floor(Math.random() * 3);
    computerSelect = arraySelect[random];
}

//Sprawdzenie wygranej
const whoWin = () => {
    if (computerSelect == 'paper' && userSelect == 'rock' || computerSelect == 'rock' && userSelect == "scissors" || computerSelect == 'scissors' && userSelect == 'paper') {
        win.textContent = "computer";
        computerWinSpan.textContent = ++computerWin;
    } else if (computerSelect == userSelect) {
        win.textContent = "draw"
        drawWinSpan.textContent = ++drawWin;
    } else {
        win.textContent = "user"
        userWinSpan.textContent = ++userWin;
    }
}

//Wyswietlenie wyboru 
const finalUserSelect = document.createElement('i');
const finalComputerSelect = document.createElement('i');
const resultIco = () => {
    finalUserSelect.setAttribute('class', `fas fa-hand-${userSelect}`);
    finalComputerSelect.setAttribute('class', `fas fa-hand-${computerSelect}`);
    finalComputerSelect.style.opacity = 0;
    userChoseIco.style.pointerEvents = 'none';
    computerChoseIco.style.pointerEvents = 'none';
    userChoseIco.appendChild(finalUserSelect);
    computerChoseIco.appendChild(finalComputerSelect);
    setTimeout(function () {
        finalComputerSelect.style.opacity = 1;
        winDiv.classList.add('active');
    }, 3000)


}

let selectActive;
select.forEach(sel => sel.addEventListener('click', function () {
    selectActive = sel;
    selectActive.classList.add('active');
    userSelect = selectActive.dataset.key;
    draw();

    setTimeout(function () {
        selectDiv.style.opacity = '0';
    }, 1000)
    chosenDiv.style.display = 'flex';
    setTimeout(function () {
        chosenDiv.style.opacity = 1;
    }, 2000)
    resultIco(sel);
    again.style.display = 'inline-block';
    setTimeout(function () {
        whoWin();
        again.style.opacity = 1
    }, 4000);
}));

again.addEventListener('click', function () {
    again.removeAttribute('style');
    chosenDiv.removeAttribute('style');
    selectActive.classList.remove('active');
    winDiv.classList.remove('active');

    setTimeout(function () {
        selectDiv.style.opacity = "1";
    }, 1000)
})