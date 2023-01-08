export function isPalindrome(s) {
  //check that any negative integer will return false;
  if (s < 0) return false;
  //converting our integer to a string to be able to point at indexes within our new string.
  const string = s.toString();
  //Left pointer -> starting index
  let left = 0;
  //Right pointer -> ending index
  let right = s.length - 1;
  //check if the values at the left and right pointer indexes in the string are equal 
  while (left <= right) {
    //if the values are not equal, return false 
    if (string[left] !== string[right]) {
      return false;
    }
    //if the values are equal: until the left pointer is equal or greater than our right pointer. 
    left++;
    right--;
  }
  //each value matches 
  return true;
}
