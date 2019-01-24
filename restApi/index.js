// USING CALLBACKS
document.querySelector('.submit').addEventListener('click',function(e){

  let user = document.querySelector(".input").value;
    console.log(user)
    userName = `https://api.github.com/users/${user}/repos`;
    console.log(userName);
class Myhttp {
  constructor() {
    this.http = new XMLHttpRequest();
  }
  getPost(cb, url) {
    this.http.open("GET", url, true);
    this.http.onload = () => {
      if (this.http.status === 200) {
        let repo = [];
        // console.log(repo);
        repo = JSON.parse(this.http.responseText);
        let repos=repo.map(item =>item.name);
        console.log(repos);
        repos.forEach(element => {
          let list =document.querySelector('ul');
          let Li = document.createElement('li');
          Li.innerHTML =element
          list.append(Li);
        });
      cb(this.http.responseText);
      }
    }
    this.http.send();
    
}
}
  const obj = new Myhttp(); 
  
  obj.getPost(
    response => console.log(response),userName      
    // `index.json`
    );
    e.preventDefault()
  });

    
// document.querySelector('.submit').addEventListener('click',function(e){

// let user = document.querySelector(".input").value;
//   console.log(user)
//   userName = `https://api.github.com/users/${user}/repos`;
//   console.log(userName);
// class Myhttp {
//     constructor() {
//       this.http = new XMLHttpRequest();
//     }
//     getPost(url) {
//       return new Promise((resolve, reject) => {
//         this.http.open("GET", url, true);
//         this.http.onload = () => {
//           if (this.http.status === 200) {
//             let repo = [];
//             // console.log(repo);
//             repo = JSON.parse(this.http.responseText);
//             let repos=repo.map(item =>item.name);
//             console.log(repos);
//             repos.forEach(element => {
//               let list =document.querySelector('ul');
//               let Li = document.createElement('li');
//               Li.innerHTML =element
//               list.append(Li);
//             });
           
//             resolve();
//           } else if (this.http.status === 500) {
//             reject("Please check your internet connection");
//           } else {
//             reject("something went wrong");
//           }
//         };
//         this.http.send();
//       });
//     }
//   }  
//   const obj = new Myhttp();
//   obj.getPost(userName)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// e.preventDefault();
// });