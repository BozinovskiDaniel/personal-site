---
title: "Max Subarray"
description: "This is Leetcode's Maximum Subarray Interview Question"
date: "2021-08-25"
banner:
  src: "../../images/leetcode.jpeg"
  alt: "Leetcode"
  caption: 'You can find the problem <u><a target="_blank" href="https://leetcode.com/problems/maximum-subarray/">Here</a></u>'
categories:
  - "Easy Question"
keywords:
  - "Python"
  - "Leetcode"
  - "Array"
  - "Divide and Conquer"
  - "Dynamic Programming"
---

## Problem

Given an integer array nums, find the <b>contiguous subarray</b> (containing at least one number) which has the <b>largest sum</b> and return its sum.

A subarray is a <b>contiguous</b> part of an array.

<hr>

#### Example 1

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

#### Example 2

```
Input: nums = [1]
Output: 1
```

#### Example 3

```
Input: nums = [5,4,-1,7,8]
Output: 23
```

<hr>

### Explanation

So we essentially have to find a sub-array within the given nums array that gives us the largest sum. An important thing to note is that this sub-array has to be <b>contiguous</b>.

<hr>

## Solution

#### Approach: Kadane's Algorithm

We realise that to solve this problem in linear time <b>O(n)</b>, we can apply Kadane's algorithm which will allow us to find the sub-array with the maximum sum within a single iteration over the array.

The solution is explained below:

```Python
class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        maxSum = nums[0] # Set curr max
        currSum = maxSum

        # Loop over rest of array
        for i in range(1, len(nums)):

            # We either choose to add or start again
            currSum = max(nums[i] + currSum, nums[i])
            maxSum = max(maxSum, currSum)

        return maxSum
```

<hr>

#### Solution Explanation

We can see that within the code, we only used a single for loop.

- We initially set the maxSum to be the first element and the current sum to also be this first element

<br>

- We then iterated over the rest of the array and performed the following operations:
  - We take the max between:
    - The current element nums[i] vs
    - The sum of the current element (nums[i]) and the sum of the previous elements (that are currently in the sub-array)
  - This step allows us to check whether we begin a new contiguous sub-array (currSum = nums[i]) or continue with our previous sub-array (currSum = nums[i] + currSum)

<br>

- Now that we've decided to either continue our contiguous sub-array or start a new one, we can now check if the sum of the current sub-array is larger than the maxSum
  - If so, we update it
  - If not, we continue iterating

<br>

- After we've reached the end of the array of nums, we just return the maxSum variable, as it will hold the greatest sum of all the contiguous sub-arrays in nums.
