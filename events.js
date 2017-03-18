var add=document.getElementById('addElem')
var list = document.getElementById('list')
add.addEventListener('click', function(){
var length=document.getElementsByTagName('li').length;

	list.innerHTML+='<li>item '+length+'</li>'
})