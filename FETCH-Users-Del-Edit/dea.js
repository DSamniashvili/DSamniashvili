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
}


function generateDOM(usersList){
    
    usersList.forEach((el, index) => {
        let wrapper = document.createElement('div');
        wrapper.setAttribute('id', `${index}`)
        let name = document.createElement('h4');
        name.textContent = el.name
    
        let email = document.createElement('h5');
        email.textContent = el.email

        let removeBtn = document.createElement('button');
        removeBtn.className = 'remove'
        removeBtn.textContent = 'remove'
        removeBtn.addEventListener('click', remove)

        let editBtn = document.createElement('button');
        editBtn.addEventListener('click', edit)
        editBtn.textContent = 'edit'
        editBtn.className = 'edit'
    
        document.body.appendChild(wrapper)
        wrapper.appendChild(name);
        wrapper.appendChild(email)
        wrapper.appendChild(removeBtn)
        wrapper.appendChild(editBtn)
    });
    // remove()
}

function remove(elem){
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

function edit(el){
    let arr = JSON.parse(localStorage.getItem('users'))
    let changeName = document.querySelector('h4')
 
    let parent = this.parentNode;
    let parentIndex = parseInt(parent.id)

    let indexInArr = arr[parentIndex]

    let toChange = prompt('change the value');

    indexInArr.name = toChange
    changeName.textContent = toChange
    console.log(indexInArr)

    localStorage.setItem('users', JSON.stringify(arr))

}

