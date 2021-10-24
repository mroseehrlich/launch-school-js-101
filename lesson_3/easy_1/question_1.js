let numbers = [1, 2, 3];
numbers[6] = 5;

/*
** This code does not raise an error.Instead, it assigns
** the value 5 to the array numbers at the index of 6.
** The indexes at 3, 4, and 5 are empty.
*/

// Bonus
// numbers[4];  what will this line return?
// This line returns undefined, though there is
// not an actual value held in the index of the array.

