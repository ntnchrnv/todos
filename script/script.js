const input = document.querySelector('input');
const sectionMain = document.querySelector('.main_hide');
const todoList = document.querySelector('.todo_list');
const footer=document.querySelector('.footer_hide');
const todoCount=document.querySelector('strong');
let listCount = 0;
const allBtn = document.querySelector('.all_btn');
const activeBtn = document.querySelector('.active_btn');
const completedBtn = document.querySelector('.completed_btn');
const clearBtn =document.querySelector('.clear_btn');

input.addEventListener
(
    'keyup', function (e)
    {
        let myItem = input.value;
        
        if (e.key === 'Enter' && myItem!=="")
        {
            let createItem = document.createElement('li');
            todoList.append(createItem);
            createItem.className='list_item';
                
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
            sectionMain.setAttribute('class','main_show');

            input.value = '';

            createDeleteButton.onclick = function()
            {
                if(listCount>1)
                {
                    todoList.removeChild(createItem);
                    listCount--;
                    todoCount.textContent = listCount;
                }
                else
                {
                    todoList.removeChild(createItem);
                    listCount--;
                    todoCount.textContent = listCount;
                    footer.setAttribute('class','footer_hide');
                }
            }

            activeBtn.onclick = function()
            {
                let checkBox = document.querySelector('.toggle:checked');
                let listItem = document.querySelector('.list_item');

                if (checkBox)
                {
                    listItem.setAttribute('class','list_item_hide');
                }
                else
                {
                    alert('Ничего не выбрано');
                }
                 
            }
        }
    }    
)

/* $('#filterButt').click(function(){
    $('#tableId1 tbody').find('tr:not(:has(:checkbox:checked))').hide();
});



$('#resetButt').click(function(){
    $('#tableId1').find('tr').show();
    $('#tableId1 input:checkbox').removeAttr('checked');
}); */


/* const inputs = document.querySelectorAll('input');
const container = document.querySelector('.container');

inputs.forEach(el => {
    el.addEventListener('click', () => {
        container.textContent = '';
        let input_checkeds = document.querySelectorAll('input:checked');

        input_checkeds.forEach(el_checked => {
            container.insertAdjacentHTML('beforeend', el_checked.value);
        });
    });
}); */