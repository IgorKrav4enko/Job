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

**Binary Trees** are hierarchical data structures where each node has at most two children (left and right). Tree traversal techniques (DFS, BFS) are fundamental for solving tree problems.

---

* **depth first values** - !!!
* **breadth first values** - !!!
* **tree sum** - !!!
* **tree includes** - !!!
* **tree min value** - !!!
* **max root to leaf path sum** - !!!
* **tree path finder** - !!!
* **tree value count** - !!!
* **how high** - !!!
* **bottom right value** - !!!
* **all tree paths** - !!!
* **tree levels** - !!!
* **level averages** - !!!
* **leaf list** - !!!

---

## 6. Graph I

**Graph Theory** deals with structures of nodes and edges. Problems involve path finding, connectivity, and cycle detection using DFS and BFS traversals.

---

* **has path** - !!!

* **undirected path**
  - Write a function, `undirected_path`, that takes in a list of edges and two nodes (node_A, node_B). Return True if there's a path between the nodes.
  - The graph is undirected (connections go both ways).
  - Example: edges = [('i','j'), ('k','i'), ('m','k'), ('k','l'), ('o','n')] and nodes 'j', 'm' → True
  - **Solution (DFS)**:
    ```python
    def undirected_path(edges, node_A, node_B):
      graph = {}
      for a, b in edges:
        if a not in graph:
          graph[a] = []
        if b not in graph:
          graph[b] = []
        graph[a].append(b)
        graph[b].append(a)
      return has_path(graph, node_A, node_B, set())
    
    def has_path(graph, src, dst, visited):
      if src == dst:
        return True
      if src in visited:
        return False
      visited.add(src)
      for neighbor in graph[src]:
        if has_path(graph, neighbor, dst, visited):
          return True
      return False
    ```
    - **Time Complexity**: O(n + e) | **Space Complexity**: O(n)

* **connected components count**
  - Write a function, `connected_components_count`, that takes in an adjacency list of an undirected graph. Return the number of connected components.
  - **Solution (BFS)**:
    ```python
    from collections import deque
    
    def connected_components_count(graph):
      visited = set()
      component_count = 0
      for node in graph:
        if node not in visited:
          queue = deque([node])
          component_count += 1
          while queue:
            current = queue.popleft()
            if current in visited:
              continue
            visited.add(current)
            for neighbor in graph[current]:
              if neighbor not in visited:
                queue.append(neighbor)
      return component_count
    ```
    - **Time Complexity**: O(n + e) | **Space Complexity**: O(n)

* **largest component**
  - Write a function, `largest_component`, that takes in an adjacency list. Return the size of the largest connected component.
  - **Solution (BFS)**:
    ```python
    def largest_component(graph):
      visited = set()
      max_size = 0
      for node in graph:
        if node not in visited:
          size = 0
          queue = deque([node])
          while queue:
            current = queue.popleft()
            if current in visited:
              continue
            visited.add(current)
            size += 1
            for neighbor in graph[current]:
              if neighbor not in visited:
                queue.append(neighbor)
          max_size = max(max_size, size)
      return max_size
    ```
    - **Time Complexity**: O(n + e) | **Space Complexity**: O(n)

* **shortest path** - !!!

* **island count**
  - Write a function, `island_count`, that takes in a grid with 'W' (water) and 'L' (land). Return the number of islands.
  - An island is a vertically or horizontally connected region of land.
  - **Solution (DFS)**:
    ```python
    def island_count(grid):
      visited = set()
      count = 0
      for r in range(len(grid)):
        for c in range(len(grid[0])):
          if explore(grid, r, c, visited):
            count += 1
      return count
    
    def explore(grid, r, c, visited):
      if not (0 <= r < len(grid) and 0 <= c < len(grid[0])):
        return False
      if grid[r][c] == 'W' or (r, c) in visited:
        return False
      visited.add((r, c))
      explore(grid, r-1, c, visited)
      explore(grid, r+1, c, visited)
      explore(grid, r, c-1, visited)
      explore(grid, r, c+1, visited)
      return True
    ```
    - **Time Complexity**: O(r·c) | **Space Complexity**: O(r·c)

* **minimum island**
  - Write a function, `minimum_island`, that takes in a grid. Return the size of the smallest island.
  - **Solution (DFS)**:
    ```python
    def minimum_island(grid):
      visited = set()
      min_size = float('inf')
      for r in range(len(grid)):
        for c in range(len(grid[0])):
          size = explore_size(grid, r, c, visited)
          if size > 0:
            min_size = min(min_size, size)
      return min_size
    
    def explore_size(grid, r, c, visited):
      if not (0 <= r < len(grid) and 0 <= c < len(grid[0])):
        return 0
      if grid[r][c] == 'W' or (r, c) in visited:
        return 0
      visited.add((r, c))
      size = 1
      size += explore_size(grid, r-1, c, visited)
      size += explore_size(grid, r+1, c, visited)
      size += explore_size(grid, r, c-1, visited)
      size += explore_size(grid, r, c+1, visited)
      return size
    ```
    - **Time Complexity**: O(r·c) | **Space Complexity**: O(r·c)

* **closest carrot**
  - Write a function, `closest_carrot`, that takes in a grid, starting row, and column. Find the shortest path to a carrot ('C').
  - 'X' is a wall, 'O' is open space. Move up/down/left/right. Return distance or -1 if unreachable.
  - **Solution (BFS)**:
    ```python
    from collections import deque
    
    def closest_carrot(grid, sr, sc):
      visited = {(sr, sc)}
      queue = deque([(sr, sc, 0)])
      while queue:
        r, c, steps = queue.popleft()
        if grid[r][c] == 'C':
          return steps
        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:
          nr, nc = r + dr, c + dc
          if 0 <= nr < len(grid) and 0 <= nc < len(grid[0]):
            if grid[nr][nc] != 'X' and (nr, nc) not in visited:
              visited.add((nr, nc))
              queue.append((nr, nc, steps + 1))
      return -1
    ```
    - **Time Complexity**: O(r·c) | **Space Complexity**: O(r·c)

* **best bridge** - !!!

* **has cycle**
  - Write a function, `has_cycle`, that takes in an adjacency list of a directed graph. Return True if the graph contains a cycle.
  - **Solution (DFS with states)**:
    ```python
    def has_cycle(graph):
      visiting = set()
      visited = set()
      for node in graph:
        if cycle_detect(graph, node, visiting, visited):
          return True
      return False
    
    def cycle_detect(graph, node, visiting, visited):
      if node in visited:
        return False
      if node in visiting:
        return True
      visiting.add(node)
      for neighbor in graph[node]:
        if cycle_detect(graph, neighbor, visiting, visited):
          return True
      visiting.remove(node)
      visited.add(node)
      return False
    ```
    - **Time Complexity**: O(n + e) | **Space Complexity**: O(n)

* **prereqs possible** - !!!

---

## 7. Sliding Window

**Sliding Window** technique maintains a window of elements and efficiently solves problems by sliding the window across the input while updating a calculation or state.

---

* **max subarray sum size k** - !!!
* **max subarray product size k** - !!!
* **subarray target sum size k** - !!!
* **has substring anagram** - !!!

---

## 8. Two Pointer

**Two Pointer** technique uses two pointers moving through an array, often converging from opposite ends or moving in the same direction at different speeds.

---

* **is palindrome** - !!!
* **uncompress** - !!!
* **compress** - !!!
* **five sort** - !!!
* **is subsequence** - !!!

---

## 9. Dynamic Programming

**Dynamic Programming** solves complex problems by breaking them into overlapping subproblems and storing results to avoid redundant calculations.

---

* **fib** - !!!

* **tribonacci** - !!!

* **sum possible** - !!!

* **min change** - !!!

* **count paths** - !!!

* **max path sum** - !!!

* **non-adjacent sum** - !!!

* **summing squares** - !!!

* **counting change** - !!!

* **array stepper** - !!!

* **max palin subsequence**
  - Write a function, `max_palin_subsequence`, that takes in a string. Return the length of the longest palindromic subsequence.
  - A subsequence maintains relative order but doesn't need to be contiguous.
  - Examples: `max_palin_subsequence('luwxult') # -> 5`, `max_palin_subsequence('xyzaxxzy') # -> 6`
  - **Solution (Memoization)**:
    ```python
    def max_palin_subsequence(string):
      memo = {}
      return _max_palin_subsequence(string, 0, len(string) - 1, memo)
    
    def _max_palin_subsequence(string, start, end, memo):
      if (start, end) in memo:
        return memo[(start, end)]
      if start > end:
        return 0
      if start == end:
        return 1
      if string[start] == string[end]:
        result = 2 + _max_palin_subsequence(string, start + 1, end - 1, memo)
      else:
        left = _max_palin_subsequence(string, start + 1, end, memo)
        right = _max_palin_subsequence(string, start, end - 1, memo)
        result = max(left, right)
      memo[(start, end)] = result
      return result
    ```
    - **Time Complexity**: O(n²) | **Space Complexity**: O(n²)

* **overlap subsequence** - !!!

* **can concat** - !!!

* **quickest concat**
  - Write a function, `quickest_concat`, that takes in a string and a list of words. Return the minimum number of words to concatenate and build the string.
  - You may use words multiple times. Return -1 if impossible.
  - Examples: `quickest_concat('caution', ['ca', 'ion', 'caut', 'ut']) # -> 2`
  - **Solution (Memoization)**:
    ```python
    def quickest_concat(s, words):
      result = _quickest_concat(s, words, {})
      return -1 if result == float('inf') else result
    
    def _quickest_concat(s, words, memo):
      if s in memo:
        return memo[s]
      if len(s) == 0:
        return 0
      concats = float('inf')
      for word in words:
        if s.startswith(word):
          concats = min(concats, 1 + _quickest_concat(s[len(word):], words, memo))
      memo[s] = concats
      return memo[s]
    ```
    - **Time Complexity**: O(n² · m) | **Space Complexity**: O(n²)

* **valid compound** - !!!

* **count compounds** - !!!

* **longest path**
  - Write a function, `longest_path`, that takes in a node of a directed acyclic graph. Return the length of the longest path in the graph.
  - **Solution (DFS with Memoization)**:
    ```python
    def longest_path(graph):
      memo = {}
      def dfs(node):
        if node in memo:
          return memo[node]
        max_len = 0
        for neighbor in graph.get(node, []):
          max_len = max(max_len, 1 + dfs(neighbor))
        memo[node] = max_len
        return max_len
      return max(dfs(node) for node in graph) if graph else 0
    ```
    - **Time Complexity**: O(v + e) | **Space Complexity**: O(v)

* **semesters required**
  - Given a list of course prerequisites, return the minimum number of semesters to complete all courses.
  - Prerequisite format: ['prereq', 'course'] means prereq must be taken before course.
  - **Solution (Topological Sort with DFS)**:
    ```python
    def semesters_required(courses):
      graph = {course: [] for course in courses}
      for prereq, course in courses:
        graph[course].append(prereq)
      memo = {}
      def dfs(course):
        if course in memo:
          return memo[course]
        if not graph[course]:
          return 1
        max_semesters = 0
        for prereq in graph[course]:
          max_semesters = max(max_semesters, dfs(prereq))
        memo[course] = max_semesters + 1
        return memo[course]
      return max(dfs(course) for course in graph) if courses else 0
    ```
    - **Time Complexity**: O(v + e) | **Space Complexity**: O(v)

---

## 10. Stack

**Stack** is a LIFO data structure. Stack problems often involve balanced parentheses, nested structures, and reversing operations.

---

* **reverse some chars** - !!!

* **paired parentheses**
  - Write a function, `paired_parentheses`, that takes in a string as argument. The string contains opening and closing parentheses. Your function should return a boolean indicating whether or not the parentheses are well formed.
  - Well-formed parentheses means every opening parenthesis `(` has a matching closing parenthesis `)` in the correct order.
  - Examples: `paired_parentheses('(david)') # -> True`, `paired_parentheses('()(water)()') # -> True`, `paired_parentheses('()(water('))  # -> False`
  - Test cases: `paired_parentheses('(')`, `paired_parentheses(')')`, `paired_parentheses('')`, `paired_parentheses('()')`, `paired_parentheses('()()c()')`
  - **Solution 1 (Stack)**:
    ```python
    def paired_parentheses(string):
      stack = []
      for char in string:
        if char == '(':
          stack.append(char)
        elif char == ')':
          if not stack:
            return False
          stack.pop()
      return len(stack) == 0
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(n)
  - **Solution 2 (Counter)**:
    ```python
    def paired_parentheses(string):
      count = 0
      for char in string:
        if char == '(':
          count += 1
        elif char == ')':
          if count == 0:
            return False
          count -= 1
      return count == 0
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(1)

* **befitting brackets** - !!!

* **decompress braces** - !!!

* **nesting score** - !!!

---

## 11. Array and String

**Arrays and Strings** are fundamental data structures for searching, sorting, interval management, and pattern matching.

---

* **running sum** - !!!

* **has subarray sum** - !!!

* **subarray sum count** - !!!

* **merge sort**
  - Write a function, `merge_sort`, that takes in a list of numbers. Return a new list with elements sorted in ascending order.
  - Your function must implement the merge sort algorithm.
  - Examples: `merge_sort([10, 4, 42, 5, 8, 100]) # -> [4, 5, 8, 10, 42, 100]`
  - **Solution (Divide and Conquer)**:
    ```python
    def merge_sort(nums):
      if len(nums) <= 1:
        return nums
      mid = len(nums) // 2
      left = merge_sort(nums[:mid])
      right = merge_sort(nums[mid:])
      return merge(left, right)
    
    def merge(list1, list2):
      sorted_list = []
      i = j = 0
      while i < len(list1) and j < len(list2):
        if list1[i] <= list2[j]:
          sorted_list.append(list1[i])
          i += 1
        else:
          sorted_list.append(list2[j])
          j += 1
      sorted_list.extend(list1[i:])
      sorted_list.extend(list2[j:])
      return sorted_list
    ```
    - **Time Complexity**: O(n log n) | **Space Complexity**: O(n)

* **combine intervals**
  - Write a function, `combine_intervals`, that takes in a list of intervals (tuples of start, end). Combine overlapping intervals and return a list of combined intervals.
  - Example: `combine_intervals([(1,4), (12,15), (3,7), (8,13)]) # -> [(1,7), (8,15)]`
  - Can return combined intervals in any order.
  - **Solution (Sorting)**:
    ```python
    def combine_intervals(intervals):
      sorted_intervals = sorted(intervals)
      combined = [sorted_intervals[0]]
      for current in sorted_intervals[1:]:
        last = combined[-1]
        if current[0] <= last[1]:
          combined[-1] = (last[0], max(last[1], current[1]))
        else:
          combined.append(current)
      return combined
    ```
    - **Time Complexity**: O(n log n) | **Space Complexity**: O(n)

* **binary search**
  - Write a function, `binary_search`, that takes in a sorted list and a target. Return the index where the target is found, or -1 if not found.
  - Assume the array contains unique numbers sorted in increasing order.
  - Your function must implement the binary search algorithm.
  - **Solution (Recursive)**:
    ```python
    def binary_search(numbers, target, low=0, high=None):
      if high is None:
        high = len(numbers) - 1
      if low > high:
        return -1
      mid = (low + high) // 2
      if numbers[mid] == target:
        return mid
      elif numbers[mid] < target:
        return binary_search(numbers, target, mid + 1, high)
      else:
        return binary_search(numbers, target, low, mid - 1)
    ```
    - **Time Complexity**: O(log n) | **Space Complexity**: O(log n)

* **lexical order**
  - Write a function, `lexical_order`, that takes in 2 words and an alphabet string. Return True if word_1 appears before word_2 in lexical order according to the given alphabet.
  - The alphabet may be any arbitrary string of lowercase letters.
  - Examples: `lexical_order('apple', 'dock', alphabet) # -> True`
  - **Solution (Comparison)**:
    ```python
    def lexical_order(word_1, word_2, alphabet):
      for i in range(min(len(word_1), len(word_2))):
        rank1 = alphabet.find(word_1[i])
        rank2 = alphabet.find(word_2[i])
        if rank1 < rank2:
          return True
        elif rank1 > rank2:
          return False
      return len(word_1) <= len(word_2)
    ```
    - **Time Complexity**: O(min(m, n)) | **Space Complexity**: O(1)

* **detect dictionary**
  - Write a function, `detect_dictionary`, that takes in a dictionary (list) of words and an alphabet string. Return True if all words are lexically ordered according to the alphabet.
  - **Solution (Validation)**:
    ```python
    def detect_dictionary(dictionary, alphabet):
      for i in range(len(dictionary) - 1):
        if not lexical_order(dictionary[i], dictionary[i + 1], alphabet):
          return False
      return True
    ```
    - **Time Complexity**: O(n · m) | **Space Complexity**: O(1)

---

## 12. Linked List II

**Advanced Linked List** operations include cycle detection, palindromes, and list arithmetic.

---

* **linked palindrome**
  - Write a function, `linked_palindrome`, that takes in the head of a linked list. Return True if the linked list is a palindrome.
  - A palindrome is a sequence that reads the same forwards and backwards.
  - **Solution (Array Comparison)**:
    ```python
    def linked_palindrome(head):
      if head is None:
        return True
      values = []
      current = head
      while current is not None:
        values.append(current.val)
        current = current.next
      return values == values[::-1]
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(n)

* **middle value**
  - Write a function, `middle_value`, that takes in the head of a linked list. Return the value of the middle node.
  - For even-length lists, return the value of the second middle node.
  - Assume the input list is non-empty.
  - **Solution (Two Pointers)**:
    ```python
    def middle_value(head):
      slow = head
      fast = head
      while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
      return slow.val
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(1)

* **linked list cycle**
  - Write a function, `linked_list_cycle`, that takes in the head of a linked list. Return True if the list contains a cycle.
  - **Solution (Floyd's Cycle Detection)**:
    ```python
    def linked_list_cycle(head):
      slow = head
      fast = head
      while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
          return True
      return False
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(1)

* **undupe sorted linked list** - !!!

* **create linked list**
  - Write a function, `create_linked_list`, that takes in a list of values. Create a linked list containing each item as node values. Return the head.
  - **Solution (Iterative)**:
    ```python
    class Node:
      def __init__(self, val):
        self.val = val
        self.next = None
    
    def create_linked_list(values):
      dummy_head = Node(None)
      tail = dummy_head
      for value in values:
        tail.next = Node(value)
        tail = tail.next
      return dummy_head.next
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(n)

* **build a queue** - !!!

* **add lists**
  - Write a function, `add_lists`, that takes in the head of two linked lists. Each list represents a number with digits in reverse order.
  - Return the head of a new linked list representing the sum.
  - Example: 1->2->6 (621) + 4->5->3 (354) = 5->7->9 (975)
  - **Solution (Iterative with Carry)**:
    ```python
    def add_lists(head_1, head_2):
      dummy = Node(None)
      tail = dummy
      current_1 = head_1
      current_2 = head_2
      carry = 0
      while current_1 or current_2 or carry:
        val_1 = 0 if current_1 is None else current_1.val
        val_2 = 0 if current_2 is None else current_2.val
        total = val_1 + val_2 + carry
        carry = 1 if total > 9 else 0
        digit = total % 10
        tail.next = Node(digit)
        tail = tail.next
        current_1 = None if current_1 is None else current_1.next
        current_2 = None if current_2 is None else current_2.next
      return dummy.next
    ```
    - **Time Complexity**: O(max(m, n)) | **Space Complexity**: O(max(m, n))

---

## 13. Binary Tree II

**Advanced Binary Tree** operations include BST validation, tree reconstruction, and ancestor queries.

---

* **lowest common ancestor**
  - Write a function, `lowest_common_ancestor`, that takes in the root of a binary tree and two values. The function should return the value of the lowest common ancestor (LCA) of the two values in the tree.
  - The LCA is the deepest node that has both values in its subtree. A node may be considered an ancestor of itself.
  - Examples: Finding the lowest common ancestor of nodes with specific values in a tree.
  - **Solution (Path Finding)**:
    ```python
    def lowest_common_ancestor(root, val1, val2):
      path1 = find_path(root, val1)
      path2 = find_path(root, val2)
      first_path = set(path1)
      for value in path2:
        if value in first_path:
          return value
    
    def find_path(root, target):
      if root is None:
        return None
      if root.val == target:
        return [root.val]
      left = find_path(root.left, target)
      if left is not None:
        left.append(root.val)
        return left
      right = find_path(root.right, target)
      if right is not None:
        right.append(root.val)
        return right
      return None
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(h)

* **flip tree**
  - Write a function, `flip_tree`, that takes in the root of a binary tree. Flip the tree by turning left subtrees into right subtrees and vice-versa. The flipping should occur in-place. Return the root.
  - Example: A tree with structure  a(b, c) becomes a(c, b)  
  - **Solution (Recursive)**:
    ```python
    def flip_tree(root):
      if root is None:
        return root
      left = root.left
      root.left = root.right
      root.right = left
      flip_tree(root.left)
      flip_tree(root.right)
      return root
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(h)

* **lefty nodes**
  - Write a function, `lefty_nodes`, that takes in the root of a binary tree. Return a list containing the left-most value on every level of the tree in top-down order.
  - The left-most node on a level may not necessarily be a left child.
  - **Solution (BFS)**:
    ```python
    from collections import deque
    
    def lefty_nodes(root):
      if root is None:
        return []
      queue = deque([(root, 0)])
      max_distance = -1
      left_nodes = []
      while queue:
        node, distance = queue.popleft()
        if distance > max_distance:
          left_nodes.append(node.val)
          max_distance = distance
        if node.left is not None:
          queue.append((node.left, distance + 1))
        if node.right is not None:
          queue.append((node.right, distance + 1))
      return left_nodes
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(h)

* **binary search tree includes**
  - Write a function, `binary_search_tree_includes`, that takes in the root of a BST and a target value. Return True if the target is found, False otherwise.
  - A Binary Search Tree has all left subtree values < node.val and all right subtree values >= node.val.
  - Your solution should leverage BST properties for O(log n) best case.
  - **Solution (Recursive)**:
    ```python
    def binary_search_tree_includes(root, target):
      if root is None:
        return False
      if root.val == target:
        return True
      if root.val > target:
        return binary_search_tree_includes(root.left, target)
      else:
        return binary_search_tree_includes(root.right, target)
    ```
    - **Time Complexity**: O(log n) average | **Space Complexity**: O(h)

* **is binary search tree**
  - Write a function, `is_binary_search_tree`, that takes in the root of a binary tree. Return True if the tree satisfies the BST property.
  - **Solution (Inorder Traversal)**:
    ```python
    def is_binary_search_tree(root):
      values = []
      def traverse(node):
        if node is None:
          return
        traverse(node.left)
        values.append(node.val)
        traverse(node.right)
      traverse(root)
      for i in range(len(values) - 1):
        if values[i] > values[i + 1]:
          return False
      return True
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(h)

* **post order**
  - Write a function, `post_order`, that takes in the root of a binary tree. Return a list of the post-ordered values.
  - Post-order: left child, right child, then self.
  - **Solution (Recursive)**:
    ```python
    def post_order(root):
      if root is None:
        return []
      left = post_order(root.left)
      right = post_order(root.right)
      return left + right + [root.val]
    ```
    - **Time Complexity**: O(n) | **Space Complexity**: O(h)

* **build tree in post**
  - Write a function, `build_tree_in_post`, that takes in lists of in-order and post-order values. Build a binary tree with the given traversal structure. Return the root.
  - You can assume all values are unique.
  - **Solution (Recursive)**:
    ```python
    def build_tree_in_post(in_order, post_order):
      if not in_order and not post_order:
        return None
      root = Node(post_order[-1])
      idx = in_order.index(post_order[-1])
      root.left = build_tree_in_post(in_order[:idx], post_order[:idx])
      root.right = build_tree_in_post(in_order[idx + 1:], post_order[idx:-1])
      return root
    ```
    - **Time Complexity**: O(n²) | **Space Complexity**: O(h)

* **build tree in pre**
  - Write a function, `build_tree_in_pre`, that takes in lists of in-order and pre-order values. Build a binary tree with the given traversal structure. Return the root.
  - **Solution (Recursive)**:
    ```python
    def build_tree_in_pre(in_order, pre_order):
      if not in_order and not pre_order:
        return None
      root = Node(pre_order[0])
      idx = in_order.index(pre_order[0])
      left_in = in_order[:idx]
      right_in = in_order[idx + 1:]
      root.left = build_tree_in_pre(left_in, pre_order[1:len(left_in) + 1])
      root.right = build_tree_in_pre(right_in, pre_order[len(left_in) + 1:])
      return root
    ```
    - **Time Complexity**: O(n²) | **Space Complexity**: O(h)

* **is tree balanced** - !!!

---

## 14. Heap

**Heap** is a binary tree data structure useful for priority queues and finding top K elements efficiently.

- **heap insertion** - !!!
- **heap deletion** - !!!
- **kth-largest** - !!!
- **k smallest** - !!!

---

## 15. Exhaustive Recursion

**Exhaustive Recursion** generates all possibilities through complete recursive enumeration.

---

* **subsets**
  - Write a function, `subsets`, that takes in a list as argument. Return a 2D list where each sublist is one possible subset of the input.
  - The elements and subsets may be in any order. Assume input list contains unique elements.
  - Examples: `subsets(['a', 'b']) # -> [[], ['b'], ['a'], ['a', 'b']]`
  - **Solution (Recursive)**:
    ```python
    def subsets(elements):
      if len(elements) == 0:
        return [[]]
      first = elements[0]
      subset = subsets(elements[1:])
      total = []
      for sub in subset:
        total.append([first, *sub])
      return subset + total
    ```
    - **Time Complexity**: O(n · 2ⁿ) | **Space Complexity**: O(2ⁿ)

* **permutations**
  - Write a function, `permutations`, that takes in a list. Return a 2D list where each sublist represents one possible permutation of the input.
  - Sublists may be in any order. Assume input list contains unique items.
  - Examples: `permutations(['a', 'b', 'c']) # -> [[a,b,c], [b,a,c], [b,c,a], [a,c,b], [c,a,b], [c,b,a]]`
  - **Solution (Recursive)**:
    ```python
    def permutations(items):
      if len(items) == 0:
        return [[]]
      first = items[0]
      total = []
      subset = permutations(items[1:])
      for perm in subset:
        for i in range(len(perm) + 1):
          total.append(perm[:i] + [first] + perm[i:])
      return total
    ```
    - **Time Complexity**: O(n! · n) | **Space Complexity**: O(n!)

* **create combinations**
  - Write a function, `create_combinations`, that takes in a list and a length k. Return a 2D list representing all combinations of length k.
  - The items and combinations may be in any order. Assume input list contains unique elements and 1 <= k <= len(items).
  - Examples: `create_combinations(['a', 'b', 'c'], 2) # -> [[a,b], [a,c], [b,c]]`
  - **Solution (Recursive)**:
    ```python
    def create_combinations(items, k):
      if k == 0:
        return [[]]
      if k > len(items):
        return []
      first = items[0]
      small = create_combinations(items[1:], k - 1)
      large = create_combinations(items[1:], k)
      for list in small:
        list.insert(0, first)
      return small + large
    ```
    - **Time Complexity**: O(C(n,k) · k) | **Space Complexity**: O(C(n,k))

* **grocery budget** - !!!

* **lining up** - !!!

* **possible paths** - !!!

* **parenthetical possibilities**
  - Write a function, `parenthetical_possibilities`, that takes in a string. Return an array of all strings generated by expanding all parentheses.
  - Parentheses contain alternative characters. Example: 'x(mn)yz' expands to 'xmyz', 'xnyz'.
  - **Solution (Recursive)**:
    ```python
    def parenthetical_possibilities(s):
      if len(s) == 0:
        return [""]
      possibilities = []
      choices, remainder = get_choices(s)
      for choice in choices:
        results = parenthetical_possibilities(remainder)
        for result in results:
          possibilities.append(choice + result)
      return possibilities
    
    def get_choices(s):
      if s[0] == "(":
        end_index = s.index(")")
        choices = s[1:end_index]
        remainder = s[end_index + 1:]
        return (choices, remainder)
      else:
        return (s[0], s[1:])
    ```
    - **Time Complexity**: O(m · n) where m is number of possibilities, n is string length | **Space Complexity**: O(m)

* **substitute synonyms** - !!!

---

## 16. Graph II

**Advanced Graph** algorithms include weighted paths, topological sorting, and complex routing.

---

* **knight attack**
  - A knight and pawn are on a chess board. Find the minimum number of moves for the knight to reach the pawn.
  - The knight moves in an "L" shape: two squares in one direction, then one square perpendicular.
  - Write a function, `knight_attack(n, kr, kc, pr, pc)`, where n is board size, (kr, kc) is knight position, (pr, pc) is pawn position.
  - Return the minimum moves, or None if unreachable.
  - **Solution (BFS)**:
    ```python
    from collections import deque
    
    def knight_attack(n, kr, kc, pr, pc):
      visited = set((kr, kc))
      queue = deque([(kr, kc, 0)])
      while queue:
        row, col, moves = queue.popleft()
        if (row, col) == (pr, pc):
          return moves
        neighbors = [
          (row - 2, col - 1), (row - 2, col + 1),
          (row + 2, col - 1), (row + 2, col + 1),
          (row - 1, col - 2), (row + 1, col - 2),
          (row - 1, col + 2), (row + 1, col + 2)]
        for neighbor in neighbors:
          if 0 <= neighbor[0] < n and 0 <= neighbor[1] < n:
            if neighbor not in visited:
              queue.append((neighbor[0], neighbor[1], moves + 1))
              visited.add(neighbor)
      return None
    ```
    - **Time Complexity**: O(n²) | **Space Complexity**: O(n²)

* **can color** - !!!

* **tolerant teams** - !!!

* **rare routing** - !!!

* **topological order** - !!!

* **safe cracking** - !!!

* **string search** - !!!

* **province sizes** - !!!

* **extra cable** - !!!

* **weighted graph min path** - !!!

* **lowest toll** - !!!

---

## 17. Mixed Recall

**Mixed Problems** combine multiple algorithms and data structures across all topics.

- **prefix product** - !!!
- **leaf layers** - !!!
- **max increasing subseq** - !!!
- **knightly number** - !!!
- **all trips** - !!!
- **has path sum** - !!!
- **knapsack** - !!!
- **virus spread** - !!!
- **positioning plants** - !!!
- **flatten tree** - !!!
- **best house build** - !!!
- **breaking boundaries** - !!!
- **token replace** - !!!
- **token transform** - !!!

---

## TL;DR

Це чистий список задач (coding only), без:

* welcome
* quiz
* multiple choice
