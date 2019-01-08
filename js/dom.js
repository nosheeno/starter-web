// create Section
let section = document.createElement('section');
// give class name to section
section.className = 'heading';
//  create div 
let div = document.createElement('div');
// add div into section
section.appendChild(div);
console.log(section);
// 
let a = div.innerHTML =  "<h2>Lists of items</h2>";
document.write(a);
let b = document.querySelector('h2')
// console.log(b);
b.style.backgroundColor = 'gray'
b.style.textAlign = 'center'

let div2 = document.createElement('div');
section.appendChild(div2);
div2.className = 'lists'
let newLi = document.createElement('ol');
newLi.className = "lst"
div2.appendChild(newLi)
let list = document.createElement('li');
list.textContent = "cup"
newLi.appendChild(list);
list.insertHTML = "tea"
newLi.insertBefore(list, list.children[1]);

// insert new item to the end of listsitens
let newList = document. createElement('li' ) ;
 newList. innerHTML = 'Tictoc' ;
 chocos. appendChild(newList) ;

 // insert new list item befire first
 let newList1 = document. createElement('li' ) ;
 newList1. innerHTML = 'prince' ;
 chocos. insertBefore(newList1,  chocos. children[ 0] ) ;

 // replace item
//  let newList2  = document. createElement('li' );
//   newList2.innerHTML = 'Hello, world!' ;
//  chocos. replaceChild(newList2, chocos. oldChild) ;


 chocos. before('before' ) ;
 chocos. after('after' ) ;
 let prepend = document. createElement('li' ) ;
 prepend. innerHTML = 'prepend' ;
 chocos. prepend(prepend) ;
 let append = document. createElement('li' ) ;
 append. innerHTML = 'append' ;
 chocos. append(append) ;

 items. after(document. createElement('hr' ), 'Hello' ,  document. createElement('hr' ) );
 console.log(items);

 items. insertAdjacentHTML('beforebegin' , '<p>Hey before began</p>' ) ;
 items. insertAdjacentHTML('afterend' , '<p>Bye after end</p>' ) ;

 let clon = div. cloneNode(true) ; // clone the message
 console.log(clon)
 clon. querySelector('h2' ). innerHTML = '<p>Bye there!' ; // change the clone
 div. after(clon) ;

 // remove element after seconds
 let rem = document.createElement('div');
 rem.className = "remove";
  rem.innerHTML = '<h2>wellcome to my shop</h2>';
  document.body.append(rem);
  console.log(rem);
   setTimeout(() => rem.remove(), 1000);

// task 
let div4, div5, div6;
div4 = document.createElement('div');
div4.id = "elemt1";
console.log(div4);

let i=1;
document.querySelector('.add').addEventListener('click',function onClick(){
   let newList = document. createElement('li' ) ;
 
   newList. textContent = 'item' +i;
   i++;
   chocos. appendChild(newList) ;
      // console.log(chocos);
  
});

document.querySelector('.remove').addEventListener('click', onClick);
function onClick(){
   document.querySelectorAll('.choco');
   chocos.lastChild.remove()
}

