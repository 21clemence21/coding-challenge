const text = "Blessed be the Fruit (may the Lord open)";

let index = 0; 
function writeText(){
   document.body.innerText = text.slice(0, index);
   index++; 
   if(index > text.length){
      index = 0;
   }
}

text.slice()
setInterval(writeText, 150);