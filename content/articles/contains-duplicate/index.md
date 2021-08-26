---
title: "Contains Duplicate (Easy)"
description: "This is Leetcode's Contains Duplicate Interview Question"
date: "2021-08-27"
banner:
  src: "../../images/leetcode.jpeg"
  alt: "Leetcode"
  caption: 'You can find the problem <u><a target="_blank" href="https://leetcode.com/problems/contains-duplicate/">Here</a></u>'
categories:
  - "Interview Question"
keywords:
  - "Python"
  - "Leetcode"
  - "Array"
  - "Hash Table"
---

## Problem

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

<hr>

#### Example 1

```
Input: nums = [1,2,3,1]
Output: true
```

#### Example 2

```
Input: nums = [1,2,3,4]
Output: false
```

#### Example 3

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

<hr>

### Explanation

We just return True if there is a duplicate in the array, else return False.

<hr>

## Solution

There are many ways to solve this problem by I'll be demonstrating two ways in particular, one utilising a hash map and the other using Python's in-built length and set functionality.

#### Approach 1: Hash

This approach is implemented by looping over the array once and checking if the current number is saved to our hash map. If it is, we return True as this means we have a duplicate, else we add the number to the hash. If we've reached the end of the numbers and there hasn't been a duplicate, we return False.

```Python
class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """

        hashmap = {}

        for num in nums:

            if num not in hashmap:
                hashmap[num] = 1
            else:
                return True

        return False
```

#### Approach 2: Pythonic Way

This approach utilises python's `set()` function, which takes an array and removes all the duplicates in the array. We then compare the length of the set of numbers to the length of the original array. If the lengths are not equal, we know that we had duplicates within the array, else we didn't have any duplicates.

```
class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """

        return len(nums) != len(set(nums))
```
