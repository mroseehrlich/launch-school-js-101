let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageArray = Object.values(ages);
let minAge = Math.min(...ageArray);
console.log(minAge);