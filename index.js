// Iteration 1: Names and Input

// Iteration 2: Conditionals

// Iteration 3: Loops

//array - tem várias coisas dentro
//string - usar "x" e só guardar um texto

let hacker1 = "fabi";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "bona";
console.log(`The driver's name is ${hacker2}`);

//condicional
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
}

if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

let hacker1V1 = ""

for (let i = 0; i < hacker1.length; i++) {

  hacker1V1 = hacker1V1 + hacker1[i] .toUpperCase() + " "
  
}

// console.log(hacker1V1)

let hacker1V2 = ""

for (let i = hacker1.length - 1 ; i >= 0 ; i--) {

  hacker1V2 = hacker1V2 + hacker1[i]

}

console.log(hacker1V2)

//negativo (-1) = hacker1 vem antes do hacker 2
// positivo (1) = hacker 1 vem depois do hacker 2
// zero = esses dois nomes são iguais
if (hacker1.localeCompare(hacker2) < 0 ) {
console.log(`The driver's name goes first.`)
}

if (hacker1.localeCompare(hacker2) > 0 ) {
  console.log(`Yo, the navigator goes first, definitely.`)
  }

  if (hacker1.localeCompare(hacker2) === 0 ) {
    console.log(`What?! You both have the same name?`)
    }
  
    




