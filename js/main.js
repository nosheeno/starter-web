// let doc;
// doc = document;
// doc = document.all;
// doc = document.all[4];
// doc = document.all.length;
// doc = document.doctype;
// doc = document.head;
// doc = document.body;
// doc = document.URL;
// doc = document.contentType;
// doc = document.links;
// doc = document.links[3];
// doc = document.scripts;
// doc = document.scripts[1].getAttribute('src');

// console.log(doc);

// single element sector

// let a = document.getElementById('sectionTwo');
// console.log(a);
// // let b = document.getElementById('sectionTwo').className;
// // console.log(b);
 
// change styling by id
let chng = document.getElementById('sectionTwo');
chng.style.backgroundColor = '#dcd1d1';
// chng.style.color = 'red';
// chng.textContent = 'wellcome';
// chng.style.textAlign = 'center';
// chng.style.textSize = '5px';
// chng.style.color = 'red';
// chng.innerHTML = '<h2 style = "color:red">Wellcome to the Page</h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maiores! Cum, dicta minus, impedit laudantium maxime minima </P>';

// querySelector
// let tag = document.querySelector('a');
// console.log(tag);

let footr = document.querySelector('#footer'); 
console.log(footr);
footr.style.backgroundColor = "gray";
footr.style.color = "white";
footr.style.TextAlign = "center";

// let cont = document.querySelector('.container');
// console.log(cont);
let f = document.querySelector('a');
f.style.color = "red";
let b = document.querySelector('a:last-child');
b.style.color = "yellow";
let c = document.querySelector('a:nth-child(3)');
c.style.color = "white";
// let d = document.querySelector('a:nth-child(4)');
// d.textContent = "hello";\

let btn = document.getElementsByClassName('btn');
// console.log(btn);
btn[1].style.backgroundColor = "gray"
btn[1].style.Color = "black"
btn[2].style.color = "red"
btn[3].style.color = "brown"

// let h = document.body.firstChild.nodeName;
let h = document.body.lastChild.nodeName;
console.log(h);
