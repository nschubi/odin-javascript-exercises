const getTheTitles = function(books) {
    const titles = Array.from(books).map(book => book.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
