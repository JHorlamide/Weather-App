const addForm = document.querySelector('.add');
const lists = document.querySelector('.todos');
const search = document.querySelector('.search input');

const genereteTemplate = (todo) => {
  html = `
    <li class="list-group-item d-flex justify-content-between align-item-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  // *************** Todo **************** //
  // let html = document.createElement('li')
  // let mrSpan = document.createElement('span');
  // let Del = document.createElement('i');
  // html.classList = "list-group-item d-flex justify-content-between align-item-center";
  // mrSpan.textContent = `${todo}`;
  // Del.classList = "far fa-trash-alt delete";
  // let innerContent = mrSpan.innerHTML += Del;
  // html.innerHTML += innerContent;
  lists.innerHTML += html;

};

// Adding Todos
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    genereteTemplate(todo);
    addForm.reset();
  }
});

// Deleting Todos
lists.addEventListener('click', e => {
  if(e.target.tagName === 'I'){
    e.target.parentElement.remove()
  }
});

// Filtered Todos Function 
const FilteredTodos = (term) => {
  Array.from(lists.children)
    .filter((list) => !list.textContent.toLowerCase().includes(term))
    .forEach((list) => list.classList.add('filtered'));
  
  Array.from(lists.children)
  .filter((list) => list.textContent.toLowerCase().includes(term))
  .forEach((list) => list.classList.remove('filtered'));
}

// Search Todos
search.addEventListener('keyup', () => {
  const term = search.value.toLowerCase().trim();
  FilteredTodos(term);
});


