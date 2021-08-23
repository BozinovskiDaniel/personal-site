---
title: "Two Sum Interview Question (Easy)"
description: "This is Leetcode's Two Sum Interview Question"
date: "2021-08-23"
banner:
  src: "../../images/leetcode.jpeg"
  alt: "Pneumonia Image Classification"
  caption: 'Photo by <u><a href="https://leetcode.com/">Leetcode</a></u>'
categories:
  - "Interview Question"
keywords:
  - "Python"
  - "Leetcode"
  - "Array"
  - "Hashmap"
---

## Problem

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

<hr>

#### Example 1

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

#### Example 2

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

#### Example 3

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

<hr>

## Solution

#### Naive Approach

A naive approach would be to look at every single pair, taking <b>O(n^<sup>2</sup>)</b> time. This would be implemented as follows:

```Python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        for i in range(len(nums)):

            for j in range(i+1, len(nums)):

                if nums[i] + nums[j] == target: # If target found
                    return [i,j]


```

#### Better Approach using a Hashmap

A significantly better approach would be to utilise a hash map, by saving numbers into it and checking if the complement exists within it. This instead takes <b>O(n)</b> time. If it does, we have found our indices. This would be implemented as follows:

```Python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        hashmap = {} # Initialise hashmap

        for i in range(len(nums)): # Loop over nums

            complement = target - nums[i] # Calculate complement

            if complement in hashmap: # Check if complement in hashmap
                return [hashmap[complement], i]

            hashmap[nums[i]] = i
```
