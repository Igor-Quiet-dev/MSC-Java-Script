console.log('You are at' +window.location);

let a;
let b;
let c;
let d;
let e;
let f;

function haveEnough(
    a = (parseInt(prompt('сколько у вас с собой есть денег '))),
    b = (parseInt(prompt('сколько вы купили яблок'))), 
    c = (parseInt(prompt('сколько вы купили батонов хлеба'))), 
    d = (parseInt(prompt('сколько стоит одно яблоко'))),
    e = (parseInt(prompt('сколько стоит один батон хлеба'))),
    f = b*d+c*e
    ) 
    {
    return (a>=f) ? document.body.innerHTML =  'Вам хватает денег на покупки': document.body.innerHTML =  'Вам не хватает денег';
}

console.log(haveEnough());
       


