var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul') 

const callback = ()=>{
  console.log('Ashu')
  console.log('Minu')
}
//On clicking the button, the callback function is executed
button.addEventListener('click',callback)