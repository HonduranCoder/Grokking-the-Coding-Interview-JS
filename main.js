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

//Linked List Cycle 
  //Helper Function
    //Linked List Node Class
class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export default LinkedListNode;

  //Helper Function
    //Printing Linked List with forward arrows 
function printListWithForwardArrow(linkedListNode) {
  let temp = linkedListNode;
  let result = "";
  i = 0;
  while (temp !== null && i < 7) {
    result += temp.data;
    temp = temp.next;

    if (i === 6){
      result += " (...)"
      break
    }

    if (temp !== null) result += " →  ";
    // if this is the last node, print null at the end

    else result += " → NULL"
    
    i++;
  }
  
  return result;
}

export default printListWithForwardArrow;

  //index.js 
import printListWithForwardArrow from "./print_list";
import LinkedList from "./linked_list";

function detectCycle(head) {
  var fast, i, j, last, slow, space1, space2;
  [slow, fast] = [head, head];
  [i, j] = [0, 0];
  [space1, space2, last] = [0, 2, 5];
  console.log("\tHead pointer:", head.data);
  console.log("\tSlow pointer:", slow.data);
  console.log("\tFast pointer:", fast.data);
  console.log("\t" + printListWithForwardArrow(head));
  console.log("\t" + "  ".repeat(6 * i) + "ŝf̂");

  // Run the loop until we reach the end of the
  // linked list or find a cycle
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    last -= 2;
    console.log("\n\tLoop index:", i);
    i += 1;
    j += 2;

    // Break the loop if fast pointer has reached at
    // the end of linked list
    if (fast === null) {
      console.log("\tSlow pointer:", slow.data);
      console.log("\tFast pointer: NULL");
      console.log("\tFast pointer has reached the end of the linked list.");
      break;
    } else {
      console.log("\tSlow pointer:", slow.data);
      console.log("\tFast pointer:", fast.data, "\n");
      console.log("\t" + printListWithForwardArrow(head));
    }

    if (slow === fast) {
      console.log("\t" + " ".repeat(6 * i - 4) + "ŝf̂");
      console.log(
        "\n\tBoth slow and fast pointers are pointing to the same node!"
      );
      return true;
    } else {
      if (last === -1) {
        console.log(
          "\t" +
          " ".repeat(6 * (space2 - 1) - (6 * space1 - 1) - 3) +
          "f̂ast  " +
          " ".repeat(6 * i - 14) +
          "ŝlow"
        );
        space2 += 2;
      }

      if (last === -3) {
        console.log(
          "\t" +
          " ".repeat(6 * (space2 - 1) - (6 * space1 - 1) - 5) +
          "f̂ast " +
          " ".repeat(6 * i - 12 - 10) +
          "ŝlow"
        );
        space2 += 2;
      }

      if (last > 0) {
        console.log(
          "\t" +
          " ".repeat(6 * i - (i - 1) - 1) + "ŝlow" +
          " ".repeat(6 * (j - 1) - 6 * i) +
          " f̂ast"
        );
      }
    }
  }

  return false;
}

function main() {
  input = [
    [2, 4, 6, 8, 10, 12],
    [1, 3, 5, 7, 9, 11],
    [0, 1, 2, 3, 4, 6],
    [3, 4, 7, 9, 11, 17],
    [5, 1, 4, 9, 2, 3],
  ];



    for (var i = 0; i < input.length; i++){
        inputLinkedList = new LinkedList()
        inputLinkedList.createLinkedList(input[i])
        if (i % 2 === 0){
            inputLinkedList.head.next.next.next.next.next.next =
                        inputLinkedList.head.next
        }
        console.log(i + 1 + ".\tInput:")
        console.log("\t", printListWithForwardArrow(inputLinkedList.head))
        console.log("\n\tProcessing...")

        var result = detectCycle(inputLinkedList.head) ? "True" : "False"
        
        console.log("\n\tDetected cycle =", result)
        console.log("-".repeat(100), "\n")
    }
}

main();
//Initialize both pointers as head
//Move both Pointers ar different rates 
//Check the equality of pointers 
class LinkedList {
    constructor() {
        this.head = null;
    //insertNodeAtHead method will insert a LinkedListNode at head of linked list
      this.insertNodeAtHead = function (node) {
       if (this.head != null){
         node.next = this.head; 
         this.head = node;
      } else this.head = node; 
    };
      //createLinkedList method will create the linked list using the given integer array with the help of InsertNodeAtHead method.
      this.createLinkedList = function (list){
        list.reverse().forEach((element) => {
          let newNode = new LinkedListNode(element);
          this.insertNodeAtHead(newNode);
        });
     };
      //display elements of the linked list
      this.display = function () {
       let result = "", 
           temp = this.head; 
        while(temp != null) {
          result += temp.data; 
          temp = temp.next; 
          if(temp != null) {
            result += " , "; 
          }
      }
        result += ""; 
        return result;
      };
   }
}
export default LinkedList;

//Middle of Linked List
  //Helper Function 
    //Template for printing the linked list with forward arrows
function printListWithForwardArrow(linkedListNode) {
    let temp = linkedListNode;
    let result = "";
    while (temp != null) {
        result += temp.data;
        temp = temp.next;
        if (temp != null) result += " → ";
        // if this is the last node, print null at the end
        else result += " → null";
    }
    return result;
}

export default printListWithForwardArrow;
  
   //Helper Function
    //Template for linked list node class
class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export default LinkedListNode;

   //Helper Function
    //import LinkedListNode from "./linked_list_node";

// Template for the linked list
class LinkedList {
    constructor() {
        this.head = null;

        // insertNodeAtHead method will insert a LinkedListNode at head
        // of a linked list.
        this.insertNodeAtHead = function (node) {
            if (this.head != null) {
                node.next = this.head;
                this.head = node;
            } else this.head = node;
        };

        // createLinkedList method will create the linked list using the
        // given integer array with the help of InsertAthead method.
        this.createLinkedList = function (list) {
            list.reverse().forEach((element) => {
                let newNode = new LinkedListNode(element);
                this.insertNodeAtHead(newNode);
            });
        };

        // This method will display the elements of the linked list.
        this.display = function () {
            let result = "",
                temp = this.head;
            while (temp != null) {
                result += temp.data;
                temp = temp.next;
                if (temp != null) {
                    result += ", ";
                }
            }
            result += "";
            return result;
        };
    }
}

export default LinkedList;

//Final
//import printListWithForwardArrow from "./print_list";
//import LinkedList from "./linked_list";
//function to fint the middle node of the linked list 

function getMiddelNode(head){
    //initally slow and fast pointer point to head
    let slow = head, 
    let fast = head; 
    //traverse the linked list until fast reaches the last node or NULL
    while (fast !== null && fast.next !== null){
    //move slow pointer one step ahead 
    slow = slow.next;
    //move fast pointer two steps ahead 
    fast= fast.next.next;
  }
    //return the slow pointer
    return slow; 
};

//Circular Array Loop
/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Helper Function
function nextIndex(currIndex, direction, arr){
  //Direction: if result is positive(true) -> forward direction.
  //Direction: if the result is negative(false) -> backward direction. 
  let currDirection = arr[currIndex] >= 0;
  //-1 tells us that we are breaking one condition
  if(currDirection !== direction) return -1; //direction should be the same throughout the loop.
    let nextIdx = (currIndex + arr[currIndex]) % arr.length;
  //if(nextIdx === currIndex) return -1; the array does not contain more than one element.
  //nextIdx -> loop the array when the index goes out of bound. 
  if(nextIdx < 0){ 
    nextIdx = nextIdx + arr.length;
  }

  if(nextIdx === currIndex) return -1;
    return nextIdx
}

var circularArrayLoop = function(arr) {
 for(let i=0;i<arr.length ;i++){
  let slow = i;
  let fast = i;
  let direction = arr[i] >= 0;

  while(true){
    slow = nextIndex(slow,direction,arr);
    fast = nextIndex(fast,direction,arr);

    if(fast !== -1){
      fast = nextIndex(fast,direction,arr);
    }

    if(slow === -1 || fast === -1 || slow === fast) break;
  }
   if(slow !== -1 && slow === fast) return true; 
 }
 return false
};

//Palindrome Linked List 
  // Template for linked list node class
class LinkedListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export default LinkedListNode;

  //import LinkedListNode from "./linked_list_node";
  //Template for the linked list
class LinkedList {
    constructor() {
        this.head = null;

        // insertNodeAtHead method will insert a LinkedListNode at head
        // of a linked list.
        this.insertNodeAtHead = function (node) {
            if (this.head != null) {
                node.next = this.head;
                this.head = node;
            } else this.head = node;
        };

        // createLinkedList method will create the linked list using the
        // given integer array with the help of InsertAthead method.
        this.createLinkedList = function (list) {
            list.reverse().forEach((element) => {
                let newNode = new LinkedListNode(element);
                this.insertNodeAtHead(newNode);
            });
        };

        //This method will display the elements of the linked list.
        this.display = function () {
            let result = "",
                temp = this.head;
            while (temp != null) {
                result += temp.data;
                temp = temp.next;
                if (temp != null) {
                    result += ", ";
                }
            }
            result += "";
            return result;
        };
    }
}

export default LinkedList;

  //Template for printing the linked list with forward arrows
function printListWithForwardArrow(linkedListNode) {
    let temp = linkedListNode;
    let result = "";
    while (temp != null) {
        result += temp.data;
        temp = temp.next;
        if (temp != null) result += " → ";
        // if this is the last node, print null at the end
        else result += " → null";
    }
    return result;
}

export default printListWithForwardArrow;
 
  //Template to reverse the linked list

function reverseLinkedList(slowPtr) {
  var next, reverse;
  reverse = null;

  while (slowPtr !== null) {
    next = slowPtr.next;
    slowPtr.next = reverse;
    reverse = slowPtr;
    slowPtr = next;
  }

  return reverse;
}

export default reverseLinkedList;

import printListWithForwardArrow from "./print_list";
import LinkedList from "./linked_list";
import reverseLinkedList from "./linked_list_reverse";

// Check palindrome in linkedList
function palindrome(head) {
  // Initialize variables with head
  var check, fast, midNode, revertData, savedOddMidnode, slow;
  slow = head;
  fast = head;
  revertData = null;
  midNode = head;

  //Traverse linkedList through fast and slow pointers to get the middle node
  while (fast && fast.next) {
    midNode = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  //Fast pointer of odd linked list will point to last node of linked list but but will point to NULL for even linked list
  savedOddMidnode = null;
  if (fast) {
    savedOddMidnode = slow;
    slow = slow.next;
  }

  //It will skip the first half
  midNode.next = null;

  //Pass middle node as a head to reverse function to revert the next half of linkedList
  revertData = reverseLinkedList(slow);

  //Pass second half reverted data to compareTwoHalves function to check the palindrome property
  check = false;
  check = compareTwoHalves(head, revertData);

  //Revert second half back to the original linked list
  revertData = reverseLinkedList(revertData);

  //Connect both halves
  //If linked list was of odd sized, connect the middle node first which was skipped while reverting the second half
  if (savedOddMidnode) {
    midNode.next = savedOddMidnode;
    savedOddMidnode.next = revertData;
  } else {
    midNode.next = revertData;
  }

  //Return true if there's only one node or both are pointing to NULL
  if (head === null || revertData === null) {
    return true;
  }

  if (check) {
    return true;
  }

  return false;
}

//Sliding Window 
export function findMaxSlidingWindow(nums, w) {
  const res = [];
  const q = [];

  for (let i = 0; i < nums.length; i++) {
    while (q.length - 1 >= 0 && nums[i] > q[q.length - 1]) q.pop();
    q.push(nums[i]);

    //when i + 1 - w >= 0, the window is fully overlapping nums
    const j = i + 1 - w;
    if (j >= 0) {
      res.push(q[0]);
      //if the biggest element in q is about to exit window, remove it from q
      if (nums[j] === q[0]) q.shift(); 
    }
  }
  return res;
};

//Minimum Window Subsequence
function minWindow(str1, str2) {
    //save the size of str1 and str2
    let sizeStr1 = str1.length,
        sizeStr2 = str2.length;

    //initialize length to a very large number (infinity)
    let length = Infinity;
    //initialize pointers to zero and the minSubsequence to an empty string
    let indexS1 = 0,
        indexS2 = 0,
        minSubsequence = "";

    //process every character of str1
    while (indexS1 < sizeStr1) {
        //check if the character pointed by indexS1 in str1 is the same as the character pointed by indexS2 in str2
        console.log(`\tIteration no. ${indexS1} starts`);
        if (str1[indexS1] == str2[indexS2]) {
            //if the pointed character is the same in both strings increment indexS2
            indexS2++;
            //check if indexS2 has reached the end of str2
            if (indexS2 == sizeStr2) {
                //at this point the str1 contains all characters of str2
                //initialize start to the index where all characters of str2 were present in str1
                let start = indexS1,
                    end = indexS1+1;
               //decrement pointer indexS2 and start a reverse loop
                indexS2--;
                while (indexS2 >= 0) {
                    //decrement pointer indexS2 until all characters ofstr2 are found in str1
                    if (str1[start] == str2[indexS2]) indexS2 -= 1;
                    //decrement start pointer everytime to find the starting point of the required subsequence
                    start -= 1;
                }
                start++;
                //check if length of sub sequence pointed by start and end pointers is less than current min length
                if (end - start < length) {
                    //update length if current sub sequence is shorter
                    length = end - start;
                    //update minimum subsequence string to this new shorter string
                    minSubsequence = str1.substring(start, end);
                }
            }
        }
        // Increment pointer indexS1 to check next character in str1
        indexS1++;
    }
    return minSubsequence;
}
