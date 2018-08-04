let numArray = [];
let $div = $('#numbers');
for (let i = 1; i <= 150; i++){
   numArray.push(i);
}
function change(){
$div.empty();
$div.append( numArray.map((el) => {
return `<span>${el}</span>`
   }).join('')
);
}
 
function shuffle(){
   function shuffle(array) {
   
       var currentIndex = array.length, temporaryValue, randomIndex;
       while (0 !== currentIndex) {
         // Pick a remaining element...
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;
     
         // And swap it with the current element.
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
       }
       return array;
      }
      arr = shuffle(numArray);
      console.log(arr);
      change();
     
}
function ascend(){
   numArray.sort((a,b) => {
       return a - b;
   })
   change();
}
function descend()
{
   numArray.sort((a,b) => {
       return b - a;
   })
   change();
}