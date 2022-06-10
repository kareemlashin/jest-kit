function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}

function exp(a, b) {
    return a ** b;
}

function sqrt(a, b) {
    return a ** (1 / b);
}

function fact(a, b) {
    return a ** b;
}
let arr =[1,2,3,4,5,6,7];
let obj ={
    name:'sachin',
    age:30,
    city:'pune',
    skills:['html','css','js']
}
module.exports = {
    add,
    sub,
    mul,
    div,
    mod,
    exp,
    sqrt,
    fact,
    arr,
    obj
}