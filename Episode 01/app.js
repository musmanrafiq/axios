const BASE_URL = 'https://jsonplaceholder.typicode.com';


const getTodoList = () => {
    axios.get(`${BASE_URL}/todos?_limit=5`).then((apiResonse) => {
        console.log(apiResonse);
    const {data}= apiResonse;
    const ulElement = document.querySelector('ul');

    data.forEach((singleTodo) => {
        const liElement = document.createElement('li');
        liElement.innerText = singleTodo.title;
        ulElement.append(liElement);
    })
});
};

getTodoList();