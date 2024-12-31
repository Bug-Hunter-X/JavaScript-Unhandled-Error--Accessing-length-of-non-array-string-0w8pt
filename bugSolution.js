function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  }
  if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; // Access length only if x is a string or array
  } else {
    return -1; // Or throw an error, or handle appropriately based on your application's needs
  }
}