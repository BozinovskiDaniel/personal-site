---
title: "Linked List Cycle"
description: "This is Leetcode's Linked List Cycle Interview Question"
date: "2021-08-27"
banner:
  src: "../../images/leetcode.jpeg"
  alt: "Leetcode"
  caption: 'You can find the problem <u><a target="_blank" href="https://leetcode.com/problems/linked-list-cycle/">Here</a></u>'
categories:
  - "Easy Question"
keywords:
  - "Python"
  - "Leetcode"
  - "Linked List"
  - "Hash Table"
---

## Problem

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

<hr>

#### Example 1

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

#### Example 2

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

#### Example 3

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

<hr>

### Explanation

We just need to find out if the "last" node points back to the list instead of pointing to null.

<hr>

## Solution

There are many ways to solve this problem by I'll be demonstrating two ways in particular, one utilising a hash map and the other using Python's in-built length and set functionality.

#### Approach: Hash

We implement this approach by initialising a hash map and beginning to traverse through the linked list. We do this with a while loop, checking if head is not null, and moving the pointer to the next node within the loop.

We then check if we have seen the current node in the hash map, and if so, we return True. Else, we save it and continue iterating.

```Python
class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        hashmap = {}

        while head:

            if head in hashmap: return True

            hashmap[head] = 1
            head = head.next

        return False
```
