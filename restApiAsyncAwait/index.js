const getRepo = async url => {
  const res = await fetch(url);
  return await res.json();
  };

document.querySelector('.submit').addEventListener('click',function(e){
  let user = document.querySelector(".input").value;
    console.log(user)
    userName = `https://api.github.com/users/${user}/repos`;
    console.log(userName);

  getRepo(userName)
  .then(res => res.map(result => result.name)
  ).then(repo =>  repo.forEach(element => {
    let list =document.querySelector('ul');
    let Li = document.createElement('li');
    Li.innerHTML =element
    list.append(Li);
  }))
  .then(res => console.log(res));

  e.preventDefault();
});