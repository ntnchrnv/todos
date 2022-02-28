const input = document.querySelector('input');
const todoList = document.querySelector('.todo_list');
const footer=document.querySelector('.footer_hide');
const todoCount=document.querySelector('strong');
let listCount = 0;

input.addEventListener
(
    'keyup', function (e)
    {
        let myItem = input.value;
        
        if (e.key === 'Enter' && myItem!=="")
        {
            let createItem = document.createElement('li');
            todoList.append(createItem);
            createItem.className='';
                
            let createDiv = document.createElement('div');
            createDiv.className='view'
            createItem.append(createDiv);
                
            let createCheckbox = document.createElement('input');
            createCheckbox.type = 'checkbox';
            createCheckbox.className='toggle';
            createDiv.append(createCheckbox);
                
            let createListText = document.createElement('label');
            createDiv.append(createListText);
            createListText.textContent = myItem;
                
            let createDeleteButton = document.createElement('button');
            createDeleteButton.className="delete_btn";
            createDeleteButton.textContent="X";
            createDiv.append(createDeleteButton);
                
            createListText.textContent = myItem;
               
            listCount++;
            todoCount.textContent = listCount;      
           
            footer.setAttribute('class','footer_show');

            input.value = '';

            createDeleteButton.onclick = function()
            {
                todoList.removeChild(createItem);
                listCount--;
                todoCount.textContent = listCount;
            }
        }
    }    
)

/* createDeleteButton.onclick = function()
{
    todoList.removeChild(createItem);
    if(listCount=0){footer.setAttribute('class','footer_hide')};
}
}; */
/* if (createItem==null){filtersList.setAttribute('class','filters_hide')}; */