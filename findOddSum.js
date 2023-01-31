function getSumOfAnArray(numbers){

    let sum = 0;
    for(let i =0 ; i < numbers.length; i++){
        
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum)
    }
    // console.log(numbers);
}


const myNumbers =[12,23,34,456,54,34,232,12];
getSumOfAnArray(myNumbers)