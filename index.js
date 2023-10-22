const root = 'http://localhost:3000';
const form = document.querySelector('form');
const ListContainer = document.querySelector('#todo-list');
console.log(form)


// FUNCTIONT TO DELETE ALL THE EXISTING CHILD IN MY LISTCONTAINER WHICH IS THE UL I QUERY FROM THE HTML TEMPLATE
const DeleteAllExistingElement = () => {
    const deleteelement = ListContainer.querySelectorAll('*')
    deleteelement.forEach((child) => child.remove())
}

// const Loop through the gottendata from the server and create element for it then render it on my application
const renderTodos = (data) => {
    data.forEach((item, index) => {
        console.log(item)
        const li = document.createElement('li')
        li.innerText = item.title

        if (item.completed){
            li.className = 'completed'
        }     
        ListContainer.append(li)
    });
}


// MAKING THE FETCH REQUEST TO THE SERVER  AND RENDERING IT WUTH MY CanvasRenderingContext2D() FUCNTION CREATED AT THE TOP
const getAndRenderDogTodos = () => {
    fetch(`${root}/todos`)
       .then((response) => response.json())
       .then((data) => {
           renderTodos(data)
       });
}


// MAKING THE POST REQUEST TO TGHE SERVER TO CRAETE A NEW TODO AND RENDER IT IN MY APPLICATION
form.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = {
        title: event.target[0].value,
        completed: true
    }

    console.log(data)

    const option = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    console.log(option.body)

    fetch(`${root}/todos`, option) 
    DeleteAllExistingElement()
    getAndRenderDogTodos()
})

getAndRenderDogTodos()








