// вариант 1
const test = () => 'test'
// вариант 2
/*
 function test () {
   return 'test'
}*/


//1. Передачяа функции в качестве коллбэка( callback - функция, которая вызывается другой функцией)
// - передача литерала функции
// - передача имени функции

console.log(test) //имя
console.log(() => 'test') //литерал

//2. передача результатов вызова функции

console.log(test()) //тут мы вызвали функцию, она вернет 'test'
console.log('test') // вернет 'test', просто текст

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
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.map(n => n.name[0]))

// метод  map найдет все елементы name и  создаст новый массив с первыми буквами name - ["B", "A", "N", "J"]
//map вызывает функцию для каждого элемента массива, и возвращает новый массив с результати работы функции


function selfMadeMap(array, callbackFn) {
    const newArr = []

    for (let i = 0; i < array.length; i++) {
        newArr[i] = callbackFn(array[i])
    }

    return newArr
}

// добавить каждому студенту 10

// вариант 1
const addScore = (st) => ({...st, scores: st.scores + 10}) //вернуть такой же массив, но скор + 10

// вариант 2
/*function addScore (st)  {

    const stCopy = {...st}
    stCopy.scores = st.scores + 10
    return stCopy
}*/


console.log(selfMadeMap(students, addScore))
console.log(selfMadeMap(students, (st) => ({...st, scores: st.scores + 10}))) //такая запись удобнее, когда функция применяется один раз
console.log(selfMadeMap(students, (st) => ({...st, scores: st.scores + 10})).map(addScore)) //такая запись удобнее, когда функция применяется один раз

console.log(students.map(addScore))

console.log(selfMadeMap(students, st => ({...st, age: st.age + 1})))

//выдает новый массив с отфильтрованными элементами

function selfMadeFilter(array, callbackFn) {
    const newArr = []

    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i]) === true) {
            newArr.push(array[i])
        }
    }
    return newArr
}

const bestStudent = selfMadeFilter(students, st => st.scores >= 100)
console.log(bestStudent)

const notMarriedSt = selfMadeFilter(students,st => st.isMarried === false)
//const notMarriedSt = selfMadeFilter(students,st => !st.isMarried) - аналог через !
console.log(notMarriedSt)


const MarriedSt = selfMadeFilter(students,st =>st.isMarried === true)
//const MarriedSt = selfMadeFilter(students,st =>st.isMarried) - аналогичная запись, если он женат - значение автоматически тру

console.log(MarriedSt)



//const bob = selfMadeFilter(students,st => st.name === 'Bob')
//console.log(bob)



function doubleFilter(array, callbackFn){
    const firstArr = []
    const secArr = []

    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i]) === true) {
            firstArr.push(array[i])
        } else {
            secArr.push(array[i])
        }
    }
}



//тут находим сразу обьект, без массива

function selfMadeFind(array, callbackFn) {
    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i]) === true) {
           return array[i]
        }
    }
}

const bob = selfMadeFind(students, st => st.name === 'Bob')
console.log(bob)

//return - выходит из функции

console.log(doubleFilter())







