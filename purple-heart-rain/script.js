function createHeart(){
   const heart = document.createElement('div');
   heart.classList.add('heart');
   heart.style.left = Math.random() * 100 + "vw";
   heart.style.animationDuration = Math.random() *2 + 3 + "s";
   heart.innerText ="☠️";
   document.body.appendChild(heart);
}

setInterval(createHeart, 300);

function createKnives(){
   const heart = document.createElement('div');
   heart.classList.add('heart');
   heart.style.left = Math.random() * 100 + "vw";
   heart.style.animationDuration = Math.random() *1 + 2 + "s";
   heart.innerText ="🔪";
   document.body.appendChild(heart);
}



setInterval(createKnives, 500);

function createBomb(){
   const heart = document.createElement('div');
   heart.classList.add('heart');
   heart.style.left = Math.random() * 100 + "vw";
   heart.style.animationDuration = Math.random() *1 + 2 + "s";
   heart.innerText ="💣";
   document.body.appendChild(heart);
}

setInterval(createBomb, 700);

function createFire(){
   const heart = document.createElement('div');
   heart.classList.add('heart');
   heart.style.left = Math.random() * 100 + "vw";
   heart.style.animationDuration = Math.random() *2 + 3 + "s";
   heart.innerText ="🔥";
   document.body.appendChild(heart);
}

setInterval(createFire, 1400);