const repeatString = function(word, times=0) {
    let result = "";
    if(times < 0){
        return "ERROR";
    }
    while(times > 0){
        result += word;
        times--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
