const palindromes = function (word) {
    let split = word.toLowerCase().split('').filter(word => !['!','.','?',' ',','].includes(word));
    let cleanWord = split.join('');
    let reverse = split.reverse();
    let reverseWord = reverse.join('');
    return cleanWord === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
