let generate = function (par, child, child1){
let elem = document.createElement(par);
let elemchild = document.createElement(child);
let elemchild1 = document.createElement(child1);


let parentText = document.createTextNode('Parent')
let childText = document.createTextNode('child');
let child1Text = document.createTextNode('child1');



document.body.appendChild(elem);
elem.appendChild(elemchild);
elemchild.appendChild(elemchild1);



elem.appendChild(parentText);
elemchild.appendChild(childText);
elemchild1.appendChild(child1Text)

elem.className = 'myParentElement';
// elem.textContent = 'I am a parent'
elemchild.className = 'myChildElement';
// elemchild.textContent = 'I am a child';
elemchild1.className = 'myChild1Element';
// elemchild1.textContent = 'I am a child of child';
}


let generated = generate('div', 'div', 'div');
console.log(generate);