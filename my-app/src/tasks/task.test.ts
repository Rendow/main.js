import {addFriends, calcSwitch, copyStudents, deepCopyStudents, restParam, StudentType} from "./task";
import {getBanknoteList, getSum, getTriangleType, isEvenSumGreater, isSquareGreater, sum} from "./tasksStdnt";


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
test('test addFriends', () => {

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
        },]
    let copy = addFriends(students)

    expect(copy === students ).toBe(false)
    expect(copy[0].name === students[0].name ).toBe(true)

    expect(copy[0].friends).toBeDefined()
    expect(students[0].friends).toBeUndefined()

    expect(copy[0].friends ).toEqual(["Alex", "Nick"])
    expect(copy[1].friends ).toEqual(["Bob", "Nick"])
    expect(copy[2].friends ).toEqual(["Bob","Alex"])

})
test('test sum', () => {

    expect(sum(2,4,5,1)).toBe(12)

})
test("get Triangle Type", ()=> {
    expect(getTriangleType(1, 1, 1)).toBe("10")
    expect(getTriangleType(3, 3, 2)).toBe("01")
    expect(getTriangleType(5, 4, 3)).toBe("11")
    expect(getTriangleType(10, 5, 5)).toBe("00")
})

test("get Sum ", ()=> {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})

test("is Even Sum Greater", ()=> {
    expect(isEvenSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenSumGreater([100, 1, 200, 2])).toBe(true)
})

test("is Square Greater Than Circle", ()=> {
    const sCr = 3.14
    const sSq = 4
    const result = isSquareGreater(sCr, sSq)
    expect(result).toBe(true)
})

test("get banknote list", ()=> {
    const result1500 = getBanknoteList(1500)
    const result23 = getBanknoteList(23)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(0)
    expect(result23[1]).toBe(1)
    expect(result23[1]).toBe(2)

})
