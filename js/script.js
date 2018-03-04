var list = document.getElementById('list');
var addItem = document.getElementById('addElem');
addItem.addEventListener('click', function() {
  var element = document.createElement('li'); 
  var listCount = document.getElementsByTagName('li');
  element.innerHTML = 'Item ' + listCount.length;
  list.appendChild(element);
});