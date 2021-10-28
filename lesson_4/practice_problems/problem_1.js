[1, 2, 3].filter(num => 'hi');

// The return value is a new array === [1, 2, 3] because 'hi' always evaluates
// as truthy and therefore the callback returns truthy in each
// iteration and returns the value of each index from the original array