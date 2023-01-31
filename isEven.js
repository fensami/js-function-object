function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);

    if(remainder === 0){
        // console.log('is even number')
        return true,"is even number";
    }
    else{
        // console.log('is odd number')
        return 'is odd number';
    }


}

const myNumberIsEven =isEven(49);
console.log(myNumberIsEven)