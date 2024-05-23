// Prompt User (and autofill prompt)
const userInput = prompt(
  'Please list your desired Froyo-flavors, separated by commas without spaces.',
  'vanilla,vanilla,vanilla,strawberry,coffee,coffee'
)
// convert string to array
const flavorsArr = userInput.split(',');

// create function
const converToObj = function(arr) {
  const flavorsObj = {}; // define object
  for (let i = 0; i < arr.length; i++) {     // increment through the length of the array
    if (flavorsObj[arr[i]] === undefined) {  // check if key is undefined
      flavorsObj[arr[i]] = 1;  // define and add 1 if key is undefined
    } else {
      flavorsObj[arr[i]] += 1; // increment by +1 if key is defined
    }
  };
return flavorsObj;
}
// print table by usinfg function on array for user to see
console.table(converToObj(flavorsArr));