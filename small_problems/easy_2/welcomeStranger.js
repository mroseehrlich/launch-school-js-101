const greetings = (name, profession) => {
  return (`Hello ${name.join(" ")}! Nice to have a ${profession.title} ${profession.occupation} around.`);
};

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);