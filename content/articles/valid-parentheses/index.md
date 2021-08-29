---
title: "Valid Parentheses"
description: "This is Leetcode's Valid Parentheses Interview Question"
date: "2021-08-29"
banner:
  src: "../../images/leetcode.jpeg"
  alt: "Leetcode"
  caption: 'You can find the problem <u><a target="_blank" href="https://leetcode.com/problems/valid-parentheses/">Here</a></u>'
categories:
  - "String"
keywords:
  - "Python"
  - "Leetcode"
  - "String"
  - "Stack"
---

## Problem

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

<hr>

#### Example 1

```
Input: s = "()"
Output: true
```

#### Example 2

```
Input: s = "()[]{}"
Output: true
```

#### Example 3

```
Input: s = "(]"
Output: false
```

#### Example 4

```
Input: s = "([)]"
Output: false
```

#### Example 5

```
Input: s = "{[]}"
Output: true
```

<hr>

### Explanation

We essentially need to find out if there is a normal matching set of parentheses in the given string.

<hr>

## Solution

#### Approach: Stack

We can solve this problem utilising the stack data structure. We loop over the characters in the string and check if the character is an opening bracket. If so, we add it to the stack, else we check if the stack has atleast 1 element and pop the element off. We then check that this popped symbol matches the current character. If not, we return False.

If we've made it through the entire string, we return True if the stack has no items in it.

```Python
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        opp = {"(":")", "[":"]", "{":"}"}
        stack = []

        for c in s:

            if c == "(" or c == "[" or c == "{":
                stack.append(c)
            else:
                if len(stack) > 0:
                    symbol = stack.pop()
                    if c != opp[symbol]:
                        return False
                else:
                    return False

        return (len(stack) == 0)
```
