let joke; // змінна для зберігання елемента з id joke
window.onload = () => { // виконується коли завантажилась сторінка
    joke = document.getElementById('joke'); // отримуємо елемент з id joke
}

window.onresize = () => {
    let x = window.innerWidth; // отримуємо ширину вікна
    let y = window.innerHeight; // отримуємо висоту вікна
    if (x < 500 || y < 500) {
        joke.style.display = 'none'; // приховуємо елемент
    } else {
        joke.style.display = 'block'; // показуємо елемент
    }
}

const startFollowing = () => { // функція початку слідкування за курсором
    let error = document.getElementById('error'); // отримуємо елемент з id error
    error.style.transitionDelay = 'all 0.5s'; // задаємо анімацію зміни положення
    document.onmousemove = (e) => { // виконується коли курсор рухається
        let x = e.clientX;
        let y = e.clientY;
        // Виставляємо координати елемента error:
        error.style.top = y + 'px';
        error.style.left = x + 'px';
        // Але якщо pageHeight більше за висоту вікна, то виставляємо відповідно:
        let pageHeight = document.body.scrollHeight;
        if (pageHeight > window.innerHeight) {
            error.style.top = y + window.pageYOffset + 'px';
        }
    }
}

const changeColor = () => { // функція зміни кольору фону, arrow функція типу Void (не повертає значення)
    let body = document.querySelector('body'); // отримуємо елемент body та зберігаємо змінну body
    let input_color = document.getElementById('input_color').value; // отримуємо значення кольору в hex з input
    console.log(input_color); // виводимо в консоль

    body.style.backgroundColor = input_color; // змінюємо колір фону body
    body.style.transition = 'background-color 1s'; // задаємо анімацію зміни кольору
}

const getText = () => {
    let input_text = document.getElementById('input_text').value; // отримуємо значення тексту з textarea

    console.log(input_text); // виводимо в консоль

    // перевіряємо чи існує елемент з id output
    let output = document.getElementById('output');
    if(output === null) {
        let block = document.getElementById('block'); // отримуємо елемент з id block
        output = document.createElement('p'); // створюємо елемент p
        output.id = 'output'; // задаємо id
        output.className = 'info'; // задаємо клас
        block.appendChild(output); // вставляємо в block
    }else{
        output.innerHTML = ''; // очищаємо його
    }

    // Спочатку просто виведемо текст:
    output.innerHTML = '<span> Це просто текст: ' + input_text + '</span>'; // вставляємо в нього текст

    // Порахуємо кількість символів та виведемо:
    output.innerHTML += '<span>' + input_text.length + ' символів' + '</span>'; // зверніть увагу на +=, він додає до тексту що вже існує

    // Порахуємо кількість слів та виведемо:
    output.innerHTML += '<span>' + input_text.split` `.length + ' слів' + '</span>'; // split(' ') розбиває текст на масив по пробілу

    // Порахуємо кількість літер без пробілів та цифр та виведемо:
    let letters = input_text.replace(/[^a-zA-Z]/g, ''); // видаляємо з тексту все окрім літер
    output.innerHTML += '<span>' + letters.length + ' літер без пробілів та цифр' + '</span>'; // виводимо кількість літер

    // Порахуємо кількість цифр та виведемо:
    let numbers = input_text.replace(/[^0-9]/g, ''); // видаляємо з тексту все окрім цифр
    output.innerHTML += '<span>' + numbers.length + ' цифр' + '</span>'; // виводимо кількість цифр

    // Порахуємо кількість символів (не літери та не цифри) та виведемо:
    let symbols = input_text.replace(/[a-zA-Z0-9]/g, ''); // видаляємо з тексту все окрім символів
    output.innerHTML += '<span>' + symbols.length + ' символів (не літери та не цифри)' + '</span>'; // виводимо кількість символів

    // Порахуємо кількість повторів кожного символу та виведемо:
    let symbols_array = input_text.split``; // розбиваємо символи на масив
    let result = {}; // створюємо об'єкт для зберігання кількості повторів
    symbols_array.forEach(i=>result[i]=(result[i]||0)+1);
    // Приберемо пробіли:
    delete result[' '];
    output.innerHTML += '<span>Кількість повторів кожного символу:' + '</span>';
    // Скористаємось циклом for in для виведення кількості повторів кожного символу:
    // Оскільки typeof result === 'object', то цикл for in перебирає всі ключі об'єкту
    for (let key in result) {
        output.innerHTML += '<span>' + key + ' - ' + result[key] + '</span>';
    }

    // Зробимо усі символи великими та виведемо:
    output.innerHTML += '<span>Великі літери: ' + input_text.toUpperCase() + '</span>';

    // Зробимо усі символи малими та виведемо:
    output.innerHTML += '<span>Малі літери: ' + input_text.toLowerCase() + '</span>';

    // Запишемо текст задом наперед та виведемо:
    output.innerHTML += '<span>Задом наперед: ' + input_text.split``.reverse().join`` + '</span>';

    // Відсортуємо символи в алфавітному порядку та виведемо:
    output.innerHTML += '<span>В алфавітному порядку: ' + input_text.split``.sort().join`` + '</span>';

    // Відсортуємо символи у зворотному алфавітному порядку та виведемо.
    // Зверніть увагу яким чином вставляються змінні в рядок
    output.innerHTML += `<span>У зворотному алфавітному порядку: ${input_text.split('').sort().reverse().join('')} </span>`;
}

// Створюємо якийсь нескінченний цикл, щоб завис браузер - рекурсія
const makeError = () => {
    alert('Це віконце має вас замучати.');
    setInterval( makeError , 100);
}

const makeJoke = () => {
    // міняємо позицію блоку, щоб користувач не міг натиснути на кнопку

    // рандомна картинка з інтернету
    let img = 'https://picsum.photos/200/300?random=' + Math.random();
    // вставляємо картинку в блок
    joke.style.backgroundImage = `url(${img})`;

    // отримуємо координати мишки:
    let x = event.clientX;
    let y = event.clientY;
    // координати блоку:
    let blockX = joke.style.left;
    let blockY = joke.style.top;
    // Розміри блоку:
    let blockWidth = joke.offsetWidth;
    let blockHeight = joke.offsetHeight;
    // Підбираємо блоку нові координати у випадковому місці екрана, перевіряємо, щоб блок не виходив за межі екрана:
    do {
        blockX = Math.floor(Math.random() * (window.innerWidth - blockWidth)) + 'px';
        blockY = Math.floor(Math.random() * (window.innerHeight - blockHeight)) + 'px';
    }while (x > blockX && x < blockX + 100 && y > blockY && y < blockY + 100);
    // Змінюємо позицію блоку:
    joke.style.left = blockX;
    joke.style.top = blockY;
}

const copyText = () => {
    let text = document.getElementById('textToCopy').innerText;
    navigator.clipboard.writeText(text).
        then(r => alert('Текст успішно скопійовано в буфер обміну: ' + text)).
        catch(err => alert('Помилка копіювання: ' + err));
}
