const input = document.querySelector('input');
const todoList = document.querySelector('.todo_list');
const footer=document.querySelector('.footer_hide');
const todoCount=document.querySelector('strong');
/* const buttonAll= document.querySelector('.all_btn_hide');
const buttonActive=document.querySelector('.active_btn_hide');
const buttonCompleted=document.querySelector('.completed_btn_hide');
const buttonClear=document.querySelector('.clear_btn_hide');
 */

input.addEventListener('keyup', function (e)
{
    let myItem = input.value;
        
    if (e.key === 'Enter' && myItem!=="")
    {
        let createItem = document.createElement('li');
        todoList.append(createItem);
        createItem.className='list_item';
        let createDiv = document.createElement('div');
        createItem.append(createDiv);
        let createCheckbox = document.createElement('input');
        createCheckbox.type = 'checkbox';
        createCheckbox.className='checkbox';
        createDiv.append(createCheckbox);
        let createListText = document.createElement('label');
        createDiv.append(createListText);
        let createDeleteButton = document.createElement('button');
        createDeleteButton.className="delete_btn";
        createDeleteButton.textContent="X";
        createDiv.append(createDeleteButton);  
        
        createListText.textContent = myItem;
        input.value = '';

        let listCount=todoList.childNodes.length-1;
        todoCount.textContent = listCount;

        footer.setAttribute('class','footer_show');

        createDeleteButton.onclick = function()
        {
            todoList.removeChild(createItem);
            todoCount.textContent = listCount-1;
            if(listCount=0){footer.setAttribute('class','footer_hide');}
        }
        
     }
}
);

/* if (createItem==null){filtersList.setAttribute('class','filters_hide')}; */