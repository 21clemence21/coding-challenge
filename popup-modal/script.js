const close = document.getElementById("close"); 
const open = document.getElementById("open"); 
const container = document.getElementById("popup-container"); 

open.addEventListener('click', ()=> {
   container.classList.add('active');
})

close.addEventListener('click', ()=> {
   container.classList.remove('active');
})
