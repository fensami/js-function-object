//array vs object
let shoppingItems =['books', 'sunglass', 'mouse'];
//this is an array 
let friendsAge = [12,23,33,23,21,332,233];
//----------------
//this is a object
//----------------
let friendage ={
    rahim: 12,
    korim: 34,
    samad: 67,
    robi: 55,
    kazi : 45
}


let shoppingCart ={
    books: 3,
    sunglass: 1,
    keyborad : 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys)

const value = Object.values(shoppingCart);
console.log(value);

for(let i =0; i < keys.length ; i++){
    let propertyName = keys[i];
    let propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue)
}


//advance
//for in  loop 
for(let propertyName in shoppingCart){
    let value = shoppingCart[propertyName];
    console.log(propertyName, value);
}