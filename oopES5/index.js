// //person constructor
// function Person (firstName, lastName, dob){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function(){
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear()-1970)
//   // }  
// }

// // Calculate age
// Person.prototype.calculateAge =  function(){
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear()-1970)
// }  

// // Get full name
// Person.prototype.getFullName = function(){
//   return ` ${this.firstName} ${this.lastName}`
// }
// //greeting
// Person.prototype.greeting =function(){
//   return `hello there ${this.firstName} ${this.lastName}`
// }
// const nosheen = new Person('nosheen','safdar','8-30-1996');
// const alia = new Person('aliya','fehmi','4-30-2000');
// const ruheen = new Person('ruheen','khani','3-4-2009');

// // console.log(nosheen);
// // console.log(ruheen.calculateAge());
// // console.log(alia.getFullName())
// // console.log(alia.greeting())

// // constractor 
// function Customer(firstName,lastName,dob,phone,discription){
//   Person.call(this, firstName, lastName, dob);
//   this.phone = phone;
//   this.discription = discription;
// }
// //herit the person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// const Customer1 = new Customer('najma','yaqub', '6-6-1990','232323-324234','teacher');
// // greeting for custumer
// Customer.prototype.greeting = function(){
//   return `hello there ${this.firstName} ${this.lastName} wellcome to our shop`
// }
// console.log(Customer1);
// console.log(Customer1.greeting());

// //METHODS
// Customer.prototype = Object.create(Person.prototype);
// const obj1 = new Customer("aliyar", "hussain", "8-6-2015", 2300, "sales man");
// console.log(obj1);

// todo app
//constructor of Todo
function TODO(){

}
let addBtn = document.querySelector('#add');
let clrBtn = document.querySelector('#cancle');
let val = document.querySelector('input');

TODO.prototype.addItems = function(){  
  addBtn.addEventListener('click',function onClick(e){
  // get input value
  let inpt = val.value;
  if(inpt === ""){
    alert(" please add item")
  }else{
      //get ul
    let colction = document.querySelector('ul');  
      // create li
      let lst = document.createElement('li'); 
      lst.className = 'items';       
      lst.style.decoration= 'none';         
      colction.append(lst);
      document.createTextNode(inpt);
      lst.append(inpt);
      val.value = "";   
      e.preventDefault();
          }   
});
}
TODO.prototype.clearItems = function(){
  clrBtn.addEventListener('click',function(){
    const remo=document.querySelectorAll(".items");
    for(let i=0;i<remo.length;i++){
    remo[i].remove();    
  }
    });
}

let add = new TODO();
add.addItems();
let clear = new TODO();
clear.clearItems();
