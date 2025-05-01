/**
 * Use this array of numbers if you want to
 * manually test your functions
 */
const numbers = [10, 13, 20, 25, 38, 35, 40];

// `filteredAndSquared` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return an array containing the squares of all numbers that are 20 or greater.
// example:
// filteredAndSquared(numbers); // => [400, 625, 1444, 1225, 1600]
function filteredAndSquared(numbers: number[]): number[] {
  // write your code here...
  let filtering = numbers.filter((num: number) => num >= 20);
  return filtering.map((num: number) => num * num); // replace empty array with what you see is fit
}

// `filteredAndTripled` function that:
// - Accepts "numbers" parameter of type "number[]".
// - Return an array of numbers, where each number is tripled if it is divisible by 5.
// example:
// filteredAndTripled(numbers); // => [30, 60, 75, 105, 120]
function filteredAndTripled(numbers: number[]): number[] {
  // write your code here...
  let filteringDivisibleByFive = numbers.filter((num: number) => num % 5 === 0);
  return filteringDivisibleByFive.map((num: number) => num * 3); // replace empty array with what you see is fit
}

export { filteredAndSquared, filteredAndTripled };
