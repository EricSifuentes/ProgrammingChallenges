/*
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim"
*/

function solution(inputString) { 
  if (inputString.indexOf("(") == -1) return inputString;
  let closedBracket = inputString.indexOf(")");

  while (closedBracket > -1) {
    let openBracket = inputString.substring(0, closedBracket).lastIndexOf("(");
    let leftstring = inputString.substring(0, openBracket);
    let subString = inputString.substring(openBracket + 1, closedBracket).split("").reverse().join("");
    let rightstring = inputString.substring(closedBracket + 1);
    inputString = leftstring + subString + rightstring;
    closedBracket = inputString.indexOf(")");
  }
  return inputString;
}
