// start of function section - functions for creating elemets
const createInput = () => {
   //some code to execute
  return document.createElement('input');
};
const createContainer = () => document.createElement('div');
const createButton = () => document.createElement('button');
const createParagraph = () => document.createElement('label');
const createHeader = () => document.createElement('h1');

//Insert one element to another
const inserElementTo = (element, to) => {
  to.appendChild(element);
  return to;
}
//end of function section - functions for creating elemets

//start manipulate with dom
window.onload = () => {
  //creating elements
  const mainContainer = createContainer();
  const inProgressContainer = createContainer();
  const completeContainer =  createContainer();
  const allDoneContainer =  createContainer();
  const mainInput = createInput();
  const addButton = createButton();
  const insertContainer = createContainer();
  const inProgressHeader = createHeader();
  const completeHeader = createHeader();
  const allDoneHeader = createHeader();

  //get text from input and insert to dom as todo item

  
  const addTextFromInput = (event) => {
    event.preventDefault();
    if (!mainInput.value) {
      return;
    }

    //creating todo element
    const editButton = createButton();
    const itemContainer = createContainer();
    const par = createParagraph();
    par.setAttribute("for", "txt");
    par.setAttribute("id", "about");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "txt");

    //adding class and text to elements
    editButton.innerText = 'Edit'; 
    itemContainer.className = 'todo-item';
    checkbox.className = 'check';
    

    par.innerText = mainInput.value;

    //inserting element (not in dom)
    inserElementTo(checkbox, itemContainer);
    checkbox.style.display = 'none';
    inserElementTo(par, itemContainer);
    inserElementTo(editButton, itemContainer);
    
    
    

    
    //inserting element (to existing element in dom)
    inserElementTo(itemContainer, inProgressContainer);


    editButton.addEventListener('click', () => {

        inserElementTo(itemContainer, completeContainer);
        editButton.innerText = 'Delete';

        editButton.addEventListener('click', ()=>{
        itemContainer.remove();
            });

                checkbox.style.display = 'block';

                checkbox.addEventListener('click', () => {

                inserElementTo(itemContainer, allDoneContainer);
                editButton.innerText = 'Delete';
                checkbox.style.display = 'block';

                
                     var textFromInput= addTextFromInput; 
                     editButton.addEventListener('click', ()=>{
                     itemContainer.remove();
         });
     })
   });
  
      //clear input
      mainInput.value = '';
  }
   
 
  //add classes and text to created elements
  mainContainer.className = 'main';
  insertContainer.className = 'insert';
  mainInput.className = 'main-input';
  addButton.innerText = '+';
  inProgressContainer.className = 'in-progress';
  inProgressHeader.innerText = 'In Progress';
  completeContainer.className = 'completed';
  completeHeader.innerText = 'Completed';
  allDoneContainer.className = 'done';
  allDoneHeader.innerText = 'All done';

  //inserting element (not in dom)
  inserElementTo(mainInput, insertContainer);
  inserElementTo(addButton, insertContainer);
  inserElementTo(insertContainer, mainContainer);
  inserElementTo(inProgressHeader, inProgressContainer)
  inserElementTo(inProgressContainer, mainContainer);
  inserElementTo(completeContainer, mainContainer);
  inserElementTo(completeHeader, completeContainer);
  inserElementTo(allDoneContainer, mainContainer);
  inserElementTo(allDoneHeader,allDoneContainer);


  //inserting element (to the dom)
  inserElementTo(mainContainer, document.body);


  //add event listeners to addbutton and input
  addButton.addEventListener('click', addTextFromInput)
  mainInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      addTextFromInput(event);
    }
  })
}
