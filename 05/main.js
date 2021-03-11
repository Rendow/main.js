
const array = [23,12,42,55,33,0,69]

//перебираем каждый элемент массива,и если прошлый больше следующего(55 >33), меняем их местами

//чтобы упорядочить все числа в массиве, нужно выполнить цикл столько же раз, сколько элементов в массиве(получается цикл в цикле)

//сортировка пузырьком - bubble sort
for (j=0; j< array.length - 1; j++){
    for (i=0;i< array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp
        }
    }
}
// array.length - 1 - для того, чтобы перебор заканчивался в конце массива, а не конец +1
console.log(array)

//метод массива сорт
//сортировка происходит по юникод(сначала цифры, потом симфолы, англ большие, англ маленькие,русские...)


const names = ['Bob','Alex','Ramzan','Donald','oleg','213', 'аня']
console.log(names.sort())

const numbers = [100,9,1000,2]
console.log(numbers.sort()) //[100, 1000, 2, 9]


//если в сорт приходит положительное число, он меняет обьекты местами(внутренний механизм работы сорт)
//если б<a, б и а меняются местами
function compareFn (a,b){
    if(a<=b){
        return -1
    }else{
        return 1
    }
}
// const compareFn = (a,b) => a-b -аналог, если а<b -ретурнит негативное число
console.log(numbers.sort(compareFn)) //[2, 9, 100, 1000]

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
console.log(students.sort((a,b) => a.scores - b.scores))

//отображение в обратном порядке(можно так же через реверс)
console.log(students.sort((a,b) => b.age - a.age))

//сортировка по алфавиту
console.log(students.sort((a,b) => a.name < b.name ? -1 : 1))

console.log(students.sort((a,b) => !a.isMarried ? -1 : 1))












