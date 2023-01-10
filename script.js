// Write a first promise that takes as parameter the variable isLogged .
// If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error. 
// We write a second promise that takes a variable of type number as a parameter. 
// If the input parameter is greater than 0.5, in the resolve we must return the following data: {name: "John", age: 24}, 
// otherwise we must dispatch an error.
// Once this is done, try to chain the promises to eventually return the final object {name: "John", age: 24}

// Scriviamo una prima promise che prende come parametro la variabile isLogged . 
// Se la variabile è true, allora restituiamo un numero casuale dalla risoluzione, altrimenti inviamo un errore. 
// Scriviamo una seconda promise che prende come parametro una variabile di tipo number. 
// Se il parametro di input è maggiore di 0,5, nella resolve dobbiamo restituire i seguenti dati: {nome: "John", età: 24}, 
// altrimenti dobbiamo inviare un errore. 
// Una volta fatto questo, proviamo a concatenare le promesse per restituire alla fine l'oggetto finale {nome: "John", età: 24}.

const isLogged = true;

function users(isLogged){
    return new Promise((resolve,reject)=>{
        if(isLogged == true){
            resolve(`🟢`);
        }else{
            reject(`Error! User is not logged ❌`)
        }
    })
}

const num = 0.9

function users2(){
    return new Promise((resolve, reject)=>{
        if(num > 0.5){
            resolve({name : `John`, age: 24})
        }else{
            reject(`Error: Invalid data❌`)
        }
    })
}


users(isLogged)
    .then(users2)
    .then((resolve) => console.log(resolve))
    .catch((err)=> console.log(err))


