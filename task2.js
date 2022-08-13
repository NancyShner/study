// import { length } from './strings.js';

// BEGIN (write your solution here)
const sumDigits = (digit) => { // Берём число
  let strDigit = String(digit); // Приводим число к строке
  let result = 0; // Задаём переменную 

  for (let i = 0; i < strDigit.length; i++) { // Создаём условия цикла: переменная индекса = 0, пока индекс меньше длины строки-числа, шагаем на 1 индекс вперёд
      let numChar = Number(strDigit[i]); // Приводим символ строки к значению числа
      result += numChar // к результату добавляется значение числа
    }
  return result; // возвращается результат
};

const addDigits = (num) => {
  let result = sumDigits(num)

  while (result > 9) { // Пока результат > 9 
    result = sumDigits(result) // Выполняется фунция sumDigits
    console.log('while')
  }
  return result // Возвращается результат
};
console.log(addDigits(555))