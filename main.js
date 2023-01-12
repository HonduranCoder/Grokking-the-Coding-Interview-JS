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

//Reverse Words in a String 
function reverseWords(sentence){
  //Replace multiple spaces with single space 
  sentence = sentence.trim().replace(/ +/g, ' ');
  //Convert the input strings to lists of characters as strings are immutable in JS
  sentence = [...sentence];
  //To reverse all words in the string, we will first reverse the entire string.
  let strLength = sentence.length;
  sentence = strReverse(sentence, 0, strLength - 1);
  //Now, all the words are in the desired location, but in reverse order: "Hello World" -> "dlroW olleH"
  //Iterate the sentence and reverse each word in place: "dlroW olleH" -> "World Hello"
  let start = 0, 
  let end = 0;
  
  while (true) {
    //find the start index of each word by detectiung spaces. 
    while (start < sentence.length && sentence[start] == " ") start += 1; 
    if(start == strLength) break; 
    //find the end index of the word. 
    end = start + 1; 
    while(end < strLength && sentence[end] != " ") end += 1; 
    //use helper function to reverse the word in-place 
    sentence = strReverse(sentence, start, end - 1); 
    start = end; 
    }
  return sentence.join("")
  }

//Valid Palindrome II
  //Helper function
function is_palindrome(s, left, right){
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        ++left;
        --right;
    }
    return true;
};

export function isPalindrome(s) {
    //is s a palindrome
    let left = 0
    let right = s.length - 1;

    while(left < right){
        if(s[left] !== s[right]){
            //if s isn't a palindrome, try again skipping the character at the left pointer
            if(is_palindrome(s, left+1, right)){
                return true
            }
            //if s still isn't a palindrome, try again skipping the character at the right pointer
            if(is_palindrome(s, left, right-1)){
                return true
            }
            // We can't make s a palindrome by removing one character
            return false
        }
        ++left;
        --right;
    }
    return true;
};

//Happy Number 
  //Helper Function to calculate the squared sum of digits of the input number. 
export default function sumDigits(number) {
    //calculate the sum of the digits 
    let totalSum = 0;
    //loop iteration number
    while (number > 0) {
        let temp = Math.floor(number / 10),
            //find the last digit of the given number by taking its modulus with 10.
            digit = number % 10;
        number = temp;
        //store squared sum of digit 
        totalSum += digit ** 2;
    }
    return totalSum;
}

export function isHappyNumber(n){
    //track cycled numbers
    const hashMap = {}; 
    //modifying n (while n is different than 1 and the property n doesn't exist in hashMap)
    while (n !== 1 && !hashMap[n]) {
        //put n in hashMap if it doesn't exist
        hashMap[n] = true; 
        //transform n 
        n = sumDigits(n);
    }
    //evaluate to either true or false 
    return n===1;
}
