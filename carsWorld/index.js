
let btn = document.querySelector('.add');
class Car{
  constructor(name,make,model,price,year,description){
    this.name = name;
    this.make = make;
    this.model=model;
    this.price = price;
    this.year=year;
    this.description=description;
  }
}
class Table{
  addDetailsToTable(cars){    
      const list = document.querySelector(".lists");
      const row = document.createElement('tr')
      row.innerHTML =`<td>${cars.name}</td><td>${cars.make}</td><td>${cars.model}</td><td>${cars.price}</td><td>${cars.year}</td><td>${cars.description}</td><td><button class ="delete">X</button></td>`;
      // col.document.style.border ="1px solid black"
      list.appendChild(row);
      // console.log(row);  
      
    }
  deleteItem(target){
    if(target.className === "delete"){
      target.parentElement.parentElement.remove();
    }
  }
  }
    
document.getElementById('form').addEventListener('submit', function(e){
  let names = document.querySelector(".name").value;
  let make = document.querySelector(".make").value;
  let model = document.querySelector(".model").value;
  let price = document.querySelector(".price").value;
  let year = document.querySelector(".year").value;
  let description = document.querySelector(".description").value;
//instantiate car
const car = new Car(names,make,price,model,year,description);

const table = new Table();

console.log(table)
// validate
if(names === '' || make ==='' || model ==='' || price ==='' || year === '' || description ===''){
  alert('please fill the fields')
}
else{
  table.addDetailsToTable(car);
  
}
e.preventDefault()
});
document.getElementById('form').addEventListener('click', function(e){
  const table = new Table();
  table.deleteItem(e.target);
  
})