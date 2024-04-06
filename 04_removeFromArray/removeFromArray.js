const removeFromArray = function(arr, ...args) {
    let filtered = arr.filter((value) => {
        return !args.includes(value)
    });
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
