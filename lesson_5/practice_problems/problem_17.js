function createUUID() {
  let chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuidArray = sections.map(val => {
    let sectionArray = [];

    for (let idx = 0; idx < val; idx += 1) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      let randomChar = chars[randomIndex];
      sectionArray.push(randomChar);
    }

    return sectionArray.join('');
  });

  return uuidArray.join('-');
}

console.log(createUUID());