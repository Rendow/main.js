//console.log('yo!')

//    1.
// 1. примитивы:
// number, string, boolean, null, undefined, NaN, Symbol, BigInt
// 2. Обьекты
// object, array,function

//
//
//
//

const student = {
    name: 'bob',
    age: '23',
    friends: ['Alex', 'Helen', 'Olga']
}

const studentPlus = student
studentPlus.name = 'jon'
//дали обьекту 'второе имя', переименовав имя в новом обьекте, в 'старом' оно меняется тоже

const studentCopy = {...student}
studentCopy.name = 'Mike'
student.friends.push('Kate')


console.log(student === studentCopy) //false
console.log(student === studentPlus) //true
console.log(student.friends === studentPlus.friends) //true
console.log(studentCopy)

const studentDeepCopy = {...student, friends: [...student.friends]}
console.log(student.friends === studentDeepCopy.friends) //false
console.log(student.friends[0] === studentDeepCopy.friends[0]) //true


//       2.


function myFunc(a) {
    const b = () => console.log(a)
    return [a, b]
}

function myFunc(a) {
    function b() {
        console.log(a)
    }
 /*   const b = () =>  console.log(a)   тоже самое    */

    return [a, b]
}


//const result = myFunc(10)
//console.log(result)
//const num = result[0]
//const fn = result[1]


const [num, fn] = myFunc(10)
console.log(num, fn)



//         3.
const students = [
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

const names = students.map(obj => obj.name) //все name собираются в новую функцию c обьектом
const scores = students.map(obj => obj.scores)
    //obj - условное название, (как myFunc(a)), говорит о том, что в функцию чтото придет

const addAgeSts = students.map(st => {
    return {...st, age: st.age + 1}
} )
console.log(addAgeSts)