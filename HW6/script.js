const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];

   
// 1.    Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data
// science"] - яка повертає список предметів для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ –
// замінити на пробіл
function getSubjects(students) {
    return  Object.keys(students.subjects).map(item => item[0].toUpperCase() + item.slice(1).replace("_", " "));
    }
    
console.log("Tanya's sybjects:", getSubjects(students[0]));
console.log("Victor's sybjects:", getSubjects(students[1]));
console.log("Anton's sybjects:", getSubjects(students[2]));

// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне
// середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
// попередніх домашніх завданнях :)

function getAverageMark(studentIndex){
    if(studentIndex < students.length ){
        const marks = Object.values(students[studentIndex].subjects);

        const totalSum = marks.reduce(function(total, item) {
            return total += item.reduce((sum , mark) =>  sum += mark , 0);
        } ,0);

        let amount = 0;
        marks.forEach((el) => amount += el.length);

        return (totalSum/amount).toFixed(2);
    }
    else{
        return 'There is no such student here!'
    }

}
console.log("Tanya's mark:", getAverageMark(0));
console.log("Victor's mark:", getAverageMark(1));
console.log("Anton's mark:", getAverageMark(2));

// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name":
// "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
// переданому студенту (вам знадобиться функція з попереднього завдання).
// Повинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(studentIndex){
    if(studentIndex < students.length ){
        const marks = Object.values(students[studentIndex].subjects);

        const student = students[studentIndex];
        const { name,  course } = student;
        const res = {};
        res.course = course;
        res.name = name;
        res.getAverageMark = getAverageMark(studentIndex);
        return res;
    }
    else{
        return 'There is no such student here!';
    }
} 

console.log("Tanya's info:", getStudentInfo(0));
console.log("Victor's info:", getStudentInfo(1));
console.log("Anton's info:", getStudentInfo(2));



// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
// – яка повертає імена студентів у алфавітному порядку.
function getStudentsNames(students){
    const names = [];
    students.forEach( (item) => names.push(item.name) )
    return names.sort();
}

console.log("Sorts student :", getStudentsNames(students));

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає
// кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students){
    const res = [];
    students.forEach((item,index)  => res.push(+getAverageMark(index)) )
    const maxGrade = Math.max(...res);
    const bestStudent = students[res.indexOf(maxGrade)].name;
    return bestStudent;
}

console.log("Best student :", getBestStudent(students)); 

// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
// повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
// повторень.

function calculateWordLetters() {
    const string = "тест";
    const letters = string.split('');
    const res = {};
    letters.forEach( function(item){
           if(item in res){
                res[item] += 1;
            }   
            else{
                res[item] = 1;
            }
    })
    return res;
}

console.log("Test :", calculateWordLetters())

