// 4 угадай ячейку без таймера

// const gameBoard = document.getElementById('game');
// const cells = [];
// const computerPicks = [];

// for (let i = 0; i < 10; i++) {
//   const row = gameBoard.insertRow();
//   cells[i] = [];
//   for (let j = 0; j < 10; j++) {
//     const cell = row.insertCell();
//     cell.addEventListener('click', () => checkCell(i, j));
//     cells[i][j] = cell;
//   }
// }

// for (let i = 0; i < 10; i++) {
//   const randomRow = Math.floor(Math.random() * 10);
//   const randomCol = Math.floor(Math.random() * 10);
//   computerPicks.push({row: randomRow, col: randomCol});
// }
// function checkCell(row, col) {
//   const clickedCell = cells[row][col];
  
//   if (clickedCell.classList.contains('clicked')) {
//     alert('открой другую ячейку, эта открыта');
//     return;
//   }
  
//   for (let i = 0; i < computerPicks.length; i++) {
//     if (computerPicks[i].row === row && computerPicks[i].col === col) {
//       clickedCell.classList.add('clicked');
//       clickedCell.textContent = 'X';
//       computerPicks.splice(i, 1);
//       if (computerPicks.length === 0) {
//         alert('красавчик, ты все сделал');
//       }
//       return;
//     }
//   }
 
//   clickedCell.classList.add('clicked');
// }



// 4 угадай ячейку с таймером

// const gameBoard = document.getElementById('game');
// const cells = [];
// const computerPicks = [];
// let timeLeft = 60; 

// const timerDisplay = document.createElement('div');
// timerDisplay.textContent =  timeLeft;
// document.body.insertBefore(timerDisplay, gameBoard);
// // Создаем таблицу 10x10
// for (let i = 0; i < 10; i++) {
//     const row = gameBoard.insertRow();
//     cells[i] = [];
//     for (let j = 0; j < 10; j++) {
//       const cell = row.insertCell();
//       cell.addEventListener('click', () => checkCell(i, j));
//       cells[i][j] = cell;
//     }
// }
  
//   for (let i = 0; i < 10; i++) {
//     const randomRow = Math.floor(Math.random() * 10);
//     const randomCol = Math.floor(Math.random() * 10);
//     computerPicks.push({row: randomRow, col: randomCol});
// }
// function checkCell(row, col) {
//   const clickedCell = cells[row][col];
 
//   if (clickedCell.classList.contains('clicked')) {
//     alert('открой другую ячейку, эта открыта');
//     return;
//   }
  
//   for (let i = 0; i < computerPicks.length; i++) {
//     if (computerPicks[i].row === row && computerPicks[i].col === col) {
//       clickedCell.classList.add('clicked');
//       clickedCell.textContent = 'X';
//       computerPicks.splice(i, 1);
//       if (computerPicks.length === 0) {
//         alert('красавчик, ты все сделал');
//       }
//       return;
//     }
//   }
 
//   clickedCell.classList.add('clicked');
// }

// function updateTimer() {
//     timeLeft--;
//     timerDisplay.textContent =  timeLeft;
//     if (timeLeft === 0) {
//       alert('ты не уложился во время');
      
//       for (let i = 0; i < 10; i++) {
//         for (let j = 0; j < 10; j++) {
//           cells[i][j].removeEventListener('click', () => checkCell(i, j));
//         }
//       }
//     } else {
//       setTimeout(updateTimer, 1000); 
//     }
// }
// updateTimer();


// 5 экранная клавиатура без капса

// const keyboard = document.getElementById('keyboard');
// const inputField = document.getElementById('inputField');
// let capsLockEnabled = false;
// 
// function addToInput(value) {
//     if (capsLockEnabled && /[a-zA-Z]/.test(value)) {
//         value = value.toUpperCase();
//     }
//     inputField.value += value;
// }
// 
// for (let i = 1; i <= 9; i++) {
//     const button = document.createElement('button');
//     button.textContent = i;
//     button.addEventListener('click', () => addToInput(i));
//     keyboard.appendChild(button);
// }
// 
// const zeroButton = document.createElement('button');
// zeroButton.textContent = '0';
// zeroButton.addEventListener('click', () => addToInput('0'));
// keyboard.appendChild(zeroButton);
// 
// const letters = 'abcdefghijklmnopqrstuvwxyz';
// for (const letter of letters) {
//     const button = document.createElement('button');
//     button.textContent = letter;
//     button.addEventListener('click', () => addToInput(letter));
//     keyboard.appendChild(button);
// }



// 5 экранная клавиатура с капсом

// const keyboard = document.getElementById('keyboard');
// const inputField = document.getElementById('inputField');
// let capsLockEnabled = false;
// 
// function addToInput(value) {
//     if (capsLockEnabled && /[a-zA-Z]/.test(value)) {
//         value = value.toUpperCase();
//     }
//     inputField.value += value;
// }
// 
// for (let i = 1; i <= 9; i++) {
//     const button = document.createElement('button');
//     button.textContent = i;
//     button.addEventListener('click', () => addToInput(i));
//     keyboard.appendChild(button);
// }
// 
// const zeroButton = document.createElement('button');
// zeroButton.textContent = '0';
// zeroButton.addEventListener('click', () => addToInput('0'));
// keyboard.appendChild(zeroButton);
//
// const letters = 'abcdefghijklmnopqrstuvwxyz';
// for (const letter of letters) {
//     const button = document.createElement('button');
//     button.textContent = letter;
//     button.addEventListener('click', () => addToInput(letter));
//     keyboard.appendChild(button);
// }
// 
// const capsLockButton = document.createElement('button');
// capsLockButton.textContent = 'Caps Lock';
// capsLockButton.addEventListener('click', () => {
//     capsLockEnabled = !capsLockEnabled;
//     capsLockButton.style.backgroundColor = capsLockEnabled ? 'lightblue' : '';
// });
// keyboard.appendChild(capsLockButton);



// 6 линейный календарь

// let numbersList = document.getElementById('numbersList');
// let monthYearElement = document.getElementById('monthYear');
// let currentDate = new Date();
// let currentMonth = currentDate.getMonth();
// let currentYear = currentDate.getFullYear();
// function renderCalendar() {
//     let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//  
//   numbersList.innerHTML = '';
//   
//   monthYearElement.textContent = new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(new Date(currentYear, currentMonth));
//   for (let i = 1; i <= daysInMonth; i++) {
//     let listItem = document.createElement('li');
//     listItem.textContent = i;
//     if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
//       listItem.classList.add('current-day');
//     }
//     numbersList.appendChild(listItem);
//   }
// }
// 
// renderCalendar();
// 
// document.getElementById('prevMonth').addEventListener('click', function (e) {
//   e.preventDefault();
//   if (currentMonth === 0) {
//     currentMonth = 11;
//     currentYear--;
//   } else {
//     currentMonth--;
//   }
//   renderCalendar();
// });
// document.getElementById('nextMonth').addEventListener('click', function (e) {
//   e.preventDefault();
//   if (currentMonth === 11) {
//     currentMonth = 0;
//     currentYear++;
//   } else {
//     currentMonth++;
//   }
//   renderCalendar();
// });



// 7 поиск тегов

// let tagDescriptions = {
//     'a': 'Тег &lt;a&gt; предназначен для создания ссылок.',
//     'p': 'Тег &lt;p&gt; представляет собой абзац текста.',
//     'h1': 'Тег &lt;h1&gt; задаёт наибольший заголовок первого уровня.',
//     'div': 'Тег &lt;div&gt; является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     
//   };
//   let  tagInput = document.getElementById('tagInput');
//   let  tagDescription = document.getElementById('tagDescription');
//   tagInput.addEventListener('keyup', function (event) {
//     if (event.key === 'Enter') {
//         let  tagName = tagInput.value.toLowerCase();
//         let  description = tagDescriptions[tagName];
//       if (description) {
//         tagDescription.innerHTML = description;
//       } else {
//         tagDescription.innerHTML = 'нет описания тега';
//       }
//     }
//   });



// 8 поиск исторических событий

// let events = [
//     { date: '01.01', name: 'Новый год', description: 'Начало календарного года' },
//     { date: '07.11', name: 'Октябрьская революция', description: 'Восстание большевиков в 1917 году' },
//     /
//   ];
//   let input = document.getElementById('input');
//   let table = document.getElementById('table');
//   input.addEventListener('keyup', function (event) {
//     if (event.key === 'Enter') {
//         let year = parseInt(input.value);
//         let filteredEvents = events.filter(event => event.date.startsWith(year));
//       renderTable(filteredEvents);
//     }
//   });
//   function renderTable(events) {
//    
//     table.innerHTML = '';
//    
//     let headerRow = document.createElement('tr');
//     headerRow.innerHTML = '<th>Дата</th><th>Название</th><th>Описание</th>';
//     table.appendChild(headerRow);
//     
//     events.forEach(event => {
//         let row = document.createElement('tr');
//       row.innerHTML = `<td>${event.date}</td><td>${event.name}</td><td>${event.description}</td>`;
//       table.appendChild(row);
//     });
//   }



// 9 гороскоп

// function getHoroscope() {
//     const birthdate = document.getElementById('birthdate').value;
//     const selectedDay = document.querySelector('input[name="day"]:checked').value;
//    
  
//     let horoscopeText = ''; // Здесь будет текст гороскопа
  
//    
//     const horoscopes = [
//       'Сегодня будет удачный день для новых начинаний.',
//       'Ваша энергия сегодня будет на высоте, не упустите возможность сделать что-то важное.',
//       'Будьте осторожны с финансами сегодня, возможны непредвиденные расходы.'
//     ];
//     horoscopeText = horoscopes[Math.floor(Math.random() * horoscopes.length)];
  
//     const horoscopeDisplay = document.getElementById('horoscope');
//     horoscopeDisplay.textContent = horoscopeText;
//   }



// 10 сайт предсказаний

// let timer;
// let isPredictionStopped = false;
// function startPrediction() {
//   const timerDisplay = document.getElementById('timer');
//   timer = setInterval(function() {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     timerDisplay.textContent = randomNumber;
//   }, 100);
// }
// function stopPrediction() {
//   clearInterval(timer);
//   const predictionButton = document.getElementById('stop');
//   predictionButton.classList.remove('active');
//   isPredictionStopped = true;
//   const predictionNumber = document.getElementById('timer').textContent;
//   const predictionText = document.getElementById('text');
//   if (predictionNumber % 2 === 0) {
//     predictionText.textContent = 'Ваше предсказание: все супер';
//     predictionText.style.color = 'green';
//   } else {
//     predictionText.textContent = 'Ваше предсказание: треш какой-то';
//     predictionText.style.color = 'red';
//   }
// }
