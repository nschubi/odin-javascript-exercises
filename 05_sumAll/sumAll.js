const sumAll = function(a,b) {
    if(typeof a !== "number" || typeof b !== "number"){
        return "ERROR";
    }
    if(a < 0 || b < 0){
        return "ERROR";
    }
    let gr = a >= b ? a : b;
    let kl = a < b ? a : b;
    let sum = 0;
    for(let i = kl; i <= gr; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
