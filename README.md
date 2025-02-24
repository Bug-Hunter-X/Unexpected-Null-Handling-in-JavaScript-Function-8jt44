# Unexpected Null Handling in JavaScript Function

This repository showcases a common, yet potentially problematic, approach to handling null values in JavaScript function parameters.  The initial code implements a simple null check, returning 0 if either parameter is null. While this appears straightforward, it may mask the root cause of the null values and prevent thorough debugging.  The improved solution offers more robust error handling and logging.

## Bug Description
The primary issue lies in the implicit assumption that null values are expected and benign.  In many cases, a null value might signal an error in a preceding part of the application, and simply returning 0 might conceal this issue.  Better solutions involve proper error handling, perhaps throwing an exception or returning a meaningful error code, to highlight the underlying problem.

## Solution
The provided solution demonstrates a more robust approach. Instead of silently returning 0, it throws an error if either parameter is null. This forces the calling code to explicitly handle the potential error, promoting better error handling throughout the application.