// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);


// const dataInches = 144;
// const dadaFeet = dataInches / 12;
// console.log('data feet', dadaFeet);


function inchToFeet(inches){
    const feet  = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 100;
const nanaFeet = inchToFeet(nanaInches);
console.log(nanaFeet);



