# Structy Tasks (Only Coding Problems)

> Only tasks with the "notebook" icon (coding problems). No quizzes, welcome, or theory.

---

## 0. Introduction

* hey programmer
* max value
* longest word
* all even
* **is prime**
  - Write a function, `is_prime`, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.
  - A prime number is a number that is only divisible by two distinct numbers: 1 and itself.
  - Example: 7 is prime (only divisible by 1 and 7). 6 is not prime (divisible by 1, 2, 3, and 6).
  - Assume input is a positive integer.
  - Test cases: `is_prime(2)`, `is_prime(3)`, `is_prime(4)`, `is_prime(5)`, `is_prime(6)`, `is_prime(7)`, `is_prime(8)`, `is_prime(25)`, `is_prime(31)`, `is_prime(2017)`
  - **Solution (Python)**:
    ```python
    from math import sqrt, floor
    
    def is_prime(n):
      if n<2:
        return False
      for divisor in range(2,floor(sqrt(n)) +1):
        if n%divisor==0:
          return False
      return True
    ```
  - **Time Complexity**: O(√n) | **Space Complexity**: O(1)

---

## 1. Big O Notation

**Big O Notation** is a mathematical concept used to describe the performance of an algorithm by analyzing how its runtime or space requirements grow as the input size increases.

- **O(1)** — Constant time: execution time doesn't depend on input size
- **O(log n)** — Logarithmic time: execution time grows logarithmically
- **O(n)** — Linear time: execution time grows proportionally with input size
- **O(n log n)** — Linearithmic time: common in efficient sorting algorithms
- **O(n²)** — Quadratic time: execution time grows with the square of input size
- **O(n³)** — Cubic time: execution time grows with the cube of input size
- **O(2ⁿ)** — Exponential time: execution time doubles with each additional input
- **O(n!)** — Factorial time: extremely slow, used in permutation/combination problems

### Key Rules:
- Drop constants: O(2n) = O(n)
- Drop lower order terms: O(n² + n) = O(n²)
- Focus on worst-case scenario

---

* **fizz buzz**
  - Write a program that prints numbers from 1 to n.
  - For multiples of 3, print "Fizz" instead of the number.
  - For multiples of 5, print "Buzz" instead of the number.
  - For multiples of both 3 and 5, print "FizzBuzz" instead of the number.
  - Example: n=15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
  - **Solution (Python)**:
    ```python
    def fizz_buzz(n):
      for i in range(1, n + 1):
        if i % 15 == 0:
          print("FizzBuzz")
        elif i % 3 == 0:
          print("Fizz")
        elif i % 5 == 0:
          print("Buzz")
        else:
          print(i)
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(1)
* pairs

---

## 2. Hashing

**Hashing** uses a hash table (dictionary/map) data structure to store key-value pairs. Hash tables provide average O(1) lookup time, making them efficient for solving problems requiring quick data access and counting.

---

* **anagrams**
  - Write a function, `anagrams`, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.
  - Examples: `anagrams('restful', 'fluster') # -> True`, `anagrams('cats', 'tocs') # -> False`, `anagrams('elbow', 'below') # -> True`
  - Test cases: `anagrams('night', 'thing')`, `anagrams('abbc', 'aabc')`, `anagrams('po', 'popp')`
  - **Solution 1 (Sorting)**:
    ```python
    def anagrams(s1, s2):
      s1 = sorted(s1)
      s2 = sorted(s2)
      if s1 == s2:
        return True
      return False
    ```
    - **Time Complexity**: O(n log n) | **Space Complexity**: O(n)
  - **Solution 2 (Using Counter)**:
    ```python
    from collections import Counter
    
    def anagrams(s1, s2):
      s1_dict = Counter(s1)
      s2_dict = Counter(s2)
      return s1_dict == s2_dict
    ```
    - **Time Complexity**: O(n + m) | **Space Complexity**: O(n + m)
  - **Solution 3 (Using defaultdict)**:
    ```python
    from collections import defaultdict
    
    def anagrams(s1, s2):
      def build_dict(s):
        s_dict = defaultdict(int)
        for char in s:
          s_dict[char] += 1
        return s_dict
      
      return build_dict(s1) == build_dict(s2)
    ```
    - **Time Complexity**: O(n + m) | **Space Complexity**: O(n + m)
* **most frequent char**
  - Write a function, `most_frequent_char`, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.
  - Examples: `most_frequent_char('bookeeper') # -> 'e'`, `most_frequent_char('david') # -> 'd'`, `most_frequent_char('mississippi') # -> 'i'`
  - Test cases: `most_frequent_char('abby')`, `most_frequent_char('potato')`, `most_frequent_char('eleventennine')`
  - **Solution (Python)**:
    ```python
    def most_frequent_char(s):
      char_count = {}
      for char in s:
        if char not in char_count:
          char_count[char] = 1
        else:
          char_count[char] += 1
      answer = ["a", 0]
      for key in char_count:
        if char_count[key] > answer[1]:
          answer[0] = key
          answer[1] = char_count[key]
      return answer[0]
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(n)
* **pair sum**
  - Write a function, `pair_sum`, that takes in a list and a target sum as arguments. The function should return a tuple containing a pair of indices whose elements sum to the given target. The indices returned must be unique. There is guaranteed to be one such pair.
  - Examples: `pair_sum([3, 2, 5, 4, 1], 8) # -> (0, 2)`, `pair_sum([4, 7, 9, 2, 5, 1], 5) # -> (0, 5)`, `pair_sum([1, 6, 7, 2], 13) # -> (1, 2)`
  - Test cases: `pair_sum([4, 7, 9, 2, 5, 1], 3)`, `pair_sum([9, 9], 18)`, `pair_sum([6, 4, 2, 8], 12)`
  - **Solution (Python)**:
    ```python
    def pair_sum(numbers, target_sum):
      seen = {}
      index = 0
      for num in numbers:
        difference = target_sum - num
        if difference in seen:
          return (seen[difference], index)
        if num not in seen:
          seen[num] = index
        index += 1
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(n)
* **pair product**
  - Write a function, `pair_product`, that takes in a list and a target product as arguments. The function should return a tuple containing a pair of indices whose elements multiply to the given target. The indices returned must be unique. There is guaranteed to be one such pair.
  - Examples: `pair_product([3, 2, 5, 4, 1], 8) # -> (1, 3)`, `pair_product([3, 2, 5, 4, 1], 10) # -> (1, 2)`, `pair_product([4, 7, 9, 2, 5, 1], 35) # -> (1, 4)`
  - Test cases: `pair_product([4, 7, 9, 2, 5, 1], 5)`, `pair_product([4, 6, 8, 2], 16)`
  - **Solution (Python)**:
    ```python
    def pair_product(numbers, target_product):
      seen = {}
      index = 0
      for num in numbers:
        diff = target_product / num
        if diff in seen:
          return (seen[diff], index)
        if num not in seen:
          seen[num] = index
        index += 1
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(n)
* **intersection**
  - Write a function, `intersection`, that takes in two lists as arguments. The function should return a new list containing elements that are in both of the two lists. You may assume that each input list does not contain duplicate elements.
  - Examples: `intersection([4,2,1,6], [3,6,9,2,10]) # -> [2,6]`, `intersection([2,4,6], [4,2]) # -> [2,4]`, `intersection([4,2,1], [1,2,4,6]) # -> [1,2,4]`
  - Test cases: `intersection([0,1,2], [10,11])`, `intersection([1,2,3], [2,3,4])`
  - **Solution 1 (Set with Loop)**:
    ```python
    def intersection(a, b):
      my_set = {element for element in a}
      intersection = []
      for element in b:
        if element in my_set:
          intersection.append(element)
      return intersection
    ```
    - **Time Complexity**: O(n + m) | **Space Complexity**: O(min(n, m))
  - **Solution 2 (Set with List Comprehension)**:
    ```python
    def intersection(a, b):
      my_set = set(a)
      return [element for element in b if element in my_set]
    ```
    - **Time Complexity**: O(n + m) | **Space Complexity**: O(min(n, m))
  - **Solution 3 (Brute Force - O(n²))**:
    ```python
    def intersection(a, b):
      intersection = []
      for element in b:
        if element in a:
          intersection.append(element)
      return intersection
    ```
    - **Time Complexity**: O(n * m) | **Space Complexity**: O(min(n, m))
* **all unique**
  - Write a function, `all_unique`, that takes in an array. The function should return a boolean indicating whether or not the array contains unique items (no duplicates).
  - Examples: `all_unique(['q', 'r', 's', 'a']) # -> True`, `all_unique(['q', 'r', 's', 'a', 'r', 'z']) # -> False`, `all_unique(['cat', 'cat', 'dog']) # -> False`
  - Test cases: `all_unique(['a', 'b', 'c'])`, `all_unique([1, 2, 1])`, `all_unique([])`
  - **Solution 1 (Set Size Comparison)**:
    ```python
    def all_unique(items):
      unique_items = set(items)
      return len(unique_items) == len(items)
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(n)
  - **Solution 2 (Early Return with Set)**:
    ```python
    def all_unique(items):
      seen = set()
      for item in items:
        if item in seen:
          return False
        seen.add(item)
      return True
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(n)
* **intersection with dupes**
  - Write a function, `intersection_with_dupes`, that takes in two arrays as arguments. The function should return a new array containing elements that are common to both input arrays. The elements in the result should appear as many times as they occur in both input arrays.
  - Examples: `intersection_with_dupes(['a', 'b', 'c', 'b'], ['x', 'y', 'b', 'b']) # -> ['b', 'b']`, `intersection_with_dupes(['q', 'b', 'm', 's', 's', 's'], ['s', 'm', 's']) # -> ['m', 's', 's']`, `intersection_with_dupes(['t', 'v', 'u'], ['g', 'e', 'd', 'f']) # -> []`
  - Test cases: `intersection_with_dupes(['p', 'r', 'r', 'r'], ['r'])`, `intersection_with_dupes(['a', 'a', 'a', 'a'], ['a', 'a'])`, `intersection_with_dupes(['r'], ['p', 'r', 'r', 'r'])`
  - **Solution (Frequency Counting with Hash Map)**:
    ```python
    def intersection_with_dupes(a, b):
      def ele_count(elements):
        count = {}
        for ele in elements:
          if ele not in count:
            count[ele] = 0
          count[ele] += 1
        return count
      
      count1 = ele_count(a)
      count2 = ele_count(b)
      result = []
      for ele in count1:
        if ele in count2:
          for i in range(min(count1[ele], count2[ele])):
            result.append(ele)
      return result
    ```
  - **Time Complexity**: O(n + m) | **Space Complexity**: O(n + m)

---

## 3. Beginner Recursion

**Recursion** is a technique where a function calls itself to solve smaller instances of the same problem until reaching a base case. Every recursive function must have:
- **Base case**: When to stop recursing (usually when input is empty or minimal)
- **Recursive case**: How to break down the problem and call itself with simpler input

---

* **sum numbers recursive**
  - Write a function, `sum_numbers_recursive`, that takes in an array of numbers and returns the sum of all the numbers in the array. Solve this recursively.
  - Examples: `sum_numbers_recursive([5, 2, 9, 10]) # -> 26`, `sum_numbers_recursive([1, -1, 1, -1, 1, -1, 1]) # -> 1`, `sum_numbers_recursive([]) # -> 0`
  - Test cases: `sum_numbers_recursive([700, 70, 7])`, `sum_numbers_recursive([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1])`, `sum_numbers_recursive([0, 0, 0])`
  - **Solution (Python)**:
    ```python
    def sum_numbers_recursive(numbers):
      if len(numbers) == 0:
        return 0
      return numbers[0] + sum_numbers_recursive(numbers[1:])
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(n) (call stack depth)
* **factorial**
  - Write a function, `factorial`, that takes in a number n and returns the factorial of that number. The factorial of n is the product of all positive numbers less than or equal to n (n!). Solve this recursively. The factorial of 0 is defined to be 1.
  - Examples: `factorial(3) # -> 6`, `factorial(6) # -> 720`, `factorial(0) # -> 1`, `factorial(1) # -> 1`
  - Test cases: `factorial(5)`, `factorial(10)`, `factorial(13)`
  - **Solution (Python)**:
    ```python
    def factorial(n):
      if n == 0:
        return 1
      return n * factorial(n - 1)
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(n) (call stack depth)
* **sum of lengths**
  - Write a function, `sum_of_lengths`, that takes in a list of strings and returns the total length of all strings combined. Solve this recursively.
  - Examples: `sum_of_lengths(['goat', 'cat', 'purple']) # -> 13`, `sum_of_lengths(['bike', 'at', 'pencils', 'phone']) # -> 18`, `sum_of_lengths([]) # -> 0`
  - Test cases: `sum_of_lengths(['', ' ', '  '])`, `sum_of_lengths(['0', '313', '1234567890'])`, `sum_of_lengths(['a'])`
  - **Solution (Python)**:
    ```python
    def sum_of_lengths(strings):
      if not strings:
        return 0
      return len(strings[0]) + sum_of_lengths(strings[1:])
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(n) (call stack depth)
* **reverse string recursive**
  - Write a function, `reverse_string_recursive`, that takes in a string and returns the string with its characters in reverse order. Solve this recursively.
  - Examples: `reverse_string_recursive('hello') # -> 'olleh'`, `reverse_string_recursive('abcdefg') # -> 'gfedcba'`, `reverse_string_recursive('stopwatch') # -> 'hctawpots'`
  - Test cases: `reverse_string_recursive('')`, `reverse_string_recursive('a')`, `reverse_string_recursive('ab')`
  - **Solution (Python)**:
    ```python
    def reverse_string_recursive(s):
      if s == "":
        return ""
      return reverse_string_recursive(s[1:]) + s[0]
    ```
  - **Time Complexity**: O(n²) | **Space Complexity**: O(n) (call stack + string concatenation)
* **palindrome recursive**
  - Write a function, `palindrome_recursive`, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards (a palindrome). Solve this recursively.
  - Examples: `palindrome_recursive('pop') # -> True`, `palindrome_recursive('kayak') # -> True`, `palindrome_recursive('pops') # -> False`, `palindrome_recursive('rotator') # -> True`
  - Test cases: `palindrome_recursive('')`, `palindrome_recursive('a')`, `palindrome_recursive('ab')`, `palindrome_recursive('aba')`
  - **Solution (Python)**:
    ```python
    def palindrome_recursive(s):
      if len(s) <= 1:
        return True
      if s[0] == s[-1]:
        return palindrome_recursive(s[1:-1])
      else:
        return False
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(n) (call stack depth)
* **fibonacci**
  - Write a function, `fib`, that takes in a number n and returns the n-th number of the Fibonacci sequence. The 0-th number is 0, the 1-st number is 1. Each subsequent number is the sum of the previous two numbers. Solve this recursively.
  - Examples: `fib(0) # -> 0`, `fib(1) # -> 1`, `fib(3) # -> 2`, `fib(5) # -> 5`, `fib(6) # -> 8`
  - Test cases: `fib(2)`, `fib(4)`, `fib(7)`, `fib(10)`
  - **Solution 1 (Naive Recursion)**:
    ```python
    def fib(n):
      if n == 0 or n == 1:
        return n
      return fib(n - 1) + fib(n - 2)
    ```
    - **Time Complexity**: O(2ⁿ) | **Space Complexity**: O(n) (call stack depth)
  - **Solution 2 (Memoization)**:
    ```python
    def fib(n):
      memo = {}
      def _fib(n, memo):
        if n == 0 or n == 1:
          return n
        if n in memo:
          return memo[n]
        fib_n = _fib(n - 1, memo) + _fib(n - 2, memo)
        memo[n] = fib_n
        return memo[n]
      return _fib(n, memo)
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(n) (memoization cache + call stack)

---

## 4. Linked List I

**Linked Lists** are linear data structures where each element (node) contains a value and a reference to the next node. Unlike arrays, linked lists don't have fixed sizes and allow efficient insertion/deletion. Key operations:
- **Traversal**: O(n) - must visit each node sequentially
- **Insertion/Deletion**: O(1) if position is known, O(n) if we need to find it
- **Search**: O(n) - must check each node

Node structure: `Node { val: value, next: pointer_to_next_node }`

---

* **linked list values**
  - Write a function, `linked_list_values`, that takes in the head of a linked list. The function should return a list containing all values of the nodes in the linked list.
  - Examples: Head a->b->c->d returns `['a', 'b', 'c', 'd']`, Head x->y returns `['x', 'y']`
  - Test cases: Single node list, empty list scenario (if applicable), longer lists
  - **Solution (Iterative)**:
    ```python
    def linked_list_values(head):
      values = []
      current = head
      while current is not None:
        values.append(current.val)
        current = current.next
      return values
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(n) (output list)
* **sum list**
  - Write a function, `sum_list`, that takes in the head of a linked list containing numbers. The function should return the total sum of all values in the linked list.
  - Examples: Head with values [2, 8, 3, -1, 7] returns `19`, Head [38, 4] returns `42`
  - Test cases: Single negative number, all negative numbers, mixed positive/negative, single node
  - **Solution (Iterative)**:
    ```python
    def sum_list(head):
      total = 0
      current = head
      while current is not None:
        total += current.val
        current = current.next
      return total
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(1)
* **linked list find**
  - Write a function, `linked_list_find`, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
  - Examples: a->b->c->d with target 'c' returns `True`, same list with target 'q' returns `False`
  - Test cases: Target in middle, target at head, target not found, target at end
  - **Solution (Iterative)**:
    ```python
    def linked_list_find(head, target):
      current = head
      while current is not None:
        if current.val == target:
          return True
        current = current.next
      return False
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(1)
* **get node value**
  - Write a function, `get_node_value`, that takes in the head of a linked list and an index. The function should return the value of the node at the specified index (0-based). Return None if index is invalid.
  - Examples: a->b->c->d at index 2 returns `'c'`, at index 10 returns `None`
  - Test cases: Index 0 (head), middle index, out of bounds index, negative index
  - **Solution (Iterative)**:
    ```python
    def get_node_value(head, index):
      counter = 0
      current = head
      while current is not None:
        if counter == index:
          return current.val
        current = current.next
        counter += 1
      return None
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(1)
* **reverse list**
  - Write a function, `reverse_list`, that takes in the head of a linked list. The function should reverse the order of nodes in-place and return the new head of the reversed list.
  - Examples: a->b->c->d->e->f becomes f->e->d->c->b->a, x->y becomes y->x
  - Test cases: Single node, two nodes, longer list
  - **Solution (Iterative - In-place Pointer Reversal)**:
    ```python
    def reverse_list(head):
      previous = None
      current = head
      while current is not None:
        next_node = current.next
        current.next = previous
        previous = current
        current = next_node
      return previous
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(1)
* **zipper lists**
  - Write a function, `zipper_lists`, that takes in the heads of two linked lists. The function should zipper the two lists together by alternating nodes. If one list is longer, append remaining nodes. The function should return the head of the zippered list. Do this in-place.
  - Examples: (a->b->c) and (x->y->z) becomes (a->x->b->y->c->z)
  - Test cases: Equal length lists, first list longer, second list longer
  - **Solution (Iterative with Counter)**:
    ```python
    def zipper_lists(head_1, head_2):
      tracker = head_1
      current_1 = head_1.next
      current_2 = head_2
      count = 0
      while current_1 is not None and current_2 is not None:
        if count % 2 == 0:
          tracker.next = current_2
          current_2 = current_2.next
        else:
          tracker.next = current_1
          current_1 = current_1.next
        tracker = tracker.next
        count += 1
      tracker.next = current_1 if current_1 is not None else current_2
      return head_1
    ```
  - **Time Complexity**: O(n + m) | **Space Complexity**: O(1)
* **merge lists**
  - Write a function, `merge_lists`, that takes in the heads of two sorted linked lists. The function should merge them into a single sorted linked list. The function should return the head of the merged list. Do this in-place. Assume both lists have increasing sorted numbers.
  - Examples: (5->7->10->12->20->28) and (6->8->9->25) becomes (5->6->7->8->9->10->12->20->25->28)
  - Test cases: First list smaller, second list smaller, equal length
  - **Solution (Iterative with Dummy Head)**:
    ```python
    def merge_lists(head_1, head_2):
      dummy_head = Node(None)
      tracker = dummy_head
      while head_1 is not None and head_2 is not None:
        if head_1.val < head_2.val:
          tracker.next = head_1
          head_1 = head_1.next
        else:
          tracker.next = head_2
          head_2 = head_2.next
        tracker = tracker.next
      tracker.next = head_1 if head_1 is not None else head_2
      return dummy_head.next
    ```
  - **Time Complexity**: O(n + m) | **Space Complexity**: O(1)
* **is univalue list**
  - Write a function, `is_univalue_list`, that takes in the head of a linked list. The function should return a boolean indicating whether all nodes contain the exact same value.
  - Examples: (7->7->7) returns `True`, (7->7->4) returns `False`
  - Test cases: All same values, different values, single node, two nodes with same value
  - **Solution (Iterative)**:
    ```python
    def is_univalue_list(head):
      if head is None:
        return True
      head_val = head.val
      current = head.next
      while current is not None:
        if current.val != head_val:
          return False
        current = current.next
      return True
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(1)
* **longest streak**
  - Write a function, `longest_streak`, that takes in the head of a linked list. The function should return the length of the longest consecutive streak of the same value.
  - Examples: (5->5->7->7->7->6) returns `3` (longest streak is 7,7,7), (3->3->3->3->9->9) returns `4`
  - Test cases: Single streak at start, single streak at end, multiple equal streaks, all different, single node
  - **Solution (Single Pass)**:
    ```python
    def longest_streak(head):
      max_streak = 0
      current_streak = 0
      prev_val = None
      current = head
      while current is not None:
        if current.val == prev_val:
          current_streak += 1
        else:
          current_streak = 1
        prev_val = current.val
        if current_streak > max_streak:
          max_streak = current_streak
        current = current.next
      return max_streak
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(1)
* **remove node**
  - Write a function, `remove_node`, that takes in the head of a linked list and a target value. The function should delete the first node containing the target value and return the head. Do this in-place. Assume the target exists and list is non-empty.
  - Examples: (a->b->c->d->e->f) remove 'c' becomes (a->b->d->e->f)
  - Test cases: Remove first node, remove middle node, remove node before target exists
  - **Solution (Iterative with Previous Tracking)**:
    ```python
    def remove_node(head, target_val):
      if head.val == target_val:
        return head.next
      previous = head
      current = head.next
      while current is not None:
        if current.val == target_val:
          previous.next = current.next
          return head
        previous = current
        current = current.next
      return head
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(1)
* **insert node**
  - Write a function, `insert_node`, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value at the specified index (0-based). The head is at index 0. Return the head. Do this in-place. The index is not greater than the list length.
  - Examples: (a->b->c->d) insert 'x' at index 2 becomes (a->b->x->c->d)
  - Test cases: Insert at head (index 0), insert in middle, insert at end
  - **Solution (Iterative)**:
    ```python
    def insert_node(head, value, index):
      new_node = Node(value)
      if index == 0:
        new_node.next = head
        return new_node
      counter = 0
      current = head
      while current is not None:
        if counter == index - 1:
          new_node.next = current.next
          current.next = new_node
          return head
        current = current.next
        counter += 1
      return head
    ```
  - **Time Complexity**: O(n) | **Space Complexity**: O(1)

---

## 5. Binary Tree I

* depth first values
* breadth first values
* tree sum
* tree includes
* tree min value
* max root to leaf path sum
* tree path finder
* tree value count
* how high
* bottom right value
* all tree paths
* tree levels
* level averages
* leaf list

---

## 6. Graph I

* has path
* undirected path
* connected components count
* largest component
* shortest path
* island count
* minimum island
* closest carrot
* best bridge
* has cycle
* prereqs possible

---

## 7. Sliding Window

* max subarray sum size k
* max subarray product size k
* subarray target sum size k
* has substring anagram

---

## 8. Two Pointer

* is palindrome
* uncompress
* compress
* five sort
* is subsequence

---

## 9. Dynamic Programming

* fib
* tribonacci
* sum possible
* min change
* count paths
* max path sum
* non-adjacent sum
* summing squares
* counting change
* array stepper
* max palin subsequence
* overlap subsequence
* can concat
* quickest concat
* valid compound
* count compounds
* longest path
* semesters required

---

## 10. Stack

* reverse some chars
* paired parentheses
* befitting brackets
* decompress braces
* nesting score

---

## 11. Array and String

* running sum
* has subarray sum
* subarray sum count
* merge sort
* combine intervals
* binary search
* lexical order
* detect dictionary

---

## 12. Linked List II

* linked palindrome
* middle value
* linked list cycle
* undupe sorted linked list
* create linked list
* build a queue
* add lists

---

## 13. Binary Tree II

* lowest common ancestor
* flip tree
* lefty nodes
* binary search tree includes
* is binary search tree
* post order
* build tree in post
* build tree in pre
* is tree balanced

---

## 14. Heap

* heap insertion
* heap deletion
* kth-largest
* k smallest

---

## 15. Exhaustive Recursion

* subsets
* permutations
* create combinations
* grocery budget
* lining up
* possible paths
* parenthetical possibilities
* substitute synonyms

---

## 16. Graph II

* knight attack
* can color
* tolerant teams
* rare routing
* topological order
* safe cracking
* string search
* province sizes
* extra cable
* weighted graph min path
* lowest toll

---

## 17. Mixed Recall

* prefix product
* leaf layers
* max increasing subseq
* knightly number
* all trips
* has path sum
* knapsack
* virus spread
* positioning plants
* flatten tree
* best house build
* breaking boundaries
* token replace
* token transform

---

## TL;DR

Це чистий список задач (coding only), без:

* welcome
* quiz
* multiple choice
