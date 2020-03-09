let name=document.getElementById('name');
let email=document.getElementById('email');
let action=document.getElementById('cu-action');
let tbody=document.getElementById('todo-body');
let currentvalue = null;
let arr=[];
let i=1;
action.addEventListener('click',add);
function add()
{
    if(currentvalue){
        arr=arr.map(element=>{
            if(element.a1===currentvalue){
                element.a2 = name.value;
                element.a3 = email.value;
            }
            return element;
        });
        UpValues(null,'addition')
    }else{
        var pp={};
        pp.a1=i++;
        pp.a2=name.value;
        pp.a3=email.value;
        arr.push(pp);
    }
    bodyy();
}
function bodyy(){
    rows=""
    arr.forEach(obj=>
    {
        const tr=`<tr>
        <td>${obj.a1}</td>
        <td>${obj.a2}</td>
        <td>${obj.a3}</td>
        <td><button id="edit" onclick="edit_row(${obj.a1})">Edit</button>
        <button id="delete" onclick="delete_row(${obj.a1})">Delete</button></td>
        </tr>`;
        rows+=tr;
    });
    document.getElementById("todo-body").innerHTML=rows;
    document.getElementById('name').value=""
    document.getElementById('email').value=""
    }
function UpValues(id,text){
    currentvalue=id;
    action.innerHTML=text;
}
function edit_row(id){
    let todo = arr.find(obje=>
        obje.a1==id);
        if(todo){ name.value=todo.a2;
            email.value=todo.a3;
            UpValues(todo.a1,"update")
        }
}
function delete_row(id){
    arr=arr.filter(todo=> todo.a1!==id);
    bodyy();
}

