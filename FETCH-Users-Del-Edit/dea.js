let users = [];

if(JSON.parse(localStorage.getItem('users')) !== null && JSON.parse(localStorage.getItem('users')).length != 0){
    users = JSON.parse(localStorage.getItem('users'))
    generateDOM(users);
}
else 
 {
    fetchData()
}

function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> {
        if(res.status === 200){
           return res.json()
        }
    })
    .then((json)=> {
        localStorage.setItem('users', JSON.stringify(json))
        generateDOM(users);
        

    })
    .catch((err)=> {
        console.log(err.message)
    })
}

console.log(localStorage.length)
console.log(localStorage.key(0))

function generateDOM(usersList){
    // debugger
    let container = document.createElement('div');
    container.setAttribute('id', 'container')
    document.body.appendChild(container)
    usersList.forEach((el, index) => {
        let wrapper = document.createElement('div');
        wrapper.setAttribute('id', `${index}`)
        wrapper.className = 'userDiv'
        let name = document.createElement('h4');
        name.textContent = el.name
    
        let email = document.createElement('h5');
        email.textContent = el.email

        let removeBtn = document.createElement('button');
        removeBtn.className = 'remove'
        removeBtn.textContent = 'remove'
        removeBtn.addEventListener('click', remove)
        // removeBtn.onclick = remove;

        let editBtn = document.createElement('button');
        editBtn.addEventListener('click', edit)
        // editBtn.onclick = edit;

        editBtn.textContent = 'edit'
        editBtn.className = 'edit'
    
        container.appendChild(wrapper)
        wrapper.appendChild(name);
        wrapper.appendChild(email)
        wrapper.appendChild(removeBtn)
        wrapper.appendChild(editBtn)
    });
    // remove()
}
/*
function remove(){
    // debugger
    let parent = this.parentNode;
    parent.remove()
    let parentIndex = parseInt(parent.id)
    console.log(parent)
    console.log(parentIndex)

    let arr = JSON.parse(localStorage.getItem('users'))
    arr.splice(parentIndex, 1)
    console.log(arr)
    localStorage.setItem('users', JSON.stringify(arr))

}
*/


function remove(){
    let parent = this.parentNode;
    let parentIndex = parseInt(parent.id)
    // console.log(parent)
    console.log(parentIndex)
    parent.remove()

    let arr = JSON.parse(localStorage.getItem('users'))
    arr.splice(parentIndex, 1)
    // console.log(arr)
    localStorage.setItem('users', JSON.stringify(arr))
    for(let i = 0 ; i< document.getElementsByClassName('userDiv').length; i++){
      document.getElementsByClassName('userDiv')[i].setAttribute('id',i);
    }
}



function edit(){
    // debugger
    let arr = JSON.parse(localStorage.getItem('users'))
    let changeName = document.querySelector('h4')
    let changeEmail = document.querySelector('h5')
 
    let parent = this.parentNode;
    let parentIndex = parseInt(parent.id)
    let indexInArr = arr[parentIndex]

    let toChangeName = prompt('change the name');
    let toChangeEmail = prompt('change the email')

    indexInArr.name = toChangeName
    changeName.textContent = toChangeName

    if(validateEmail(toChangeEmail)){
        indexInArr.email = toChangeEmail;
        changeEmail.textContent = toChangeEmail;
    }
    else {
        alert('enter valid email address')
        return;
    }
    
    console.log(indexInArr)

    localStorage.setItem('users', JSON.stringify(arr))

}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

