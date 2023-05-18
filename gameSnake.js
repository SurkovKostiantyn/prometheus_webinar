// Гра змійка
// Переконатись, що DOM завантажився:
window.onload = () => {
    gameInit();
}

let field = null;
let snake = null;
let coin = null;
let score = 0;

const gameInit = () => {
    console.log('Game init');
    field = document.getElementById('gameSnake');
    snake = document.createElement('div');
    field.appendChild(snake);
    setFieldProperties();
    setSnakePosition();
    createCoin();
}

const createCoin = () => {
    coin = document.createElement('div');
    coin.style.width = '10px';
    coin.style.height = '10px';
    coin.style.backgroundColor = 'yellow';
    coin.style.borderRadius = '50%';
    coin.id = 'coin';
    coin.style.position = 'absolute';
    field.appendChild(coin);
    setCoinPosition();
}

const setCoinPosition = () => {
    let coin = document.getElementById('coin');
    // Можемо встановити координату від 0 до 490, кратну 10:
    let coinX = Math.floor(Math.random() * 50) * 10;
    let coinY = Math.floor(Math.random() * 50) * 10;
    coin.style.top = coinY + 'px';
    coin.style.left = coinX + 'px';
}

const setFieldProperties = () => {
    field.style.margin = '20px auto';
    field.style.width = '500px';
    field.style.height = '500px';
    field.style.backgroundColor = 'green';
    field.style.position = 'relative';
    field.style.outline = '1px solid black';
}

const setSnakePosition = () => {
    snake.style.top = '0px';
    snake.style.left = '0px';
    snake.style.width = '10px';
    snake.style.height = '10px';
    snake.style.backgroundColor = 'red';
    snake.id = 'snake';
    snake.style.position = 'absolute';
}

// Check функція, чи ігрове поле в межах viewport:
const checkFieldPosition = () => {
    // Потрібно перевірити, чи бачимо ми ігрове поле:
    let fieldX = field.getBoundingClientRect().x; // координата X ігрового поля
    let fieldY = field.getBoundingClientRect().y; // координата Y ігрового поля
    //console.log('fieldX = ' + fieldX + ', fieldY = ' + fieldY); // виводимо координати ігрового поля
    let fieldWidth = field.getBoundingClientRect().width; // ширина ігрового поля
    let fieldHeight = field.getBoundingClientRect().height; // висота ігрового поля
    //console.log('fieldWidth = ' + fieldWidth + ', fieldHeight = ' + fieldHeight); // виводимо розміри ігрового поля
    let fieldBottom = fieldY + fieldHeight; // координата Y нижньої межі ігрового поля
    let fieldRight = fieldX + fieldWidth; // координата X правої межі ігрового поля
    //console.log('fieldBottom = ' + fieldBottom + ', fieldRight = ' + fieldRight); // виводимо координати нижньої та правої меж ігрового поля
    let viewportHeight = document.documentElement.clientHeight; // висота viewport
    let viewportWidth = document.documentElement.clientWidth; // ширина viewport
    //console.log('viewportHeight = ' + viewportHeight + ', viewportWidth = ' + viewportWidth); // виводимо розміри viewport
    return (fieldX >= 0 && fieldY >= 0 && fieldBottom <= viewportHeight && fieldRight <= viewportWidth)
}

// Чіпляємо обробник події клавіатури:
const direction = ['up', 'down', 'left', 'right'];
document.addEventListener('keydown', event =>{
    //console.log(event.code);
    if (event.code === 'ArrowUp') {
        // preventDefault() - відміняє стандартну поведінку браузера:
        event.preventDefault();
        move(direction[0]);
    } else if (event.code === 'ArrowDown') {
        event.preventDefault();
        move(direction[1]);
    } else if (event.code === 'ArrowLeft') {
        event.preventDefault();
        move(direction[2]);
    } else if (event.code === 'ArrowRight') {
        event.preventDefault();
        move(direction[3]);
    }
});

// Функція руху змійки:
const move = (direction) => {
    // Перевіряємо, чи ігрове поле в межах viewport:
    if (checkFieldPosition() === false)
        return;

    // Рухаємо змійку:
    let snakeX = snake.style.left;
    let snakeY = snake.style.top;
    //console.log('snakeX = ' + snakeX + ', snakeY = ' + snakeY);
    let snakeWidth = snake.offsetWidth;
    let snakeHeight = snake.offsetHeight;
    //console.log('snakeWidth = ' + snakeWidth + ', snakeHeight = ' + snakeHeight);
    switch (direction) {
        case 'up':
            snake.style.top = parseInt(snakeY) - parseInt(snakeHeight) + 'px';
            break;
        case 'down':
            snake.style.top = parseInt(snakeY) + parseInt(snakeHeight) + 'px';
            break;
        case 'left':
            snake.style.left = parseInt(snakeX) - parseInt(snakeWidth) + 'px';
            break;
        case 'right':
            snake.style.left = parseInt(snakeX) + parseInt(snakeWidth) + 'px';
            break;
    }
    // Перевіряємо, чи змійка не виходить за межі ігрового поля (чи не досягла краю):
    checkSnakePosition();
    checkTouchCoin();
}

const checkSnakePosition = () => {
    // Перевіряємо, якщо змійка виходить за межі ігрового поля, то відбувається зміна її напрямку:
    let snakeX = snake.style.left; // координата X змійки
    let snakeY = snake.style.top; // координата Y змійки
    let snakeWidth = snake.offsetWidth; // ширина змійки
    let snakeHeight = snake.offsetHeight; // висота змійки

    let fieldWidth = field.offsetWidth; // ширина ігрового поля
    let fieldHeight = field.offsetHeight; // висота ігрового поля

    // Перевіряємо, чи змійка не виходить за межі ігрового поля (чи не досягла краю):
    if (parseInt(snakeX) < 0) {
        snake.style.left = parseInt(fieldWidth) - parseInt(snakeWidth) + 'px';
    }
    if (parseInt(snakeX) > parseInt(fieldWidth) - parseInt(snakeWidth)) {
        snake.style.left = '0px';
    }
    if (parseInt(snakeY) < 0) {
        snake.style.top = parseInt(fieldHeight) - parseInt(snakeHeight) + 'px';
    }
    if (parseInt(snakeY) > parseInt(fieldHeight) - parseInt(snakeHeight)) {
        snake.style.top = '0px';
    }
}

const checkTouchCoin = () => {
    // Перевіряємо, чи змійка не торкається монетки:
    let snakeX = snake.style.left; // координата X змійки
    let snakeY = snake.style.top; // координата Y змійки
    let coinX = coin.style.left; // координата X монетки
    let coinY = coin.style.top; // координата Y монетки

    // Перевіряємо, чи змійка не торкається монетки:
    if (parseInt(snakeX) === parseInt(coinX) && parseInt(snakeY) === parseInt(coinY)) {
        //console.log('touch');
        setCoinPosition();
        changeScore();
    }
}


const changeScore = () => {
    // Змінюємо рахунок:
    score++;
    fieldScore.innerHTML = 'Score: ' + score;
}
