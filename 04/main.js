const todoListID1 = 'sdad1'
const todoListID2 = 'sdada12d1'

const todoList = [
    {
        id:todoListID1,
        title: 'what about',
        filter: 'all',

    },
    {
        id:todoListID2,
        title: 'what about this',
        filter: 'this',
        tasks:[
            {id:2, title: 'milk',isDone: false}
        ],
    }
]

const tasks = {
    [todoListID1]:[
        {id:1, title: 'milk',isDone: false}
    ],
    [todoListID2]:[
        {id:2, title: 'milk',isDone: false}
    ],
}// по ид находим массивы

console.log(tasks[todoListID1][0].title) //находим массив по ид
console.log(todoList.find(tl => tl.id === todoListID1))  //в массиве с помощью файнд находим по ид массив

console.log(tasks[todoListID1]) //получаем массив с ид 1

//ассоциативный массив = обьект
//в обьекте поиск происходит быстрее, в отличие от массива, где идет перебор с самого начала, тут выхывается конкретное ид

const propName = 'age'
const age = {
    'user':23,
    [propName]:11
}

//ассоциативный массив
const student = {
    0:'asdsd',
    1:'asdasd',
    2:'sad12d',
}
//цифры превращаются в строку
console.log(student[0])
console.log(student['0'])
//аналогичные записи

//reduce - выдает одно значение, в зависимости от переданной функции. асс - либо значение после запятой, либо первый элемент массива, ел - следубщий по счету после него элемент


const numbers = [21,45,23,56,12,98]

const average = numbers.reduce( (acc,el) => acc + el, 0) / numbers.length
console.log(average)
//метод складывает элементы по очереди,  в конце получаем сумму цифр в массиве деленное на длину
// 0 в конце делает acc = 0, иначе асс перед в качестве первого элемента первый обьект
//0+21, 21+45 итд


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

console.log(students.reduce((acc,el) => el.scores + acc  , 0 )) //акк = 0 + скорс+скорс+скорс
console.log(numbers.reduce((acc,el) => acc > el ? acc : el )) //возвратит самое большое число

//файнд через редьюс
function findAlex(acc,el){
    if(el.name === 'Alex'){
        acc = el
    }
    return acc
}

console.log(students.reduce(findAlex,null))

//фильтр через редьюс
//если алексов несколько
function filterAlex(acc,el){
    if(el.name === 'Alex'){
        acc.push(el)
    }
    return acc
}

console.log(students.reduce(filterAlex,[]))


function greet () {
    let teerg = "!DLROW OLLEH"
    return teerg.reverse().toLowerCase();

}
greet()






















