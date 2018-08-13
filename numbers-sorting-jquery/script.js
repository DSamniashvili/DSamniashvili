let numArray = [];
let $div = $('#numbers');
for (let i = 1; i <= 150; i++){
   numArray.push(i);
}

function change(){
$div.empty();
let modified = []; 
$div.append( numArray.map((el) => {
return `<div id="each-number">${el}</div>`
   }).join('')
);

let deletedItemsArray = [];


let eachDiv = document.querySelectorAll('#each-number');
    // console.log(eachDiv.length)
    // console.log(eachDiv)
for(let i=0; i< eachDiv.length; i++){
    // console.log(eachDiv[i])
    eachDiv[i].addEventListener('click', function(){
        // let index = eachDiv[i];
        // console.log("hello")
        eachDiv[i].parentNode.removeChild(eachDiv[i])
        deletedItemsArray.push(eachDiv[i].innerHTML);
        return deletedItemsArray;
    })
    
}
console.log(deletedItemsArray);

// function diffArray(arr1, arr2) {
//     return arr1.concat(arr2).filter(function (val) {
//         if ((arr1.includes(val) && !arr2.includes(val)))
//             return val;
//     });
    
//  }
// let different = diffArray(numArray, deletedItemsArray);
// console.log(different.length)


// modified.length = numArray.length - deletedItemsArray.length
// console.log(modified.length);

// console.log(deletedItemsArray)
}




window.onload = change;

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

