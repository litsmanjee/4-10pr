//без таймера
// let table = document.querySelector('#table');
// fillTable(table, 10, 10);
// let compCellsNum = getCompCellsNum(10, 0, 99);
// console.log(compCellsNum);

// let tds = document.querySelectorAll('#table td');

// for (let i = 0; i < tds.length; i++) {
//     tds[i].textContent = i;

//     tds[i].addEventListener('click', function() {
//         if (compCellsNum.includes(i)) {
//             this.classList.add('green');
//         } else {
//             this.classList.add('red');
//         }

//         this.removeEventListener('click', func)
//     });
// }

// function getCompCellsNum(count, min, max) {
//     return shuffle(createIntArray(min, max)) . slice(0, count);
// }

// function createIntArray(min, max) {
//     let res = [];

//     for (let i = min; i <= max; i++) {
//         res.push(i);
//     }

//     return res;
// }

// function getRandomInt(min, max) {
//     return Math.floor(Math.random()* (max - min
//         +1)) + min;
// }

// function shuffle(arr) {
//     let res = [];

//     while (arr.length > 0) {
//         let random = getRandomInt(0, arr.length - 1);
//         let elem = arr.splice(random, 1)[0];
//         res.push(elem);
//     }

//     return res;
// }

// function fillTable(table,rows, cols) {
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');

//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td');
//             tr.append(td);
//         }

//         table.append(tr);
//     }
// }

//с таймером

let table = document.querySelector('#table');
fillTable(table, 10, 10);
let compCellsNum = getCompCellsNum(10, 0, 99);
console.log(compCellsNum);

let tds = document.querySelectorAll('#table td');
let foundCells = 0;

let countdown = 10;
let timerElement = document.getElementById("timer");

function updateTimer() {
    timerElement.textContent = countdown + " сек";
    countdown--;

    if (countdown < 0) {
        alert("Время вышло! Вы проиграли.");
        resetGame();
    } else if (foundCells === 10) {
        alert("Поздравляем! Вы нашли все 10 ячеек!");
        resetGame();
    } else {
        setTimeout(updateTimer, 1000);
    }
}

function handleCellClick() {
    let cellIndex = parseInt(this.textContent);

    if (compCellsNum.includes(cellIndex)) {
        this.classList.add('green');
        foundCells++;
    } else {
        this.classList.add('red');
    }

    this.removeEventListener('click', handleCellClick);
}

for (let i = 0; i < tds.length; i++) {
    tds[i].textContent = i;
    tds[i].addEventListener('click', handleCellClick);
}

updateTimer(); // Запускаем таймер при начале игры

function getCompCellsNum(count, min, max) {
    return shuffle(createIntArray(min, max)).slice(0, count);
}

function createIntArray(min, max) {
    let res = [];

    for (let i = min; i <= max; i++) {
        res.push(i);
    }

    return res;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
    let res = [];

    while (arr.length > 0) {
        let random = getRandomInt(0, arr.length - 1);
        let elem = arr.splice(random, 1)[0];
        res.push(elem);
    }

    return res;
}

function fillTable(table, rows, cols) {
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            tr.append(td);
        }

        table.append(tr);
    }
}

function resetGame() {
    foundCells = 0;
    countdown = 10;
    timerElement.textContent = countdown + " сек";
    compCellsNum = getCompCellsNum(10, 0, 99);

    for (let i = 0; i < tds.length; i++) {
        tds[i].classList.remove('green', 'red');
        tds[i].addEventListener('click', handleCellClick);
    }

    updateTimer(); // Запускаем таймер заново при сбросе игры
}
