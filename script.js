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

