
const inp=document.querySelector('.todoinp');
const inpbtn=document.querySelector('.todoinpbtn');
const out=document.querySelector('.outblock');
const fitem=document.querySelector('.firstitem');
const item=document.querySelectorAll('.todoitem');
const del=document.querySelectorAll('.todobtn');
const ft=document.querySelector('.ftext');

let task=[];

/*
  if(localStorage.getItem('todo')!==undefined) {
    task=JSON.parse(localStorage.getItem('todo'));
  }
*/
console.log(task);

inpbtn.addEventListener('click', ()=> {
  if (inp.value==='') {
    ft.innerHTML=' Введите задачу!!!'
    return;
  } else {
    task.push(inp.value);
    inp.value='';
    console.log(task);
    textout(task);
    fitem.style.display='none';

  }
});

const textout=(arr)=> {
  let textarr='';
  for (let i=0; i<arr.length; i++) {
    textarr+=`<div class="todoitem" ondrop="drop(event)" ondragover="allowDrop(event)">
    <div class="todotext">
      <p> ${arr[i]}</p>
    </div>
    <div class="todopanel">
      <button class="todobtn">X</button>
    </div>
  </div>`;
 
  }
  out.innerHTML=textarr;
  localStorage.setItem('todo', JSON.stringify(arr));
}



