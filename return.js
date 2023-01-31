function add(num1, num2){
    console.log(num1, num2);
    let sum = num1 + num2;
    // console.log(sum);
    return sum;
}
//add(45, 15);

let total =add(80, 20);
console.log('total',total)



// example
function bringSingara(money){
    let singaraPrice = 10;
    let quantity = money / singaraPrice;
    return quantity;

}

let singaras = bringSingara(200);
console.log('eating singaras :', singaras)