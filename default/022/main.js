function sum(){
    var i, _sum = 0;    
    for(i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
        _sum += arguments[i];
    }   
    return _sum;
}
console.log('result : ' + sum(1,2,3,4));

function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2){
    console.log(two[0]);
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}

zero(); // zero.length 0 arguments 0 
one('val1', 'val2');  // one.length 1 arguments 2 
two('val1');  // two.length 2 arguments 1