// GCD(Greatest Common Division) AND LCM(Least Common Multiple)
// Formula = GCD(a,b) = GCD(b,a % b)
// LCM LCM(a,b)=(a*b)/GCD(a,b)

// GCD;

let a = 60;
let b = 45;

//
// console.log(a, "a");
// console.log(b, "b");

while (b !== 0) {
  let reminder = a % b;
  a = b;
  b = reminder;
}

console.log("GCD IS", a);

// LCM
