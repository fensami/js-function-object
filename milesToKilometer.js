function milesToKilometer(miles){
    const kilometers = miles * 1.67;
    return kilometers;
}

const dhaka = 150;
const dhakakilometer = milesToKilometer(dhaka);
console.log('dhakakilometer', dhakakilometer); 