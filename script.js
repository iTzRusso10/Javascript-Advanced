const isLogged = false;

function users(isLogged){
    return new Promise((resolve,reject)=>{
        if(isLogged == true){
            resolve(`🟢`);
        }else{
            throw new Error(`User is not Logged! ❌`)
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
    .finally(() => console.log(`GoodEvening!`))