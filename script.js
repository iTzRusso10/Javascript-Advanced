// Write a function called printAsyncName, which will take as parameters a callback and 
// a string (which will be name). The callback function will simply print "Hello". 
// The printAsyncName function will have to execute the callback function after an interval of 1 second. After an interval of 2 seconds, 
// we must print the name that we take as a parameter.

// The callback function must be an arrow function, can you also explain why?

// Scrivere una funzione chiamata printAsyncName, che prenderà come parametri una callback e una stringa (che sarà il nome).
//  La funzione di callback stamperà semplicemente "Hello". 
//  La funzione printAsyncName dovrà eseguire la funzione callback dopo un intervallo di 1 secondo. 
// Dopo un intervallo di 2 secondi, dobbiamo stampare il nome che abbiamo preso come parametro.
function printAsyncName(callback, name){

    setTimeout(() => {
        callback();
    }, 1000);

    setTimeout(() => {
        console.log(name);
    }, 2000);
}

printAsyncName(()=>{
    console.log("Hello")
}, "Giuseppe")


//Ho usato un arrow functions perchè è molto più facile da leggere e coincisa altrimenti avrei dovuto scrivere così:
// function callback() {
//     console.log('Hello');
//   }
  
//   printAsyncName(callback, 'John');
