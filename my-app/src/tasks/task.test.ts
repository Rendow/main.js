import {calcSwitch, copyStudents, deepCopyStudents, restParam, StudentType, sum} from "./task";


test('sum of two numbers', () => {
    //1. тестовые данные
    const a: number = 6
    const b: number = 8
    //2.выполнения тестируемого кода с тестовыми данными
    const result = sum(a,b)
        //3. проверка ожидаемого результата
    expect(result).toBe(14)
})

test('sum of numbers', () => {

    const a = 'string'
    const b: number = 8
    const c: number = 10
    const d: number = 2

    const result = restParam(a,b,c,d)
    const result2 = restParam(c,d)

    expect(result).toBe(20)
    expect(result2).toBe(12)

})

let firstStudent:StudentType

//beforeEach - перед каждым тестом повторно присваевает переменной эти данные, это защищает от изменения исходных данных
beforeEach(() => {
    let firstStudent = {
        name:'Ksu',
        isStudent:true,
        friends:['ivan','olya']
    }
})

test('test copyStudents', () => {
    const copy = copyStudents(firstStudent)

    expect(copy === firstStudent).toBe(false)
    expect(copy.friends === firstStudent.friends).toBe(true)

})
test('test deepCopyStudents', () => {
    const copy = deepCopyStudents(firstStudent)

    expect(copy === firstStudent).toBe(false)
    expect(copy.friends === firstStudent.friends).toBe(false)

})

test('test copyStudents', () => {
    const copy = copyStudents(firstStudent)

    expect(copy === firstStudent).toBe(false)
    expect(copy.friends === firstStudent.friends).toBe(true)

})

test('test calc', () => {

    expect(calcSwitch(4,3,'sum')).toBe(7)
    expect(calcSwitch(4,3,'mult')).toBe(12)
    expect(calcSwitch(4,4,'div')).toBe(1)
    expect(calcSwitch(4,4,'sub')).toBe(0)

})