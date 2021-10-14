var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul') 

const callback = (event)=>{
    const inputValue = input.value
    const element = document.createElement('li')
    const textNode = document.createTextNode(inputValue)
    element.appendChild(textNode)
    list.appendChild(element)
}
//On clicking the button, the callback function is executed
button.addEventListener('click',callback) 