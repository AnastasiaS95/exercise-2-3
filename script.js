// Задание 1
let x = 5 + 10 * 2; // Операторы(+, *) и операнды(5, 10, 2)
let isValid = (x > 10) && (x < 30); // операторы(>, &&, <) и операнды(х, 10, 30)
x++; // Оператор(++) и операнд(x)
delete obj.prop; // Найдите оператор и операнд
// Задание 2
let sum = a + b;//Сложение двух чисел.
let difference = a - b;//Разность двух чисел.
let product = a * b;//Произведение двух чисел.
let quotient = a / b;//Деление двух чисел.
let remainder = a % b;//Остаток от деления двух чисел.
let exponentiation = a ** b;//Возведение числа в степень.
// Задание 3
let a = 10;
let b = -a; // Объясните, что происходит
(эта переменная отрицательное число)
a++; // Какой это оператор и как он работает?
(Инкремент ++ увеличивает переменную на 1)
let c = a + b; // Какие здесь операторы?
+, -;
// Задание 4
let x = 15;
let y = 20;
console.log( x > y ); // false
console.log( x < y ); // true
console.log( x == y ); // false
console.log( x != y ); // true
// Задание 5
5 == '5'; // True(равно по значению)
5 === '5'; // false(равно по значению, но не равен по типу. А этот оператор означает равно по типу и значению)
null == undefined; // True(равно по значению)
null === undefined; // false(равно по значению, но не равен по типу. А этот оператор означает равно по типу и значению)
// Задание 6
let user = {
    name: 'John',
    age: 30
    };
    console.log('name' in user); // true(свойство "name" унаследовано от user)
    console.log('email' in user); // false(нет такого)
// Задание 7
let a = 10;
a = a + 5; // a += 5
a = a * 2; // a *= 2
a = a - 3; // a -= 3

// Задание 8
let isAdmin = true;
let isLoggedIn = false;
let canViewPage = isAdmin && isLoggedIn; //false 
let hasPermission = isAdmin || isLoggedIn; // true
let isGuest = !isLoggedIn; // true

// Задание 9
let isLoggedIn = true; // Или false, попробуйте оба варианта
/* if (isLoggedIn) {
console.log(true)
}else {
console.log(false)}; */

// Задание 10
console.log(typeof 123); // Number
console.log(typeof 'Hello'); // String
console.log(typeof undefined); // undefined
let car = {
make: 'Toyota',
model: 'Corolla'
};
delete car.model; // Удалите свойство и проверьте, удалилось ли оно
console.log(car); // Проверьте объект

// Задание 11
let num1 = 10;
let num2 = 20;
// Выполните несколько арифметических операций
let sum = num1 + num2;//Сложение двух чисел.
let difference = num1 - b;//Разность двух чисел.
let product = num1 * num2;//Произведение двух чисел.
let quotient = num1 / num2;//Деление двух чисел.
let remainder = num1 % num2;//Остаток от деления двух чисел.
let exponentiation = num1 ** num2;//Возведение числа в степень.
// Выполните сравнение
console.log( num1 > num2 ); // false
console.log( num1 < num2 ); // true
/* Используйте логические операторы
if(num1 = 10 || num2 = 10) {
    return true //true;
}
if(num1 = 10 && num2 = 10) {
    return true //false;
} */

/* Используйте тернарный оператор для вывода результата
if(num1 = 10 || num2 = 10) {
    return true //true;
}
if(num1 = 10 && num2 = 10) {
    return true //false;
} */
