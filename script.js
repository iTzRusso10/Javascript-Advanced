
const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  
  let bg = `White`
  
  function saveUser(name, val){
      localStorage.setItem(name, val);
  }
  
  saveUser(`user`, JSON.stringify(user));
  saveUser(`background`, bg);

  let localUser = localStorage.getItem(`user`);
  let parsedUser = JSON.parse(localUser);
  console.log(parsedUser);
  console.log(parsedUser.age);




