function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first()); // This returns an object === { prop1: "hi there" }
console.log(second()); // This returns undefined