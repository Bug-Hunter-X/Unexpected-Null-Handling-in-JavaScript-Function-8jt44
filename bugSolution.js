function foo(a, b) {
  if (a === null || b === null) {
    throw new Error("Null values are not allowed for parameters a and b");
  }
  return a + b;
}

console.log(foo(5, 5)); // Output: 10
try {
  console.log(foo(null, 5)); // Throws an error
} catch (e) {
  console.error(e); // Handles the error
}
try {
  console.log(foo(5, null)); // Throws an error
} catch (e) {
  console.error(e); // Handles the error
}
