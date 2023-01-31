function factorial(number){
    let num = 1;
    let result =1;
    while(num <= number){
        result = result * num;
        num++;
    }
    return result;
}

const result = factorial(7);
console.log(result);

function factorialResult(num){
    let code = 1;
    let result2 = 1;
    while(code <= num){
        result2 = result2 * code;
        code++;
    }
    return result2;
}
const output = factorialResult(7);
console.log(output);











