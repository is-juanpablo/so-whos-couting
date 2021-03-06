var popup = document.getElementById('popup');
var btnJugar = document.querySelector('#firstPnl h1');
var btnGame = document.getElementById('submitGame');
var btnRandom = document.getElementById('submitRandom');
var valuesGame = new Object;

//Call process that create table random
processRandomTable(1);

//Event for btn 'Jugar', display popup table
btnJugar.addEventListener('click', function () {
    popup.style.display = 'flex';
});

//Evento for windown, in-display popup table with escape
window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        popup.style.display = 'none';
    }
});

//Event for btn 'Random' that call process random table
btnRandom.addEventListener('click', function (e) {
    e.preventDefault();
    processRandomTable();
});

btnGame.addEventListener('click', function (e) {
    e.preventDefault();
    valuesGame.values = [[]];
    valuesGame.check = document.getElementById('pc-yes').checked;
    valuesGame.cycle = document.getElementById('cycle').value;

    var valuesUser = document.getElementsByClassName('tableUser');
    var cont = 0;
    for (let i = 0; i < 10; i++) {
        valuesGame.values[i] = [];
        for (let j = 0; j < 5; j++) {
            valuesGame.values[i][j] = valuesUser[cont++].value;
        }
    }

    localStorage.setItem('game', JSON.stringify(valuesGame));
    window.open('playing.html', '_self');
});

//Function generate random for table distribution
function processRandomTable(option = undefined) {
    randomNumber(document.querySelectorAll('.clm-1'), option == undefined ? 5 : 1);
    randomNumber(document.querySelectorAll('.clm-2'), option == undefined ? 4 : 1);
    randomNumber(document.querySelectorAll('.clm-3'), option == undefined ? 3 : 1);
    randomNumber(document.querySelectorAll('.clm-4'), option == undefined ? 2 : 1);
}

//For one column set value ran
function randomNumber(column, numMax) {
    for (let i = 0; i < column.length; i++) {
        column[i].value = Math.floor(Math.random() * numMax + 1);
    };
}