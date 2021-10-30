let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalAges = Object.values(munsters).filter(familyMember => {
  return familyMember.gender === 'male';
}).map(familyMember => familyMember.age).reduce((sum, num) => sum + num);

console.log(totalAges);