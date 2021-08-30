---
title: "Remove Nth Node from End of List"
description: "This is Leetcode's Remove Nth Node from End of List Interview Question"
date: "2021-08-30"
banner:
  src: "../../images/leetcode.jpeg"
  alt: "Leetcode"
  caption: 'You can find the problem <u><a target="_blank" href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/">Here</a></u>'
categories:
  - "Linked List"
keywords:
  - "Python"
  - "Leetcode"
  - "Linked List"
  - "Two Pointers"
---

## Problem

Given the head of a linked list, remove the nth node from the end of the list and return its head.

<hr>

#### Example 1

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

#### Example 2

```
Input: head = [1], n = 1
Output: []
```

#### Example 3

```
Input: head = [1,2], n = 1
Output: [1]
```

<hr>

### Explanation

We just remove the given "Nth" node, counting backwards from the end of the list

<hr>

## Solution

#### Approach: Hash

Within this solution, we essentially calculate the index of the node we have to remove by subtracting the given n index from the total number of nodes which we calculated in a separate function in O(n) time. We then perform 2 checks, being to see if the current node is None or the currents next node is None. If these checks are passed, we then check if the first node is the one that is being removed, else we traverse through the list and look for the index to remove. The time complexity of this algorithm is O(n + n) = O(n).

```Python
class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """

        totalNodes = self.countNodes(head)
        index = totalNodes - n

        curr = head

        # Checks
        if curr is None: return curr
        elif curr.next is None: return None

        # If first node
        if index == 0: return curr.next
        else:

            prev = None
            count = 0

            while curr:

                # Check if last node
                if (count == index) and (curr.next == None):
                    prev.next = None
                    return head

                # Else node must be somewhere in the middle
                elif count == index:
                    prev.next = curr.next
                    curr.next = None
                    return head

                prev = curr
                curr = curr.next
                count += 1

            return head


    # Count number of nodes in list
    def countNodes(self, head):
        if head == None: return 0
        return 1 + self.countNodes(head.next)
```
