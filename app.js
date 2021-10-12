var list = document.querySelector('ul')
console.log(list)
var arr = ['Go to the Gym','Cook Oatmeal','Eat']
arr.push('Randi')
for(var i=0;i<arr.length;i++)
{
  var element = document.createElement('li')
  var textNode = document.createTextNode(arr[i])
  element.appendChild(textNode)
  list.appendChild(element)
}