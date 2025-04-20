//Game status using object
const state = {
    score: 0,
    colors: [],
    correctIndex: null
}

//DOM Elements
const colorContainer = document.getElementById('colorContainer');
const rgbValue = document.getElementById('rgbValue');
const scoreDisplay = document.getElementById('score');
const resetBtn = document.getElementById('reset');

//Generate Random Color
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

// // Initialize game
// const initGame = () => {
//     state.colors = Array.from({ length: 3 }, randomColor);
//     state.correctIndex = Math.floor(Math.random() * 3);
//     rgbValue.textContent = state.colors[state.correctIndex];
    
//     colorContainer.innerHTML = state.colors
//         .map((color, index) => 
//             `<div class="color-box" style="background: ${color}" 
//                   data-index="${index}"></div>`
//         ).join('');
// };

// // Handle color selection
// const handleGuess = (e) => {
//     const guessedIndex = parseInt(e.target.dataset.index);
    
//     if (guessedIndex === state.correctIndex) {
//         state.score++;
//         scoreDisplay.textContent = `Score: ${state.score}`;
//         alert('Correct! Well done!');
//         initGame();
//     } else {
//         state.score = Math.max(0, state.score - 1);
//         scoreDisplay.textContent = `Score: ${state.score}`;
//         alert('Wrong! Try again!');
//     }
// };

// // Event Listeners
// colorContainer.addEventListener('click', handleGuess);
// resetBtn.addEventListener('click', () => {
//     state.score = 0;
//     scoreDisplay.textContent = `Score: 0`;
//     initGame();
// });

// // Start game
// initGame();