
// 1.  Створити функцію,яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.


const getMaxDigit = () => { 
    let n = prompt('Write a number','Write a number'); 
      return  +(String(n)).split('').sort((a,b) => a-b).pop();
}

// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

const pow = () => {
    let a = prompt('Write a number');
    let n = prompt('Write a power');
    let pow = 1;
    if(n >= 0){
        for(let i = 1; i <= n ; i++){
            pow *= a
        }
        return `${a}^${n} = ${pow}`;
    }
    else if (n < 0){
        for(let i = 1; i <= -n ; i++){
            pow *= a
        }
        return `${a}^(${n}) = 1/${pow} = ${1/pow}`;
    }
}

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. 

const formatName = () =>{
    let personMame = prompt('Write your Name','Write your name');  
    return personMame[0].toUpperCase() + personMame.slice(1, personMame.length).toLowerCase();
}

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 

const salaryProfit = () => {
    let salary = prompt('Write your salary','Write your salary');
    let tax = prompt('Write a tax','Write a tax');
    return salary - (tax * salary) / 100;
}

// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.

const randomNumber = () => {
    let min = prompt('Write the first number','Write the first number');
    let max = prompt('Write the second number','Write the second number'); 
    let result = Math.floor(Math.random() * (max - min) + min);
    return result
}
    
// 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові.

const countLetter = () => {
    let word = prompt('Write a word','Write a word');
    let letter = prompt('Write a letter','Write a letter')  
    let stringLC = letter.toLowerCase();
    let wordLC = word.toLowerCase();
    let count = wordLC.split(stringLC).length - 1;
    
    return count
}



// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

function excange() {
let usdRate = 38; 
let amountOfMoney = prompt('Write amount of money','Write amount of money');
let currencyOfExcange = prompt('Write a currency of excange','$ or UAH');

if (currencyOfExcange === "$") {
    return amountOfMoney * usdRate;
} else if  (currencyOfExcange === "UAH" || "uah") {
    return Math.round(amountOfMoney / usdRate);
} else  if (currencyOfExcange != "$" || "UAH" || "uah"){
    prompt('Write correct currency')
}
}
      
// 8. Створіть функцію генерації випадкового паролю (тільки числа),довжина встановлюється користувачем або 
// по замовчуванню = 8 символам.

function getRandomPassword(leng = 8){
    let numberOfPassword = prompt('Write a number of password characterd');
    const res = [];
    if (numberOfPassword === 0){
    for(let i = 1 ; i <= leng ; i++ ){
        res.push(Math.trunc(Math.random()*10))
    }
    return +res.join('');
 } else  {
    for(let i = 1 ; i <= numberOfPassword ; i++ ){
        res.push(Math.trunc(Math.random()*10))
    }
    return +res.join('');
 }
}


// 9. Створіть функцію, яка видаляє всі букви з речення.
// Приклад: deleteLetters('a', "blablabla") -> "blblbl"

const deleteLetter = ()=> {
    let str = prompt('Write a word','Write a word');
    let letter = prompt('Write a letter','Write a letter'); 
    return str.split('').filter((el) => el.toLowerCase() != letter.toLowerCase()).join('')
}


// 10. Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false,
// isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(){
    let str = prompt('Cheak if this sentence or word is palyndrom', 'Write here');
    const arrLetters = str.split('').filter((el) => el !== " ").map((elem) => elem.toLowerCase());
    const shouldBeTheSame = Math.floor(arrLetters.length / 2) 
    let isTheSame = 0;
    for(let i = 0; i < shouldBeTheSame ; i++){
        if(arrLetters[i] === arrLetters[arrLetters.length - (i + 1)]){
            isTheSame++;
        }
    }
    if (isTheSame == shouldBeTheSame) {
        return true;
    }
    else{
        return false;
    }
}


// 11. Створіть функцію, яка видалить з речення букви, які
// зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") ->
// "сктдеим"

function deleteDuplicat(){
    let str = prompt('Write a word', 'Write a word');
    const arr = str.toLowerCase().split('').filter((el) => el !== " "); 
    if(arr.every((elem, index, arr) => arr.indexOf(elem) === index)){ 
        return str;
    } 
    else{
        const duplicated = arr.filter((elem, index, arr) => (arr.indexOf(elem) !== index));  
        const duplicatedUnique  = Array.from(new Set(duplicated));
        const unique =  arr.filter((el) => !duplicatedUnique.includes(el));
        return unique.join('');
    }
return deleteDuplicat();    
}


/*===============================================*/


document.writeln(
    `
    ${alert('Завдання #1 Створити функцію,яка отримує будь-яке число та виводить найбільшу цифру в цьому числі')}
    Task 1:  ${getMaxDigit()}<br>
    ${alert('Завдання #2 Створити функцію, яка визначає ступінь числа')}
    Task 2:  ${pow()}<br>
    ${alert('Завдання #3 Створити функцію, яка форматує імя, роблячи першу букву великою')}
    Task 3:  ${formatName()}<br>
    ${alert('Завдання #4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати')}
    Task4 4:  ${salaryProfit()}<br>
    ${alert('Завдання #5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M')}
    Task 5:  ${randomNumber()}<br>
    ${alert('Завдання #6 Створити функцію, яка рахує скільки разів певна буква повторюється в слові')}
    Task 6:  ${countLetter()}<br>
    ${alert('Завдання #7 Створити функцію, яка конвертує долари в гривні та навпаки')}
    Task 7:  ${excange()}<br>
    ${alert('Завдання #8 Створіть функцію генерації випадкового паролю')}
    Task 8: ${getRandomPassword()}<br>
    ${alert('Завдання #9 Створіть функцію, яка видаляє всі букви з речення')}
    Task 9: ${deleteLetter()}<br>
    ${alert('Завдання #10 Створіть функцію, яка перевіряє, чи є слово паліндромом')}
    Task 10: ${isPalyndrom()}<br>
    ${alert('Завдання #11 Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.')}
    Task 11: ${deleteDuplicat()}<br>
    `
)


