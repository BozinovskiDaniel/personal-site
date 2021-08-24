---
title: "Valid Palindrome (Easy)"
description: "This is Leetcode's Valid Palindrome Interview Question"
date: "2021-08-24"
banner:
  src: "../../images/leetcode.jpeg"
  alt: "Leetcode"
  caption: 'Photo by <u><a href="https://leetcode.com/">Leetcode</a></u>'
categories:
  - "Interview Question (Easy)"
keywords:
  - "Python"
  - "Leetcode"
  - "Two Pointers"
  - "String"
---

## Problem

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

<hr>

#### Example 1

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

#### Example 2

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

<hr>

### Explanation

A palindrome is a string that is the same when it is reversed. To solve this problem, we can maintain 2 pointers and iterate through the characters forwards and backwards.

Whilst iterating, we check that the letters are the same, and if not we return False as the string cannot be a valid palindrome.

<hr>

## Solution

#### Approach 1: Two Pointers

The approach mentioned above with two pointers can be implemented as follows:

```Python
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        newS = ""

        # Remove non-alphanumeric chars
        # Remove letter casing
        for c in s:
            if c.isalnum():
                newS += c.lower()


        left = 0
        right = len(newS) -1

        while left <= right:
            if newS[left] != newS[right]: # Check if chars arent equal
                return False

            left += 1 # Move right
            right -=1 # Move left

        return True
```

#### Approach 2: Faster way using in-built Python

This approach uses more of Python's in-built functionality for reversing a list and removing alpha numeric characters. It is quicker than the method outlined above and requires significantly less lines of code. It is implemented as follows:

```Python
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        # Only add if char is alpha numeric
        s = ''.join(char for char in s if char.isalnum())
        s = s.lower() # Convert to lower case

        return s == s[::-1] # Check
```
