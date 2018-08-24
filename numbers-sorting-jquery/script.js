let numArray = [];
let removedItems = [];


for(let i=0; i<=150; i++) {
    numArray.push(i)
}
// console.log(numArray)
let numbersWrapper = document.querySelector('#numbers');

function generateNumbers(){
    // debugger
    for(let i=0; i<numArray.length; i++) {
        
        let item = document.createElement('div');
        item.className = 'each-number';
        item.innerHTML = numArray[i];
        numbersWrapper.appendChild(item)
    }
    remove();
}
generateNumbers();

//ეს ფუნქცია დავამატე მხოლოდ და ზევით გამოვიძახე, 5 ხაზით ზევით
function remove(){
    let eachNumber = document.querySelectorAll('.each-number');
    for(let i = 0; i< eachNumber.length; i++){
        eachNumber[i].addEventListener('click', function(){
            removedItems.push(Number(eachNumber[i].textContent))
            eachNumber[i].parentNode.removeChild(eachNumber[i]);
            numArray.splice(eachNumber[i], 1)
        })
    }

}


function shuffle(){
    numbersWrapper.innerHTML = ''
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  let shuffled = shuffle(numArray)
  generateNumbers();
}

function ascend(){
    numbersWrapper.innerHTML = ''
    numArray.sort((a,b) => {
        return a - b;
    })
   
    generateNumbers();
 } ascend()
 
 function descend() {
 numbersWrapper.innerHTML = ''
    numArray.sort((a,b) => {
        return b - a;
    })
    generateNumbers();
 }

  

// let numArray = [];
// let $div = $('#numbers');
// for (let i = 1; i <= 150; i++){
//    numArray.push(i);
// }

// function change(){
// $div.empty();
// let modified = []; 
// $div.append( numArray.map((el) => {
// return `<div id="each-number">${el}</div>`
//    }).join('')
// );

// let deletedItemsArray = [];


// let eachDiv = document.querySelectorAll('#each-number');
//     // console.log(eachDiv.length)
//     // console.log(eachDiv)
// for(let i=0; i< eachDiv.length; i++){
//     // console.log(eachDiv[i])
//     eachDiv[i].addEventListener('click', function(){
//         // let index = eachDiv[i];
//         // console.log("hello")
//         eachDiv[i].parentNode.removeChild(eachDiv[i])
//         deletedItemsArray.push(eachDiv[i].innerHTML);
//         return deletedItemsArray;
//     })
    
// }
// console.log(deletedItemsArray);

// window.onload = change;

// function shuffle(){
//    function shuffle(array) {
   
//        var currentIndex = array.length, temporaryValue, randomIndex;
//        while (0 !== currentIndex) {
//          // Pick a remaining element...
//          randomIndex = Math.floor(Math.random() * currentIndex);
//          currentIndex -= 1;
     
//          // And swap it with the current element.
//          temporaryValue = array[currentIndex];
//          array[currentIndex] = array[randomIndex];
//          array[randomIndex] = temporaryValue;
//        }
//        return array;
//       }
//       arr = shuffle(numArray);
//       console.log(arr);
//       change();

     
// }
// function ascend(){
//    numArray.sort((a,b) => {
//        return a - b;
//    })
//    change();
// }
// function descend()
// {
//    numArray.sort((a,b) => {
//        return b - a;
//    })
//    change();
// }
