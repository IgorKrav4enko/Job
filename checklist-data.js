window.StructyChecklistData = {
  topics: [
    { title: "0. Introduction", slug: "introduction", tasks: ["hey programmer", "max value", "longest word", "all even", "is prime"] },
    { title: "1. Big O Notation", slug: "big-o-notation", tasks: ["fizz buzz", "pairs"] },
    { title: "2. Hashing", slug: "hashing", tasks: ["anagrams", "most frequent char", "pair sum", "pair product", "intersection", "all unique", "intersection with dupes"] },
    { title: "3. Beginner Recursion", slug: "beginner-recursion", tasks: ["sum numbers recursive", "factorial", "sum of lengths", "reverse string recursive", "palindrome recursive", "fibonacci"] },
    { title: "4. Linked List I", slug: "linked-list-i", tasks: ["linked list values", "sum list", "linked list find", "get node value", "reverse list", "zipper lists", "merge lists", "is univalue list", "longest streak", "remove node", "insert node"] },
    { title: "5. Binary Tree I", slug: "binary-tree-i", tasks: ["depth first values", "breadth first values", "tree sum", "tree includes", "tree min value", "max root to leaf path sum", "tree path finder", "tree value count", "how high", "bottom right value", "all tree paths", "tree levels", "level averages", "leaf list"] },
    { title: "6. Graph I", slug: "graph-i", tasks: ["has path", "undirected path", "connected components count", "largest component", "shortest path", "island count", "minimum island", "closest carrot", "best bridge", "has cycle", "prereqs possible"] },
    { title: "7. Sliding Window", slug: "sliding-window", tasks: ["max subarray sum size k", "max subarray product size k", "subarray target sum size k", "has substring anagram"] },
    { title: "8. Two Pointer", slug: "two-pointer", tasks: ["is palindrome", "uncompress", "compress", "five sort", "is subsequence"] },
    { title: "9. Dynamic Programming", slug: "dynamic-programming", tasks: ["fib", "tribonacci", "sum possible", "min change", "count paths", "max path sum", "non-adjacent sum", "summing squares", "counting change", "array stepper", "max palin subsequence", "overlap subsequence", "can concat", "quickest concat", "valid compound", "count compounds", "longest path", "semesters required"] },
    { title: "10. Stack", slug: "stack", tasks: ["reverse some chars", "paired parentheses", "befitting brackets", "decompress braces", "nesting score"] },
    { title: "11. Array and String", slug: "array-and-string", tasks: ["running sum", "has subarray sum", "subarray sum count", "merge sort", "combine intervals", "binary search", "lexical order", "detect dictionary"] },
    { title: "12. Linked List II", slug: "linked-list-ii", tasks: ["linked palindrome", "middle value", "linked list cycle", "undupe sorted linked list", "create linked list", "build a queue", "add lists"] },
    { title: "13. Binary Tree II", slug: "binary-tree-ii", tasks: ["lowest common ancestor", "flip tree", "lefty nodes", "binary search tree includes", "is binary search tree", "post order", "build tree in post", "build tree in pre", "is tree balanced"] },
    { title: "14. Heap", slug: "heap", tasks: [] },
    { title: "15. Exhaustive Recursion", slug: "exhaustive-recursion", tasks: ["subsets", "permutations", "create combinations", "grocery budget", "lining up", "possible paths", "parenthetical possibilities", "substitute synonyms"] },
    { title: "16. Graph II", slug: "graph-ii", tasks: ["knight attack", "can color", "tolerant teams", "rare routing", "topological order", "safe cracking", "string search", "province sizes", "extra cable", "weighted graph min path", "lowest toll"] },
    { title: "17. Mixed Recall", slug: "mixed-recall", tasks: [] }
  ],
  taskDetails: {
    "introduction::is-prime": {
      statement: "Write a function `is_prime(n)` that returns `True` if `n` is prime and `False` otherwise. A prime number has exactly two divisors: 1 and itself.",
      examples: ["`is_prime(2) -> True`", "`is_prime(25) -> False`", "`is_prime(31) -> True`"],
      hints: [
        "Оброби маленькі значення окремо: всі числа менші за 2 не є простими.",
        "Не потрібно перевіряти всі числа до `n - 1`; достатньо дільників до `sqrt(n)`.",
        "Якщо знаходиш хоча б один дільник без остачі, одразу повертай `False`."
      ],
      pseudocode: [
        "if n < 2: return False",
        "for divisor from 2 to floor(sqrt(n)):",
        "  if n % divisor == 0: return False",
        "return True"
      ],
      solutions: [
        {
          title: "Square Root Check",
          code: "from math import sqrt, floor\n\ndef is_prime(n):\n  if n < 2:\n    return False\n  for divisor in range(2, floor(sqrt(n)) + 1):\n    if n % divisor == 0:\n      return False\n  return True",
          complexity: "Time: O(sqrt(n)) | Space: O(1)"
        }
      ]
    },
    "big-o-notation::fizz-buzz": {
      statement: "Print numbers from 1 to `n`. For multiples of 3 print `Fizz`, for multiples of 5 print `Buzz`, and for multiples of both print `FizzBuzz`.",
      examples: ["`n = 5 -> 1, 2, Fizz, 4, Buzz`", "`n = 15 -> ... FizzBuzz on 15`"],
      hints: [
        "Перевірку на кратність і 3, і 5 роби перед окремими перевірками.",
        "Число кратне і 3, і 5, якщо воно ділиться на 15.",
        "Пройди циклом від 1 до `n` включно."
      ],
      pseudocode: [
        "for i from 1 to n:",
        "  if i % 15 == 0: print FizzBuzz",
        "  else if i % 3 == 0: print Fizz",
        "  else if i % 5 == 0: print Buzz",
        "  else: print i"
      ],
      solutions: [
        {
          title: "Straightforward Loop",
          code: "def fizz_buzz(n):\n  for i in range(1, n + 1):\n    if i % 15 == 0:\n      print('FizzBuzz')\n    elif i % 3 == 0:\n      print('Fizz')\n    elif i % 5 == 0:\n      print('Buzz')\n    else:\n      print(i)",
          complexity: "Time: O(n) | Space: O(1)"
        }
      ]
    },
    "hashing::anagrams": {
      statement: "Write a function `anagrams(s1, s2)` that returns whether two strings contain the same characters in any order.",
      examples: ["`anagrams('restful', 'fluster') -> True`", "`anagrams('cats', 'tocs') -> False`", "`anagrams('elbow', 'below') -> True`"],
      hints: [
        "У двох анаграм довжини однакові, а частоти кожного символу теж однакові.",
        "Можна або посортувати обидва рядки, або порахувати символи.",
        "Хеш-мапа з частотами дає лінійну складність."
      ],
      pseudocode: [
        "if lengths differ: return False",
        "count chars in first string",
        "count chars in second string",
        "return whether counts match"
      ],
      solutions: [
        { title: "Sorting", code: "def anagrams(s1, s2):\n  return sorted(s1) == sorted(s2)", complexity: "Time: O(n log n) | Space: O(n)" },
        { title: "Counter", code: "from collections import Counter\n\ndef anagrams(s1, s2):\n  return Counter(s1) == Counter(s2)", complexity: "Time: O(n + m) | Space: O(n + m)" }
      ]
    },
    "hashing::most-frequent-char": {
      statement: "Return the most frequent character in a string. If there is a tie, return the character that appears first in the string.",
      examples: ["`most_frequent_char('bookeeper') -> 'e'`", "`most_frequent_char('mississippi') -> 'i'`"],
      hints: [
        "Спочатку порахуй частоту кожного символу.",
        "Потім пройди рядок зліва направо, щоб правильно обробити нічию.",
        "Не покладайся лише на порядок ключів у словнику для tie-break."
      ],
      pseudocode: [
        "build frequency map",
        "best_char = first char",
        "for char in original string:",
        "  if count[char] > count[best_char]: update best_char",
        "return best_char"
      ],
      solutions: [
        { title: "Frequency Map with Stable Tie Break", code: "def most_frequent_char(s):\n  counts = {}\n  for char in s:\n    counts[char] = counts.get(char, 0) + 1\n\n  best = s[0]\n  for char in s:\n    if counts[char] > counts[best]:\n      best = char\n  return best", complexity: "Time: O(n) | Space: O(n)" }
      ]
    },
    "hashing::pair-sum": {
      statement: "Return a pair of indices whose numbers add up to the target sum. Exactly one valid answer exists.",
      examples: ["`pair_sum([3, 2, 5, 4, 1], 8) -> (0, 2)`", "`pair_sum([1, 6, 7, 2], 13) -> (1, 2)`"],
      hints: [
        "Для кожного числа подумай, яке число тобі потрібно як доповнення.",
        "Зберігай уже бачені числа і їх індекси у словнику.",
        "Якщо `target - num` уже бачив, відповідь знайдена."
      ],
      pseudocode: [
        "seen = empty map",
        "for each index, num:",
        "  need = target - num",
        "  if need in seen: return (seen[need], index)",
        "  save num -> index"
      ],
      solutions: [
        { title: "Hash Map", code: "def pair_sum(numbers, target_sum):\n  seen = {}\n  for index, num in enumerate(numbers):\n    difference = target_sum - num\n    if difference in seen:\n      return (seen[difference], index)\n    seen[num] = index", complexity: "Time: O(n) | Space: O(n)" }
      ]
    },
    "hashing::pair-product": {
      statement: "Return a pair of indices whose values multiply to the target product. Exactly one valid answer exists.",
      examples: ["`pair_product([3, 2, 5, 4, 1], 8) -> (1, 3)`", "`pair_product([4, 7, 9, 2, 5, 1], 35) -> (1, 4)`"],
      hints: [
        "Замість суми тут треба знайти множник-партнер.",
        "Для поточного числа перевір, чи `target_product / num` уже зустрічався.",
        "Словник з числом та його індексом дає лінійну складність."
      ],
      pseudocode: [
        "seen = empty map",
        "for each index, num:",
        "  complement = target / num",
        "  if complement in seen: return indices",
        "  save current num"
      ],
      solutions: [
        { title: "Hash Map by Complement", code: "def pair_product(numbers, target_product):\n  seen = {}\n  for index, num in enumerate(numbers):\n    complement = target_product / num\n    if complement in seen:\n      return (seen[complement], index)\n    seen[num] = index", complexity: "Time: O(n) | Space: O(n)" }
      ]
    },
    "beginner-recursion::sum-numbers-recursive": {
      statement: "Return the sum of all numbers in an array using recursion.",
      examples: ["`sum_numbers_recursive([5, 2, 9, 10]) -> 26`", "`sum_numbers_recursive([]) -> 0`"],
      hints: [
        "Порожній список є базовим випадком.",
        "У рекурсивному випадку візьми перший елемент і додай результат для решти списку.",
        "З кожним викликом розмір задачі має зменшуватися."
      ],
      pseudocode: ["if list is empty: return 0", "return first_number + recursive_call(rest)"],
      solutions: [
        { title: "Recursive Slice", code: "def sum_numbers_recursive(numbers):\n  if len(numbers) == 0:\n    return 0\n  return numbers[0] + sum_numbers_recursive(numbers[1:])", complexity: "Time: O(n) | Space: O(n)" }
      ]
    },
    "beginner-recursion::factorial": {
      statement: "Return `n!` recursively. The factorial of 0 is 1.",
      examples: ["`factorial(3) -> 6`", "`factorial(0) -> 1`"],
      hints: [
        "Знайди базовий випадок, коли рекурсія повинна зупинитися.",
        "Факторіал `n` виражається через `n * factorial(n - 1)`.",
        "Не забудь, що `0! = 1`."
      ],
      pseudocode: ["if n == 0: return 1", "return n * factorial(n - 1)"],
      solutions: [
        { title: "Classic Recursion", code: "def factorial(n):\n  if n == 0:\n    return 1\n  return n * factorial(n - 1)", complexity: "Time: O(n) | Space: O(n)" }
      ]
    },
    "beginner-recursion::fibonacci": {
      statement: "Return the n-th Fibonacci number recursively. `fib(0) = 0`, `fib(1) = 1`.",
      examples: ["`fib(6) -> 8`", "`fib(10) -> 55`"],
      hints: [
        "Базові випадки: `fib(0)` і `fib(1)`.",
        "Наївна рекурсія повторює багато однакових обчислень.",
        "Спробуй memoization, якщо хочеш прискорити рішення."
      ],
      pseudocode: [
        "if n is 0 or 1: return n",
        "if n cached: return cache[n]",
        "cache[n] = fib(n - 1) + fib(n - 2)",
        "return cache[n]"
      ],
      solutions: [
        { title: "Naive Recursion", code: "def fib(n):\n  if n == 0 or n == 1:\n    return n\n  return fib(n - 1) + fib(n - 2)", complexity: "Time: O(2^n) | Space: O(n)" },
        { title: "Memoization", code: "def fib(n):\n  memo = {}\n\n  def _fib(n):\n    if n == 0 or n == 1:\n      return n\n    if n in memo:\n      return memo[n]\n    memo[n] = _fib(n - 1) + _fib(n - 2)\n    return memo[n]\n\n  return _fib(n)", complexity: "Time: O(n) | Space: O(n)" }
      ]
    },
    "linked-list-i::linked-list-values": {
      statement: "Return a list containing all values from a linked list from head to tail.",
      examples: ["`a -> b -> c -> d` becomes `['a', 'b', 'c', 'd']`", "`x -> y` becomes `['x', 'y']`"],
      hints: [
        "Почни з `head` і рухайся через `next`.",
        "Збирай значення у масив.",
        "Зупиняйся, коли поточний вузол дорівнює `None`."
      ],
      pseudocode: [
        "values = []",
        "current = head",
        "while current is not None:",
        "  append current.val",
        "  move to current.next",
        "return values"
      ],
      solutions: [
        { title: "Iterative Traversal", code: "def linked_list_values(head):\n  values = []\n  current = head\n  while current is not None:\n    values.append(current.val)\n    current = current.next\n  return values", complexity: "Time: O(n) | Space: O(n)" }
      ]
    },
    "graph-i::undirected-path": {
      statement: "Given a list of undirected edges and two nodes, return whether there is a path between the nodes.",
      examples: ["edges `[(i,j), (k,i), (m,k), (k,l), (o,n)]`, `j -> m` gives `True`"],
      hints: [
        "Спершу перетвори список ребер у adjacency list.",
        "Оскільки граф неорієнтований, додавай ребро в обидві сторони.",
        "Під час DFS або BFS використовуй `visited`, щоб не зациклитися."
      ],
      pseudocode: [
        "build graph from edges",
        "start DFS from node_A",
        "if current == node_B: return True",
        "skip visited nodes",
        "search neighbors recursively"
      ],
      solutions: [
        { title: "DFS with Visited Set", code: "def undirected_path(edges, node_A, node_B):\n  graph = {}\n  for a, b in edges:\n    graph.setdefault(a, []).append(b)\n    graph.setdefault(b, []).append(a)\n  return has_path(graph, node_A, node_B, set())\n\ndef has_path(graph, src, dst, visited):\n  if src == dst:\n    return True\n  if src in visited:\n    return False\n  visited.add(src)\n  for neighbor in graph[src]:\n    if has_path(graph, neighbor, dst, visited):\n      return True\n  return False", complexity: "Time: O(n + e) | Space: O(n)" }
      ]
    },
    "graph-i::island-count": {
      statement: "Count how many islands of land exist in a grid where `W` is water and `L` is land.",
      examples: ["An island is a connected land region horizontally or vertically."],
      hints: [
        "Пройди по кожній клітинці сітки.",
        "Коли знаходиш нову землю, запускай DFS, щоб позначити весь острів як відвіданий.",
        "Збільшуй лічильник тільки коли `explore` справді знайшов новий острів."
      ],
      pseudocode: [
        "visited = empty set",
        "count = 0",
        "for each row and col:",
        "  if explore(cell) is True: count += 1",
        "return count"
      ],
      solutions: [
        { title: "Grid DFS", code: "def island_count(grid):\n  visited = set()\n  count = 0\n  for r in range(len(grid)):\n    for c in range(len(grid[0])):\n      if explore(grid, r, c, visited):\n        count += 1\n  return count\n\ndef explore(grid, r, c, visited):\n  row_inbounds = 0 <= r < len(grid)\n  col_inbounds = 0 <= c < len(grid[0])\n  if not row_inbounds or not col_inbounds:\n    return False\n  if grid[r][c] == 'W' or (r, c) in visited:\n    return False\n  visited.add((r, c))\n  explore(grid, r - 1, c, visited)\n  explore(grid, r + 1, c, visited)\n  explore(grid, r, c - 1, visited)\n  explore(grid, r, c + 1, visited)\n  return True", complexity: "Time: O(r * c) | Space: O(r * c)" }
      ]
    }
  }
};
