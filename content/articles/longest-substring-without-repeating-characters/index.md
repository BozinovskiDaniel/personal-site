---
title: "Longest Substring w/o Dups (Medium)"
description: "This is Leetcode's Longest Substring without Repeating Characters Interview Question"
date: "2021-08-27"
banner:
  src: "../../images/leetcode.jpeg"
  alt: "Leetcode"
  caption: 'You can find the problem <u><a target="_blank" href="https://leetcode.com/problems/longest-substring-without-repeating-characters/">Here</a></u>'
categories:
  - "Interview Question"
keywords:
  - "Python"
  - "Leetcode"
  - "Hash"
  - "String"
  - "Sliding Window"
---

## Problem

Given a string s, find the length of the longest substring without repeating characters.

<hr>

#### Example 1

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

#### Example 2

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

#### Example 3

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

#### Example 4

```
Input: s = ""
Output: 0
```

<hr>

### Explanation

We need to return the length of the maximum increasing subsequence of the given array. We could attempt to solve this problem in a brute force way, but this would result in an O(2<sup>n</sup>) solution which is extremely slow. Instead, we will opt by utilising a sliding window approach that will allow us to achieve a linear time complexity.

<hr>

## Solution

#### Approach: Sliding Window with Hash map

This approach is implemented by first initialising our hashmap, our current max length string and two pointers, being left and right with index 0.

We then begin looping with a while loop, checking if the right pointer is less than the length of the string.
We then check if the letter at index right is in the hashmap:

If it isn't in the hash map, we save it to the hash map, and also update the current maximum string which will be the max between the current max value and the current maximum string, whilst increment the right pointer.

Else, if the letter is already in the hash-map, this means that we now have a repeated character. Hence, we now just remove the initial occurence of this letter with the left pointer and increment it.

We finally just return the maximum string length

```Python
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """

        hashmap = {}
        currMaxStr = 0

        left = 0
        right = 0

        while right < len(s):

            if s[right] not in hashmap:
                hashmap[s[right]] = right # Save to hash
                currMaxStr = max(len(hashmap), currMaxStr) # Update currMax
                right += 1 # Increment right

            else:
                hashmap.pop(s[left])
                left += 1 # Increment left


        return currMaxStr
```

As we can see, this solution is called a sliding window approach as we maintain 2 pointers which define the ends of the window, which get iterated every iteration and never reset/go backwards.
