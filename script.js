// The sum function has a high numbers of parameters. How can we improve the code in order to make it accept an unknown numbers to sum?

function sum(...sum) {
    return sum.reduce((a,b) => a + b)
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Il parametro ...sum prenderà un numero qualsiasi di elementi che andrà a sua volta a inserire in un array
// Seguendo le regole degli array si fa il reduce