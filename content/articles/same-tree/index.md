---
title: "Same Tree"
description: "This is Leetcode's Same Tree Interview Question"
date: "2021-08-29"
banner:
  src: "../../images/leetcode.jpeg"
  alt: "Leetcode"
  caption: 'You can find the problem <u><a target="_blank" href="https://leetcode.com/problems/same-tree/">Here</a></u>'
categories:
  - "Binary Tree"
keywords:
  - "Python"
  - "Leetcode"
  - "Tree"
  - "Depth First Search"
---

## Problem

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

<hr>

#### Example 1

```
Input: p = [1,2,3], q = [1,2,3]
Output: true
```

#### Example 2

```
Input: p = [1,2], q = [1,null,2]
Output: false
```

#### Example 3

```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

<hr>

### Explanation

We just need to find if the two given trees are the same

<hr>

## Solution

#### Approach: Recursion

We can solve this by simply using recursion. We initially begin by checking if the p and q nodes are not None, and if there values are equal. If all of our checks are okay, we do the same checks for each respective child node recursively

```Python
class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        # If both are none, True
        if p == None and q == None: return True

        # If one is None & not the other, return False
        elif (p == None and q != None) or (p != None and q == None):
            return False

        # If the values aren't equal, return Flase
        elif p.val != q.val: return False

        # Recurse down and compare left and right
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
```
