const findTheOldest = function(people) {
    const person = people.reduce( (obj, p) => {
        let age = 'yearOfDeath' in p ? p.yearOfDeath - p.yearOfBirth : new Date().getFullYear() - p.yearOfBirth;
        if(age > obj.age){
            obj.name = p.name;
            obj.age = age;
        }
        return obj;
    }, {
        name: "",
        age: 0
    });
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
