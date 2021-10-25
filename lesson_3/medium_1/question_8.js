let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

// The data got updated by the messWithDemographics function
// because it mutates the munsters object directly.

/* Here is a nonmutating version
**function messWithDemographics(demoObject) {
**  let newFamily = {...demoObject}
**  return Object.values(newFamily).forEach(familyMember => {
**    newFamily["age"] = familyMember["age"] + 42;
**    newFamily["gender"] = "other";
**  });
** }
*/