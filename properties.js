let shoppingCart ={
    books: 3,
    sunglass: 1,
    keyborad : 5,
    mouse: 1,
    pen: 25
}

let pencount = shoppingCart.pen;

//object change to array
let properties = Object.keys(shoppingCart);
console.log(properties);
//ans : [ 'books', 'sunglass', 'keyborad', 'mouse', 'pen' ]


//value gulake khuje nia ashbe
let propertiesValue = Object.values(shoppingCart);
console.log(propertiesValue);
//ans : [ 3, 1, 5, 1, 25 ]




let propertiyName = 'books';
let propertiyValue = shoppingCart[propertiyName];
console.log(propertiyName, propertiyValue);

// console.log(shoppingCart);


//properti er man change er jonno 

shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 30;
console.log(shoppingCart)