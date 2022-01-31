const findTheOldest = function(people) {
    return (
        people.reduce(
            (acc, curr, index, arr) =>{
                const get_age = (person) =>{
                    return (typeof( person.yearOfDeath ) === 'number')?(person.yearOfDeath - person.yearOfBirth): (new Date().getFullYear() - person.yearOfBirth)
                };
                return (get_age(acc) > get_age(curr) )? acc : curr;
            }
            ,people[0]
        )
    )
};

/*
const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
console.log(findTheOldest(people).name);
*/
// Do not edit below this line
module.exports = findTheOldest;
