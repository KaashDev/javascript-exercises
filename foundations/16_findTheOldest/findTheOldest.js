const findTheOldest = function(people) {
    let oldest = {};
    oldest.yearOfBirth = 2000;
    oldest.yearOfDeath = 2000;

    for(let person of people){

        if(!(Object.hasOwn(person, "yearOfDeath"))){
            person.yearOfDeath = new Date().getFullYear();
        }   

        if((person.yearOfDeath - person.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)){
            oldest = person;
        }
    }
    return oldest;
    
};

// Do not edit below this line
module.exports = findTheOldest;
