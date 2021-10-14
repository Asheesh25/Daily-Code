var body = document.querySelector('body')
var button = document.querySelector('button')

const callback = (event)=>{
    body.classList.toggle('dark')

}
//On clicking the button, the callback function is executed
button.addEventListener('click',callback) 