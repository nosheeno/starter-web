// get input
let val = document.querySelector('input');

document.querySelector('#add').addEventListener('click',function onClick(){
  // get input value
  let inpt = val.value;
  if(inpt === ""){
    alert(" add item")
  }else{
      //get ul
      let colction = document.querySelector('ol');
      // create li
      let lst = document.createElement('li'); 
      lst.className = 'deleteAll'       
      let rmv = document.createElement('i');
      rmv.className = 'fas fa-times float-right';    
      let list =lst.append(rmv);
      // to remove li
      rmv.addEventListener('click',onremove);
      function onremove(){
        lst.remove();
      };
      colction.append(lst);
      document.createTextNode(inpt);
      lst.append(inpt);
      val.value = "";
    }   
});
function dlt(){
  let r = document.querySelector('li');
  r.remove();
}
clear.addEventListener('click', function onClick(){
  let a = document.querySelector('.deleteAll');
    a.remove();  
});