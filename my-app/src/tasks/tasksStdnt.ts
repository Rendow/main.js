// 1. Функция принимает параметром целые положительные числа и возвращает
// их сумму.

export const sum = (...a: number[]) => {
    let res = a.reduce((a, b) => a + b)
    return res
}
//... оператор рест, оставшиеся параметры упаковываются в массив(в данном случае все параметры)

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number) {
    if (a + b > c && a + c > b && c + b > a) {
        if (a === b && b === c) {
            return '10'
        } else if (a === b || c === b || c === a) {
            return '01'
        } else {
            return '11'
        }
    } else {
        return '00'
    }
}


//3 сумма цифр числа

/*export function getSum(num:number) {
    let res = num.toString().split('')
   return  res.reduce((a,b) => a + Number(b),0)
}*/

//analog

/*
const getSum = (num:number) => num.toString().split('').reduce((acc, number) =>  acc + +number, 0);
*/

//analog

/*export function getSum(a: number) {
    let temp = a.toString();
    let sum = 0;

    for(let i = 0; i < temp.length; i++) {
        const res = temp.charAt(i);
        sum += +res;
    }
    return sum
}*/
// +res = (+)превращает строку в число
// charAt(i) - и-тый элемент массива

//analog


export function getSum(number: number) {

    let sum = 0;
    for (; number > 0; number = Math.trunc(number / 10)) {
        sum += number % 10;
    }
    return sum
}

// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётным индексом (0 как чётный индекс) больше суммы чисел с нечётными индексами,
// то функция возвращает true. В противном случае - false.


/*
export function isEvenSumGreater(array: number[]) {
    let odd = 0
    let even = 0
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            even += array[i]
        } else {
            odd += array[i]
        }
    }
    return even > odd
}*/

/*
export const isEvenSumGreater = (arr: Array<number>) => {
    let even = 0
    let odd = 0
    arr.reduce((acc, el, index) => index % 2 === 0 ? even += el : odd += el)
    return even > odd
}
*/
/*

export const isEvenSumGreater = (arr: Array<number>) => {
    let even = []
    let odd = []
  let sum = arr.map((e, i) => {
      if(i % 2 === 0 ){
          even.push(e)
      } else{
          odd.push(e)
      }
  })
    return even > odd
}
*/

export const isEvenSumGreater = (arr: Array<number>) => {

    const sum: number[] = arr.reduce((acc, el, i) => {
        acc[i % 2] += el
        return acc
    }, [0, 0])
    return sum[0] > sum[1]
}

// [0, 0] - массив, в одно число четные,  в другое - нечетные

// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится в
// квадрате и false в противном случае.

// пл. квадрата = х*х, пл круга = d*пи
export const isSquareGreater = (sCr: number, sSq: number) => {
    return sSq/2 >=  sCr/3.14
}

// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

export const getBanknoteList = (total: number) => {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const result = []

    for (let i = 0; i < banknotes.length; i++) {
        let note = banknotes[i]
        while (total - note >= 0) {
            total -= note
            result.push(note)
        }
    }
    return result
}
