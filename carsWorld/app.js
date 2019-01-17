class Car {
  constructor(name, make, price, model, year,description) {
    this.name = name;
    this.make = make;
    this.price = price;
    this.model = model;
    this.year = year;
    this.description = description;
  }
  static display() {
    const item = JSON.parse(localStorage.getItem("cars"));
    console.log(item);
    if (item != null) {
      for (let i = 0; item.length > i; i++) {
        const list = document.querySelector(".lists");
        const row = document.createElement("tr");
       let itm = row.innerHTML = `
          <td>${item[i].name}</td>
          <td>${item[i].make}</td>
          <td>${item[i].price}</td>
          <td>${item[i].model}</td>
          <td>${item[i].year}</td>
          <td>${item[i].description}</td>
          <button class ="delete">X</button></td> 
           `;
        // itm.style.textAlign = "center"   
        list.appendChild(row);
      }
    } else {
      localStorage.setItem("cars", JSON.stringify([]));
    }
  }
}
class Store extends Car {
  constructor(name, make, price, model, year,description) {
    super(name, make, price, model, year,description);
  }
  insertCars(car) {
    let cars;
    if (localStorage.getItem("cars") === null) {
      cars = [];
    } else {
      cars = JSON.parse(localStorage.getItem("cars"));
    }
    cars.push(car);
    localStorage.setItem("cars", JSON.stringify(cars));
  }
}
Car.display();
document.body.addEventListener("submit", function(e) {
  const name = document.querySelector(".name").value;
  const make = document.querySelector(".make").value;
  const price = document.querySelector(".price").value;
  const model = document.querySelector(".model").value;
  const year = document.querySelector(".year").value;
  const description = document.querySelector(".description").value;
  e.preventDefault();
  const obj = new Store(name, make, price, model, year, description);
  obj.insertCars(obj);
  
});
