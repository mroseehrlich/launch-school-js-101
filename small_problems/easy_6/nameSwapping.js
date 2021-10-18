//const swapName = name => name.split(" ").reverse().join(', ');

const swapName = name => {
  let nameArray = name.split(' ');
  let lastName = nameArray.pop();
  return `${lastName}, ${nameArray.join(' ')}`;
};

//console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"