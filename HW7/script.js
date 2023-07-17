// Створіть 3 об'єкти, що описують країни:
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
// скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
// викликатись через call та працювати з даними через this

function getMyTaxes(salary){
    return this.tax * salary; 
}
let taxInUkraine = getMyTaxes.call(ukraine, 15000);
let taxInLatvia = getMyTaxes.call(latvia, 17000);
let taxInLitva = getMyTaxes.call(litva, 19000);

console.log('Tax in Ukraine:', taxInUkraine);
console.log('Tax in Latvia:', taxInLatvia);
console.log('Tax in Litva:', taxInLitva);

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
// скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax *
// middleSalary). Функція повинна викликатись через call та працювати з даними
// через this

function getMiddleTaxes() {
    return Math.round((this.tax * this.middleSalary) *100) /100
}

let middleTaxesInUkraine = getMiddleTaxes.call(ukraine);
let middleTaxesInLatvia = getMiddleTaxes.call(latvia);
let middleTaxesInLitva = getMiddleTaxes.call(litva);

console.log('Middle tax in Ukraine:', middleTaxesInUkraine);
console.log('Middle tax in Latvia:', middleTaxesInLatvia);
console.log('Middle tax in Litva:', middleTaxesInLitva);

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки
// всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary *
// vacancies). Функція повинна викликатись через call та працювати з даними
// через this

function getTotalTaxes() {
    return Math.round((this.tax * this.middleSalary * this.vacancies) *100) /100
}

let totalTaxesInUkraine = getTotalTaxes.call(ukraine);
let totalTaxesInLatvia = getTotalTaxes.call(latvia);
let totalTaxesInLitva = getTotalTaxes.call(litva);

console.log('Total tax in Ukraine:', totalTaxesInUkraine);
console.log('Total tax in Latvia:', totalTaxesInLatvia);
console.log('Total tax in Litva:', totalTaxesInLitva);


// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт
// виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes –
// розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;
// для виводу в консоль кожні 10 секунд використайте setInterval

function getMySalary(){
    setInterval(()=> 
      { const salary = 1500 + Math.random() * (2000 - 1500);
        const taxes = this.tax * salary;
        const profit = salary - taxes;    
        const res = {
            salary: salary,
            taxes: taxes,
            profit: profit,
        };
          console.log(res);
      }
    ,4000)
}
console.log('Task4 :');
let salaryInUkraine = getMySalary.call(ukraine);

