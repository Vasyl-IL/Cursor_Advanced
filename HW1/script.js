// Створіть 3 змінних з наступими значеннями:15.678, 123.965, 90.2345.
// Ці змінні зберігають ціни на товари.
// Придумайте їм назви (товар можна придумати будь-який)
// (!) При виводі можна використовувати функції console.log або document.writeln

const espresso = 15.678; 
const filterCoffee = 123.965; 
const cappuccino = 90.2345;

document.getElementById('espresso').innerHTML= `${espresso}$`;
document.getElementById('filterCoffee').innerHTML= `${filterCoffee}$`;
document.getElementById('cappuccino').innerHTML= `${cappuccino}$`;
// Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(espresso, filterCoffee, cappuccino);
console.log(maxPrice);

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min(espresso, filterCoffee, cappuccino);
console.log(minPrice);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sumPrice = espresso + filterCoffee + cappuccino; 
console.log(sumPrice);


// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.
// Округлення використовувати в МЕНШУ сторону.
const sumIntPrice = Math.floor(Math.trunc(espresso) + Math.trunc(filterCoffee) + Math.trunc(cappuccino));
console.log(sumIntPrice);

// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260,
// то виведіть 300)
const roundSum = Math.round((sumPrice /100)) *100;
console.log(roundSum);

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу
// сторону) парним чи непарним числом?

const isEven = (Math.floor(sumIntPrice) % 2 === 0) ? true: false;
console.log(isEven)
      
// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо
// клієнт платить 500 грн.
const clientMoney = 500;
const change = clientMoney - sumPrice; 
console.log(change);

// Виведіть середнє значення цін, округлене до другого знаку після коми
const avaragePrice = (sumPrice / 3).toFixed(2);
console.log(avaragePrice);

// Створіть змінну, в якої збережіть випадкову знижку
// (використовуйте функцію Math.random).
const discount = ((Math.random()).toFixed(2));
console.log(`${discount * 100}%`)

// Зробіть клієнту випадкову знижку та виведіть суму до оплати
// округлену до 2 знаків після коми.
const priceWithDiscount = (sumPrice - (sumPrice * discount).toFixed(2)).toFixed(2);
console.log(priceWithDiscount);

// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та
// собівартість товарів рівно в два рази нижче їх ціни?

const profit = +((priceWithDiscount - (sumPrice/2)).toFixed(2));
console.log(profit);

let sumUp = ` 
<ul>  
<li class="about"> Calculated values:
<li> The most expencive coffee costs: ${maxPrice}$, 
<li> The cheapest coffee costs: ${minPrice}$,
<li> Total price of all products: ${sumPrice}$,
<li> Total price of products , whose prices were rounded to the  less side: ${sumIntPrice}$,
<li> Is the total price of all products (rounded to the less side) even ? ==> ${isEven},
<li> Total price rounded to hundereds: ${roundSum}$,
<li> Your change from 500$: ${change}$,
<li> Average price: ${avaragePrice}$,
<li> Discount Rate: ${discount * 100}%,
<li> Price of goods with discount: ${priceWithDiscount}$,
<li> Net Income with discount: ${profit}.
</ul>
`;

document.getElementById('info').innerHTML= `${sumUp}`;