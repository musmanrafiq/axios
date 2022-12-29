const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getTodoItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/todos?_limit=5`);
    const todoItems = response.data;
    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
};

const addTodoItem = async (model) => {
    if(!model){
        model = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        }
    }
    const response = await axios.post(`${BASE_URL}/todos`, model);
    return response.data;
}


const addLi = (title) => {
    const domList = document.querySelector('ul');
    let listItem = document.createElement('li');
    listItem.innerText = title;
    domList.appendChild(listItem);
}

const hadleButtonClick = async () => {
    const response = await addTodoItem();
    addLi(response.title);
};

(async() => {
const items = await getTodoItems();
if(items.length > 0){
    const domList = document.querySelector('ul');
    items.forEach((item) => { 
        addLi(item.title);
    });
}
})();