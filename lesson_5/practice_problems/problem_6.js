let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let key in munsters) {
  let name = key.slice(0, 1).toUpperCase() + key.slice(1);
  let age = munsters[key].age;
  let gender = munsters[key].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
}