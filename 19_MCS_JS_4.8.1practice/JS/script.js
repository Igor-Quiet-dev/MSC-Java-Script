console.log("You are at" + window.location);

let a;
let b;
let c;
let d;
let e;

function haveEnough(a, b, c, d, e) {
  var f = b * d + c * e;
  return a >= f
    ? (document.body.innerHTML = "Вам хватает денег на покупки")
    : (document.body.innerHTML = "Вам не хватает денег");
}

console.log(
  haveEnough(
    parseInt(prompt("сколько у вас с собой есть денег ")),
    parseInt(prompt("сколько вы купили яблок")),
    parseInt(prompt("сколько вы купили батонов хлеба")),
    parseInt(prompt("сколько стоит одно яблоко")),
    parseInt(prompt("сколько стоит один батон хлеба"))
  )
);
