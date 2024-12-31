# JavaScript Unhandled Error: Accessing length of non-array/string

This repository demonstrates a common JavaScript error that occurs when attempting to access the `length` property of a variable that is not an array or string. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.

## Bug Description
The function `foo` in `bug.js` attempts to return the length of the input `x`. However, if `x` is neither an array nor a string (e.g., `null`, `undefined`, or a number), the code will throw a `TypeError`. 

## Solution
The `bugSolution.js` file provides a solution using type checking to handle non-array/string inputs gracefully.