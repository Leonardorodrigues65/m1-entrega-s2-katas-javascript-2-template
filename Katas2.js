function add(number1 , number2){

let resultado = number1 + number2

return resultado

}

console.log(add(2,4))


function multiply(number3 , number4){

let multi = 0

for(let i = 0 ; i < number4 ; i++){
    multi = add(number3 , multi)
}

  return multi

}

console.log(multiply(6,8))


function power(number5, number6){

let pow = 1 

for(let i = 0 ; i < number6; i++){
    pow = multiply(number5 , pow)
}

  return pow

}

console.log(power(2,8))


function factorial(number7){

let fac = 1

for(let i = 1 ; i <= number7 ; i++){
    fac = multiply(i , fac)
}

    return fac
}

console.log(factorial(4))