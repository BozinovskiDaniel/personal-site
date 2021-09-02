---
title: "Minimum Window Substring"
description: "This is Leetcode's Minimum Window Substring Interview Question"
date: "2021-09-02"
banner:
  src: "../../images/leetcode.jpeg"
  alt: "Leetcode"
  caption: 'You can find the problem <u><a target="_blank" href="https://leetcode.com/problems/minimum-window-substring/">Here</a></u>'
categories:
  - "String"
keywords:
  - "Python"
  - "Leetcode"
  - "Hash"
  - "String"
  - "Sliding Window"
---

## Problem

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.

<hr>

#### Example 1

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes:
'A', 'B', and 'C' from string t.
```

#### Example 2

```
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```

#### Example 3

```
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```

<hr>

### Explanation

We essentially need to find the substring of minimum length (which is contiguous) that contains all the characters in the given string t.

<hr>

## Solution

There are generally two main approaches to solving this type of problem. One being looking at every substring and comparing to the minimum length every time which would be classified as the <b>Brute Force method</b>. This method would be extremely slow as its time complexity would be <b>O(n<sup>3</sup>)</b>.

<br>

We can actually solve this in a much more efficient manner (<b>linear time - O(n)</b>) using a sliding window approach, with two pointers `left` and `right`.

#### Approach: Hash map with Sliding Window

We essentially create a hash map for countT which represents all the letters in t and how many times each of them appears in t. We then begin our loop by setting our `left` pointer to index 0 and looping from 0 to the length of string s for pointer `right`.

<br>

We add each new character to the `currWindow` hash and check if the count of that char in the `currWindow` is the same as the count of that char in `countT`. If so, we increment our `charsWehave` as we now have a sufficient amount of one of the characters in `countT`.

<br>

After this, we perform a while loop which acts to minimise the length of substring by continuing to iterate if the chars we have is equal to the chars we need. If so, we update the current result if the length of the substring is less than the current result length. We then remove the left most character from our `currWindow`, and if this was apart of `countT`, we simply decrement the chars that we have.

We repeat this until we have reached the end of the string with our right pointer.

<br>

At the end, we simply return a substring of s sliced from index `result[0]` to index `result[0] + 1`. We add 1 to accout for the indices of loops starting at 0. We only return this substring if the results length is not `infinity`, else we just return the empty string as a result does not exist.

```Python
class Solution(object):
    def minWindow(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        # If t is empty, return the empty string
        if t == "": return ""

        countT = {} # Hash to maintain needed chars
        currWindow = {} # Hash to maintain chars we have

        # Create our hash for T (needed)
        for char in t:
            # Add count 1
            countT[char] = 1 + countT.get(char, 0)


        charsWeHave = 0 # Init: We have none
        charsWeNeed = len(countT) # The amount in T

        result = [-1, -1] # Initially no index
        resultLen = float("infinity") # Smallest

        left = 0 # Left end of window

        # Loop for right end of window
        for right in range(len(s)):

            char = s[right] # Save char

            # Add to current window
            currWindow[char] = 1 + currWindow.get(char, 0)

            # If char is in countT and our curr window has the
            # Required amount of chars
            if char in countT and currWindow[char] == countT[char]:
                charsWeHave += 1 # Add 1 to chars that we have

            # This is where we attempt to minimise
            # While we have the chars that are required
            # Move the window over by incrementing the left pointer
            while charsWeHave == charsWeNeed:

                # We update result and result len if
                # The new window (substring) is smaller
                # Than the current one
                if (right - left + 1) < resultLen:
                    result = [left, right]
                    resultLen = (right - left + 1)

                # Remove left most char in substring
                lChar = s[left]
                currWindow[lChar] -= 1

                # If that char was apart of countT and
                # The curr window of that char has a smaller count
                # Decrement the chars that we have
                if lChar in countT and currWindow[lChar] < countT[lChar]:
                    charsWeHave -= 1

                left += 1 # Move the left point over

        # If there is a result
        # I.e: The result length is not infinity
        if resultLen != float("infinity"):
            # We return a substring from index
            # minLIndex to minRIndex
            minLIndex, minRIndex = result
            return s[minLIndex:minRIndex+1]

        else:
            return "" # Else, we return the empty string
```
