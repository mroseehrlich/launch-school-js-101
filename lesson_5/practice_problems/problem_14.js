let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = Object.values(obj).map((obj) => {
  if (obj.type === 'fruit') {
    let colors = obj.colors;
    return colors.map(color => color[0].toUpperCase()
      + color.slice(1));
  }

  if (obj.type === 'vegetable') {
    return obj.size.toUpperCase();
  }
});

console.log(arr);