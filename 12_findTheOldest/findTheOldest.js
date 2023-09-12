const findTheOldest = function(people) {
    
    for (let i = 0; i < people.length; i++) {
        if(!(people[i].hasOwnProperty('yearOfDeath'))){
            people[i]['yearOfDeath'] = 2023;
        }
    }
    console.log(people);
    sorted = people.sort((a,b) => (a.yearOfDeath-a.yearOfBirth) < (b.yearOfDeath-b.yearOfBirth) ? 1 : -1);
    console.log(sorted)
    return sorted.shift();
};

// Do not edit below this line
module.exports = findTheOldest;
