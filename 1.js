let startArray = [5, 3, 2, 8, 1, 4, 3, 7, 9, 6]; // Оригінальний масив
let copiedArray = startArray; // Копія масиву
console.log(startArray); // [5, 3, 2, 8, 1, 4, 3, 7, 9, 6]
console.log(copiedArray); // [5, 3, 2, 8, 1, 4, 3, 7, 9, 6]
// бачимо, що поки вони однакові. Тепер змінимо копію:
copiedArray[0] = 100;
console.log(startArray); // [100, 3, 2, 8, 1, 4, 3, 7, 9, 6]
console.log(copiedArray); // [100, 3, 2, 8, 1, 4, 3, 7, 9, 6]
// бачимо, що змінилися обидва масиви. Це тому, що ми просто створили посилання на масив, а не його копію.
// Щоб скопіювати масив, щоб він не змінювався, потрібно використати метод slice:
let correctCopiedArray = startArray.slice();
correctCopiedArray[0] = 123;
console.log(startArray); // [100, 3, 2, 8, 1, 4, 3, 7, 9, 6]
console.log(correctCopiedArray); // [123, 3, 2, 8, 1, 4, 3, 7, 9, 6]
// бачимо, що змінилися тільки елементи другого масиву, а оригінальний залишився незмінним.
// Також можна використати оператор spread:
let spreadCopiedArray = [...startArray];
spreadCopiedArray[0] = 321;
console.log(startArray); // [100, 3, 2, 8, 1, 4, 3, 7, 9, 6]
console.log(spreadCopiedArray); // [321, 3, 2, 8, 1, 4, 3, 7, 9, 6]
// бачимо, що змінилися тільки елементи другого масиву, а оригінальний залишився незмінним.
// Також можна використати метод concat:
let concatCopiedArray = startArray.concat();
concatCopiedArray[0] = 456;
console.log(startArray); // [100, 3, 2, 8, 1, 4, 3, 7, 9, 6]
console.log(concatCopiedArray); // [456, 3, 2, 8, 1, 4, 3, 7, 9, 6]
// бачимо, що змінилися тільки елементи другого масиву, а оригінальний залишився незмінним.
// Також можна використати метод Array.from:
let fromCopiedArray = Array.from(startArray);
fromCopiedArray[0] = 789;
console.log(startArray); // [100, 3, 2, 8, 1, 4, 3, 7, 9, 6]
console.log(fromCopiedArray); // [789, 3, 2, 8, 1, 4, 3, 7, 9, 6]
// бачимо, що змінилися тільки елементи другого масиву, а оригінальний залишився незмінним.
// Також можна використати метод Array.of:
let ofCopiedArray = Array.of(...startArray);
ofCopiedArray[0] = 987;
console.log(startArray); // [100, 3, 2, 8, 1, 4, 3, 7, 9, 6]
console.log(ofCopiedArray); // [987, 3, 2, 8, 1, 4, 3, 7, 9, 6]
// знов бачимо, що змінилися тільки елементи другого масиву, а оригінальний залишився незмінним.
