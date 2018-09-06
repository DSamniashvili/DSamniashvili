let users = [];

if(localStorage.getItem('users') !== null){
    users = JSON.parse(localStorage.getItem('users'))
    generateDOM(users);
    remove() 
}
else {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> {
        if(res.status === 200){
           return res.json()
        }
    })
    .then((json)=> {
        localStorage.setItem('users', JSON.stringify(json))
        generateDOM(users);
        remove()
    })
}
console.log(users)

function generateDOM(usersList){
    
    usersList.forEach((el) => {
        let wrapper = document.createElement('div');
        let name = document.createElement('h4');
        name.textContent = el.name
    
        let email = document.createElement('h5');
        email.textContent = el.email

        let remove = document.createElement('button');
        remove.className = 'remove'
        remove.textContent = 'remove'
        remove.addEventListener('click', remove)

        let edit = document.createElement('button');
        edit.addEventListener('click', edit)
        edit.textContent = 'edit'
        edit.className = 'edit'
    
        document.body.appendChild(wrapper)
        wrapper.appendChild(name);
        wrapper.appendChild(email)
        wrapper.appendChild(remove)
        wrapper.appendChild(edit)
    });
    // remove()
}

function remove(e){
    users.forEach((elem)=> {
        console.log('fhf')
    })   
}


