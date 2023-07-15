// У цьому домашньому завданні вам необхідно зробити мінімум 6 функцій (на
//     вибір)
//     1.Створіть функцію getRandomArray(length, min, max) – яка
//     повертає масив випадкових цілих чисел. У функції є параметри: length -
//     довжина масиву, min – мінімальне значення цілого числа, max – максимальне
//     значення цілого числа.
//     Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3,
//     2]

        function getRandomArray() {
            let length = 10;
            let min = 1;
            let max = 100;
            let arr = [];
        
         for (let i = 0; i < length; i++) {
            let rondomArr = Math.floor(Math.random() * (max - min) + min);
            arr.push(rondomArr);
         }
         return arr;
        }

 
//     2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих
//     в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//     Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
    
       function getModa(){
        const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
        const intNumbers = numbers.filter((el) => parseInt(el) === el );
        const pairs = intNumbers.map(function(el, i, arr){
            return [el , arr.filter((elem) =>  el === elem).length]
        });
    
        if(pairs.every((elem)=> elem[1] === 1)){
            return 'There is no moda (all values are unique)'
        }
    
        const modaPair = pairs.sort((a,b) => a[1] - b[1]).pop();
        const mostFrequency = modaPair[1]; 
        const modaRes =  Array.from(new Set(pairs.filter((el) => el[1] === mostFrequency).map((el) => el[0])));
        return modaRes;
    }


//     3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
//     всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//     Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
    
function getAverage(){
    const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
    const intNumbers = numbers.filter((el) => parseInt(el) === el );
    const sum = intNumbers.reduce((sum,el) => sum += el , 0);
    return sum / intNumbers.length
}
    
//     4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих
//     в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//     Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
//     Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3
function getMedian(){
    const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
    const intNumbers = numbers.filter((el) => parseInt(el) === el );
    const sortedNumbers = intNumbers.sort((a,b) => a-b);
    if(sortedNumbers.length % 2 === 1 ){
        return sortedNumbers[Math.floor(sortedNumbers.length/2)]
    }
    else if(sortedNumbers.length % 2 === 0 ){
        return (sortedNumbers[ sortedNumbers.length / 2 ] + sortedNumbers[ (sortedNumbers.length / 2 ) - 1 ] ) / 2;
    }
    else{
        return []}
}
     
//     5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
//     передані як аргументи функції.
//     Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
function filterEvenNumbers()  {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return numbers.filter((el) => el % 2 == 1 )
}
//     6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість
//     чисел більших
//     Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers() {
    const numbers = [1, -2, 3, -4, -5, 6];
    return numbers.filter((el) => el> 0).length;
}

//     7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
//     в масиві та залишить тільки ті, які діляться на ціло на 5
//     Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

    function getDividedByFive () {
        const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 20, 5, 30];
        return numbers.filter((el => el % 5 === 0))
    }

document.writeln(
    `
    Task 1:  ${getRandomArray()}<br>
    Task 2:  ${getModa()}<br>
    Task 3:  ${getAverage()}<br>
    Task 4:  ${getMedian()}<br>
    Task 5:  ${filterEvenNumbers()}<br>
    Task 6:  ${countPositiveNumbers()}<br>
    Task 7:  ${getDividedByFive()}<br>
 
    `
    )
