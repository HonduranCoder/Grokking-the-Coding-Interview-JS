export function isPalindrome(s) {
  if (s < 0) return false;

  const string = s.toString();
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
