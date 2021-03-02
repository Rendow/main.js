//1. Событие(event) ->
//2. Есть ли обработчик -> handler, listener,подписчик
//3. Вызов обработчика ->
//4. Передача обьекта(event, ev,e) обработчик в качестве параметра

//event - обьект в котором собраны сведения о событии, всегда приходит в функцию

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

sm.onclick = onClickHandlerd
md.onclick = onClickHandlerd
bg.onclick = onClickHandlerd

function onClickHandlerd (e) {
    console.log(e)
}
// в консоле появляется эвент MouseEvent
function onClickHandler (e) {
    console.log(e.target.id)
}
// в консоле появляется id элемента

function onClickHandler (e) {
    e.target.parentElement.style.backgroundColor = 'black'
}
//заходим в стиль родительского элемента, и меняем его на черный

const input =  document.getElementById('input')

input.oninput = onChangeHandler
function onChangeHandler(e) {
    console.log(e.target.value)
}
// в консоле появляется введенный в инпут текст

// e.target - эдемент, который сгенерировал событие (получил клик)(вызывает самый вложенный)
// e.currentTarget - элемент, который вызвал обработчик в процессе всплытия события (при клике на обьект вызовется именно он, а не чтото невидимое )
//почти всегде следует использовать currentTarget

function onClickHandlerd (e) {
    console.log(e.currentTarget.id)
}

function onClickHandlerd (e) {
    console.log(e.target.id)
    e.stopPropagation()
}
//stopPropagation() - останавливает всплытие событий (как в функции выше)

sm.addEventListener('click',onClickHandlerd)
//добавить эвент - клик -> вызов функции