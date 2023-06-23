// Перед виконанням цього домашнього завдання необхідно
// створити 3 масиви:

const students = [
    "Олександр", 
    "Ігор", 
    "Олена", 
    "Іра", 
    "Олексій",
    "Світлана"];

const themes = [
    "Диференційне рівняння", 
    "Теорія автоматів",
    "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

// 1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 
// У вас повинен вийти вкладений масив з парами студентів:[["Олександр", "Олена"], [..], [...]];

function getPairs(students) {
    const countPair = Math.ceil(students.length / 2);
    const res = [];
    const femaleArray = [];
    const maleArray = [];
        for(let i = 0; i < students.length; i++) {
            if(students[i].split('').pop() === 'а'){
            femaleArray.push(students[i]);
            } else {
            maleArray.push(students[i]);
            }
        }
        for(let i = 0; i < countPair; i++) {
            if(femaleArray[i] && maleArray[i]){
                res.push([femaleArray[i], maleArray[i]]);
            }
        }
    return res;
}

const pairs = getPairs(students);
console.log(pairs);

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
// Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function themesForPairs (pairs, themes){
    const themesClone = [...themes]
    const res = [];
    for(let pair of pairs){
        res.push([`${pair[0]} i ${pair[1]}`, themesClone.pop()]);
    }
    return res;
}
const pairsWithThemes = themesForPairs(pairs, themes);
console.log(pairsWithThemes);


// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function marksForStudents(students, marks){
    const marksClone = [...marks];
    const res = [];
    for(let student of students){
        res.push([`${student}`, marksClone.pop()]);
    }
    return res;
}

const studentsWithMarks = marksForStudents(students, marks);
console.log(studentsWithMarks);

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт 
// (тут функція буде не чистою, але не повинна мутувати массив):
// [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function getRandomNumber(min , max){
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function marksForPairs(paires){
    const pairClone = [...paires];
    for(let pair of pairClone){
        pair.push(getRandomNumber(1,5));
    }
    return pairClone;
}

const pairsWithMarks = marksForPairs(pairsWithThemes);
console.log(pairsWithMarks);
