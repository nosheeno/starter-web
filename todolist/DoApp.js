// get input
let val = document.querySelector('input');

document.querySelector('#add').addEventListener('click',function onClick(){
  // get input value
  let inpt = val.value;
  if(inpt === ""){
    alert(" please add item")
  }else{
      //get ul
    let colction = document.querySelector('ol');  
      // create li
      let lst = document.createElement('li'); 
      lst.className = 'items border-bottom';       
      let rmv = document.createElement('i');
      rmv.className = 'fas fa-times float-right icondl'; 
      rmv.style.cursor = 'pointer';   
      let list =lst.append(rmv);

      colction.append(lst);
      document.createTextNode(inpt);
      lst.append(inpt);
      val.value = "";
      // to remove li
      document.body.addEventListener('click', function(a){
        if(a.target.parentElement.classList.contains('items')){
          a.target.className === 'icondl'
          a.target.parentElement.remove();
          }                  
      }) 

    }   
});
function dlt(){
  let r = document.querySelector('li');
  r.remove();
}
  clear.addEventListener('click',function(){
    const remo=document.querySelectorAll(".items");
    for(let i=0;i<remo.length;i++){
    remo[i].remove();
    
  }
   });

 