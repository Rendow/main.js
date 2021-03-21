

export function sum(a:number, b:number) {
    return a+b
}

//если мы хотим передать н-ное количество цифр. все переданные числа будут собраны в массив
//вместе с этим мы можем передать доп параметр(a)
export function restParam(a: any,...numbers: number[]) {
    console.log(a)
    return numbers.reduce((acc,el) => acc + el)
}


//TTD-TEST DRAVE DEVELOPMENT - подход, при котором сначала обдумывается что будут делать функции,
//пишется для них тесты, а потом уже сами функции

export type StudentType = {
    name:string
     isStudent:boolean
     friends:string[]
 }

 export function copyStudents(st:StudentType){
        return {...st}
 }
 export function deepCopyStudents(st:StudentType){
     return (
     {...st, friends: [...st.friends]}
     )
 }

 // 'sum','mult','div','sub'

 export function calcIf(a: number, b: number, action: string){
    if(action === 'sum'){
        return a +b
    } else if(action === 'mult'){
        return a *b
    }else if(action === 'div'){
        return a/b
    }else if(action === 'sub'){
        return a - b
    }
 }
 //calc (2,3,'mult') -> 6

//analog на switch (можно перевести автоматом с иф\элс -> правой кнопкой по иф)

export function calcSwitch(a: number, b: number, action: string){
      switch (action){
          case 'sum':
              return a + b
          case 'mult':
              return a * b
          case 'div':
              return a/b
          case 'sub':
              return a - b
          default:
              return 'Unknown'
      }
}

// 14.Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.