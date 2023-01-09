//GROKKING

//Valid Palindrome
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

//Sum of Three Values 
function findTheSumOfThree(nums, target){
 //sorting the input list 
  nums = nums.sort((a,b) => {
    return a-b;  
  });
  //fix one element at a time and find the other two 
  for (let i =0; i < nums.length - 2; i++){
    //set the indexes of the two pointers
    //index of the first remaining elements 
    let low = i + 1; 
    //index the last of the remaining elements 
    let high = nums.length - 1; 
    while (low < high){
      //check if the sum of the triple is equal to the sum
      let triple = nums[i] + nums[low] + nums[high];
      //found a triple whose sum equals the target
      if (triple == target) {
        return true;
        //move low pointer forward if the triple sum is less than the required sum 
        } else if(triple < target) low ++; 
      //move the high pointer backwards if the triple sum is greater than the required sum 
      }else high--;
    }
  //three integers not found 
  return false;
}
