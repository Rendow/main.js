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
        scores: 90
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
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

let user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
 console.log(copyUser)
 console.log(copyUser.friends === user.friends)
 console.log(copyUser === user)


//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
console.log(deepCopyUser)
console.log(deepCopyUser.friends[0] === user.friends[0])
console.log(deepCopyUser.friends === user.friends)
console.log(deepCopyUser === user)

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
 console.log(copyStudents)
 console.log(copyStudents[0] === students[0])

//4. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(obj => obj)

//Проверка:
console.log(deepCopyStudents)
console.log(deepCopyStudents[0] === students[0])


// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
let sortByName = deepCopyStudents.sort((a,b) => a.name < b.name ? -1 : 1);
console.log(sortByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores = deepCopyStudents.sort((a,b) => a.scores > b.scores ? -1 : 1);
console.log(sortByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(st =>  st.scores >= 100)  ;
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0,3);
//console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-опреатор )
let newDeepCopyStudents =[...topStudents,...deepCopyStudents];

//analog
//let newDeepCopyStudents = topStudents.concat(deepCopyStudents);
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = deepCopyStudents.filter(st =>  st.isMarried === false);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames  = deepCopyStudents.map(obj => obj.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - запятой (join)
// - пробелом (join)
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(',');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
//let trueStudents = deepCopyStudents.map(obj =>  ({...obj, isStudent:true}));
let trueStudents = students.map(s => {
    let copySt = {...s}
    copySt.isStudent = true
    return copySt
})

console.log(trueStudents)
console.log(students)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = deepCopyStudents.map(obj => {
    if(obj.name === "Nick"){
        return {...obj, isMarried: true }
    }
    return obj
    }
);

//analog
//let studentsWithMarriedNick = students.map(st => st.name === "Nick" ? {...st, isMarried:true} : st)

console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(s => s.name === 'Ann');
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = deepCopyStudents.reduce((a,b) => a.scores > b.scores ? a : b);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = deepCopyStudents.reduce((a,b) => b.scores + a,0 );
console.log(scoresSum)

// 14.Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
let addFriends = (students) => {
    const names = []
    students.map(s => names.push(s.name))
    return students.map(s => ({...s, friends:names.filter(n => n !== s.name)}))
}
console.log(addFriends(students));










