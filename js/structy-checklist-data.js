window.StructyChecklistData = {
  "topics": [
    {
      "title": "0. Introduction",
      "slug": "introduction",
      "tasks": [
        "hey programmer",
        "max value",
        "longest word",
        "all even",
        "is prime"
      ]
    },
    {
      "title": "1. Big O Notation",
      "slug": "big-o-notation",
      "tasks": [
        "fizz buzz",
        "pairs"
      ]
    },
    {
      "title": "2. Hashing",
      "slug": "hashing",
      "tasks": [
        "anagrams",
        "most frequent char",
        "pair sum",
        "pair product",
        "intersection",
        "exclusive items",
        "all unique",
        "intersection with dupes"
      ]
    },
    {
      "title": "3. Beginner Recursion",
      "slug": "beginner-recursion",
      "tasks": [
        "sum numbers recursive",
        "factorial",
        "sum of lengths",
        "reverse-string-recursive",
        "palindrome-recursive",
        "fibonacci"
      ]
    },
    {
      "title": "4. Linked List I",
      "slug": "linked-list-i",
      "tasks": [
        "linked list values",
        "sum list",
        "linked list find",
        "get node value",
        "reverse list",
        "zipper lists",
        "merge lists",
        "is univalue list",
        "longest streak",
        "remove node",
        "insert node"
      ]
    },
    {
      "title": "5. Binary Tree I",
      "slug": "binary-tree-i",
      "tasks": [
        "depth first values",
        "breadth first values",
        "tree sum",
        "tree includes",
        "tree min value",
        "max root to leaf path sum",
        "tree path finder",
        "tree value count",
        "how high",
        "bottom right value",
        "all tree paths",
        "tree levels",
        "level averages",
        "leaf list"
      ]
    },
    {
      "title": "6. Graph I",
      "slug": "graph-i",
      "tasks": [
        "has path",
        "undirected path",
        "connected components count",
        "largest component",
        "shortest path",
        "island count",
        "minimum island",
        "closest carrot",
        "best bridge",
        "has cycle",
        "prereqs possible"
      ]
    },
    {
      "title": "7. Sliding Window",
      "slug": "sliding-window",
      "tasks": [
        "max subarray sum size k",
        "max subarray product size k",
        "subarray target sum size k",
        "has substring anagram"
      ]
    },
    {
      "title": "8. Two Pointer",
      "slug": "two-pointer",
      "tasks": [
        "is palindrome",
        "uncompress",
        "compress",
        "five sort",
        "is subsequence"
      ]
    },
    {
      "title": "9. Dynamic Programming",
      "slug": "dynamic-programming",
      "tasks": [
        "fib",
        "tribonacci",
        "sum possible",
        "min change",
        "count paths",
        "max path sum",
        "non-adjacent sum",
        "summing squares",
        "counting change",
        "array stepper",
        "max palin subsequence",
        "overlap subsequence",
        "can concat",
        "quickest concat",
        "valid compound",
        "count compounds",
        "longest path",
        "semesters required"
      ]
    },
    {
      "title": "10. Stack",
      "slug": "stack",
      "tasks": [
        "reverse some chars",
        "paired parentheses",
        "befitting brackets",
        "decompress braces",
        "nesting score"
      ]
    },
    {
      "title": "11. Array and String",
      "slug": "array-and-string",
      "tasks": [
        "running sum",
        "has subarray sum",
        "subarray sum count",
        "merge sort",
        "combine intervals",
        "binary search",
        "lexical order",
        "detect dictionary"
      ]
    },
    {
      "title": "12. Linked List II",
      "slug": "linked-list-ii",
      "tasks": [
        "linked palindrome",
        "middle value",
        "linked list cycle",
        "undupe sorted linked list",
        "create linked list",
        "build a queue",
        "add lists"
      ]
    },
    {
      "title": "13. Binary Tree II",
      "slug": "binary-tree-ii",
      "tasks": [
        "lowest common ancestor",
        "flip tree",
        "lefty nodes",
        "binary search tree includes",
        "is binary search tree",
        "post order",
        "build tree in post",
        "build tree in pre",
        "is tree balanced"
      ]
    },
    {
      "title": "14. Heap",
      "slug": "heap",
      "tasks": [
        "heap insertion",
        "heap deletion",
        "kth-largest",
        "k smallest"
      ]
    },
    {
      "title": "15. Exhaustive Recursion",
      "slug": "exhaustive-recursion",
      "tasks": [
        "subsets",
        "permutations",
        "create combinations",
        "grocery budget",
        "lining up",
        "possible paths",
        "parenthetical possibilities",
        "substitute synonyms"
      ]
    },
    {
      "title": "16. Graph II",
      "slug": "graph-ii",
      "tasks": [
        "knight attack",
        "can color",
        "tolerant teams",
        "rare routing",
        "topological order",
        "safe cracking",
        "string search",
        "union find code I",
        "union find code II",
        "province sizes",
        "extra cable",
        "weighted graph min path",
        "lowest toll"
      ]
    },
    {
      "title": "17. Mixed Recall",
      "slug": "mixed-recall",
      "tasks": [
        "prefix product",
        "leaf layers",
        "max increasing subseq",
        "knightly number",
        "all trips",
        "has path sum",
        "knapsack",
        "virus spread",
        "positioning plants",
        "flatten tree",
        "best house build",
        "breaking boundaries",
        "token replace",
        "token transform"
      ]
    }
  ],
  "taskDetails": {
    "introduction::hey-programmer": {
      "statement": "Write a method greet that takes in a string argument, s, and returns the string: \"hey s\"",
      "examples": [
        "greet(\"alvin\"); // -> \"hey alvin\"",
        "greet(\"jason\"); // -> \"hey jason\"",
        "greet(\"how now brown cow\"); // -> \"hey how now brown cow\""
      ],
      "testCases": [
        "greet(\"alvin\"); // -> \"hey alvin\"",
        "greet(\"jason\"); // -> \"hey jason\"",
        "greet(\"how now brown cow\"); // -> \"hey how now brown cow\"",
        "Source.greet(\"alvin\") -> \"hey alvin\"",
        "Source.greet(\"jason\") -> \"hey jason\"",
        "Source.greet(\"how now brown cow\") -> \"hey how now brown cow\""
      ],
      "hints": [
        "The output is just the word \"hey\" followed by a space and the input string.",
        "You do not need a loop or condition here.",
        "Return the concatenation: \"hey \" + s."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "class Source {\n  public static String greet(String s) {\n    return \"hey \" + s;\n  }\n\n  public static void run() {\n    // this method behaves as `main()`, do not remove it\n  }\n}",
          "complexity": ""
        }
      ],
      "meta": {
        "name": "hey programmer",
        "slug": "hey-programmer",
        "module": "Introduction",
        "premium": false,
        "verbose": "A quick intro. Learn how to get the most out of Structy.",
        "stub": "class Source {\n  public static String greet(String s) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this method behaves as `main()`, do not remove it\n  }\n}",
        "solutionCode": "class Source {\n  public static String greet(String s) {\n    return\"hey \" + s;\n  }\n\n  public static void run() {\n    String message = greet(\"User\");\n    System.out.println(message); \n  }\n}"
      }
    },
    "introduction::max-value": {
      "statement": "Write a method, maxValue, that takes in an array of numbers as an argument. The method should return the largest number in the array. Solve this without using any built-in array methods. You can assume that the array is non-empty.",
      "examples": [
        "double[] numbers = { 4, 7, 2, 8, 10, 9 };\nmaxValue(numbers); // -> 10",
        "double[] numbers = { 10, 5, 40, 40.3 };\nmaxValue(numbers); // -> 40.3",
        "double[] numbers = { -5, -2, -1, -11 };\nmaxValue(numbers); // -> -1"
      ],
      "testCases": [
        "double[] numbers = { 4, 7, 2, 8, 10, 9 };\nmaxValue(numbers); // -> 10",
        "double[] numbers = { 10, 5, 40, 40.3 };\nmaxValue(numbers); // -> 40.3",
        "double[] numbers = { -5, -2, -1, -11 };\nmaxValue(numbers); // -> -1",
        "double[] numbers = { 42 };\nmaxValue(numbers); // -> 42",
        "double[] numbers = { 1000, 8 };\nmaxValue(numbers); // -> 1000",
        "double[] numbers = { 1000, 8, 9000 };\nmaxValue(numbers); // -> 9000",
        "double[] numbers = { 2, 5, 1, 1, 4 };\nmaxValue(numbers); // -> 5",
        "Source.maxValue(numbers) -> 10",
        "Source.maxValue(numbers) -> 40.3",
        "Source.maxValue(numbers) -> -1",
        "Source.maxValue(numbers) -> 42",
        "Source.maxValue(numbers) -> 1000",
        "Source.maxValue(numbers) -> 9000",
        "Source.maxValue(numbers) -> 5"
      ],
      "hints": [
        "Keep track of the largest number seen so far while scanning the array.",
        "Initialize that running maximum using the first element.",
        "For every next element, if it is larger than the current max, update the max."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "class Source {\n  public static double maxValue(double[] numbers) {\n    double max = Double.NEGATIVE_INFINITY;\n    for (double num : numbers) {\n      if (num > max) {\n        max = num;\n      }\n    }\n    return max;\n  }\n\n  public static void run() {\n    // this method behaves as `main()`, do not remove it\n  }\n}",
          "complexity": "n = length of array | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "max value",
        "slug": "max-value",
        "module": "Introduction",
        "premium": false,
        "verbose": "Find the largest value in an array. No built-in methods allowed.",
        "stub": "class Source {\n  public static double maxValue(double[] numbers) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this method behaves as `main()`, do not remove it\n  }\n}",
        "solutionCode": "class Source {\n  public static double maxValue(double[] numbers) {\n    // 1. Починаємо з першого елемента масиву\n    double max = numbers[0];\n\n    // 2. Проходимо циклом по всіх інших елементах\n    for (int i = 1; i < numbers.length; i++) {\n      // 3. Якщо поточний елемент більший за max, оновлюємо max\n      if (numbers[i] > max) {\n        max = numbers[i];\n      }\n    }\n\n    // 4. Повертаємо знайдене число\n    return max;\n  }\n\n  public static void run() {\n    // Створюємо тестовий масив для перевірки\n    double[] testArray = {10.5, 2.1, 45.8, 12.0, 33.3};\n    \n    // Викликаємо метод та виводимо результат у консоль\n    double result = maxValue(testArray);\n    System.out.println(result);\n  }\n}"
      }
    },
    "introduction::longest-word": {
      "statement": "Write a method, longestWord, that takes in a sentence string as an argument. The method should return the longest word in the sentence. If there is a tie, return the word that occurs later in the sentence. You can assume that the sentence is non-empty.",
      "examples": [
        "longestWord(\"what a wonderful world\"); // -> \"wonderful\"",
        "longestWord(\"have a nice day\"); // -> \"nice\"",
        "longestWord(\"the quick brown fox jumped over the lazy dog\"); // -> \"jumped\""
      ],
      "testCases": [
        "longestWord(\"what a wonderful world\"); // -> \"wonderful\"",
        "longestWord(\"have a nice day\"); // -> \"nice\"",
        "longestWord(\"the quick brown fox jumped over the lazy dog\"); // -> \"jumped\"",
        "longestWord(\"who did eat the ham\"); // -> \"ham\"",
        "longestWord(\"potato\"); // -> \"potato\"",
        "Source.longestWord(\"what a wonderful world\") -> \"wonderful\"",
        "Source.longestWord(\"have a nice day\") -> \"nice\"",
        "Source.longestWord(\"the quick brown fox jumped over the lazy dog\") -> \"jumped\"",
        "Source.longestWord(\"who did eat the ham\") -> \"ham\"",
        "Source.longestWord(\"potato\") -> \"potato\""
      ],
      "hints": [
        "Split the sentence into individual words.",
        "Track the longest word seen so far as you iterate.",
        "Because ties should favor the later word, update your answer when the new word's length is greater than or equal to the current best."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "class Source {\n  public static String longestWord(String sentence) {\n    String[] words = sentence.split(\" \");\n    String longest = \"\";\n    \n    for (String word : words) {\n      if (word.length() >= longest.length()) {\n        longest = word;\n      }\n    }\n\n    return longest;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
          "complexity": "n = length of sentence | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "longest word",
        "slug": "longest-word",
        "module": "Introduction",
        "premium": false,
        "verbose": "Return the longest word in a sentence.",
        "stub": "class Source {\n  public static String longestWord(String sentence) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
        "solutionCode": "class Source {\n  public static String longestWord(String sentence) {\n    String[] words = sentence.split(\" \");\n    String longest = \"\";\n    \n    for (String word : words) {\n      if (word.length() >= longest.length()) {\n        longest = word;\n      }\n    }\n\n    return longest;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}"
      }
    },
    "introduction::all-even": {
      "statement": "Write a method, allEven, that takes in a List of numbers as an argument. The method should return a boolean indicating whether or not every element of the List is an even number. You can assume that the List is non-empty.",
      "examples": [
        "allEven(List.of(4, 90, 68, 6, -2)); // -> true",
        "allEven(List.of(14, 40, 36, 3)); // -> false",
        "allEven(List.of(30, 24, 2048, 0, 12, 50)); // -> true"
      ],
      "testCases": [
        "allEven(List.of(4, 90, 68, 6, -2)); // -> true",
        "allEven(List.of(14, 40, 36, 3)); // -> false",
        "allEven(List.of(30, 24, 2048, 0, 12, 50)); // -> true",
        "allEven(List.of(7, 7, 7, 7)); // -> false",
        "allEven(List.of(100)); // -> true",
        "allEven(List.of(1, 2, 4, 6, 8)); // -> false",
        "allEven(List.of(42, 18, 96, 4, 70, 12, 58, 30, 84, 26)); // -> true",
        "Source.allEven(List.of(4, 90, 68, 6, -2)) -> true",
        "Source.allEven(List.of(14, 40, 36, 3)) -> false",
        "Source.allEven(List.of(30, 24, 2048, 0, 12, 50)) -> true",
        "Source.allEven(List.of(7, 7, 7, 7)) -> false",
        "Source.allEven(List.of(100)) -> true",
        "Source.allEven(List.of(1, 2, 4, 6, 8)) -> false",
        "Source.allEven(List.of(42, 18, 96, 4, 70, 12, 58, 30, 84, 26)) -> true"
      ],
      "hints": [
        "Check each number one at a time.",
        "A number is even when num % 2 == 0.",
        "Return false as soon as you find an odd number; if none are odd, return true."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.List;\n\nclass Source {\n  public static boolean allEven(List<Integer> nums) {\n    for (int num : nums) {\n      if (num % 2 == 1) {\n        return false;\n      }\n    }\n\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
          "complexity": "n = length of list | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "all even",
        "slug": "all-even",
        "module": "Introduction",
        "premium": false,
        "verbose": "Check if every number in an array is even.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean allEven(List<Integer> nums) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\n\nclass Source {\n  public static boolean allEven(List<Integer> nums) {\n    for (int n : nums) {\n      if (n % 2 == 1) return false;\n    }\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}"
      }
    },
    "introduction::is-prime": {
      "statement": "Write a method, isPrime, that takes in a number as an argument. The method should return a boolean indicating whether or not the given number is prime. A prime number is a number that is only divisible by two distinct numbers: 1 and itself. For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6. You can assume that the input number is a positive integer.",
      "examples": [
        "isPrime(2); // -> true",
        "isPrime(3); // -> true",
        "isPrime(4); // -> false"
      ],
      "testCases": [
        "isPrime(2); // -> true",
        "isPrime(3); // -> true",
        "isPrime(4); // -> false",
        "isPrime(5); // -> true",
        "isPrime(6); // -> false",
        "isPrime(7); // -> true",
        "isPrime(8); // -> false",
        "isPrime(25); // -> false",
        "isPrime(31); // -> true",
        "isPrime(2017); // -> true",
        "isPrime(2048); // -> false",
        "isPrime(1); // -> false",
        "isPrime(713); // -> false",
        "Source.isPrime(2) -> true",
        "Source.isPrime(3) -> true",
        "Source.isPrime(4) -> false",
        "Source.isPrime(5) -> true",
        "Source.isPrime(6) -> false",
        "Source.isPrime(7) -> true",
        "Source.isPrime(8) -> false",
        "Source.isPrime(25) -> false",
        "Source.isPrime(31) -> true",
        "Source.isPrime(2017) -> true",
        "Source.isPrime(2048) -> false",
        "Source.isPrime(1) -> false",
        "Source.isPrime(713) -> false"
      ],
      "hints": [
        "A prime number has no divisors other than 1 and itself.",
        "If the number is less than 2, it is not prime.",
        "Try dividing by integers from 2 up to the square root of the number; if any divide evenly, return false."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "class Source {\n  public static boolean isPrime(int number) {\n    if (number < 2) {\n      return false;\n    }\n    for (int i = 2; i <= Math.sqrt(number); i += 1) {\n      if (number % i == 0) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
          "complexity": "n = input number | Time: O(square_root(n)) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "is prime",
        "slug": "is-prime",
        "module": "Introduction",
        "premium": false,
        "verbose": "Check if a given number is a prime.",
        "stub": "class Source {\n  public static boolean isPrime(int number) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
        "solutionCode": "class Source {\n\n  static boolean isPrime(int number) {\n    if (number < 2) return false;\n\n    for (int i = 2; i * i <= number; i++) {\n      if (number % i == 0) return false;\n    }\n\n    return true;\n  }\n\n  public static void run() {\n   \n  }\n}"
      }
    },
    "big-o-notation::fizz-buzz": {
      "statement": "Write a method, fizzBuzz, that takes in a number n as an argument. The method should return a list containing numbers from 1 to n, replacing certain numbers according to the following rules: - if the number is divisible by 3, make the element \"fizz\" - if the number is divisible by 5, make the element \"buzz\" - if the number is divisible by 3 and 5, make the element \"fizzbuzz\"",
      "examples": [
        "fizzBuzz(11); // -> [1,2,\"fizz\",4,\"buzz\",\"fizz\",7,8,\"fizz\",\"buzz\",11]",
        "fizzBuzz(2); // -> [1,2]",
        "fizzBuzz(16); // -> [\n//   1,\n//   2,\n//   \"fizz\",\n//   4,\n//   \"buzz\",\n//   \"fizz\",\n//   7,\n//   8,\n//   \"fizz\",\n//   \"buzz\",\n//   11,\n//   \"fizz\",\n//   13,\n//   14,\n//   \"fizzbuzz\",\n//   16\n// ]"
      ],
      "testCases": [
        "fizzBuzz(11); // -> [1,2,\"fizz\",4,\"buzz\",\"fizz\",7,8,\"fizz\",\"buzz\",11]",
        "fizzBuzz(2); // -> [1,2]",
        "fizzBuzz(16); // -> [\n//   1,\n//   2,\n//   \"fizz\",\n//   4,\n//   \"buzz\",\n//   \"fizz\",\n//   7,\n//   8,\n//   \"fizz\",\n//   \"buzz\",\n//   11,\n//   \"fizz\",\n//   13,\n//   14,\n//   \"fizzbuzz\",\n//   16\n// ]",
        "fizzBuzz(32); // -> [\n//   1,      2,          \"fizz\",     4, \n//   \"buzz\", \"fizz\",     7,          8, \n//   \"fizz\", \"buzz\",     11,         \"fizz\", \n//   13,     14,         \"fizzbuzz\", 16, \n//   17,     \"fizz\",     19,         \"buzz\", \n//   \"fizz\", 22,         23,         \"fizz\", \n//   \"buzz\", 26,         \"fizz\",     28, \n//   29,     \"fizzbuzz\", 31,         32 \n// ]"
      ],
      "hints": [
        "Loop from 1 through n and decide what to append for each number.",
        "Check divisibility by both 3 and 5 before checking them individually.",
        "Append \"fizzbuzz\", \"fizz\", \"buzz\", or the number itself depending on the divisibility rules."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<Object> fizzBuzz(int n) {\n    List<Object> result = new ArrayList<>();\n\n    for (int i = 1; i <= n; i += 1) {\n      if (i % 3 == 0 && i % 5 == 0) {\n        result.add(\"fizzbuzz\");\n      } else if (i % 3 == 0 ) {\n        result.add(\"fizz\");\n      } else if (i % 5 == 0) {\n        result.add(\"buzz\");\n      } else {\n        result.add(i);\n      }\n    }\n    \n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "fizz buzz",
        "slug": "fizz-buzz",
        "module": "Big O Notation",
        "premium": false,
        "verbose": "The classic problem.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Object> fizzBuzz(int n) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n\n  public static List<Object> fizzBuzz(int n) {\n    List<Object> res = new ArrayList<>();\n\n    for (int i = 1; i <= n; i++) {\n      if (i % 15 == 0) {\n        res.add(\"fizzbuzz\");\n      } else if (i % 3 == 0) {\n        res.add(\"fizz\");\n      } else if (i % 5 == 0) {\n        res.add(\"buzz\");\n      } else {\n        res.add(i); // додаємо число (Integer через autoboxing)\n      }\n    }\n\n    return res;\n  }\n\n  public static void run() {\n    // sandbox приклад\n    System.out.println(fizzBuzz(11));\n  }\n}"
      }
    },
    "big-o-notation::pairs": {
      "statement": "Write a function, pairs, that takes in a list as an argument. The function should return a list containing all unique pairs of elements. You may return the pairs in any order and the order of elements within a single pair does not matter. You can assume that the input list contains unique elements.",
      "examples": [
        "pairs(List.of(\"a\", \"b\", \"c\")); // ->\n// [\n//    [\"a\", \"b\"],\n//    [\"a\", \"c\"],\n//    [\"b\", \"c\"]\n// ]",
        "pairs(List.of(\"a\", \"b\", \"c\", \"d\")); // ->\n// [\n//    [\"a\", \"b\"],\n//    [\"a\", \"c\"],\n//    [\"a\", \"d\"],\n//    [\"b\", \"c\"],\n//    [\"b\", \"d\"],\n//    [\"c\", \"d\"]\n// ]",
        "pairs(List.of(\"cherry\", \"cranberry\", \"banana\", \"blueberry\", \"lime\", \"papaya\")); // ->\n// [ \n//   [ \"cherry\", \"cranberry\" ], \n//   [ \"cherry\", \"banana\" ], \n//   [ \"cherry\", \"blueberry\" ], \n//   [ \"cherry\", \"lime\" ], \n//   [ \"cherry\", \"papaya\" ], \n//   [ \"cranberry\", \"banana\" ], \n//   [ \"cranberry\", \"blueberry\" ], \n//   [ \"cranberry\", \"lime\" ], \n//   [ \"cranberry\", \"papaya\" ], \n//   [ \"banana\", \"blueberry\" ], \n//   [ \"banana\", \"lime\" ], \n//   [ \"banana\", \"papaya\" ], \n//   [ \"blueberry\", \"lime\" ], \n//   [ \"blueberry\", \"papaya\" ], \n//   [ \"lime\", \"papaya\" ] \n// ]"
      ],
      "testCases": [
        "pairs(List.of(\"a\", \"b\", \"c\")); // ->\n// [\n//    [\"a\", \"b\"],\n//    [\"a\", \"c\"],\n//    [\"b\", \"c\"]\n// ]",
        "pairs(List.of(\"a\", \"b\", \"c\", \"d\")); // ->\n// [\n//    [\"a\", \"b\"],\n//    [\"a\", \"c\"],\n//    [\"a\", \"d\"],\n//    [\"b\", \"c\"],\n//    [\"b\", \"d\"],\n//    [\"c\", \"d\"]\n// ]",
        "pairs(List.of(\"cherry\", \"cranberry\", \"banana\", \"blueberry\", \"lime\", \"papaya\")); // ->\n// [ \n//   [ \"cherry\", \"cranberry\" ], \n//   [ \"cherry\", \"banana\" ], \n//   [ \"cherry\", \"blueberry\" ], \n//   [ \"cherry\", \"lime\" ], \n//   [ \"cherry\", \"papaya\" ], \n//   [ \"cranberry\", \"banana\" ], \n//   [ \"cranberry\", \"blueberry\" ], \n//   [ \"cranberry\", \"lime\" ], \n//   [ \"cranberry\", \"papaya\" ], \n//   [ \"banana\", \"blueberry\" ], \n//   [ \"banana\", \"lime\" ], \n//   [ \"banana\", \"papaya\" ], \n//   [ \"blueberry\", \"lime\" ], \n//   [ \"blueberry\", \"papaya\" ], \n//   [ \"lime\", \"papaya\" ] \n// ]"
      ],
      "hints": [
        "Each pair should be formed by choosing two different positions in the list.",
        "A nested loop works naturally here: fix the first element, then pair it with every later element.",
        "Start the inner loop at i + 1 so you never repeat or reverse a pair."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<List<String>> pairs(List<String> elements) {\n    List<List<String>> result = new ArrayList<>();\n    \n    for (int i = 0; i < elements.size(); i += 1) {\n      for (int j = i + 1; j < elements.size(); j += 1) {\n        List<String> pair = List.of(elements.get(i), elements.get(j));\n        result.add(pair);\n      } \n    }\n    \n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of list | Time: O(n^2) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "pairs",
        "slug": "pairs",
        "module": "Big O Notation",
        "premium": false,
        "verbose": "Given array, return all pairs of elements without duplicates.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<List<String>> pairs(List<String> elements) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "\nimport java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n\n  public static List<List<String>> pairs(List<String> elements) {\n    List<List<String>> res = new ArrayList<>();\n\n    for (int i = 0; i < elements.size(); i++) {\n      for (int j = i + 1; j < elements.size(); j++) {\n        List<String> inner = new ArrayList<>();\n        inner.add(elements.get(i));\n        inner.add(elements.get(j));\n        res.add(inner);\n      }\n    }\n\n    return res;\n  }\n\n  public static void run() {\n    List<String> input = List.of(\"a\", \"b\", \"c\");\n    System.out.println(pairs(input));\n  }\n}"
      }
    },
    "hashing::anagrams": {
      "statement": "Write a method, anagrams, that takes in two strings as arguments. The method should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.",
      "examples": [
        "Source.anagrams(\"restful\", \"fluster\"); // -> true",
        "Source.anagrams(\"cats\", \"tocs\"); // -> false",
        "Source.anagrams(\"monkeyswrite\", \"newyorktimes\"); // -> true"
      ],
      "testCases": [
        "Source.anagrams(\"restful\", \"fluster\"); // -> true",
        "Source.anagrams(\"cats\", \"tocs\"); // -> false",
        "Source.anagrams(\"monkeyswrite\", \"newyorktimes\"); // -> true",
        "Source.anagrams(\"paper\", \"reapa\"); // -> false",
        "Source.anagrams(\"elbow\", \"below\"); // -> true",
        "Source.anagrams(\"tax\", \"taxi\"); // -> false",
        "Source.anagrams(\"taxi\", \"tax\"); // -> false",
        "Source.anagrams(\"night\", \"thing\"); // -> true",
        "Source.anagrams(\"abbc\", \"aabc\"); // -> false",
        "Source.anagrams(\"po\", \"popp\"); // -> false",
        "Source.anagrams(\"pp\", \"oo\"); // -> false",
        "Source.anagrams(\"restful\", \"fluster\") -> true",
        "Source.anagrams(\"cats\", \"tocs\") -> false",
        "Source.anagrams(\"monkeyswrite\", \"newyorktimes\") -> true",
        "Source.anagrams(\"paper\", \"reapa\") -> false",
        "Source.anagrams(\"elbow\", \"below\") -> true",
        "Source.anagrams(\"tax\", \"taxi\") -> false",
        "Source.anagrams(\"taxi\", \"tax\") -> false",
        "Source.anagrams(\"night\", \"thing\") -> true",
        "Source.anagrams(\"abbc\", \"aabc\") -> false",
        "Source.anagrams(\"po\", \"popp\") -> false",
        "Source.anagrams(\"pp\", \"oo\") -> false"
      ],
      "hints": [
        "If the strings have different lengths, they cannot be anagrams.",
        "Count how many times each character appears in the first string.",
        "Decrease those counts using the second string, then verify every final count is zero."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.HashMap;\n\nclass Source {\n  public static HashMap<Character, Integer> charCount(String s) {\n    HashMap<Character, Integer> count = new HashMap<Character, Integer>();\n    for (char c : s.toCharArray()) {\n      if (count.get(c) == null) {\n        count.put(c, 0);\n      }\n      int current = count.get(c);\n      count.put(c, current + 1);\n    }\n    return count;\n  }\n\n  public static boolean anagrams(String s1, String s2) {\n    return charCount(s1).equals(charCount(s2));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
          "complexity": "n = length of string 1 | m = length of string 2 | Time: O(n + m) | Space: O(n + m)"
        }
      ],
      "meta": {
        "name": "anagrams",
        "slug": "anagrams",
        "module": "Hashing",
        "premium": false,
        "verbose": "Check if two strings are anagrams.",
        "stub": "class Source {\n  public static boolean anagrams(String s1, String s2) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.HashMap;\n\nclass Source {\n\n  public static boolean anagrams(String s1, String s2) {\n    if (s1.length() != s2.length()) return false;\n\n    HashMap<Character, Integer> count = new HashMap<>();\n\n    for (int i = 0; i < s1.length(); i++) {\n      char c1 = s1.charAt(i);\n      char c2 = s2.charAt(i);\n\n      count.put(c1, count.getOrDefault(c1, 0) + 1);\n      count.put(c2, count.getOrDefault(c2, 0) - 1);\n    }\n\n    // перевірка що всі значення == 0\n    for (int value : count.values()) {\n      if (value != 0) return false;\n    }\n\n    return true;\n  }\n\n  public static void run() {\n    System.out.println(anagrams(\"restful\", \"fluster\")); // true\n    System.out.println(anagrams(\"cats\", \"tocs\"));       // false\n  }\n}"
      }
    },
    "hashing::most-frequent-char": {
      "statement": "Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string. You can assume that the input string is non-empty.",
      "examples": [
        "Source.mostFrequentChar(\"bookeeper\"); // -> 'e'",
        "Source.mostFrequentChar(\"david\"); // -> 'd'",
        "Source.mostFrequentChar(\"abby\"); // -> 'b'"
      ],
      "testCases": [
        "Source.mostFrequentChar(\"bookeeper\"); // -> 'e'",
        "Source.mostFrequentChar(\"david\"); // -> 'd'",
        "Source.mostFrequentChar(\"abby\"); // -> 'b'",
        "Source.mostFrequentChar(\"mississippi\"); // -> 'i'",
        "Source.mostFrequentChar(\"potato\"); // -> 'o'",
        "Source.mostFrequentChar(\"eleventennine\"); // -> 'e'",
        "Source.mostFrequentChar(\"riverbed\"); // -> 'r'",
        "Source.mostFrequentChar(\"bookkeeper\") -> 'e'",
        "Source.mostFrequentChar(\"david\") -> 'd'",
        "Source.mostFrequentChar(\"abby\") -> 'b'",
        "Source.mostFrequentChar(\"mississippi\") -> 'i'",
        "Source.mostFrequentChar(\"potato\") -> 'o'",
        "Source.mostFrequentChar(\"eleventennine\") -> 'e'",
        "Source.mostFrequentChar(\"riverbed\") -> 'r'"
      ],
      "hints": [
        "First count how many times each character appears.",
        "Ties should be broken by original order, so do not choose the winner from the map alone.",
        "After building the frequency map, scan the original string from left to right and return the first character with the maximum count."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using a HashMap",
          "code": "import java.util.HashMap;\n\nclass Source {\n  private static HashMap<Character, Integer> charCount(String s) {\n    HashMap<Character, Integer> count = new HashMap<Character, Integer>();\n    for (char c : s.toCharArray()) {\n      if (count.get(c) == null) {\n        count.put(c, 0);\n      }\n      count.put(c, count.get(c) + 1);\n    }\n    return count;\n  }\n  \n  public static char mostFrequentChar(String s) {\n    HashMap<Character, Integer> count = charCount(s);\n    char mostFrequent = '\\0';\n    for (char c : s.toCharArray()) {\n      if (mostFrequent == '\\0' || count.get(c) > count.get(mostFrequent)) {\n        mostFrequent = c;\n      }\n    }\n    return mostFrequent;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of string | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "most frequent char",
        "slug": "most-frequent-char",
        "module": "Hashing",
        "premium": false,
        "verbose": "Find the most frequent character in a string.",
        "stub": "class Source {\n  public static char mostFrequentChar(String s) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.HashMap;\n\nclass Source {\n\n  public static char mostFrequentChar(String s) {\n    int maxFreq = 0;\n    char res = '0';\n\n    HashMap<Character, Integer> dictionary = new HashMap<>();\n\n    // 1️⃣ рахуємо частоти + максимум\n    for (char c : s.toCharArray()) {\n      int newCount = dictionary.getOrDefault(c, 0) + 1;\n      dictionary.put(c, newCount);\n      maxFreq = Math.max(maxFreq, newCount);\n    }\n\n    // 2️⃣ проходимо по оригінальному порядку\n    for (char c : s.toCharArray()) {\n      if (dictionary.get(c) == maxFreq) {\n        return c;\n      }\n    }\n\n    return res; // theoretically unreachable якщо s не порожній\n  }\n\n  public static void run() {}\n}"
      }
    },
    "hashing::pair-sum": {
      "statement": "Write a method, pairSum, that takes in a List and a target sum as arguments. The function should return a List containing a pair of indices whose elements sum to the given target. The indices returned must be unique. Be sure to return the indices, not the elements themselves. There is guaranteed to be one such pair that sums to the target.",
      "examples": [
        "Source.pairSum(List.of(3, 2, 5, 4, 1), 8); // -> [0, 2]",
        "Source.pairSum(List.of(4, 7, 9, 2, 5, 1), 5); // -> [0, 5]",
        "Source.pairSum(List.of(4, 7, 9, 2, 5, 1), 3); // -> [3, 5]"
      ],
      "testCases": [
        "Source.pairSum(List.of(3, 2, 5, 4, 1), 8); // -> [0, 2]",
        "Source.pairSum(List.of(4, 7, 9, 2, 5, 1), 5); // -> [0, 5]",
        "Source.pairSum(List.of(4, 7, 9, 2, 5, 1), 3); // -> [3, 5]",
        "Source.pairSum(List.of(1, 6, 7, 2), 13); // -> [1, 2]",
        "Source.pairSum(List.of(9, 9), 18); // -> [0, 1]",
        "Source.pairSum(List.of(6, 4, 2, 8), 12); // -> [1, 3]",
        "Source.pairSum(List.of(5, 4, 1, 4), 8); // -> [1, 3]",
        "ArrayList<Integer> numbers = new ArrayList<>();\nfor (int i = 1; i <= 25000; i += 1) {\n  numbers.add(i);\n}\npairSum(numbers, 49999); // -> [ 24998, 24999 ]"
      ],
      "hints": [
        "For each number, ask: what value would I need to reach the target?",
        "Store previously seen numbers in a hash map along with their indices.",
        "If target - current already exists in the map, return the stored index and the current index."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using a HashMap",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static List<Integer> pairSum(List<Integer> numbers, int target) {\n    HashMap<Integer, Integer> previousNums = new HashMap<>();\n    for (int i = 0; i < numbers.size(); i += 1) {\n      int num = numbers.get(i);\n      int complement = target - num;\n      if (previousNums.containsKey(complement)) {\n        return List.of(previousNums.get(complement), i);\n      }\n      previousNums.put(num, i);\n    }\n    return null;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of input list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "pair sum",
        "slug": "pair-sum",
        "module": "Hashing",
        "premium": false,
        "verbose": "Find a pair of array elements that sum to a given target.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Integer> pairSum(List<Integer> numbers, int target) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\nimport java.util.ArrayList;\npublic class Source {\n  public static List<Integer> pairSum(List<Integer> numbers, int target) {\n    // HashMap для збереження: ключ = число, значення = його індекс\n    HashMap<Integer, Integer> previousNumbers = new HashMap<>();\n\n    for (int i = 0; i < numbers.size(); i += 1) {\n      int currentNum = numbers.get(i);\n      int complement = target - currentNum;\n\n      // Якщо ми вже бачили число, яке в сумі з поточним дає target\n      if (previousNumbers.containsKey(complement)) {\n        // Повертаємо список з двох індексів\n        return List.of(previousNumbers.get(complement), i);\n      }\n\n      // Зберігаємо поточне число та його індекс\n      previousNumbers.put(currentNum, i);\n    }\n\n    return null; // За умовою пара завжди існує\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n"
      }
    },
    "hashing::pair-product": {
      "statement": "Write a method, *pairProduct*, that takes in a List and a target product as arguments. The function should return a List containing a pair of indices whose elements multiply to the given target. The indices returned must be unique. Be sure to return the indices, not the elements themselves. There is guaranteed to be one such pair whose product is the target.",
      "examples": [
        "Source.pairProduct(List.of(3, 2, 5, 4, 1), 8); // -> [1, 3]",
        "Source.pairProduct(List.of(3, 2, 5, 4, 1), 10); // -> [1, 2]",
        "Source.pairProduct(List.of(4, 7, 9, 2, 5, 1), 5); // -> [4, 5]"
      ],
      "testCases": [
        "Source.pairProduct(List.of(3, 2, 5, 4, 1), 8); // -> [1, 3]",
        "Source.pairProduct(List.of(3, 2, 5, 4, 1), 10); // -> [1, 2]",
        "Source.pairProduct(List.of(4, 7, 9, 2, 5, 1), 5); // -> [4, 5]",
        "Source.pairProduct(List.of(4, 7, 9, 2, 5, 1), 35); // -> [1, 4]",
        "Source.pairProduct(List.of(4, 6, 8, 2), 16); // -> [2, 3]",
        "ArrayList<Integer> numbers = new ArrayList<>();\nfor (int i = 1; i <= 25000; i += 1) {\n  numbers.add(i);\n}\npairProduct(numbers, 624975000); // -> [ 24998, 24999 ]"
      ],
      "hints": [
        "For each number, ask: what value would I need to multiply with it to reach the target?",
        "Store previously seen numbers and their indices in a hash map.",
        "If target / current has already been seen, you found the matching pair of indices."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using a HashMap",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static List<Integer> pairProduct(List<Integer> numbers, int target) {\n    HashMap<Double, Integer> previousNums = new HashMap<>();\n    for (int i = 0; i < numbers.size(); i += 1) {\n      int num = numbers.get(i);\n      double complement = (double) target / num;\n      if (previousNums.containsKey(complement)) {\n        return List.of(previousNums.get(complement), i);\n      }\n      previousNums.put(Double.valueOf(num), i);\n    }\n    return null;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of input list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "pair product",
        "slug": "pair-product",
        "module": "Hashing",
        "premium": false,
        "verbose": "Find a pair of array elements that multiply to a given target.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Integer> pairProduct(List<Integer> numbers, int target) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static List<Integer> pairProduct(List<Integer> numbers, int target) {\n    HashMap<Double, Integer> previousNums = new HashMap<>();\n    for (int i = 0; i < numbers.size(); i += 1) {\n      int num = numbers.get(i);\n      double complement = (double) target / num;\n      if (previousNums.containsKey(complement)) {\n        return List.of(previousNums.get(complement), i);\n      }\n      previousNums.put(Double.valueOf(num), i);\n    }\n    return null;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n"
      }
    },
    "hashing::intersection": {
      "statement": "Write a method, intersection, that takes in two Lists, a,b, as arguments. The method should return a new List containing elements that are in both of the two Lists. You may assume that each input List does not contain duplicate elements.",
      "examples": [
        "List<Integer> a = List.of(4,2,1,6);\nList<Integer> b = List.of(3,6,9,2,10);\nSource.intersection(a, b) // -> [2,6]",
        "List<Integer> a = List.of(2,4,6);\nList<Integer> b = List.of(4,2);\nSource.intersection(a, b) // -> [2,4]",
        "List<Integer> a = List.of(4,2,1);\nList<Integer> b = List.of(1,2,4,6);\nSource.intersection(a, b) // -> [1,2,4]"
      ],
      "testCases": [
        "List<Integer> a = List.of(4,2,1,6);\nList<Integer> b = List.of(3,6,9,2,10);\nSource.intersection(a, b) // -> [2,6]",
        "List<Integer> a = List.of(2,4,6);\nList<Integer> b = List.of(4,2);\nSource.intersection(a, b) // -> [2,4]",
        "List<Integer> a = List.of(4,2,1);\nList<Integer> b = List.of(1,2,4,6);\nSource.intersection(a, b) // -> [1,2,4]",
        "List<Integer> a = List.of(0,1,2);\nList<Integer> b = List.of(10,11);\nSource.intersection(a, b) // -> []",
        "List<Integer> a = new ArrayList<>();\nList<Integer> b = new ArrayList<>();\n\nfor (int i = 0; i < 60000; i += 1) {\n  a.add(i);\n  b.add(i);\n}\nSource.intersection(a, b) // -> [0,1,2,3,..., 59999]"
      ],
      "hints": [
        "Checking every item of one list against every item of the other list is too slow for large inputs.",
        "Put one list into a HashSet so membership checks become fast.",
        "Then iterate through the other list and collect the elements that appear in the set."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "brute force (timeout)",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<Integer> intersection(List<Integer> listA, List<Integer> listB) {\n    List<Integer> result = new ArrayList<>();\n    \n    for (int ele : listA) {\n      if (listB.contains(ele)) {\n        result.add(ele);\n      }\n    }\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of array a, m = length of array b | Time: O(n*m) | Space: O(min(n,m))"
        },
        {
          "title": "using a HashSet (pass)",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashSet;\n\nclass Source {\n  public static List<Integer> intersection(List<Integer> listA, List<Integer> listB) {\n    HashSet<Integer> setA = new HashSet<>(listA);\n    List<Integer> result = new ArrayList<>();\n    \n    for (int ele : listB) {\n      if (setA.contains(ele)) {\n        result.add(ele);\n      }\n    }\n    \n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of list a, m = length of list b | Time: O(n+m) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "intersection",
        "slug": "intersection",
        "module": "Hashing",
        "premium": false,
        "verbose": "Find the intersection of two arrays.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Integer> intersection(List<Integer> listA, List<Integer> listB) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashSet;\n\nclass Source {\n  public static List<Integer> intersection(List<Integer> listA, List<Integer> listB) {\n    HashSet<Integer> setA = new HashSet<>(listA);\n    List<Integer> result = new ArrayList<>();\n    \n    for (int ele : listB) {\n      if (setA.contains(ele)) {\n        result.add(ele);\n      }\n    }\n    \n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "hashing::exclusive-items": {
      "statement": "Write a method, exclusiveItems, that takes in two lists, a,b, as arguments. The method should return a new list containing elements that are in either list but not both lists. You may assume that each input list does not contain duplicate elements.",
      "examples": [
        "List<Integer> a = List.of(4,2,1,6);\nList<Integer> b = List.of(3,6,9,2,10);\nexclusiveItems(a, b); // -> [4,1,3,9,10]",
        "List<Integer> a = List.of(2,4,6);\nList<Integer> b = List.of(4,2);\nexclusiveItems(a, b); // -> [6]",
        "List<Integer> a = List.of(4,2,1);\nList<Integer> b = List.of(1,2,4,6);\nexclusiveItems(a, b); // -> [6]"
      ],
      "testCases": [
        "List<Integer> a = List.of(4,2,1,6);\nList<Integer> b = List.of(3,6,9,2,10);\nexclusiveItems(a, b); // -> [4,1,3,9,10]",
        "List<Integer> a = List.of(2,4,6);\nList<Integer> b = List.of(4,2);\nexclusiveItems(a, b); // -> [6]",
        "List<Integer> a = List.of(4,2,1);\nList<Integer> b = List.of(1,2,4,6);\nexclusiveItems(a, b); // -> [6]",
        "List<Integer> a = List.of(0,1,2);\nList<Integer> b = List.of(10,11);\nexclusiveItems(a, b); // -> [0,1,2,10,11]",
        "List<Integer> a = new ArrayList<>();\nList<Integer> b = new ArrayList<>();\n\nfor (int i = 0; i < 60000; i += 1) {\n  a.add(i);\n  b.add(i);\n}\nexclusiveItems(a, b); // -> [ ]"
      ],
      "hints": [
        "You want the elements that are in exactly one of the two lists.",
        "A HashSet can help you check whether an element exists in the other list in O(1) time.",
        "Collect items from a that are not in b, then items from b that are not in a."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "brute force (timeout)",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<Integer> exclusiveItems(List<Integer> a, List<Integer> b) {\n    List<Integer> difference = new ArrayList<>();\n\n    for (int item : a) {\n      if (!b.contains(item)) {\n        difference.add(item);\n      }\n    }\n\n    for (int item : b) {\n      if (!a.contains(item)) {\n        difference.add(item);\n      }\n    }\n    \n    return difference;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of array a, m = length of array b | Time: O(n*m) | Space: O(n+m)"
        },
        {
          "title": "using set (pass)",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashSet;\n\nclass Source {\n  public static List<Integer> exclusiveItems(List<Integer> a, List<Integer> b) {\n    HashSet<Integer> setA = new HashSet<>(a);\n    HashSet<Integer> setB = new HashSet<>(b);\n    List<Integer> difference = new ArrayList<>();\n    \n    for (int item : a) {\n      if (!setB.contains(item)) {\n        difference.add(item);\n      }\n    }\n\n    for (int item : b) {\n      if (!setA.contains(item)) {\n        difference.add(item);\n      }\n    }\n    \n    return difference;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of array a, m = length of array b | Time: O(n+m) | Space: O(n+m)"
        }
      ],
      "meta": {
        "name": "exclusive items",
        "slug": "exclusive-items",
        "module": "Hashing",
        "premium": true,
        "verbose": "Find difference between two arrays.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Integer> exclusiveItems(List<Integer> a, List<Integer> b) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashSet;\n\nclass Source {\n  public static List<Integer> exclusiveItems(List<Integer> a, List<Integer> b) {\n    HashSet<Integer> setA = new HashSet<>(a);\n    HashSet<Integer> setB = new HashSet<>(b);\n    List<Integer> difference = new ArrayList<>();\n    \n    for (int item : a) {\n      if (!setB.contains(item)) {\n        difference.add(item);\n      }\n    }\n\n    for (int item : b) {\n      if (!setA.contains(item)) {\n        difference.add(item);\n      }\n    }\n    \n    return difference;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n"
      }
    },
    "hashing::all-unique": {
      "statement": "Write a method, allUnique, that takes in a list. The method should return a boolean indicating whether or not the list contains unique items.",
      "examples": [
        "allUnique(List.of(\"q\", \"r\", \"s\", \"a\")); // -> true",
        "allUnique(List.of(\"q\", \"r\", \"s\", \"a\", \"r\", \"z\")); // -> false",
        "allUnique(List.of(\"red\", \"blue\", \"yellow\", \"green\", \"orange\")); // -> true"
      ],
      "testCases": [
        "allUnique(List.of(\"q\", \"r\", \"s\", \"a\")); // -> true",
        "allUnique(List.of(\"q\", \"r\", \"s\", \"a\", \"r\", \"z\")); // -> false",
        "allUnique(List.of(\"red\", \"blue\", \"yellow\", \"green\", \"orange\")); // -> true",
        "allUnique(List.of(\"cat\", \"cat\", \"dog\")); // -> false",
        "allUnique(List.of(\"a\", \"u\", \"t\", \"u\", \"m\", \"n\")); // -> false",
        "Source.allUnique(List.of(\"q\", \"r\", \"s\", \"a\")) -> true",
        "Source.allUnique(List.of(\"q\", \"r\", \"s\", \"a\", \"r\", \"z\")) -> false",
        "Source.allUnique(List.of(\"red\", \"blue\", \"yellow\", \"green\", \"orange\")) -> true",
        "Source.allUnique(List.of(\"cat\", \"cat\", \"dog\")) -> false",
        "Source.allUnique(List.of(\"a\", \"u\", \"t\", \"u\", \"m\", \"n\")) -> false"
      ],
      "hints": [
        "You only need to know whether an element has been seen before.",
        "Use a HashSet while iterating through the list.",
        "If you ever encounter a value that is already in the set, return false; otherwise finish and return true."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using hash",
          "code": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.Set;\n\nclass Source {\n  public static boolean allUnique(List<String> items) {\n    Set<String> uniqueItems = new HashSet<>(items);\n    return uniqueItems.size() == items.size();\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = list length | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "all unique",
        "slug": "all-unique",
        "module": "Hashing",
        "premium": true,
        "verbose": "Check if an array contains unique elements.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean allUnique(List<String> items) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.Set;\n\nclass Source {\n    public static boolean allUnique(List<String> items) {\n        // Створюємо HashSet для зберігання унікальних рядків\n        Set<String> set = new HashSet<>();\n        \n        for (String item : items) {\n            // Метод .add() у Java повертає false, якщо елемент уже є в сеті\n            if (!set.add(item)) {\n                return false; // Знайшли дублікат — негайно виходимо\n            }\n        }\n        \n        return true; // Якщо пройшли весь цикл — усі елементи унікальні\n    }\n\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n"
      }
    },
    "hashing::intersection-with-dupes": {
      "statement": "Write a method, intersectionWithDupes, that takes in two lists, a,b, as arguments. The method should return a new list containing elements that are common to both input lists. The elements in the result should appear as many times as they occur in both input lists. You can return the result in any order.",
      "examples": [
        "intersectionWithDupes(\n  List.of(\"a\", \"b\", \"c\", \"b\"), \n  List.of(\"x\", \"y\", \"b\", \"b\")\n); // -> [\"b\", \"b\"]",
        "intersectionWithDupes(\n  List.of(\"q\", \"b\", \"m\", \"s\", \"s\", \"s\"), \n  List.of(\"s\", \"m\", \"s\")\n); // -> [\"m\", \"s\", \"s\"]",
        "intersectionWithDupes(\n  List.of(\"p\", \"r\", \"r\", \"r\"), \n  List.of(\"r\")\n); // -> [\"r\"]"
      ],
      "testCases": [
        "intersectionWithDupes(\n  List.of(\"a\", \"b\", \"c\", \"b\"), \n  List.of(\"x\", \"y\", \"b\", \"b\")\n); // -> [\"b\", \"b\"]",
        "intersectionWithDupes(\n  List.of(\"q\", \"b\", \"m\", \"s\", \"s\", \"s\"), \n  List.of(\"s\", \"m\", \"s\")\n); // -> [\"m\", \"s\", \"s\"]",
        "intersectionWithDupes(\n  List.of(\"p\", \"r\", \"r\", \"r\"), \n  List.of(\"r\")\n); // -> [\"r\"]",
        "intersectionWithDupes(\n  List.of(\"r\"), \n  List.of(\"p\", \"r\", \"r\", \"r\")\n); // -> [\"r\"]",
        "intersectionWithDupes(\n  List.of(\"t\", \"v\", \"u\"), \n  List.of(\"g\", \"e\", \"d\", \"f\")\n); // -> [ ]",
        "intersectionWithDupes(\n  List.of(\"a\", \"a\", \"a\", \"a\", \"a\", \"a\"), \n  List.of(\"a\", \"a\", \"a\", \"a\")\n); // -> [\"a\", \"a\", \"a\", \"a\"]",
        "List<String> a = new ArrayList<>();\nList<String> b = new ArrayList<>();\nfor (int i = 0; i < 200000; i += 1) {\n  a.add(Integer.toString(i));\n  b.add(Integer.toString(i));\n}\n\nintersectionWithDupes(a, b); // -> [0, 1, 2, ..., 199999]"
      ],
      "hints": [
        "Since duplicates matter, a set is not enough by itself.",
        "Count how many times each value appears in one list using a HashMap.",
        "While scanning the other list, only add a value to the result if its remaining count is still greater than zero, then decrement that count."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using hash map",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\n\nclass Source {\n  public static List<String> intersectionWithDupes(List<String> listA, List<String> listB) {\n    HashMap<String, Integer> countA = eleCount(listA);\n    HashMap<String, Integer> countB = eleCount(listB);\n    List<String> elements = new ArrayList<>();\n\n    for (String ele : countA.keySet()) {\n      if (countB.containsKey(ele)) {\n        for (int i = 0; i < Math.min(countA.get(ele), countB.get(ele)); i += 1) {\n          elements.add(ele);\n        }\n      }\n    }\n    \n    return elements;\n  }\n\n  private static HashMap<String, Integer> eleCount(List<String> elements) {\n    HashMap<String, Integer> count = new HashMap<>();\n\n    for (String ele : elements) {\n      if (!count.containsKey(ele)) {\n        count.put(ele, 0);\n      }\n      count.put(ele, count.get(ele) + 1);\n    }\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of array a | m = length of array b | Time: O(n+m) | Space: O(n+m)"
        }
      ],
      "meta": {
        "name": "intersection with dupes",
        "slug": "intersection-with-dupes",
        "module": "Hashing",
        "premium": true,
        "verbose": "Find the intersection of two arrays, with duplicates",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<String> intersectionWithDupes(List<String> listA, List<String> listB) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\n\nimport java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.Map;\n\nclass Source {\n    public static List<String> intersectionWithDupes(List<String> listA, List<String> listB) {\n        Map<String, Integer> counts = new HashMap<>();\n        List<String> res = new ArrayList<>();\n\n        // Крок 1: Рахуємо частоту елементів у listA\n        for (String item : listA) {\n            // getOrDefault повертає 0, якщо ключа немає, і ми додаємо 1\n            counts.put(item, counts.getOrDefault(item, 0) + 1);\n        }\n\n        // Крок 2: Перевіряємо listB\n        for (String item : listB) {\n            int currentCount = counts.getOrDefault(item, 0);\n            if (currentCount > 0) {\n                res.add(item);\n                // Зменшуємо лічильник (\"списуємо зі складу\")\n                counts.put(item, currentCount - 1);\n            }\n        }\n\n        return res;\n    }\n\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "beginner-recursion::sum-numbers-recursive": {
      "statement": "Watch the Approach video first! Write a method sumNumbersRecursive that takes in a list of numbers and returns the sum of all the numbers in the list. All elements will be integers. Solve this recursively.",
      "examples": [
        "Source.sumNumbersRecursive(List.of(5, 2, 9, 10)); // -> 26",
        "Source.sumNumbersRecursive(List.of(1, -1, 1, -1, 1, -1, 1)); // -> 1",
        "Source.sumNumbersRecursive(List.of()); // -> 0"
      ],
      "testCases": [
        "Source.sumNumbersRecursive(List.of(5, 2, 9, 10)); // -> 26",
        "Source.sumNumbersRecursive(List.of(1, -1, 1, -1, 1, -1, 1)); // -> 1",
        "Source.sumNumbersRecursive(List.of()); // -> 0",
        "Source.sumNumbersRecursive(List.of(1000, 0, 0, 0, 0, 0, 1)); // -> 1001",
        "Source.sumNumbersRecursive(List.of(700, 70, 7)); // -> 777",
        "Source.sumNumbersRecursive(List.of(-10, -9, -8, -7, -6, -5, -4, -3, -2, -1)); // -> -55",
        "Source.sumNumbersRecursive(List.of(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)); // -> 0",
        "Source.sumNumbersRecursive(List.of(123456789, 12345678, 1234567, 123456, 12345, 1234, 123, 12, 1, 0)); // -> 137174205",
        "Source.sumNumbersRecursive(List.of(5, 2, 9, 10)) -> 26",
        "Source.sumNumbersRecursive(List.of(1, -1, 1, -1, 1, -1, 1)) -> 1",
        "Source.sumNumbersRecursive(List.of()) -> 0",
        "Source.sumNumbersRecursive(List.of(1000, 0, 0, 0, 0, 0, 1)) -> 1001",
        "Source.sumNumbersRecursive(List.of(700, 70, 7)) -> 777",
        "Source.sumNumbersRecursive(List.of(-10, -9, -8, -7, -6, -5, -4, -3, -2, -1)) -> -55",
        "Source.sumNumbersRecursive(List.of(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)) -> 0",
        "Source.sumNumbersRecursive(List.of(123456789, 12345678, 1234567, 123456, 12345, 1234, 123, 12, 1, 0)) -> 137174205"
      ],
      "hints": [
        "Think about the smallest possible input that already has a known answer.",
        "If the list is not empty, take the first number and reduce the problem to the rest of the list.",
        "Your recursive step can look like: first element + sum of the remaining sublist."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "import java.util.List;\n\nclass Source {\n  public static int sumNumbersRecursive(List<Integer> numbers) {\n    if(numbers.size() == 0) {\n      return 0;\n    }\n    return numbers.get(0) + sumNumbersRecursive(numbers.subList(1, numbers.size()));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(n^2) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "sum numbers recursive",
        "slug": "sum-numbers-recursive",
        "module": "Beginner Recursion",
        "premium": false,
        "verbose": "Find the sum of an array, recursively.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int sumNumbersRecursive(List<Integer> numbers) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\n\nclass Source {\n  public static int sumNumbersRecursive(List<Integer> numbers) {\n    if(numbers.size() == 0) {\n      return 0;\n    }\n    return numbers.get(0) + sumNumbersRecursive(numbers.subList(1, numbers.size()));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "beginner-recursion::factorial": {
      "statement": "Write a method, factorial, that takes in a number n and returns the factorial of that number. The factorial of n is the product of all the positive numbers less than or equal to n. You must solve this recursively. ```plaintext For example, the factorial of 6 is: 6 * 5 * 4 * 3 * 2 * 1 = 720 ``` You can assume that n is a non-negative integer. Note that the factorial of 0 is defined to be 1 ([wiki](https://en.wikipedia.org/wiki/Factorial)).",
      "examples": [
        "For example, the factorial of 6 is:\n\n6 * 5 * 4 * 3 * 2 * 1 = 720",
        "Source.factorial(3); // -> 6",
        "Source.factorial(6); // -> 720"
      ],
      "testCases": [
        "For example, the factorial of 6 is:\n\n6 * 5 * 4 * 3 * 2 * 1 = 720",
        "Source.factorial(3); // -> 6",
        "Source.factorial(6); // -> 720",
        "Source.factorial(18); // -> 6402373705728000",
        "Source.factorial(1); // -> 1",
        "Source.factorial(13); // -> 6227020800",
        "Source.factorial(0); // -> 1",
        "Source.factorial(3) -> 6",
        "Source.factorial(6) -> 720",
        "Source.factorial(18) -> 6402373705728000L",
        "Source.factorial(1) -> 1",
        "Source.factorial(13) -> 6227020800L",
        "Source.factorial(0) -> 1"
      ],
      "hints": [
        "Factorial multiplies n by the factorial of the previous number.",
        "You need a base case where the recursion stops.",
        "Use factorial(n - 1) and remember that factorial(0) = 1."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "class Source {\n  public static long factorial(int n) {\n    if (n == 0) {\n      return 1;\n    }\n    return n * factorial(n - 1);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "factorial",
        "slug": "factorial",
        "module": "Beginner Recursion",
        "premium": true,
        "verbose": "Calculate the factorial of a number, recursively!",
        "stub": "class Source {\n  public static long factorial(int n) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Source {\n  public static long factorial(int n) {\n    if(n<1) return 1;\n        \n        return n * factorial(n-1); \n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n"
      }
    },
    "beginner-recursion::sum-of-lengths": {
      "statement": "Write a method sumOfLengths that takes in a list of strings and returns the total length of the strings. You must solve this recursively.",
      "examples": [
        "sumOfLengths(List.of(\"goat\", \"cat\", \"purple\")); // -> 13",
        "sumOfLengths(List.of(\"bike\", \"at\", \"pencils\", \"phone\")); // -> 18",
        "sumOfLengths(List.of()); // -> 0"
      ],
      "testCases": [
        "sumOfLengths(List.of(\"goat\", \"cat\", \"purple\")); // -> 13",
        "sumOfLengths(List.of(\"bike\", \"at\", \"pencils\", \"phone\")); // -> 18",
        "sumOfLengths(List.of()); // -> 0",
        "sumOfLengths(List.of(\"\", \" \", \"  \", \"   \", \"    \", \"     \")); // -> 15",
        "sumOfLengths(List.of(\"0\", \"313\", \"1234567890\")); // -> 14",
        "Source.sumOfLengths(List.of(\"goat\", \"cat\", \"purple\")) -> 13",
        "Source.sumOfLengths(List.of(\"bike\", \"at\", \"pencils\", \"phone\")) -> 18",
        "Source.sumOfLengths(List.of()) -> 0",
        "Source.sumOfLengths(List.of(\"\", \" \", \" \", \" \", \" \", \" \")) -> 15",
        "Source.sumOfLengths(List.of(\"0\", \"313\", \"1234567890\")) -> 14"
      ],
      "hints": [
        "Think about the empty list of strings as the base case.",
        "If the list is not empty, use the length of the first string plus the answer for the rest.",
        "A recursive step can be: strings.get(0).length() + sumOfLengths(strings.subList(1, strings.size()))."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "import java.util.List;\n\nclass Source {\n  public static int sumOfLengths(List<String> strings) {\n    if (strings.size() == 0) {\n      return 0;\n    }\n    return strings.get(0).length() + sumOfLengths(strings.subList(1, strings.size()));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(n^2) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "sum of lengths",
        "slug": "sum-of-lengths",
        "module": "Beginner Recursion",
        "premium": true,
        "verbose": "Calculate the sum of string lengths within an array, recursively.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int sumOfLengths(List<String> strings) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\n\nclass Source {\n  public static int sumOfLengths(List<String> strings) {\nif (strings.isEmpty()) {\n        return 0;\n    }\n\n    // Рекурсивний крок\n    // strings.get(0).length() — довжина першого рядка\n    // strings.subList(1, strings.size()) — аналог [1..] (весь список без першого елемента)\n    return strings.get(0).length() + sumOfLengths(strings.subList(1, strings.size()));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n"
      }
    },
    "beginner-recursion::reverse-string-recursive": {
      "statement": "Write a method, reverseString, that takes in a string as an argument. The method should return the string with its characters in reverse order. You must do this recursively.",
      "examples": [
        "reverseString(\"hello\"); // -> \"olleh\"",
        "reverseString(\"abcdefg\"); // -> \"gfedcba\"",
        "reverseString(\"stopwatch\"); // -> \"hctawpots\""
      ],
      "testCases": [
        "reverseString(\"hello\"); // -> \"olleh\"",
        "reverseString(\"abcdefg\"); // -> \"gfedcba\"",
        "reverseString(\"stopwatch\"); // -> \"hctawpots\"",
        "reverseString(\"\"); // -> \"\"",
        "Source.reverseString(\"hello\") -> \"olleh\"",
        "Source.reverseString(\"abcdefg\") -> \"gfedcba\"",
        "Source.reverseString(\"stopwatch\") -> \"hctawpots\"",
        "Source.reverseString(\"\") -> \"\""
      ],
      "hints": [
        "Use the empty string as the base case.",
        "Keep the first character aside and recursively reverse the rest of the string.",
        "Append the first character after the recursive call returns."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "class Source {\n  public static String reverseString(String s) {\n    if (s.length() == 0) {\n      return \"\";\n    }\n\n    return reverseString(s.substring(1)) + s.charAt(0);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(n^2) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "reverse-string-recursive",
        "slug": "reverse-string-recursive",
        "module": "Beginner Recursion",
        "premium": true,
        "verbose": "Reverse a string, recursively.",
        "stub": "class Source {\n  public static String reverseString(String s) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Source {\n  public static String reverseString(String s) {\n    if (s.isEmpty()) {\n      return \"\";\n    }\n    return reverseString(s.substring(1)) + s.charAt(0);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n"
      }
    },
    "beginner-recursion::palindrome-recursive": {
      "statement": "Write a method, palindrome, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards. You must solve this recursively.",
      "examples": [
        "palindrome(\"pop\") // -> true",
        "palindrome(\"kayak\") // -> true",
        "palindrome(\"pops\") // -> false"
      ],
      "testCases": [
        "palindrome(\"pop\") // -> true",
        "palindrome(\"kayak\") // -> true",
        "palindrome(\"pops\") // -> false",
        "palindrome(\"boot\") // -> false",
        "palindrome(\"rotator\") // -> true",
        "palindrome(\"abcbca\") // -> false",
        "palindrome(\"\") // -> true",
        "Source.palindrome(\"pop\") -> true",
        "Source.palindrome(\"kayak\") -> true",
        "Source.palindrome(\"pops\") -> false",
        "Source.palindrome(\"boot\") -> false",
        "Source.palindrome(\"rotator\") -> true",
        "Source.palindrome(\"abcbca\") -> false",
        "Source.palindrome(\"\") -> true"
      ],
      "hints": [
        "A string of length 0 or 1 is automatically a palindrome.",
        "Compare the first and last characters before recursing.",
        "If they match, continue on the substring that excludes both ends."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "class Source {\n  public static boolean palindrome(String s) {\n    if (s.length() == 0 || s.length() == 1) {\n      return true;\n    }\n\n    if (s.charAt(0) != s.charAt(s.length() - 1)) {\n      return false;\n    }\n\n    return palindrome(s.substring(1, s.length() - 1));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(n^2) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "palindrome-recursive",
        "slug": "palindrome-recursive",
        "module": "Beginner Recursion",
        "premium": true,
        "verbose": "Check if a string is the same forwards and backwards, recursively!",
        "stub": "class Source {\n  public static boolean palindrome(String s) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Source {\n  public static boolean palindrome(String s) {\n    if (s.length() == 0 || s.length() == 1) {\n      return true;\n    }\n\n    if (s.charAt(0) != s.charAt(s.length() - 1)) {\n      return false;\n    }\n\n    return palindrome(s.substring(1, s.length() - 1));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "beginner-recursion::fibonacci": {
      "statement": "Write a method, fibonacci, that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence. The 0-th number of the sequence is 0. The 1-st number of the sequence is 1. To generate further numbers of the sequence, calculate the sum of previous two numbers. You must solve this recursively.",
      "examples": [
        "Source.fibonacci(0); // -> 0",
        "Source.fibonacci(1); // -> 1",
        "Source.fibonacci(2); // -> 1"
      ],
      "testCases": [
        "Source.fibonacci(0); // -> 0",
        "Source.fibonacci(1); // -> 1",
        "Source.fibonacci(2); // -> 1",
        "Source.fibonacci(3); // -> 2",
        "Source.fibonacci(4); // -> 3",
        "Source.fibonacci(5); // -> 5",
        "Source.fibonacci(8); // -> 21",
        "Source.fibonacci(0) -> 0",
        "Source.fibonacci(1) -> 1",
        "Source.fibonacci(2) -> 1",
        "Source.fibonacci(3) -> 2",
        "Source.fibonacci(4) -> 3",
        "Source.fibonacci(5) -> 5",
        "Source.fibonacci(8) -> 21"
      ],
      "hints": [
        "The 0th and 1st Fibonacci numbers are your base cases.",
        "Every other Fibonacci number is the sum of the previous two.",
        "Use the recurrence fibonacci(n - 1) + fibonacci(n - 2)."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursion",
          "code": "class Source {\n  public static int fibonacci(int n) {\n    if (n == 0 || n == 1) {\n      return n;\n    }\n    return fibonacci(n - 1) + fibonacci(n - 2);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(2^n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "fibonacci",
        "slug": "fibonacci",
        "module": "Beginner Recursion",
        "premium": true,
        "verbose": "Calculate the n-th number of the fibonacci sequence.",
        "stub": "class Source {\n  public static int fibonacci(int n) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Source {\n  public static int fibonacci(int n) {\n  if(n==0) return 0;\n        if(n==1) return 1;\n        // TODO: Твоя рекурсивна логіка\n        // 1. Базові випадки:\n        //    Якщо n = 0, поверни 0.\n        //    Якщо n = 1, поверни 1.\n        // 2. Рекурсивний крок:\n        //    fibonacci(n - 1) + fibonacci(n - 2)\n        \n        return fibonacci(n - 1) + fibonacci(n - 2); \n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n"
      }
    },
    "linked-list-i::linked-list-values": {
      "statement": "Write a method, linkedListValues, that takes in the head of a linked list as an argument. The method should return a List containing all values of the nodes in the linked list. Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive! -AZ",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.linkedListValues(a); \n// -> [ \"a\", \"b\", \"c\", \"d\" ]",
        "Node<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\n\nx.next = y;\n\n// x -> y\n\nSource.linkedListValues(x); \n// -> [ \"x\", \"y\" ]",
        "Node<String> q = new Node<>(\"q\");\n\n// q\n\nSource.linkedListValues(q); \n// -> [ \"q\" ]"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.linkedListValues(a); \n// -> [ \"a\", \"b\", \"c\", \"d\" ]",
        "Node<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\n\nx.next = y;\n\n// x -> y\n\nSource.linkedListValues(x); \n// -> [ \"x\", \"y\" ]",
        "Node<String> q = new Node<>(\"q\");\n\n// q\n\nSource.linkedListValues(q); \n// -> [ \"q\" ]",
        "Source.linkedListValues(null); \n// -> [ ]"
      ],
      "hints": [
        "Start at the head and move node by node until you reach null.",
        "Create a result list and append each node's value as you traverse.",
        "A loop with a current pointer works well here; recursive collection also works."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static List<String> linkedListValues(Node<String> head) {\n    List<String> values = new ArrayList<>();\n    Node<String> current = head;\n    while (current != null) {\n      values.add(current.val);\n      current = current.next;\n    }\n    return values;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        },
        {
          "title": "recursive",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static List<String> linkedListValues(Node<String> head) {\n    List<String> values = new ArrayList<>();\n    linkedListValues(head, values);\n    return values;\n  }\n  \n  public static void linkedListValues(Node<String> head, List<String> values) {\n    if (head == null) {\n      return;\n    }\n    values.add(head.val);\n    linkedListValues(head.next, values);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "linked list values",
        "slug": "linked-list-values",
        "module": "Linked List I",
        "premium": false,
        "verbose": "Return an array of all values of a linked list.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static List<String> linkedListValues(Node<String> head) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static List<String> linkedListValues(Node<String> head) {\n    // В Java List — це інтерфейс, тому створюємо ArrayList\n    List<String> list = new ArrayList<>(); \n    Node<String> curr = head;\n\n    // Твоя оригінальна логіка:\n    while (curr != null) {\n        list.add(curr.val); // В Java замість .Add() використовується .add()\n        curr = curr.next;\n    }\n\n    // Твій оригінальний return (в Java метод має повертати об'єкт, якщо вказано List)\n    return list; \n  }\n\n  public static void run() {\n    // Створимо тестовий список: a -> b -> c\n    Node<String> a = new Node<>(\"a\");\n    Node<String> b = new Node<>(\"b\");\n    Node<String> c = new Node<>(\"c\");\n    a.next = b;\n    b.next = c;\n\n    List<String> result = linkedListValues(a);\n    System.out.println(result); // Подивимось, що виведе твоя логіка\n  }\n}"
      }
    },
    "linked-list-i::sum-list": {
      "statement": "Write a method, sumList, that takes in the head of a linked list containing integers as an argument. The method should return the total sum of all values in the linked list.",
      "examples": [
        "Node<Integer> a = new Node<>(2);\nNode<Integer> b = new Node<>(8);\nNode<Integer> c = new Node<>(3);\nNode<Integer> d = new Node<>(-1);\nNode<Integer> e = new Node<>(7);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\n\n// 2 -> 8 -> 3 -> -1 -> 7\n\nSource.sumList(a); // 19",
        "Node<Integer> x = new Node<>(38);\nNode<Integer> y = new Node<>(4);\n\nx.next = y;\n\n// 38 -> 4\n\nSource.sumList(x); // 42",
        "Node<Integer> z = new Node<>(100);\n\n// 100\n\nSource.sumList(z); // 100"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(2);\nNode<Integer> b = new Node<>(8);\nNode<Integer> c = new Node<>(3);\nNode<Integer> d = new Node<>(-1);\nNode<Integer> e = new Node<>(7);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\n\n// 2 -> 8 -> 3 -> -1 -> 7\n\nSource.sumList(a); // 19",
        "Node<Integer> x = new Node<>(38);\nNode<Integer> y = new Node<>(4);\n\nx.next = y;\n\n// 38 -> 4\n\nSource.sumList(x); // 42",
        "Node<Integer> z = new Node<>(100);\n\n// 100\n\nSource.sumList(z); // 100",
        "Source.sumList(null); // 0",
        "Source.sumList(a) -> 19",
        "Source.sumList(x) -> 42",
        "Source.sumList(z) -> 100",
        "Source.sumList(null) -> 0"
      ],
      "hints": [
        "Traverse the list from head to tail.",
        "Keep a running total and add each node's value into it.",
        "Stop when the current pointer becomes null and return the accumulated sum."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static int sumList(Node<Integer> head) {\n    int sum = 0;\n    Node<Integer> current = head;\n    while (current != null) {\n      sum += current.val;\n      current = current.next;\n    }\n    return sum;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(1)"
        },
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static int sumList(Node<Integer> head) {\n    if (head == null) {\n      return 0;\n    }\n    return head.val + sumList(head.next);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "sum list",
        "slug": "sum-list",
        "module": "Linked List I",
        "premium": false,
        "verbose": "Sum all values in a linked list.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static int sumList(Node<Integer> head) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static int sumList(Node<Integer> head) {\n    var sum = 0;\n    var cur = head;\n    \n    while (cur != null) {\n        sum += cur.val;\n        cur = cur.next;\n    }\n    \n    // В Java метод, що повертає int, обов'язково має повертати значення\n    return sum; \n  }\n\n  public static void run() {\n    // Створимо список для тесту: 10 -> 20 -> 30\n    Node<Integer> node1 = new Node<>(10);\n    Node<Integer> node2 = new Node<>(20);\n    Node<Integer> node3 = new Node<>(30);\n    node1.next = node2;\n    node2.next = node3;\n\n    int total = sumList(node1);\n    System.out.println(\"Sum: \" + total); // Має вивести 60\n  }\n}"
      }
    },
    "linked-list-i::linked-list-find": {
      "statement": "Write a method, linkedListFind, that takes in the head of a linked list and a target value. The method should return a boolean indicating whether or not the linked list contains the target.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.linkedListFind(a, \"c\"); // true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.linkedListFind(a, \"d\"); // true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.linkedListFind(a, \"q\"); // false"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.linkedListFind(a, \"c\"); // true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.linkedListFind(a, \"d\"); // true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.linkedListFind(a, \"q\"); // false",
        "Node<String> node1 = new Node<>(\"jason\");\nNode<String> node2 = new Node<>(\"leneli\");\n\nnode1.next = node2;\n\n// jason -> leneli\n\nSource.linkedListFind(node1, \"jason\"); // true",
        "Node<Integer> node1 = new Node<>(42);\n\n// 42\n\nSource.linkedListFind(node1, 42); // true",
        "Node<Integer> node1 = new Node<>(42);\n\n// 42\n\nSource.linkedListFind(node1, 100); // false",
        "Source.run(a, \"c\") -> true",
        "Source.run(a, \"d\") -> true",
        "Source.run(a, \"q\") -> false",
        "Source.run(node1, \"jason\") -> true",
        "Source.run(node1, 42) -> true",
        "Source.run(node1, 100) -> false"
      ],
      "hints": [
        "Visit each node one by one until the list ends.",
        "Compare the current node's value with the target at every step.",
        "Return true as soon as you find a match; if you hit null first, return false."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean linkedListFind(Node<T> head, T target) {\n    Node current = head;\n    while (current != null) {\n      if (target == current.val) {\n        return true;\n      }\n      current = current.next;\n    }\n    return false;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(1)"
        },
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean linkedListFind(Node<T> head, T target) {\n    if (head == null) {\n      return false;\n    }\n    if (head.val == target) {\n      return true;\n    }\n    return linkedListFind(head.next, target);\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "linked list find",
        "slug": "linked-list-find",
        "module": "Linked List I",
        "premium": false,
        "verbose": "Check if a linked list contains a given value.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean linkedListFind(Node<T> head, T target) {\n    // todo\n    return;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean linkedListFind(Node<T> head, T target) {\n    // В Java 'var res = bool;' не спрацює, бо 'bool' - це не значення.\n    // Оскільки ти не використовуєш res далі, я залишив його як коментар.\n    // var res = false; \n    \n    var cur = head;\n    while (cur != null) {\n      // Для порівняння об'єктів (Generic T) в Java краще використовувати .equals(),\n      // але я залишив порівняння як у тебе, щоб не змінювати логіку.\n      if (cur.val == target) {\n        return true;\n      }\n      cur = cur.next;\n    }\n    return false;\n  }\n  \n  public static void run() {\n    // Створимо список: \"apple\" -> \"banana\" -> \"cherry\"\n    Node<String> a = new Node<>(\"apple\");\n    Node<String> b = new Node<>(\"banana\");\n    Node<String> c = new Node<>(\"cherry\");\n    a.next = b;\n    b.next = c;\n\n    System.out.println(linkedListFind(a, \"banana\")); // true\n    System.out.println(linkedListFind(a, \"pear\"));   // false\n  } \n}"
      }
    },
    "linked-list-i::get-node-value": {
      "statement": "Write a method, getNodeValue, that takes in the head of a linked list and an index. The method should return the value of the linked list at the specified index. If there is no node at the given index, then return *null*.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.getNodeValue(a, 2); // \"c\"",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.getNodeValue(a, 3); // \"d\"",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.getNodeValue(a, 7); // null"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.getNodeValue(a, 2); // \"c\"",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.getNodeValue(a, 3); // \"d\"",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.getNodeValue(a, 7); // null",
        "Node<String> node1 = new Node<>(\"banana\");\nNode<String> node2 = new Node<>(\"mango\");\n\nnode1.next = node2;\n\n// banana -> mango\n\nSource.getNodeValue(node1, 0); // \"banana\"",
        "Node<String> node1 = new Node<>(\"banana\");\nNode<String> node2 = new Node<>(\"mango\");\n\nnode1.next = node2;\n\n// banana -> mango\n\nSource.getNodeValue(node1, 1); // \"mango\"",
        "Source.run(a, 2) -> \"c\"",
        "Source.run(a, 3) -> \"d\"",
        "Source.run(a, 7) -> null",
        "Source.run(node1, 0) -> \"banana\"",
        "Source.run(node1, 1) -> \"mango\""
      ],
      "hints": [
        "Walk through the list while keeping track of the current index.",
        "When your counter matches the target index, return that node's value.",
        "If the list ends before the counter reaches the index, return null."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> T getNodeValue(Node<T> head, int index) {\n    int count = 0;\n    Node<T> current = head;\n    while (current != null) {\n      if (count == index) {\n        return current.val;\n      }\n      current = current.next;\n      count += 1;\n    }\n    return null;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(1)"
        },
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> T getNodeValue(Node<T> head, int index) {\n    if (head == null) {\n      return null;\n    }\n    if (index == 0) {\n      return head.val;\n    }\n    return getNodeValue(head.next, index - 1);\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "get node value",
        "slug": "get-node-value",
        "module": "Linked List I",
        "premium": false,
        "verbose": "Return the value of a linked list at a given index.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> T getNodeValue(Node<T> head, int index) {\n    // todo\n    return;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> T getNodeValue(Node<T> head, int index) {\n    var cur = head;\n    var ind = 0; // Додано крапку з комою\n\n    // Твоя оригінальна логіка:\n    // Зверни увагу: cur.val == index може викликати помилку типів, \n    // якщо T - це не Integer, але я залишив як у тебе.\n    while (cur != null && (Object)ind != (Object)index) {\n        ind++;\n        // Якщо індекс збігається, нам потрібно зупинитися і повернути значення,\n        // але в цій логіці ми йдемо далі:\n        cur = cur.next;\n    }\n    \n    // В Java не можна повернути cur (Node), якщо метод очікує T (Value)\n    return cur != null ? cur.val : null; \n  }\n  \n  public static void run() {\n    Node<String> a = new Node<>(\"a\");\n    Node<String> b = new Node<>(\"b\");\n    Node<String> c = new Node<>(\"c\");\n    a.next = b;\n    b.next = c;\n\n    // Спробуй запустити і подивись, чи знайде воно \"b\" за індексом 1\n    System.out.println(getNodeValue(a, 1)); \n  } \n}"
      }
    },
    "linked-list-i::reverse-list": {
      "statement": "Write a method, reverseList, that takes in the head of a linked list as an argument. The method should reverse the order of the nodes in the linked list **in-place** and return the new head of the reversed linked list.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// a -> b -> c -> d -> e -> f\n\nreverseList(a); // f -> e -> d -> c -> b -> a",
        "Node<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\n\nx.next = y;\n\n// x -> y\n\nreverseList(x); // y -> x",
        "Node<String> p = new Node<>(\"p\");\n\n// p\n\nreverseList(p); // p"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// a -> b -> c -> d -> e -> f\n\nreverseList(a); // f -> e -> d -> c -> b -> a",
        "Node<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\n\nx.next = y;\n\n// x -> y\n\nreverseList(x); // y -> x",
        "Node<String> p = new Node<>(\"p\");\n\n// p\n\nreverseList(p); // p"
      ],
      "hints": [
        "Reversing in-place means each node should point backward instead of forward.",
        "You will need three pointers: previous, current, and next.",
        "At each step save next, reverse current.next, then advance previous and current."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> reverseList(Node<T> head) {\n    Node<T> previous = null;\n    Node<T> current = head;\n    while (current != null) {\n      Node<T> next = current.next;\n      current.next = previous;\n      previous = current;\n      current = next;\n    }\n    return previous;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(1)"
        },
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> reverseList(Node<T> head) {\n    return reverseList(head, null);\n  }\n  \n  public static <T> Node<T> reverseList(Node<T> head, Node<T> prev) {\n    if (head == null) {\n      return prev;\n    }\n    Node<T> next = head.next;\n    head.next = prev;\n    return reverseList(next, head);\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "reverse list",
        "slug": "reverse-list",
        "module": "Linked List I",
        "premium": false,
        "verbose": "Reverse the order of a linked-list.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> reverseList(Node<T> head) {\n    // todo\n    return;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> reverseList(Node<T> head) {\n    // Якщо список порожній, cur.next викине помилку, \n    // але я залишаю як у тебе.\n    var cur = head;\n    \n    Node<T> prev = null; // попередній \n    var folloving = cur.next;\n\n    // В Java не можна порівнювати об'єкт з 0 (тільки з null)\n    // Я залишив логіку порівняння, але привів до null, щоб код скомпілювався\n    while (folloving != null) {\n        cur.next = prev;\n        prev = cur;\n        cur = folloving;\n        folloving = cur.next;\n    }\n    cur.next = prev;\n\n    return cur;\n  }\n  \n  public static void run() {\n    // Створимо список a -> b\n    Node<String> a = new Node<>(\"a\");\n    Node<String> b = new Node<>(\"b\");\n    a.next = b;\n\n    Node<String> newHead = reverseList(a);\n    // Можна додати вивід для перевірки\n  } \n}"
      }
    },
    "linked-list-i::zipper-lists": {
      "statement": "Write a method, zipperLists, that takes in the head of two linked lists as arguments. The method should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The method should return the head of the zippered linked list. Do this **in-place**, by mutating the original Nodes. You may assume that both input lists are non-empty.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\na.next = b;\nb.next = c;\n// a -> b -> c\n\nNode<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\nNode<String> z = new Node<>(\"z\");\nx.next = y;\ny.next = z;\n// x -> y -> z\n\nSource.zipperLists(a, x);\n// a -> x -> b -> y -> c -> z",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n// a -> b -> c -> d -> e -> f\n\nNode<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\nNode<String> z = new Node<>(\"z\");\nx.next = y;\ny.next = z;\n// x -> y -> z\n\nSource.zipperLists(a, x);\n// a -> x -> b -> y -> c -> z -> d -> e -> f",
        "Node<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\ns.next = t;\n// s -> t\n\nNode<String> one = new Node<>(\"1\");\nNode<String> two = new Node<>(\"2\");\nNode<String> three = new Node<>(\"3\");\nNode<String> four = new Node<>(\"4\");\none.next = two;\ntwo.next = three;\nthree.next = four;\n// 1 -> 2 -> 3 -> 4\n\nSource.zipperLists(s, one);\n// s -> 1 -> t -> 2 -> 3 -> 4"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\na.next = b;\nb.next = c;\n// a -> b -> c\n\nNode<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\nNode<String> z = new Node<>(\"z\");\nx.next = y;\ny.next = z;\n// x -> y -> z\n\nSource.zipperLists(a, x);\n// a -> x -> b -> y -> c -> z",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n// a -> b -> c -> d -> e -> f\n\nNode<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\nNode<String> z = new Node<>(\"z\");\nx.next = y;\ny.next = z;\n// x -> y -> z\n\nSource.zipperLists(a, x);\n// a -> x -> b -> y -> c -> z -> d -> e -> f",
        "Node<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\ns.next = t;\n// s -> t\n\nNode<String> one = new Node<>(\"1\");\nNode<String> two = new Node<>(\"2\");\nNode<String> three = new Node<>(\"3\");\nNode<String> four = new Node<>(\"4\");\none.next = two;\ntwo.next = three;\nthree.next = four;\n// 1 -> 2 -> 3 -> 4\n\nSource.zipperLists(s, one);\n// s -> 1 -> t -> 2 -> 3 -> 4",
        "Node<String> w = new Node<>(\"w\");\n\n// w\n\nNode<String> one = new Node<>(\"1\");\nNode<String> two = new Node<>(\"2\");\nNode<String> three = new Node<>(\"3\");\none.next = two;\ntwo.next = three;\n// 1 -> 2 -> 3 \n\nSource.zipperLists(w, one);\n// w -> 1 -> 2 -> 3",
        "Node<String> one = new Node<>(\"1\");\nNode<String> two = new Node<>(\"2\");\nNode<String> three = new Node<>(\"3\");\none.next = two;\ntwo.next = three;\n// 1 -> 2 -> 3 \n\nNode<String> w = new Node<>(\"w\");\n// w\n\nSource.zipperLists(one, w);\n// 1 -> w -> 2 -> 3"
      ],
      "hints": [
        "Alternate nodes from the first and second lists.",
        "Keep pointers into both lists so you can splice one node at a time.",
        "When one list runs out, attach the remainder of the other list."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> zipperLists(Node<T> head1, Node<T> head2) {\n    Node<T> head = head1;\n    Node<T> tail = head;\n    Node<T> current1 = head1.next;\n    Node<T> current2 = head2;\n    \n    int count = 0;\n    while (current1 != null && current2 != null) {\n      if (count % 2 == 0) {\n        tail.next = current2;\n        current2 = current2.next;\n      } else {\n        tail.next = current1;\n        current1 = current1.next;\n      }\n      tail = tail.next;\n      count += 1;\n    }\n    \n    if (current1 != null) {\n      tail.next = current1;\n    }\n    if (current2 != null) {\n      tail.next = current2;\n    }\n\n    return head;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(1)"
        },
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> zipperLists(Node<T> head1, Node<T> head2) {\n    return zipperLists(head1, head2, 0);\n  }\n  \n  public static <T> Node<T> zipperLists(Node<T> head1, Node<T> head2, int count) {\n    if (head1 == null) {\n      return head2;\n    }\n    if (head2 == null) {\n      return head1;\n    }\n    \n    if (count % 2 == 0) {\n      head1.next = zipperLists(head1.next, head2, count + 1);\n      return head1;\n    } else {\n      head2.next = zipperLists(head1, head2.next, count + 1);\n      return head2;\n    }    \n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "zipper lists",
        "slug": "zipper-lists",
        "module": "Linked List I",
        "premium": false,
        "verbose": "Zipper two linked lists together.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> zipperLists(Node<T> head1, Node<T> head2) {\n    // todo\n    return;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> zipperLists(Node<T> head1, Node<T> head2) {\n    var head = head1;\n    var tail = head;\n    var cur1 = head1.next;\n    var cur2 = head2;\n    var count = 0;\n    while (cur1 != null && cur2 != null) {\n      if (count % 2 == 0) {\n        tail.next = cur2;\n        cur2 = cur2.next;\n      }\n      else{\n        tail.next = cur1;\n        cur1 = cur1.next;\n      }\n      tail = tail.next;\n      count++;\n    }\n\n    if(cur1!=null)\n    {\n      tail.next = cur1;\n    }\n    if(cur2!=null)\n    {\n      tail.next = cur2;\n    }\n\n    return head;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "linked-list-i::merge-lists": {
      "statement": "Write a method, mergeLists, that takes in the head of two sorted linked lists as arguments. The method should merge the two lists together into single sorted linked list. The method should return the head of the merged linked list. Do this **in-place**, by mutating the original Nodes. You may assume that both input lists are non-empty and contain increasing sorted numbers.",
      "examples": [
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(7);\nNode<Integer> c = new Node<>(10);\nNode<Integer> d = new Node<>(12);\nNode<Integer> e = new Node<>(20);\nNode<Integer> f = new Node<>(28);\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n// 5 -> 7 -> 10 -> 12 -> 20 -> 28\n\nNode<Integer> q = new Node<>(6);\nNode<Integer> r = new Node<>(8);\nNode<Integer> s = new Node<>(9);\nNode<Integer> t = new Node<>(25);\nq.next = r;\nr.next = s;\ns.next = t;\n// 6 -> 8 -> 9 -> 25\n\nSource.mergeLists(a, q);\n// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28",
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(7);\nNode<Integer> c = new Node<>(10);\nNode<Integer> d = new Node<>(12);\nNode<Integer> e = new Node<>(20);\nNode<Integer> f = new Node<>(28);\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n// 5 -> 7 -> 10 -> 12 -> 20 -> 28\n\nNode<Integer> q = new Node<>(1);\nNode<Integer> r = new Node<>(8);\nNode<Integer> s = new Node<>(9);\nNode<Integer> t = new Node<>(10);\nq.next = r;\nr.next = s;\ns.next = t;\n// 1 -> 8 -> 9 -> 10\n\nSource.mergeLists(a, q);\n// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28",
        "Node<Integer> h = new Node<>(30);\n// 30\n\nNode<Integer> p = new Node<>(15);\nNode<Integer> q = new Node<>(67);\np.next = q;\n// 15 -> 67\n\nSource.mergeLists(h, p);\n// 15 -> 30 -> 67"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(7);\nNode<Integer> c = new Node<>(10);\nNode<Integer> d = new Node<>(12);\nNode<Integer> e = new Node<>(20);\nNode<Integer> f = new Node<>(28);\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n// 5 -> 7 -> 10 -> 12 -> 20 -> 28\n\nNode<Integer> q = new Node<>(6);\nNode<Integer> r = new Node<>(8);\nNode<Integer> s = new Node<>(9);\nNode<Integer> t = new Node<>(25);\nq.next = r;\nr.next = s;\ns.next = t;\n// 6 -> 8 -> 9 -> 25\n\nSource.mergeLists(a, q);\n// 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28",
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(7);\nNode<Integer> c = new Node<>(10);\nNode<Integer> d = new Node<>(12);\nNode<Integer> e = new Node<>(20);\nNode<Integer> f = new Node<>(28);\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n// 5 -> 7 -> 10 -> 12 -> 20 -> 28\n\nNode<Integer> q = new Node<>(1);\nNode<Integer> r = new Node<>(8);\nNode<Integer> s = new Node<>(9);\nNode<Integer> t = new Node<>(10);\nq.next = r;\nr.next = s;\ns.next = t;\n// 1 -> 8 -> 9 -> 10\n\nSource.mergeLists(a, q);\n// 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 28",
        "Node<Integer> h = new Node<>(30);\n// 30\n\nNode<Integer> p = new Node<>(15);\nNode<Integer> q = new Node<>(67);\np.next = q;\n// 15 -> 67\n\nSource.mergeLists(h, p);\n// 15 -> 30 -> 67"
      ],
      "hints": [
        "Both input lists are sorted, so always choose the smaller current node next.",
        "Use a dummy head or tail pointer to build the merged list cleanly.",
        "When one list becomes null, append the rest of the other list."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n public static Node<Integer> mergeLists(Node<Integer> head1, Node<Integer> head2) {\n    Node<Integer> dummyHead = new Node<>(0);\n    Node<Integer> head = dummyHead;\n    Node<Integer> current1 = head1;\n    Node<Integer> current2 = head2;\n    \n    while (current1 != null && current2 != null) {\n      if (current1.val < current2.val) {\n        head.next = current1;\n        current1 = current1.next;\n      } else {\n        head.next = current2;\n        current2 = current2.next;\n      }\n      head = head.next;\n    }\n    \n    if (current1 != null) {\n      head.next = current1;\n    }\n    if (current2 != null) {\n      head.next = current2;\n    }\n    \n    return dummyHead.next;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(1)"
        },
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static Node<Integer> mergeLists(Node<Integer> head1, Node<Integer> head2) {\n    if (head1 == null) {\n      return head2;\n    }\n    if (head2 == null) {\n      return head1;\n    }\n    if (head1.val < head2.val) {\n      head1.next = mergeLists(head1.next, head2);\n      return head1;\n    } else {\n      head2.next = mergeLists(head1, head2.next);\n      return head2;\n    }\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "merge lists",
        "slug": "merge-lists",
        "module": "Linked List I",
        "premium": true,
        "verbose": "Merge two sorted linked lists into a single linked list.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static Node<Integer> mergeLists(Node<Integer> head1, Node<Integer> head2) {\n    // todo\n    return;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static Node<Integer> mergeLists(Node<Integer> head1, Node<Integer> head2) {\n    var cur1 = head1;\n    var cur2 = head2;\n    \n    // В Java для Generic класу потрібно вказати тип або використовувати <>\n    var suntinel = new Node<Integer>(0); \n    var head = suntinel;\n    \n\n    while (cur1 != null && cur2 != null) {\n      if (cur1.val > cur2.val) {\n        head.next = cur2;\n        cur2 = cur2.next;\n      } else {\n        head.next = cur1;\n        cur1 = cur1.next;\n      }\n      head = head.next;\n    }\n\n    if (cur1 != null) {\n      head.next = cur1;\n    }\n    if (cur2 != null) {\n      head.next = cur2;\n    }\n    \n    return suntinel.next;\n  }\n\n  public static void run() {\n    // Тут можна протестувати злиття двох відсортованих списків\n  }\n}"
      }
    },
    "linked-list-i::is-univalue-list": {
      "statement": "Write a method, isUnivalueList, that takes in the head of a linked list as an argument. The method should return a boolean indicating whether or not the linked list contains exactly one unique value. You may assume that the input list is non-empty.",
      "examples": [
        "Node<Integer> a = new Node<>(7);\nNode<Integer> b = new Node<>(7);\nNode<Integer> c = new Node<>(7);\n\na.next = b;\nb.next = c;\n\n// 7 -> 7 -> 7\n\nSource.isUnivalueList(a); // true",
        "Node<Integer> a = new Node<>(7);\nNode<Integer> b = new Node<>(7);\nNode<Integer> c = new Node<>(4);\n\na.next = b;\nb.next = c;\n\n// 7 -> 7 -> 4\n\nSource.isUnivalueList(a); // false",
        "Node<Integer> u = new Node<>(2);\nNode<Integer> v = new Node<>(2);\nNode<Integer> w = new Node<>(2);\nNode<Integer> x = new Node<>(2);\nNode<Integer> y = new Node<>(2);\n\nu.next = v;\nv.next = w;\nw.next = x;\nx.next = y;\n\n// 2 -> 2 -> 2 -> 2 -> 2\n\nSource.isUnivalueList(u); // true"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(7);\nNode<Integer> b = new Node<>(7);\nNode<Integer> c = new Node<>(7);\n\na.next = b;\nb.next = c;\n\n// 7 -> 7 -> 7\n\nSource.isUnivalueList(a); // true",
        "Node<Integer> a = new Node<>(7);\nNode<Integer> b = new Node<>(7);\nNode<Integer> c = new Node<>(4);\n\na.next = b;\nb.next = c;\n\n// 7 -> 7 -> 4\n\nSource.isUnivalueList(a); // false",
        "Node<Integer> u = new Node<>(2);\nNode<Integer> v = new Node<>(2);\nNode<Integer> w = new Node<>(2);\nNode<Integer> x = new Node<>(2);\nNode<Integer> y = new Node<>(2);\n\nu.next = v;\nv.next = w;\nw.next = x;\nx.next = y;\n\n// 2 -> 2 -> 2 -> 2 -> 2\n\nSource.isUnivalueList(u); // true",
        "Node<Integer> u = new Node<>(2);\nNode<Integer> v = new Node<>(2);\nNode<Integer> w = new Node<>(3);\nNode<Integer> x = new Node<>(3);\nNode<Integer> y = new Node<>(2);\n\nu.next = v;\nv.next = w;\nw.next = x;\nx.next = y;\n\n// 2 -> 2 -> 3 -> 3 -> 2\n\nSource.isUnivalueList(u); // false",
        "Node<String> z = new Node<>(\"z\");\n\n// z\n\nSource.isUnivalueList(z); // true",
        "Node<Integer> u = new Node<>(2);\nNode<Integer> v = new Node<>(1);\nNode<Integer> w = new Node<>(2);\nNode<Integer> x = new Node<>(2);\nNode<Integer> y = new Node<>(2);\n\nu.next = v;\nv.next = w;\nw.next = x;\nx.next = y;\n\n// 2 -> 1 -> 2 -> 2 -> 2\n\nSource.isUnivalueList(u); // false",
        "Source.run(a) -> true",
        "Source.run(a) -> false",
        "Source.run(u) -> true",
        "Source.run(u) -> false",
        "Source.run(z) -> true"
      ],
      "hints": [
        "A univalue list means every node stores the same value.",
        "Pick one value to compare against, such as the head's value.",
        "Traverse the list and return false on the first mismatch; otherwise return true."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean isUnivalueList(Node<T> head) {\n    T value = head.val;\n    Node<T> current = head;\n    while (current != null) {\n      if (current.val != value) {\n        return false;\n      }\n      current = current.next;\n    }\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(1)"
        },
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean isUnivalueList(Node<T> head) {\n    return isUnivalueList(head, head.val);\n  }\n  \n  public static <T> boolean isUnivalueList(Node<T> head, T value) {\n    if (head == null) {\n      return true;\n    }\n    if (head.val != value) {\n      return false;\n    }\n    return isUnivalueList(head.next, value);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "is univalue list",
        "slug": "is-univalue-list",
        "module": "Linked List I",
        "premium": true,
        "verbose": "Check if a linked list contains only a single unique value.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean isUnivalueList(Node<T> head) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean isUnivalueList(Node<T> head) {\n    var cur = head;\n    while (cur != null) {\n      if (cur.next != null) {\n        if (cur.val != cur.next.val)\n          return false;\n        else {\n          cur = cur.next;\n        }\n      } else\n        break;\n    }\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n"
      }
    },
    "linked-list-i::longest-streak": {
      "statement": "Write a method, longestStreak, that takes in the head of a linked list as an argument. The method should return the length of the longest consecutive streak of the same value within the list.",
      "examples": [
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(7);\nNode<Integer> d = new Node<>(7);\nNode<Integer> e = new Node<>(7);\nNode<Integer> f = new Node<>(6);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// 5 -> 5 -> 7 -> 7 -> 7 -> 6\n\nSource.longestStreak(a); // 3",
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(3);\nNode<Integer> c = new Node<>(3);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(9);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// 3 -> 3 -> 3 -> 3 -> 9 -> 9\n\nSource.longestStreak(a); // 4",
        "Node<Integer> a = new Node<>(9);\nNode<Integer> b = new Node<>(9);\nNode<Integer> c = new Node<>(1);\nNode<Integer> d = new Node<>(9);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(9);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// 9 -> 9 -> 1 -> 9 -> 9 -> 9\n\nSource.longestStreak(a); // 3"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(7);\nNode<Integer> d = new Node<>(7);\nNode<Integer> e = new Node<>(7);\nNode<Integer> f = new Node<>(6);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// 5 -> 5 -> 7 -> 7 -> 7 -> 6\n\nSource.longestStreak(a); // 3",
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(3);\nNode<Integer> c = new Node<>(3);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(9);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// 3 -> 3 -> 3 -> 3 -> 9 -> 9\n\nSource.longestStreak(a); // 4",
        "Node<Integer> a = new Node<>(9);\nNode<Integer> b = new Node<>(9);\nNode<Integer> c = new Node<>(1);\nNode<Integer> d = new Node<>(9);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(9);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// 9 -> 9 -> 1 -> 9 -> 9 -> 9\n\nSource.longestStreak(a); // 3",
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(5);\n\na.next = b;\n\n// 5 -> 5\n\nSource.longestStreak(a); // 2",
        "Node<Integer> a = new Node<>(4);\n\n// 4\n\nSource.longestStreak(a); // 1",
        "Source.longestStreak(null); // 0",
        "Source.run(a) -> 3",
        "Source.run(a) -> 4",
        "Source.run(a) -> 2",
        "Source.run(a) -> 1",
        "Source.run(null) -> 0"
      ],
      "hints": [
        "You want the longest run of consecutive nodes that hold the same value.",
        "Track both the current streak length and the best streak seen so far.",
        "When the value changes, reset the current streak to 1; when it stays the same, increment it."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> int longestStreak(Node<T> head) {\n    Node<T> current = head;\n    int maxStreak = 0;\n    int currentStreak = 0;\n    T prevVal = null;\n    while (current != null) {\n      if (prevVal == current.val) {\n        currentStreak += 1;\n      } else {\n        currentStreak = 1;\n      }\n      if (currentStreak > maxStreak) {\n        maxStreak = currentStreak;\n      }\n      prevVal = current.val;\n      current = current.next;\n    }\n    return maxStreak;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "longest streak",
        "slug": "longest-streak",
        "module": "Linked List I",
        "premium": true,
        "verbose": "Find the longest consecutive streak of values in a linked list.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> int longestStreak(Node<T> head) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> int longestStreak(Node<T> head) {\n    var current = head;\n    T prev = null;\n    var currSteak = 0;\n    var maxSteak = 0;\n    while(current!=null)\n      {\n        if(prev == current.val)\n        {\n          currSteak++;\n        }\n        else{\n          currSteak = 1;\n        }\n        maxSteak = Math.max(currSteak, maxSteak);\n        prev = current.val;\n        current = current.next;\n        \n      }\n    return maxSteak;\n  }\n\n  public static void run() {\n    // Приклад: 5 -> 5 -> 7 -> 7 -> 7\n    // Очікуваний результат стріку (послідовності однакових значень): 3\n  }\n}"
      }
    },
    "linked-list-i::remove-node": {
      "statement": "Write a method, removeNode, that takes in the head of a linked list and a target value as arguments. The method should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list. Do this **in-place**. You may assume that the input list is non-empty. You may assume that the input list contains the target.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// a -> b -> c -> d -> e -> f\n\nSource.removeNode(a, \"c\");\n// a -> b -> d -> e -> f",
        "Node<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\nNode<String> z = new Node<>(\"z\");\n\nx.next = y;\ny.next = z;\n\n// x -> y -> z\n\nSource.removeNode(x, \"z\");\n// x -> y",
        "Node<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\n\nq.next = r;\nr.next = s;\n\n// q -> r -> s\n\nSource.removeNode(q, \"q\");\n// r -> s"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// a -> b -> c -> d -> e -> f\n\nSource.removeNode(a, \"c\");\n// a -> b -> d -> e -> f",
        "Node<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\nNode<String> z = new Node<>(\"z\");\n\nx.next = y;\ny.next = z;\n\n// x -> y -> z\n\nSource.removeNode(x, \"z\");\n// x -> y",
        "Node<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\n\nq.next = r;\nr.next = s;\n\n// q -> r -> s\n\nSource.removeNode(q, \"q\");\n// r -> s",
        "Node<String> node1 = new Node<>(\"h\");\nNode<String> node2 = new Node<>(\"i\");\nNode<String> node3 = new Node<>(\"j\");\nNode<String> node4 = new Node<>(\"i\");\n\nnode1.next = node2;\nnode2.next = node3;\nnode3.next = node4;\n\n// h -> i -> j -> i\n\nSource.removeNode(node1, \"i\");\n// h -> j -> i",
        "Node<String> t = new Node<>(\"t\");\n\n// t\n\nSource.removeNode(t, \"t\");\n// null"
      ],
      "hints": [
        "You need to reconnect the previous node so it skips over the target node.",
        "Special-case removing the head, because there is no previous node before it.",
        "Traverse until current.next holds the target value, then set current.next = current.next.next."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> removeNode(Node<T> head, T targetVal) {\n    if (head.val == targetVal) {\n      return head.next;\n    }\n    Node<T> prev = null;\n    Node<T> current = head;\n    while (current != null) {\n      if (current.val == targetVal) {\n        prev.next = current.next;\n        break;\n      } \n      prev = current;\n      current = current.next;\n    }\n    return head;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(1)"
        },
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> removeNode(Node<T> head, T targetVal) {\n    if (head.val == targetVal) {\n      return head.next;\n    }\n    \n    head.next = removeNode(head.next, targetVal);\n    return head;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "remove node",
        "slug": "remove-node",
        "module": "Linked List I",
        "premium": true,
        "verbose": "Remove a node from a linked list.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> removeNode(Node<T> head, T targetVal) {\n    // todo\n    return;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> removeNode(Node<T> head, T targetVal) {\n    if (head.val == targetVal) {\n      return head.next;\n    }\n    Node<T> dummyHead = new Node<T>(null);\n    var curr = head;\n    dummyHead.next = head;\n    while (curr != null) {\n      if (curr.val == targetVal) {\n        dummyHead.next = curr.next;\n        break;\n      } else {\n        dummyHead = curr;\n        curr = curr.next;\n      }\n    }\n    return head;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "linked-list-i::insert-node": {
      "statement": "Write a method, insertNode, that takes in the head of a linked list, a value, and an index. The method should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The method should return the head of the resulting linked list. Do this **in-place**. You may assume that the input list is non-empty and the index is not greater than the length of the input list.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.insertNode(a, \"x\", 2);\n// a -> b -> x -> c -> d",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.insertNode(a, \"v\", 3);\n// a -> b -> c -> v -> d",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.insertNode(a, \"m\", 4);\n// a -> b -> c -> d -> m"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.insertNode(a, \"x\", 2);\n// a -> b -> x -> c -> d",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.insertNode(a, \"v\", 3);\n// a -> b -> c -> v -> d",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d\n\nSource.insertNode(a, \"m\", 4);\n// a -> b -> c -> d -> m",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\n\na.next = b;\n\n// a -> b\n\nSource.insertNode(a, \"z\", 0);\n// z -> a -> b"
      ],
      "hints": [
        "You need to insert a new node at a specific index without losing the rest of the list.",
        "Special-case index 0 by making the new node point to the current head.",
        "Otherwise walk to the node just before the insertion point, then splice the new node between previous and previous.next."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> insertNode(Node<T> head, T value, int index) {\n    if (index == 0) {\n      Node<T> newNode = new Node<>(value);\n      newNode.next = head;\n      return newNode;\n    }\n    \n    Node<T> current = head;\n    Node<T> prev = null;\n    int count = 0;\n    while (true) {\n      if (count == index) {\n        Node<T> newNode = new Node<>(value);\n        newNode.next = prev.next;\n        prev.next = newNode;\n        return head;\n      }\n      count += 1;\n      prev = current;\n      current = current.next;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(1)"
        },
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> insertNode(Node<T> head, T value, int index) {\n    return insertNode(head, null, value, index);\n  }\n  \n  public static <T> Node<T> insertNode(Node<T> head, Node<T> prev, T value, int index) {\n    if (index == 0) {\n      Node<T> newNode = new Node<>(value);\n      newNode.next = head;\n      if (prev != null) {\n        prev.next = newNode;\n      }\n      return newNode;\n    }\n    head.next = insertNode(head.next, head, value, index - 1);\n    return head;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "insert node",
        "slug": "insert-node",
        "module": "Linked List I",
        "premium": true,
        "verbose": "Insert a node into a linked list.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> insertNode(Node<T> head, T value, int index) {\n    // todo\n    return;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> insertNode(Node<T> head, T value, int index) {\n    if (index == 0) {\n      Node<T> newNode = new Node<>(value);\n      newNode.next = head;\n      return newNode;\n    }\n    \n    Node<T> current = head;\n    Node<T> prev = null;\n    int count = 0;\n    while (true) {\n      if (count == index) {\n        Node<T> newNode = new Node<>(value);\n        newNode.next = prev.next;\n        prev.next = newNode;\n        return head;\n      }\n      count += 1;\n      prev = current;\n      current = current.next;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-i::depth-first-values": {
      "statement": "Write a method, depthFirstValues, that takes in the root of a binary tree. The method should return a List containing all values of the tree in depth-first order. Hey. This is our first binary tree problem, so be extra sure to check out the approach video! -AZ",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.depthFirstValues(a); \n//    -> [\"a\", \"b\", \"d\", \"e\", \"c\", \"f\"]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /\n//   g\n\nSource.depthFirstValues(a); \n//    -> [\"a\", \"b\", \"d\", \"e\", \"g\", \"c\", \"f\"]",
        "Node<String> a = new Node<>(\"a\");\n//      a\nSource.depthFirstValues(a); \n//    -> [\"a\"]"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.depthFirstValues(a); \n//    -> [\"a\", \"b\", \"d\", \"e\", \"c\", \"f\"]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /\n//   g\n\nSource.depthFirstValues(a); \n//    -> [\"a\", \"b\", \"d\", \"e\", \"g\", \"c\", \"f\"]",
        "Node<String> a = new Node<>(\"a\");\n//      a\nSource.depthFirstValues(a); \n//    -> [\"a\"]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\n\na.right = b;\nb.left = c;\nc.right = d;\nd.right = e;\n\n//      a\n//       \\\n//        b\n//       /\n//      c\n//       \\\n//        d\n//         \\\n//          e\n\nSource.depthFirstValues(a); \n//    -> [\"a\", \"b\", \"c\", \"d\", \"e\"]",
        "Source.depthFirstValues(null); \n//    -> []"
      ],
      "hints": [
        "Depth-first traversal goes as deep as possible before backing up.",
        "Think preorder: visit current node, then left subtree, then right subtree.",
        "You can solve this with recursion or with an explicit stack."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Stack;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> depthFirstValues(Node<String> root) {\n    List<String> values = new ArrayList<>();\n    Stack<Node<String>> stack = new Stack<>();\n\n    if (root != null) {\n      stack.push(root);\n    }\n    while (!stack.empty()) {\n      Node<String> node = stack.pop();\n      values.add(node.val);\n      if (node.right != null) {\n        stack.push(node.right);\n      }\n      if (node.left != null) {\n        stack.push(node.left);\n      }\n    }\n    return values;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "recursive",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> depthFirstValues(Node<String> root) {\n    if (root == null) {\n      return List.of();\n    }\n    \n    List<String> values = new ArrayList<>();\n    values.add(root.val);\n    values.addAll(depthFirstValues(root.left));\n    values.addAll(depthFirstValues(root.right));\n    return values;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n^2) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "depth first values",
        "slug": "depth-first-values",
        "module": "Binary Tree I",
        "premium": false,
        "verbose": "Depth first traversal on a binary tree.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> depthFirstValues(Node<String> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.Stack;\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> depthFirstValues(Node<String> root) {\n    \n    // return depthFirstValuesWhile(root);\n    return depthFirstValuesRecursive(root);\n  }\n\npublic static List<String> depthFirstValuesRecursive(Node<String> root) {\n    if (root == null) {\n      return new ArrayList<>(); \n    }\n\n    List<String> res = new ArrayList<>();\n    res.add(root.val);\n    res.addAll(depthFirstValuesRecursive(root.left));\n    res.addAll(depthFirstValuesRecursive(root.right));\n    \n    return res;\n  }\n\n  public static List<String> depthFirstValuesWhile(Node<String> root) {\n    if (root == null) return new ArrayList<>();\n    \n    Stack<Node<String>> stack = new Stack<>();\n    List<String> res = new ArrayList<>();\n    \n    stack.push(root);\n    \n    while (!stack.isEmpty()) {\n      Node<String> current = stack.pop();\n      res.add(current.val);\n      \n      if (current.right != null) {\n        stack.push(current.right);\n      }\n      if (current.left != null) {\n        stack.push(current.left);\n      }\n    }\n    return res;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n  }\n}"
      }
    },
    "binary-tree-i::breadth-first-values": {
      "statement": "Write a method, breadthFirstValues, that takes in the root of a binary tree. The method should return an array containing all values of the tree in breadth-first order.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.breadthFirstValues(a); \n//    -> [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\"]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /       \\\n//   g         h\n\nSource.breadthFirstValues(a); \n//   -> [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\"]",
        "Node<String> a = new Node<>(\"a\");\n\n//      a\n\nSource.breadthFirstValues(a); \n//    -> [\"a\"]"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.breadthFirstValues(a); \n//    -> [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\"]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /       \\\n//   g         h\n\nSource.breadthFirstValues(a); \n//   -> [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\"]",
        "Node<String> a = new Node<>(\"a\");\n\n//      a\n\nSource.breadthFirstValues(a); \n//    -> [\"a\"]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> x = new Node<>(\"x\");\n\na.right = b;\nb.left = c;\nc.left = x;\nc.right = d;\nd.right = e;\n\n//      a\n//       \\\n//        b\n//       /\n//      c\n//    /  \\\n//   x    d\n//         \\\n//          e\n\nSource.breadthFirstValues(a); \n//    -> [\"a\", \"b\", \"c\", \"x\", \"d\", \"e\"]",
        "Source.breadthFirstValues(null); \n//    -> []"
      ],
      "hints": [
        "Breadth-first traversal visits the tree level by level.",
        "A queue is the natural data structure for this pattern.",
        "Remove from the front, record the node's value, then enqueue its children."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> breadthFirstValues(Node<String> root) {\n    if (root == null) {\n      return List.of();\n    }\n    List<String> values = new ArrayList<>();\n    Queue<Node<String>> queue = new ArrayDeque<>();\n    queue.add(root);\n    while (!queue.isEmpty()) {\n      Node<String> node = queue.remove();\n      values.add(node.val);\n      if (node.left != null) {\n        queue.add(node.left);\n      }\n      if (node.right != null) {\n        queue.add(node.right);\n      }\n    }\n    return values;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "breadth first values",
        "slug": "breadth-first-values",
        "module": "Binary Tree I",
        "premium": false,
        "verbose": "Breadth first traversal on a binary tree.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> breadthFirstValues(Node<String> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.*;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n\n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> breadthFirstValues(Node<String> root) {\n   if (root == null)\n        return new ArrayList<>();\n    List<String> res = new ArrayList<>();\n\n   \n    Queue<Node<String>> queue = new LinkedList<>();\n    queue.add(root);\n\n  \n    while (!queue.isEmpty()) {\n      Node<String> el = queue.poll(); \n      res.add(el.val);\n      if (el.left != null) {\n        queue.add(el.left);\n      }\n      if (el.right != null) {\n        queue.add(el.right);\n      }\n    }\n    return res;\n  }\n\n  public static void run() {\n   \n  }\n}"
      }
    },
    "binary-tree-i::tree-sum": {
      "statement": "# tree sum Write a method, treeSum, that takes in the root of a binary tree that contains number values. The method should return the total sum of all values in the tree.",
      "examples": [
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(4);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nSource.treeSum(a); // -> 21",
        "Node<Integer> a = new Node<>(1);\nNode<Integer> b = new Node<>(6);\nNode<Integer> c = new Node<>(0);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(-6);\nNode<Integer> f = new Node<>(2);\nNode<Integer> g = new Node<>(2);\nNode<Integer> h = new Node<>(2);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      1\n//    /   \\\n//   6     0\n//  / \\     \\\n// 3   -6    2\n//    /       \\\n//   2         2\n\nSource.treeSum(a); // -> 10",
        "Source.treeSum(null); // -> 0"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(4);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nSource.treeSum(a); // -> 21",
        "Node<Integer> a = new Node<>(1);\nNode<Integer> b = new Node<>(6);\nNode<Integer> c = new Node<>(0);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(-6);\nNode<Integer> f = new Node<>(2);\nNode<Integer> g = new Node<>(2);\nNode<Integer> h = new Node<>(2);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      1\n//    /   \\\n//   6     0\n//  / \\     \\\n// 3   -6    2\n//    /       \\\n//   2         2\n\nSource.treeSum(a); // -> 10",
        "Source.treeSum(null); // -> 0",
        "Source.treeSum(a) -> 21",
        "Source.treeSum(a) -> 10",
        "Source.treeSum(null) -> 0"
      ],
      "hints": [
        "Every node contributes its own value plus the sums of its subtrees.",
        "An empty tree should contribute 0.",
        "Use the recurrence: node.val + treeSum(node.left) + treeSum(node.right)."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static int treeSum(Node<Integer> root) {\n    if (root == null) {\n      return 0;\n    }\n    return root.val + treeSum(root.left) + treeSum(root.right);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "depth first iterative",
          "code": "import java.util.Stack;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static int treeSum(Node<Integer> root) {\n    if (root == null) {\n      return 0;\n    }\n    \n    Stack<Node<Integer>> stack = new Stack<>();\n    stack.add(root);\n    int sum = 0;\n    while (!stack.isEmpty()) {\n      Node<Integer> node = stack.pop();\n      sum += node.val;\n      if (node.left != null) {\n        stack.push(node.left);\n      }\n      if (node.right != null) {\n        stack.push(node.right);\n      }\n    }\n    return sum;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "breadth first",
          "code": "import java.util.ArrayDeque;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static int treeSum(Node<Integer> root) {\n    if (root == null) {\n      return 0;\n    }\n    \n    ArrayDeque<Node<Integer>> queue = new ArrayDeque<>();\n    queue.add(root);\n    int sum = 0;\n    while (!queue.isEmpty()) {\n      Node<Integer> node = queue.remove();\n      sum += node.val;\n      if (node.left != null) {\n        queue.add(node.left);\n      }\n      if (node.right != null) {\n        queue.add(node.right);\n      }\n    }\n    return sum;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "tree sum",
        "slug": "tree-sum",
        "module": "Binary Tree I",
        "premium": false,
        "verbose": "Sum the values of a binary tree.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static int treeSum(Node<Integer> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.Stack;\nimport java.util.Queue;\nimport java.util.LinkedList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n\n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static int treeSum(Node<Integer> root) {\n    // return treeSumDepthFirstSearchLoop(root);\n    // return treeSumDepthFirstSearchRecursive(root);\n    return treeSumBreadthFirstSearch(root);\n    \n    \n  }\n  public static int treeSumBreadthFirstSearch(Node<Integer> root) {\nif (root == null) return 0;\n    \n    // В Java Queue — це інтерфейс, ініціалізуємо як LinkedList\n    Queue<Node<Integer>> q = new LinkedList<>();\n    q.add(root);\n\n    int res = 0; \n\n    while (!q.isEmpty()) {\n      Node<Integer> node = q.poll();\n      res += node.val;\n      \n      if (node.right != null) {\n        q.add(node.right);\n      }\n      \n      if (node.left != null) {\n        q.add(node.left); \n      }\n    }\n    \n    return res;\n\n  }\n\n  public static int treeSumDepthFirstSearchRecursive(Node<Integer> root) {\n    if (root==null) return 0;\n    return root.val + treeSumDepthFirstSearchRecursive(root.left) + treeSumDepthFirstSearchRecursive(root.right);\n  }\n\n  public static int treeSumDepthFirstSearchLoop(Node<Integer> root) {\n    if (root == null) return 0;\n    \n    var res = 0;\n    // Виправлено: Stack потребує тип, в Java це Stack<Node<Integer>>\n    Stack<Node<Integer>> stack = new Stack<>();\n    stack.push(root);\n\n    // Виправлено синтаксис: !stack.isEmpty()\n    while (!stack.isEmpty()) {\n      var node = stack.pop();\n      res += node.val;\n      \n      // Логіка збережена: перевірка righ (виправлено на right)\n      if (node.right != null) {\n        stack.push(node.right);\n      }\n      \n      // Логіка збережена: ти додаєш node.right замість node.left\n      if (node.left != null) {\n        stack.push(node.left); \n      }\n    }\n    return res;\n  }\n\n  public static void run() {\n    // sandbox\n  }\n}"
      }
    },
    "binary-tree-i::tree-includes": {
      "statement": "Write a method, treeIncludes, that takes in the root of a binary tree and a target value. The method should return a boolean indicating whether or not the value is contained in the tree.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.treeIncludes(a, \"e\"); // -> true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.treeIncludes(a, \"a\"); // -> true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.treeIncludes(a, \"n\"); // -> false"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.treeIncludes(a, \"e\"); // -> true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.treeIncludes(a, \"a\"); // -> true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.treeIncludes(a, \"n\"); // -> false",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /       \\\n//   g         h\n\nSource.treeIncludes(a, \"f\"); // -> true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /       \\\n//   g         h\n\nSource.treeIncludes(a, \"p\"); // -> false",
        "Source.treeIncludes(null, \"b\"); // -> false",
        "Source.treeIncludes(a, \"e\") -> true",
        "Source.treeIncludes(a, \"a\") -> true",
        "Source.treeIncludes(a, \"n\") -> false",
        "Source.treeIncludes(a, \"f\") -> true",
        "Source.treeIncludes(a, \"p\") -> false",
        "Source.treeIncludes(null, \"b\") -> false"
      ],
      "hints": [
        "Check the current node first before exploring children.",
        "If the current node matches the target, you can return true immediately.",
        "Otherwise search the left subtree or the right subtree and return whether either one succeeds."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static boolean treeIncludes(Node<String> root, String target) {\n    if (root == null) {\n      return false;\n    }\n    if (root.val == target) {\n      return true;\n    }\n    return treeIncludes(root.left, target) || treeIncludes(root.right, target);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "breadth first",
          "code": "import java.util.ArrayDeque;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static boolean treeIncludes(Node<String> root, String target) {\n    if (root == null) {\n      return false;\n    }\n    ArrayDeque<Node<String>> queue = new ArrayDeque<>();\n    queue.add(root);\n    while (!queue.isEmpty()) {\n      Node<String> current = queue.remove();\n      if (current.val == target) {\n        return true;\n      }\n      if (current.left != null) {\n        queue.add(current.left);\n      }\n      if (current.right != null) {\n        queue.add(current.right);\n      }\n    }\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "tree includes",
        "slug": "tree-includes",
        "module": "Binary Tree I",
        "premium": false,
        "verbose": "Check for a value within a binary tree.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static boolean treeIncludes(Node<String> root, String target) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.Stack;\nimport java.util.Queue;\nimport java.util.LinkedList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n\n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static boolean treeIncludes(Node<String> root, String target) {\n    // return treeIncludesDFS(root, target);\n    // return treeIncludesDFSRecursive(root, target);\n    return treeIncludesBFS(root, target);\n  }\n\n  public static boolean treeIncludesBFS(Node<String> root, String target) {\n    if (root == null) return false;\n    Queue<Node<String>> q = new LinkedList<>();\n    q.add(root);\n    while (!q.isEmpty()) {\n        Node<String> node = q.poll();\n        if (node.val.equals(target)) return true;\n        if (node.left != null) q.add(node.left);\n        if (node.right != null) q.add(node.right);\n    }\n    return false;\n  }\n  \n  public static boolean treeIncludesDFS(Node<String> root, String target) {\n    if (root == null) return false;\n    Stack<Node<String>> stack = new Stack<>();\n    stack.push(root);\n\n    while (!stack.isEmpty()) {\n      Node<String> node = stack.pop();\n      if (node.val.equals(target)) return true;\n\n      if (node.right != null) stack.push(node.right);\n      if (node.left != null) stack.push(node.left);\n    }\n    return false;\n  }\n\n  public static boolean treeIncludesDFSRecursive(Node<String> root, String target) {\n    if (root == null) return false;\n    if (root.val.equals(target)) return true;\n    return treeIncludesDFSRecursive(root.left, target) ||treeIncludesDFSRecursive(root.right, target);\n  }\n\n  public static void run() {\n    // sandbox\n  }\n}"
      }
    },
    "binary-tree-i::tree-min-value": {
      "statement": "# tree min value Write a method, treeMinValue, that takes in the root of a binary tree that contains number values. The method should return the minimum value within the tree. You may assume that the input tree is non-empty.",
      "examples": [
        "Node<Double> a = new Node<>(3.);\nNode<Double> b = new Node<>(11.);\nNode<Double> c = new Node<>(4.);\nNode<Double> d = new Node<>(4.);\nNode<Double> e = new Node<>(-2.);\nNode<Double> f = new Node<>(1.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nSource.treeMinValue(a); // -> -2",
        "Node<Double> a = new Node<>(5.);\nNode<Double> b = new Node<>(11.);\nNode<Double> c = new Node<>(3.);\nNode<Double> d = new Node<>(4.);\nNode<Double> e = new Node<>(14.);\nNode<Double> f = new Node<>(12.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       5\n//    /    \\\n//   11     3\n//  / \\      \\\n// 4   14     12\n\nSource.treeMinValue(a); // -> 3",
        "Node<Double> a = new Node<>(-1.);\nNode<Double> b = new Node<>(-6.);\nNode<Double> c = new Node<>(-5.);\nNode<Double> d = new Node<>(-3.);\nNode<Double> e = new Node<>(-4.);\nNode<Double> f = new Node<>(-13.);\nNode<Double> g = new Node<>(-2.);\nNode<Double> h = new Node<>(-2.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   -4   -13\n//     /       \\\n//    -2       -2\n\nSource.treeMinValue(a); // -> -13"
      ],
      "testCases": [
        "Node<Double> a = new Node<>(3.);\nNode<Double> b = new Node<>(11.);\nNode<Double> c = new Node<>(4.);\nNode<Double> d = new Node<>(4.);\nNode<Double> e = new Node<>(-2.);\nNode<Double> f = new Node<>(1.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nSource.treeMinValue(a); // -> -2",
        "Node<Double> a = new Node<>(5.);\nNode<Double> b = new Node<>(11.);\nNode<Double> c = new Node<>(3.);\nNode<Double> d = new Node<>(4.);\nNode<Double> e = new Node<>(14.);\nNode<Double> f = new Node<>(12.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       5\n//    /    \\\n//   11     3\n//  / \\      \\\n// 4   14     12\n\nSource.treeMinValue(a); // -> 3",
        "Node<Double> a = new Node<>(-1.);\nNode<Double> b = new Node<>(-6.);\nNode<Double> c = new Node<>(-5.);\nNode<Double> d = new Node<>(-3.);\nNode<Double> e = new Node<>(-4.);\nNode<Double> f = new Node<>(-13.);\nNode<Double> g = new Node<>(-2.);\nNode<Double> h = new Node<>(-2.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   -4   -13\n//     /       \\\n//    -2       -2\n\nSource.treeMinValue(a); // -> -13",
        "Node<Double> a = new Node<>(42.);\n\n//        42\n\nSource.treeMinValue(a); // -> 42",
        "Source.treeMinValue(a) -> -2.",
        "Source.treeMinValue(a) -> 3.",
        "Source.treeMinValue(a) -> -13.",
        "Source.treeMinValue(a) -> 42."
      ],
      "hints": [
        "You need the minimum value among the current node, the left subtree, and the right subtree.",
        "Use a very large value for the base case when the node is null, or handle null children carefully.",
        "At each node, compute the minimum of node.val, leftMin, and rightMin."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Double treeMinValue(Node<Double> root) {\n    if (root == null) {\n      return Double.POSITIVE_INFINITY;\n    }\n    double minChildVal = Math.min(treeMinValue(root.left), treeMinValue(root.right));\n    return Math.min(root.val, minChildVal);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "breadth first",
          "code": "import java.util.ArrayDeque;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Double treeMinValue(Node<Double> root) {\n    ArrayDeque<Node<Double>> queue = new ArrayDeque<>();\n    queue.add(root);\n    Double min = Double.POSITIVE_INFINITY;\n    while (!queue.isEmpty()) {\n      Node<Double> current = queue.remove();\n      if (current.val < min) {\n        min = current.val;\n      }\n      if (current.left != null) {\n        queue.add(current.left);\n      }\n      if (current.right != null) {\n        queue.add(current.right);\n      }\n    }\n    return min;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "tree min value",
        "slug": "tree-min-value",
        "module": "Binary Tree I",
        "premium": false,
        "verbose": "Find the smallest value in a binary tree.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Double treeMinValue(Node<Double> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.*;\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Double treeMinValue(Node<Double> root) {\n    // todo\n    // return treeMinValueDFSRecursive(root);\n    return treeMinValueBFS(root);\n    \n  }\n  public static Double treeMinValueDFSRecursive(Node<Double> root) {\n    if (root == null) return Double.MAX_VALUE;\n    return Math.min(root.val, Math.min(treeMinValueDFSRecursive(root.left), treeMinValueDFSRecursive(root.right)));\n  }\n\n  public static Double treeMinValueBFS(Node<Double> root) {\n    double res = Double.MAX_VALUE;\n    Queue<Node<Double>> queue = new LinkedList<>();\n    queue.add(root);\n    \n    while (!queue.isEmpty()) {\n        Node<Double> node = queue.poll();\n        res = Math.min(res, node.val);\n      if (node.left != null) {\n        queue.add(node.left);\n      }\n      if (node.right != null) {\n        queue.add(node.right);\n      }\n    }\n    return res;\n  }\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-i::max-root-to-leaf-path-sum": {
      "statement": "# max root to leaf path sum Write a method, maxPathSum, that takes in the root of a binary tree that contains number values. The method should return the maximum sum of any root to leaf path within the tree. You may assume that the input tree is non-empty.",
      "examples": [
        "Node<Double> a = new Node<>(3.);\nNode<Double> b = new Node<>(11.);\nNode<Double> c = new Node<>(4.);\nNode<Double> d = new Node<>(4.);\nNode<Double> e = new Node<>(-2.);\nNode<Double> f = new Node<>(1.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nSource.maxPathSum(a); // -> 18",
        "Node<Double> a = new Node<>(5.);\nNode<Double> b = new Node<>(11.);\nNode<Double> c = new Node<>(54.);\nNode<Double> d = new Node<>(20.);\nNode<Double> e = new Node<>(15.);\nNode<Double> f = new Node<>(1.);\nNode<Double> g = new Node<>(3.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\ne.left = f;\ne.right = g;\n\n//        5\n//     /    \\\n//    11    54\n//  /   \\\n// 20   15\n//      / \\\n//     1  3\n\nSource.maxPathSum(a); // -> 59",
        "Node<Double> a = new Node<>(-1.);\nNode<Double> b = new Node<>(-6.);\nNode<Double> c = new Node<>(-5.);\nNode<Double> d = new Node<>(-3.);\nNode<Double> e = new Node<>(0.);\nNode<Double> f = new Node<>(-13.);\nNode<Double> g = new Node<>(-1.);\nNode<Double> h = new Node<>(-2.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   0    -13\n//     /       \\\n//    -1       -2\n\nSource.maxPathSum(a); // -> -8"
      ],
      "testCases": [
        "Node<Double> a = new Node<>(3.);\nNode<Double> b = new Node<>(11.);\nNode<Double> c = new Node<>(4.);\nNode<Double> d = new Node<>(4.);\nNode<Double> e = new Node<>(-2.);\nNode<Double> f = new Node<>(1.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nSource.maxPathSum(a); // -> 18",
        "Node<Double> a = new Node<>(5.);\nNode<Double> b = new Node<>(11.);\nNode<Double> c = new Node<>(54.);\nNode<Double> d = new Node<>(20.);\nNode<Double> e = new Node<>(15.);\nNode<Double> f = new Node<>(1.);\nNode<Double> g = new Node<>(3.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\ne.left = f;\ne.right = g;\n\n//        5\n//     /    \\\n//    11    54\n//  /   \\\n// 20   15\n//      / \\\n//     1  3\n\nSource.maxPathSum(a); // -> 59",
        "Node<Double> a = new Node<>(-1.);\nNode<Double> b = new Node<>(-6.);\nNode<Double> c = new Node<>(-5.);\nNode<Double> d = new Node<>(-3.);\nNode<Double> e = new Node<>(0.);\nNode<Double> f = new Node<>(-13.);\nNode<Double> g = new Node<>(-1.);\nNode<Double> h = new Node<>(-2.);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   0    -13\n//     /       \\\n//    -1       -2\n\nSource.maxPathSum(a); // -> -8",
        "Node<Double> a = new Node<>(42.);\n\n//        42\n\nSource.maxPathSum(a); // -> 42",
        "Source.maxPathSum(a) -> 18.",
        "Source.maxPathSum(a) -> 59.",
        "Source.maxPathSum(a) -> -8.",
        "Source.maxPathSum(a) -> 42."
      ],
      "hints": [
        "A valid path must start at the root and end at a leaf.",
        "From each node, choose the better of the left path sum and right path sum.",
        "Handle a leaf as a base case that simply returns its own value."
      ],
      "shortIdea": "Йди рекурсією вниз. Для кожного вузла порахуй найкращу суму з лівого і правого піддерева, візьми більшу та додай значення поточного вузла. Для листка відповідь просто його значення.",
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Double maxPathSum(Node<Double> root) {\n    if (root == null) {\n      return Double.NEGATIVE_INFINITY;\n    }\n    if (root.left == null && root.right == null) {\n      return root.val;\n    }\n    return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "max root to leaf path sum",
        "slug": "max-root-to-leaf-path-sum",
        "module": "Binary Tree I",
        "premium": false,
        "verbose": "Find the largest sum of a path in a binary tree.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Double maxPathSum(Node<Double> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Double maxPathSum(Node<Double> root) {\n    return maxPathSumDFS(root);\n  }\n\n  public static Double maxPathSumDFS(Node<Double> root) {\n    if (root == null)\n      return Double.NEGATIVE_INFINITY;\n    \n    if (root.left == null && root.right == null) \n      return root.val;\n\n    return root.val + Math.max(maxPathSumDFS(root.left), maxPathSumDFS(root.right));\n  }\n\n  public static void run() {\n  }\n}"
      }
    },
    "binary-tree-i::tree-path-finder": {
      "statement": "# tree path finder Write a method, pathFinder, that takes in the root of a binary tree and a target value. The method should return an array representing a path to the target value. If the target value is not found in the tree, then return null. You may assume that the tree contains unique values.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.pathFinder(a, \"e\"); // -> [ \"a\", \"b\", \"e\" ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.pathFinder(a, \"p\"); // -> null",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /       \\\n//   g         h\n\nSource.pathFinder(a, \"c\"); // -> [\"a\", \"c\"]"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.pathFinder(a, \"e\"); // -> [ \"a\", \"b\", \"e\" ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.pathFinder(a, \"p\"); // -> null",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /       \\\n//   g         h\n\nSource.pathFinder(a, \"c\"); // -> [\"a\", \"c\"]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /       \\\n//   g         h\n\nSource.pathFinder(a, \"h\"); // -> [\"a\", \"c\", \"f\", \"h\"]",
        "Node<String> x = new Node<>(\"x\");\n\n//      x\n\nSource.pathFinder(x, \"x\"); // -> [\"x\"]",
        "Source.pathFinder(null, \"x\"); // -> null",
        "Node<Integer> root = new Node<>(0);\nNode<Integer> curr = root;\nfor (int i = 1; i <= 200; i += 1) {\n  curr.right = new Node<>(i);\n  curr = curr.right;\n}\n\n//      0\n//       \\\n//        1\n//         \\\n//          2\n//           \\\n//            3\n//             .\n//              .\n//               .\n//              199\n//                \\\n//                200\n\nSource.pathFinder(root, 116); // -> [0, 1, 2, 3, ..., 115, 116]"
      ],
      "hints": [
        "You are looking for one root-to-node path, not all possible paths.",
        "If the current node matches the target, the path is just a list containing that value.",
        "Ask the left and right subtrees for a path; when one returns a non-null answer, add the current value to the front."
      ],
      "shortIdea": "Шукай target рекурсивно спочатку вліво, потім вправо. Якщо знайшов вузол, поверни масив із ним; коли рекурсія піднімається назад, просто додавай поточний вузол на початок шляху.",
      "pseudocode": [
        "function pathFinder(root, target):",
        "  if root is null:",
        "    return null",
        "",
        "  if root.val == target:",
        "    return [root.val]",
        "",
        "  leftPath = pathFinder(root.left, target)",
        "  if leftPath is not null:",
        "    return [root.val] + leftPath",
        "",
        "  rightPath = pathFinder(root.right, target)",
        "  if rightPath is not null:",
        "    return [root.val] + rightPath",
        "",
        "  return null"
      ],
      "solutions": [
        {
          "title": "Build Path On Return",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<T> pathFinder(Node<T> root, T target) {\n    if (root == null) {\n      return null;\n    }\n    \n    if (root.val == target) {\n      return List.of(root.val);\n    }\n    \n    List<T> leftPath = pathFinder(root.left, target);\n    if (leftPath != null) {\n      List<T> newPath = new ArrayList<>();\n      newPath.add(root.val);\n      newPath.addAll(leftPath);\n      return newPath;\n    }\n    \n    List<T> rightPath = pathFinder(root.right, target);\n    if (rightPath != null) {\n      List<T> newPath = new ArrayList<>();\n      newPath.add(root.val);\n      newPath.addAll(rightPath);\n      return newPath;\n    }\n    \n    return null;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n^2) | Space: O(n) | Build a new path list while recursion returns, so path elements may be copied many times."
        },
        {
          "title": "Backward Path Then Reverse",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<T> pathFinder(Node<T> root, T target) {\n    List<T> path = findPath(root, target);\n    if (path == null) {\n      return null;\n    } else {\n      Collections.reverse(path);\n      return path;\n    }\n  }\n  \n  public static <T> List<T> findPath(Node<T> root, T target) {\n    if (root == null) {\n      return null;\n    }\n    \n    if (root.val == target) {\n      return new ArrayList<>(List.of(root.val));\n    }\n    \n    List<T> leftPath = findPath(root.left, target);\n    if (leftPath != null) {\n      leftPath.add(root.val);\n      return leftPath;\n    }\n    \n    List<T> rightPath = findPath(root.right, target);\n    if (rightPath != null) {\n      rightPath.add(root.val);\n      return rightPath;\n    }\n    \n    return null;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n) | Reuse one path list while unwinding, then reverse once at the end."
        }
      ],
      "meta": {
        "name": "tree path finder",
        "slug": "tree-path-finder",
        "module": "Binary Tree I",
        "premium": true,
        "verbose": "Find the path to a target within a binary tree.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<T> pathFinder(Node<T> root, T target) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<T> pathFinder(Node<T> root, T target) {\n    if (root == null) {\n      return null;\n    }\n\n    if (root.val == target) {\n      return List.of(root.val);\n    }\n\n    List<T> leftPath = pathFinder(root.left, target);\n    if (leftPath != null) {\n      List<T> result = new ArrayList<>();\n      result.add(root.val);\n      result.addAll(leftPath);\n      return result;\n    }\n\n    List<T> rightPath = pathFinder(root.right, target);\n    if (rightPath != null) {\n      List<T> result = new ArrayList<>();\n      result.add(root.val);\n      result.addAll(rightPath);\n      return result;\n    }\n\n    return null;\n  }\n\n  public static void run() {\n  }\n}"
      }
    },
    "binary-tree-i::tree-value-count": {
      "statement": "# tree value count Write a method, treeValueCount, that takes in the root of a binary tree and a target value. The method should return the number of times that the target occurs in the tree.",
      "examples": [
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(6);\nNode<Integer> c = new Node<>(6);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(6);\nNode<Integer> f = new Node<>(12);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   6     6\n//  / \\     \\\n// 4   6     12\n\nSource.treeValueCount(a,  6); // -> 3",
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(6);\nNode<Integer> c = new Node<>(6);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(6);\nNode<Integer> f = new Node<>(12);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   6     6\n//  / \\     \\\n// 4  6     12\n\nSource.treeValueCount(a,  12); // -> 2",
        "Node<Integer> a = new Node<>(7);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(1);\nNode<Integer> d = new Node<>(1);\nNode<Integer> e = new Node<>(8);\nNode<Integer> f = new Node<>(7);\nNode<Integer> g = new Node<>(1);\nNode<Integer> h = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      7\n//    /   \\\n//   5     1\n//  / \\     \\\n// 1   8     7\n//    /       \\\n//   1         1\nSource.treeValueCount(a, 1); // -> 4"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(6);\nNode<Integer> c = new Node<>(6);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(6);\nNode<Integer> f = new Node<>(12);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   6     6\n//  / \\     \\\n// 4   6     12\n\nSource.treeValueCount(a,  6); // -> 3",
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(6);\nNode<Integer> c = new Node<>(6);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(6);\nNode<Integer> f = new Node<>(12);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   6     6\n//  / \\     \\\n// 4  6     12\n\nSource.treeValueCount(a,  12); // -> 2",
        "Node<Integer> a = new Node<>(7);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(1);\nNode<Integer> d = new Node<>(1);\nNode<Integer> e = new Node<>(8);\nNode<Integer> f = new Node<>(7);\nNode<Integer> g = new Node<>(1);\nNode<Integer> h = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      7\n//    /   \\\n//   5     1\n//  / \\     \\\n// 1   8     7\n//    /       \\\n//   1         1\nSource.treeValueCount(a, 1); // -> 4",
        "Node<Integer> a = new Node<>(7);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(1);\nNode<Integer> d = new Node<>(1);\nNode<Integer> e = new Node<>(8);\nNode<Integer> f = new Node<>(7);\nNode<Integer> g = new Node<>(1);\nNode<Integer> h = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      7\n//    /   \\\n//   5     1\n//  / \\     \\\n// 1   8     7\n//    /       \\\n//   1         1\n\nSource.treeValueCount(a, 9); // -> 0",
        "Source.treeValueCount(null, 42); // -> 0",
        "Source.run(a, 6) -> 3",
        "Source.run(a, 12) -> 2",
        "Source.run(a, 1) -> 4",
        "Source.run(a, 9) -> 0",
        "Source.run(null, 42) -> 0"
      ],
      "hints": [
        "Count 1 for the current node only if its value matches the target.",
        "Then add the counts from the left and right subtrees.",
        "An empty tree contributes 0 to the total count."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first (recursive)",
          "code": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> int treeValueCount(Node<T> root, T target) {\n    if (root == null) {\n      return 0;\n    }\n    int match = root.val == target ? 1 : 0;\n    return match  + treeValueCount(root.left, target) + treeValueCount(root.right, target);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "depth first (iterative)",
          "code": "import java.util.Stack;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> int treeValueCount(Node<T> root, T target) {\n    if (root == null) {\n      return 0;\n    }\n    Stack<Node<T>> stack = new Stack<>();\n    stack.push(root);\n    int count = 0;\n    while (!stack.isEmpty()) {\n      Node<T> node = stack.pop();\n      if (node.val == target) {\n        count += 1;\n      }\n      if (node.left != null) {\n        stack.push(node.left);\n      }\n      if (node.right != null) {\n        stack.push(node.right);\n      }\n    }\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "breadth first",
          "code": "import java.util.ArrayDeque;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> int treeValueCount(Node<T> root, T target) {\n    if (root == null) {\n      return 0;\n    }\n    ArrayDeque<Node<T>> queue = new ArrayDeque<>();\n    queue.add(root);\n    int count = 0;\n    while (!queue.isEmpty()) {\n      Node<T> node = queue.remove();\n      if (node.val == target) {\n        count += 1;\n      }\n      if (node.left != null) {\n        queue.add(node.left);\n      }\n      if (node.right != null) {\n        queue.add(node.right);\n      }\n    }\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "tree value count",
        "slug": "tree-value-count",
        "module": "Binary Tree I",
        "premium": true,
        "verbose": "Count the occurrences of a value in a binary tree.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> int treeValueCount(Node<T> root, T target) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> int treeValueCount(Node<T> root, T target) {\n    if (root == null) {\n      return 0;\n    }\n    int match = root.val == target ? 1 : 0;\n    return match  + treeValueCount(root.left, target) + treeValueCount(root.right, target);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-i::how-high": {
      "statement": "Write a method, howHigh, that takes in the root of a binary tree. The method should return a number representing the height of the tree. The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node. If the tree is empty, return -1.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.howHigh(a); // -> 2",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /\n//   g\n\nSource.howHigh(a); // -> 3",
        "Node<String> a = new Node<>(\"a\");\nNode<String> c = new Node<>(\"c\");\n\na.right = c;\n\n//      a\n//       \\\n//        c\n\nSource.howHigh(a); // -> 1"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.howHigh(a); // -> 2",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /\n//   g\n\nSource.howHigh(a); // -> 3",
        "Node<String> a = new Node<>(\"a\");\nNode<String> c = new Node<>(\"c\");\n\na.right = c;\n\n//      a\n//       \\\n//        c\n\nSource.howHigh(a); // -> 1",
        "Node<String> a = new Node<>(\"a\");\n\n//      a\n\nSource.howHigh(a); // -> 0",
        "Source.howHigh(null); // -> -1",
        "Source.run(a) -> 2",
        "Source.run(a) -> 3",
        "Source.run(a) -> 1",
        "Source.run(a) -> 0",
        "Source.run(null) -> -1"
      ],
      "hints": [
        "Height is the number of edges on the longest root-to-leaf path.",
        "An empty tree has height -1, which makes a leaf end up with height 0.",
        "Use 1 + max(height(left), height(right))."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first (recursive)",
          "code": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> int howHigh(Node<T> root) {\n    if (root == null) {\n      return -1;\n    }\n    return 1 + Math.max(howHigh(root.left), howHigh(root.right));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "breadth-first (iterative)",
          "code": "import java.util.ArrayDeque;\nimport java.util.AbstractMap.SimpleEntry;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> int howHigh(Node<T> root) {\n    ArrayDeque<SimpleEntry<Node<T>, Integer>> queue = new ArrayDeque<>();\n\n    if (root != null) {\n      queue.add(new SimpleEntry<>(root, 0));\n    }\n\n    int maxDepth = -1;\n    while (!queue.isEmpty()) {\n      SimpleEntry<Node<T>, Integer> pair = queue.remove();\n      Node<T> node = pair.getKey();\n      int depth = pair.getValue();\n\n      if (depth > maxDepth) {\n        maxDepth = depth;\n      }\n\n      if (node.left != null) {\n        queue.add(new SimpleEntry<>(node.left, depth + 1));\n      }\n\n      if (node.right != null) {\n        queue.add(new SimpleEntry<>(node.right, depth + 1));\n      }\n    }\n    return maxDepth;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "how high",
        "slug": "how-high",
        "module": "Binary Tree I",
        "premium": true,
        "verbose": "Calculate the height of a binary tree.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> int howHigh(Node<T> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> int howHigh(Node<T> root) {\n    if (root == null) {\n      return -1;\n    }\n    return 1 + Math.max(howHigh(root.left), howHigh(root.right));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-i::bottom-right-value": {
      "statement": "# bottom right value Write a method, bottomRightValue, that takes in the root of a binary tree. The method should return the right-most value in the bottom-most level of the tree. You may assume that the input tree is non-empty.",
      "examples": [
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(10);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     10\n//  / \\      \\\n// 4   -2     1\n\nSource.bottomRightValue(a); // -> 1",
        "Node<Integer> a = new Node<>(-1);\nNode<Integer> b = new Node<>(-6);\nNode<Integer> c = new Node<>(-5);\nNode<Integer> d = new Node<>(-3);\nNode<Integer> e = new Node<>(-4);\nNode<Integer> f = new Node<>(-13);\nNode<Integer> g = new Node<>(-2);\nNode<Integer> h = new Node<>(6);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   -4   -13\n//     / \\       \n//    -2  6\n\nSource.bottomRightValue(a); // -> 6",
        "Node<Integer> a = new Node<>(-1);\nNode<Integer> b = new Node<>(-6);\nNode<Integer> c = new Node<>(-5);\nNode<Integer> d = new Node<>(-3);\nNode<Integer> e = new Node<>(-4);\nNode<Integer> f = new Node<>(-13);\nNode<Integer> g = new Node<>(-2);\nNode<Integer> h = new Node<>(6);\nNode<Integer> i = new Node<>(7);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\nf.left = i;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   -4   -13\n//     / \\    /   \n//    -2  6  7 \n\nSource.bottomRightValue(a); // -> 7"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(10);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     10\n//  / \\      \\\n// 4   -2     1\n\nSource.bottomRightValue(a); // -> 1",
        "Node<Integer> a = new Node<>(-1);\nNode<Integer> b = new Node<>(-6);\nNode<Integer> c = new Node<>(-5);\nNode<Integer> d = new Node<>(-3);\nNode<Integer> e = new Node<>(-4);\nNode<Integer> f = new Node<>(-13);\nNode<Integer> g = new Node<>(-2);\nNode<Integer> h = new Node<>(6);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   -4   -13\n//     / \\       \n//    -2  6\n\nSource.bottomRightValue(a); // -> 6",
        "Node<Integer> a = new Node<>(-1);\nNode<Integer> b = new Node<>(-6);\nNode<Integer> c = new Node<>(-5);\nNode<Integer> d = new Node<>(-3);\nNode<Integer> e = new Node<>(-4);\nNode<Integer> f = new Node<>(-13);\nNode<Integer> g = new Node<>(-2);\nNode<Integer> h = new Node<>(6);\nNode<Integer> i = new Node<>(7);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\nf.left = i;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   -4   -13\n//     / \\    /   \n//    -2  6  7 \n\nSource.bottomRightValue(a); // -> 7",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.right = d;\nd.left = e;\ne.right = f;\n\n//      a\n//    /   \\ \n//   b     c\n//    \\\n//     d\n//    /\n//   e\n//   \\\n//    f\n          \nSource.bottomRightValue(a); // -> \"f\"",
        "Node<Integer> a = new Node<>(42);\n\n//      42\n\nSource.bottomRightValue(a); // -> 42",
        "Source.run(a) -> 1",
        "Source.run(a) -> 6",
        "Source.run(a) -> 7",
        "Source.run(a) -> \"f\"",
        "Source.run(a) -> 42"
      ],
      "hints": [
        "The bottom-right value is the last node visited in a level-order traversal.",
        "Use a queue to process the tree from top to bottom, left to right.",
        "Keep overwriting a variable with each dequeued node's value; after traversal ends, that value is the answer."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "breadth first",
          "code": "import java.util.ArrayDeque;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> T bottomRightValue(Node<T> root) {\n    ArrayDeque<Node<T>> queue = new ArrayDeque<>();\n    queue.add(root);\n    Node<T> current = null;\n    while(!queue.isEmpty()) {\n      current = queue.remove();\n      if (current.left != null) {\n        queue.add(current.left);\n      }\n      if (current.right != null) {\n        queue.add(current.right);\n      }\n    }\n    return current.val;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "bottom right value",
        "slug": "bottom-right-value",
        "module": "Binary Tree I",
        "premium": true,
        "verbose": "Find the bottom right value in a binary tree.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> T bottomRightValue(Node<T> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.ArrayDeque;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> T bottomRightValue(Node<T> root) {\n    ArrayDeque<Node<T>> queue = new ArrayDeque<>();\n    queue.add(root);\n    Node<T> current = null;\n    while(!queue.isEmpty()) {\n      current = queue.remove();\n      if (current.left != null) {\n        queue.add(current.left);\n      }\n      if (current.right != null) {\n        queue.add(current.right);\n      }\n    }\n    return current.val;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-i::all-tree-paths": {
      "statement": "# all tree paths Write a method, allTreePaths, that takes in the root of a binary tree. The method should return a 2-Dimensional list where each sublist represents a root-to-leaf path in the tree. The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer list does not matter. You may assume that the input tree is non-empty.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.allTreePaths(a); // ->\n// [ \n//   [ 'a', 'b', 'd' ], \n//   [ 'a', 'b', 'e' ], \n//   [ 'a', 'c', 'f' ] \n// ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\nNode<String> i = new Node<>(\"i\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\nf.left = i;\n\n//         a\n//      /    \\\n//     b      c\n//   /  \\      \\\n//  d    e      f\n//      / \\    /   \n//     g  h   i \n\nSource.allTreePaths(a); // ->\n// [ \n//   [ 'a', 'b', 'd' ], \n//   [ 'a', 'b', 'e', 'g' ], \n//   [ 'a', 'b', 'e', 'h' ], \n//   [ 'a', 'c', 'f', 'i' ] \n// ]",
        "Node<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\nNode<String> u = new Node<>(\"u\");\nNode<String> v = new Node<>(\"v\");\n\nq.left = r;\nq.right = s;\nr.right = t;\nt.left = u;\nu.right = v;\n\n//      q\n//    /   \\ \n//   r     s\n//    \\\n//     t\n//    /\n//   u\n//  /\n// v\n\nSource.allTreePaths(q); // ->\n// [ \n//   [ 'q', 'r', 't', 'u', 'v' ], \n//   [ 'q', 's' ] \n// ]"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.allTreePaths(a); // ->\n// [ \n//   [ 'a', 'b', 'd' ], \n//   [ 'a', 'b', 'e' ], \n//   [ 'a', 'c', 'f' ] \n// ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\nNode<String> i = new Node<>(\"i\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\nf.left = i;\n\n//         a\n//      /    \\\n//     b      c\n//   /  \\      \\\n//  d    e      f\n//      / \\    /   \n//     g  h   i \n\nSource.allTreePaths(a); // ->\n// [ \n//   [ 'a', 'b', 'd' ], \n//   [ 'a', 'b', 'e', 'g' ], \n//   [ 'a', 'b', 'e', 'h' ], \n//   [ 'a', 'c', 'f', 'i' ] \n// ]",
        "Node<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\nNode<String> u = new Node<>(\"u\");\nNode<String> v = new Node<>(\"v\");\n\nq.left = r;\nq.right = s;\nr.right = t;\nt.left = u;\nu.right = v;\n\n//      q\n//    /   \\ \n//   r     s\n//    \\\n//     t\n//    /\n//   u\n//  /\n// v\n\nSource.allTreePaths(q); // ->\n// [ \n//   [ 'q', 'r', 't', 'u', 'v' ], \n//   [ 'q', 's' ] \n// ]",
        "Node<String> z = new Node<>(\"z\");\n\n//      z\n\nSource.allTreePaths(z); // -> \n// [\n//   ['z']\n// ]"
      ],
      "hints": [
        "A complete path only exists when you reach a leaf.",
        "Ask the left and right children for all of their root-to-leaf paths.",
        "Prepend the current node's value to every child path and combine the results."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first revursive",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Collections; \n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n\n  public static <T> List<List<T>> allTreePaths(Node<T> root) {\n    List<List<T>> paths = _allTreePaths(root);\n    \n    for (List<T> path : paths) {\n      Collections.reverse(path);\n    }\n    return paths;\n  }\n  \n  public static <T> List<List<T>> _allTreePaths(Node<T> root) {\n    if (root == null) {\n      return List.of();\n    }\n    if (root.left == null && root.right == null) {\n      List<T> path = new ArrayList<T>();\n      path.add(root.val);\n      return List.of(path);\n    }\n    \n    List<List<T>> allPaths = new ArrayList<>();\n    \n    for (List<T> path : _allTreePaths(root.left)) {\n      path.add(root.val);\n      allPaths.add(path);\n    }\n    \n    for (List<T> path : _allTreePaths(root.right)) {\n      path.add(root.val);\n      allPaths.add(path);\n    }\n    \n    return allPaths;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O( n*log(n) ) | Space: O( n*log(n) )"
        }
      ],
      "meta": {
        "name": "all tree paths",
        "slug": "all-tree-paths",
        "module": "Binary Tree I",
        "premium": true,
        "verbose": "Return all root to leaf paths in a binary tree.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<List<T>> allTreePaths(Node<T> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Collections; \n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n\n  public static <T> List<List<T>> allTreePaths(Node<T> root) {\n    List<List<T>> paths = _allTreePaths(root);\n    \n    for (List<T> path : paths) {\n      Collections.reverse(path);\n    }\n    return paths;\n  }\n  \n  public static <T> List<List<T>> _allTreePaths(Node<T> root) {\n    if (root == null) {\n      return List.of();\n    }\n    if (root.left == null && root.right == null) {\n      List<T> path = new ArrayList<T>();\n      path.add(root.val);\n      return List.of(path);\n    }\n    \n    List<List<T>> allPaths = new ArrayList<>();\n    \n    for (List<T> path : _allTreePaths(root.left)) {\n      path.add(root.val);\n      allPaths.add(path);\n    }\n    \n    for (List<T> path : _allTreePaths(root.right)) {\n      path.add(root.val);\n      allPaths.add(path);\n    }\n    \n    return allPaths;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-i::tree-levels": {
      "statement": "# tree levels Write a method, treeLevels, that takes in the root of a binary tree. The method should return a 2-Dimensional list where each sublist represents a level of the tree.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.treeLevels(a); // ->\n// [\n//   ['a'],\n//   ['b', 'c'],\n//   ['d', 'e', 'f']\n// ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\nNode<String> i = new Node<>(\"i\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\nf.left = i;\n\n//         a\n//      /    \\\n//     b      c\n//   /  \\      \\\n//  d    e      f\n//      / \\    /\n//     g  h   i\n\nSource.treeLevels(a); // ->\n// [\n//   ['a'],\n//   ['b', 'c'],\n//   ['d', 'e', 'f'],\n//   ['g', 'h', 'i']\n// ]",
        "Node<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\nNode<String> u = new Node<>(\"u\");\nNode<String> v = new Node<>(\"v\");\n\nq.left = r;\nq.right = s;\nr.right = t;\nt.left = u;\nu.right = v;\n\n//      q\n//    /   \\\n//   r     s\n//    \\\n//     t\n//    /\n//   u\n//  /\n// v\n\nSource.treeLevels(q); //->\n// [\n//   ['q'],\n//   ['r', 's'],\n//   ['t'],\n//   ['u'],\n//   ['v']\n// ]"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.treeLevels(a); // ->\n// [\n//   ['a'],\n//   ['b', 'c'],\n//   ['d', 'e', 'f']\n// ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\nNode<String> i = new Node<>(\"i\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\nf.left = i;\n\n//         a\n//      /    \\\n//     b      c\n//   /  \\      \\\n//  d    e      f\n//      / \\    /\n//     g  h   i\n\nSource.treeLevels(a); // ->\n// [\n//   ['a'],\n//   ['b', 'c'],\n//   ['d', 'e', 'f'],\n//   ['g', 'h', 'i']\n// ]",
        "Node<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\nNode<String> u = new Node<>(\"u\");\nNode<String> v = new Node<>(\"v\");\n\nq.left = r;\nq.right = s;\nr.right = t;\nt.left = u;\nu.right = v;\n\n//      q\n//    /   \\\n//   r     s\n//    \\\n//     t\n//    /\n//   u\n//  /\n// v\n\nSource.treeLevels(q); //->\n// [\n//   ['q'],\n//   ['r', 's'],\n//   ['t'],\n//   ['u'],\n//   ['v']\n// ]",
        "Source.treeLevels(null); // -> []"
      ],
      "hints": [
        "You want a nested list where each inner list contains one level of the tree.",
        "A queue can help you process nodes in breadth-first order while tracking their level.",
        "When you see a node from a new level, start a new inner list; otherwise append to the existing one."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "breadth first (iterative)",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.ArrayDeque;\nimport java.util.AbstractMap.SimpleEntry;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<List<T>> treeLevels(Node<T> root) {\n    if (root == null) {\n      return List.of();\n    }\n    \n    List<List<T>> levels = new ArrayList<>();\n    ArrayDeque<SimpleEntry<Node<T>, Integer>> queue = new ArrayDeque<>();\n    queue.add(new SimpleEntry<>(root, 0));\n    while (!queue.isEmpty()) {\n      SimpleEntry<Node<T>, Integer> pair = queue.remove();\n      Node<T> node = pair.getKey();\n      int level = pair.getValue();\n      \n      if (level == levels.size()) {\n        ArrayList<T> newList = new ArrayList<>();\n        newList.add(node.val);\n        levels.add(newList);\n      } else {\n        levels.get(level).add(node.val);\n      }\n      \n      if (node.left != null) {\n        queue.add(new SimpleEntry<>(node.left, level + 1));\n      }\n      if (node.right != null) {\n        queue.add(new SimpleEntry<>(node.right, level + 1));\n      }\n    }\n    \n    return levels;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "depth first (recursive)",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<List<T>> treeLevels(Node<T> root) {\n    List<List<T>> levels = new ArrayList<>();\n    treeLevels(root, 0, levels);\n    return levels;\n  }\n  \n  public static <T> void treeLevels(Node<T> root, int level, List<List<T>> levels) {\n    if (root == null) {\n      return;\n    }  \n    if (level == levels.size()) {\n      List<T> newList = new ArrayList<>();\n      newList.add(root.val);\n      levels.add(newList);\n    } else {\n      levels.get(level).add(root.val);\n    }\n    treeLevels(root.left, level + 1, levels);\n    treeLevels(root.right, level + 1, levels);\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "tree levels",
        "slug": "tree-levels",
        "module": "Binary Tree I",
        "premium": true,
        "verbose": "Transform a tree into an array of its levels.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<List<T>> treeLevels(Node<T> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.ArrayDeque;\nimport java.util.AbstractMap.SimpleEntry;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<List<T>> treeLevels(Node<T> root) {\n    if (root == null) {\n      return List.of();\n    }\n    \n    List<List<T>> levels = new ArrayList<>();\n    ArrayDeque<SimpleEntry<Node<T>, Integer>> queue = new ArrayDeque<>();\n    queue.add(new SimpleEntry<>(root, 0));\n    while (!queue.isEmpty()) {\n      SimpleEntry<Node<T>, Integer> pair = queue.remove();\n      Node<T> node = pair.getKey();\n      int level = pair.getValue();\n      \n      if (level == levels.size()) {\n        ArrayList<T> newList = new ArrayList<>();\n        newList.add(node.val);\n        levels.add(newList);\n      } else {\n        levels.get(level).add(node.val);\n      }\n      \n      if (node.left != null) {\n        queue.add(new SimpleEntry<>(node.left, level + 1));\n      }\n      if (node.right != null) {\n        queue.add(new SimpleEntry<>(node.right, level + 1));\n      }\n    }\n    \n    return levels;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-i::level-averages": {
      "statement": "# level averages Write a method, levelAverages, that takes in the root of a binary tree that contains number values. The method should return a list containing the average value of each level.",
      "examples": [
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(4);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nSource.levelAverages(a); // -> [ 3., 7.5, 1. ]",
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(54);\nNode<Integer> d = new Node<>(20);\nNode<Integer> e = new Node<>(15);\nNode<Integer> f = new Node<>(1);\nNode<Integer> g = new Node<>(3);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\ne.left = f;\ne.right = g;\n\n//        5\n//     /    \\\n//    11    54\n//  /   \\\n// 20   15\n//      / \\\n//     1  3\n\nSource.levelAverages(a); // -> [ 5., 32.5, 17.5, 2. ]",
        "Node<Integer> a = new Node<>(-1);\nNode<Integer> b = new Node<>(-6);\nNode<Integer> c = new Node<>(-5);\nNode<Integer> d = new Node<>(-3);\nNode<Integer> e = new Node<>(0);\nNode<Integer> f = new Node<>(45);\nNode<Integer> g = new Node<>(-1);\nNode<Integer> h = new Node<>(-2);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   0     45\n//     /       \\\n//    -1       -2\n\nSource.levelAverages(a); // -> [ -1., -5.5, 14., -1.5 ]"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(4);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nSource.levelAverages(a); // -> [ 3., 7.5, 1. ]",
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(54);\nNode<Integer> d = new Node<>(20);\nNode<Integer> e = new Node<>(15);\nNode<Integer> f = new Node<>(1);\nNode<Integer> g = new Node<>(3);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\ne.left = f;\ne.right = g;\n\n//        5\n//     /    \\\n//    11    54\n//  /   \\\n// 20   15\n//      / \\\n//     1  3\n\nSource.levelAverages(a); // -> [ 5., 32.5, 17.5, 2. ]",
        "Node<Integer> a = new Node<>(-1);\nNode<Integer> b = new Node<>(-6);\nNode<Integer> c = new Node<>(-5);\nNode<Integer> d = new Node<>(-3);\nNode<Integer> e = new Node<>(0);\nNode<Integer> f = new Node<>(45);\nNode<Integer> g = new Node<>(-1);\nNode<Integer> h = new Node<>(-2);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   0     45\n//     /       \\\n//    -1       -2\n\nSource.levelAverages(a); // -> [ -1., -5.5, 14., -1.5 ]",
        "Node<Integer> q = new Node<>(13);\nNode<Integer> r = new Node<>(4);\nNode<Integer> s = new Node<>(2);\nNode<Integer> t = new Node<>(9);\nNode<Integer> u = new Node<>(2);\nNode<Integer> v = new Node<>(42);\n\nq.left = r;\nq.right = s;\nr.right = t;\nt.left = u;\nu.right = v;\n\n//        13\n//      /   \\\n//     4     2\n//      \\\n//       9\n//      /\n//     2\n//    /\n//   42\n\nSource.levelAverages(q); // -> [ 13., 3., 9., 2., 42. ]",
        "Source.levelAverages(null); // -> [ ]"
      ],
      "hints": [
        "First group values by tree level, then compute one average per group.",
        "You can gather levels with either breadth-first traversal or depth-first traversal plus a level index.",
        "After building the per-level lists or sums, divide each level's total by its number of nodes."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first recursive",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<Double> levelAverages(Node<Integer> root) {\n    List<List<Double>> levels = new ArrayList<>(); \n    fillLevels(root, 0, levels);\n    List<Double> averages = new ArrayList<>();\n    for (List<Double> level : levels) {\n      Double sum = 0.;\n      for (Double val : level) {\n        sum += val;\n      }\n      averages.add(sum / level.size());\n    }\n    return averages;\n  }\n  \n  public static void fillLevels(Node<Integer> root, int levelIdx, List<List<Double>> levels) {\n    if (root == null) {\n      return;\n    } \n    \n    if (levelIdx == levels.size()) {\n      List<Double> newLevel = new ArrayList<>();\n      newLevel.add(Double.valueOf(root.val));\n      levels.add(newLevel);\n    } else {\n      levels.get(levelIdx).add(Double.valueOf(root.val));\n    }\n    \n    fillLevels(root.left, levelIdx + 1, levels);\n    fillLevels(root.right, levelIdx + 1, levels);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "breadth first iterative",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.ArrayDeque;\nimport java.util.AbstractMap.SimpleEntry;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<Double> levelAverages(Node<Integer> root) {\n    List<List<Double>> levels = new ArrayList<>(); \n    fillLevels(root, levels);\n    List<Double> averages = new ArrayList<>();\n    for (List<Double> level : levels) {\n      Double sum = 0.;\n      for (Double val : level) {\n        sum += val;\n      }\n      averages.add(sum / level.size());\n    }\n    return averages;\n  }\n  \n  public static void fillLevels(Node<Integer> root, List<List<Double>> levels) {\n    ArrayDeque<SimpleEntry<Node<Integer>, Integer>> queue = new ArrayDeque<>();\n    if (root != null) {\n      queue.add(new SimpleEntry<>(root, 0));\n    }\n    while (!queue.isEmpty()) {\n      SimpleEntry<Node<Integer>, Integer> pair = queue.remove();\n      Node<Integer> node = pair.getKey();\n      int level = pair.getValue();\n      \n      if (level == levels.size()) {\n        ArrayList<Double> newList = new ArrayList<>();\n        newList.add(Double.valueOf(node.val));\n        levels.add(newList);\n      } else {\n        levels.get(level).add(Double.valueOf(node.val));\n      }\n      \n      if (node.left != null) {\n        queue.add(new SimpleEntry<>(node.left, level + 1));\n      }\n      if (node.right != null) {\n        queue.add(new SimpleEntry<>(node.right, level + 1));\n      }\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "level averages",
        "slug": "level-averages",
        "module": "Binary Tree I",
        "premium": true,
        "verbose": "Find the average across each level of a binary tree.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<Double> levelAverages(Node<Integer> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<Double> levelAverages(Node<Integer> root) {\n    List<List<Double>> levels = new ArrayList<>(); \n    fillLevels(root, 0, levels);\n    List<Double> averages = new ArrayList<>();\n    for (List<Double> level : levels) {\n      Double sum = 0.;\n      for (Double val : level) {\n        sum += val;\n      }\n      averages.add(sum / level.size());\n    }\n    return averages;\n  }\n  \n  public static void fillLevels(Node<Integer> root, int levelIdx, List<List<Double>> levels) {\n    if (root == null) {\n      return;\n    } \n    \n    if (levelIdx == levels.size()) {\n      List<Double> newLevel = new ArrayList<>();\n      newLevel.add(Double.valueOf(root.val));\n      levels.add(newLevel);\n    } else {\n      levels.get(levelIdx).add(Double.valueOf(root.val));\n    }\n    \n    fillLevels(root.left, levelIdx + 1, levels);\n    fillLevels(root.right, levelIdx + 1, levels);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-i::leaf-list": {
      "statement": "# leaf list Write a method, leafList, that takes in the root of a binary tree and returns a list containing the values of all leaf nodes in left-to-right order.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.leafList(a); // -> [ \"d\", \"e\", \"f\" ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /       \\\n//   g         h\n\nSource.leafList(a); // -> [ \"d\", \"g\", \"h\" ]",
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(54);\nNode<Integer> d = new Node<>(20);\nNode<Integer> e = new Node<>(15);\nNode<Integer> f = new Node<>(1);\nNode<Integer> g = new Node<>(3);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\ne.left = f;\ne.right = g;\n\n//        5\n//     /    \\\n//    11    54\n//  /   \\\n// 20   15\n//      / \\\n//     1  3\n\nSource.leafList(a); // -> [ 20, 1, 3, 54 ]"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.leafList(a); // -> [ \"d\", \"e\", \"f\" ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /       \\\n//   g         h\n\nSource.leafList(a); // -> [ \"d\", \"g\", \"h\" ]",
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(54);\nNode<Integer> d = new Node<>(20);\nNode<Integer> e = new Node<>(15);\nNode<Integer> f = new Node<>(1);\nNode<Integer> g = new Node<>(3);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\ne.left = f;\ne.right = g;\n\n//        5\n//     /    \\\n//    11    54\n//  /   \\\n// 20   15\n//      / \\\n//     1  3\n\nSource.leafList(a); // -> [ 20, 1, 3, 54 ]",
        "Node<String> x = new Node<>(\"x\");\n\n//      x\n\nSource.leafList(x); // -> [ \"x\" ]",
        "Source.leafList(null); // -> [ ]"
      ],
      "hints": [
        "A leaf is a node with no left child and no right child.",
        "Traverse the tree from left to right and collect values only when you hit a leaf.",
        "If you use DFS, explore the left subtree before the right subtree to preserve the required order."
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first (iterative)",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Stack;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<T> leafList(Node<T> root) {\n    if (root == null) {\n      return List.of();\n    }\n    List<T> leaves = new ArrayList<>();\n    Stack<Node<T>> stack = new Stack<>();\n    stack.push(root);\n    while (!stack.isEmpty()) {\n      Node<T> node = stack.pop();\n      if (node.left == null && node.right == null) {\n        leaves.add(node.val);\n      }\n      if (node.right != null) {\n        stack.push(node.right);\n      }\n      if (node.left != null) {\n        stack.push(node.left);\n      }\n    }\n    return leaves;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "depth first (recursive)",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<T> leafList(Node<T> root) {\n    List<T> leaves = new ArrayList<>();\n    fillLeaves(root, leaves);\n    return leaves;\n  }\n  \n  public static <T> void fillLeaves(Node<T> root, List<T> leaves) {\n    if (root == null) {\n      return;\n    }\n    \n    if (root.left == null && root.right == null) {\n      leaves.add(root.val);\n    }\n    \n    fillLeaves(root.left, leaves);\n    fillLeaves(root.right, leaves);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "leaf list",
        "slug": "leaf-list",
        "module": "Binary Tree I",
        "premium": true,
        "verbose": "Find the leaves of a binary tree.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<T> leafList(Node<T> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Stack;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<T> leafList(Node<T> root) {\n    if (root == null) {\n      return List.of();\n    }\n    List<T> leaves = new ArrayList<>();\n    Stack<Node<T>> stack = new Stack<>();\n    stack.push(root);\n    while (!stack.isEmpty()) {\n      Node<T> node = stack.pop();\n      if (node.left == null && node.right == null) {\n        leaves.add(node.val);\n      }\n      if (node.right != null) {\n        stack.push(node.right);\n      }\n      if (node.left != null) {\n        stack.push(node.left);\n      }\n    }\n    return leaves;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-i::has-path": {
      "statement": "Write a method, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The method should return a boolean indicating whether or not there exists a directed path between the source and destination nodes. Hey. This is our first graph problem, so start by watching the Approach and Walkthrough! Be productive, not stubborn.",
      "examples": [
        "Map<String, List<String>> graph = Map.of(\n  \"f\", List.of(\"g\", \"i\"),\n  \"g\", List.of(\"h\"),\n  \"h\", List.of(),\n  \"i\", List.of(\"g\", \"k\"),\n  \"j\", List.of(\"i\"),\n  \"k\", List.of()\n);\n\nSource.hasPath(graph, \"f\", \"k\"); // true",
        "Map<String, List<String>> graph = Map.of(\n  \"f\", List.of(\"g\", \"i\"),\n  \"g\", List.of(\"h\"),\n  \"h\", List.of(),\n  \"i\", List.of(\"g\", \"k\"),\n  \"j\", List.of(\"i\"),\n  \"k\", List.of()\n);\n\nSource.hasPath(graph, \"f\", \"j\"); // false",
        "Map<String, List<String>> graph = Map.of(\n  \"f\", List.of(\"g\", \"i\"),\n  \"g\", List.of(\"h\"),\n  \"h\", List.of(),\n  \"i\", List.of(\"g\", \"k\"),\n  \"j\", List.of(\"i\"),\n  \"k\", List.of()\n);\n\nSource.hasPath(graph, \"i\", \"h\"); // true"
      ],
      "testCases": [
        "Map<String, List<String>> graph = Map.of(\n  \"f\", List.of(\"g\", \"i\"),\n  \"g\", List.of(\"h\"),\n  \"h\", List.of(),\n  \"i\", List.of(\"g\", \"k\"),\n  \"j\", List.of(\"i\"),\n  \"k\", List.of()\n);\n\nSource.hasPath(graph, \"f\", \"k\"); // true",
        "Map<String, List<String>> graph = Map.of(\n  \"f\", List.of(\"g\", \"i\"),\n  \"g\", List.of(\"h\"),\n  \"h\", List.of(),\n  \"i\", List.of(\"g\", \"k\"),\n  \"j\", List.of(\"i\"),\n  \"k\", List.of()\n);\n\nSource.hasPath(graph, \"f\", \"j\"); // false",
        "Map<String, List<String>> graph = Map.of(\n  \"f\", List.of(\"g\", \"i\"),\n  \"g\", List.of(\"h\"),\n  \"h\", List.of(),\n  \"i\", List.of(\"g\", \"k\"),\n  \"j\", List.of(\"i\"),\n  \"k\", List.of()\n);\n\nSource.hasPath(graph, \"i\", \"h\"); // true",
        "Map<String, List<String>> graph = Map.of(\n  \"v\", List.of(\"x\", \"w\"),\n  \"w\", List.of(),\n  \"x\", List.of(),\n  \"y\", List.of(\"z\"),\n  \"z\", List.of()\n);\n\nSource.hasPath(graph, \"v\", \"w\"); // true",
        "Map<String, List<String>> graph = Map.of(\n  \"v\", List.of(\"x\", \"w\"),\n  \"w\", List.of(),\n  \"x\", List.of(),\n  \"y\", List.of(\"z\"),\n  \"z\", List.of()\n);\n\nSource.hasPath(graph, \"v\", \"z\"); // false",
        "Source.hasPath(graph, \"f\", \"k\") -> true",
        "Source.hasPath(graph, \"f\", \"j\") -> false",
        "Source.hasPath(graph, \"i\", \"h\") -> true",
        "Source.hasPath(graph, \"v\", \"w\") -> true",
        "Source.hasPath(graph, \"v\", \"z\") -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first (recursive)",
          "code": "import java.util.Map;\nimport java.util.List;\n\nclass Source {\n  public static boolean hasPath(Map<String, List<String>> graph, String src, String dst) {\n    if (src == dst) {\n      return true;\n    }\n    for (String neighbor : graph.get(src)) {\n      if (hasPath(graph, neighbor, dst)) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | e = number edges | Time: O(e) | Space: O(n)"
        },
        {
          "title": "breadth first",
          "code": "import java.util.Map;\nimport java.util.List;\nimport java.util.ArrayDeque;\n\nclass Source {\n  public static boolean hasPath(Map<String, List<String>> graph, String src, String dst) {\n    ArrayDeque<String> queue = new ArrayDeque<>();\n    queue.add(src);\n    while(!queue.isEmpty()) {\n     String node = queue.remove();\n      if (node == dst) {\n        return true;\n      }\n      for (String neighbor : graph.get(node)) {\n        queue.add(neighbor);\n      }\n    }\n    \n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | e = number edges | Time: O(e) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "has path",
        "slug": "has-path",
        "module": "Graph I",
        "premium": false,
        "verbose": "Check if two nodes of a graph are connected with a path.",
        "stub": "import java.util.Map;\nimport java.util.List;\n\nclass Source {\n  public static boolean hasPath(Map<String, List<String>> graph, String src, String dst) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.Map;\nimport java.util.List;\n\nclass Source {\n  public static boolean hasPath(Map<String, List<String>> graph, String src, String dst) {\n    if (src == dst) {\n      return true;\n    }\n    for (String neighbor : graph.get(src)) {\n      if (hasPath(graph, neighbor, dst)) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-i::undirected-path": {
      "statement": "Write a method, undirectedPath, that takes in a list of edges for an undirected graph and two nodes (nodeA, nodeB). The method should return a boolean indicating whether or not there exists a path between nodeA and nodeB.",
      "examples": [
        "List<List<String>> edges = List.of(\n  List.of(\"i\", \"j\"),\n  List.of(\"k\", \"i\"),\n  List.of(\"m\", \"k\"),\n  List.of(\"k\", \"l\"),\n  List.of(\"o\", \"n\")\n);\n\nSource.undirectedPath(edges, \"j\", \"m\"); // -> true",
        "List<List<String>> edges = List.of(\n  List.of(\"i\", \"j\"),\n  List.of(\"k\", \"i\"),\n  List.of(\"m\", \"k\"),\n  List.of(\"k\", \"l\"),\n  List.of(\"o\", \"n\")\n);\n\nSource.undirectedPath(edges, \"m\", \"j\"); // -> true",
        "List<List<String>> edges = List.of(\n  List.of(\"i\", \"j\"),\n  List.of(\"k\", \"i\"),\n  List.of(\"m\", \"k\"),\n  List.of(\"k\", \"l\"),\n  List.of(\"o\", \"n\")\n);\n\nSource.undirectedPath(edges, \"l\", \"j\"); // -> true"
      ],
      "testCases": [
        "List<List<String>> edges = List.of(\n  List.of(\"i\", \"j\"),\n  List.of(\"k\", \"i\"),\n  List.of(\"m\", \"k\"),\n  List.of(\"k\", \"l\"),\n  List.of(\"o\", \"n\")\n);\n\nSource.undirectedPath(edges, \"j\", \"m\"); // -> true",
        "List<List<String>> edges = List.of(\n  List.of(\"i\", \"j\"),\n  List.of(\"k\", \"i\"),\n  List.of(\"m\", \"k\"),\n  List.of(\"k\", \"l\"),\n  List.of(\"o\", \"n\")\n);\n\nSource.undirectedPath(edges, \"m\", \"j\"); // -> true",
        "List<List<String>> edges = List.of(\n  List.of(\"i\", \"j\"),\n  List.of(\"k\", \"i\"),\n  List.of(\"m\", \"k\"),\n  List.of(\"k\", \"l\"),\n  List.of(\"o\", \"n\")\n);\n\nSource.undirectedPath(edges, \"l\", \"j\"); // -> true",
        "List<List<String>> edges = List.of(\n  List.of(\"i\", \"j\"),\n  List.of(\"k\", \"i\"),\n  List.of(\"m\", \"k\"),\n  List.of(\"k\", \"l\"),\n  List.of(\"o\", \"n\")\n);\n\nSource.undirectedPath(edges, \"k\", \"o\"); // -> false",
        "List<List<String>> edges = List.of(\n  List.of(\"i\", \"j\"),\n  List.of(\"k\", \"i\"),\n  List.of(\"m\", \"k\"),\n  List.of(\"k\", \"l\"),\n  List.of(\"o\", \"n\")\n);\n\nSource.undirectedPath(edges, \"i\", \"o\"); // -> false",
        "List<List<String>> edges = List.of(\n  List.of(\"b\", \"a\"),\n  List.of(\"c\", \"a\"),\n  List.of(\"b\", \"c\"),\n  List.of(\"q\", \"r\"),\n  List.of(\"q\", \"s\"),\n  List.of(\"q\", \"u\"),\n  List.of(\"q\", \"t\"),\n);\n\n\nSource.undirectedPath(edges, \"a\", \"b\"); // -> true",
        "List<List<String>> edges = List.of(\n  List.of(\"b\", \"a\"),\n  List.of(\"c\", \"a\"),\n  List.of(\"b\", \"c\"),\n  List.of(\"q\", \"r\"),\n  List.of(\"q\", \"s\"),\n  List.of(\"q\", \"u\"),\n  List.of(\"q\", \"t\"),\n);\n\nSource.undirectedPath(edges, \"a\", \"c\"); // -> true",
        "List<List<String>> edges = List.of(\n  List.of(\"b\", \"a\"),\n  List.of(\"c\", \"a\"),\n  List.of(\"b\", \"c\"),\n  List.of(\"q\", \"r\"),\n  List.of(\"q\", \"s\"),\n  List.of(\"q\", \"u\"),\n  List.of(\"q\", \"t\"),\n);\n\nSource.undirectedPath(edges, \"r\", \"t\"); // -> true",
        "List<List<String>> edges = List.of(\n  List.of(\"b\", \"a\"),\n  List.of(\"c\", \"a\"),\n  List.of(\"b\", \"c\"),\n  List.of(\"q\", \"r\"),\n  List.of(\"q\", \"s\"),\n  List.of(\"q\", \"u\"),\n  List.of(\"q\", \"t\"),\n);\n\nSource.undirectedPath(edges, \"r\", \"b\"); // -> false",
        "List<List<String>> edges = List.of(\n  List.of(\"s\", \"r\"),\n  List.of(\"t\", \"q\"),\n  List.of(\"q\", \"r\"),\n);\n\nSource.undirectedPath(edges, \"r\", \"t\"); // -> true",
        "Source.undirectedPath(edges, \"j\", \"m\") -> true",
        "Source.undirectedPath(edges, \"m\", \"j\") -> true",
        "Source.undirectedPath(edges, \"l\", \"j\") -> true",
        "Source.undirectedPath(edges, \"k\", \"o\") -> false",
        "Source.undirectedPath(edges, \"i\", \"o\") -> false",
        "Source.undirectedPath(edges, \"a\", \"b\") -> true",
        "Source.undirectedPath(edges, \"a\", \"c\") -> true",
        "Source.undirectedPath(edges, \"r\", \"t\") -> true",
        "Source.undirectedPath(edges, \"r\", \"b\") -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.HashSet;\nimport java.util.Map;\n\nclass Source {\n  public static boolean undirectedPath(List<List<String>> edges, String nodeA, String nodeB) {\n    Map<String, List<String>> graph = buildGraph(edges);\n    return dfs(graph, nodeA, nodeB, new HashSet<>());\n  }\n  \n  public static boolean dfs(Map<String, List<String>> graph, String src, String dst, HashSet<String> visited) {\n    if (src.equals(dst)) {\n      return true;\n    }\n    \n    if (visited.contains(src)) {\n      return false;\n    }\n    visited.add(src);\n    \n    for (String neighbor : graph.get(src)) {\n      if (dfs(graph, neighbor, dst, visited)) {\n        return true;\n      }\n    }\n    \n    return false;\n  }\n  \n  public static Map<String, List<String>> buildGraph(List<List<String>> edges) {\n    Map<String, List<String>> map = new HashMap<>();\n    for (List<String> edge : edges) {\n      String a = edge.get(0);\n      String b = edge.get(1);\n      if (!map.containsKey(a)) {\n          map.put(a, new ArrayList<>());\n      }\n      if (!map.containsKey(b)) {\n          map.put(b, new ArrayList<>());\n      }\n      map.get(a).add(b);\n      map.get(b).add(a);\n    }\n    return map;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | e = number edges | Time: O(e) | Space: O(e)"
        },
        {
          "title": "breadth first",
          "code": "import java.util.List;\nimport java.util.Map;\nimport java.util.HashMap;\nimport java.util.ArrayList;\nimport java.util.HashSet;\nimport java.util.ArrayDeque;\n\nclass Source {\n  public static boolean undirectedPath(List<List<String>> edges, String nodeA, String nodeB) {\n    Map<String, List<String>> graph = buildGraph(edges);\n    HashSet<String> visited = new HashSet<>();\n    ArrayDeque<String> queue = new ArrayDeque<>();\n    queue.add(nodeA);\n    visited.add(nodeA);\n    while (!queue.isEmpty()) {\n      String node = queue.remove();\n      if (node.equals(nodeB)) {\n        return true;\n      }\n      for (String neighbor : graph.get(node)) {\n        if (!visited.contains(neighbor)) {\n          queue.add(neighbor);\n          visited.add(neighbor);\n        }\n      }\n    }\n    \n    return false;\n  }\n  \n  public static Map<String, List<String>> buildGraph(List<List<String>> edges) {\n    Map<String, List<String>> graph = new HashMap<>(); \n    for (List<String> pair : edges) {\n      String a = pair.get(0);\n      String b = pair.get(1);\n      if (!graph.containsKey(a)) {\n        graph.put(a, new ArrayList<>());\n      }\n      if (!graph.containsKey(b)) {\n        graph.put(b, new ArrayList<>());\n      }\n      graph.get(a).add(b);\n      graph.get(b).add(a);\n    }\n    return graph;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | e = number edges | Time: O(e) | Space: O(e)"
        }
      ],
      "meta": {
        "name": "undirected path",
        "slug": "undirected-path",
        "module": "Graph I",
        "premium": false,
        "verbose": "Check if a undirected graph contains a path that connects two nodes.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean undirectedPath(List<List<String>> edges, String nodeA, String nodeB) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.HashSet;\nimport java.util.Map;\n\nclass Source {\n  public static boolean undirectedPath(List<List<String>> edges, String nodeA, String nodeB) {\n    Map<String, List<String>> graph = buildGraph(edges);\n    return dfs(graph, nodeA, nodeB, new HashSet<>());\n  }\n  \n  public static boolean dfs(Map<String, List<String>> graph, String src, String dst, HashSet<String> visited) {\n    if (src.equals(dst)) {\n      return true;\n    }\n    \n    if (visited.contains(src)) {\n      return false;\n    }\n    visited.add(src);\n    \n    for (String neighbor : graph.get(src)) {\n      if (dfs(graph, neighbor, dst, visited)) {\n        return true;\n      }\n    }\n    \n    return false;\n  }\n  \n  public static Map<String, List<String>> buildGraph(List<List<String>> edges) {\n    Map<String, List<String>> map = new HashMap<>();\n    for (List<String> edge : edges) {\n      String a = edge.get(0);\n      String b = edge.get(1);\n      if (!map.containsKey(a)) {\n          map.put(a, new ArrayList<>());\n      }\n      if (!map.containsKey(b)) {\n          map.put(b, new ArrayList<>());\n      }\n      map.get(a).add(b);\n      map.get(b).add(a);\n    }\n    return map;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-i::connected-components-count": {
      "statement": "Write a method, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The method should return the number of connected components within the graph.",
      "examples": [
        "Source.connectedComponentsCount(Map.of(\n  0, List.of(8, 1, 5),\n  1, List.of(0),\n  5, List.of(0, 8),\n  8, List.of(0, 5),\n  2, List.of(3, 4),\n  3, List.of(2, 4),\n  4, List.of(3, 2)\n)); // -> 2",
        "Source.connectedComponentsCount(Map.of(\n  1, List.of(2),\n  2, List.of(1,8),\n  6, List.of(7),\n  9, List.of(8),\n  7, List.of(6, 8),\n  8, List.of(9, 7, 2)\n)); // -> 1",
        "Source.connectedComponentsCount(Map.of(\n  3, List.of(),\n  4, List.of(6),\n  6, List.of(4, 5, 7, 8),\n  8, List.of(6),\n  7, List.of(6),\n  5, List.of(6),\n  1, List.of(2),\n  2, List.of(1)\n)); // -> 3"
      ],
      "testCases": [
        "Source.connectedComponentsCount(Map.of(\n  0, List.of(8, 1, 5),\n  1, List.of(0),\n  5, List.of(0, 8),\n  8, List.of(0, 5),\n  2, List.of(3, 4),\n  3, List.of(2, 4),\n  4, List.of(3, 2)\n)); // -> 2",
        "Source.connectedComponentsCount(Map.of(\n  1, List.of(2),\n  2, List.of(1,8),\n  6, List.of(7),\n  9, List.of(8),\n  7, List.of(6, 8),\n  8, List.of(9, 7, 2)\n)); // -> 1",
        "Source.connectedComponentsCount(Map.of(\n  3, List.of(),\n  4, List.of(6),\n  6, List.of(4, 5, 7, 8),\n  8, List.of(6),\n  7, List.of(6),\n  5, List.of(6),\n  1, List.of(2),\n  2, List.of(1)\n)); // -> 3",
        "Source.connectedComponentsCount(Map.of()); // -> 0",
        "Source.connectedComponentsCount(Map.of(\n  0, List.of(4,7),\n  1, List.of(),\n  2, List.of(),\n  3, List.of(6),\n  4, List.of(0),\n  6, List.of(3),\n  7, List.of(0),\n  8, List.of()\n)); // -> 5",
        "Source.connectedComponentsCount(Map.of( 0, List.of(8, 1, 5), 1, List.of(0), 5, List.of(0, 8), 8, List.of(0, 5), 2, List.of(3, 4), 3, List.of(2, 4), 4, List.of(3, 2) )) -> 2",
        "Source.connectedComponentsCount(Map.of( 1, List.of(2), 2, List.of(1,8), 6, List.of(7), 9, List.of(8), 7, List.of(6, 8), 8, List.of(9, 7, 2) )) -> 1",
        "Source.connectedComponentsCount(Map.of( 3, List.of(), 4, List.of(6), 6, List.of(4, 5, 7, 8), 8, List.of(6), 7, List.of(6), 5, List.of(6), 1, List.of(2), 2, List.of(1) )) -> 3",
        "Source.connectedComponentsCount(Map.of()) -> 0",
        "Source.connectedComponentsCount(Map.of( 0, List.of(4,7), 1, List.of(), 2, List.of(), 3, List.of(6), 4, List.of(0), 6, List.of(3), 7, List.of(0), 8, List.of() )) -> 5"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.Map;\nimport java.util.List;\nimport java.util.HashSet;\n\nclass Source {\n  public static int connectedComponentsCount(Map<Integer, List<Integer>> graph) {\n    HashSet<Integer> visited = new HashSet<>();\n    int count = 0;\n    for (int node : graph.keySet()) {\n      if (traverseComponent(graph, node, visited)) {\n        count += 1;\n      }\n    }\n    return count;\n  }\n  \n  public static boolean traverseComponent(Map<Integer, List<Integer>> graph, int node, HashSet<Integer> visited) {\n    if (visited.contains(node)) {\n      return false;\n    }\n    visited.add(node);\n    \n    for (int neighbor : graph.get(node)) {\n      traverseComponent(graph, neighbor, visited);\n    }\n    \n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | e = number edges | Time: O(e) | Space: O(n)"
        },
        {
          "title": "breadth first",
          "code": "import java.util.Map;\nimport java.util.List;\nimport java.util.HashSet;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\nclass Source {\n  public static int connectedComponentsCount(Map<Integer, List<Integer>> graph) {\n    HashSet<Integer> visited = new HashSet<>();\n    int count = 0;\n    for (int node : graph.keySet()) {\n      if (traverseComponent(graph, node, visited)) {\n        count += 1;\n      }\n    }\n    return count;\n  }\n  \n  public static boolean traverseComponent(Map<Integer, List<Integer>> graph, int src, HashSet<Integer> visited) {\n    if (visited.contains(src)) {\n      return false;\n    }\n    visited.add(src);\n    \n    Queue<Integer> queue = new ArrayDeque<>();\n    queue.add(src);\n\n    while (!queue.isEmpty()) {\n      int node = queue.remove();\n      for (int neighbor : graph.get(node)) {\n        if (!visited.contains(neighbor)) {\n          visited.add(neighbor);\n          queue.add(neighbor);\n        }\n      }\n    }\n    \n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | e = number edges | Time: O(e) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "connected components count",
        "slug": "connected-components-count",
        "module": "Graph I",
        "premium": false,
        "verbose": "Count the components of a graph.",
        "stub": "import java.util.Map;\nimport java.util.List;\n\nclass Source {\n  public static int connectedComponentsCount(Map<Integer, List<Integer>> graph) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.Map;\nimport java.util.List;\nimport java.util.HashSet;\n\nclass Source {\n  public static int connectedComponentsCount(Map<Integer, List<Integer>> graph) {\n    HashSet<Integer> visited = new HashSet<>();\n    int count = 0;\n    for (int node : graph.keySet()) {\n      if (traverseComponent(graph, node, visited)) {\n        count += 1;\n      }\n    }\n    return count;\n  }\n  \n  public static boolean traverseComponent(Map<Integer, List<Integer>> graph, int node, HashSet<Integer> visited) {\n    if (visited.contains(node)) {\n      return false;\n    }\n    visited.add(node);\n    \n    for (int neighbor : graph.get(node)) {\n      traverseComponent(graph, neighbor, visited);\n    }\n    \n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-i::largest-component": {
      "statement": "Write a method, largestComponent, that takes in the adjacency list of an undirected graph. The method should return the size of the largest connected component in the graph.",
      "examples": [
        "Source.largestComponent(Map.of(\n  0, List.of(8, 1, 5),\n  1, List.of(0),\n  5, List.of(0, 8),\n  8, List.of(0, 5),\n  2, List.of(3, 4),\n  3, List.of(2, 4),\n  4, List.of(3, 2)\n)); // -> 4",
        "Source.largestComponent(Map.of(\n  1, List.of(2),\n  2, List.of(1,8),\n  6, List.of(7),\n  9, List.of(8),\n  7, List.of(6, 8),\n  8, List.of(9, 7, 2)\n)); // -> 6",
        "Source.largestComponent(Map.of(\n  3, List.of(),\n  4, List.of(6),\n  6, List.of(4, 5, 7, 8),\n  8, List.of(6),\n  7, List.of(6),\n  5, List.of(6),\n  1, List.of(2),\n  2, List.of(1)\n)); // -> 5"
      ],
      "testCases": [
        "Source.largestComponent(Map.of(\n  0, List.of(8, 1, 5),\n  1, List.of(0),\n  5, List.of(0, 8),\n  8, List.of(0, 5),\n  2, List.of(3, 4),\n  3, List.of(2, 4),\n  4, List.of(3, 2)\n)); // -> 4",
        "Source.largestComponent(Map.of(\n  1, List.of(2),\n  2, List.of(1,8),\n  6, List.of(7),\n  9, List.of(8),\n  7, List.of(6, 8),\n  8, List.of(9, 7, 2)\n)); // -> 6",
        "Source.largestComponent(Map.of(\n  3, List.of(),\n  4, List.of(6),\n  6, List.of(4, 5, 7, 8),\n  8, List.of(6),\n  7, List.of(6),\n  5, List.of(6),\n  1, List.of(2),\n  2, List.of(1)\n)); // -> 5",
        "Source.largestComponent(Map.of()); // -> 0",
        "Source.largestComponent(Map.of(\n  0, List.of(4,7),\n  1, List.of(),\n  2, List.of(),\n  3, List.of(6),\n  4, List.of(0),\n  6, List.of(3),\n  7, List.of(0),\n  8, List.of()\n)); // -> 3",
        "Source.largestComponent(Map.of( 0, List.of(8, 1, 5), 1, List.of(0), 5, List.of(0, 8), 8, List.of(0, 5), 2, List.of(3, 4), 3, List.of(2, 4), 4, List.of(3, 2) )) -> 4",
        "Source.largestComponent(Map.of( 1, List.of(2), 2, List.of(1,8), 6, List.of(7), 9, List.of(8), 7, List.of(6, 8), 8, List.of(9, 7, 2) )) -> 6",
        "Source.largestComponent(Map.of( 3, List.of(), 4, List.of(6), 6, List.of(4, 5, 7, 8), 8, List.of(6), 7, List.of(6), 5, List.of(6), 1, List.of(2), 2, List.of(1) )) -> 5",
        "Source.largestComponent(Map.of()) -> 0",
        "Source.largestComponent(Map.of( 0, List.of(4,7), 1, List.of(), 2, List.of(), 3, List.of(6), 4, List.of(0), 6, List.of(3), 7, List.of(0), 8, List.of() )) -> 3"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.Map;\nimport java.util.List;\nimport java.util.HashSet;\n\nclass Source {\n  public static int largestComponent(Map<Integer, List<Integer>> graph) {\n    HashSet<Integer> visited = new HashSet<>();\n    int maxSize = 0;\n    for (int node : graph.keySet()) {\n      int size = traverseSize(graph, node, visited);\n      if (size > maxSize) {\n        maxSize = size;\n      }\n    }\n    return maxSize;\n  }\n  \n  public static int traverseSize(Map<Integer, List<Integer>> graph, int node, HashSet<Integer> visited) {\n    if (visited.contains(node)) {\n      return 0;\n    }\n    visited.add(node);\n    \n    int count = 1;\n    for (int neighbor : graph.get(node)) {\n      count += traverseSize(graph, neighbor, visited);\n    }\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | e = number edges | Time: O(e) | Space: O(n)"
        },
        {
          "title": "breadth first",
          "code": "import java.util.Map;\nimport java.util.List;\nimport java.util.HashSet;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\nclass Source {\n  public static int largestComponent(Map<Integer, List<Integer>> graph) {\n    HashSet<Integer> visited = new HashSet<>();\n    int maxSize = 0;\n    for (int node : graph.keySet()) {\n      int size = traverseSize(graph, node, visited);\n      if (size > maxSize) {\n        maxSize = size;\n      }\n    }\n    return maxSize;\n  }\n  \n  public static int traverseSize(Map<Integer, List<Integer>> graph, int src, HashSet<Integer> visited) {\n    if (visited.contains(src)) {\n      return 0;\n    }\n    visited.add(src);\n    \n    Queue<Integer> queue = new ArrayDeque<>();\n    queue.add(src);\n    int size = 0;\n\n    while (!queue.isEmpty()) {\n      int node = queue.remove();\n      size += 1;\n      for (int neighbor : graph.get(node)) {\n        if (!visited.contains(neighbor)) {\n          visited.add(neighbor);\n          queue.add(neighbor);\n        }\n      }\n    }\n    \n    return size;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | e = number edges | Time: O(e) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "largest component",
        "slug": "largest-component",
        "module": "Graph I",
        "premium": false,
        "verbose": "Find the size of the largest component of a graph.",
        "stub": "import java.util.Map;\nimport java.util.List;\n\nclass Source {\n  public static int largestComponent(Map<Integer, List<Integer>> graph) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.Map;\nimport java.util.List;\nimport java.util.HashSet;\n\nclass Source {\n  public static int largestComponent(Map<Integer, List<Integer>> graph) {\n    HashSet<Integer> visited = new HashSet<>();\n    int maxSize = 0;\n    for (int node : graph.keySet()) {\n      int size = traverseSize(graph, node, visited);\n      if (size > maxSize) {\n        maxSize = size;\n      }\n    }\n    return maxSize;\n  }\n  \n  public static int traverseSize(Map<Integer, List<Integer>> graph, int node, HashSet<Integer> visited) {\n    if (visited.contains(node)) {\n      return 0;\n    }\n    visited.add(node);\n    \n    int count = 1;\n    for (int neighbor : graph.get(node)) {\n      count += traverseSize(graph, neighbor, visited);\n    }\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-i::shortest-path": {
      "statement": "Write a method, shortestPath, that takes in a list of edges for an undirected graph and two nodes (nodeA, nodeB). The method should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1. You can assume that A and B exist as nodes in the graph.",
      "examples": [
        "List<List<String>> edges = List.of(\n  List.of(\"w\", \"x\"),\n  List.of(\"x\", \"y\"),\n  List.of(\"z\", \"y\"),\n  List.of(\"z\", \"v\"),\n  List.of(\"w\", \"v\")\n);\n\nSource.shortestPath(edges, \"w\", \"z\"); // -> 2",
        "List<List<String>> edges = List.of(\n  List.of(\"w\", \"x\"),\n  List.of(\"x\", \"y\"),\n  List.of(\"z\", \"y\"),\n  List.of(\"z\", \"v\"),\n  List.of(\"w\", \"v\")\n);\n\nSource.shortestPath(edges, \"y\", \"x\"); // -> 1",
        "List<List<String>> edges = List.of(\n  List.of(\"a\", \"c\"),\n  List.of(\"a\", \"b\"),\n  List.of(\"c\", \"b\"),\n  List.of(\"c\", \"d\"),\n  List.of(\"b\", \"d\"),\n  List.of(\"e\", \"d\"),\n  List.of(\"g\", \"f\")\n);\n\nSource.shortestPath(edges, \"a\", \"e\"); // -> 3"
      ],
      "testCases": [
        "List<List<String>> edges = List.of(\n  List.of(\"w\", \"x\"),\n  List.of(\"x\", \"y\"),\n  List.of(\"z\", \"y\"),\n  List.of(\"z\", \"v\"),\n  List.of(\"w\", \"v\")\n);\n\nSource.shortestPath(edges, \"w\", \"z\"); // -> 2",
        "List<List<String>> edges = List.of(\n  List.of(\"w\", \"x\"),\n  List.of(\"x\", \"y\"),\n  List.of(\"z\", \"y\"),\n  List.of(\"z\", \"v\"),\n  List.of(\"w\", \"v\")\n);\n\nSource.shortestPath(edges, \"y\", \"x\"); // -> 1",
        "List<List<String>> edges = List.of(\n  List.of(\"a\", \"c\"),\n  List.of(\"a\", \"b\"),\n  List.of(\"c\", \"b\"),\n  List.of(\"c\", \"d\"),\n  List.of(\"b\", \"d\"),\n  List.of(\"e\", \"d\"),\n  List.of(\"g\", \"f\")\n);\n\nSource.shortestPath(edges, \"a\", \"e\"); // -> 3",
        "List<List<String>> edges = List.of(\n  List.of(\"a\", \"c\"),\n  List.of(\"a\", \"b\"),\n  List.of(\"c\", \"b\"),\n  List.of(\"c\", \"d\"),\n  List.of(\"b\", \"d\"),\n  List.of(\"e\", \"d\"),\n  List.of(\"g\", \"f\")\n);\n\nSource.shortestPath(edges, \"e\", \"c\"); // -> 2",
        "List<List<String>> edges = List.of(\n  List.of(\"a\", \"c\"),\n  List.of(\"a\", \"b\"),\n  List.of(\"c\", \"b\"),\n  List.of(\"c\", \"d\"),\n  List.of(\"b\", \"d\"),\n  List.of(\"e\", \"d\"),\n  List.of(\"g\", \"f\")\n);\n\nSource.shortestPath(edges, \"b\", \"g\"); // -> -1",
        "List<List<String>> edges = List.of(\n  List.of(\"c\", \"n\"),\n  List.of(\"c\", \"e\"),\n  List.of(\"c\", \"s\"),\n  List.of(\"c\", \"w\"),\n  List.of(\"w\", \"e\")\n);\n\nSource.shortestPath(edges, \"w\", \"e\"); // -> 1",
        "List<List<String>> edges = List.of(\n  List.of(\"c\", \"n\"),\n  List.of(\"c\", \"e\"),\n  List.of(\"c\", \"s\"),\n  List.of(\"c\", \"w\"),\n  List.of(\"w\", \"e\")\n);\n\nSource.shortestPath(edges, \"n\", \"e\"); // -> 2",
        "List<List<String>> edges = List.of(\n  List.of(\"m\", \"n\"),\n  List.of(\"n\", \"o\"),\n  List.of(\"o\", \"p\"),\n  List.of(\"p\", \"q\"),\n  List.of(\"t\", \"o\"),\n  List.of(\"r\", \"q\"),\n  List.of(\"r\", \"s\")\n);\n\nSource.shortestPath(edges, \"m\", \"s\"); // -> 6",
        "Source.shortestPath(edges, \"w\", \"z\") -> 2",
        "Source.shortestPath(edges, \"y\", \"x\") -> 1",
        "Source.shortestPath(edges, \"a\", \"e\") -> 3",
        "Source.shortestPath(edges, \"e\", \"c\") -> 2",
        "Source.shortestPath(edges, \"b\", \"g\") -> -1",
        "Source.shortestPath(edges, \"w\", \"e\") -> 1",
        "Source.shortestPath(edges, \"n\", \"e\") -> 2",
        "Source.shortestPath(edges, \"m\", \"s\") -> 6"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "breadth first",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.HashSet;\nimport java.util.ArrayDeque;\nimport java.util.AbstractMap.SimpleEntry;\n\nclass Source {\n  public static int shortestPath(List<List<String>> edges, String nodeA, String nodeB) {\n    HashMap<String, List<String>> graph = buildGraph(edges);\n    HashSet<String> visited = new HashSet<>();\n    ArrayDeque<SimpleEntry<String, Integer>> queue = new ArrayDeque<>();\n    queue.add(new SimpleEntry<>(nodeA, 0));\n    visited.add(nodeA);\n    while (!queue.isEmpty()) {\n      SimpleEntry<String, Integer> entry = queue.remove();\n      String node = entry.getKey();\n      int distance = entry.getValue();\n    \n      if (node == nodeB) {\n        return distance;\n      }\n      \n      for (String neighbor : graph.get(node)) {\n        if (!visited.contains(neighbor)) {\n          queue.add(new SimpleEntry<>(neighbor, distance + 1));\n          visited.add(neighbor);\n        }\n      }\n    }\n    \n    return -1;\n  }\n  \n  public static HashMap<String, List<String>> buildGraph(List<List<String>> edges) {\n    HashMap<String, List<String>> graph = new HashMap<>();\n    for (List<String> edge : edges) {\n      String a = edge.get(0);\n      String b = edge.get(1);\n      if (!graph.containsKey(a)) {\n        graph.put(a, new ArrayList<>());\n      }\n      if (!graph.containsKey(b)) {\n        graph.put(b, new ArrayList<>());\n      }\n      graph.get(a).add(b);\n      graph.get(b).add(a);\n    }\n    return graph;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "e = number edges | Time: O(e) | Space: O(e)"
        }
      ],
      "meta": {
        "name": "shortest path",
        "slug": "shortest-path",
        "module": "Graph I",
        "premium": false,
        "verbose": "Find the length of the shortest path between two nodes of a graph.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int shortestPath(List<List<String>> edges, String nodeA, String nodeB) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.HashSet;\nimport java.util.ArrayDeque;\nimport java.util.AbstractMap.SimpleEntry;\n\nclass Source {\n  public static int shortestPath(List<List<String>> edges, String nodeA, String nodeB) {\n    HashMap<String, List<String>> graph = buildGraph(edges);\n    HashSet<String> visited = new HashSet<>();\n    ArrayDeque<SimpleEntry<String, Integer>> queue = new ArrayDeque<>();\n    queue.add(new SimpleEntry<>(nodeA, 0));\n    visited.add(nodeA);\n    while (!queue.isEmpty()) {\n      SimpleEntry<String, Integer> entry = queue.remove();\n      String node = entry.getKey();\n      int distance = entry.getValue();\n    \n      if (node == nodeB) {\n        return distance;\n      }\n      \n      for (String neighbor : graph.get(node)) {\n        if (!visited.contains(neighbor)) {\n          queue.add(new SimpleEntry<>(neighbor, distance + 1));\n          visited.add(neighbor);\n        }\n      }\n    }\n    \n    return -1;\n  }\n  \n  public static HashMap<String, List<String>> buildGraph(List<List<String>> edges) {\n    HashMap<String, List<String>> graph = new HashMap<>();\n    for (List<String> edge : edges) {\n      String a = edge.get(0);\n      String b = edge.get(1);\n      if (!graph.containsKey(a)) {\n        graph.put(a, new ArrayList<>());\n      }\n      if (!graph.containsKey(b)) {\n        graph.put(b, new ArrayList<>());\n      }\n      graph.get(a).add(b);\n      graph.get(b).add(a);\n    }\n    return graph;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-i::island-count": {
      "statement": "Write a method, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The method should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.",
      "examples": [
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"L\", \"W\"),\n  List.of(\"W\", \"W\", \"L\", \"L\", \"W\"),\n  List.of(\"L\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"W\", \"W\", \"W\")\n);\n\nSource.islandCount(grid); // -> 3",
        "List<List<String>> grid = List.of(\n  List.of(\"L\", \"W\", \"W\", \"L\", \"W\"),\n  List.of(\"L\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"W\", \"L\", \"W\", \"L\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"L\", \"L\", \"L\")\n);\n\nSource.islandCount(grid); // -> 4",
        "List<List<String>> grid = List.of(\n  List.of(\"L\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"L\")\n);\n\nSource.islandCount(grid); // -> 1"
      ],
      "testCases": [
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"L\", \"W\"),\n  List.of(\"W\", \"W\", \"L\", \"L\", \"W\"),\n  List.of(\"L\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"W\", \"W\", \"W\")\n);\n\nSource.islandCount(grid); // -> 3",
        "List<List<String>> grid = List.of(\n  List.of(\"L\", \"W\", \"W\", \"L\", \"W\"),\n  List.of(\"L\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"W\", \"L\", \"W\", \"L\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"L\", \"L\", \"L\")\n);\n\nSource.islandCount(grid); // -> 4",
        "List<List<String>> grid = List.of(\n  List.of(\"L\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"L\")\n);\n\nSource.islandCount(grid); // -> 1",
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"W\"),\n  List.of(\"W\", \"W\"),\n  List.of(\"W\", \"W\")\n);\n\nSource.islandCount(grid); // -> 0",
        "Source.islandCount(grid) -> 3",
        "Source.islandCount(grid) -> 4",
        "Source.islandCount(grid) -> 1",
        "Source.islandCount(grid) -> 0"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.AbstractMap.SimpleEntry;\n\nclass Source {\n  public static int islandCount(List<List<String>> grid) {\n    HashSet<SimpleEntry<Integer, Integer>> visited = new HashSet<>();    \n    int count = 0;\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        if(explore(r, c, grid, visited)) {\n          count += 1;\n        }\n      }\n    }\n    return count;\n  }\n  \n  public static boolean explore(int r, int c, List<List<String>> grid, HashSet<SimpleEntry<Integer, Integer>> visited) {\n    boolean rowInbounds = r >= 0 && r < grid.size();\n    boolean colInbounds = c >= 0 && c < grid.get(0).size();\n    if (!rowInbounds || !colInbounds) {\n      return false;\n    }\n    \n    if (grid.get(r).get(c) == \"W\") {\n      return false;\n    }\n    \n    SimpleEntry<Integer, Integer> key = new SimpleEntry<>(r, c);\n    if (visited.contains(key)) {\n      return false;\n    }\n    visited.add(key);\n\n    explore(r + 1, c, grid, visited);\n    explore(r - 1, c, grid, visited);\n    explore(r, c + 1, grid, visited);\n    explore(r, c - 1, grid, visited);\n    \n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it    \n  }\n}",
          "complexity": "r = number of rows | c = number of columns | Time: O(rc) | Space: O(rc)"
        },
        {
          "title": "breadth first",
          "code": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.AbstractMap.SimpleEntry;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\nclass Source {\n  public static int islandCount(List<List<String>> grid) {\n    HashSet<SimpleEntry<Integer, Integer>> visited = new HashSet<>();    \n    int count = 0;\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        if(explore(r, c, grid, visited)) {\n          count += 1;\n        }\n      }\n    }\n    return count;\n  }\n  \n  public static boolean explore(int r, int c, List<List<String>> grid, HashSet<SimpleEntry<Integer, Integer>> visited) {\n    SimpleEntry<Integer, Integer> pos = new SimpleEntry<>(r, c);\n    if (visited.contains(pos) || grid.get(r).get(c) == \"W\") {\n      return false;\n    }\n    visited.add(pos);\n\n    Queue<SimpleEntry<Integer, Integer>> queue = new ArrayDeque<>();\n    queue.add(new SimpleEntry<>(r, c));\n    List<List<Integer>> deltas = List.of(\n      List.of(1, 0),\n      List.of(-1, 0),\n      List.of(0, 1),\n      List.of(0, -1)\n    );\n    while (!queue.isEmpty()) {\n      SimpleEntry<Integer, Integer> currentPos = queue.remove();\n      for (List<Integer> delta : deltas) {\n        int dRow = delta.get(0);\n        int dCol = delta.get(1);\n        int neighborR = dRow + currentPos.getKey();\n        int neighborC = dCol + currentPos.getValue();\n        SimpleEntry<Integer, Integer> neighborPos = new SimpleEntry<>(neighborR, neighborC);\n        boolean rowInbounds = neighborR >= 0 && neighborR < grid.size();\n        boolean colInbounds = neighborC >= 0 && neighborC < grid.get(0).size();\n        if (rowInbounds && colInbounds && !visited.contains(neighborPos) && grid.get(neighborR).get(neighborC).equals(\"L\")) {\n          visited.add(neighborPos);\n          queue.add(neighborPos);\n        }\n      }\n    }\n\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it    \n  }\n}",
          "complexity": "r = number of rows | c = number of columns | Time: O(rc) | Space: O(rc)"
        }
      ],
      "meta": {
        "name": "island count",
        "slug": "island-count",
        "module": "Graph I",
        "premium": false,
        "verbose": "Count the number of islands on a grid",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int islandCount(List<List<String>> grid) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.AbstractMap.SimpleEntry;\n\nclass Source {\n  public static int islandCount(List<List<String>> grid) {\n    HashSet<SimpleEntry<Integer, Integer>> visited = new HashSet<>();    \n    int count = 0;\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        if(explore(r, c, grid, visited)) {\n          count += 1;\n        }\n      }\n    }\n    return count;\n  }\n  \n  public static boolean explore(int r, int c, List<List<String>> grid, HashSet<SimpleEntry<Integer, Integer>> visited) {\n    boolean rowInbounds = r >= 0 && r < grid.size();\n    boolean colInbounds = c >= 0 && c < grid.get(0).size();\n    if (!rowInbounds || !colInbounds) {\n      return false;\n    }\n    \n    if (grid.get(r).get(c) == \"W\") {\n      return false;\n    }\n    \n    SimpleEntry<Integer, Integer> key = new SimpleEntry<>(r, c);\n    if (visited.contains(key)) {\n      return false;\n    }\n    visited.add(key);\n\n    explore(r + 1, c, grid, visited);\n    explore(r - 1, c, grid, visited);\n    explore(r, c + 1, grid, visited);\n    explore(r, c - 1, grid, visited);\n    \n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it    \n  }\n}"
      }
    },
    "graph-i::minimum-island": {
      "statement": "Write a method, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The method should return the size of the smallest island. An island is a vertically or horizontally connected region of land. You may assume that the grid contains at least one island.",
      "examples": [
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"L\", \"W\"),\n  List.of(\"W\", \"W\", \"L\", \"L\", \"W\"),\n  List.of(\"L\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"W\", \"W\", \"W\")\n);\n\nSource.minimumIsland(grid); // -> 2",
        "List<List<String>> grid = List.of(\n  List.of(\"L\", \"W\", \"W\", \"L\", \"W\"),\n  List.of(\"L\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"W\", \"L\", \"W\", \"L\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"L\", \"L\", \"L\")\n);\n\nSource.minimumIsland(grid); // -> 1",
        "List<List<String>> grid = List.of(\n  List.of(\"L\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"L\")\n);\n\nSource.minimumIsland(grid); // -> 9"
      ],
      "testCases": [
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"L\", \"W\"),\n  List.of(\"W\", \"W\", \"L\", \"L\", \"W\"),\n  List.of(\"L\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"W\", \"W\", \"W\")\n);\n\nSource.minimumIsland(grid); // -> 2",
        "List<List<String>> grid = List.of(\n  List.of(\"L\", \"W\", \"W\", \"L\", \"W\"),\n  List.of(\"L\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"W\", \"L\", \"W\", \"L\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"L\", \"L\", \"L\")\n);\n\nSource.minimumIsland(grid); // -> 1",
        "List<List<String>> grid = List.of(\n  List.of(\"L\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"L\")\n);\n\nSource.minimumIsland(grid); // -> 9",
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"W\"),\n  List.of(\"L\", \"L\"),\n  List.of(\"W\", \"W\"),\n  List.of(\"W\", \"L\")\n);\n\nSource.minimumIsland(grid); // -> 1",
        "Source.minimumIsland(grid) -> 2",
        "Source.minimumIsland(grid) -> 1",
        "Source.minimumIsland(grid) -> 9"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.AbstractMap.SimpleEntry;\n\nclass Source {\n  public static int minimumIsland(List<List<String>> grid) {\n    HashSet<SimpleEntry<Integer, Integer>> visited = new HashSet<>();\n    double min = Double.POSITIVE_INFINITY;\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        double size = exploreSize(r, c, grid, visited);\n        if (size > 0 && size < min) {\n          min = size;\n        }\n      }\n    }\n    \n    return (int) min;\n  }\n  \n  public static double exploreSize(int r, int c, List<List<String>> grid, HashSet<SimpleEntry<Integer, Integer>> visited) {\n    boolean rowInbounds = 0 <= r && r < grid.size();\n    boolean colInbounds = 0 <= c && c < grid.get(0).size();\n    if (!rowInbounds || !colInbounds) {\n      return 0;\n    }\n    \n    if (grid.get(r).get(c) == \"W\") {\n      return 0;\n    }\n    \n    SimpleEntry<Integer, Integer> key = new SimpleEntry<>(r, c);\n    if (visited.contains(key)) {\n      return 0;\n    }\n    visited.add(key);\n    \n    int totalSize = 1;\n    totalSize += exploreSize(r + 1, c, grid, visited);\n    totalSize += exploreSize(r - 1, c, grid, visited);\n    totalSize += exploreSize(r, c + 1, grid, visited);\n    totalSize += exploreSize(r, c - 1, grid, visited);\n    return totalSize;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "r = number of rows | c = number of columns | Time: O(rc) | Space: O(rc)"
        },
        {
          "title": "breadth first",
          "code": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.AbstractMap.SimpleEntry;\nimport java.util.Queue;\nimport java.util.ArrayDeque;\n\nclass Source {\n  public static int minimumIsland(List<List<String>> grid) {\n    HashSet<SimpleEntry<Integer, Integer>> visited = new HashSet<>();\n    double min = Double.POSITIVE_INFINITY;\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        double size = exploreSize(r, c, grid, visited);\n        if (size > 0 && size < min) {\n          min = size;\n        }\n      }\n    }\n    \n    return (int) min;\n  }\n  \n  public static double exploreSize(int r, int c, List<List<String>> grid, HashSet<SimpleEntry<Integer, Integer>> visited) {\n    SimpleEntry<Integer, Integer> pos = new SimpleEntry<>(r, c);\n    if (visited.contains(pos) || grid.get(r).get(c) == \"W\") {\n      return 0;\n    }\n    visited.add(pos);\n\n    List<List<Integer>> deltas = List.of(\n      List.of(1, 0),\n      List.of(-1, 0),\n      List.of(0, 1),\n      List.of(0, -1)\n    );\n    Queue<SimpleEntry<Integer, Integer>> queue = new ArrayDeque<>();\n    queue.add(new SimpleEntry<>(r, c));\n\n    int size = 0;\n    while (!queue.isEmpty()) {\n      SimpleEntry<Integer, Integer> currentPos = queue.remove();\n      size += 1;\n      for (List<Integer> delta : deltas) {\n        int dRow = delta.get(0);\n        int dCol = delta.get(1);\n        int neighborR = dRow + currentPos.getKey();\n        int neighborC = dCol + currentPos.getValue();\n        SimpleEntry<Integer, Integer> neighborPos = new SimpleEntry<>(neighborR, neighborC);\n        boolean rowInbounds = neighborR >= 0 && neighborR < grid.size();\n        boolean colInbounds = neighborC >= 0 && neighborC < grid.get(0).size();\n        if (rowInbounds && colInbounds && !visited.contains(neighborPos) && grid.get(neighborR).get(neighborC).equals(\"L\")) {\n          visited.add(neighborPos);\n          queue.add(neighborPos);\n        }\n      }\n    }\n\n    return size;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "r = number of rows | c = number of columns | Time: O(rc) | Space: O(rc)"
        }
      ],
      "meta": {
        "name": "minimum island",
        "slug": "minimum-island",
        "module": "Graph I",
        "premium": false,
        "verbose": "Find the minimum island size of a grid.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int minimumIsland(List<List<String>> grid) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.AbstractMap.SimpleEntry;\n\nclass Source {\n  public static int minimumIsland(List<List<String>> grid) {\n    HashSet<SimpleEntry<Integer, Integer>> visited = new HashSet<>();\n    double min = Double.POSITIVE_INFINITY;\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        double size = exploreSize(r, c, grid, visited);\n        if (size > 0 && size < min) {\n          min = size;\n        }\n      }\n    }\n    \n    return (int) min;\n  }\n  \n  public static double exploreSize(int r, int c, List<List<String>> grid, HashSet<SimpleEntry<Integer, Integer>> visited) {\n    boolean rowInbounds = 0 <= r && r < grid.size();\n    boolean colInbounds = 0 <= c && c < grid.get(0).size();\n    if (!rowInbounds || !colInbounds) {\n      return 0;\n    }\n    \n    if (grid.get(r).get(c) == \"W\") {\n      return 0;\n    }\n    \n    SimpleEntry<Integer, Integer> key = new SimpleEntry<>(r, c);\n    if (visited.contains(key)) {\n      return 0;\n    }\n    visited.add(key);\n    \n    int totalSize = 1;\n    totalSize += exploreSize(r + 1, c, grid, visited);\n    totalSize += exploreSize(r - 1, c, grid, visited);\n    totalSize += exploreSize(r, c + 1, grid, visited);\n    totalSize += exploreSize(r, c - 1, grid, visited);\n    return totalSize;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-i::closest-carrot": {
      "statement": "Write a method, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, \"X\"s are walls, \"O\"s are open spaces, and \"C\"s are carrots. The method should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.",
      "examples": [
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"C\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"O\", \"O\"),\n  List.of(\"C\", \"O\", \"O\", \"O\", \"O\")\n);\n\nSource.closestCarrot(grid, 1, 2); // -> 4",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"C\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"O\", \"O\"),\n  List.of(\"C\", \"O\", \"O\", \"O\", \"O\")\n);\n\nSource.closestCarrot(grid, 0, 0); // -> 5",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"X\", \"X\", \"X\"),\n  List.of(\"O\", \"X\", \"X\", \"X\", \"C\"),\n  List.of(\"O\", \"X\", \"O\", \"X\", \"X\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"X\", \"X\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"C\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\")\n);\n\nSource.closestCarrot(grid, 3, 4); // -> 9"
      ],
      "testCases": [
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"C\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"O\", \"O\"),\n  List.of(\"C\", \"O\", \"O\", \"O\", \"O\")\n);\n\nSource.closestCarrot(grid, 1, 2); // -> 4",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"C\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"O\", \"O\"),\n  List.of(\"C\", \"O\", \"O\", \"O\", \"O\")\n);\n\nSource.closestCarrot(grid, 0, 0); // -> 5",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"X\", \"X\", \"X\"),\n  List.of(\"O\", \"X\", \"X\", \"X\", \"C\"),\n  List.of(\"O\", \"X\", \"O\", \"X\", \"X\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"X\", \"X\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"C\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\")\n);\n\nSource.closestCarrot(grid, 3, 4); // -> 9",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"X\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"X\", \"O\"),\n  List.of(\"O\", \"X\", \"C\", \"C\", \"O\")\n);\n\nSource.closestCarrot(grid, 1, 4); // -> 2",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"X\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"X\", \"O\"),\n  List.of(\"O\", \"X\", \"C\", \"C\", \"O\")\n);\n\nSource.closestCarrot(grid, 2, 0); // -> -1",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"X\", \"X\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"X\", \"C\")\n);\n\nSource.closestCarrot(grid, 0, 0); // -> -1",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"X\", \"C\", \"O\"),\n  List.of(\"O\", \"X\", \"X\", \"X\", \"O\"),\n  List.of(\"C\", \"X\", \"O\", \"O\", \"O\")\n);\n\nSource.closestCarrot(grid, 2, 2); // -> 5",
        "Source.closestCarrot(grid, 1, 2) -> 4",
        "Source.closestCarrot(grid, 0, 0) -> 5",
        "Source.closestCarrot(grid, 3, 4) -> 9",
        "Source.closestCarrot(grid, 1, 4) -> 2",
        "Source.closestCarrot(grid, 2, 0) -> -1",
        "Source.closestCarrot(grid, 0, 0) -> -1",
        "Source.closestCarrot(grid, 2, 2) -> 5"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "breadth first",
          "code": "import java.util.List;\nimport java.util.ArrayDeque;\nimport java.util.HashSet;\n\nclass Source {\n  public static int closestCarrot(List<List<String>> grid, int startRow, int startCol) {\n    HashSet<List<Integer>> visited = new HashSet<>();\n    ArrayDeque<List<Integer>> queue = new ArrayDeque<>();\n    queue.add(List.of(startRow, startCol, 0));\n    visited.add(List.of(startRow, startCol));\n    \n    while (!queue.isEmpty()) {\n      List<Integer> entry = queue.remove();\n      int r = entry.get(0);\n      int c = entry.get(1);\n      int distance = entry.get(2);\n      \n      if (grid.get(r).get(c) == \"C\") {\n        return distance;\n      }\n      \n      List<List<Integer>> deltas = List.of(\n        List.of(1, 0),\n        List.of(-1, 0),\n        List.of(0, 1),\n        List.of(0, -1)\n      );\n      for (List<Integer> delta : deltas) {\n        int deltaRow = delta.get(0);\n        int deltaCol = delta.get(1);\n        int newRow = r + deltaRow;\n        int newCol = c + deltaCol;\n        boolean rowInbounds = 0 <= newRow && newRow < grid.size();\n        boolean colInbounds = 0 <= newCol && newCol < grid.get(0).size();\n        List<Integer> key = List.of(newRow, newCol);\n        if (rowInbounds && colInbounds && grid.get(newRow).get(newCol) != \"X\" && !visited.contains(key)) {\n          visited.add(key);\n          queue.add(List.of(newRow, newCol, distance + 1));\n        }\n      }\n    }\n    return -1;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "r = number of rows | c = number of columns | Time: O(rc) | Space: O(rc)"
        }
      ],
      "meta": {
        "name": "closest carrot",
        "slug": "closest-carrot",
        "module": "Graph I",
        "premium": true,
        "verbose": "Find the shortest path to a carrot in a grid.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int closestCarrot(List<List<String>> grid, int startRow, int startCol) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayDeque;\nimport java.util.HashSet;\n\nclass Source {\n  public static int closestCarrot(List<List<String>> grid, int startRow, int startCol) {\n    HashSet<List<Integer>> visited = new HashSet<>();\n    ArrayDeque<List<Integer>> queue = new ArrayDeque<>();\n    queue.add(List.of(startRow, startCol, 0));\n    visited.add(List.of(startRow, startCol));\n    \n    while (!queue.isEmpty()) {\n      List<Integer> entry = queue.remove();\n      int r = entry.get(0);\n      int c = entry.get(1);\n      int distance = entry.get(2);\n      \n      if (grid.get(r).get(c) == \"C\") {\n        return distance;\n      }\n      \n      List<List<Integer>> deltas = List.of(\n        List.of(1, 0),\n        List.of(-1, 0),\n        List.of(0, 1),\n        List.of(0, -1)\n      );\n      for (List<Integer> delta : deltas) {\n        int deltaRow = delta.get(0);\n        int deltaCol = delta.get(1);\n        int newRow = r + deltaRow;\n        int newCol = c + deltaCol;\n        boolean rowInbounds = 0 <= newRow && newRow < grid.size();\n        boolean colInbounds = 0 <= newCol && newCol < grid.get(0).size();\n        List<Integer> key = List.of(newRow, newCol);\n        if (rowInbounds && colInbounds && grid.get(newRow).get(newCol) != \"X\" && !visited.contains(key)) {\n          visited.add(key);\n          queue.add(List.of(newRow, newCol, distance + 1));\n        }\n      }\n    }\n    return -1;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-i::best-bridge": {
      "statement": "Write a method, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L). There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land. Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.",
      "examples": [
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"L\", \"L\", \"W\", \"L\"),\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\")\n);\nSource.bestBridge(grid); // -> 1",
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"L\", \"L\", \"W\", \"W\", \"L\"),\n  List.of(\"W\", \"L\", \"W\", \"W\", \"L\"),\n  List.of(\"W\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\")\n);\nSource.bestBridge(grid); // -> 2",
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"L\", \"W\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\")\n);\nSource.bestBridge(grid); // -> 3"
      ],
      "testCases": [
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"L\", \"L\", \"W\", \"L\"),\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\")\n);\nSource.bestBridge(grid); // -> 1",
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"L\", \"L\", \"W\", \"W\", \"L\"),\n  List.of(\"W\", \"L\", \"W\", \"W\", \"L\"),\n  List.of(\"W\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\")\n);\nSource.bestBridge(grid); // -> 2",
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"L\", \"W\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\")\n);\nSource.bestBridge(grid); // -> 3",
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"L\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"L\", \"L\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"L\", \"L\", \"L\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"L\", \"L\", \"L\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\", \"L\", \"L\", \"L\"),\n  List.of(\"L\", \"L\", \"L\", \"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\")\n);\nSource.bestBridge(grid); // -> 3",
        "List<List<String>> grid = List.of(\n  List.of(\"L\", \"L\", \"L\", \"L\", \"L\", \"L\", \"L\", \"L\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"W\", \"W\", \"L\", \"W\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\"),\n  List.of(\"L\", \"L\", \"L\", \"L\", \"L\", \"L\", \"L\", \"L\")\n);\nSource.bestBridge(grid); // -> 2",
        "List<List<String>> grid = List.of(\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"L\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\", \"W\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\", \"L\"),\n  List.of(\"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"W\", \"L\")\n);\nSource.bestBridge(grid); // -> 8",
        "Source.bestBridge(grid) -> 1",
        "Source.bestBridge(grid) -> 2",
        "Source.bestBridge(grid) -> 3",
        "Source.bestBridge(grid) -> 8"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.ArrayDeque;\n\nclass Source {\n  public static int bestBridge(List<List<String>> grid) {\n    HashSet<List<Integer>> mainIsland = null;\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        HashSet<List<Integer>> island = traverseIsland(r, c, grid, new HashSet<>());\n        if (island.size() > 0) {\n          mainIsland = island;\n        } \n      }\n    }\n    \n    HashSet<List<Integer>> visited = new HashSet<>();\n    ArrayDeque<List<Integer>> queue = new ArrayDeque<>();\n    for (List<Integer> pos : mainIsland) {\n      int r = pos.get(0);\n      int c = pos.get(1);\n      queue.add(List.of(r, c, 0));\n      visited.add(pos);\n    }\n    \n    while (!queue.isEmpty()) {\n      List<Integer> entry = queue.remove(); \n      int r = entry.get(0);\n      int c = entry.get(1);\n      int distance = entry.get(2);\n      List<Integer> pos = List.of(r, c);\n      \n      if (grid.get(r).get(c) == \"L\" && !mainIsland.contains(pos)) {\n        return distance - 1;\n      }\n      \n      List<List<Integer>> deltas = List.of(\n        List.of(1, 0),\n        List.of(-1, 0),\n        List.of(0, 1),\n        List.of(0, -1)\n      );\n      \n      for (List<Integer> delta : deltas) {\n        int newRow = r + delta.get(0);\n        int newCol = c + delta.get(1);\n        List<Integer> newPos = List.of(newRow, newCol);\n        if (isInbounds(newRow, newCol, grid) && !visited.contains(newPos)) {\n          visited.add(newPos);\n          queue.add(List.of(newRow, newCol, distance + 1));\n        }\n      }\n    }\n    \n    return -1;\n  }\n  \n  public static boolean isInbounds(int r, int c, List<List<String>> grid) {\n    boolean rowInbounds = 0 <= r && r < grid.size();\n    boolean colInbounds = 0 <= c && c < grid.get(0).size();\n    return rowInbounds && colInbounds;\n  }\n  \n  public static HashSet<List<Integer>> traverseIsland(int r, int c, List<List<String>> grid, HashSet<List<Integer>> visited) {\n    if (!isInbounds(r, c, grid)) {\n      return visited;\n    }\n    \n    if (grid.get(r).get(c) == \"W\") {\n      return visited;\n    }\n    \n    List<Integer> pos = List.of(r, c);\n    if (visited.contains(pos)) {\n      return visited;\n    }\n    visited.add(pos);\n    \n    traverseIsland(r + 1, c, grid, visited);\n    traverseIsland(r - 1, c, grid, visited);\n    traverseIsland(r, c + 1, grid, visited);\n    traverseIsland(r, c - 1, grid, visited);\n    return visited;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "r = number of rows | c = number of columns | Time: O(rc) | Space: O(rc)"
        }
      ],
      "meta": {
        "name": "best bridge",
        "slug": "best-bridge",
        "module": "Graph I",
        "premium": true,
        "verbose": "Find the shortest bridge possible to connect two islands.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int bestBridge(List<List<String>> grid) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.ArrayDeque;\n\nclass Source {\n  public static int bestBridge(List<List<String>> grid) {\n    HashSet<List<Integer>> mainIsland = null;\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        HashSet<List<Integer>> island = traverseIsland(r, c, grid, new HashSet<>());\n        if (island.size() > 0) {\n          mainIsland = island;\n        } \n      }\n    }\n    \n    HashSet<List<Integer>> visited = new HashSet<>();\n    ArrayDeque<List<Integer>> queue = new ArrayDeque<>();\n    for (List<Integer> pos : mainIsland) {\n      int r = pos.get(0);\n      int c = pos.get(1);\n      queue.add(List.of(r, c, 0));\n      visited.add(pos);\n    }\n    \n    while (!queue.isEmpty()) {\n      List<Integer> entry = queue.remove(); \n      int r = entry.get(0);\n      int c = entry.get(1);\n      int distance = entry.get(2);\n      List<Integer> pos = List.of(r, c);\n      \n      if (grid.get(r).get(c) == \"L\" && !mainIsland.contains(pos)) {\n        return distance - 1;\n      }\n      \n      List<List<Integer>> deltas = List.of(\n        List.of(1, 0),\n        List.of(-1, 0),\n        List.of(0, 1),\n        List.of(0, -1)\n      );\n      \n      for (List<Integer> delta : deltas) {\n        int newRow = r + delta.get(0);\n        int newCol = c + delta.get(1);\n        List<Integer> newPos = List.of(newRow, newCol);\n        if (isInbounds(newRow, newCol, grid) && !visited.contains(newPos)) {\n          visited.add(newPos);\n          queue.add(List.of(newRow, newCol, distance + 1));\n        }\n      }\n    }\n    \n    return -1;\n  }\n  \n  public static boolean isInbounds(int r, int c, List<List<String>> grid) {\n    boolean rowInbounds = 0 <= r && r < grid.size();\n    boolean colInbounds = 0 <= c && c < grid.get(0).size();\n    return rowInbounds && colInbounds;\n  }\n  \n  public static HashSet<List<Integer>> traverseIsland(int r, int c, List<List<String>> grid, HashSet<List<Integer>> visited) {\n    if (!isInbounds(r, c, grid)) {\n      return visited;\n    }\n    \n    if (grid.get(r).get(c) == \"W\") {\n      return visited;\n    }\n    \n    List<Integer> pos = List.of(r, c);\n    if (visited.contains(pos)) {\n      return visited;\n    }\n    visited.add(pos);\n    \n    traverseIsland(r + 1, c, grid, visited);\n    traverseIsland(r - 1, c, grid, visited);\n    traverseIsland(r, c + 1, grid, visited);\n    traverseIsland(r, c - 1, grid, visited);\n    return visited;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-i::has-cycle": {
      "statement": "Write a method, hasCycle, that takes in a Map representing the adjacency list of a directed graph. The method should return a boolean indicating whether or not the graph contains a cycle.",
      "examples": [
        "Source.hasCycle(Map.of(\n  \"a\", List.of(\"b\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of(\"a\")\n)); // -> true",
        "Source.hasCycle(Map.of(\n  \"a\", List.of(\"b\", \"c\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of(\"d\"),\n  \"d\", List.of()\n)); // -> false",
        "Source.hasCycle(Map.of(\n  \"a\", List.of(\"b\", \"c\"),\n  \"b\", List.of(),\n  \"c\", List.of(),\n  \"e\", List.of(\"f\"),\n  \"f\", List.of(\"e\")\n)); // -> true"
      ],
      "testCases": [
        "Source.hasCycle(Map.of(\n  \"a\", List.of(\"b\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of(\"a\")\n)); // -> true",
        "Source.hasCycle(Map.of(\n  \"a\", List.of(\"b\", \"c\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of(\"d\"),\n  \"d\", List.of()\n)); // -> false",
        "Source.hasCycle(Map.of(\n  \"a\", List.of(\"b\", \"c\"),\n  \"b\", List.of(),\n  \"c\", List.of(),\n  \"e\", List.of(\"f\"),\n  \"f\", List.of(\"e\")\n)); // -> true",
        "Source.hasCycle(Map.of(\n  \"q\", List.of(\"r\", \"s\"),\n  \"r\", List.of(\"t\", \"u\"),\n  \"s\", List.of(),\n  \"t\", List.of(),\n  \"u\", List.of(),\n  \"v\", List.of(\"w\"),\n  \"w\", List.of(),\n  \"x\", List.of(\"w\")\n)); // -> false",
        "Source.hasCycle(Map.of(\n  \"a\", List.of(\"b\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of(\"a\"),\n  \"g\", List.of()\n)); // -> true",
        "Source.hasCycle(Map.of(\n  \"a\", List.of(\"b\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of(\"d\"),\n  \"d\", List.of(\"b\")\n)); // -> true",
        "Source.hasCycle(Map.of(\n  \"a\", List.of(\"b\", \"c\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of(\"d\"),\n  \"d\", List.of(),\n  \"e\", List.of(\"c\")\n)); // -> false",
        "Source.hasCycle(Map.of( \"a\", List.of(\"b\"), \"b\", List.of(\"c\"), \"c\", List.of(\"a\") )) -> true",
        "Source.hasCycle(Map.of( \"a\", List.of(\"b\", \"c\"), \"b\", List.of(\"c\"), \"c\", List.of(\"d\"), \"d\", List.of() )) -> false",
        "Source.hasCycle(Map.of( \"a\", List.of(\"b\", \"c\"), \"b\", List.of(), \"c\", List.of(), \"e\", List.of(\"f\"), \"f\", List.of(\"e\") )) -> true",
        "Source.hasCycle(Map.of( \"q\", List.of(\"r\", \"s\"), \"r\", List.of(\"t\", \"u\"), \"s\", List.of(), \"t\", List.of(), \"u\", List.of(), \"v\", List.of(\"w\"), \"w\", List.of(), \"x\", List.of(\"w\") )) -> false",
        "Source.hasCycle(Map.of( \"a\", List.of(\"b\"), \"b\", List.of(\"c\"), \"c\", List.of(\"a\"), \"g\", List.of() )) -> true",
        "Source.hasCycle(Map.of( \"a\", List.of(\"b\"), \"b\", List.of(\"c\"), \"c\", List.of(\"d\"), \"d\", List.of(\"b\") )) -> true",
        "Source.hasCycle(Map.of( \"a\", List.of(\"b\", \"c\"), \"b\", List.of(\"c\"), \"c\", List.of(\"d\"), \"d\", List.of(), \"e\", List.of(\"c\") )) -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "white-grey-black algorithm",
          "code": "import java.util.Map;\nimport java.util.List;\nimport java.util.HashSet;\n\nclass Source {\n  public static boolean hasCycle(Map<String, List<String>> graph) {\n    HashSet<String> visited = new HashSet<>();\n    for (String node : graph.keySet()) {\n      if (cycleDetect(node, graph, new HashSet<>(), visited)) {\n        return true;\n      }\n    }\n    return false;\n  }\n  \n  public static boolean cycleDetect(String node, Map<String, List<String>> graph, HashSet<String> visiting, HashSet<String> visited) {\n    if (visited.contains(node)) {\n      return false;\n    } \n    \n    if (visiting.contains(node)) {\n      return true;\n    }\n    \n    visiting.add(node);\n    \n    for (String neighbor : graph.get(node)) {\n      if (cycleDetect(neighbor, graph, visiting, visited)) {\n        return true;\n      }\n    }\n    \n    visiting.remove(node);\n    visited.add(node);\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n^2) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "has cycle",
        "slug": "has-cycle",
        "module": "Graph I",
        "premium": true,
        "verbose": "Check if a directed graph contains a cycle.",
        "stub": "import java.util.Map;\nimport java.util.List;\n\nclass Source {\n  public static boolean hasCycle(Map<String, List<String>> graph) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.Map;\nimport java.util.List;\nimport java.util.HashSet;\n\nclass Source {\n  public static boolean hasCycle(Map<String, List<String>> graph) {\n    HashSet<String> visited = new HashSet<>();\n    for (String node : graph.keySet()) {\n      if (cycleDetect(node, graph, new HashSet<>(), visited)) {\n        return true;\n      }\n    }\n    return false;\n  }\n  \n  public static boolean cycleDetect(String node, Map<String, List<String>> graph, HashSet<String> visiting, HashSet<String> visited) {\n    if (visited.contains(node)) {\n      return false;\n    } \n    \n    if (visiting.contains(node)) {\n      return true;\n    }\n    \n    visiting.add(node);\n    \n    for (String neighbor : graph.get(node)) {\n      if (cycleDetect(neighbor, graph, visiting, visited)) {\n        return true;\n      }\n    }\n    \n    visiting.remove(node);\n    visited.add(node);\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-i::prereqs-possible": {
      "statement": "Write a method, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of List.of(A, B) means that course A must be taken before course B. The method should return a boolean indicating whether or not it is possible to complete all courses.",
      "examples": [
        "int numCourses = 6;\nList<List<Integer>> prereqs = List.of(\n  List.of(0, 1),\n  List.of(2, 3),\n  List.of(0, 2),\n  List.of(1, 3),\n  List.of(4, 5)\n);\nSource.prereqsPossible(numCourses, prereqs); // -> true",
        "int numCourses = 6;\nList<List<Integer>> prereqs = List.of(\n  List.of(0, 1),\n  List.of(2, 3),\n  List.of(0, 2),\n  List.of(1, 3),\n  List.of(4, 5),\n  List.of(3, 0)\n);\nSource.prereqsPossible(numCourses, prereqs); // -> false",
        "int numCourses = 5;\nList<List<Integer>> prereqs = List.of(\n  List.of(2, 4),\n  List.of(1, 0),\n  List.of(0, 2),\n  List.of(0, 4)\n);\nSource.prereqsPossible(numCourses, prereqs); // -> true"
      ],
      "testCases": [
        "int numCourses = 6;\nList<List<Integer>> prereqs = List.of(\n  List.of(0, 1),\n  List.of(2, 3),\n  List.of(0, 2),\n  List.of(1, 3),\n  List.of(4, 5)\n);\nSource.prereqsPossible(numCourses, prereqs); // -> true",
        "int numCourses = 6;\nList<List<Integer>> prereqs = List.of(\n  List.of(0, 1),\n  List.of(2, 3),\n  List.of(0, 2),\n  List.of(1, 3),\n  List.of(4, 5),\n  List.of(3, 0)\n);\nSource.prereqsPossible(numCourses, prereqs); // -> false",
        "int numCourses = 5;\nList<List<Integer>> prereqs = List.of(\n  List.of(2, 4),\n  List.of(1, 0),\n  List.of(0, 2),\n  List.of(0, 4)\n);\nSource.prereqsPossible(numCourses, prereqs); // -> true",
        "int numCourses = 6;\nList<List<Integer>> prereqs = List.of(\n  List.of(2, 4),\n  List.of(1, 0),\n  List.of(0, 2),\n  List.of(0, 4),\n  List.of(5, 3),\n  List.of(3, 5)\n);\nSource.prereqsPossible(numCourses, prereqs); // -> false",
        "int numCourses = 8;\nList<List<Integer>> prereqs = List.of(\n  List.of(1, 0),\n  List.of(0, 6),\n  List.of(2, 0),\n  List.of(0, 5),\n  List.of(3, 7),\n  List.of(4, 3)\n);\nSource.prereqsPossible(numCourses, prereqs); // -> true",
        "int numCourses = 8;\nList<List<Integer>> prereqs = List.of(\n  List.of(1, 0),\n  List.of(0, 6),\n  List.of(2, 0),\n  List.of(0, 5),\n  List.of(3, 7),\n  List.of(7, 4),\n  List.of(4, 3)\n);\nSource.prereqsPossible(numCourses, prereqs); // -> false",
        "int numCourses = 42;\nList<List<Integer>> prereqs = List.of(List.of(6, 36));\nSource.prereqsPossible(numCourses, prereqs); // -> true",
        "Source.prereqsPossible(numCourses, prereqs) -> true",
        "Source.prereqsPossible(numCourses, prereqs) -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "white-grey-black cycle detection algorithm",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.HashSet;\n\nclass Source {\n  public static boolean prereqsPossible(int numCourses, List<List<Integer>> prereqs) {\n    HashSet<Integer> visited = new HashSet<>();\n    HashMap<Integer, List<Integer>> graph = buildGraph(numCourses, prereqs);\n    for (int node : graph.keySet()) {\n      if (hasCycle(node, graph, new HashSet<>(), visited)) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  public static boolean hasCycle(int node, HashMap<Integer, List<Integer>> graph, HashSet<Integer> visiting, HashSet<Integer> visited) {\n    if (visited.contains(node)) {\n      return false;\n    }\n    \n    if (visiting.contains(node)) {\n      return true;\n    }\n    visiting.add(node);\n    \n    for (int neighbor : graph.get(node)) {\n      if (hasCycle(neighbor, graph, visiting, visited)) {\n        return true;\n      }\n    }\n    \n    visiting.remove(node);\n    visited.add(node);\n    return false;\n  }\n  \n  public static HashMap<Integer, List<Integer>> buildGraph(int numCourses, List<List<Integer>> prereqs) {\n    HashMap<Integer, List<Integer>> graph = new HashMap<>();\n    for (int i = 0; i < numCourses; i += 1) {\n      graph.put(i, new ArrayList<>());\n    }\n    \n    for (List<Integer> pair : prereqs) {\n      int courseA = pair.get(0);\n      int courseB = pair.get(1);\n      graph.get(courseA).add(courseB);\n    }\n    \n    return graph;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "p = # prereqs | n = # courses | Time: O(n + p) | Space: O(n + p)"
        }
      ],
      "meta": {
        "name": "prereqs possible",
        "slug": "prereqs-possible",
        "module": "Graph I",
        "premium": true,
        "verbose": "Check if it is possible to take all courses.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean prereqsPossible(int numCourses, List<List<Integer>> prereqs) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.HashSet;\n\nclass Source {\n  public static boolean prereqsPossible(int numCourses, List<List<Integer>> prereqs) {\n    HashSet<Integer> visited = new HashSet<>();\n    HashMap<Integer, List<Integer>> graph = buildGraph(numCourses, prereqs);\n    for (int node : graph.keySet()) {\n      if (hasCycle(node, graph, new HashSet<>(), visited)) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  public static boolean hasCycle(int node, HashMap<Integer, List<Integer>> graph, HashSet<Integer> visiting, HashSet<Integer> visited) {\n    if (visited.contains(node)) {\n      return false;\n    }\n    \n    if (visiting.contains(node)) {\n      return true;\n    }\n    visiting.add(node);\n    \n    for (int neighbor : graph.get(node)) {\n      if (hasCycle(neighbor, graph, visiting, visited)) {\n        return true;\n      }\n    }\n    \n    visiting.remove(node);\n    visited.add(node);\n    return false;\n  }\n  \n  public static HashMap<Integer, List<Integer>> buildGraph(int numCourses, List<List<Integer>> prereqs) {\n    HashMap<Integer, List<Integer>> graph = new HashMap<>();\n    for (int i = 0; i < numCourses; i += 1) {\n      graph.put(i, new ArrayList<>());\n    }\n    \n    for (List<Integer> pair : prereqs) {\n      int courseA = pair.get(0);\n      int courseB = pair.get(1);\n      graph.get(courseA).add(courseB);\n    }\n    \n    return graph;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "sliding-window::max-subarray-sum-size-k": {
      "statement": "Write a method that takes in a List of numbers and a size k as arguments. The method should return the maximum sum of subarrays that contain exactly k elements. You can assume that k is less than or equal to the length of the input List.",
      "examples": [
        "maxSubarraySumSizeK(List.of(4, 2, 1, -9, 8, 4, 3), 3); // -> 15\n// [8,4,3] is the subarray of size 3 with the maximal sum",
        "maxSubarraySumSizeK(List.of(2, 1, 5, -4, 6) , 3); // -> 8",
        "maxSubarraySumSizeK(List.of(1, 4, 1, 10, 25, 3, 1, 0, 20), 4); // -> 40"
      ],
      "testCases": [
        "maxSubarraySumSizeK(List.of(4, 2, 1, -9, 8, 4, 3), 3); // -> 15\n// [8,4,3] is the subarray of size 3 with the maximal sum",
        "maxSubarraySumSizeK(List.of(2, 1, 5, -4, 6) , 3); // -> 8",
        "maxSubarraySumSizeK(List.of(1, 4, 1, 10, 25, 3, 1, 0, 20), 4); // -> 40",
        "maxSubarraySumSizeK(List.of(20, 50, 10, 60, 80, 70), 1); // -> 80",
        "maxSubarraySumSizeK(List.of(-4, -18, -2, -5, -9), 2); // -> -7",
        "List<Integer> nums = new ArrayList<>();\nfor (int i = 0; i < 90000; i += 1) {\n  nums.add(1);\n}\n// [1,1,1,...]\nmaxSubarraySumSizeK(nums, 3000); // -> 3000",
        "List<Integer> nums = new ArrayList<>();\nfor (int i = 0; i < 150000; i += 1) {\n  nums.add(1);\n}\n// [1,1,1,...]\nmaxSubarraySumSizeK(nums, 20000); // -> 20000",
        "Source.maxSubarraySumSizeK(List.of(4, 2, 1, -9, 8, 4, 3), 3) -> 15",
        "Source.maxSubarraySumSizeK(List.of(2, 1, 5, -4, 6) , 3) -> 8",
        "Source.maxSubarraySumSizeK(List.of(1, 4, 1, 10, 25, 3, 1, 0, 20), 4) -> 40",
        "Source.maxSubarraySumSizeK(List.of(20, 50, 10, 60, 80, 70), 1) -> 80",
        "Source.maxSubarraySumSizeK(List.of(-4, -18, -2, -5, -9), 2) -> -7",
        "Source.maxSubarraySumSizeK(nums, 3000) -> 3000",
        "Source.maxSubarraySumSizeK(nums, 20000) -> 20000"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "sliding window (timeout)",
          "code": "import java.util.List;\n\nclass Source {\n  public static int maxSubarraySumSizeK(List<Integer> nums, int k) {\n    double maxSum = Double.NEGATIVE_INFINITY;\n    for (int i = 0; i <= nums.size() - k; i += 1) {\n      double sum = 0.0;\n      for (int j = i; j < i + k; j += 1) {\n        sum += (double) nums.get(j); \n      }\n      if (sum > maxSum) {\n        maxSum = sum;\n      }\n    }\n    return (int) maxSum;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of nums | k = size | Time: O(n\\*k) | Space: O(1)"
        },
        {
          "title": "sliding window optimized (pass)",
          "code": "import java.util.List;\n\nclass Source {\n  public static int maxSubarraySumSizeK(List<Integer> nums, int k) {\n    int currentSum = 0;\n    for (int i = 0; i < k; i += 1) {\n      currentSum += nums.get(i);\n    }\n    int maxSum = currentSum;\n    \n    for (int i = 0; i < nums.size() - k; i += 1) {\n      currentSum -= nums.get(i);\n      currentSum += nums.get(i + k);\n      if (currentSum > maxSum) {\n        maxSum = currentSum;\n      }\n    }\n    \n    return maxSum;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of nums | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "max subarray sum size k",
        "slug": "max-subarray-sum-size-k",
        "module": "Sliding Window",
        "premium": true,
        "verbose": "Find the maximum sum of a subarray with size k.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int maxSubarraySumSizeK(List<Integer> nums, int k) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\n\nclass Source {\n  public static int maxSubarraySumSizeK(List<Integer> nums, int k) {\n    double maxSum = Double.NEGATIVE_INFINITY;\n    for (int i = 0; i <= nums.size() - k; i += 1) {\n      double sum = 0.0;\n      for (int j = i; j < i + k; j += 1) {\n        sum += (double) nums.get(j); \n      }\n      if (sum > maxSum) {\n        maxSum = sum;\n      }\n    }\n    return (int) maxSum;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "sliding-window::max-subarray-product-size-k": {
      "statement": "Write a method that takes in a List of numbers and a size k as arguments. The method should return the maximum product of subarrays that contain exactly k elements. You can assume that k is less than or equal to the length of the input List. You can assume that numbers of the List are non-zero.",
      "examples": [
        "maxSubarrayProductSizeK(List.of(4., 2., 1., -9., 8., 2., 3.), 3); // -> 48\n// [8,2,3] is the subarray of size 3 with the maximal product",
        "maxSubarrayProductSizeK(List.of(-9., 1., -8., 2., 3., 7.), 3); // -> 72",
        "maxSubarrayProductSizeK(List.of(7., 4., -5., -7., 8., -10., -1.), 2); // -> 35"
      ],
      "testCases": [
        "maxSubarrayProductSizeK(List.of(4., 2., 1., -9., 8., 2., 3.), 3); // -> 48\n// [8,2,3] is the subarray of size 3 with the maximal product",
        "maxSubarrayProductSizeK(List.of(-9., 1., -8., 2., 3., 7.), 3); // -> 72",
        "maxSubarrayProductSizeK(List.of(7., 4., -5., -7., 8., -10., -1.), 2); // -> 35",
        "maxSubarrayProductSizeK(List.of(60., 20., 10., 90., 50.), 1); // -> 90",
        "maxSubarrayProductSizeK(List.of(1., 2., 3., 4.), 4); // -> 24",
        "List<Double> nums = new ArrayList<>();\nfor (int i = 0; i < 90000; i += 1) {\n  nums.add(1.);\n}\n// [1,1,1,...]\nmaxSubarrayProductSizeK(nums, 3000); // -> 1",
        "List<Double> nums = new ArrayList<>();\nfor (int i = 0; i < 160000; i += 1) {\n  nums.add(1.);\n}\n// [1,1,1,...]\nmaxSubarrayProductSizeK(nums, 10000); // -> 1",
        "Source.maxSubarrayProductSizeK(List.of(4., 2., 1., -9., 8., 2., 3.), 3) -> 48.",
        "Source.maxSubarrayProductSizeK(List.of(-9., 1., -8., 2., 3., 7.), 3) -> 72.",
        "Source.maxSubarrayProductSizeK(List.of(7., 4., -5., -7., 8., -10., -1.), 2) -> 35.",
        "Source.maxSubarrayProductSizeK(List.of(60., 20., 10., 90., 50.), 1) -> 90.",
        "Source.maxSubarrayProductSizeK(List.of(1., 2., 3., 4.), 4) -> 24.",
        "Source.maxSubarrayProductSizeK(nums, 3000) -> 1.",
        "Source.maxSubarrayProductSizeK(nums, 10000) -> 1."
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "sliding window (timeout)",
          "code": "import java.util.List;\n\nclass Source {\n  public static double maxSubarrayProductSizeK(List<Double> nums, int k) {\n    double maxProduct = Double.NEGATIVE_INFINITY;\n    for (int i = 0; i <= nums.size() - k; i += 1) {\n      double product = 1.0;\n      for (int j = i; j < i + k; j += 1) {\n        product *= (double) nums.get(j); \n      }\n      if (product > maxProduct) {\n        maxProduct = product;\n      }\n    }\n    return (int) maxProduct;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of nums | k = size | Time: O(n\\*k) | Space: O(1)"
        },
        {
          "title": "sliding window optimized (pass)",
          "code": "import java.util.List;\n\nclass Source {\n  public static double maxSubarrayProductSizeK(List<Double> nums, int k) {\n    double currentProduct = 1;\n    for (int i = 0; i < k; i += 1) {\n      currentProduct *= nums.get(i);\n    }\n    double maxProduct = currentProduct;\n    \n    for (int i = 0; i < nums.size() - k; i += 1) {\n      currentProduct /= nums.get(i);\n      currentProduct *= nums.get(i + k);\n      maxProduct = Math.max(currentProduct, maxProduct);\n    }\n    return maxProduct;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of nums | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "max subarray product size k",
        "slug": "max-subarray-product-size-k",
        "module": "Sliding Window",
        "premium": true,
        "verbose": "Find the maximum product of a subarray with size k.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static double maxSubarrayProductSizeK(List<Double> nums, int k) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\n\nclass Source {\n  public static double maxSubarrayProductSizeK(List<Double> nums, int k) {\n    double maxProduct = Double.NEGATIVE_INFINITY;\n    for (int i = 0; i <= nums.size() - k; i += 1) {\n      double product = 1.0;\n      for (int j = i; j < i + k; j += 1) {\n        product *= (double) nums.get(j); \n      }\n      if (product > maxProduct) {\n        maxProduct = product;\n      }\n    }\n    return (int) maxProduct;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "sliding-window::subarray-target-sum-size-k": {
      "statement": "Write a method that takes in a List of numbers, a target sum, and a size k as arguments. The method should return the number of subarrays of size k that sum to the target. You can assume that k is less than or equal to the length of the input List.",
      "examples": [
        "subarrayTargetSumSizeK(List.of(2, 3, 2, 2, 3, 1, 3, 8, 5, 0, 2, 4), 7, 3); // -> 5\n// The 5 subarrays of size 3 whose sum is 7 are:\n//   [2,3,2]\n//   [3,2,2]\n//   [2,2,3]\n//   [3,1,3]\n//   [5,0,2]",
        "subarrayTargetSumSizeK(List.of(2, 3, 2), 7, 3); // -> 1",
        "subarrayTargetSumSizeK(List.of(1, 2, 2, 2, 2, 4, 6, 5, 1, 2, 0, 10, -2, 7), 8, 4); // -> 2"
      ],
      "testCases": [
        "subarrayTargetSumSizeK(List.of(2, 3, 2, 2, 3, 1, 3, 8, 5, 0, 2, 4), 7, 3); // -> 5\n// The 5 subarrays of size 3 whose sum is 7 are:\n//   [2,3,2]\n//   [3,2,2]\n//   [2,2,3]\n//   [3,1,3]\n//   [5,0,2]",
        "subarrayTargetSumSizeK(List.of(2, 3, 2), 7, 3); // -> 1",
        "subarrayTargetSumSizeK(List.of(1, 2, 2, 2, 2, 4, 6, 5, 1, 2, 0, 10, -2, 7), 8, 4); // -> 2",
        "List<Integer> nums = new ArrayList<>();\nfor (int i = 0; i < 90000; i += 1) {\n  nums.add(0);\n}\n// [0,0,0,...]\nsubarrayTargetSumSizeK(nums, 1, 5000); // -> 0",
        "Source.subarrayTargetSumSizeK(List.of(2, 3, 2, 2, 3, 1, 3, 8, 5, 0, 2, 4), 7, 3) -> 5",
        "Source.subarrayTargetSumSizeK(List.of(2, 3, 2), 7, 3) -> 1",
        "Source.subarrayTargetSumSizeK(List.of(1, 2, 2, 2, 2, 4, 6, 5, 1, 2, 0, 10, -2, 7), 8, 4) -> 2",
        "Source.subarrayTargetSumSizeK(nums, 1, 5000) -> 0"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "sliding window",
          "code": "import java.util.List;\n\nclass Source {\n  public static int subarrayTargetSumSizeK(List<Integer> nums, int target, int k) {\n    int currentSum = 0;\n    for (int i = 0; i < k; i += 1) {\n      currentSum += nums.get(i);\n    }\n    int count = currentSum == target ? 1 : 0;\n    \n    for (int i = 0; i < nums.size() - k; i += 1) {\n      currentSum -= nums.get(i);\n      currentSum += nums.get(i + k);\n      if (currentSum == target) {\n        count += 1;\n      }\n    }\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of nums | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "subarray target sum size k",
        "slug": "subarray-target-sum-size-k",
        "module": "Sliding Window",
        "premium": true,
        "verbose": "Count the subarrays that have a specific sum.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int subarrayTargetSumSizeK(List<Integer> nums, int target, int k) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\n\nclass Source {\n  public static int subarrayTargetSumSizeK(List<Integer> nums, int target, int k) {\n    int currentSum = 0;\n    for (int i = 0; i < k; i += 1) {\n      currentSum += nums.get(i);\n    }\n    int count = currentSum == target ? 1 : 0;\n    \n    for (int i = 0; i < nums.size() - k; i += 1) {\n      currentSum -= nums.get(i);\n      currentSum += nums.get(i + k);\n      if (currentSum == target) {\n        count += 1;\n      }\n    }\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "sliding-window::has-substring-anagram": {
      "statement": "Write a function that takes in a string and an anagram. The function should return a boolean indicating whether or not the string contains a substring with the same characters as the anagram. You can assume that the string contains no duplicate characters. You can assume that the anagram contains no duplicate characters. You can assume that the anagram is not longer than the string.",
      "examples": [
        "hasSubstringAnagram(\"greyhounds\", \"hoy\"); // -> true\n// the substring \"yho\" is an anagram of \"hoy\"",
        "hasSubstringAnagram(\"gruyheonds\", \"hoy\"); // -> false",
        "hasSubstringAnagram(\"breakdowns\", \"snow\"); // -> true"
      ],
      "testCases": [
        "hasSubstringAnagram(\"greyhounds\", \"hoy\"); // -> true\n// the substring \"yho\" is an anagram of \"hoy\"",
        "hasSubstringAnagram(\"gruyheonds\", \"hoy\"); // -> false",
        "hasSubstringAnagram(\"breakdowns\", \"snow\"); // -> true",
        "hasSubstringAnagram(\"dermatoglyphics\", \"red\"); // -> true",
        "hasSubstringAnagram(\"southernly\", \"thorny\"); // -> false",
        "hasSubstringAnagram(\"southernly\", \"nerlysouth\"); // -> true",
        "Source.hasSubstringAnagram(\"greyhounds\", \"hoy\") -> true",
        "Source.hasSubstringAnagram(\"gruyheonds\", \"hoy\") -> false",
        "Source.hasSubstringAnagram(\"breakdowns\", \"snow\") -> true",
        "Source.hasSubstringAnagram(\"dermatoglyphics\", \"red\") -> true",
        "Source.hasSubstringAnagram(\"southernly\", \"thorny\") -> false",
        "Source.hasSubstringAnagram(\"southernly\", \"nerlysouth\") -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "sliding window",
          "code": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.Set;\n\nclass Source {\n  public static boolean hasSubstringAnagram(String s, String anagram) {\n    Set<Character> anagramSet = new HashSet<>();\n    for (char c : anagram.toCharArray()) {\n      anagramSet.add(c);\n    }\n    Set<Character> windowSet = new HashSet<>();\n    for (char c : s.substring(0, anagram.length()).toCharArray()) {\n      windowSet.add(c);\n    }\n\n    if (windowSet.equals(anagramSet)) {\n      return true;\n    }\n\n    for (int i = 0; i < s.length() - anagram.length(); i += 1) {\n      windowSet.remove(s.charAt(i));\n      windowSet.add(s.charAt(i + anagram.length()));\n      if (windowSet.equals(anagramSet)) {\n        return true;\n      }\n    }\n    \n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of string | k = length of anagram | Time: O(n*k) | Space: O(k)"
        }
      ],
      "meta": {
        "name": "has substring anagram",
        "slug": "has-substring-anagram",
        "module": "Sliding Window",
        "premium": true,
        "verbose": "Check if a string contains a substring of an anagram.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean hasSubstringAnagram(String s, String anagram) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashSet;\nimport java.util.Set;\n\nclass Source {\n  public static boolean hasSubstringAnagram(String s, String anagram) {\n    Set<Character> anagramSet = new HashSet<>();\n    for (char c : anagram.toCharArray()) {\n      anagramSet.add(c);\n    }\n    Set<Character> windowSet = new HashSet<>();\n    for (char c : s.substring(0, anagram.length()).toCharArray()) {\n      windowSet.add(c);\n    }\n\n    if (windowSet.equals(anagramSet)) {\n      return true;\n    }\n\n    for (int i = 0; i < s.length() - anagram.length(); i += 1) {\n      windowSet.remove(s.charAt(i));\n      windowSet.add(s.charAt(i + anagram.length()));\n      if (windowSet.equals(anagramSet)) {\n        return true;\n      }\n    }\n    \n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "two-pointer::is-palindrome": {
      "statement": "Write a method, isPalindrome, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards.",
      "examples": [
        "isPalindrome(\"pop\") // -> true",
        "isPalindrome(\"kayak\") // -> true",
        "isPalindrome(\"pops\") // -> false"
      ],
      "testCases": [
        "isPalindrome(\"pop\") // -> true",
        "isPalindrome(\"kayak\") // -> true",
        "isPalindrome(\"pops\") // -> false",
        "isPalindrome(\"boot\") // -> false",
        "isPalindrome(\"rotator\") // -> true",
        "isPalindrome(\"abcbca\") // -> false",
        "isPalindrome(\"\") // -> true",
        "Source.isPalindrome(\"pop\") -> true",
        "Source.isPalindrome(\"kayak\") -> true",
        "Source.isPalindrome(\"pops\") -> false",
        "Source.isPalindrome(\"boot\") -> false",
        "Source.isPalindrome(\"rotator\") -> true",
        "Source.isPalindrome(\"abcbca\") -> false",
        "Source.isPalindrome(\"\") -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Source {\n  public static boolean isPalindrome(String s) {\n    int i = 0;\n    int j = s.length() - 1;\n    while (i < j) {\n      if (s.charAt(i) != s.charAt(j)) {\n        return false;\n      }\n      i += 1;\n      j -= 1;\n    }\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of string | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "is palindrome",
        "slug": "is-palindrome",
        "module": "Two Pointer",
        "premium": true,
        "verbose": "Check if a string is the same forwards and backwards.",
        "stub": "class Source {\n  public static boolean isPalindrome(String s) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Source {\n  public static boolean isPalindrome(String s) {\n    int i = 0;\n    int j = s.length() - 1;\n    while (i < j) {\n      if (s.charAt(i) != s.charAt(j)) {\n        return false;\n      }\n      i += 1;\n      j -= 1;\n    }\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "two-pointer::uncompress": {
      "statement": "Write a method, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern: ```plaintext for example, '2c' or '3a'. ``` The method should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.",
      "examples": [
        "<number><char>\n\nfor example, '2c' or '3a'.",
        "Source.uncompress(\"2c3a1t\"); // -> \"ccaaat\"",
        "Source.uncompress(\"4s2b\"); // -> \"ssssbb\""
      ],
      "testCases": [
        "<number><char>\n\nfor example, '2c' or '3a'.",
        "Source.uncompress(\"2c3a1t\"); // -> \"ccaaat\"",
        "Source.uncompress(\"4s2b\"); // -> \"ssssbb\"",
        "Source.uncompress(\"2p1o5p\"); // -> \"ppoppppp\"",
        "Source.uncompress(\"3n12e2z\"); // -> \"nnneeeeeeeeeeeezz\"",
        "Source.uncompress(\"127y\"); // ->\"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\"",
        "Source.uncompress(\"2c3a1t\") -> \"ccaaat\"",
        "Source.uncompress(\"4s2b\") -> \"ssssbb\"",
        "Source.uncompress(\"2p1o5p\") -> \"ppoppppp\"",
        "Source.uncompress(\"3n12e2z\") -> \"nnneeeeeeeeeeeezz\"",
        "Source.uncompress(\"127y\") -> \"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\""
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "class Source {\n  public static String uncompress(String s) {\n    String result = \"\";\n    String numbers = \"0123456789\";\n    int i = 0;\n    int j = 0;\n    while (j < s.length()) {\n      if (numbers.contains(String.valueOf(s.charAt(j)))) {\n        j += 1;\n      } else {\n        int num = Integer.parseInt(s.substring(i, j));\n        for (int count = 0; count < num; count += 1) {\n          result += s.charAt(j);\n        }\n        j += 1;\n        i = j;\n      }\n    }\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
          "complexity": "n = number of groups | m = max num found in any group | Time: O(n*m) | Space: O(n*m)"
        }
      ],
      "meta": {
        "name": "uncompress",
        "slug": "uncompress",
        "module": "Two Pointer",
        "premium": true,
        "verbose": "Uncompress a string.",
        "stub": "class Source {\n  public static String uncompress(String s) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
        "solutionCode": "class Source {\n  public static String uncompress(String s) {\n    String result = \"\";\n    String numbers = \"0123456789\";\n    int i = 0;\n    int j = 0;\n    while (j < s.length()) {\n      if (numbers.contains(String.valueOf(s.charAt(j)))) {\n        j += 1;\n      } else {\n        int num = Integer.parseInt(s.substring(i, j));\n        for (int count = 0; count < num; count += 1) {\n          result += s.charAt(j);\n        }\n        j += 1;\n        i = j;\n      }\n    }\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}"
      }
    },
    "two-pointer::compress": {
      "statement": "Write a method, compress, that takes in a string as an argument. The method should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed. ```plaintext 'aaa' compresses to '3a' 'cc' compresses to '2c' 't' should remain as 't' ``` You can assume that the input only contains alphabetic characters.",
      "examples": [
        "'aaa' compresses to '3a'\n'cc' compresses to '2c'\n't' should remain as 't'",
        "Source.compress(\"ccaaatsss\"); // -> \"2c3at3s\"",
        "Source.compress(\"ssssbbz\"); // -> \"4s2bz\""
      ],
      "testCases": [
        "'aaa' compresses to '3a'\n'cc' compresses to '2c'\n't' should remain as 't'",
        "Source.compress(\"ccaaatsss\"); // -> \"2c3at3s\"",
        "Source.compress(\"ssssbbz\"); // -> \"4s2bz\"",
        "Source.compress(\"ppoppppp\"); // -> \"2po5p\"",
        "Source.compress(\"nnneeeeeeeeeeeezz\"); // -> \"3n12e2z\"",
        "Source.compress(\"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\"); \n// -> \"127y\"",
        "Source.compress(\"ccaaatsss\") -> \"2c3at3s\"",
        "Source.compress(\"ssssbbz\") -> \"4s2bz\"",
        "Source.compress(\"ppoppppp\") -> \"2po5p\"",
        "Source.compress(\"nnneeeeeeeeeeeezz\") -> \"3n12e2z\"",
        "Source.compress(\"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy\") -> \"127y\""
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "class Source {\n  public static String compress(String s) {\n    s += \"!\";\n    String result = \"\";\n    int i = 0;\n    int j = 0;\n    while (j < s.length()) {\n      if (s.charAt(i) == s.charAt(j)) {\n        j += 1;\n      } else {\n        int count = j - i;\n        if (count > 1) {\n          result += \"\" + count + s.charAt(i);\n        } else {\n          result += s.charAt(i);\n        }\n        i = j;\n      }\n    }\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
          "complexity": "n = length of string | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "compress",
        "slug": "compress",
        "module": "Two Pointer",
        "premium": true,
        "verbose": "Compress a string.",
        "stub": "class Source {\n  public static String compress(String s) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
        "solutionCode": "class Source {\n  public static String compress(String s) {\n    s += \"!\";\n    String result = \"\";\n    int i = 0;\n    int j = 0;\n    while (j < s.length()) {\n      if (s.charAt(i) == s.charAt(j)) {\n        j += 1;\n      } else {\n        int count = j - i;\n        if (count > 1) {\n          result += \"\" + count + s.charAt(i);\n        } else {\n          result += s.charAt(i);\n        }\n        i = j;\n      }\n    }\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}"
      }
    },
    "two-pointer::five-sort": {
      "statement": "# five sort Write a method, *fiveSort*, that takes in an ArrayList of numbers as an argument. The method should rearrange elements of the ArrayList such that all 5s appear at the end. Your method should perform this operation **in-place** by mutating the original ArrayList. The method should return the ArrayList. Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array. **Important: Your function needs to mutate the original array in-place and should not return a new array. It will fail the test cases if you do not modify the original input array.**",
      "examples": [
        "List<Integer> array = new ArrayList<>(List.of(5, 0));\nSource.fiveSort(array);\n// -> [0, 5]",
        "List<Integer> array = new ArrayList<>(List.of(12, 5, 1, 5, 12, 7));\nSource.fiveSort(array);\n// -> [12, 7, 1, 12, 5, 5]",
        "List<Integer> array = new ArrayList<>(List.of(5, 2, 5, 6, 5, 1, 10, 2, 5, 5));\nSource.fiveSort(array);\n// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]"
      ],
      "testCases": [
        "List<Integer> array = new ArrayList<>(List.of(5, 0));\nSource.fiveSort(array);\n// -> [0, 5]",
        "List<Integer> array = new ArrayList<>(List.of(12, 5, 1, 5, 12, 7));\nSource.fiveSort(array);\n// -> [12, 7, 1, 12, 5, 5]",
        "List<Integer> array = new ArrayList<>(List.of(5, 2, 5, 6, 5, 1, 10, 2, 5, 5));\nSource.fiveSort(array);\n// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]",
        "List<Integer> array = new ArrayList<>(List.of(5, 5, 5, 1, 1, 1, 4));\nSource.fiveSort(array);\n// -> [4, 1, 1, 1, 5, 5, 5]",
        "List<Integer> array = new ArrayList<>(List.of(5, 5, 6, 5, 5, 5, 5));\nSource.fiveSort(array);\n// -> [6, 5, 5, 5, 5, 5, 5]",
        "List<Integer> array = new ArrayList<>(List.of(5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5));\nSource.fiveSort(array);\n// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]",
        "List<Integer> fives = new ArrayList<>(Collections.nCopies(20000, 5));\nList<Integer> fours = new ArrayList<>(Collections.nCopies(20000, 4));\nList<Integer> array = new ArrayList<>();\narray.addAll(fives);\narray.addAll(fours);\nSource.fiveSort(array);\n// twenty-thousand 4s followed by twenty-thousand 5s\n// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.List;\nimport java.util.Collections;\n\nclass Source {\n  public static List<Integer> fiveSort(List<Integer> array) {\n    int i = 0;\n    int j = array.size() - 1;\n    while (i < j) {\n      if (array.get(j) == 5) {\n        j -= 1;\n      } else if (array.get(i) != 5) {\n        i += 1;\n      } else {\n        Collections.swap(array, i, j);\n      }\n    }\n    return array;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
          "complexity": "n = length of array | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "five sort",
        "slug": "five-sort",
        "module": "Two Pointer",
        "premium": true,
        "verbose": "Rearrange elements of an array such that all fives appear at the end.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Integer> fiveSort(List<Integer> array) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.Collections;\n\nclass Source {\n  public static List<Integer> fiveSort(List<Integer> array) {\n    int i = 0;\n    int j = array.size() - 1;\n    while (i < j) {\n      if (array.get(j) == 5) {\n        j -= 1;\n      } else if (array.get(i) != 5) {\n        i += 1;\n      } else {\n        Collections.swap(array, i, j);\n      }\n    }\n    return array;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}"
      }
    },
    "two-pointer::is-subsequence": {
      "statement": "Write a method, isSubsequence, that takes in string1 and string2. The method should return a boolean indicating whether or not string1 is a subsequence of string2. A subsequence is a string that can be formed by deleting 0 or more characters from another string.",
      "examples": [
        "isSubsequence(\"bde\", \"abcdef\"); // -> true",
        "isSubsequence(\"bda\", \"abcdef\"); // -> false",
        "isSubsequence(\"ser\", \"super\"); // -> true"
      ],
      "testCases": [
        "isSubsequence(\"bde\", \"abcdef\"); // -> true",
        "isSubsequence(\"bda\", \"abcdef\"); // -> false",
        "isSubsequence(\"ser\", \"super\"); // -> true",
        "isSubsequence(\"serr\", \"super\"); // -> false",
        "isSubsequence(\"ama\", \"camera\"); // -> true",
        "isSubsequence(\"unfun\", \"unfortunate\"); // -> true",
        "isSubsequence(\"riverbed\", \"river\"); // -> false",
        "isSubsequence(\"river\", \"riverbed\"); // -> true",
        "Source.isSubsequence(\"bde\", \"abcdef\") -> true",
        "Source.isSubsequence(\"bda\", \"abcdef\") -> false",
        "Source.isSubsequence(\"ser\", \"super\") -> true",
        "Source.isSubsequence(\"serr\", \"super\") -> false",
        "Source.isSubsequence(\"ama\", \"camera\") -> true",
        "Source.isSubsequence(\"unfun\", \"unfortunate\") -> true",
        "Source.isSubsequence(\"riverbed\", \"river\") -> false",
        "Source.isSubsequence(\"river\", \"riverbed\") -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "two pointer",
          "code": "class Source {\n  public static boolean isSubsequence(String string1, String string2) {\n    int i = 0;\n    int j = 0;\n    while (i < string1.length() && j < string2.length()) {\n      if (string1.charAt(i) == string2.charAt(j)) {\n        i += 1;\n        j += 1;\n      } else {\n        j += 1;\n      }\n    }\n    return i == string1.length();\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of string1 | m = length of string2 | Time: O(m) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "is subsequence",
        "slug": "is-subsequence",
        "module": "Two Pointer",
        "premium": true,
        "verbose": "Check if a string is a subsequence of another string.",
        "stub": "class Source {\n  public static boolean isSubsequence(String string1, String string2) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Source {\n  public static boolean isSubsequence(String string1, String string2) {\n    int i = 0;\n    int j = 0;\n    while (i < string1.length() && j < string2.length()) {\n      if (string1.charAt(i) == string2.charAt(j)) {\n        i += 1;\n        j += 1;\n      } else {\n        j += 1;\n      }\n    }\n    return i == string1.length();\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::fib": {
      "statement": "Write a method fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence. The 0-th number of the sequence is 0. The 1-st number of the sequence is 1. To generate further numbers of the sequence, calculate the sum of previous two numbers. Solve this recursively.",
      "examples": [
        "Source.fib(0); // -> 0",
        "Source.fib(1); // -> 1",
        "Source.fib(2); // -> 1"
      ],
      "testCases": [
        "Source.fib(0); // -> 0",
        "Source.fib(1); // -> 1",
        "Source.fib(2); // -> 1",
        "Source.fib(3); // -> 2",
        "Source.fib(4); // -> 3",
        "Source.fib(5); // -> 5",
        "Source.fib(35); // -> 9227465",
        "Source.fib(46); // -> 1836311903",
        "Source.fib(0) -> 0",
        "Source.fib(1) -> 1",
        "Source.fib(2) -> 1",
        "Source.fib(3) -> 2",
        "Source.fib(4) -> 3",
        "Source.fib(5) -> 5",
        "Source.fib(35) -> 9227465",
        "Source.fib(46) -> 1836311903"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "brute-force (timeout)",
          "code": "class Source {\n  public static int fib(int n) {\n    if (n == 0 || n == 1) {\n      return n;\n    }\n    return fib(n - 1) + fib(n - 2);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(2^n) | Space: O(n)"
        },
        {
          "title": "memoized (pass)",
          "code": "import java.util.HashMap;\n\nclass Source {\n  public static int fib(int n) {\n    return fib(n, new HashMap<>());\n  }\n  \n  public static int fib(int n, HashMap<Integer, Integer> memo) {\n    if (n == 0 || n == 1) {\n      return n;\n    }\n    \n    if (memo.containsKey(n)) {\n      return memo.get(n);\n    }\n    \n    int result = fib(n - 1, memo) + fib(n - 2, memo);\n    memo.put(n, result);\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "fib",
        "slug": "fib",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Calculate the n-th number of the sequence. Leonardo Fibonacci's claim to fame.",
        "stub": "class Source {\n  public static int fib(int n) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Source {\n  public static int fib(int n) {\n    if (n == 0 || n == 1) {\n      return n;\n    }\n    return fib(n - 1) + fib(n - 2);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::tribonacci": {
      "statement": "Write a method tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence. The 0-th and 1-st numbers of the sequence are both 0. The 2-nd number of the sequence is 1. To generate further numbers of the sequence, calculate the sum of previous three numbers. Solve this recursively.",
      "examples": [
        "Source.tribonacci(0); // -> 0",
        "Source.tribonacci(1); // -> 0",
        "Source.tribonacci(2); // -> 1"
      ],
      "testCases": [
        "Source.tribonacci(0); // -> 0",
        "Source.tribonacci(1); // -> 0",
        "Source.tribonacci(2); // -> 1",
        "Source.tribonacci(5); // -> 4",
        "Source.tribonacci(7); // -> 13",
        "Source.tribonacci(14); // -> 927",
        "Source.tribonacci(20); // -> 35890",
        "Source.tribonacci(37); // -> 1132436852",
        "Source.tribonacci(0) -> 0",
        "Source.tribonacci(1) -> 0",
        "Source.tribonacci(2) -> 1",
        "Source.tribonacci(5) -> 4",
        "Source.tribonacci(7) -> 13",
        "Source.tribonacci(14) -> 927",
        "Source.tribonacci(20) -> 35890",
        "Source.tribonacci(37) -> 1132436852"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "brute-force (timeout)",
          "code": "class Source {\n  public static int tribonacci(int n) {\n    if (n == 0 || n == 1) {\n      return 0;\n    }\n\n    if (n == 2) {\n      return 1;\n    }\n    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(3^n) | Space: O(n)"
        },
        {
          "title": "memoized (pass)",
          "code": "import java.util.HashMap;\n\nclass Source {\n  public static int tribonacci(int n) {\n    return tribonacci(n, new HashMap<>());\n  }\n\n  public static int tribonacci(int n, HashMap<Integer, Integer> memo) {\n    if (n == 0 || n == 1) {\n      return 0;\n    }\n\n    if (n == 2) {\n      return 1;\n    }\n\n    if (memo.containsKey(n)) {\n      return memo.get(n);\n    }\n\n    int result = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);\n    memo.put(n, result);\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "tribonacci",
        "slug": "tribonacci",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Like Fibonacci, but with one more bonacci.",
        "stub": "class Source {\n  public static int tribonacci(int n) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Source {\n  public static int tribonacci(int n) {\n    if (n == 0 || n == 1) {\n      return 0;\n    }\n\n    if (n == 2) {\n      return 1;\n    }\n    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::sum-possible": {
      "statement": "Write a method sumPossible that takes in an amount and a list of positive numbers. The method should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the list. You may reuse numbers of the list as many times as necessary. You may assume that the target amount is non-negative.",
      "examples": [
        "Source.sumPossible(8, List.of(5, 12, 4)); // -> true, 4 + 4",
        "Source.sumPossible(15, List.of(6, 2, 10, 19)); // -> false",
        "Source.sumPossible(13, List.of(6, 2, 1)); // -> true"
      ],
      "testCases": [
        "Source.sumPossible(8, List.of(5, 12, 4)); // -> true, 4 + 4",
        "Source.sumPossible(15, List.of(6, 2, 10, 19)); // -> false",
        "Source.sumPossible(13, List.of(6, 2, 1)); // -> true",
        "Source.sumPossible(103, List.of(6, 20, 1)); // -> true",
        "Source.sumPossible(12, List.of()); // -> false",
        "Source.sumPossible(12, List.of(12)); // -> true",
        "Source.sumPossible(0, List.of()); // -> true",
        "Source.sumPossible(271, List.of(10, 8, 265, 24)); // -> false",
        "Source.sumPossible(2017, List.of(4, 2, 10)); // -> false",
        "Source.sumPossible(13, List.of(3, 5)); // -> true",
        "Source.sumPossible(10, List.of(4, 5, 7)); // -> true",
        "Source.sumPossible(16, List.of(7, 6, 3)); // -> true",
        "Source.sumPossible(8, List.of(5, 12, 4)) -> true",
        "Source.sumPossible(15, List.of(6, 2, 10, 19)) -> false",
        "Source.sumPossible(13, List.of(6, 2, 1)) -> true",
        "Source.sumPossible(103, List.of(6, 20, 1)) -> true",
        "Source.sumPossible(12, List.of()) -> false",
        "Source.sumPossible(12, List.of(12)) -> true",
        "Source.sumPossible(0, List.of()) -> true",
        "Source.sumPossible(271, List.of(10, 8, 265, 24)) -> false",
        "Source.sumPossible(2017, List.of(4, 2, 10)) -> false",
        "Source.sumPossible(13, List.of(3, 5)) -> true",
        "Source.sumPossible(10, List.of(4, 5, 7)) -> true",
        "Source.sumPossible(16, List.of(7, 6, 3)) -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean sumPossible(int amount, List<Integer> numbers) {\n    return sumPossible(amount, numbers, new HashMap<>());\n  }\n  \n  public static boolean sumPossible(int amount, List<Integer> numbers, HashMap<Integer, Boolean> memo) {\n    if (amount == 0) {\n      return true;\n    }\n    \n    if (amount < 0) {\n      return false;\n    }\n    \n    if (memo.containsKey(amount)) {\n      return memo.get(amount);\n    }\n    \n    for (int num : numbers) {\n      if (sumPossible(amount - num, numbers, memo)) {\n        memo.put(amount, true);\n        return true;\n      }\n    }\n    memo.put(amount, false);\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "a = amount | n = length of numbers | Time: O(a*n) | Space: O(a)"
        }
      ],
      "meta": {
        "name": "sum possible",
        "slug": "sum-possible",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Check if it is possible to form a sum using numbers.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean sumPossible(int amount, List<Integer> numbers) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean sumPossible(int amount, List<Integer> numbers) {\n    return sumPossible(amount, numbers, new HashMap<>());\n  }\n  \n  public static boolean sumPossible(int amount, List<Integer> numbers, HashMap<Integer, Boolean> memo) {\n    if (amount == 0) {\n      return true;\n    }\n    \n    if (amount < 0) {\n      return false;\n    }\n    \n    if (memo.containsKey(amount)) {\n      return memo.get(amount);\n    }\n    \n    for (int num : numbers) {\n      if (sumPossible(amount - num, numbers, memo)) {\n        memo.put(amount, true);\n        return true;\n      }\n    }\n    memo.put(amount, false);\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::min-change": {
      "statement": "Write a method minChange that takes in an amount and an array of coins. The method should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary. If it is not possible to create the amount, then return -1.",
      "examples": [
        "Source.minChange(8, List.of(1, 5, 4, 12)); // -> 2, because 4+4 is the minimum coins possible",
        "Source.minChange(13, List.of(1, 9, 5, 14, 30)); // -> 5",
        "Source.minChange(23, List.of(2, 5, 7)); // -> 4"
      ],
      "testCases": [
        "Source.minChange(8, List.of(1, 5, 4, 12)); // -> 2, because 4+4 is the minimum coins possible",
        "Source.minChange(13, List.of(1, 9, 5, 14, 30)); // -> 5",
        "Source.minChange(23, List.of(2, 5, 7)); // -> 4",
        "Source.minChange(102, List.of(1, 5, 10, 25)); // -> 6",
        "Source.minChange(200, List.of(1, 5, 10, 25)); // -> 8",
        "Source.minChange(2017, List.of(4, 2, 10)); // -> -1",
        "Source.minChange(271, List.of(10, 8, 265, 24)); // -> -1",
        "Source.minChange(0, List.of(4, 2, 10)); // -> 0",
        "Source.minChange(0, List.of()); // -> 0",
        "Source.minChange(8, List.of(1, 5, 4, 12)) -> 2",
        "Source.minChange(13, List.of(1, 9, 5, 14, 30)) -> 5",
        "Source.minChange(23, List.of(2, 5, 7)) -> 4",
        "Source.minChange(102, List.of(1, 5, 10, 25)) -> 6",
        "Source.minChange(200, List.of(1, 5, 10, 25)) -> 8",
        "Source.minChange(2017, List.of(4, 2, 10)) -> -1",
        "Source.minChange(271, List.of(10, 8, 265, 24)) -> -1",
        "Source.minChange(0, List.of(4, 2, 10)) -> 0",
        "Source.minChange(0, List.of()) -> 0"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int minChange(int amount, List<Integer> coins) {\n    return minChange(amount, coins, new HashMap<>());\n  }\n  \n  public static int minChange(int amount, List<Integer> coins, HashMap<Integer, Integer> memo) {\n    if (amount == 0) {\n      return 0;\n    }\n    \n    if (amount < 0) {\n      return -1;\n    }\n    \n    if (memo.containsKey(amount)) { \n      return memo.get(amount);\n    }\n    \n    int minCoins = -1;\n    for (int coin : coins) {\n      int subAmount = amount - coin;\n      int subCoins = minChange(subAmount, coins, memo);\n      if (subCoins != -1) {\n        int numCoins = 1 + subCoins;\n        if (numCoins < minCoins || minCoins == -1) {\n          minCoins = numCoins;\n        }\n      }\n    }\n    \n    memo.put(amount, minCoins);\n    return minCoins;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "a = amount | c = # coins | Time: O(a*c) | Space: O(a)"
        }
      ],
      "meta": {
        "name": "min change",
        "slug": "min-change",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Find the minimum number of coins required to make change.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int minChange(int amount, List<Integer> coins) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int minChange(int amount, List<Integer> coins) {\n    return minChange(amount, coins, new HashMap<>());\n  }\n  \n  public static int minChange(int amount, List<Integer> coins, HashMap<Integer, Integer> memo) {\n    if (amount == 0) {\n      return 0;\n    }\n    \n    if (amount < 0) {\n      return -1;\n    }\n    \n    if (memo.containsKey(amount)) { \n      return memo.get(amount);\n    }\n    \n    int minCoins = -1;\n    for (int coin : coins) {\n      int subAmount = amount - coin;\n      int subCoins = minChange(subAmount, coins, memo);\n      if (subCoins != -1) {\n        int numCoins = 1 + subCoins;\n        if (numCoins < minCoins || minCoins == -1) {\n          minCoins = numCoins;\n        }\n      }\n    }\n    \n    memo.put(amount, minCoins);\n    return minCoins;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::count-paths": {
      "statement": "Write a method, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The method should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.",
      "examples": [
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\"),\n  List.of(\"O\", \"O\")\n);\nSource.countPaths(grid); // -> 2",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"X\"),\n  List.of(\"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\")\n);\nSource.countPaths(grid); // -> 5",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"X\"),\n  List.of(\"O\", \"O\", \"O\")\n);\nSource.countPaths(grid); // -> 3"
      ],
      "testCases": [
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\"),\n  List.of(\"O\", \"O\")\n);\nSource.countPaths(grid); // -> 2",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"X\"),\n  List.of(\"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\")\n);\nSource.countPaths(grid); // -> 5",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"X\"),\n  List.of(\"O\", \"O\", \"O\")\n);\nSource.countPaths(grid); // -> 3",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"O\"),\n  List.of(\"O\", \"X\", \"X\"),\n  List.of(\"O\", \"O\", \"O\")\n);\nSource.countPaths(grid); // -> 1",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"X\", \"O\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"X\", \"X\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\")\n);\nSource.countPaths(grid); // -> 0",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"X\"),\n  List.of(\"X\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"X\", \"X\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\")\n);\nSource.countPaths(grid); // -> 42",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"X\"),\n  List.of(\"X\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"X\", \"X\", \"X\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"X\")\n);\nSource.countPaths(grid); // -> 0",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\")\n);\nSource.countPaths(grid); // -> 145422675",
        "List<List<String>> grid = List.of(\n  List.of(\"O\", \"O\", \"X\", \"X\", \"O\", \"O\", \"O\", \"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"X\", \"X\", \"O\", \"O\", \"O\", \"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"X\", \"O\", \"O\", \"O\", \"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"X\", \"X\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"X\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"X\", \"X\", \"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"X\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"X\", \"X\", \"O\", \"O\", \"O\", \"O\", \"X\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"X\", \"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\"),\n  List.of(\"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\", \"X\", \"O\", \"O\", \"O\", \"O\", \"O\", \"O\")\n);\nSource.countPaths(grid); // -> 3190434",
        "Source.countPaths(grid) -> 2",
        "Source.countPaths(grid) -> 5",
        "Source.countPaths(grid) -> 3",
        "Source.countPaths(grid) -> 1",
        "Source.countPaths(grid) -> 0",
        "Source.countPaths(grid) -> 42",
        "Source.countPaths(grid) -> 145422675",
        "Source.countPaths(grid) -> 3190434"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int countPaths(List<List<String>> grid) {\n    return countPaths(0, 0, grid, new HashMap<>());  \n  }\n  \n  public static int countPaths(int r, int c, List<List<String>> grid, HashMap<List<Integer>, Integer> memo) {\n    if (r == grid.size() || c == grid.get(0).size()) {\n      return 0;\n    }\n    \n    if (grid.get(r).get(c) == \"X\") {\n      return 0;\n    }\n    \n    if (r == grid.size() - 1 && c == grid.get(0).size() - 1) {\n      return 1;\n    }\n    \n    List<Integer> pos = List.of(r, c);\n    if (memo.containsKey(pos)) {\n      return memo.get(pos);\n    }\n    \n    int result = countPaths(r + 1, c, grid, memo) + countPaths(r, c + 1, grid, memo);\n    memo.put(pos, result);\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "r = # rows | c = # columns | Time: O(r*c) | Space: O(r*c)"
        }
      ],
      "meta": {
        "name": "count paths",
        "slug": "count-paths",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Count the number of ways to travel through a grid.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int countPaths(List<List<String>> grid) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int countPaths(List<List<String>> grid) {\n    return countPaths(0, 0, grid, new HashMap<>());  \n  }\n  \n  public static int countPaths(int r, int c, List<List<String>> grid, HashMap<List<Integer>, Integer> memo) {\n    if (r == grid.size() || c == grid.get(0).size()) {\n      return 0;\n    }\n    \n    if (grid.get(r).get(c) == \"X\") {\n      return 0;\n    }\n    \n    if (r == grid.size() - 1 && c == grid.get(0).size() - 1) {\n      return 1;\n    }\n    \n    List<Integer> pos = List.of(r, c);\n    if (memo.containsKey(pos)) {\n      return memo.get(pos);\n    }\n    \n    int result = countPaths(r + 1, c, grid, memo) + countPaths(r, c + 1, grid, memo);\n    memo.put(pos, result);\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::max-path-sum": {
      "statement": "Write a method, maxPathSum, that takes in a grid as an argument. The method should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. You may only travel through the grid by moving down or right. You can assume that all numbers are non-negative.",
      "examples": [
        "List<List<Integer>> grid = List.of(\n  List.of(1, 3, 12),\n  List.of(5, 1, 1),\n  List.of(3, 6, 1)\n);\nSource.maxPathSum(grid); // -> 18",
        "List<List<Integer>> grid = List.of(\n  List.of(1, 2, 8, 1),\n  List.of(3, 1, 12, 10),\n  List.of(4, 0, 6, 3)\n);\nSource.maxPathSum(grid); // -> 36",
        "List<List<Integer>> grid = List.of(\n  List.of(1, 2, 8, 1),\n  List.of(3, 10, 12, 10),\n  List.of(4, 0, 6, 3)\n);\nSource.maxPathSum(grid); // -> 39"
      ],
      "testCases": [
        "List<List<Integer>> grid = List.of(\n  List.of(1, 3, 12),\n  List.of(5, 1, 1),\n  List.of(3, 6, 1)\n);\nSource.maxPathSum(grid); // -> 18",
        "List<List<Integer>> grid = List.of(\n  List.of(1, 2, 8, 1),\n  List.of(3, 1, 12, 10),\n  List.of(4, 0, 6, 3)\n);\nSource.maxPathSum(grid); // -> 36",
        "List<List<Integer>> grid = List.of(\n  List.of(1, 2, 8, 1),\n  List.of(3, 10, 12, 10),\n  List.of(4, 0, 6, 3)\n);\nSource.maxPathSum(grid); // -> 39",
        "List<List<Integer>> grid = List.of(\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)\n);\nSource.maxPathSum(grid); // -> 27",
        "List<List<Integer>> grid = List.of(\n  List.of(1, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 2, 1, 1, 6, 1, 1, 5, 1, 1, 0, 0, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 5, 1, 1, 1, 1, 0, 1, 1, 1, 1),\n  List.of(2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1),\n  List.of(2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 42, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),\n  List.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)\n);\nSource.maxPathSum(grid); // -> 82",
        "Source.maxPathSum(grid) -> 18",
        "Source.maxPathSum(grid) -> 36",
        "Source.maxPathSum(grid) -> 39",
        "Source.maxPathSum(grid) -> 27",
        "Source.maxPathSum(grid) -> 82"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int maxPathSum(List<List<Integer>> grid) {\n    return (int) maxPathSum(0, 0, grid, new HashMap<>());\n  }\n\n  public static double maxPathSum(int r, int c, List<List<Integer>> grid, HashMap<List<Integer>, Double> memo) {\n    if (r == grid.size() || c == grid.get(0).size()) {\n      return Double.NEGATIVE_INFINITY;\n    }\n    \n    if (r == grid.size() - 1 && c == grid.get(0).size() - 1) {\n      return grid.get(r).get(c);\n    }\n    \n    List<Integer> pos = List.of(r, c);\n    if (memo.containsKey(pos)) {\n      return memo.get(pos);\n    }\n    \n    double result = grid.get(r).get(c) + Math.max(\n      maxPathSum(r + 1, c, grid, memo), \n      maxPathSum(r, c + 1, grid, memo)\n    );\n    memo.put(pos, result);\n    return result;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "r = # rows | c = # columns | Time: O(r*c) | Space: O(r*c)"
        }
      ],
      "meta": {
        "name": "max path sum",
        "slug": "max-path-sum",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Find the max sum of a path through a grid.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int maxPathSum(List<List<Integer>> grid) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int maxPathSum(List<List<Integer>> grid) {\n    return (int) maxPathSum(0, 0, grid, new HashMap<>());\n  }\n\n  public static double maxPathSum(int r, int c, List<List<Integer>> grid, HashMap<List<Integer>, Double> memo) {\n    if (r == grid.size() || c == grid.get(0).size()) {\n      return Double.NEGATIVE_INFINITY;\n    }\n    \n    if (r == grid.size() - 1 && c == grid.get(0).size() - 1) {\n      return grid.get(r).get(c);\n    }\n    \n    List<Integer> pos = List.of(r, c);\n    if (memo.containsKey(pos)) {\n      return memo.get(pos);\n    }\n    \n    double result = grid.get(r).get(c) + Math.max(\n      maxPathSum(r + 1, c, grid, memo), \n      maxPathSum(r, c + 1, grid, memo)\n    );\n    memo.put(pos, result);\n    return result;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::non-adjacent-sum": {
      "statement": "Write a method, nonAdjacentSum, that takes in a list of numbers as an argument. The method should return the maximum sum of non-adjacent elements in the list. There is no limit on how many elements can be taken into the sum as long as they are not adjacent. You can assume that the numbers are nonnegative. ```plaintext For example, given: [2, 4, 5, 12, 7] The maximum non-adjacent sum is 16, because 4 + 12. 4 and 12 are not adjacent in the list. ```",
      "examples": [
        "For example, given:\n\n[2, 4, 5, 12, 7]\n\nThe maximum non-adjacent sum is 16, because 4 + 12. \n4 and 12 are not adjacent in the list.",
        "List<Integer> nums = List.of(2, 4, 5, 12, 7);\nSource.nonAdjacentSum(nums); // -> 16",
        "List<Integer> nums = List.of(7, 5, 5, 12);\nSource.nonAdjacentSum(nums); // -> 19"
      ],
      "testCases": [
        "For example, given:\n\n[2, 4, 5, 12, 7]\n\nThe maximum non-adjacent sum is 16, because 4 + 12. \n4 and 12 are not adjacent in the list.",
        "List<Integer> nums = List.of(2, 4, 5, 12, 7);\nSource.nonAdjacentSum(nums); // -> 16",
        "List<Integer> nums = List.of(7, 5, 5, 12);\nSource.nonAdjacentSum(nums); // -> 19",
        "List<Integer> nums = List.of(7, 5, 5, 12, 17, 29);\nSource.nonAdjacentSum(nums); // -> 48",
        "List<Integer> nums = List.of(\n  72, 62, 10,  6, 20, 19, 42,\n  46, 24, 78, 30, 41, 75, 38,\n  23, 28, 66, 55, 12, 17, 9,\n  12, 3, 1, 19, 30, 50, 20\n);\nSource.nonAdjacentSum(nums); // -> 488",
        "List<Integer> nums = List.of(\n  72, 62, 10,  6, 20, 19, 42, 46, 24, 78,\n  30, 41, 75, 38, 23, 28, 66, 55, 12, 17,\n  83, 80, 56, 68,  6, 22, 56, 96, 77, 98,\n  61, 20,  0, 76, 53, 74,  8, 22, 92, 37,\n  30, 41, 75, 38, 23, 28, 66, 55, 12, 17,\n  72, 62, 10,  6, 20, 19, 42, 46, 24, 78,\n  42\n);\nSource.nonAdjacentSum(nums); // -> 1465",
        "Source.nonAdjacentSum(nums) -> 16",
        "Source.nonAdjacentSum(nums) -> 19",
        "Source.nonAdjacentSum(nums) -> 48",
        "Source.nonAdjacentSum(nums) -> 488",
        "Source.nonAdjacentSum(nums) -> 1465"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int nonAdjacentSum(List<Integer> nums) {\n    return nonAdjacentSum(nums, 0, new HashMap<>());\n  }\n\n  public static int nonAdjacentSum(List<Integer> nums, int i, HashMap<Integer, Integer> memo) {\n    if (i >= nums.size()) {\n      return 0;\n    }\n    \n    if (memo.containsKey(i)) {\n      return memo.get(i);\n    }\n    \n    int result = Math.max(\n      nums.get(i) + nonAdjacentSum(nums, i + 2, memo),\n      nonAdjacentSum(nums, i + 1, memo)\n    );\n    memo.put(i, result);\n    return result;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of nums | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "non-adjacent sum",
        "slug": "non-adjacent-sum",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Find the maximum sum of non-adjacent elements of an array.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int nonAdjacentSum(List<Integer> nums) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int nonAdjacentSum(List<Integer> nums) {\n    return nonAdjacentSum(nums, 0, new HashMap<>());\n  }\n\n  public static int nonAdjacentSum(List<Integer> nums, int i, HashMap<Integer, Integer> memo) {\n    if (i >= nums.size()) {\n      return 0;\n    }\n    \n    if (memo.containsKey(i)) {\n      return memo.get(i);\n    }\n    \n    int result = Math.max(\n      nums.get(i) + nonAdjacentSum(nums, i + 2, memo),\n      nonAdjacentSum(nums, i + 1, memo)\n    );\n    memo.put(i, result);\n    return result;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::summing-squares": {
      "statement": "Write a method, summingSquares, that takes a target number as an argument. The method should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1. For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square. ```plaintext Given 12: summingSquares(12) -> 3 The minimum squares required for 12 is three, by doing 4 + 4 + 4. Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares. ```",
      "examples": [
        "Given 12:\n\nsummingSquares(12) -> 3\n\nThe minimum squares required for 12 is three, by doing 4 + 4 + 4.\n\nAnother way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.",
        "Source.summingSquares(8); // -> 2",
        "Source.summingSquares(9); // -> 1"
      ],
      "testCases": [
        "Given 12:\n\nsummingSquares(12) -> 3\n\nThe minimum squares required for 12 is three, by doing 4 + 4 + 4.\n\nAnother way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.",
        "Source.summingSquares(8); // -> 2",
        "Source.summingSquares(9); // -> 1",
        "Source.summingSquares(12); // -> 3",
        "Source.summingSquares(1); // -> 1",
        "Source.summingSquares(31); // -> 4",
        "Source.summingSquares(50); // -> 2",
        "Source.summingSquares(68); // -> 2",
        "Source.summingSquares(87); // -> 4",
        "Source.summingSquares(8) -> 2",
        "Source.summingSquares(9) -> 1",
        "Source.summingSquares(12) -> 3",
        "Source.summingSquares(1) -> 1",
        "Source.summingSquares(31) -> 4",
        "Source.summingSquares(50) -> 2",
        "Source.summingSquares(68) -> 2",
        "Source.summingSquares(87) -> 4"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.HashMap;\n\nclass Source {\n  public static int summingSquares(int n) {\n    return (int) summingSquares(n, new HashMap<>());\n  }\n  \n  public static double summingSquares(int n, HashMap<Integer, Double> memo) {\n    if (n < 0) {\n      return Double.POSITIVE_INFINITY;   \n    }\n    \n    if (n == 0) {\n      return 0.;\n    }\n    \n    if (memo.containsKey(n)) {\n      return memo.get(n);\n    }\n    \n    Double minSquares = Double.POSITIVE_INFINITY;\n    for (int i = 1; i <= Math.sqrt(n); i += 1) {\n      int square = i * i;\n      double numSquares = 1 + summingSquares(n - square, memo);\n      if (numSquares < minSquares) {\n        minSquares = numSquares;\n      }\n    }\n    \n    memo.put(n, minSquares);\n    return minSquares;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of nums | Time: O(n * sqrt(n)) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "summing squares",
        "slug": "summing-squares",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Find the minimum number of squares that add to a target number.",
        "stub": "class Source {\n  public static int summingSquares(int n) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.HashMap;\n\nclass Source {\n  public static int summingSquares(int n) {\n    return (int) summingSquares(n, new HashMap<>());\n  }\n  \n  public static double summingSquares(int n, HashMap<Integer, Double> memo) {\n    if (n < 0) {\n      return Double.POSITIVE_INFINITY;   \n    }\n    \n    if (n == 0) {\n      return 0.;\n    }\n    \n    if (memo.containsKey(n)) {\n      return memo.get(n);\n    }\n    \n    Double minSquares = Double.POSITIVE_INFINITY;\n    for (int i = 1; i <= Math.sqrt(n); i += 1) {\n      int square = i * i;\n      double numSquares = 1 + summingSquares(n - square, memo);\n      if (numSquares < minSquares) {\n        minSquares = numSquares;\n      }\n    }\n    \n    memo.put(n, minSquares);\n    return minSquares;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::counting-change": {
      "statement": "Write a method, countingChange, that takes in an amount and an array of coins. The method should return the number of different ways it is possible to make change for the given amount using the coins. You may reuse a coin as many times as necessary. ```plaintext For example, countingChange(4, List.of(1,2,3)) -> 4 There are four different ways to make an amount of 4: 1. 1 + 1 + 1 + 1 2. 1 + 1 + 2 3. 1 + 3 4. 2 + 2 ```",
      "examples": [
        "For example,\n\ncountingChange(4, List.of(1,2,3)) -> 4\n\nThere are four different ways to make an amount of 4:\n\n1. 1 + 1 + 1 + 1\n2. 1 + 1 + 2\n3. 1 + 3\n4. 2 + 2",
        "Source.countingChange(4, List.of(1, 2, 3)); // -> 4",
        "Source.countingChange(8, List.of(1, 2, 3)); // -> 10"
      ],
      "testCases": [
        "For example,\n\ncountingChange(4, List.of(1,2,3)) -> 4\n\nThere are four different ways to make an amount of 4:\n\n1. 1 + 1 + 1 + 1\n2. 1 + 1 + 2\n3. 1 + 3\n4. 2 + 2",
        "Source.countingChange(4, List.of(1, 2, 3)); // -> 4",
        "Source.countingChange(8, List.of(1, 2, 3)); // -> 10",
        "Source.countingChange(24, List.of(5, 7, 3)); // -> 5",
        "Source.countingChange(13, List.of(2, 6, 12, 10)); // -> 0",
        "Source.countingChange(512, List.of(1, 5, 10, 25)); // -> 20119",
        "Source.countingChange(1000, List.of(1, 5, 10, 25)); // -> 142511",
        "Source.countingChange(240, List.of(1, 2, 3, 4, 5, 6, 7, 8, 9)); // -> 1525987916",
        "Source.countingChange(4, List.of(1, 2, 3)) -> 4",
        "Source.countingChange(8, List.of(1, 2, 3)) -> 10",
        "Source.countingChange(24, List.of(5, 7, 3)) -> 5",
        "Source.countingChange(13, List.of(2, 6, 12, 10)) -> 0",
        "Source.countingChange(512, List.of(1, 5, 10, 25)) -> 20119",
        "Source.countingChange(1000, List.of(1, 5, 10, 25)) -> 142511",
        "Source.countingChange(240, List.of(1, 2, 3, 4, 5, 6, 7, 8, 9)) -> 1525987916"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int countingChange(int amount, List<Integer> coins) {\n    return countingChange(amount, 0, coins, new HashMap<>());\n  }\n  \n  public static int countingChange(int amount, int coinIdx, List<Integer> coins, HashMap<List<Integer>, Integer> memo) {\n    if (amount == 0) {\n      return 1;\n    }\n    \n    if (coinIdx == coins.size()) {\n      return 0;\n    }\n    \n    List<Integer> key = List.of(amount, coinIdx);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    int total = 0;\n    for (int qty = 0; qty * coins.get(coinIdx) <= amount; qty += 1) {\n      int subAmount = amount - (qty * coins.get(coinIdx));\n      total += countingChange(subAmount, coinIdx + 1, coins, memo);\n    }\n    \n    memo.put(key, total);\n    return total;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "a = amount | c = # coins | Time: O(a*c) | Space: O(a*c)"
        }
      ],
      "meta": {
        "name": "counting change",
        "slug": "counting-change",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Count the number of different ways to make change using coins.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int countingChange(int amount, List<Integer> coins) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int countingChange(int amount, List<Integer> coins) {\n    return countingChange(amount, 0, coins, new HashMap<>());\n  }\n  \n  public static int countingChange(int amount, int coinIdx, List<Integer> coins, HashMap<List<Integer>, Integer> memo) {\n    if (amount == 0) {\n      return 1;\n    }\n    \n    if (coinIdx == coins.size()) {\n      return 0;\n    }\n    \n    List<Integer> key = List.of(amount, coinIdx);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    int total = 0;\n    for (int qty = 0; qty * coins.get(coinIdx) <= amount; qty += 1) {\n      int subAmount = amount - (qty * coins.get(coinIdx));\n      total += countingChange(subAmount, coinIdx + 1, coins, memo);\n    }\n    \n    memo.put(key, total);\n    return total;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::array-stepper": {
      "statement": "Write a method, arrayStepper, that takes in a list of numbers as an argument. You start at the first position of the list. The method should return a boolean indicating whether or not it is possible to reach the last position of the list. When situated at some position of the list, you may take a maximum number of steps based on the number at that position. ```plaintext For example, given: idx = 0 1 2 3 4 5 numbers = [2, 4, 2, 0, 0, 1] The answer is true. We start at idx 0, we could take 1 step or 2 steps forward. The correct choice is to take 1 step to idx 1. Then take 4 steps forward to the end at idx 5. ```",
      "examples": [
        "For example, given:\n\n    idx =  0  1  2  3  4  5\nnumbers = [2, 4, 2, 0, 0, 1]\n\nThe answer is true.\nWe start at idx 0, we could take 1 step or 2 steps forward.\nThe correct choice is to take 1 step to idx 1.\nThen take 4 steps forward to the end at idx 5.",
        "Source.arrayStepper(List.of(2, 4, 2, 0, 0, 1)); // -> true",
        "Source.arrayStepper(List.of(2, 3, 2, 0, 0, 1)); // -> false"
      ],
      "testCases": [
        "For example, given:\n\n    idx =  0  1  2  3  4  5\nnumbers = [2, 4, 2, 0, 0, 1]\n\nThe answer is true.\nWe start at idx 0, we could take 1 step or 2 steps forward.\nThe correct choice is to take 1 step to idx 1.\nThen take 4 steps forward to the end at idx 5.",
        "Source.arrayStepper(List.of(2, 4, 2, 0, 0, 1)); // -> true",
        "Source.arrayStepper(List.of(2, 3, 2, 0, 0, 1)); // -> false",
        "Source.arrayStepper(List.of(3, 1, 3, 1, 0, 1)); // -> true",
        "Source.arrayStepper(List.of(4, 1, 5, 1, 1, 1, 0, 4)); // -> true",
        "Source.arrayStepper(List.of(4, 1, 2, 1, 1, 1, 0, 4)); // -> false",
        "Source.arrayStepper(List.of(1, 1, 1, 1, 1, 0)); // -> true",
        "Source.arrayStepper(List.of(1, 1, 1, 1, 0, 0)); // -> false",
        "Source.arrayStepper(List.of( \n  31, 30, 29, 28, 27,\n  26, 25, 24, 23, 22,\n  21, 20, 19, 18, 17,\n  16, 15, 14, 13, 12,\n  11, 10, 9, 8, 7, 6,\n  5, 3, 2, 1, 0, 0, 0\n)); // -> false",
        "Source.arrayStepper(List.of(2, 4, 2, 0, 0, 1)) -> true",
        "Source.arrayStepper(List.of(2, 3, 2, 0, 0, 1)) -> false",
        "Source.arrayStepper(List.of(3, 1, 3, 1, 0, 1)) -> true",
        "Source.arrayStepper(List.of(4, 1, 5, 1, 1, 1, 0, 4)) -> true",
        "Source.arrayStepper(List.of(4, 1, 2, 1, 1, 1, 0, 4)) -> false",
        "Source.arrayStepper(List.of(1, 1, 1, 1, 1, 0)) -> true",
        "Source.arrayStepper(List.of(1, 1, 1, 1, 0, 0)) -> false",
        "Source.arrayStepper(List.of( 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 3, 2, 1, 0, 0, 0 )) -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean arrayStepper(List<Integer> nums) {\n    return arrayStepper(0, nums, new HashMap<>());\n  }\n  \n  public static boolean arrayStepper(int idx, List<Integer> nums, HashMap<Integer, Boolean> memo) {\n    if (idx >= nums.size() - 1) {\n      return true;\n    }\n    \n    if (memo.containsKey(idx)) {\n      return memo.get(idx);\n    }\n    \n    for (int step = 1; step <= nums.get(idx); step += 1) {\n      if (arrayStepper(idx + step, nums, memo)) {\n        memo.put(idx, true);\n        return true;\n      }\n    }\n    memo.put(idx, false);\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of numbers | Time: O(n^2) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "array stepper",
        "slug": "array-stepper",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Check if it is possible to step through an array from beginning to end.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean arrayStepper(List<Integer> nums) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean arrayStepper(List<Integer> nums) {\n    return arrayStepper(0, nums, new HashMap<>());\n  }\n  \n  public static boolean arrayStepper(int idx, List<Integer> nums, HashMap<Integer, Boolean> memo) {\n    if (idx >= nums.size() - 1) {\n      return true;\n    }\n    \n    if (memo.containsKey(idx)) {\n      return memo.get(idx);\n    }\n    \n    for (int step = 1; step <= nums.get(idx); step += 1) {\n      if (arrayStepper(idx + step, nums, memo)) {\n        memo.put(idx, true);\n        return true;\n      }\n    }\n    memo.put(idx, false);\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::max-palin-subsequence": {
      "statement": "Write a method, maxPalinSubsequence, that takes in a string as an argument. The method should return the length of the longest subsequence of the string that is also a palindrome. A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters. ``` For example, given: \"luwxult\" Deleting x and t would give the subsequence: \"luwul\" The string \"luwul\" is a palindrome because it is the same forwards and backwards. ```",
      "examples": [
        "For example, given:\n\n\"luwxult\"\n\nDeleting x and t would give the subsequence:\n\n\"luwul\"\n\nThe string \"luwul\" is a palindrome because it is the same forwards and backwards.",
        "Source.maxPalinSubsequence(\"luwxult\"); // -> 5",
        "Source.maxPalinSubsequence(\"xyzaxxzy\"); // -> 6"
      ],
      "testCases": [
        "For example, given:\n\n\"luwxult\"\n\nDeleting x and t would give the subsequence:\n\n\"luwul\"\n\nThe string \"luwul\" is a palindrome because it is the same forwards and backwards.",
        "Source.maxPalinSubsequence(\"luwxult\"); // -> 5",
        "Source.maxPalinSubsequence(\"xyzaxxzy\"); // -> 6",
        "Source.maxPalinSubsequence(\"lol\"); // -> 3",
        "Source.maxPalinSubsequence(\"boabcdefop\"); // -> 3",
        "Source.maxPalinSubsequence(\"z\"); // -> 1",
        "Source.maxPalinSubsequence(\"chartreusepugvicefree\"); // -> 7",
        "Source.maxPalinSubsequence(\"qwueoiuahsdjnweuueueunasdnmnqweuzqwerty\"); // -> 15",
        "Source.maxPalinSubsequence(\"enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe\"); // -> 31",
        "Source.maxPalinSubsequence(\"luwxult\") -> 5",
        "Source.maxPalinSubsequence(\"xyzaxxzy\") -> 6",
        "Source.maxPalinSubsequence(\"lol\") -> 3",
        "Source.maxPalinSubsequence(\"boabcdefop\") -> 3",
        "Source.maxPalinSubsequence(\"z\") -> 1",
        "Source.maxPalinSubsequence(\"chartreusepugvicefree\") -> 7",
        "Source.maxPalinSubsequence(\"qwueoiuahsdjnweuueueunasdnmnqweuzqwerty\") -> 15",
        "Source.maxPalinSubsequence(\"enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe\") -> 31"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int maxPalinSubsequence(String str) {\n    return maxPalinSubsequence(str, 0, str.length() - 1, new HashMap<>());\n  }\n\n  public static int maxPalinSubsequence(String str, int i, int j, HashMap<List<Integer>, Integer> memo) {\n    if (i > j) {\n      return 0;\n    }\n    \n    if (i == j) {\n      return 1;\n    }\n    \n    List<Integer> key = List.of(i, j);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    int result;\n    if (str.charAt(i) == str.charAt(j)) {\n      result = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);\n    } else {\n      result = Math.max(\n        maxPalinSubsequence(str, i + 1, j, memo), \n        maxPalinSubsequence(str, i, j - 1, memo)\n      );\n    }\n    memo.put(key, result);\n    return result;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of the string | Time: O(n^2) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "max palin subsequence",
        "slug": "max-palin-subsequence",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Find the length of the longest palindromic subsequence in a string.",
        "stub": "class Source {\n  public static int maxPalinSubsequence(String str) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int maxPalinSubsequence(String str) {\n    return maxPalinSubsequence(str, 0, str.length() - 1, new HashMap<>());\n  }\n\n  public static int maxPalinSubsequence(String str, int i, int j, HashMap<List<Integer>, Integer> memo) {\n    if (i > j) {\n      return 0;\n    }\n    \n    if (i == j) {\n      return 1;\n    }\n    \n    List<Integer> key = List.of(i, j);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    int result;\n    if (str.charAt(i) == str.charAt(j)) {\n      result = 2 + maxPalinSubsequence(str, i + 1, j - 1, memo);\n    } else {\n      result = Math.max(\n        maxPalinSubsequence(str, i + 1, j, memo), \n        maxPalinSubsequence(str, i, j - 1, memo)\n      );\n    }\n    memo.put(key, result);\n    return result;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::overlap-subsequence": {
      "statement": "Write a method, overlapSubsequence, that takes in two strings as arguments. The method should return the length of the longest overlapping subsequence. A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters. ``` For example, given: \"dogs\", \"daogt\" Deleting the s from \"dogs\" and the a,t from \"daogt\", gives the subsequence \"dog\" ```",
      "examples": [
        "For example, given:\n\n\"dogs\", \"daogt\"\n\nDeleting the s from \"dogs\" and the a,t from \"daogt\", gives the subsequence \"dog\"",
        "Source.overlapSubsequence(\"dogs\", \"daogt\"); // -> 3",
        "Source.overlapSubsequence(\"xcyats\", \"criaotsi\"); // -> 4"
      ],
      "testCases": [
        "For example, given:\n\n\"dogs\", \"daogt\"\n\nDeleting the s from \"dogs\" and the a,t from \"daogt\", gives the subsequence \"dog\"",
        "Source.overlapSubsequence(\"dogs\", \"daogt\"); // -> 3",
        "Source.overlapSubsequence(\"xcyats\", \"criaotsi\"); // -> 4",
        "Source.overlapSubsequence(\"xfeqortsver\", \"feeeuavoeqr\"); // -> 5",
        "Source.overlapSubsequence(\"kinfolklivemustache\", \"bespokekinfolksnackwave\"); // -> 11",
        "Source.overlapSubsequence(\n  \"mumblecorebeardleggingsauthenticunicorn\",\n  \"succulentspughumblemeditationlocavore\"\n); // -> 15",
        "Source.overlapSubsequence(\"dogs\", \"daogt\") -> 3",
        "Source.overlapSubsequence(\"xcyats\", \"criaotsi\") -> 4",
        "Source.overlapSubsequence(\"xfeqortsver\", \"feeeuavoeqr\") -> 5",
        "Source.overlapSubsequence(\"kinfolklivemustache\", \"bespokekinfolksnackwave\") -> 11",
        "Source.overlapSubsequence(\"mumblecorebeardleggingsauthenticunicorn\", \"succulentspughumblemeditationlocavore\") -> 15"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int overlapSubsequence(String str1, String str2) {\n    return overlapSubsequence(str1, str2, 0, 0, new HashMap<>());\n  }\n  \n  public static int overlapSubsequence(String str1, String str2, int i, int j, HashMap<List<Integer>, Integer> memo) {\n    if (i == str1.length() || j == str2.length()) {\n      return 0;\n    }\n    \n    List<Integer> key = List.of(i, j);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    int result;\n    if (str1.charAt(i) == str2.charAt(j)) {\n      result = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);\n    } else {\n      result = Math.max(\n        overlapSubsequence(str1, str2, i + 1, j, memo),\n        overlapSubsequence(str1, str2, i, j + 1, memo)\n      );\n    }\n    memo.put(key, result);\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of str1 | m = length of str2 | Time: O(nm) | Space: O(nm)"
        }
      ],
      "meta": {
        "name": "overlap subsequence",
        "slug": "overlap-subsequence",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Find the length of the longest overlapping subsequence of two strings.",
        "stub": "class Source {\n  public static int overlapSubsequence(String str1, String str2) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int overlapSubsequence(String str1, String str2) {\n    return overlapSubsequence(str1, str2, 0, 0, new HashMap<>());\n  }\n  \n  public static int overlapSubsequence(String str1, String str2, int i, int j, HashMap<List<Integer>, Integer> memo) {\n    if (i == str1.length() || j == str2.length()) {\n      return 0;\n    }\n    \n    List<Integer> key = List.of(i, j);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    int result;\n    if (str1.charAt(i) == str2.charAt(j)) {\n      result = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);\n    } else {\n      result = Math.max(\n        overlapSubsequence(str1, str2, i + 1, j, memo),\n        overlapSubsequence(str1, str2, i, j + 1, memo)\n      );\n    }\n    memo.put(key, result);\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::can-concat": {
      "statement": "Write a method, canConcat, that takes in a string and a list of words as arguments. The method should return boolean indicating whether or not it is possible to concatenate words of the list together to form the string. You may reuse words of the list as many times as needed.",
      "examples": [
        "Source.canConcat(\"oneisnone\", List.of(\"one\", \"none\", \"is\")); // -> true",
        "Source.canConcat(\"oneisnone\", List.of(\"on\", \"e\", \"is\")); // -> false",
        "Source.canConcat(\"oneisnone\", List.of(\"on\", \"e\", \"is\", \"n\")); // -> true"
      ],
      "testCases": [
        "Source.canConcat(\"oneisnone\", List.of(\"one\", \"none\", \"is\")); // -> true",
        "Source.canConcat(\"oneisnone\", List.of(\"on\", \"e\", \"is\")); // -> false",
        "Source.canConcat(\"oneisnone\", List.of(\"on\", \"e\", \"is\", \"n\")); // -> true",
        "Source.canConcat(\"foodisgood\", List.of(\"is\", \"g\", \"ood\", \"f\")); // -> true",
        "Source.canConcat(\"santahat\", List.of(\"santah\", \"hat\")); // -> false",
        "Source.canConcat(\"santahat\", List.of(\"santah\", \"san\", \"hat\", \"tahat\")); // -> true",
        "Source.canConcat(\"rrrrrrrrrrrrrrrrrrrrrrrrrrx\", List.of(\"r\", \"rr\", \"rrr\", \"rrrr\", \"rrrrr\", \"rrrrrr\")); // -> false",
        "Source.canConcat(\"fooisgood\", List.of(\"foo\", \"is\", \"g\", \"ood\", \"f\")); // -> true",
        "Source.canConcat(\"oneisnone\", List.of(\"one\", \"none\", \"is\")) -> true",
        "Source.canConcat(\"oneisnone\", List.of(\"on\", \"e\", \"is\")) -> false",
        "Source.canConcat(\"oneisnone\", List.of(\"on\", \"e\", \"is\", \"n\")) -> true",
        "Source.canConcat(\"foodisgood\", List.of(\"is\", \"g\", \"ood\", \"f\")) -> true",
        "Source.canConcat(\"santahat\", List.of(\"santah\", \"hat\")) -> false",
        "Source.canConcat(\"santahat\", List.of(\"santah\", \"san\", \"hat\", \"tahat\")) -> true",
        "Source.canConcat(\"rrrrrrrrrrrrrrrrrrrrrrrrrrx\", List.of(\"r\", \"rr\", \"rrr\", \"rrrr\", \"rrrrr\", \"rrrrrr\")) -> false",
        "Source.canConcat(\"fooisgood\", List.of(\"foo\", \"is\", \"g\", \"ood\", \"f\")) -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean canConcat(String s, List<String> words) {\n    return canConcat(s, words, 0, new HashMap<>());\n  }\n  \n  public static boolean canConcat(String s, List<String> words, int i, HashMap<Integer, Boolean> memo) {\n    if (i == s.length()) {\n      return true;\n    }\n    \n    if (memo.containsKey(i)) {\n      return memo.get(i);\n    }\n    \n    for (String word : words) {\n      if (s.startsWith(word, i)) {\n        if (canConcat(s, words, i + word.length(), memo)) {\n          memo.put(i, true);\n          return true;\n        }\n      }\n    }\n    \n    memo.put(i, false);\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "s = length of string | w = # of words | Time: ~O(sw) | Space: O(s)"
        }
      ],
      "meta": {
        "name": "can concat",
        "slug": "can-concat",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Check if it is possible to concatenate words into a string.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean canConcat(String s, List<String> words) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean canConcat(String s, List<String> words) {\n    return canConcat(s, words, 0, new HashMap<>());\n  }\n  \n  public static boolean canConcat(String s, List<String> words, int i, HashMap<Integer, Boolean> memo) {\n    if (i == s.length()) {\n      return true;\n    }\n    \n    if (memo.containsKey(i)) {\n      return memo.get(i);\n    }\n    \n    for (String word : words) {\n      if (s.startsWith(word, i)) {\n        if (canConcat(s, words, i + word.length(), memo)) {\n          memo.put(i, true);\n          return true;\n        }\n      }\n    }\n    \n    memo.put(i, false);\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::quickest-concat": {
      "statement": "Write a method, quickestConcat, that takes in a string and a list of words as arguments. The method should return the minimum number of words needed to build the string by concatenating words of the list. If it is not possible to build the string, then return -1. You may use words of the list as many times as needed.",
      "examples": [
        "Source.quickestConcat(\"caution\", List.of(\"ca\", \"ion\", \"caut\", \"ut\")); // -> 2",
        "Source.quickestConcat(\"caution\", List.of(\"ion\", \"caut\", \"caution\")); // -> 1",
        "Source.quickestConcat(\"respondorreact\", List.of(\"re\", \"or\", \"spond\", \"act\", \"respond\")); // -> 4"
      ],
      "testCases": [
        "Source.quickestConcat(\"caution\", List.of(\"ca\", \"ion\", \"caut\", \"ut\")); // -> 2",
        "Source.quickestConcat(\"caution\", List.of(\"ion\", \"caut\", \"caution\")); // -> 1",
        "Source.quickestConcat(\"respondorreact\", List.of(\"re\", \"or\", \"spond\", \"act\", \"respond\")); // -> 4",
        "Source.quickestConcat(\"simchacindy\", List.of(\"sim\", \"simcha\", \"acindy\", \"ch\")); // -> 3",
        "Source.quickestConcat(\"simchacindy\", List.of(\"sim\", \"simcha\", \"acindy\")); // -> -1",
        "Source.quickestConcat(\"uuuuuu\", List.of(\"u\", \"uu\", \"uuu\", \"uuuu\")); // -> 2",
        "Source.quickestConcat(\"rongbetty\", List.of(\"wrong\", \"bet\")); // -> -1",
        "Source.quickestConcat(\"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu\", List.of(\"u\", \"uu\", \"uuu\", \"uuuu\", \"uuuuu\")); // -> 7",
        "Source.quickestConcat(\"caution\", List.of(\"ca\", \"ion\", \"caut\", \"ut\")) -> 2",
        "Source.quickestConcat(\"caution\", List.of(\"ion\", \"caut\", \"caution\")) -> 1",
        "Source.quickestConcat(\"respondorreact\", List.of(\"re\", \"or\", \"spond\", \"act\", \"respond\")) -> 4",
        "Source.quickestConcat(\"simchacindy\", List.of(\"sim\", \"simcha\", \"acindy\", \"ch\")) -> 3",
        "Source.quickestConcat(\"simchacindy\", List.of(\"sim\", \"simcha\", \"acindy\")) -> -1",
        "Source.quickestConcat(\"uuuuuu\", List.of(\"u\", \"uu\", \"uuu\", \"uuuu\")) -> 2",
        "Source.quickestConcat(\"rongbetty\", List.of(\"wrong\", \"bet\")) -> -1",
        "Source.quickestConcat(\"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu\", List.of(\"u\", \"uu\", \"uuu\", \"uuuu\", \"uuuuu\")) -> 7"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  \n  public static int quickestConcat(String s, List<String> words) {\n    double result = quickestConcat(s, words, 0, new HashMap<>());\n    if (result == Double.POSITIVE_INFINITY) {\n      return -1;\n    } else {\n      return (int) result;\n    }\n  }\n  \n  public static double quickestConcat(String s, List<String> words, int i, HashMap<Integer, Double> memo) {\n    if (i == s.length()) {\n      return 0;\n    }\n    \n    if (memo.containsKey(i)) {\n      return memo.get(i);\n    }\n\n    double min = Double.POSITIVE_INFINITY;\n    for (String word : words) {\n      if (s.startsWith(word, i)) {\n        double attempt = 1 + quickestConcat(s, words, i + word.length(), memo);\n        if (attempt < min) {\n          min = attempt;\n        }\n      }\n    }\n    \n    memo.put(i, min);\n    return min;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "s = length of string | w = # of words | Time: ~O(sw) | Space: O(s)"
        }
      ],
      "meta": {
        "name": "quickest concat",
        "slug": "quickest-concat",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Find the minimum words required to build a string.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int quickestConcat(String s, List<String> words) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  \n  public static int quickestConcat(String s, List<String> words) {\n    double result = quickestConcat(s, words, 0, new HashMap<>());\n    if (result == Double.POSITIVE_INFINITY) {\n      return -1;\n    } else {\n      return (int) result;\n    }\n  }\n  \n  public static double quickestConcat(String s, List<String> words, int i, HashMap<Integer, Double> memo) {\n    if (i == s.length()) {\n      return 0;\n    }\n    \n    if (memo.containsKey(i)) {\n      return memo.get(i);\n    }\n\n    double min = Double.POSITIVE_INFINITY;\n    for (String word : words) {\n      if (s.startsWith(word, i)) {\n        double attempt = 1 + quickestConcat(s, words, i + word.length(), memo);\n        if (attempt < min) {\n          min = attempt;\n        }\n      }\n    }\n    \n    memo.put(i, min);\n    return min;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::valid-compound": {
      "statement": "You are a chemist and have to figure out if you can make a compound from some given elements! Write a method, validCompound, that takes in a target compound and a list of elements. The method should return a boolean indicating whether or not the compound can be created from the given elements. A compound is made by concatenating one or more elements together. You may reuse elements of the list as many times as needed to make a compound.",
      "examples": [
        "validCompound(\"neco\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> true",
        "validCompound(\"nerco\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> false",
        "validCompound(\"sir\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> true"
      ],
      "testCases": [
        "validCompound(\"neco\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> true",
        "validCompound(\"nerco\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> false",
        "validCompound(\"sir\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> true",
        "validCompound(\"noses\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> false",
        "validCompound(\"onbeinos\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> true",
        "validCompound(\"cocococococococococococococococococococococococococococococox\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> false",
        "Source.validCompound(\"neco\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> true",
        "Source.validCompound(\"nerco\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> false",
        "Source.validCompound(\"sir\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> true",
        "Source.validCompound(\"noses\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> false",
        "Source.validCompound(\"onbeinos\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> true",
        "Source.validCompound(\"cocococococococococococococococococococococococococococococox\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean validCompound(String compound, List<String> elements) {\n    return validCompound(compound, elements, 0, new HashMap<>()); \n  }\n\n  private static boolean validCompound(String compound, List<String> elements, int idx, HashMap<Integer, Boolean> memo) {\n    if (idx == compound.length()) {\n      return true;\n    }\n\n    if (memo.containsKey(idx)) {\n      return memo.get(idx);\n    }\n\n    for (String ele : elements) {\n      if (compound.startsWith(ele.toLowerCase(), idx)) {\n        if (validCompound(compound, elements, idx + ele.length(), memo)) {\n          memo.put(idx, true);\n          return true;\n        }\n      }\n    }\n    memo.put(idx, false);\n    return false;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "c = length of compound | e = # of elements | Time: O(cw) | Space: O(c)"
        }
      ],
      "meta": {
        "name": "valid compound",
        "slug": "valid-compound",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Check if a chemical compound can be made from given elements",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean validCompound(String compound, List<String> elements) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean validCompound(String compound, List<String> elements) {\n    return validCompound(compound, elements, 0, new HashMap<>()); \n  }\n\n  private static boolean validCompound(String compound, List<String> elements, int idx, HashMap<Integer, Boolean> memo) {\n    if (idx == compound.length()) {\n      return true;\n    }\n\n    if (memo.containsKey(idx)) {\n      return memo.get(idx);\n    }\n\n    for (String ele : elements) {\n      if (compound.startsWith(ele.toLowerCase(), idx)) {\n        if (validCompound(compound, elements, idx + ele.length(), memo)) {\n          memo.put(idx, true);\n          return true;\n        }\n      }\n    }\n    memo.put(idx, false);\n    return false;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::count-compounds": {
      "statement": "You are a chemist and have to figure out how many ways you can make a given compound. Write a method, countCompounds, that takes in a target compound and a list of elements. The method should return the number of ways we can make the compound with the given elements. A compound is made by concatenating one or more elements together. You may reuse elements of the list as many times as needed to make a compound.",
      "examples": [
        "countCompounds(\"neco\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> 2",
        "countCompounds(\"nerco\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> 0",
        "countCompounds(\"sir\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> 1"
      ],
      "testCases": [
        "countCompounds(\"neco\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> 2",
        "countCompounds(\"nerco\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> 0",
        "countCompounds(\"sir\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> 1",
        "countCompounds(\"hocli\", List.of(\n  \"C\",\n  \"Cl\",\n  \"I\",\n  \"Ho\",\n  \"Li\",\n  \"La\",\n  \"H\",\n  \"O\"\n)); // -> 4",
        "countCompounds(\"noses\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> 0",
        "countCompounds(\"onbeinos\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> 2",
        "countCompounds(\"necoonbeinos\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> 4",
        "countCompounds(\"cocococococococococococococococococococococococococococococox\", List.of(\n  \"Ne\",\n  \"O\",\n  \"Be\",\n  \"I\",\n  \"N\",\n  \"Os\",\n  \"Si\",\n  \"S\",\n  \"Co\",\n  \"C\",\n  \"Ir\"\n)); // -> 0",
        "Source.countCompounds(\"neco\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> 2",
        "Source.countCompounds(\"nerco\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> 0",
        "Source.countCompounds(\"sir\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> 1",
        "Source.countCompounds(\"hocli\", List.of( \"C\", \"Cl\", \"I\", \"Ho\", \"Li\", \"La\", \"H\", \"O\" )) -> 4",
        "Source.countCompounds(\"noses\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> 0",
        "Source.countCompounds(\"onbeinos\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> 2",
        "Source.countCompounds(\"necoonbeinos\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> 4",
        "Source.countCompounds(\"cocococococococococococococococococococococococococococococox\", List.of( \"Ne\", \"O\", \"Be\", \"I\", \"N\", \"Os\", \"Si\", \"S\", \"Co\", \"C\", \"Ir\" )) -> 0"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int countCompounds(String compound, List<String> elements) {\n    return countCompounds(compound, elements, 0, new HashMap<>());\n  }\n\n  private static int countCompounds(String compound, List<String> elements, int idx, HashMap<Integer, Integer> memo) {\n    if (idx == compound.length()) {\n      return 1;\n    }\n\n    if (memo.containsKey(idx)) {\n      return memo.get(idx);\n    }\n\n    int count = 0;\n    for (String ele : elements) {\n      if (compound.startsWith(ele.toLowerCase(), idx)) {\n        count += countCompounds(compound, elements, idx + ele.length(), memo);\n      }\n    }\n\n    memo.put(idx, count);\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "c = length of compound | e = # of elements | Time: O(cw) | Space: O(c)"
        }
      ],
      "meta": {
        "name": "count compounds",
        "slug": "count-compounds",
        "module": "Dynamic Programming",
        "premium": false,
        "verbose": "Count the number of ways chemical compound can be made from given elements",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int countCompounds(String compound, List<String> elements) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int countCompounds(String compound, List<String> elements) {\n    return countCompounds(compound, elements, 0, new HashMap<>());\n  }\n\n  private static int countCompounds(String compound, List<String> elements, int idx, HashMap<Integer, Integer> memo) {\n    if (idx == compound.length()) {\n      return 1;\n    }\n\n    if (memo.containsKey(idx)) {\n      return memo.get(idx);\n    }\n\n    int count = 0;\n    for (String ele : elements) {\n      if (compound.startsWith(ele.toLowerCase(), idx)) {\n        count += countCompounds(compound, elements, idx + ele.length(), memo);\n      }\n    }\n\n    memo.put(idx, count);\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::longest-path": {
      "statement": "Write a method, longestPath, that takes in an adjacency list for a directed acyclic graph. The method should return the length of the longest path within the graph. A path may start and end at any two nodes. The length of a path is considered the number of edges in the path, not the number of nodes.",
      "examples": [
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"c\", \"b\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of()\n);\n\nSource.longestPath(graph); // -> 2",
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"c\", \"b\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of(),\n  \"q\", List.of(\"r\"),\n  \"r\", List.of(\"s\", \"u\", \"t\"),\n  \"s\", List.of(\"t\"),\n  \"t\", List.of(\"u\"),\n  \"u\", List.of()\n);\n\nSource.longestPath(graph); // -> 4",
        "Map<String, List<String>> graph = Map.of(\n  \"h\", List.of(\"i\", \"j\", \"k\"),\n  \"g\", List.of(\"h\"),\n  \"i\", List.of(),\n  \"j\", List.of(),\n  \"k\", List.of(),\n  \"x\", List.of(\"y\"),\n  \"y\", List.of()\n);\n\nSource.longestPath(graph); // -> 2"
      ],
      "testCases": [
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"c\", \"b\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of()\n);\n\nSource.longestPath(graph); // -> 2",
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"c\", \"b\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of(),\n  \"q\", List.of(\"r\"),\n  \"r\", List.of(\"s\", \"u\", \"t\"),\n  \"s\", List.of(\"t\"),\n  \"t\", List.of(\"u\"),\n  \"u\", List.of()\n);\n\nSource.longestPath(graph); // -> 4",
        "Map<String, List<String>> graph = Map.of(\n  \"h\", List.of(\"i\", \"j\", \"k\"),\n  \"g\", List.of(\"h\"),\n  \"i\", List.of(),\n  \"j\", List.of(),\n  \"k\", List.of(),\n  \"x\", List.of(\"y\"),\n  \"y\", List.of()\n);\n\nSource.longestPath(graph); // -> 2",
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"b\"),\n  \"b\", List.of(\"c\"),\n  \"c\", List.of(),\n  \"e\", List.of(\"f\"),\n  \"f\", List.of(\"g\"),\n  \"g\", List.of(\"h\"),\n  \"h\", List.of()\n);\n\nSource.longestPath(graph); // -> 3",
        "Map<String, List<String>> graph = new HashMap<>();\ngraph.put(\"a\", List.of(\"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\"));\ngraph.put(\"b\", List.of(\"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\"));\ngraph.put(\"c\", List.of(\"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\"));\ngraph.put(\"d\", List.of(\"e\", \"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\"));\ngraph.put(\"e\", List.of(\"f\", \"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\"));\ngraph.put(\"f\", List.of(\"g\", \"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\"));\ngraph.put(\"g\", List.of(\"h\", \"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\"));\ngraph.put(\"h\", List.of(\"i\", \"j\", \"k\", \"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\"));\ngraph.put(\"i\", List.of(\"j\", \"k\", \"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\"));\ngraph.put(\"j\", List.of(\"k\", \"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\"));\ngraph.put(\"k\", List.of(\"l\", \"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\"));\ngraph.put(\"l\", List.of(\"m\", \"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\", \"y\"));\ngraph.put(\"m\", List.of(\"n\", \"o\", \"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\"));\ngraph.put(\"n\", List.of(\"o\", \"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\", \"y\", \"z\"));\ngraph.put(\"o\", List.of(\"p\", \"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\"));\ngraph.put(\"p\", List.of(\"q\", \"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\", \"y\"));\ngraph.put(\"q\", List.of(\"r\", \"s\", \"t\", \"u\", \"v\", \"w\", \"x\", \"y\"));\ngraph.put(\"r\", List.of(\"s\", \"t\", \"u\", \"v\", \"w\", \"x\", \"y\", \"z\"));\ngraph.put(\"s\", List.of(\"t\", \"u\", \"v\", \"w\", \"x\", \"y\", \"z\"));\ngraph.put(\"t\", List.of(\"u\", \"v\", \"w\", \"x\", \"y\", \"z\"));\ngraph.put(\"u\", List.of(\"v\", \"w\", \"x\", \"y\", \"z\"));\ngraph.put(\"v\", List.of(\"w\", \"x\", \"y\", \"z\"));\ngraph.put(\"w\", List.of(\"x\", \"y\", \"z\"));\ngraph.put(\"x\", List.of(\"y\", \"z\"));\ngraph.put(\"y\", List.of(\"z\"));\ngraph.put(\"z\", List.of( ));\n\nSource.longestPath(graph); // -> 25",
        "Source.longestPath(graph) -> 2",
        "Source.longestPath(graph) -> 4",
        "Source.longestPath(graph) -> 3",
        "Source.longestPath(graph) -> 25"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.Map;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Collections;\n\nclass Source {\n  public static int longestPath(Map<String, List<String>> graph) {\n    HashMap<String, Integer> distance = new HashMap<>();\n    for (String node : graph.keySet()) {\n      if (graph.get(node).size() == 0) {\n        distance.put(node, 0);\n      }\n    }\n    \n    for (String node : graph.keySet()) {\n      traverseDistance(node, graph, distance);\n    }\n    \n    return Collections.max(distance.values());\n  }\n  \n  public static int traverseDistance(String node, Map<String, List<String>> graph, HashMap<String, Integer> distance) {\n    if (distance.containsKey(node)) {\n      return distance.get(node);\n    }\n    \n    int max = 0;\n    for (String neighbor : graph.get(node)) {\n      int attempt = traverseDistance(neighbor, graph, distance);\n      if (attempt > max) {\n        max = attempt;\n      }\n    }\n    \n    distance.put(node, max + 1);\n    return max + 1;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "e = # edges | n = # nodes | Time: O(e) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "longest path",
        "slug": "longest-path",
        "module": "Dynamic Programming",
        "premium": true,
        "verbose": "Find the longest path in a DAG.",
        "stub": "import java.util.Map;\nimport java.util.List;\n\nclass Source {\n  public static int longestPath(Map<String, List<String>> graph) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.Map;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Collections;\n\nclass Source {\n  public static int longestPath(Map<String, List<String>> graph) {\n    HashMap<String, Integer> distance = new HashMap<>();\n    for (String node : graph.keySet()) {\n      if (graph.get(node).size() == 0) {\n        distance.put(node, 0);\n      }\n    }\n    \n    for (String node : graph.keySet()) {\n      traverseDistance(node, graph, distance);\n    }\n    \n    return Collections.max(distance.values());\n  }\n  \n  public static int traverseDistance(String node, Map<String, List<String>> graph, HashMap<String, Integer> distance) {\n    if (distance.containsKey(node)) {\n      return distance.get(node);\n    }\n    \n    int max = 0;\n    for (String neighbor : graph.get(node)) {\n      int attempt = traverseDistance(neighbor, graph, distance);\n      if (attempt > max) {\n        max = attempt;\n      }\n    }\n    \n    distance.put(node, max + 1);\n    return max + 1;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "dynamic-programming::semesters-required": {
      "statement": "Write a method, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of List.of(A, B) means that course A must be taken before course B. Return the minimum number of semesters required to complete all n courses. There is no limit on how many courses you can take in a single semester, as long as the prerequisites of a course are satisfied before taking it. Note that given prerequisite List.of(A, B), you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B. You can assume that it is possible to eventually complete all courses.",
      "examples": [
        "int numCourses = 6;\nList<List<Integer>> prereqs = List.of(\n  List.of(1, 2),\n  List.of(2, 4),\n  List.of(3, 5),\n  List.of(0, 5)\n);\nSource.semestersRequired(numCourses, prereqs); // -> 3",
        "int numCourses = 7;\nList<List<Integer>> prereqs = List.of(\n  List.of(4, 3),\n  List.of(3, 2),\n  List.of(2, 1),\n  List.of(1, 0),\n  List.of(5, 2),\n  List.of(5, 6)\n);\nSource.semestersRequired(numCourses, prereqs); // -> 5",
        "int numCourses = 5;\nList<List<Integer>> prereqs = List.of(\n  List.of(1, 0),\n  List.of(3, 4),\n  List.of(1, 2),\n  List.of(3, 2)\n);\nSource.semestersRequired(numCourses, prereqs); // -> 2"
      ],
      "testCases": [
        "int numCourses = 6;\nList<List<Integer>> prereqs = List.of(\n  List.of(1, 2),\n  List.of(2, 4),\n  List.of(3, 5),\n  List.of(0, 5)\n);\nSource.semestersRequired(numCourses, prereqs); // -> 3",
        "int numCourses = 7;\nList<List<Integer>> prereqs = List.of(\n  List.of(4, 3),\n  List.of(3, 2),\n  List.of(2, 1),\n  List.of(1, 0),\n  List.of(5, 2),\n  List.of(5, 6)\n);\nSource.semestersRequired(numCourses, prereqs); // -> 5",
        "int numCourses = 5;\nList<List<Integer>> prereqs = List.of(\n  List.of(1, 0),\n  List.of(3, 4),\n  List.of(1, 2),\n  List.of(3, 2)\n);\nSource.semestersRequired(numCourses, prereqs); // -> 2",
        "int numCourses = 12;\nList<List<Integer>> prereqs = List.of();\nSource.semestersRequired(numCourses, prereqs); // -> 1",
        "int numCourses = 3;\nList<List<Integer>> prereqs = List.of(\n  List.of(0, 2),\n  List.of(0, 1),\n  List.of(1, 2)\n);\nSource.semestersRequired(numCourses, prereqs); // -> 3",
        "int numCourses = 6;\nList<List<Integer>> prereqs = List.of(\n  List.of(3, 4),\n  List.of(3, 0),\n  List.of(3, 1),\n  List.of(3, 2),\n  List.of(3, 5)\n);\nSource.semestersRequired(numCourses, prereqs); // -> 2",
        "Source.semestersRequired(numCourses, prereqs) -> 3",
        "Source.semestersRequired(numCourses, prereqs) -> 5",
        "Source.semestersRequired(numCourses, prereqs) -> 2",
        "Source.semestersRequired(numCourses, prereqs) -> 1"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.Collections;\n\nclass Source {\n  public static int semestersRequired(int numCourses, List<List<Integer>> prereqs) {\n    HashMap<Integer, List<Integer>> graph = buildGraph(numCourses, prereqs);\n    HashMap<Integer, Integer> distance = new HashMap<>();\n    \n    for (int node : graph.keySet()) {\n      traverseDistance(node, graph, distance);\n    }\n    \n    return Collections.max(distance.values());\n  }\n  \n  public static int traverseDistance(int node, HashMap<Integer, List<Integer>> graph, HashMap<Integer, Integer> distance) {\n    if (distance.containsKey(node)) {\n      return distance.get(node);\n    }\n    \n    int max = 0;\n    for (int neighbor : graph.get(node)) {\n      int neighborDistance = traverseDistance(neighbor, graph, distance);\n      if (neighborDistance > max) {\n        max = neighborDistance;\n      }\n    }\n    \n    distance.put(node, max + 1);\n    return max + 1;\n  }\n  \n  public static HashMap<Integer, List<Integer>> buildGraph(int numCourses, List<List<Integer>> prereqs) {\n    HashMap<Integer, List<Integer>> graph = new HashMap<>();\n    for (int node = 0; node < numCourses; node += 1) {\n      graph.put(node, new ArrayList<>());\n    }\n    \n    for (List<Integer> prereq : prereqs) {\n      int a = prereq.get(0);\n      int b = prereq.get(1);\n      graph.get(a).add(b);\n    }\n    \n    return graph;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "p = # prereqs | c = # courses | Time: O(p) | Space: O(c)"
        }
      ],
      "meta": {
        "name": "semesters required",
        "slug": "semesters-required",
        "module": "Dynamic Programming",
        "premium": true,
        "verbose": "Find the minimum semesters required to take all courses.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int semestersRequired(int numCourses, List<List<Integer>> prereqs) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.Collections;\n\nclass Source {\n  public static int semestersRequired(int numCourses, List<List<Integer>> prereqs) {\n    HashMap<Integer, List<Integer>> graph = buildGraph(numCourses, prereqs);\n    HashMap<Integer, Integer> distance = new HashMap<>();\n    \n    for (int node : graph.keySet()) {\n      traverseDistance(node, graph, distance);\n    }\n    \n    return Collections.max(distance.values());\n  }\n  \n  public static int traverseDistance(int node, HashMap<Integer, List<Integer>> graph, HashMap<Integer, Integer> distance) {\n    if (distance.containsKey(node)) {\n      return distance.get(node);\n    }\n    \n    int max = 0;\n    for (int neighbor : graph.get(node)) {\n      int neighborDistance = traverseDistance(neighbor, graph, distance);\n      if (neighborDistance > max) {\n        max = neighborDistance;\n      }\n    }\n    \n    distance.put(node, max + 1);\n    return max + 1;\n  }\n  \n  public static HashMap<Integer, List<Integer>> buildGraph(int numCourses, List<List<Integer>> prereqs) {\n    HashMap<Integer, List<Integer>> graph = new HashMap<>();\n    for (int node = 0; node < numCourses; node += 1) {\n      graph.put(node, new ArrayList<>());\n    }\n    \n    for (List<Integer> prereq : prereqs) {\n      int a = prereq.get(0);\n      int b = prereq.get(1);\n      graph.get(a).add(b);\n    }\n    \n    return graph;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "stack::reverse-some-chars": {
      "statement": "Write a function, reverseSomeChars, that takes in string and a List of characters. The function should return the string with the order of the given characters in reverse.",
      "examples": [
        "Source.reverseSomeChars(\"computer\", List.of('a', 'e', 'i', 'o', 'u')); // -> \"cemputor\"\n\n// 'o', 'u', and 'e' are target characters in 'computer'\n// so their relative order should be reversed to result in 'cemputor'",
        "Source.reverseSomeChars(\"skateboard\", List.of('a', 'e', 'i', 'o', 'u')); // -> \"skatobeard\"",
        "Source.reverseSomeChars(\"airplane\", List.of('m', 'n', 'r')); // -> \"ainplare\""
      ],
      "testCases": [
        "Source.reverseSomeChars(\"computer\", List.of('a', 'e', 'i', 'o', 'u')); // -> \"cemputor\"\n\n// 'o', 'u', and 'e' are target characters in 'computer'\n// so their relative order should be reversed to result in 'cemputor'",
        "Source.reverseSomeChars(\"skateboard\", List.of('a', 'e', 'i', 'o', 'u')); // -> \"skatobeard\"",
        "Source.reverseSomeChars(\"airplane\", List.of('m', 'n', 'r')); // -> \"ainplare\"",
        "Source.reverseSomeChars(\"building\", List.of('g', 'd', 'i')); // -> \"buglidni\"",
        "Source.reverseSomeChars(\"computer\", List.of('a', 'e', 'i', 'o', 'u')) -> \"cemputor\"",
        "Source.reverseSomeChars(\"skateboard\", List.of('a', 'e', 'i', 'o', 'u')) -> \"skatobeard\"",
        "Source.reverseSomeChars(\"airplane\", List.of('m', 'n', 'r')) -> \"ainplare\"",
        "Source.reverseSomeChars(\"building\", List.of('g', 'd', 'i')) -> \"buglidni\""
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.HashSet;\nimport java.util.Stack;\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Source {\n  public static String reverseSomeChars(String str, List<Character> chars) {\n    HashSet<Character> charSet = new HashSet<>(chars);\n\n    Stack<Character> stack = new Stack<>();\n    for (char c : str.toCharArray()) {\n      if (charSet.contains(c)) {\n        stack.push(c);\n      }\n    }\n\n    StringBuilder result = new StringBuilder(str.length());\n    for (char c : str.toCharArray()) {\n      if (charSet.contains(c)) {\n        result.append(stack.pop());\n      } else {\n        result.append(c);\n      }\n    }\n\n    return result.toString();\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}",
          "complexity": "n = length of string | m = length of chars list | Time: O(n + m) | Space: O(n + m)"
        }
      ],
      "meta": {
        "name": "reverse some chars",
        "slug": "reverse-some-chars",
        "module": "Stack",
        "premium": true,
        "verbose": "Reverse the order of select characters in a string.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static String reverseSomeChars(String str, List<Character> chars) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.HashSet;\nimport java.util.Stack;\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Source {\n  public static String reverseSomeChars(String str, List<Character> chars) {\n    HashSet<Character> charSet = new HashSet<>(chars);\n\n    Stack<Character> stack = new Stack<>();\n    for (char c : str.toCharArray()) {\n      if (charSet.contains(c)) {\n        stack.push(c);\n      }\n    }\n\n    StringBuilder result = new StringBuilder(str.length());\n    for (char c : str.toCharArray()) {\n      if (charSet.contains(c)) {\n        result.append(stack.pop());\n      } else {\n        result.append(c);\n      }\n    }\n\n    return result.toString();\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function, but should not remove it\n  }\n}"
      }
    },
    "stack::paired-parentheses": {
      "statement": "Write a method, pairedParentheses, that takes in a string as an argument. The method should return a boolean indicating whether or not the string has well-formed parentheses. You may assume the string contains only alphabetic characters, '(', or ')'.",
      "examples": [
        "Source.pairedParentheses(\"(david)((abby))\"); // -> true",
        "Source.pairedParentheses(\"()rose(jeff\"); // -> false",
        "Source.pairedParentheses(\")(\"); // -> false"
      ],
      "testCases": [
        "Source.pairedParentheses(\"(david)((abby))\"); // -> true",
        "Source.pairedParentheses(\"()rose(jeff\"); // -> false",
        "Source.pairedParentheses(\")(\"); // -> false",
        "Source.pairedParentheses(\"()\"); // -> true",
        "Source.pairedParentheses(\"(((potato())))\"); // -> true",
        "Source.pairedParentheses(\"(())(water)()\"); // -> true",
        "Source.pairedParentheses(\"(())(water()()\"); // -> false",
        "Source.pairedParentheses(\"\"); // -> true",
        "Source.pairedParentheses(\"))()\"); // -> false",
        "Source.pairedParentheses(\"(david)((abby))\") -> true",
        "Source.pairedParentheses(\"()rose(jeff\") -> false",
        "Source.pairedParentheses(\")(\") -> false",
        "Source.pairedParentheses(\"()\") -> true",
        "Source.pairedParentheses(\"(((potato())))\") -> true",
        "Source.pairedParentheses(\"(())(water)()\") -> true",
        "Source.pairedParentheses(\"(())(water()()\") -> false",
        "Source.pairedParentheses(\"\") -> true",
        "Source.pairedParentheses(\"))()\") -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using a counter",
          "code": "class Source {\n  public static boolean pairedParentheses(String str) {\n    int count = 0;\n    for (char c : str.toCharArray()) {\n      if (c == '(') {\n        count += 1;\n      } else if (c == ')') {\n        if (count > 0) {\n          count -= 1;\n        } else {\n          return false;\n        }\n      }\n    }\n    return count == 0;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of string | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "paired parentheses",
        "slug": "paired-parentheses",
        "module": "Stack",
        "premium": true,
        "verbose": "Check if a string containing parentheses is valid.",
        "stub": "class Source {\n  public static boolean pairedParentheses(String str) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Source {\n  public static boolean pairedParentheses(String str) {\n    int count = 0;\n    for (char c : str.toCharArray()) {\n      if (c == '(') {\n        count += 1;\n      } else if (c == ')') {\n        if (count > 0) {\n          count -= 1;\n        } else {\n          return false;\n        }\n      }\n    }\n    return count == 0;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "stack::befitting-brackets": {
      "statement": "Write a method, befittingBrackets, that takes in a string as an argument. The method should return a boolean indicating whether or not the string contains correctly matched brackets. You may assume the string contains only characters: ( ) \\[ \\] { }",
      "examples": [
        "Source.befittingBrackets(\"(){}[](())\"); // -> true",
        "Source.befittingBrackets(\"({[]})\"); // -> true",
        "Source.befittingBrackets(\"[][}\"); // -> false"
      ],
      "testCases": [
        "Source.befittingBrackets(\"(){}[](())\"); // -> true",
        "Source.befittingBrackets(\"({[]})\"); // -> true",
        "Source.befittingBrackets(\"[][}\"); // -> false",
        "Source.befittingBrackets(\"{[]}({}\"); // -> false",
        "Source.befittingBrackets(\"[]{}(}[]\"); // -> false",
        "Source.befittingBrackets(\"[]{}()[]\"); // -> true",
        "Source.befittingBrackets(\"]{}\"); // -> false",
        "Source.befittingBrackets(\"); // -> true",
        "Source.befittingBrackets(\"{[(}])\"); // -> false",
        "Source.befittingBrackets(\"(){}[](())\") -> true",
        "Source.befittingBrackets(\"({[]})\") -> true",
        "Source.befittingBrackets(\"[][}\") -> false",
        "Source.befittingBrackets(\"{[]}({}\") -> false",
        "Source.befittingBrackets(\"[]{}(}[]\") -> false",
        "Source.befittingBrackets(\"[]{}()[]\") -> true",
        "Source.befittingBrackets(\"]{}\") -> false",
        "Source.befittingBrackets(\"\") -> true",
        "Source.befittingBrackets(\"{[(}])\") -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using a stack",
          "code": "import java.util.Map;\nimport java.util.Stack;\n\nclass Source {\n  public static boolean befittingBrackets(String str) {\n    Map<Character, Character> brackets = Map.of(\n      '{', '}',\n      '(', ')',\n      '[', ']'\n    );\n\n    Stack<Character> stack = new Stack<>();\n    for (char c : str.toCharArray()) {\n      if (brackets.containsKey(c)) {\n        stack.push(brackets.get(c));\n      } else {\n        if (!stack.isEmpty() && stack.peek() == c) {\n          stack.pop();\n        } else {\n          return false;\n        }\n      }\n    }\n    return stack.isEmpty();\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of string | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "befitting brackets",
        "slug": "befitting-brackets",
        "module": "Stack",
        "premium": true,
        "verbose": "Check if a string containing various brackets is valid.",
        "stub": "class Source {\n  public static boolean befittingBrackets(String str) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.Map;\nimport java.util.Stack;\n\nclass Source {\n  public static boolean befittingBrackets(String str) {\n    Map<Character, Character> brackets = Map.of(\n      '{', '}',\n      '(', ')',\n      '[', ']'\n    );\n\n    Stack<Character> stack = new Stack<>();\n    for (char c : str.toCharArray()) {\n      if (brackets.containsKey(c)) {\n        stack.push(brackets.get(c));\n      } else {\n        if (!stack.isEmpty() && stack.peek() == c) {\n          stack.pop();\n        } else {\n          return false;\n        }\n      }\n    }\n    return stack.isEmpty();\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "stack::decompress-braces": {
      "statement": "Write a method, decompressBraces, that takes in a compressed string as an argument. The method should return the string decompressed. The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times. You may assume that every number n is guaranteed to be an integer between 1 through 9. You may assume that the input is valid and the decompressed string will only contain alphabetic characters.",
      "examples": [
        "Source.decompressBraces(\"2{q}3{tu}v\"); \n// -> qqtututuv",
        "Source.decompressBraces(\"ch3{ao}\"); \n// -> chaoaoao",
        "Source.decompressBraces(\"2{y3{o}}s\"); \n// -> yoooyooos"
      ],
      "testCases": [
        "Source.decompressBraces(\"2{q}3{tu}v\"); \n// -> qqtututuv",
        "Source.decompressBraces(\"ch3{ao}\"); \n// -> chaoaoao",
        "Source.decompressBraces(\"2{y3{o}}s\"); \n// -> yoooyooos",
        "Source.decompressBraces(\"z3{a2{xy}b}\"); \n// -> zaxyxybaxyxybaxyxyb",
        "Source.decompressBraces(\"2{3{r4{e}r}io}\"); \n// -> reeeerreeeerreeeerioreeeerreeeerreeeerio",
        "Source.decompressBraces(\"go3{spinn2{ing}s}\"); \n// -> gospinningingsspinningingsspinningings",
        "Source.decompressBraces(\"2{l2{if}azu}l\"); \n// -> lififazulififazul",
        "Source.decompressBraces(\"3{al4{ec}2{icia}}\"); \n// -> alececececiciaiciaalececececiciaiciaalececececiciaicia",
        "Source.decompressBraces(\"2{q}3{tu}v\") -> \"qqtututuv\"",
        "Source.decompressBraces(\"ch3{ao}\") -> \"chaoaoao\"",
        "Source.decompressBraces(\"2{y3{o}}s\") -> \"yoooyooos\"",
        "Source.decompressBraces(\"z3{a2{xy}b}\") -> \"zaxyxybaxyxybaxyxyb\"",
        "Source.decompressBraces(\"2{3{r4{e}r}io}\") -> \"reeeerreeeerreeeerioreeeerreeeerreeeerio\"",
        "Source.decompressBraces(\"go3{spinn2{ing}s}\") -> \"gospinningingsspinningingsspinningings\"",
        "Source.decompressBraces(\"2{l2{if}azu}l\") -> \"lififazulififazul\"",
        "Source.decompressBraces(\"3{al4{ec}2{icia}}\") -> \"alececececiciaiciaalececececiciaiciaalececececiciaicia\""
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using a stack",
          "code": "import java.util.Stack;\n\nclass Source {\n  public static String decompressBraces(String str) {\n    String numbers = \"123456789\";\n    Stack<String> stack = new Stack<>();\n    for (char ch : str.toCharArray()) {\n      if (numbers.indexOf(ch) > -1) {\n        stack.push(String.valueOf(ch));\n      } else {\n        if (ch == '}') {\n          String segment = \"\";\n          while (!numbers.contains(stack.peek())) {\n            segment = stack.pop() + segment;\n          }\n          int number = Integer.valueOf(stack.pop());\n          stack.push(segment.repeat(number));\n        } else if (ch != '{') {\n          stack.push(String.valueOf(ch));\n        }\n      }\n    }\n\n    return String.join(\"\", stack); \n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "s = length of string | m = count of brace pairs | Time: O((9^m) * s) | Space: O((9^m) * s)"
        }
      ],
      "meta": {
        "name": "decompress braces",
        "slug": "decompress-braces",
        "module": "Stack",
        "premium": true,
        "verbose": "Decompress a string with nested braces.",
        "stub": "class Source {\n  public static String decompressBraces(String str) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.Stack;\n\nclass Source {\n  public static String decompressBraces(String str) {\n    String numbers = \"123456789\";\n    Stack<String> stack = new Stack<>();\n    for (char ch : str.toCharArray()) {\n      if (numbers.indexOf(ch) > -1) {\n        stack.push(String.valueOf(ch));\n      } else {\n        if (ch == '}') {\n          String segment = \"\";\n          while (!numbers.contains(stack.peek())) {\n            segment = stack.pop() + segment;\n          }\n          int number = Integer.valueOf(stack.pop());\n          stack.push(segment.repeat(number));\n        } else if (ch != '{') {\n          stack.push(String.valueOf(ch));\n        }\n      }\n    }\n\n    return String.join(\"\", stack); \n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "stack::nesting-score": {
      "statement": "Write a method, nestingScore, that takes in a string of brackets as an argument. The method should return the score of the string according to the following rules: - [] is worth 1 point - XY is worth X + Y points where X, Y are substrings of well-formed brackets - [S] is worth S * 2 points where S is a substring of well-formed brackets For example: [[][][]] is equivalent to (1 + 1 + 1) * 2 = 6 You may assume that the input only contains well-formed square brackets.",
      "examples": [
        "Source.nestingScore(\"[]\"); // -> 1",
        "Source.nestingScore(\"[][][]\"); // -> 3",
        "Source.nestingScore(\"[[]]\"); // -> 2"
      ],
      "testCases": [
        "Source.nestingScore(\"[]\"); // -> 1",
        "Source.nestingScore(\"[][][]\"); // -> 3",
        "Source.nestingScore(\"[[]]\"); // -> 2",
        "Source.nestingScore(\"[[][]]\"); // -> 4",
        "Source.nestingScore(\"[[][][]]\"); // -> 6",
        "Source.nestingScore(\"[[][]][]\"); // -> 5",
        "Source.nestingScore(\"[][[][]][[]]\"); // -> 7",
        "Source.nestingScore(\"[[[[[[[][]]]]]]][]\"); // -> 129",
        "Source.nestingScore(\"\"); // -> 0",
        "Source.nestingScore(\"[]\") -> 1",
        "Source.nestingScore(\"[][][]\") -> 3",
        "Source.nestingScore(\"[[]]\") -> 2",
        "Source.nestingScore(\"[[][]]\") -> 4",
        "Source.nestingScore(\"[[][][]]\") -> 6",
        "Source.nestingScore(\"[[][]][]\") -> 5",
        "Source.nestingScore(\"[][[][]][[]]\") -> 7",
        "Source.nestingScore(\"[[[[[[[][]]]]]]][]\") -> 129",
        "Source.nestingScore(\"\") -> 0"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using a stack",
          "code": "import java.util.Stack;\n\nclass Source {\n  public static int nestingScore(String str) {\n    Stack<Integer> stack = new Stack<>();\n    stack.push(0);\n    for (char ch : str.toCharArray()) {\n      if (ch == '[') {\n        stack.push(0);\n      } else {\n        int popped = stack.pop();\n        if (popped == 0) {\n          stack.push(stack.pop() + 1);\n        } else {\n          stack.push(stack.pop() + 2 * popped);\n        }\n      }\n    }\n    return stack.get(0);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of string | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "nesting score",
        "slug": "nesting-score",
        "module": "Stack",
        "premium": true,
        "verbose": "Calculate the score of a nested bracket expression.",
        "stub": "class Source {\n  public static int nestingScore(String str) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.Stack;\n\nclass Source {\n  public static int nestingScore(String str) {\n    Stack<Integer> stack = new Stack<>();\n    stack.push(0);\n    for (char ch : str.toCharArray()) {\n      if (ch == '[') {\n        stack.push(0);\n      } else {\n        int popped = stack.pop();\n        if (popped == 0) {\n          stack.push(stack.pop() + 1);\n        } else {\n          stack.push(stack.pop() + 2 * popped);\n        }\n      }\n    }\n    return stack.get(0);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "array-and-string::running-sum": {
      "statement": "Write a method, runningSum, that takes in a list of *numbers*. The method should return a new list of the same length where each element contains the running sum up to that index of the original list. ```plaintext For example, the i-th result should be the sum of all elements 0 to i: result[i] = numbers[0] + numbers[1] + numbers[2] + ... + numbers[i] ```",
      "examples": [
        "For example, the i-th result should be the sum of all elements 0 to i:\n\nresult[i] = numbers[0] + numbers[1] + numbers[2] + ... + numbers[i]",
        "runningSum(List.of(4, 2, 1, 6, 3, 6)); // -> [ 4, 6, 7, 13, 16, 22 ]",
        "runningSum(List.of(10, 5, -2, 1, 1)); // -> [ 10, 15, 13, 14, 15 ]"
      ],
      "testCases": [
        "For example, the i-th result should be the sum of all elements 0 to i:\n\nresult[i] = numbers[0] + numbers[1] + numbers[2] + ... + numbers[i]",
        "runningSum(List.of(4, 2, 1, 6, 3, 6)); // -> [ 4, 6, 7, 13, 16, 22 ]",
        "runningSum(List.of(10, 5, -2, 1, 1)); // -> [ 10, 15, 13, 14, 15 ]",
        "runningSum(List.of(12, 88, 0, -50, 30, 2)); // -> [ 12, 100, 100, 50, 80, 82 ]",
        "runningSum(List.of(2)); // -> [ 2 ]",
        "runningSum(List.of()); // -> [ ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "prefix sum",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<Integer> runningSum(List<Integer> numbers) {\n    int total = 0;\n    List<Integer> result = new ArrayList<>();\n    for (int num : numbers) {\n      total += num;\n      result.add(total);\n    }\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of array | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "running sum",
        "slug": "running-sum",
        "module": "Array and String",
        "premium": true,
        "verbose": "Find the running sum of an array of numbers.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Integer> runningSum(List<Integer> numbers) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<Integer> runningSum(List<Integer> numbers) {\n    int total = 0;\n    List<Integer> result = new ArrayList<>();\n    for (int num : numbers) {\n      total += num;\n      result.add(total);\n    }\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "array-and-string::has-subarray-sum": {
      "statement": "Write a method, hasSubarraySum, that takes in a list of numbers and a targetSum. The method should return a boolean indicating whether or not there exists a subarray of numbers that sums to the given target. A subarray is a consecutive series of one or more elements of the list.",
      "examples": [
        "hasSubarraySum(List.of(1, 3, 1, 4, 3), 8); // -> true",
        "hasSubarraySum(List.of(1, 3, 1, 4, 3), 2); // -> false",
        "hasSubarraySum(List.of(1, 3, 1, 1, 3), 2); // -> true"
      ],
      "testCases": [
        "hasSubarraySum(List.of(1, 3, 1, 4, 3), 8); // -> true",
        "hasSubarraySum(List.of(1, 3, 1, 4, 3), 2); // -> false",
        "hasSubarraySum(List.of(1, 3, 1, 1, 3), 2); // -> true",
        "hasSubarraySum(List.of(5), 5); // -> true",
        "hasSubarraySum(List.of(4, 2, 5, 1, 5, -2, 8), 9); // -> true",
        "hasSubarraySum(List.of(4, 2, 5, 1, 5, -2, 8), 10); // -> false",
        "hasSubarraySum(List.of(1, 1, 1, 1, 1, 1, 1, 1, 1), 9); // -> true",
        "hasSubarraySum(List.of(1, 1, 1, 1, 1, 1, 1, 1, 1), 10); // -> false",
        "Source.hasSubarraySum(List.of(1, 3, 1, 4, 3), 8) -> true",
        "Source.hasSubarraySum(List.of(1, 3, 1, 4, 3), 2) -> false",
        "Source.hasSubarraySum(List.of(1, 3, 1, 1, 3), 2) -> true",
        "Source.hasSubarraySum(List.of(5), 5) -> true",
        "Source.hasSubarraySum(List.of(4, 2, 5, 1, 5, -2, 8), 9) -> true",
        "Source.hasSubarraySum(List.of(4, 2, 5, 1, 5, -2, 8), 10) -> false",
        "Source.hasSubarraySum(List.of(1, 1, 1, 1, 1, 1, 1, 1, 1), 9) -> true",
        "Source.hasSubarraySum(List.of(1, 1, 1, 1, 1, 1, 1, 1, 1), 10) -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "brute force",
          "code": "import java.util.List;\n\nclass Source {\n  public static boolean hasSubarraySum(List<Integer> numbers, int targetSum) {\n    for (int start = 0; start < numbers.size(); start += 1) {\n      for (int end = start + 1; end <= numbers.size(); end += 1) {\n        int sum = 0;\n        for (int i = start; i < end; i += 1) {\n          sum += numbers.get(i);\n        }\n        if (sum == targetSum) {\n          return true;\n        }\n      }  \n    }\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of numbers | Time: O(n^3) | Space: O(1)"
        },
        {
          "title": "prefix sum",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static boolean hasSubarraySum(List<Integer> numbers, int targetSum) {\n    List<Integer> prefixSums = new ArrayList<>();\n    prefixSums.add(0);\n    int total = 0;\n    for (int num : numbers) {\n      total += num;\n      prefixSums.add(total);\n    }\n\n    for (int start = 0; start < prefixSums.size(); start += 1) {\n      for (int end = start + 1; end < prefixSums.size(); end += 1) {\n        if (prefixSums.get(end) - prefixSums.get(start) == targetSum) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of numbers | Time: O(n^2) | Space: O(n)"
        },
        {
          "title": "prefix sum with set",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashSet;\nimport java.util.Set;\n\nclass Source {\n  public static boolean hasSubarraySum(List<Integer> numbers, int targetSum) {\n    List<Integer> prefixSums = new ArrayList<>();\n    prefixSums.add(0);\n    int total = 0;\n    for (int num : numbers) {\n      total += num;\n      prefixSums.add(total);\n    }\n\n    Set<Integer> seen = new HashSet<>();\n    for (int current : prefixSums) {\n      int complement = current - targetSum;\n      if (seen.contains(complement)) {\n        return true;\n      }\n      seen.add(current);\n    }\n\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of numbers | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "has subarray sum",
        "slug": "has-subarray-sum",
        "module": "Array and String",
        "premium": true,
        "verbose": "Check if an array contains a subarray that sums to a target.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean hasSubarraySum(List<Integer> numbers, int targetSum) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\n\nclass Source {\n  public static boolean hasSubarraySum(List<Integer> numbers, int targetSum) {\n    for (int start = 0; start < numbers.size(); start += 1) {\n      for (int end = start + 1; end <= numbers.size(); end += 1) {\n        int sum = 0;\n        for (int i = start; i < end; i += 1) {\n          sum += numbers.get(i);\n        }\n        if (sum == targetSum) {\n          return true;\n        }\n      }  \n    }\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "array-and-string::subarray-sum-count": {
      "statement": "Write a method, subarraySumCount, that takes in a list of numbers and a targetSum. The method should return the number of subarrays that sum to the given target. A subarray is a consecutive series of one or more elements of the list.",
      "examples": [
        "subarraySumCount(\n  List.of(1, 3, 1, 4, -2, 3), \n  5\n);  // -> 3",
        "subarraySumCount(\n  List.of(1, 3, 1, 4, 3), \n  5\n); // -> 2",
        "subarraySumCount(\n  List.of(1, 3, 1, 4, 3), \n  2\n); // -> 0"
      ],
      "testCases": [
        "subarraySumCount(\n  List.of(1, 3, 1, 4, -2, 3), \n  5\n);  // -> 3",
        "subarraySumCount(\n  List.of(1, 3, 1, 4, 3), \n  5\n); // -> 2",
        "subarraySumCount(\n  List.of(1, 3, 1, 4, 3), \n  2\n); // -> 0",
        "subarraySumCount(\n  List.of(1, 3, 1, 4, 3), \n  8\n); // -> 2",
        "subarraySumCount(\n  List.of(1, 1, 1, 1), \n  2\n); // -> 3",
        "subarraySumCount(\n  List.of(-2, 1, 1, 1, -1, 1, 1, 1, 1), \n  3\n); // -> 8",
        "Source.subarraySumCount(List.of(1, 3, 1, 4, -2, 3), 5) -> 3",
        "Source.subarraySumCount(List.of(1, 3, 1, 4, 3), 5) -> 2",
        "Source.subarraySumCount(List.of(1, 3, 1, 4, 3), 2) -> 0",
        "Source.subarraySumCount(List.of(1, 3, 1, 4, 3), 8) -> 2",
        "Source.subarraySumCount(List.of(1, 1, 1, 1), 2) -> 3",
        "Source.subarraySumCount(List.of(-2, 1, 1, 1, -1, 1, 1, 1, 1), 3) -> 8"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "prefix sum with hash map",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.HashMap;\n\nclass Source {\n  public static int subarraySumCount(List<Integer> numbers, int targetSum) {\n    List<Integer> prefixSums = new ArrayList<>();\n    prefixSums.add(0);\n    int total = 0;\n    for (int num : numbers) {\n      total += num;\n      prefixSums.add(total);\n    }\n\n    Map<Integer, Integer> seen = new HashMap<>();\n    int count = 0;\n    for (int current : prefixSums) {\n      int complement = current - targetSum;\n      if (seen.containsKey(complement)) {\n        count += seen.get(complement);\n      }\n      if (!seen.containsKey(current)) {\n        seen.put(current, 0);\n      }\n      seen.put(current, seen.get(current) + 1);\n    }\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of numbers | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "subarray sum count",
        "slug": "subarray-sum-count",
        "module": "Array and String",
        "premium": true,
        "verbose": "Count the number of subarrays that sum to a target amount.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int subarraySumCount(List<Integer> numbers, int targetSum) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.HashMap;\n\nclass Source {\n  public static int subarraySumCount(List<Integer> numbers, int targetSum) {\n    List<Integer> prefixSums = new ArrayList<>();\n    prefixSums.add(0);\n    int total = 0;\n    for (int num : numbers) {\n      total += num;\n      prefixSums.add(total);\n    }\n\n    Map<Integer, Integer> seen = new HashMap<>();\n    int count = 0;\n    for (int current : prefixSums) {\n      int complement = current - targetSum;\n      if (seen.containsKey(complement)) {\n        count += seen.get(complement);\n      }\n      if (!seen.containsKey(current)) {\n        seen.put(current, 0);\n      }\n      seen.put(current, seen.get(current) + 1);\n    }\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "array-and-string::merge-sort": {
      "statement": "# merge sort Write a method, *mergeSort*, that takes in a list of numbers as an argument. The method should return a new list containing elements of the original list sorted in ascending order. Your method must implement the [merge sort algorithm](https://en.wikipedia.org/wiki/Merge_sort).",
      "examples": [
        "List<Integer> numbers = List.of(10, 4, 42, 5, 8, 100, 5, 6, 12, 40);\nSource.mergeSort(numbers);\n// -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]",
        "List<Integer> numbers = List.of(7, -30, -4, -1, 12, 0, 20);\nSource.mergeSort(numbers);\n// -> [ -30, -4, -1, 0, 7, 12, 20 ]",
        "List<Integer> numbers = List.of(8, 7, 6, 5, 4, 3, 2, 1, 0);\nSource.mergeSort(numbers);\n// -> [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]"
      ],
      "testCases": [
        "List<Integer> numbers = List.of(10, 4, 42, 5, 8, 100, 5, 6, 12, 40);\nSource.mergeSort(numbers);\n// -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]",
        "List<Integer> numbers = List.of(7, -30, -4, -1, 12, 0, 20);\nSource.mergeSort(numbers);\n// -> [ -30, -4, -1, 0, 7, 12, 20 ]",
        "List<Integer> numbers = List.of(8, 7, 6, 5, 4, 3, 2, 1, 0);\nSource.mergeSort(numbers);\n// -> [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]",
        "List<Integer> numbers = List.of( \n  72, 42, 16, 81, 84, 17,  2, 81, 22, 79, 86, 38, \n  77, 80, 81, 70, 81, 80, 35, 21, 89, 38, 57, 28, \n   4, 17, 50, 38, 68, 82, 22, 76, 45, 40, 67, 94, \n  37, 27, 81, 53, 36, 18, 28, 60, 45, 74, 40, 29, \n  18,  6, 28, 57, 42, 60, 64, 12, 78, 97, 96,  1, \n  20, 20, 61, 67, 82, 10, 63, 71, 39, 52, 37, 69, \n  37, 24, 66, 74, 15, 92, 49, 31, 56, 67, 50, 57, \n  79,  0, 21, 56, 82, 22,  4, 20, 91, 72, 58, 93, \n  99, 14, 42, 91 \n);\nSource.mergeSort(numbers);\n// -> [ \n//    0,  1,  2,  4,  4,  6, 10, 12, 14, 15, 16, 17, \n//   17, 18, 18, 20, 20, 20, 21, 21, 22, 22, 22, 24, \n//   27, 28, 28, 28, 29, 31, 35, 36, 37, 37, 37, 38, \n//   38, 38, 39, 40, 40, 42, 42, 42, 45, 45, 49, 50, \n//   50, 52, 53, 56, 56, 57, 57, 57, 58, 60, 60, 61, \n//   63, 64, 66, 67, 67, 67, 68, 69, 70, 71, 72, 72, \n//   74, 74, 76, 77, 78, 79, 79, 80, 80, 81, 81, 81, \n//   81, 81, 82, 82, 82, 84, 86, 89, 91, 91, 92, 93, \n//   94, 96, 97, 99 \n// ]",
        "List<Integer> numbers = new ArrayList<Integer>(Collections.nCopies(95000, 7));\nSource.mergeSort(numbers);\n// -> [7, 7, 7, 7, 7, ...]",
        "List<Integer> numbers = new ArrayList<Integer>(Collections.nCopies(120000, 7));\nSource.mergeSort(numbers);\n// -> [7, 7, 7, 7, 7, ...]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "merge sort",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<Integer> mergeSort(List<Integer> nums) {\n    if (nums.size() <= 1) {\n      return nums;\n    }\n    \n    int midIdx = (int) nums.size() / 2;\n    List<Integer> left = nums.subList(0, midIdx);\n    List<Integer> right = nums.subList(midIdx, nums.size());\n    List<Integer> sortedLeft = mergeSort(left);\n    List<Integer> sortedRight = mergeSort(right);\n    return merge(sortedLeft, sortedRight);\n  }\n  \n  public static List<Integer> merge(List<Integer> list1, List<Integer> list2) {\n    List<Integer> merged = new ArrayList<>();\n  \n    int i = 0;\n    int j = 0;\n    while (i < list1.size() && j < list2.size()) {\n      if (list1.get(i) < list2.get(j)) {\n        merged.add(list1.get(i));\n        i += 1;\n      } else {\n        merged.add(list2.get(j));\n        j += 1;\n      }\n    }\n    \n    merged.addAll(list1.subList(i, list1.size()));\n    merged.addAll(list2.subList(j, list2.size()));\n    return merged;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = array size | Time: O(nlogn) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "merge sort",
        "slug": "merge-sort",
        "module": "Array and String",
        "premium": true,
        "verbose": "Implement the classic merge sort algorithm.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Integer> mergeSort(List<Integer> nums) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<Integer> mergeSort(List<Integer> nums) {\n    if (nums.size() <= 1) {\n      return nums;\n    }\n    \n    int midIdx = (int) nums.size() / 2;\n    List<Integer> left = nums.subList(0, midIdx);\n    List<Integer> right = nums.subList(midIdx, nums.size());\n    List<Integer> sortedLeft = mergeSort(left);\n    List<Integer> sortedRight = mergeSort(right);\n    return merge(sortedLeft, sortedRight);\n  }\n  \n  public static List<Integer> merge(List<Integer> list1, List<Integer> list2) {\n    List<Integer> merged = new ArrayList<>();\n  \n    int i = 0;\n    int j = 0;\n    while (i < list1.size() && j < list2.size()) {\n      if (list1.get(i) < list2.get(j)) {\n        merged.add(list1.get(i));\n        i += 1;\n      } else {\n        merged.add(list2.get(j));\n        j += 1;\n      }\n    }\n    \n    merged.addAll(list1.subList(i, list1.size()));\n    merged.addAll(list2.subList(j, list2.size()));\n    return merged;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "array-and-string::combine-intervals": {
      "statement": "# combine intervals Write a method, combineIntervals, that takes in a list of intervals as an argument. Each interval is a list containing a pair of numbers representing a start and end time. Your method should combine overlapping intervals and return a list containing the combined intervals. For example: ```plaintext Given two intervals: [1, 4] and [3, 7] The intervals overlap and should be combined into: [1, 7] ``` You may return the combined intervals in any order. You can assume that the input list contains at least one interval and all intervals are valid with start < end.",
      "examples": [
        "Given two intervals:\n\n[1, 4] and [3, 7]\n\nThe intervals overlap and\nshould be combined into:\n\n[1, 7]",
        "List<List<Integer>> intervals = List.of(\n  List.of(1, 4),\n  List.of(12, 15),\n  List.of(3, 7),\n  List.of(8, 13)\n);\nSource.combineIntervals(intervals);\n// -> [ [1, 7], [8, 15] ]",
        "List<List<Integer>> intervals = List.of(\n  List.of(6, 8),\n  List.of(2, 9),\n  List.of(10, 12),\n  List.of(20, 24)\n);\nSource.combineIntervals(intervals);\n// -> [ [2, 9], [10, 12], [20, 24] ]"
      ],
      "testCases": [
        "Given two intervals:\n\n[1, 4] and [3, 7]\n\nThe intervals overlap and\nshould be combined into:\n\n[1, 7]",
        "List<List<Integer>> intervals = List.of(\n  List.of(1, 4),\n  List.of(12, 15),\n  List.of(3, 7),\n  List.of(8, 13)\n);\nSource.combineIntervals(intervals);\n// -> [ [1, 7], [8, 15] ]",
        "List<List<Integer>> intervals = List.of(\n  List.of(6, 8),\n  List.of(2, 9),\n  List.of(10, 12),\n  List.of(20, 24)\n);\nSource.combineIntervals(intervals);\n// -> [ [2, 9], [10, 12], [20, 24] ]",
        "List<List<Integer>> intervals = List.of(\n  List.of(3, 7),\n  List.of(5, 8),\n  List.of(1, 5)\n);\nSource.combineIntervals(intervals);\n// -> [ [1, 8] ]",
        "List<List<Integer>> intervals = List.of(\n  List.of(3, 7),\n  List.of(10, 13),\n  List.of(5, 8),\n  List.of(27, 31),\n  List.of(1, 5),\n  List.of(12, 16),\n  List.of(20, 22)\n);\nSource.combineIntervals(intervals);\n// -> [ [1, 8], [10, 16], [20, 22], [27, 31] ]",
        "List<List<Integer>> intervals = List.of(\n  List.of(3, 7),\n  List.of(10, 13),\n  List.of(5, 8),\n  List.of(27, 31),\n  List.of(1, 5),\n  List.of(12, 16),\n  List.of(20, 32)\n);\nSource.combineIntervals(intervals);\n// -> [ [1, 8], [10, 16], [20, 32] ]",
        "List<List<Integer>> intervals = List.of(\n  List.of(64, 70),\n  List.of(50, 55),\n  List.of(62, 65),\n  List.of(12, 50),\n  List.of(72, 300000)\n);\nSource.combineIntervals(intervals);\n// -> [ [12, 55], [62, 70], [72, 300000] ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "sort and combine",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.Comparator;\n\nclass SortByIntervalStart implements Comparator<List<Integer>> {\n  public int compare(List<Integer> intervalA, List<Integer> intervalB) {\n    return intervalA.get(0) - intervalB.get(0);\n  }\n}\n\nclass Source {\n  public static List<List<Integer>> combineIntervals(List<List<Integer>> intervals) {\n    List<List<Integer>> sortedIntervals = new ArrayList<>(intervals);\n    Collections.sort(sortedIntervals, new SortByIntervalStart());\n    \n    List<List<Integer>> combined = new ArrayList<>();\n    combined.add(new ArrayList<>(sortedIntervals.get(0)));\n    \n    for (List<Integer> currentInterval : sortedIntervals.subList(1, sortedIntervals.size())) {\n      List<Integer> lastInterval = combined.get(combined.size() - 1);\n      int lastEnd = lastInterval.get(1);\n      int currentStart = currentInterval.get(0);\n      int currentEnd = currentInterval.get(1);\n      \n      if (currentStart <= lastEnd) {\n        if (currentEnd > lastEnd) {\n          lastInterval.set(1, currentEnd);\n        }\n      } else {\n        combined.add(new ArrayList<>(currentInterval));\n      }\n    }\n    return combined;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of intervals | Time: O(nlogn) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "combine intervals",
        "slug": "combine-intervals",
        "module": "Array and String",
        "premium": true,
        "verbose": "Combine overlapping intervals.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<List<Integer>> combineIntervals(List<List<Integer>> intervals) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.Comparator;\n\nclass SortByIntervalStart implements Comparator<List<Integer>> {\n  public int compare(List<Integer> intervalA, List<Integer> intervalB) {\n    return intervalA.get(0) - intervalB.get(0);\n  }\n}\n\nclass Source {\n  public static List<List<Integer>> combineIntervals(List<List<Integer>> intervals) {\n    List<List<Integer>> sortedIntervals = new ArrayList<>(intervals);\n    Collections.sort(sortedIntervals, new SortByIntervalStart());\n    \n    List<List<Integer>> combined = new ArrayList<>();\n    combined.add(new ArrayList<>(sortedIntervals.get(0)));\n    \n    for (List<Integer> currentInterval : sortedIntervals.subList(1, sortedIntervals.size())) {\n      List<Integer> lastInterval = combined.get(combined.size() - 1);\n      int lastEnd = lastInterval.get(1);\n      int currentStart = currentInterval.get(0);\n      int currentEnd = currentInterval.get(1);\n      \n      if (currentStart <= lastEnd) {\n        if (currentEnd > lastEnd) {\n          lastInterval.set(1, currentEnd);\n        }\n      } else {\n        combined.add(new ArrayList<>(currentInterval));\n      }\n    }\n    return combined;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "array-and-string::binary-search": {
      "statement": "# binary search Write a method, binarySearch, that takes in a sorted list of numbers and a target. The method should return the index where the target can be found within the list. If the target is not found in the list, then return -1. You may assume that the input list contains unique numbers sorted in increasing order. Your method must implement the [binary search algorithm](https://en.wikipedia.org/wiki/Binarysearchalgorithm).",
      "examples": [
        "Source.binarySearch(List.of(0, 1, 2, 3, 4, 5, 6, 7, 8), 6); // -> 6",
        "Source.binarySearch(List.of(0, 6, 8, 12, 16, 19, 20, 24, 28), 27); // -> -1",
        "Source.binarySearch(List.of(0, 6, 8, 12, 16, 19, 20, 28), 8); // -> 2"
      ],
      "testCases": [
        "Source.binarySearch(List.of(0, 1, 2, 3, 4, 5, 6, 7, 8), 6); // -> 6",
        "Source.binarySearch(List.of(0, 6, 8, 12, 16, 19, 20, 24, 28), 27); // -> -1",
        "Source.binarySearch(List.of(0, 6, 8, 12, 16, 19, 20, 28), 8); // -> 2",
        "Source.binarySearch(List.of(0, 6, 8, 12, 16, 19, 20, 24, 28), 28); // -> 8",
        "Source.binarySearch(List.of(7, 9), 7); // -> 0",
        "Source.binarySearch(List.of(7, 9), 9); // -> 1",
        "Source.binarySearch(List.of(7, 9), 12); // -> -1",
        "Source.binarySearch(List.of(7), 7); // -> 0",
        "Source.binarySearch(List.of(), 7); // -> -1",
        "Source.binarySearch(List.of(0, 1, 2, 3, 4, 5, 6, 7, 8), 6) -> 6",
        "Source.binarySearch(List.of(0, 6, 8, 12, 16, 19, 20, 24, 28), 27) -> -1",
        "Source.binarySearch(List.of(0, 6, 8, 12, 16, 19, 20, 28), 8) -> 2",
        "Source.binarySearch(List.of(0, 6, 8, 12, 16, 19, 20, 24, 28), 28) -> 8",
        "Source.binarySearch(List.of(7, 9), 7) -> 0",
        "Source.binarySearch(List.of(7, 9), 9) -> 1",
        "Source.binarySearch(List.of(7, 9), 12) -> -1",
        "Source.binarySearch(List.of(7), 7) -> 0",
        "Source.binarySearch(List.of(), 7) -> -1"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "binary search",
          "code": "import java.util.List;\n\nclass Source {\n  public static int binarySearch(List<Integer> numbers, int target) {\n    int lo = 0;\n    int hi = numbers.size() - 1;\n    while (lo <= hi) {\n      int midIdx = (int) ((lo + hi) / 2);\n      int midVal = numbers.get(midIdx);\n      if (target < midVal) {\n        hi = midIdx - 1;\n      } else if (target > midVal) {\n        lo = midIdx + 1;\n      } else {\n        return midIdx;\n      }\n    }\n    return -1;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of numbers list | Time: O(logn) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "binary search",
        "slug": "binary-search",
        "module": "Array and String",
        "premium": true,
        "verbose": "Implement classic binary search on a sorted input.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int binarySearch(List<Integer> numbers, int target) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\n\nclass Source {\n  public static int binarySearch(List<Integer> numbers, int target) {\n    int lo = 0;\n    int hi = numbers.size() - 1;\n    while (lo <= hi) {\n      int midIdx = (int) ((lo + hi) / 2);\n      int midVal = numbers.get(midIdx);\n      if (target < midVal) {\n        hi = midIdx - 1;\n      } else if (target > midVal) {\n        lo = midIdx + 1;\n      } else {\n        return midIdx;\n      }\n    }\n    return -1;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "array-and-string::lexical-order": {
      "statement": "Write a method, lexicalOrder, that takes in 2 words and an alphabet string as an argument. The method should return true if the first word should appear before the second word if [lexically-ordered](https://en.wikipedia.org/wiki/Lexicographic_order) according to the given alphabet order. If the second word should appear first, then return false. Note that the alphabet string may be any arbitrary string. Intuitively, Lexical Order is like \"dictionary\" order: ``` Given the normal english alphabet: 'apple' appears before 'boot', because 'a' comes before 'b' in the alphabet. 'appetite' appears before 'apple', because 'e' comes before 'l' in the alphabet. 'app' appears before 'apple', because 'app' is a prefix of 'apple'. ``` You can assume that all characters are lowercase a-z. You can assume that the alphabet contains all 26 letters.",
      "examples": [
        "Given the normal english alphabet:\n\n'apple' appears before 'boot',\nbecause 'a' comes before 'b' in the alphabet.\n\n'appetite' appears before 'apple',\nbecause 'e' comes before 'l' in the alphabet.\n\n'app' appears before 'apple',\nbecause 'app' is a prefix of 'apple'.",
        "String alphabet = \"abcdefghijklmnopqrstuvwxyz\";\nSource.lexicalOrder(\"apple\", \"dock\", alphabet); // -> true",
        "String alphabet = \"abcdefghijklmnopqrstuvwxyz\";\nSource.lexicalOrder(\"apple\", \"ample\", alphabet); // -> false"
      ],
      "testCases": [
        "Given the normal english alphabet:\n\n'apple' appears before 'boot',\nbecause 'a' comes before 'b' in the alphabet.\n\n'appetite' appears before 'apple',\nbecause 'e' comes before 'l' in the alphabet.\n\n'app' appears before 'apple',\nbecause 'app' is a prefix of 'apple'.",
        "String alphabet = \"abcdefghijklmnopqrstuvwxyz\";\nSource.lexicalOrder(\"apple\", \"dock\", alphabet); // -> true",
        "String alphabet = \"abcdefghijklmnopqrstuvwxyz\";\nSource.lexicalOrder(\"apple\", \"ample\", alphabet); // -> false",
        "String alphabet = \"abcdefghijklmnopqrstuvwxyz\";\nSource.lexicalOrder(\"app\", \"application\", alphabet); // -> true",
        "String alphabet = \"abcdefghijklmnopqrstuvwxyz\";\nSource.lexicalOrder(\"backs\", \"backdoor\", alphabet); // -> false",
        "String alphabet = \"ghzstijbacdopnfklmeqrxyuvw\";\nSource.lexicalOrder(\"zoo\", \"dinner\", alphabet); // -> true",
        "String alphabet = \"ghzstijbacdopnfklmeqrxyuvw\";\nSource.lexicalOrder(\"leaper\", \"leap\", alphabet); // -> false",
        "String alphabet = \"ghzstijbacdopnfklmeqrxyuvw\";\nSource.lexicalOrder(\"backs\", \"backdoor\", alphabet); // -> true",
        "String alphabet = \"ghzstijbacdopnfklmeqrxyuvw\";\nSource.lexicalOrder(\"semper\", \"semper\", alphabet); // -> true",
        "Source.lexicalOrder(\"apple\", \"dock\", alphabet) -> true",
        "Source.lexicalOrder(\"apple\", \"ample\", alphabet) -> false",
        "Source.lexicalOrder(\"app\", \"application\", alphabet) -> true",
        "Source.lexicalOrder(\"backs\", \"backdoor\", alphabet) -> false",
        "Source.lexicalOrder(\"zoo\", \"dinner\", alphabet) -> true",
        "Source.lexicalOrder(\"leaper\", \"leap\", alphabet) -> false",
        "Source.lexicalOrder(\"backs\", \"backdoor\", alphabet) -> true",
        "Source.lexicalOrder(\"semper\", \"semper\", alphabet) -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "class Source {\n  public static boolean lexicalOrder(String word1, String word2, String alphabet) {\n    for (int i = 0; i < Math.max(word1.length(), word2.length()); i += 1) {\n      char char1 = i < word1.length() ? word1.charAt(i) : '\\0';\n      char char2 = i < word2.length() ? word2.charAt(i) : '\\0';\n      int value1 = alphabet.indexOf(char1);\n      int value2 = alphabet.indexOf(char2);\n      if (value1 < value2) {\n        return true;\n      } else if (value1 > value2) {\n        return false;\n      } \n    }\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of shorter string | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "lexical order",
        "slug": "lexical-order",
        "module": "Array and String",
        "premium": true,
        "verbose": "Given an arbitrary alphabet, check if two words are lexically ordered.",
        "stub": "class Source {\n  public static boolean lexicalOrder(String word1, String word2, String alphabet) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "class Source {\n  public static boolean lexicalOrder(String word1, String word2, String alphabet) {\n    for (int i = 0; i < Math.max(word1.length(), word2.length()); i += 1) {\n      char char1 = i < word1.length() ? word1.charAt(i) : '\\0';\n      char char2 = i < word2.length() ? word2.charAt(i) : '\\0';\n      int value1 = alphabet.indexOf(char1);\n      int value2 = alphabet.indexOf(char2);\n      if (value1 < value2) {\n        return true;\n      } else if (value1 > value2) {\n        return false;\n      } \n    }\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "array-and-string::detect-dictionary": {
      "statement": "Write a method, detectDictionary, that takes in a dictionary of words and an alphabet string. The method should return a boolean indicating whether or not all words of the dictionary are [lexically-ordered](https://en.wikipedia.org/wiki/Lexicographic_order) according to the alphabet. You can assume that all characters are lowercase a-z. You can assume that the alphabet contains all 26 letters.",
      "examples": [
        "List<String> dictionary = List.of(\"zoo\", \"tick\", \"tack\", \"door\");\nString alphabet = \"ghzstijbacdopnfklmeqrxyuvw\";\nSource.detectDictionary(dictionary, alphabet); // -> true",
        "List<String> dictionary = List.of(\"zoo\", \"tack\", \"tick\", \"door\");\nString alphabet = \"ghzstijbacdopnfklmeqrxyuvw\";\nSource.detectDictionary(dictionary, alphabet); // -> false",
        "List<String> dictionary = List.of(\"zoos\", \"zoo\", \"tick\", \"tack\", \"door\");\nString alphabet = \"ghzstijbacdopnfklmeqrxyuvw\";\nSource.detectDictionary(dictionary, alphabet); // -> false"
      ],
      "testCases": [
        "List<String> dictionary = List.of(\"zoo\", \"tick\", \"tack\", \"door\");\nString alphabet = \"ghzstijbacdopnfklmeqrxyuvw\";\nSource.detectDictionary(dictionary, alphabet); // -> true",
        "List<String> dictionary = List.of(\"zoo\", \"tack\", \"tick\", \"door\");\nString alphabet = \"ghzstijbacdopnfklmeqrxyuvw\";\nSource.detectDictionary(dictionary, alphabet); // -> false",
        "List<String> dictionary = List.of(\"zoos\", \"zoo\", \"tick\", \"tack\", \"door\");\nString alphabet = \"ghzstijbacdopnfklmeqrxyuvw\";\nSource.detectDictionary(dictionary, alphabet); // -> false",
        "List<String> dictionary = List.of(\"miles\", \"milestone\", \"proper\", \"process\", \"goal\");\nString alphabet = \"mnoijpqrshkltabcdefguvwzxy\";\nSource.detectDictionary(dictionary, alphabet); // -> true",
        "List<String> dictionary = List.of(\"miles\", \"milestone\", \"pint\", \"proper\", \"process\", \"goal\");\nString alphabet = \"mnoijpqrshkltabcdefguvwzxy\";\nSource.detectDictionary(dictionary, alphabet); // -> true",
        "List<String> dictionary = List.of(\"miles\", \"milestone\", \"pint\", \"proper\", \"process\", \"goal\", \"apple\");\nString alphabet = \"mnoijpqrshkltabcdefguvwzxy\";\nSource.detectDictionary(dictionary, alphabet); // -> false",
        "Source.detectDictionary(dictionary, alphabet) -> true",
        "Source.detectDictionary(dictionary, alphabet) -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.List;\n\nclass Source {\n  public static boolean detectDictionary(List<String> dictionary, String alphabet) {\n    for (int i = 0; i < dictionary.size() - 1; i += 1) {\n      String word1 = dictionary.get(i);\n      String word2 = dictionary.get(i + 1);\n      if (!lexicalOrder(word1, word2, alphabet)) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  public static boolean lexicalOrder(String word1, String word2, String alphabet) {\n    for (int i = 0; i < Math.max(word1.length(), word2.length()); i += 1) {\n      char char1 = i < word1.length() ? word1.charAt(i) : '\\0';\n      char char2 = i < word2.length() ? word2.charAt(i) : '\\0';\n      int value1 = alphabet.indexOf(char1);\n      int value2 = alphabet.indexOf(char2);\n      \n      if (value1 < value2) {\n        return true;\n      } else if (value1 > value2) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = # of words in dictionary | k = # length of longest word | Time: O(nk) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "detect dictionary",
        "slug": "detect-dictionary",
        "module": "Array and String",
        "premium": true,
        "verbose": "Given a dictionary and alphabet, check if the dictionary is correctly ordered.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean detectDictionary(List<String> dictionary, String alphabet) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\n\nclass Source {\n  public static boolean detectDictionary(List<String> dictionary, String alphabet) {\n    for (int i = 0; i < dictionary.size() - 1; i += 1) {\n      String word1 = dictionary.get(i);\n      String word2 = dictionary.get(i + 1);\n      if (!lexicalOrder(word1, word2, alphabet)) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  public static boolean lexicalOrder(String word1, String word2, String alphabet) {\n    for (int i = 0; i < Math.max(word1.length(), word2.length()); i += 1) {\n      char char1 = i < word1.length() ? word1.charAt(i) : '\\0';\n      char char2 = i < word2.length() ? word2.charAt(i) : '\\0';\n      int value1 = alphabet.indexOf(char1);\n      int value2 = alphabet.indexOf(char2);\n      \n      if (value1 < value2) {\n        return true;\n      } else if (value1 > value2) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "linked-list-ii::linked-palindrome": {
      "statement": "Write a method, linkedPalindrome, that takes in the head of a linked list as an argument. The method should return a boolean indicating whether or not the linked list is a palindrome. A palindrome is a sequence that is the same both forwards and backwards.",
      "examples": [
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(2);\nNode<Integer> c = new Node<>(7);\nNode<Integer> d = new Node<>(7);\nNode<Integer> e = new Node<>(2);\nNode<Integer> f = new Node<>(3);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// 3 -> 2 -> 7 -> 7 -> 2 -> 3\nSource.linkedPalindrome(a); // true",
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(2);\nNode<Integer> c = new Node<>(4);\n\na.next = b;\nb.next = c;\n\n// 3 -> 2 -> 4\nSource.linkedPalindrome(a); // false",
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(2);\nNode<Integer> c = new Node<>(3);\n\na.next = b;\nb.next = c;\n\n// 3 -> 2 -> 3\nSource.linkedPalindrome(a); // true"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(2);\nNode<Integer> c = new Node<>(7);\nNode<Integer> d = new Node<>(7);\nNode<Integer> e = new Node<>(2);\nNode<Integer> f = new Node<>(3);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// 3 -> 2 -> 7 -> 7 -> 2 -> 3\nSource.linkedPalindrome(a); // true",
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(2);\nNode<Integer> c = new Node<>(4);\n\na.next = b;\nb.next = c;\n\n// 3 -> 2 -> 4\nSource.linkedPalindrome(a); // false",
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(2);\nNode<Integer> c = new Node<>(3);\n\na.next = b;\nb.next = c;\n\n// 3 -> 2 -> 3\nSource.linkedPalindrome(a); // true",
        "Node<Integer> a = new Node<>(0);\nNode<Integer> b = new Node<>(1);\nNode<Integer> c = new Node<>(0);\nNode<Integer> d = new Node<>(1);\nNode<Integer> e = new Node<>(0);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\n\n// 0 -> 1 -> 0 -> 1 -> 0\nSource.linkedPalindrome(a); // true",
        "Node<Integer> a = new Node<>(0);\nNode<Integer> b = new Node<>(1);\nNode<Integer> c = new Node<>(0);\nNode<Integer> d = new Node<>(1);\nNode<Integer> e = new Node<>(1);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\n\n// 0 -> 1 -> 0 -> 1 -> 1\nSource.linkedPalindrome(a); // false",
        "Node<Integer> a = new Node<>(5);\n\n// 5\nSource.linkedPalindrome(a); // true",
        "Source.linkedPalindrome(null); // true",
        "Source.run(a) -> true",
        "Source.run(a) -> false",
        "Source.run(null) -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.ArrayList;\nimport java.util.List;\nimport java.util.Collections;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean linkedPalindrome(Node<T> head) {\n    List<T> values = new ArrayList<>();\n    Node<T> current = head;\n    while (current != null) {\n      values.add(current.val);\n      current = current.next;\n    }\n    List<T> copy = new ArrayList<>(values);\n    Collections.reverse(copy);\n    return values.equals(copy);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "linked palindrome",
        "slug": "linked-palindrome",
        "module": "Linked List II",
        "premium": true,
        "verbose": "Check if a linked list is a palindrome.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean linkedPalindrome(Node<T> head) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.ArrayList;\nimport java.util.List;\nimport java.util.Collections;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean linkedPalindrome(Node<T> head) {\n    List<T> values = new ArrayList<>();\n    Node<T> current = head;\n    while (current != null) {\n      values.add(current.val);\n      current = current.next;\n    }\n    List<T> copy = new ArrayList<>(values);\n    Collections.reverse(copy);\n    return values.equals(copy);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "linked-list-ii::middle-value": {
      "statement": "Write a method, middleValue, that takes in the head of a linked list as an argument. The method should return the value of the middle node in the linked list. If the linked list has an even number of nodes, then return the value of the second middle node. You may assume that the input list is non-empty.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\n\n// a -> b -> c -> d -> e\nSource.middleValue(a); // c",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// a -> b -> c -> d -> e -> f\nSource.middleValue(a); // d",
        "Node<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\nNode<String> z = new Node<>(\"z\");\n\nx.next = y;\ny.next = z;\n\n// x -> y -> z\nSource.middleValue(x); // y"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\n\n// a -> b -> c -> d -> e\nSource.middleValue(a); // c",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\n\n// a -> b -> c -> d -> e -> f\nSource.middleValue(a); // d",
        "Node<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\nNode<String> z = new Node<>(\"z\");\n\nx.next = y;\ny.next = z;\n\n// x -> y -> z\nSource.middleValue(x); // y",
        "Node<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\n\nx.next = y;\n\n// x -> y \nSource.middleValue(x); // y",
        "Node<String> q = new Node<>(\"q\");\n\n// q\nSource.middleValue(q); // q",
        "Source.run(a) -> \"c\"",
        "Source.run(a) -> \"d\"",
        "Source.run(x) -> \"y\"",
        "Source.run(q) -> \"q\""
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using a list",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> T middleValue(Node<T> head) {\n    List<T> values = new ArrayList<>();\n    Node<T> current = head;\n    while (current != null) {\n      values.add(current.val);\n      current = current.next;\n    }\n    return values.get(Integer.valueOf(values.size() / 2));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it  \n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "using two pointers",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> T middleValue(Node<T> head) {\n    Node<T> slow = head;\n    Node<T> fast = head;\n    while (fast != null && fast.next != null) {\n      slow = slow.next;\n      fast = fast.next.next;\n    }\n    return slow.val;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it  \n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "middle value",
        "slug": "middle-value",
        "module": "Linked List II",
        "premium": true,
        "verbose": "Get the value of the middle node in a linked list.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> T middleValue(Node<T> head) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> T middleValue(Node<T> head) {\n    List<T> values = new ArrayList<>();\n    Node<T> current = head;\n    while (current != null) {\n      values.add(current.val);\n      current = current.next;\n    }\n    return values.get(Integer.valueOf(values.size() / 2));\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it  \n  }\n}"
      }
    },
    "linked-list-ii::linked-list-cycle": {
      "statement": "Write a method, linkedListCycle, that takes in the head of a linked list as an argument. The method should return a boolean indicating whether or not the linked list contains a cycle.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = b; // cycle\n\n//         _______\n//       /        \\\n// a -> b -> c -> d \n\nSource.linkedListCycle(a);  // true",
        "Node<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\nNode<String> u = new Node<>(\"u\");\n\nq.next = r;\nr.next = s;\ns.next = t;\nt.next = u;\nu.next = q; // cycle\n\n//    ________________\n//  /                 \\\n// q -> r -> s -> t -> u \n\nSource.linkedListCycle(q);  // true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d \n\nSource.linkedListCycle(a);  // false"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = b; // cycle\n\n//         _______\n//       /        \\\n// a -> b -> c -> d \n\nSource.linkedListCycle(a);  // true",
        "Node<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\nNode<String> u = new Node<>(\"u\");\n\nq.next = r;\nr.next = s;\ns.next = t;\nt.next = u;\nu.next = q; // cycle\n\n//    ________________\n//  /                 \\\n// q -> r -> s -> t -> u \n\nSource.linkedListCycle(q);  // true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.next = b;\nb.next = c;\nc.next = d;\n\n// a -> b -> c -> d \n\nSource.linkedListCycle(a);  // false",
        "Node<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\nNode<String> u = new Node<>(\"u\");\n\nq.next = r;\nr.next = s;\ns.next = t;\nt.next = u;\nu.next = t; // cycle\n\n//                   __\n//                 /   \\\n// q -> r -> s -> t -> u \n\nSource.linkedListCycle(q);  // true",
        "Node<String> p = new Node<>(\"p\");\n\n// p\n\nSource.linkedListCycle(p); // false",
        "Source.linkedListCycle(null); // false",
        "Source.run(a) -> true",
        "Source.run(q) -> true",
        "Source.run(a) -> false",
        "Source.run(p) -> false",
        "Source.run(null) -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using a set",
          "code": "import java.util.HashSet;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean linkedListCycle(Node<T> head) {\n    HashSet<T> values = new HashSet<>();\n    Node<T> current = head;\n    while (current != null) {\n      if (values.contains(current.val)) {\n        return true;\n      }\n      values.add(current.val);\n      current = current.next;\n    }\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        },
        {
          "title": "using two pointers",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean linkedListCycle(Node<T> head) {\n    Node<T> slow = head;\n    Node<T> fast = head;\n    boolean firstIteration = true;\n    while (fast != null && fast.next != null) {\n      if (slow == fast && !firstIteration) {\n        return true;\n      }\n      slow = slow.next;\n      fast = fast.next.next;\n      firstIteration = false;\n    }\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "linked list cycle",
        "slug": "linked-list-cycle",
        "module": "Linked List II",
        "premium": true,
        "verbose": "Check if a linked list contains a cycle.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean linkedListCycle(Node<T> head) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.HashSet;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean linkedListCycle(Node<T> head) {\n    HashSet<T> values = new HashSet<>();\n    Node<T> current = head;\n    while (current != null) {\n      if (values.contains(current.val)) {\n        return true;\n      }\n      values.add(current.val);\n      current = current.next;\n    }\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "linked-list-ii::undupe-sorted-linked-list": {
      "statement": "Write a method that takes in a linked list that contains values in increasing order. The method should return a new linked list containing the original values, with duplicates removed. The relative order of values in the resulting linked list should be unchanged. You must create and return a new set of linked list nodes and not just modify the input nodes.",
      "examples": [
        "Node<Integer> a = new Node<>(4);\nNode<Integer> b = new Node<>(4);\nNode<Integer> c = new Node<>(6);\nNode<Integer> d = new Node<>(6);\nNode<Integer> e = new Node<>(6);\nNode<Integer> f = new Node<>(7);\nNode<Integer> g = new Node<>(7);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\nf.next = g;\n\n// 4 -> 4 -> 6 -> 6 -> 6 -> 7 -> 7\n\nundupeSortedLinkedList(a); // 4 -> 6 -> 7",
        "Node<Integer> w = new Node<>(5);\nNode<Integer> x = new Node<>(5);\nNode<Integer> y = new Node<>(5);\nNode<Integer> z = new Node<>(8);\n\nw.next = x;\nx.next = y;\ny.next = z;\n\n// 5 -> 5 -> 5 -> 8\n\nundupeSortedLinkedList(x); // 5 -> 8",
        "Node<Integer> p = new Node<>(10);\nNode<Integer> q = new Node<>(20);\nNode<Integer> r = new Node<>(30);\n\np.next = q;\nq.next = r;\n\n// 10 -> 20 -> 30\n\nundupeSortedLinkedList(p); // 10 -> 20 -> 30"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(4);\nNode<Integer> b = new Node<>(4);\nNode<Integer> c = new Node<>(6);\nNode<Integer> d = new Node<>(6);\nNode<Integer> e = new Node<>(6);\nNode<Integer> f = new Node<>(7);\nNode<Integer> g = new Node<>(7);\n\na.next = b;\nb.next = c;\nc.next = d;\nd.next = e;\ne.next = f;\nf.next = g;\n\n// 4 -> 4 -> 6 -> 6 -> 6 -> 7 -> 7\n\nundupeSortedLinkedList(a); // 4 -> 6 -> 7",
        "Node<Integer> w = new Node<>(5);\nNode<Integer> x = new Node<>(5);\nNode<Integer> y = new Node<>(5);\nNode<Integer> z = new Node<>(8);\n\nw.next = x;\nx.next = y;\ny.next = z;\n\n// 5 -> 5 -> 5 -> 8\n\nundupeSortedLinkedList(x); // 5 -> 8",
        "Node<Integer> p = new Node<>(10);\nNode<Integer> q = new Node<>(20);\nNode<Integer> r = new Node<>(30);\n\np.next = q;\nq.next = r;\n\n// 10 -> 20 -> 30\n\nundupeSortedLinkedList(p); // 10 -> 20 -> 30"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> undupeSortedLinkedList(Node<T> head) {\n    Node<T> dummyHead = new Node<>(null);\n    Node<T> tail = dummyHead;\n\n    Node<T> current = head;\n    while (current != null) {\n      if (current.val != tail.val) {\n        tail.next = new Node<>(current.val);\n        tail = tail.next;\n      }\n      current = current.next;\n    }\n    \n    return dummyHead.next;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "undupe sorted linked list",
        "slug": "undupe-sorted-linked-list",
        "module": "Linked List II",
        "premium": true,
        "verbose": "Remove duplicates from a sorted linked list.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> undupeSortedLinkedList(Node<T> head) {\n    // todo\n    return;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> undupeSortedLinkedList(Node<T> head) {\n    Node<T> dummyHead = new Node<>(null);\n    Node<T> tail = dummyHead;\n\n    Node<T> current = head;\n    while (current != null) {\n      if (current.val != tail.val) {\n        tail.next = new Node<>(current.val);\n        tail = tail.next;\n      }\n      current = current.next;\n    }\n    \n    return dummyHead.next;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}"
      }
    },
    "linked-list-ii::create-linked-list": {
      "statement": "Write a method, createLinkedList, that takes in a list of values as an argument. The method should create a linked list containing each element of the list as the values of the nodes. The method should return the head of the linked list.",
      "examples": [
        "Source.createLinkedList(List.of(\"h\", \"e\", \"y\"));\n// h -> e -> y",
        "Source.createLinkedList(List.of(1, 7, 1, 8));\n// 1 -> 7 -> 1 -> 8",
        "Source.createLinkedList(List.of(\"a\"));\n// a"
      ],
      "testCases": [
        "Source.createLinkedList(List.of(\"h\", \"e\", \"y\"));\n// h -> e -> y",
        "Source.createLinkedList(List.of(1, 7, 1, 8));\n// 1 -> 7 -> 1 -> 8",
        "Source.createLinkedList(List.of(\"a\"));\n// a",
        "Source.createLinkedList(List.of());\n// null"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> createLinkedList(List<T> values) {\n    Node<T> dummyHead = new Node<>(null);\n    Node<T> tail = dummyHead;\n    for (T val : values) {\n      Node<T> newNode = new Node<>(val);\n      tail.next = newNode;\n      tail = newNode;\n    }\n    return dummyHead.next;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        },
        {
          "title": "recursive",
          "code": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> createLinkedList(List<T> values) {\n    return createLinkedList(values, 0);\n  }\n  \n  public static <T> Node<T> createLinkedList(List<T> values, int i) {\n    if (i == values.size()) {\n      return null;\n    }\n    \n    Node<T> newNode = new Node<>(values.get(i));\n    newNode.next = createLinkedList(values, i + 1);\n    return newNode;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of linked list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "create linked list",
        "slug": "create-linked-list",
        "module": "Linked List II",
        "premium": true,
        "verbose": "Create a singly linked list from an array of values.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> createLinkedList(List<T> values) {\n    // todo\n    return;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
        "solutionCode": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static <T> Node<T> createLinkedList(List<T> values) {\n    Node<T> dummyHead = new Node<>(null);\n    Node<T> tail = dummyHead;\n    for (T val : values) {\n      Node<T> newNode = new Node<>(val);\n      tail.next = newNode;\n      tail = newNode;\n    }\n    return dummyHead.next;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "linked-list-ii::build-a-queue": {
      "statement": "Implement the enqueue and dequeue methods for the existing `Queue` class. The enqueue method should add a given value into the queue. The dequeue should return and remove an item from the queue following first-in, first-out order. Your implementation should use a linked-list and not any built in containers.",
      "examples": [
        "Queue<String> queue = new Queue<>();\nqueue.enqueue(\"a\");\nqueue.size(); // -> 1\nqueue.dequeue(); // -> a\nqueue.enqueue(\"b\");\nqueue.enqueue(\"c\");\nqueue.size(); // -> 2\nqueue.dequeue(); // -> b\nqueue.dequeue(); // -> c\nqueue.size(); // -> 0",
        "Queue<String> queue = new Queue<>();\nqueue.enqueue(\"a\");\nqueue.enqueue(\"b\");\nqueue.enqueue(\"c\");\nqueue.dequeue(); // -> a\nqueue.enqueue(\"d\");\nqueue.enqueue(\"e\");\nqueue.size(); // -> 4\nqueue.dequeue(); // -> b\nqueue.dequeue(); // -> c\nqueue.dequeue(); // -> d\nqueue.dequeue(); // -> e\nqueue.enqueue(\"x\");\nqueue.enqueue(\"y\");\nqueue.size(); // -> 2\nqueue.dequeue(); // -> x\nqueue.dequeue(); // -> y",
        "Queue<Integer> queue = new Queue<>();\nfor (int i = 1; i <= 150000; i += 1) {\n  queue.enqueue(i);\n}\nfor (int i = 1; i <= 149999; i += 1) {\n  queue.dequeue();\n}\nqueue.size(); // -> 1\nqueue.dequeue(); // -> 150000"
      ],
      "testCases": [
        "Queue<String> queue = new Queue<>();\nqueue.enqueue(\"a\");\nqueue.size(); // -> 1\nqueue.dequeue(); // -> a\nqueue.enqueue(\"b\");\nqueue.enqueue(\"c\");\nqueue.size(); // -> 2\nqueue.dequeue(); // -> b\nqueue.dequeue(); // -> c\nqueue.size(); // -> 0",
        "Queue<String> queue = new Queue<>();\nqueue.enqueue(\"a\");\nqueue.enqueue(\"b\");\nqueue.enqueue(\"c\");\nqueue.dequeue(); // -> a\nqueue.enqueue(\"d\");\nqueue.enqueue(\"e\");\nqueue.size(); // -> 4\nqueue.dequeue(); // -> b\nqueue.dequeue(); // -> c\nqueue.dequeue(); // -> d\nqueue.dequeue(); // -> e\nqueue.enqueue(\"x\");\nqueue.enqueue(\"y\");\nqueue.size(); // -> 2\nqueue.dequeue(); // -> x\nqueue.dequeue(); // -> y",
        "Queue<Integer> queue = new Queue<>();\nfor (int i = 1; i <= 150000; i += 1) {\n  queue.enqueue(i);\n}\nfor (int i = 1; i <= 149999; i += 1) {\n  queue.dequeue();\n}\nqueue.size(); // -> 1\nqueue.dequeue(); // -> 150000"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "class Source {\n  static class Node<T> {\n    T val;\n    Node<T> next;\n    \n    public Node(T val) {\n      this.val = val;\n      this.next = null;\n    }\n  }\n\n  static class Queue<T> {\n    private Node<T> head;\n    private Node<T> tail;\n    private int size;\n\n    public Queue() {\n      this.head = null;\n      this.tail = null;\n      this.size = 0;\n    }\n\n    public int size() {\n      return this.size;\n    }\n    \n    public void enqueue(T val) {\n      if (this.size == 0) {\n        this.head = new Node<>(val);\n        this.tail = this.head;\n      } else {\n        this.tail.next = new Node<>(val);\n        this.tail = this.tail.next;\n      }\n      this.size += 1;\n    }\n\n    public T dequeue() {\n      if (this.size == 0) {\n        return null;\n      }\n\n      T value = this.head.val;\n      if (this.size == 1) {\n        this.head = null;\n        this.tail = null;\n      } else {\n        this.head = this.head.next;\n      }\n      this.size -= 1;\n      return value;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
          "complexity": "n = number of items currently on the Queue | Total Queue Space: O(n) | enqueue | Time: O(1) | Space: O(1) | dequeue | Time: O(1) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "build a queue",
        "slug": "build-a-queue",
        "module": "Linked List II",
        "premium": true,
        "verbose": "Implement a Queue from scratch",
        "stub": "\n\nclass Source {\n  static class Node<T> {\n    T val;\n    Node<T> next;\n    \n    public Node(T val) {\n      this.val = val;\n      this.next = null;\n    }\n  }\n\n  static class Queue<T> {\n    private Node<T> head;\n    private Node<T> tail;\n    private int size;\n\n    public Queue() {\n      this.head = null;\n      this.tail = null;\n      this.size = 0;\n    }\n\n    public int size() {\n      return this.size;\n    }\n    \n    public void enqueue(T val) {\n      // todo\n    }\n\n    public T dequeue() {\n      // todo\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
        "solutionCode": "class Source {\n  static class Node<T> {\n    T val;\n    Node<T> next;\n    \n    public Node(T val) {\n      this.val = val;\n      this.next = null;\n    }\n  }\n\n  static class Queue<T> {\n    private Node<T> head;\n    private Node<T> tail;\n    private int size;\n\n    public Queue() {\n      this.head = null;\n      this.tail = null;\n      this.size = 0;\n    }\n\n    public int size() {\n      return this.size;\n    }\n    \n    public void enqueue(T val) {\n      if (this.size == 0) {\n        this.head = new Node<>(val);\n        this.tail = this.head;\n      } else {\n        this.tail.next = new Node<>(val);\n        this.tail = this.tail.next;\n      }\n      this.size += 1;\n    }\n\n    public T dequeue() {\n      if (this.size == 0) {\n        return null;\n      }\n\n      T value = this.head.val;\n      if (this.size == 1) {\n        this.head = null;\n        this.tail = null;\n      } else {\n        this.head = this.head.next;\n      }\n      this.size -= 1;\n      return value;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}"
      }
    },
    "linked-list-ii::add-lists": {
      "statement": "Write a method, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are *reversed*; this means that the least significant digit of the number is the head. The method should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well. You must do this by traversing through the linked lists once. ```plaintext Say we wanted to compute 621 + 354 normally. The sum is 975: 621 + 354 ----- 975 Then, the reversed linked list format of this problem would appear as: 1 -> 2 -> 6 + 4 -> 5 -> 3 -------------- 5 -> 7 -> 9 ```",
      "examples": [
        "Say we wanted to compute 621 + 354 normally. The sum is 975:\n\n   621\n + 354\n -----\n   975\n\nThen, the reversed linked list format of this problem would appear as:\n\n    1 -> 2 -> 6\n +  4 -> 5 -> 3\n --------------\n    5 -> 7 -> 9",
        "//   621\n// + 354\n// -----\n//   975\n\nNode<Integer> a1 = new Node<>(1);\nNode<Integer> a2 = new Node<>(2);\nNode<Integer> a3 = new Node<>(6);\na1.next = a2;\na2.next = a3;\n// 1 -> 2 -> 6\n\nNode<Integer> b1 = new Node<>(4);\nNode<Integer> b2 = new Node<>(5);\nNode<Integer> b3 = new Node<>(3);\nb1.next = b2;\nb2.next = b3;\n// 4 -> 5 -> 3\n\nSource.addLists(a1, b1);\n// 5 -> 7 -> 9",
        "//  7541\n// +  32\n// -----\n//  7573\n\nNode<Integer> a1 = new Node<>(1);\nNode<Integer> a2 = new Node<>(4);\nNode<Integer> a3 = new Node<>(5);\nNode<Integer> a4 = new Node<>(7);\na1.next = a2;\na2.next = a3;\na3.next = a4;\n// 1 -> 4 -> 5 -> 7\n\nNode<Integer> b1 = new Node<>(2);\nNode<Integer> b2 = new Node<>(3);\nb1.next = b2;\n// 2 -> 3 \n\nSource.addLists(a1, b1);\n// 3 -> 7 -> 5 -> 7"
      ],
      "testCases": [
        "Say we wanted to compute 621 + 354 normally. The sum is 975:\n\n   621\n + 354\n -----\n   975\n\nThen, the reversed linked list format of this problem would appear as:\n\n    1 -> 2 -> 6\n +  4 -> 5 -> 3\n --------------\n    5 -> 7 -> 9",
        "//   621\n// + 354\n// -----\n//   975\n\nNode<Integer> a1 = new Node<>(1);\nNode<Integer> a2 = new Node<>(2);\nNode<Integer> a3 = new Node<>(6);\na1.next = a2;\na2.next = a3;\n// 1 -> 2 -> 6\n\nNode<Integer> b1 = new Node<>(4);\nNode<Integer> b2 = new Node<>(5);\nNode<Integer> b3 = new Node<>(3);\nb1.next = b2;\nb2.next = b3;\n// 4 -> 5 -> 3\n\nSource.addLists(a1, b1);\n// 5 -> 7 -> 9",
        "//  7541\n// +  32\n// -----\n//  7573\n\nNode<Integer> a1 = new Node<>(1);\nNode<Integer> a2 = new Node<>(4);\nNode<Integer> a3 = new Node<>(5);\nNode<Integer> a4 = new Node<>(7);\na1.next = a2;\na2.next = a3;\na3.next = a4;\n// 1 -> 4 -> 5 -> 7\n\nNode<Integer> b1 = new Node<>(2);\nNode<Integer> b2 = new Node<>(3);\nb1.next = b2;\n// 2 -> 3 \n\nSource.addLists(a1, b1);\n// 3 -> 7 -> 5 -> 7",
        "//   39\n// + 47\n// ----\n//   86\n\nNode<Integer> a1 = new Node<>(9);\nNode<Integer> a2 = new Node<>(3);\na1.next = a2;\n// 9 -> 3\n\nNode<Integer> b1 = new Node<>(7);\nNode<Integer> b2 = new Node<>(4);\nb1.next = b2;\n// 7 -> 4\n\nSource.addLists(a1, b1);\n// 6 -> 8",
        "//   89\n// + 47\n// ----\n//  136\n\nNode<Integer> a1 = new Node<>(9);\nNode<Integer> a2 = new Node<>(8);\na1.next = a2;\n// 9 -> 8\n\nNode<Integer> b1 = new Node<>(7);\nNode<Integer> b2 = new Node<>(4);\nb1.next = b2;\n// 7 -> 4\n\nSource.addLists(a1, b1);\n// 6 -> 3 -> 1",
        "//   999\n//  +  6\n//  ----\n//  1005\n\nNode<Integer> a1 = new Node<>(9);\nNode<Integer> a2 = new Node<>(9);\nNode<Integer> a3 = new Node<>(9);\na1.next = a2;\na2.next = a3;\n// 9 -> 9 -> 9\n\nNode<Integer> b1 = new Node<>(6);\n// 6\n\nSource.addLists(a1, b1);\n// 5 -> 0 -> 0 -> 1"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "iterative",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static Node<Integer> addLists(Node<Integer> head1, Node<Integer> head2) {\n    Node<Integer> dummyHead = new Node<>(0);\n    Node<Integer> tail = dummyHead;\n    Node<Integer> current1 = head1;\n    Node<Integer> current2 = head2;\n    int carry = 0;\n    while (current1 != null || current2 != null || carry > 0) {\n      int value1 = current1 == null ? 0 : current1.val;\n      int value2 = current2 == null ? 0 : current2.val;\n      int sum = value1 + value2 + carry; \n      int digit = sum % 10;\n      carry = sum >= 10 ? 1 : 0;\n      tail.next = new Node<>(digit);\n      tail = tail.next;\n      if (current1 != null) {\n        current1 = current1.next;\n      }\n      if (current2 != null) {\n        current2 = current2.next;\n      }\n    }\n    return dummyHead.next;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of list 1 | m = length of list 2 | Time: O(max(n, m)) | Space: O(max(n, m))"
        },
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static Node<Integer> addLists(Node<Integer> head1, Node<Integer> head2) {\n    return addLists(head1, head2, 0);\n  }\n  \n  public static Node<Integer> addLists(Node<Integer> head1, Node<Integer> head2, int carry) {\n    if (head1 == null && head2 == null && carry == 0) {\n      return null;\n    }\n    int value1 = head1 == null ? 0 : head1.val;\n    int value2 = head2 == null ? 0 : head2.val;\n    int sum = value1 + value2 + carry;\n    int digit = sum % 10;\n    int nextCarry = sum >= 10 ? 1 : 0;\n    Node<Integer> newNode = new Node<>(digit);\n    Node<Integer> next1 = head1 == null ? head1 : head1.next;\n    Node<Integer> next2 = head2 == null ? head2 : head2.next;\n    newNode.next = addLists(next1, next2, nextCarry);\n    return newNode;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of list 1 | m = length of list 2 | Time: O(max(n, m)) | Space: O(max(n, m))"
        }
      ],
      "meta": {
        "name": "add lists",
        "slug": "add-lists",
        "module": "Linked List II",
        "premium": true,
        "verbose": "Add two linked lists representing numbers.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> next;\n  \n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static Node<Integer> addLists(Node<Integer> head1, Node<Integer> head2) {\n    // todo\n    return;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  } \n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> next;\n\n  public Node(T val) {\n    this.val = val;\n    this.next = null;\n  }\n}\n\nclass Source {\n  public static Node<Integer> addLists(Node<Integer> head1, Node<Integer> head2) {\n    Node<Integer> dummyHead = new Node<>(0);\n    Node<Integer> tail = dummyHead;\n    Node<Integer> current1 = head1;\n    Node<Integer> current2 = head2;\n    int carry = 0;\n    while (current1 != null || current2 != null || carry > 0) {\n      int value1 = current1 == null ? 0 : current1.val;\n      int value2 = current2 == null ? 0 : current2.val;\n      int sum = value1 + value2 + carry; \n      int digit = sum % 10;\n      carry = sum >= 10 ? 1 : 0;\n      tail.next = new Node<>(digit);\n      tail = tail.next;\n      if (current1 != null) {\n        current1 = current1.next;\n      }\n      if (current2 != null) {\n        current2 = current2.next;\n      }\n    }\n    return dummyHead.next;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-ii::lowest-common-ancestor": {
      "statement": "# lowest common ancestor Write a method, *lowestCommonAncestor*, that takes in the root of a binary tree and two values. The method should return the value of the lowest common ancestor of the two values in the tree. You may assume that the tree values are unique and the tree is non-empty. Note that a node may be considered an ancestor of itself. #### example tree 1 ```java Node a = new Node<>(\"a\"); Node b = new Node<>(\"b\"); Node c = new Node<>(\"c\"); Node d = new Node<>(\"d\"); Node e = new Node<>(\"e\"); Node f = new Node<>(\"f\"); Node g = new Node<>(\"g\"); Node h = new Node<>(\"h\"); a.left = b; a.right = c; b.left = d; b.right = e; c.right = f; e.left = g; e.right = h; // a // / \\ // b c // / \\ \\ // d e f // / \\ // g h ```",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\n\n//      a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h",
        "Source.lowestCommonAncestor(a, \"d\", \"h\"); // b",
        "Source.lowestCommonAncestor(a, \"d\", \"g\"); // b"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\n\n//      a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h",
        "Source.lowestCommonAncestor(a, \"d\", \"h\"); // b",
        "Source.lowestCommonAncestor(a, \"d\", \"g\"); // b",
        "Source.lowestCommonAncestor(a, \"g\", \"c\"); // a",
        "Source.lowestCommonAncestor(a, \"b\", \"g\"); // b",
        "Source.lowestCommonAncestor(a, \"f\", \"c\"); // c",
        "Node<String> l = new Node<>(\"l\");\nNode<String> m = new Node<>(\"m\");\nNode<String> n = new Node<>(\"n\");\nNode<String> o = new Node<>(\"o\");\nNode<String> p = new Node<>(\"p\");\nNode<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\n\nl.left = m;\nl.right = n;\nn.left = o;\nn.right = p;\no.left = q;\no.right = r;\np.left = s;\np.right = t;\n\n//        l\n//     /     \\\n//    m       n\n//         /    \\\n//         o     p\n//        / \\   / \\\n//       q   r s   t",
        "Source.lowestCommonAncestor(l, \"r\", \"p\"); // n",
        "Source.lowestCommonAncestor(l, \"m\", \"o\"); // l",
        "Source.lowestCommonAncestor(l, \"t\", \"q\"); // n",
        "Source.lowestCommonAncestor(l, \"s\", \"p\"); // p",
        "Source.lowestCommonAncestor(root, \"d\", \"h\") -> \"b\"",
        "Source.lowestCommonAncestor(root, \"d\", \"g\") -> \"b\"",
        "Source.lowestCommonAncestor(root, \"g\", \"c\") -> \"a\"",
        "Source.lowestCommonAncestor(root, \"b\", \"g\") -> \"b\"",
        "Source.lowestCommonAncestor(root, \"f\", \"c\") -> \"c\"",
        "Source.lowestCommonAncestor(root, \"r\", \"p\") -> \"n\"",
        "Source.lowestCommonAncestor(root, \"m\", \"o\") -> \"l\"",
        "Source.lowestCommonAncestor(root, \"t\", \"q\") -> \"n\"",
        "Source.lowestCommonAncestor(root, \"s\", \"p\") -> \"p\""
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first path",
          "code": "import java.util.ArrayList;\nimport java.util.List;\nimport java.util.HashSet;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static String lowestCommonAncestor(Node<String> root, String val1, String val2) {\n    List<String> path1 = findPath(root, val1);\n    List<String> path2 = findPath(root, val2);\n    HashSet<String> set2 = new HashSet<>(path2);\n    for (String val : path1) {\n      if (set2.contains(val)) {\n        return val;\n      }\n    }\n    return null;\n  }\n  \n  public static List<String> findPath(Node<String> root, String targetVal) {\n    if (root == null) {\n      return null;\n    }\n    \n    if (root.val == targetVal) {\n      List<String> newList = new ArrayList<>();\n      newList.add(root.val);\n      return newList;\n    }\n    \n    List<String> leftPath = findPath(root.left, targetVal);\n    if (leftPath != null) {\n      leftPath.add(root.val);\n      return leftPath;\n    }\n    \n    List<String> rightPath = findPath(root.right, targetVal);\n    if (rightPath != null) {\n      rightPath.add(root.val);\n      return rightPath;\n    }\n    \n    return null;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "lowest common ancestor",
        "slug": "lowest-common-ancestor",
        "module": "Binary Tree II",
        "premium": true,
        "verbose": "Find the lowest common ancestor of two nodes in a binary tree",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static String lowestCommonAncestor(Node<String> root, String val1, String val2) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.ArrayList;\nimport java.util.List;\nimport java.util.HashSet;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static String lowestCommonAncestor(Node<String> root, String val1, String val2) {\n    List<String> path1 = findPath(root, val1);\n    List<String> path2 = findPath(root, val2);\n    HashSet<String> set2 = new HashSet<>(path2);\n    for (String val : path1) {\n      if (set2.contains(val)) {\n        return val;\n      }\n    }\n    return null;\n  }\n  \n  public static List<String> findPath(Node<String> root, String targetVal) {\n    if (root == null) {\n      return null;\n    }\n    \n    if (root.val == targetVal) {\n      List<String> newList = new ArrayList<>();\n      newList.add(root.val);\n      return newList;\n    }\n    \n    List<String> leftPath = findPath(root.left, targetVal);\n    if (leftPath != null) {\n      leftPath.add(root.val);\n      return leftPath;\n    }\n    \n    List<String> rightPath = findPath(root.right, targetVal);\n    if (rightPath != null) {\n      rightPath.add(root.val);\n      return rightPath;\n    }\n    \n    return null;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-ii::flip-tree": {
      "statement": "# flip tree Write a method, flipTree, that takes in the root of a binary tree. The method should flip the binary tree, turning left subtrees into right subtrees and vice-versa. This flipping should occur **in-place** by modifying the original tree. The method should return the root of the tree.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\n\n//      a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h\n\nSource.flipTree(a); \n\n//       a\n//    /    \\\n//   c      b\n//  /     /   \\\n// f     e    d\n//     /  \\\n//    h    g",
        "Node<String> u = new Node<>(\"u\");\nNode<String> t = new Node<>(\"t\");\nNode<String> s = new Node<>(\"s\");\nNode<String> r = new Node<>(\"r\");\nNode<String> q = new Node<>(\"q\");\nNode<String> p = new Node<>(\"p\");\n\nu.left = t;\nu.right = s;\ns.right = r;\nr.left = q;\nr.right = p;\n\n//     u\n//  /    \\\n// t      s\n//         \\\n//         r\n//        / \\\n//        q  p\n\nSource.flipTree(u);\n\n//           u\n//        /    \\\n//       s      t\n//      /\n//     r\n//    / \\\n//   p  q",
        "Node<String> l = new Node<>(\"l\");\nNode<String> m = new Node<>(\"m\");\nNode<String> n = new Node<>(\"n\");\nNode<String> o = new Node<>(\"o\");\nNode<String> p = new Node<>(\"p\");\nNode<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\n\nl.left = m;\nl.right = n;\nn.left = o;\nn.right = p;\no.left = q;\no.right = r;\np.left = s;\np.right = t;\n\n//        l\n//     /     \\\n//    m       n\n//         /    \\\n//         o     p\n//        / \\   / \\\n//       q   r s   t\n\nSource.flipTree(l);\n\n//             l\n//         /      \\\n//        n        m\n//      /  \\\n//    p     o\n//  / \\    / \\\n// t   s  r   q"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\n\n//      a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h\n\nSource.flipTree(a); \n\n//       a\n//    /    \\\n//   c      b\n//  /     /   \\\n// f     e    d\n//     /  \\\n//    h    g",
        "Node<String> u = new Node<>(\"u\");\nNode<String> t = new Node<>(\"t\");\nNode<String> s = new Node<>(\"s\");\nNode<String> r = new Node<>(\"r\");\nNode<String> q = new Node<>(\"q\");\nNode<String> p = new Node<>(\"p\");\n\nu.left = t;\nu.right = s;\ns.right = r;\nr.left = q;\nr.right = p;\n\n//     u\n//  /    \\\n// t      s\n//         \\\n//         r\n//        / \\\n//        q  p\n\nSource.flipTree(u);\n\n//           u\n//        /    \\\n//       s      t\n//      /\n//     r\n//    / \\\n//   p  q",
        "Node<String> l = new Node<>(\"l\");\nNode<String> m = new Node<>(\"m\");\nNode<String> n = new Node<>(\"n\");\nNode<String> o = new Node<>(\"o\");\nNode<String> p = new Node<>(\"p\");\nNode<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\n\nl.left = m;\nl.right = n;\nn.left = o;\nn.right = p;\no.left = q;\no.right = r;\np.left = s;\np.right = t;\n\n//        l\n//     /     \\\n//    m       n\n//         /    \\\n//         o     p\n//        / \\   / \\\n//       q   r s   t\n\nSource.flipTree(l);\n\n//             l\n//         /      \\\n//        n        m\n//      /  \\\n//    p     o\n//  / \\    / \\\n// t   s  r   q",
        "Node<String> n = new Node<>(\"n\");\nNode<String> y = new Node<>(\"y\");\nNode<String> c = new Node<>(\"c\");\n\nn.left = y;\nn.right = c;\n\n//       n\n//     /   \\\n//    y     c\n\nSource.flipTree(n);\n\n//       n\n//     /   \\\n//    c     y"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> flipTree(Node<String> root) {\n    if (root == null) {\n      return null;  \n    }\n    \n    Node<String> left = flipTree(root.left);\n    Node<String> right = flipTree(root.right);\n    root.left = right;\n    root.right = left;\n    return root;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "flip tree",
        "slug": "flip-tree",
        "module": "Binary Tree II",
        "premium": true,
        "verbose": "Flip a binary tree.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> flipTree(Node<String> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> flipTree(Node<String> root) {\n    if (root == null) {\n      return null;  \n    }\n    \n    Node<String> left = flipTree(root.left);\n    Node<String> right = flipTree(root.right);\n    root.left = right;\n    root.right = left;\n    return root;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-ii::lefty-nodes": {
      "statement": "# lefty nodes Write a method, *leftyNodes*, that takes in the root of a binary tree. The method should return a list containing the left-most value on every level of the tree. The list must be ordered in a top-down fashion where the root is the first element. Note that the left-most node on a level may not necessarily be a left child.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\n\n//      a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h\n\nSource.leftyNodes(a); // [ \"a\", \"b\", \"d\", \"g\" ]",
        "Node<String> u = new Node<>(\"u\");\nNode<String> t = new Node<>(\"t\");\nNode<String> s = new Node<>(\"s\");\nNode<String> r = new Node<>(\"r\");\nNode<String> q = new Node<>(\"q\");\nNode<String> p = new Node<>(\"p\");\n\nu.left = t;\nu.right = s;\ns.right = r;\nr.left = q;\nr.right = p;\n\n//     u\n//  /    \\\n// t      s\n//         \\\n//         r\n//        / \\\n//        q  p\n\nSource.leftyNodes(u); // [ \"u\", \"t\", \"r\", \"q\" ]",
        "Node<String> l = new Node<>(\"l\");\nNode<String> m = new Node<>(\"m\");\nNode<String> n = new Node<>(\"n\");\nNode<String> o = new Node<>(\"o\");\nNode<String> p = new Node<>(\"p\");\nNode<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\n\nl.left = m;\nl.right = n;\nn.left = o;\nn.right = p;\no.left = q;\no.right = r;\np.left = s;\np.right = t;\n\n//        l\n//     /     \\\n//    m       n\n//         /    \\\n//         o     p\n//        / \\   / \\\n//       q   r s   t\n\nSource.leftyNodes(l); // [ \"l\", \"m\", \"o\", \"q\" ]"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\n\n//      a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h\n\nSource.leftyNodes(a); // [ \"a\", \"b\", \"d\", \"g\" ]",
        "Node<String> u = new Node<>(\"u\");\nNode<String> t = new Node<>(\"t\");\nNode<String> s = new Node<>(\"s\");\nNode<String> r = new Node<>(\"r\");\nNode<String> q = new Node<>(\"q\");\nNode<String> p = new Node<>(\"p\");\n\nu.left = t;\nu.right = s;\ns.right = r;\nr.left = q;\nr.right = p;\n\n//     u\n//  /    \\\n// t      s\n//         \\\n//         r\n//        / \\\n//        q  p\n\nSource.leftyNodes(u); // [ \"u\", \"t\", \"r\", \"q\" ]",
        "Node<String> l = new Node<>(\"l\");\nNode<String> m = new Node<>(\"m\");\nNode<String> n = new Node<>(\"n\");\nNode<String> o = new Node<>(\"o\");\nNode<String> p = new Node<>(\"p\");\nNode<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\n\nl.left = m;\nl.right = n;\nn.left = o;\nn.right = p;\no.left = q;\no.right = r;\np.left = s;\np.right = t;\n\n//        l\n//     /     \\\n//    m       n\n//         /    \\\n//         o     p\n//        / \\   / \\\n//       q   r s   t\n\nSource.leftyNodes(l); // [ \"l\", \"m\", \"o\", \"q\" ]",
        "Node<String> n = new Node<>(\"n\");\nNode<String> y = new Node<>(\"y\");\nNode<String> c = new Node<>(\"c\");\n\nn.left = y;\nn.right = c;\n\n//       n\n//     /   \\\n//    y     c\n\nSource.leftyNodes(n); // [ \"n\", \"y\" ]",
        "Node<String> i = new Node<>(\"i\");\nNode<String> n = new Node<>(\"n\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\n\ni.right = n;\nn.left = s;\nn.right = t;\n\n//       i\n//        \\\n//         n\n//        / \\\n//       s   t\n\nSource.leftyNodes(i); // [ \"i\", \"n\", \"s\" ]",
        "Source.leftyNodes(null); // [ ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> leftyNodes(Node<String> root) {\n    List<String> values = new ArrayList<>();\n    traverse(root, values, 0);\n    return values;\n  }\n\n  public static void traverse(Node<String> root, List<String> values, int level) {\n    if (root == null) {\n      return;\n    }\n    \n    if (level == values.size()) {\n      values.add(root.val);\n    }\n    \n    traverse(root.left, values, level + 1);\n    traverse(root.right, values, level + 1);\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "lefty nodes",
        "slug": "lefty-nodes",
        "module": "Binary Tree II",
        "premium": true,
        "verbose": "Return the left-most nodes on every level of a binary tree.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> leftyNodes(Node<String> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> leftyNodes(Node<String> root) {\n    List<String> values = new ArrayList<>();\n    traverse(root, values, 0);\n    return values;\n  }\n\n  public static void traverse(Node<String> root, List<String> values, int level) {\n    if (root == null) {\n      return;\n    }\n    \n    if (level == values.size()) {\n      values.add(root.val);\n    }\n    \n    traverse(root.left, values, level + 1);\n    traverse(root.right, values, level + 1);\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-ii::binary-search-tree-includes": {
      "statement": "Write a method, binarySearchTreeIncludes, that takes in the root of a binary search tree containing numbers and a target value. The method should return a boolean indicating whether or not the target is found within the tree. A [Binary Search Tree](https://en.wikipedia.org/wiki/Binarysearchtree) is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value. Your solution should have a best case runtime of O(log(n)). **Tree a** ```java Node a = new Node<>(12); Node b = new Node<>(5); Node c = new Node<>(18); Node d = new Node<>(3); Node e = new Node<>(9); Node f = new Node<>(19); a.left = b; a.right = c; b.left = d; b.right = e; c.right = f; // 12 // / \\ // 5 18 // / \\ \\ // 3 9 19 ```",
      "examples": [
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(18);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(19);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   5     18\n//  / \\     \\\n// 3   9     19",
        "Source.binarySearchTreeIncludes(a, 9); // -> true",
        "Source.binarySearchTreeIncludes(a, 15); // -> false"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(18);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(19);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   5     18\n//  / \\     \\\n// 3   9     19",
        "Source.binarySearchTreeIncludes(a, 9); // -> true",
        "Source.binarySearchTreeIncludes(a, 15); // -> false",
        "Source.binarySearchTreeIncludes(a, 1); // -> false",
        "Source.binarySearchTreeIncludes(a, 12); // -> true",
        "Node<Integer> q = new Node<>(54);\nNode<Integer> r = new Node<>(42);\nNode<Integer> s = new Node<>(70);\nNode<Integer> t = new Node<>(31);\nNode<Integer> u = new Node<>(50);\nNode<Integer> v = new Node<>(72);\nNode<Integer> w = new Node<>(47);\nNode<Integer> x = new Node<>(90);\n\nq.left = r;\nq.right = s;\nr.left = t;\nr.right = u;\ns.right = v;\nu.left = w;\nv.right = x;\n\n//       54\n//     /    \\\n//    42     70\n//   / \\      \\\n// 31   50     72\n//     /        \\\n//    47         90",
        "Source.binarySearchTreeIncludes(q, 55); // -> false",
        "Source.binarySearchTreeIncludes(q, 47); // -> true",
        "Source.binarySearchTreeIncludes(q, 49); // -> false",
        "Source.binarySearchTreeIncludes(q, 70); // -> true",
        "Source.binarySearchTreeIncludes(q, 100); // -> false",
        "Source.binarySearchTreeIncludes(buildTreeA(), 9) -> true",
        "Source.binarySearchTreeIncludes(buildTreeA(), 15) -> false",
        "Source.binarySearchTreeIncludes(buildTreeA(), 1) -> false",
        "Source.binarySearchTreeIncludes(buildTreeA(), 12) -> true",
        "Source.binarySearchTreeIncludes(buildTreeQ(), 55) -> false",
        "Source.binarySearchTreeIncludes(buildTreeQ(), 47) -> true",
        "Source.binarySearchTreeIncludes(buildTreeQ(), 49) -> false",
        "Source.binarySearchTreeIncludes(buildTreeQ(), 70) -> true",
        "Source.binarySearchTreeIncludes(buildTreeQ(), 100) -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "binary search recursive",
          "code": "class Source {\n  public static boolean binarySearchTreeIncludes(Node<Integer> root, int target) {\n    if (root == null) {\n      return false;\n    }    \n    \n    if (target < root.val) {\n      return binarySearchTreeIncludes(root.left, target);\n    } else if (target > root.val) {\n      return binarySearchTreeIncludes(root.right, target);\n    } else {\n      return true;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(n) | Space: O(n) | Time: O(log(n)) | Space: O(log(n))"
        },
        {
          "title": "binary search iterative",
          "code": "class Source {\n  public static boolean binarySearchTreeIncludes(Node<Integer> root, int target) {\n    Node<Integer> current = root;\n    while (current != null) {\n      if (target > current.val) {\n        current = current.right;\n      } else if (target < current.val) {\n        current = current.left;\n      } else {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "Time: O(n) | Space: O(1) | Time: O(log(n)) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "binary search tree includes",
        "slug": "binary-search-tree-includes",
        "module": "Binary Tree II",
        "premium": true,
        "verbose": "Check for a target within a binary search tree.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static boolean binarySearchTreeIncludes(Node<Integer> root, int target) {\n    // todo\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "class Source {\n  public static boolean binarySearchTreeIncludes(Node<Integer> root, int target) {\n    if (root == null) {\n      return false;\n    }    \n    \n    if (target < root.val) {\n      return binarySearchTreeIncludes(root.left, target);\n    } else if (target > root.val) {\n      return binarySearchTreeIncludes(root.right, target);\n    } else {\n      return true;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-ii::is-binary-search-tree": {
      "statement": "Write a method, isBinarySearchTree, that takes in the root of a binary tree. The method should return a boolean indicating whether or not the tree satisfies the *binary search tree* property. A [Binary Search Tree](https://en.wikipedia.org/wiki/Binarysearchtree) is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than the node's value.",
      "examples": [
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(18);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(19);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   5     18\n//  / \\     \\\n// 3   9     19\n\nSource.isBinarySearchTree(a); // -> true",
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(18);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(15);\nNode<Integer> f = new Node<>(19);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   5     18\n//  / \\     \\\n// 3   15     19\n\nSource.isBinarySearchTree(a); // -> false",
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(15);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(19);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   5     15\n//  / \\     \\\n// 3   9     19\n\nSource.isBinarySearchTree(a); // -> true"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(18);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(19);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   5     18\n//  / \\     \\\n// 3   9     19\n\nSource.isBinarySearchTree(a); // -> true",
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(18);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(15);\nNode<Integer> f = new Node<>(19);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   5     18\n//  / \\     \\\n// 3   15     19\n\nSource.isBinarySearchTree(a); // -> false",
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(15);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(19);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   5     15\n//  / \\     \\\n// 3   9     19\n\nSource.isBinarySearchTree(a); // -> true",
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(10);\nNode<Integer> d = new Node<>(3);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(19);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   5     10\n//  / \\     \\\n// 3   9     19\n\nSource.isBinarySearchTree(a); // -> false",
        "Node<Integer> q = new Node<>(54);\nNode<Integer> r = new Node<>(42);\nNode<Integer> s = new Node<>(70);\nNode<Integer> t = new Node<>(31);\nNode<Integer> u = new Node<>(50);\nNode<Integer> v = new Node<>(72);\nNode<Integer> w = new Node<>(47);\nNode<Integer> x = new Node<>(90);\n\nq.left = r;\nq.right = s;\nr.left = t;\nr.right = u;\ns.right = v;\nu.left = w;\nv.right = x;\n\n//       54\n//     /    \\\n//    42     70\n//   / \\      \\\n// 31   50     72\n//     /        \\\n//    47         90\n\nSource.isBinarySearchTree(q); // -> true",
        "Node<Integer> a = new Node<>(12);\nNode<Integer> b = new Node<>(5);\nNode<Integer> c = new Node<>(15);\nNode<Integer> d = new Node<>(8);\nNode<Integer> e = new Node<>(9);\nNode<Integer> f = new Node<>(19);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      12\n//    /   \\\n//   5     15\n//  / \\     \\\n// 8   9     19\n\nSource.isBinarySearchTree(a); // -> false",
        "Source.isBinarySearchTree(a) -> true",
        "Source.isBinarySearchTree(a) -> false",
        "Source.isBinarySearchTree(q) -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first (recursive)",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static boolean isBinarySearchTree(Node<Integer> root) {\n    List<Integer> values = new ArrayList<>();\n    inOrderTraversal(root, values);\n    for (int i = 0; i < values.size() - 1; i += 1) {\n      if (values.get(i) > values.get(i + 1)) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  public static void inOrderTraversal(Node<Integer> root, List<Integer> values) {\n    if (root == null) {\n      return;\n    }\n    inOrderTraversal(root.left, values);\n    values.add(root.val);\n    inOrderTraversal(root.right, values);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "is binary search tree",
        "slug": "is-binary-search-tree",
        "module": "Binary Tree II",
        "premium": true,
        "verbose": "Verify whether or not a binary tree is a binary search tree.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static boolean isBinarySearchTree(Node<Integer> root) {\n    // todo\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static boolean isBinarySearchTree(Node<Integer> root) {\n    List<Integer> values = new ArrayList<>();\n    inOrderTraversal(root, values);\n    for (int i = 0; i < values.size() - 1; i += 1) {\n      if (values.get(i) > values.get(i + 1)) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  public static void inOrderTraversal(Node<Integer> root, List<Integer> values) {\n    if (root == null) {\n      return;\n    }\n    inOrderTraversal(root.left, values);\n    values.add(root.val);\n    inOrderTraversal(root.right, values);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-ii::post-order": {
      "statement": "Write a method, postOrder, that takes in the root of a binary tree. The method should return a list containing the post-ordered values of the tree. [Post-order](https://en.wikipedia.org/wiki/Treetraversal#Post-order,LRN) traversal is when nodes are recursively visited in the order: left child, right child, self.",
      "examples": [
        "Node<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\nNode<String> z = new Node<>(\"z\");\n\nx.left = y;\nx.right = z;\n\n//       x\n//    /    \\\n//   y      z\n\nSource.postOrder(x);\n// [\"y\", \"z\", \"x\"]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.left = f;\nc.right = g;\n  \n//      a\n//    /    \\\n//   b      c\n//  / \\    / \\\n// d   e  f   g\n\nSource.postOrder(a);\n// [ \"d\", \"e\", \"b\", \"f\", \"g\", \"c\", \"a\" ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\n\n//      a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h\n\nSource.postOrder(a);\n// [ \"d\", \"g\", \"h\", \"e\", \"b\", \"f\", \"c\", \"a\" ]"
      ],
      "testCases": [
        "Node<String> x = new Node<>(\"x\");\nNode<String> y = new Node<>(\"y\");\nNode<String> z = new Node<>(\"z\");\n\nx.left = y;\nx.right = z;\n\n//       x\n//    /    \\\n//   y      z\n\nSource.postOrder(x);\n// [\"y\", \"z\", \"x\"]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.left = f;\nc.right = g;\n  \n//      a\n//    /    \\\n//   b      c\n//  / \\    / \\\n// d   e  f   g\n\nSource.postOrder(a);\n// [ \"d\", \"e\", \"b\", \"f\", \"g\", \"c\", \"a\" ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\n\n//      a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h\n\nSource.postOrder(a);\n// [ \"d\", \"g\", \"h\", \"e\", \"b\", \"f\", \"c\", \"a\" ]",
        "Node<String> l = new Node<>(\"l\");\nNode<String> m = new Node<>(\"m\");\nNode<String> n = new Node<>(\"n\");\nNode<String> o = new Node<>(\"o\");\nNode<String> p = new Node<>(\"p\");\nNode<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\n\nl.left = m;\nl.right = n;\nn.left = o;\nn.right = p;\no.left = q;\no.right = r;\np.left = s;\np.right = t;\n\n//        l\n//     /     \\\n//    m       n\n//         /    \\\n//         o     p\n//        / \\   / \\\n//       q   r s   t\n\nSource.postOrder(l);\n// [ \"m\", \"q\", \"r\", \"o\", \"s\", \"t\", \"p\", \"n\", \"l\" ]",
        "Source.postOrder(null);\n// []"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> postOrder(Node<String> root) {\n    List<String> values = new ArrayList<>();\n    postOrder(root, values);\n    return values;\n  }\n  \n  public static void postOrder(Node<String> root, List<String> values) {\n    if (root == null) {\n      return;\n    }\n    postOrder(root.left, values);\n    postOrder(root.right, values);\n    values.add(root.val);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "post order",
        "slug": "post-order",
        "module": "Binary Tree II",
        "premium": true,
        "verbose": "Return the post-ordered values of a binary tree.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> postOrder(Node<String> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static List<String> postOrder(Node<String> root) {\n    List<String> values = new ArrayList<>();\n    postOrder(root, values);\n    return values;\n  }\n  \n  public static void postOrder(Node<String> root, List<String> values) {\n    if (root == null) {\n      return;\n    }\n    postOrder(root.left, values);\n    postOrder(root.right, values);\n    values.add(root.val);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-ii::build-tree-in-post": {
      "statement": "# build tree in post Write a method, buildTreeInPost, that takes in a list of in-ordered values and a list of post-ordered values for a binary tree. The method should build a binary tree that has the given in-order and post-order traversal structure. The method should return the root of this tree. You can assume that the values of inorder and postorder are unique.",
      "examples": [
        "Source.buildTreeInPost(\n  List.of(\"y\", \"x\", \"z\" ),\n  List.of(\"y\", \"z\", \"x\" ) \n);\n//       x\n//    /    \\\n//   y      z",
        "Source.buildTreeInPost(\n  List.of(\"d\", \"b\", \"e\", \"a\", \"f\", \"c\", \"g\" ),\n  List.of(\"d\", \"e\", \"b\", \"f\", \"g\", \"c\", \"a\" ) \n);\n//      a\n//    /    \\\n//   b      c\n//  / \\    / \\\n// d   e  f   g",
        "Source.buildTreeInPost(\n  List.of(\"d\", \"b\", \"g\", \"e\", \"h\", \"a\", \"c\", \"f\" ),\n  List.of(\"d\", \"g\", \"h\", \"e\", \"b\", \"f\", \"c\", \"a\" ) \n);\n//      a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h"
      ],
      "testCases": [
        "Source.buildTreeInPost(\n  List.of(\"y\", \"x\", \"z\" ),\n  List.of(\"y\", \"z\", \"x\" ) \n);\n//       x\n//    /    \\\n//   y      z",
        "Source.buildTreeInPost(\n  List.of(\"d\", \"b\", \"e\", \"a\", \"f\", \"c\", \"g\" ),\n  List.of(\"d\", \"e\", \"b\", \"f\", \"g\", \"c\", \"a\" ) \n);\n//      a\n//    /    \\\n//   b      c\n//  / \\    / \\\n// d   e  f   g",
        "Source.buildTreeInPost(\n  List.of(\"d\", \"b\", \"g\", \"e\", \"h\", \"a\", \"c\", \"f\" ),\n  List.of(\"d\", \"g\", \"h\", \"e\", \"b\", \"f\", \"c\", \"a\" ) \n);\n//      a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h",
        "Source.buildTreeInPost(\n  List.of(\"m\", \"n\"),\n  List.of(\"m\", \"n\")\n);\n//       n\n//     /\n//    m",
        "Source.buildTreeInPost(\n  List.of(\"n\", \"m\"),\n  List.of(\"m\", \"n\")\n);\n//     n\n//      \\\n//       m"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> buildTreeInPost(List<String> inOrder, List<String> postOrder) {\n    if (inOrder.size() == 0) {\n      return null;\n    }\n    String value = postOrder.get(postOrder.size() - 1);\n    Node<String> root = new Node<>(value);\n    \n    int midIdx = inOrder.indexOf(value);\n    List<String> leftIn = inOrder.subList(0, midIdx);\n    List<String> rightIn = inOrder.subList(midIdx + 1, inOrder.size());\n  \n    List<String> leftPost = postOrder.subList(0, leftIn.size());\n    List<String> rightPost = postOrder.subList(leftIn.size(), postOrder.size() - 1);\n  \n    root.left = buildTreeInPost(leftIn, leftPost);\n    root.right = buildTreeInPost(rightIn, rightPost);\n    return root;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of array | Time: O(n^2) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "build tree in post",
        "slug": "build-tree-in-post",
        "module": "Binary Tree II",
        "premium": true,
        "verbose": "Build a binary tree from its in-order and post-order values.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> buildTreeInPost(List<String> inOrder, List<String> postOrder) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> buildTreeInPost(List<String> inOrder, List<String> postOrder) {\n    if (inOrder.size() == 0) {\n      return null;\n    }\n    String value = postOrder.get(postOrder.size() - 1);\n    Node<String> root = new Node<>(value);\n    \n    int midIdx = inOrder.indexOf(value);\n    List<String> leftIn = inOrder.subList(0, midIdx);\n    List<String> rightIn = inOrder.subList(midIdx + 1, inOrder.size());\n  \n    List<String> leftPost = postOrder.subList(0, leftIn.size());\n    List<String> rightPost = postOrder.subList(leftIn.size(), postOrder.size() - 1);\n  \n    root.left = buildTreeInPost(leftIn, leftPost);\n    root.right = buildTreeInPost(rightIn, rightPost);\n    return root;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-ii::build-tree-in-pre": {
      "statement": "# build tree in pre Write a method, buildTreeInPre, that takes in an array of in-ordered values and an array of pre-ordered values for a binary tree. The method should build a binary tree that has the given in-order and pre-order traversal structure. The method should return the root of this tree. You can assume that the values of inorder and preorder are unique.",
      "examples": [
        "Source.buildTreeInPre(\n  List.of(\"z\", \"y\", \"x\"),\n  List.of(\"y\", \"z\", \"x\") \n);\n//       y\n//    /    \\\n//   z      x",
        "Source.buildTreeInPre(\n  List.of(\"y\", \"z\", \"x\"),\n  List.of(\"y\", \"x\", \"z\") \n);\n//       y\n//        \\\n//         x\n//        / \n//       z",
        "Source.buildTreeInPre(\n  List.of(\"d\", \"b\", \"g\", \"e\", \"h\", \"a\", \"c\", \"f\"),\n  List.of(\"a\", \"b\", \"d\", \"e\", \"g\", \"h\", \"c\", \"f\") \n);\n//       a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h"
      ],
      "testCases": [
        "Source.buildTreeInPre(\n  List.of(\"z\", \"y\", \"x\"),\n  List.of(\"y\", \"z\", \"x\") \n);\n//       y\n//    /    \\\n//   z      x",
        "Source.buildTreeInPre(\n  List.of(\"y\", \"z\", \"x\"),\n  List.of(\"y\", \"x\", \"z\") \n);\n//       y\n//        \\\n//         x\n//        / \n//       z",
        "Source.buildTreeInPre(\n  List.of(\"d\", \"b\", \"g\", \"e\", \"h\", \"a\", \"c\", \"f\"),\n  List.of(\"a\", \"b\", \"d\", \"e\", \"g\", \"h\", \"c\", \"f\") \n);\n//       a\n//    /    \\\n//   b      c\n//  / \\      \\\n// d   e      f\n//    / \\\n//    g  h",
        "Source.buildTreeInPre(\n  List.of(\"t\", \"u\", \"s\", \"q\", \"r\", \"p\"),\n  List.of(\"u\", \"t\", \"s\", \"r\", \"q\", \"p\") \n);\n//     u\n//  /    \\\n// t      s\n//         \\\n//         r\n//        / \\\n//        q  p",
        "Source.buildTreeInPre(\n  List.of(\"m\", \"l\", \"q\", \"o\", \"r\", \"n\", \"s\", \"p\", \"t\"),\n  List.of(\"l\", \"m\", \"n\", \"o\", \"q\", \"r\", \"p\", \"s\", \"t\") \n);\n//        l\n//     /     \\\n//    m       n\n//         /    \\\n//         o     p\n//        / \\   / \\\n//       q   r s   t"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> buildTreeInPre(List<String> inOrder, List<String> preOrder) {\n    if (inOrder.size() == 0) {\n      return null;\n    }\n    \n    String value = preOrder.get(0);\n    Node<String> root = new Node<>(value);\n    \n    int midIdx = inOrder.indexOf(value);\n    List<String> leftIn = inOrder.subList(0, midIdx);\n    List<String> rightIn = inOrder.subList(midIdx + 1, inOrder.size());\n    List<String> leftPre = preOrder.subList(1, leftIn.size() + 1);\n    List<String> rightPre = preOrder.subList(leftIn.size() + 1, preOrder.size());\n    \n    root.left = buildTreeInPre(leftIn, leftPre);\n    root.right = buildTreeInPre(rightIn, rightPre);\n    return root;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of array | Time: O(n^2) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "build tree in pre",
        "slug": "build-tree-in-pre",
        "module": "Binary Tree II",
        "premium": true,
        "verbose": "Build a binary tree from its in-order and pre-order values.",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> buildTreeInPre(List<String> inOrder, List<String> preOrder) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> buildTreeInPre(List<String> inOrder, List<String> preOrder) {\n    if (inOrder.size() == 0) {\n      return null;\n    }\n    \n    String value = preOrder.get(0);\n    Node<String> root = new Node<>(value);\n    \n    int midIdx = inOrder.indexOf(value);\n    List<String> leftIn = inOrder.subList(0, midIdx);\n    List<String> rightIn = inOrder.subList(midIdx + 1, inOrder.size());\n    List<String> leftPre = preOrder.subList(1, leftIn.size() + 1);\n    List<String> rightPre = preOrder.subList(leftIn.size() + 1, preOrder.size());\n    \n    root.left = buildTreeInPre(leftIn, leftPre);\n    root.right = buildTreeInPre(rightIn, rightPre);\n    return root;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "binary-tree-ii::is-tree-balanced": {
      "statement": "Write a method, isTreeBalanced, that takes in the root of a binary tree. The method should return a boolean indicating whether or not the tree is \"balanced\". A \"balanced\" binary tree is a binary tree where the height between the left and right subtrees differs by at most 1 for every node.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\n\na.left = b;\na.right = c;\n\n//         a\n//       /   \\\n//      b    c\n\nSource.isTreeBalanced(a); // -> true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.left = b;\na.right = c;\nb.right = d;\n\n//         a\n//       /   \\\n//      b    c\n//      \\\n//      d\n\nSource.isTreeBalanced(a); // -> true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\n\na.right = b;\nb.right = c;\n\n//        a\n//         \\\n//          b\n//          \\\n//           c\n\nSource.isTreeBalanced(a); // -> false"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\n\na.left = b;\na.right = c;\n\n//         a\n//       /   \\\n//      b    c\n\nSource.isTreeBalanced(a); // -> true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\n\na.left = b;\na.right = c;\nb.right = d;\n\n//         a\n//       /   \\\n//      b    c\n//      \\\n//      d\n\nSource.isTreeBalanced(a); // -> true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\n\na.right = b;\nb.right = c;\n\n//        a\n//         \\\n//          b\n//          \\\n//           c\n\nSource.isTreeBalanced(a); // -> false",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nSource.isTreeBalanced(a); // -> true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /\n//   g\n\nSource.isTreeBalanced(a); // -> true",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nc.right = e;\nd.left = f;\n\n//        a\n//      /   \\\n//     b     c\n//    /      \\\n//   d        e\n//  /\n// f\n\nSource.isTreeBalanced(a); // -> false",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ng.right = h;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n//    /\n//   g\n//   \\\n//    h\n\nSource.isTreeBalanced(a); // -> false",
        "Node<String> a = new Node<>(\"a\");\n\n//        a\n\nSource.isTreeBalanced(a); // -> true",
        "Source.isTreeBalanced(null); // -> true",
        "Source.run(a) -> true",
        "Source.run(a) -> false",
        "Source.run(null) -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  private static <T> int checkHeightBalance(Node<T> root) {\n    if (root == null) {\n      return 0;\n    }\n\n    int leftHeight = checkHeightBalance(root.left);\n    if (leftHeight == -1) {\n      return -1;\n    }\n\n    int rightHeight = checkHeightBalance(root.right);\n    if (rightHeight == -1) {\n      return -1;\n    }\n\n    if (Math.abs(leftHeight - rightHeight) > 1) {\n      return -1;\n    } else {\n      return 1 + Math.max(leftHeight, rightHeight);\n    }\n  }\n  \n  public static <T> boolean isTreeBalanced(Node<T> root) {\n    return checkHeightBalance(root) > -1;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "is tree balanced",
        "slug": "is-tree-balanced",
        "module": "Binary Tree II",
        "premium": true,
        "verbose": "Check if a binary tree is height balanced.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> boolean isTreeBalanced(Node<T> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  private static <T> int checkHeightBalance(Node<T> root) {\n    if (root == null) {\n      return 0;\n    }\n\n    int leftHeight = checkHeightBalance(root.left);\n    if (leftHeight == -1) {\n      return -1;\n    }\n\n    int rightHeight = checkHeightBalance(root.right);\n    if (rightHeight == -1) {\n      return -1;\n    }\n\n    if (Math.abs(leftHeight - rightHeight) > 1) {\n      return -1;\n    } else {\n      return 1 + Math.max(leftHeight, rightHeight);\n    }\n  }\n  \n  public static <T> boolean isTreeBalanced(Node<T> root) {\n    return checkHeightBalance(root) > -1;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "heap::heap-insertion": {
      "statement": "# heap insertion Implement the insert method for the existing `MinHeap` class. The method should properly add a given value into the heap, maintaining min heap order and height balance. Start by watching the approach video. You'll also want to follow along with the walkthrough video. You won't know how to implement this if it is your first time dealing with heaps.",
      "examples": [
        "MinHeap heap = new MinHeap();\nheap.insert(12.);\nheap.insert(13.);\nheap.insert(11.);\nheap.insert(4.);\nheap.insert(20.);\nheap.insert(9.);\nheap.insert(22.);\nheap.insert(14.);\n\n//               4\n//            /    \\\n//          11      9\n//         / \\    /  \\\n//       13  20  12  22\n//      /\n//    14\n//\n//\n// [ 4, 11, 9, 13, 20, 12, 22, 14 ]",
        "MinHeap heap = new MinHeap();\nheap.insert(12.);\nheap.insert(93.);\nheap.insert(63.);\nheap.insert(16.);\nheap.insert(-500.);\nheap.insert(21.);\nheap.insert(11.);\nheap.insert(43.);\nheap.insert(-6.);\nheap.insert(35.);\nheap.insert(15.);\nheap.insert(37.);\nheap.insert(29.);\nheap.insert(-501.);\nheap.insert(80.);\n\n//                              -501\n//                      /                \\\n//                    -6                -500\n//                 /     \\            /       \\\n//               12      15          29        11\n//             /  \\     /  \\       /  \\       /  \\\n//            93  43   35  16    63   37     21  80\n//\n//\n// [ -501, -6, -500, 12, 15, 29, 11, 93, 43, 35, 16, 63, 37, 21, 80 ]"
      ],
      "testCases": [
        "MinHeap heap = new MinHeap();\nheap.insert(12.);\nheap.insert(13.);\nheap.insert(11.);\nheap.insert(4.);\nheap.insert(20.);\nheap.insert(9.);\nheap.insert(22.);\nheap.insert(14.);\n\n//               4\n//            /    \\\n//          11      9\n//         / \\    /  \\\n//       13  20  12  22\n//      /\n//    14\n//\n//\n// [ 4, 11, 9, 13, 20, 12, 22, 14 ]",
        "MinHeap heap = new MinHeap();\nheap.insert(12.);\nheap.insert(93.);\nheap.insert(63.);\nheap.insert(16.);\nheap.insert(-500.);\nheap.insert(21.);\nheap.insert(11.);\nheap.insert(43.);\nheap.insert(-6.);\nheap.insert(35.);\nheap.insert(15.);\nheap.insert(37.);\nheap.insert(29.);\nheap.insert(-501.);\nheap.insert(80.);\n\n//                              -501\n//                      /                \\\n//                    -6                -500\n//                 /     \\            /       \\\n//               12      15          29        11\n//             /  \\     /  \\       /  \\       /  \\\n//            93  43   35  16    63   37     21  80\n//\n//\n// [ -501, -6, -500, 12, 15, 29, 11, 93, 43, 35, 16, 63, 37, 21, 80 ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  static class MinHeap {\n    public List<Double> list;\n\n    public MinHeap() {\n      list = new ArrayList<>();\n    }\n\n    public int size() {\n      return list.size();\n    }\n\n    public boolean isEmpty() {\n      return list.size() == 0;\n    }\n\n    public void swap(int idx1, int idx2) {\n      Double temp = this.list.get(idx1);\n      this.list.set(idx1, this.list.get(idx2));\n      this.list.set(idx2, temp);\n    }\n    \n    public void siftUp(int idx) {\n      int currentIdx = idx;\n      while (currentIdx > 0) {\n        int parentIdx = (int) Math.floor((currentIdx - 1) / 2.0);\n        if (list.get(currentIdx) < list.get(parentIdx)) {\n          swap(currentIdx, parentIdx);\n          currentIdx = parentIdx;\n        } else {\n          break;\n        }\n      }\n    }\n\n    public void insert(Double val) {\n      list.add(val);\n      siftUp(list.size() - 1);\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of items in heap | Time: O(log(n)) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "heap insertion",
        "slug": "heap-insertion",
        "module": "Heap",
        "premium": true,
        "verbose": "Insert a value into a min heap.",
        "stub": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  static class MinHeap {\n    public List<Double> list;\n\n    public MinHeap() {\n      list = new ArrayList<>();\n    }\n\n    public int size() {\n      return list.size();\n    }\n\n    public boolean isEmpty() {\n      return list.size() == 0;\n    }\n\n    public void insert(Double val) {\n      // todo\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  static class MinHeap {\n    public List<Double> list;\n\n    public MinHeap() {\n      list = new ArrayList<>();\n    }\n\n    public int size() {\n      return list.size();\n    }\n\n    public boolean isEmpty() {\n      return list.size() == 0;\n    }\n\n    public void swap(int idx1, int idx2) {\n      Double temp = this.list.get(idx1);\n      this.list.set(idx1, this.list.get(idx2));\n      this.list.set(idx2, temp);\n    }\n    \n    public void siftUp(int idx) {\n      int currentIdx = idx;\n      while (currentIdx > 0) {\n        int parentIdx = (int) Math.floor((currentIdx - 1) / 2.0);\n        if (list.get(currentIdx) < list.get(parentIdx)) {\n          swap(currentIdx, parentIdx);\n          currentIdx = parentIdx;\n        } else {\n          break;\n        }\n      }\n    }\n\n    public void insert(Double val) {\n      list.add(val);\n      siftUp(list.size() - 1);\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "heap::heap-deletion": {
      "statement": "# heap deletion Implement the extractMin method for the existing `MinHeap` class. The method should return and remove the smallest value in the heap, maintaining min heap order and height balance. Start by watching the approach video. You'll also want to follow along with the walkthrough video. You won't know how to implement this if it is your first time dealing with heaps.",
      "examples": [
        "MinHeap heap = new MinHeap();\nheap.insert(12.);\nheap.insert(13.);\nheap.insert(11.);\nheap.insert(4.);\nheap.insert(20.);\nheap.insert(9.);\nheap.insert(22.);\nheap.insert(14.);\nheap.extractMin(); // -> 4\nheap.extractMin(); // -> 9\nheap.extractMin(); // -> 11",
        "MinHeap heap = new MinHeap();\nheap.insert(12.);\nheap.insert(93.);\nheap.insert(63.);\nheap.insert(16.);\nheap.extractMin(); // -> 12\nheap.extractMin(); // -> 16\nheap.insert(-500.);\nheap.insert(21.);\nheap.insert(11.);\nheap.insert(43.);\nheap.insert(-6.);\nheap.insert(35.);\nheap.insert(15.);\nheap.extractMin(); // -> -500\nheap.extractMin(); // -> -6\nheap.extractMin(); // -> 11\nheap.extractMin(); // -> 15\nheap.extractMin(); // -> 21\nheap.extractMin(); // -> 35\nheap.extractMin(); // -> 43\nheap.extractMin(); // -> 63\nheap.extractMin(); // -> 93"
      ],
      "testCases": [
        "MinHeap heap = new MinHeap();\nheap.insert(12.);\nheap.insert(13.);\nheap.insert(11.);\nheap.insert(4.);\nheap.insert(20.);\nheap.insert(9.);\nheap.insert(22.);\nheap.insert(14.);\nheap.extractMin(); // -> 4\nheap.extractMin(); // -> 9\nheap.extractMin(); // -> 11",
        "MinHeap heap = new MinHeap();\nheap.insert(12.);\nheap.insert(93.);\nheap.insert(63.);\nheap.insert(16.);\nheap.extractMin(); // -> 12\nheap.extractMin(); // -> 16\nheap.insert(-500.);\nheap.insert(21.);\nheap.insert(11.);\nheap.insert(43.);\nheap.insert(-6.);\nheap.insert(35.);\nheap.insert(15.);\nheap.extractMin(); // -> -500\nheap.extractMin(); // -> -6\nheap.extractMin(); // -> 11\nheap.extractMin(); // -> 15\nheap.extractMin(); // -> 21\nheap.extractMin(); // -> 35\nheap.extractMin(); // -> 43\nheap.extractMin(); // -> 63\nheap.extractMin(); // -> 93"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  static class MinHeap {\n    public List<Double> list;\n\n    public MinHeap() {\n      list = new ArrayList<>();\n    }\n\n    public int size() {\n      return list.size();\n    }\n\n    public boolean isEmpty() {\n      return list.size() == 0;\n    }\n\n    public void swap(int idx1, int idx2) {\n      Double temp = this.list.get(idx1);\n      this.list.set(idx1, this.list.get(idx2));\n      this.list.set(idx2, temp);\n    }\n    \n    public void siftUp(int idx) {\n      int currentIdx = idx;\n      while (currentIdx > 0) {\n        int parentIdx = (int) Math.floor((currentIdx - 1) / 2.0);\n        if (list.get(currentIdx) < list.get(parentIdx)) {\n          swap(currentIdx, parentIdx);\n          currentIdx = parentIdx;\n        } else {\n          break;\n        }\n      }\n    }\n\n    public void insert(Double val) {\n      list.add(val);\n      siftUp(list.size() - 1);\n    }\n\n    public void siftDown(int idx) {\n      int currentIdx = idx;\n      while (currentIdx < this.size() - 1) {\n        int leftChildIdx = currentIdx * 2 + 1;\n        int rightChildIdx = currentIdx * 2 + 2;\n        \n        double leftChildVal = leftChildIdx >= this.size() ? Double.POSITIVE_INFINITY : this.list.get(leftChildIdx);\n        double rightChildVal = rightChildIdx >= this.size() ? Double.POSITIVE_INFINITY : this.list.get(rightChildIdx);\n        \n        double smallerChildVal = leftChildVal < rightChildVal ? leftChildVal : rightChildVal;\n        int smallerChildIdx = leftChildVal < rightChildVal ? leftChildIdx : rightChildIdx;\n\n        if (this.list.get(currentIdx) > smallerChildVal) {\n          this.swap(currentIdx, smallerChildIdx);\n          currentIdx = smallerChildIdx;\n        } else {\n          break;\n        }\n      } \n    }\n\n    public Double extractMin() {\n      if (this.isEmpty()) {\n        return null;\n      }\n\n      if (this.size() == 1) {\n        return this.list.remove(this.list.size() - 1);\n      }\n\n      Double value = this.list.get(0);\n      Double lastVal = this.list.remove(this.list.size() - 1);\n      this.list.set(0, lastVal);\n      this.siftDown(0);\n      return value;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of items in heap | Time: O(log(n)) | Space: O(1)"
        }
      ],
      "meta": {
        "name": "heap deletion",
        "slug": "heap-deletion",
        "module": "Heap",
        "premium": true,
        "verbose": "Remove and extract the smallest value from a min heap.",
        "stub": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  static class MinHeap {\n    public List<Double> list;\n\n    public MinHeap() {\n      list = new ArrayList<>();\n    }\n\n    public int size() {\n      return list.size();\n    }\n\n    public boolean isEmpty() {\n      return list.size() == 0;\n    }\n\n    public void swap(int idx1, int idx2) {\n      Double temp = this.list.get(idx1);\n      this.list.set(idx1, this.list.get(idx2));\n      this.list.set(idx2, temp);\n    }\n    \n    public void siftUp(int idx) {\n      int currentIdx = idx;\n      while (currentIdx > 0) {\n        int parentIdx = (int) Math.floor((currentIdx - 1) / 2.0);\n        if (list.get(currentIdx) < list.get(parentIdx)) {\n          swap(currentIdx, parentIdx);\n          currentIdx = parentIdx;\n        } else {\n          break;\n        }\n      }\n    }\n\n    public void insert(Double val) {\n      list.add(val);\n      siftUp(list.size() - 1);\n    }\n\n    public Double extractMin() {\n      // todo\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  static class MinHeap {\n    public List<Double> list;\n\n    public MinHeap() {\n      list = new ArrayList<>();\n    }\n\n    public int size() {\n      return list.size();\n    }\n\n    public boolean isEmpty() {\n      return list.size() == 0;\n    }\n\n    public void swap(int idx1, int idx2) {\n      Double temp = this.list.get(idx1);\n      this.list.set(idx1, this.list.get(idx2));\n      this.list.set(idx2, temp);\n    }\n    \n    public void siftUp(int idx) {\n      int currentIdx = idx;\n      while (currentIdx > 0) {\n        int parentIdx = (int) Math.floor((currentIdx - 1) / 2.0);\n        if (list.get(currentIdx) < list.get(parentIdx)) {\n          swap(currentIdx, parentIdx);\n          currentIdx = parentIdx;\n        } else {\n          break;\n        }\n      }\n    }\n\n    public void insert(Double val) {\n      list.add(val);\n      siftUp(list.size() - 1);\n    }\n\n    public void siftDown(int idx) {\n      int currentIdx = idx;\n      while (currentIdx < this.size() - 1) {\n        int leftChildIdx = currentIdx * 2 + 1;\n        int rightChildIdx = currentIdx * 2 + 2;\n        \n        double leftChildVal = leftChildIdx >= this.size() ? Double.POSITIVE_INFINITY : this.list.get(leftChildIdx);\n        double rightChildVal = rightChildIdx >= this.size() ? Double.POSITIVE_INFINITY : this.list.get(rightChildIdx);\n        \n        double smallerChildVal = leftChildVal < rightChildVal ? leftChildVal : rightChildVal;\n        int smallerChildIdx = leftChildVal < rightChildVal ? leftChildIdx : rightChildIdx;\n\n        if (this.list.get(currentIdx) > smallerChildVal) {\n          this.swap(currentIdx, smallerChildIdx);\n          currentIdx = smallerChildIdx;\n        } else {\n          break;\n        }\n      } \n    }\n\n    public Double extractMin() {\n      if (this.isEmpty()) {\n        return null;\n      }\n\n      if (this.size() == 1) {\n        return this.list.remove(this.list.size() - 1);\n      }\n\n      Double value = this.list.get(0);\n      Double lastVal = this.list.remove(this.list.size() - 1);\n      this.list.set(0, lastVal);\n      this.siftDown(0);\n      return value;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "heap::kth-largest": {
      "statement": "Write a method, *kthLargest*, that takes in a list of numbers and a value, k. The method should return the k-th largest element of the list.",
      "examples": [
        "kthLargest(List.of(9,2,6,6,1,5,8,7), 3); // -> 7",
        "kthLargest(List.of(9,2,6,6,1,5,8,7), 4); // -> 6",
        "kthLargest(List.of(9,2,6,6,1,5,8,7), 5); // -> 6"
      ],
      "testCases": [
        "kthLargest(List.of(9,2,6,6,1,5,8,7), 3); // -> 7",
        "kthLargest(List.of(9,2,6,6,1,5,8,7), 4); // -> 6",
        "kthLargest(List.of(9,2,6,6,1,5,8,7), 5); // -> 6",
        "kthLargest(List.of(10,1,8,5,2,4), 2); // -> 8",
        "List<Integer> numbers = List.of(  \n  4,5,85,77,47,80,37,42,3,6,62,33,69,68,16,20,83,39,14,58,75,35,72,36,19,18,66,61,41,79,28,43,7,24,40,53,32,12\n);\nkthLargest(numbers, 9); // -> 68",
        "List<Integer> numbers = List.of(  \n  4,5,85,77,47,80,37,42,3,6,62,33,69,68,16,20,83,39,14,58,75,35,72,36,19,18,66,61,41,79,28,43,7,24,40,53,32,12\n);\nkthLargest(numbers, 5); // -> 77",
        "Source.kthLargest(List.of(9,2,6,6,1,5,8,7), 3) -> 7",
        "Source.kthLargest(List.of(9,2,6,6,1,5,8,7), 4) -> 6",
        "Source.kthLargest(List.of(9,2,6,6,1,5,8,7), 5) -> 6",
        "Source.kthLargest(List.of(10,1,8,5,2,4), 2) -> 8",
        "Source.kthLargest(numbers, 9) -> 68",
        "Source.kthLargest(numbers, 5) -> 77"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Using Sort",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\nclass Source {\n  public static int kthLargest(List<Integer> numbers, int k) {\n    List<Integer> sortedNumbers = new ArrayList<>(numbers);\n    Collections.sort(sortedNumbers);\n    return sortedNumbers.get(sortedNumbers.size() - k);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of list | k = k-value | Time: O(n*log(n)) | Space: O(n)"
        },
        {
          "title": "Using Custom MinHeap",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  static class MinHeap {\n    public List<Double> list;\n\n    public MinHeap() {\n      list = new ArrayList<>();\n    }\n\n    public int size() {\n      return list.size();\n    }\n\n    public boolean isEmpty() {\n      return list.size() == 0;\n    }\n\n    public void swap(int idx1, int idx2) {\n      Double temp = this.list.get(idx1);\n      this.list.set(idx1, this.list.get(idx2));\n      this.list.set(idx2, temp);\n    }\n    \n    public void siftUp(int idx) {\n      int currentIdx = idx;\n      while (currentIdx > 0) {\n        int parentIdx = (int) Math.floor((currentIdx - 1) / 2.0);\n        if (list.get(currentIdx) < list.get(parentIdx)) {\n          swap(currentIdx, parentIdx);\n          currentIdx = parentIdx;\n        } else {\n          break;\n        }\n      }\n    }\n\n    public void insert(Double val) {\n      list.add(val);\n      siftUp(list.size() - 1);\n    }\n\n    public void siftDown(int idx) {\n      int currentIdx = idx;\n      while (currentIdx < this.size() - 1) {\n        int leftChildIdx = currentIdx * 2 + 1;\n        int rightChildIdx = currentIdx * 2 + 2;\n        \n        double leftChildVal = leftChildIdx >= this.size() ? Double.POSITIVE_INFINITY : this.list.get(leftChildIdx);\n        double rightChildVal = rightChildIdx >= this.size() ? Double.POSITIVE_INFINITY : this.list.get(rightChildIdx);\n        \n        double smallerChildVal = leftChildVal < rightChildVal ? leftChildVal : rightChildVal;\n        int smallerChildIdx = leftChildVal < rightChildVal ? leftChildIdx : rightChildIdx;\n\n        if (this.list.get(currentIdx) > smallerChildVal) {\n          this.swap(currentIdx, smallerChildIdx);\n          currentIdx = smallerChildIdx;\n        } else {\n          break;\n        }\n      } \n    }\n\n    public Double extractMin() {\n      if (this.isEmpty()) {\n        return null;\n      }\n\n      if (this.size() == 1) {\n        return this.list.remove(this.list.size() - 1);\n      }\n\n      Double value = this.list.get(0);\n      Double lastVal = this.list.remove(this.list.size() - 1);\n      this.list.set(0, lastVal);\n      this.siftDown(0);\n      return value;\n    }\n  }\n\n  public static int kthLargest(List<Integer> numbers, int k) {\n    MinHeap heap = new MinHeap();\n    for (int num : numbers) {\n      heap.insert((double) num);\n      if (heap.size() > k) {\n        heap.extractMin();\n      }\n    }\n    return heap.extractMin().intValue();\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of list | k = k-value | Time: O(n*log(k)) | Space: O(k)"
        },
        {
          "title": "Using Built-In MinHeap",
          "code": "import java.util.List;\nimport java.util.PriorityQueue;\n\nclass Source {\n  public static int kthLargest(List<Integer> numbers, int k) {\n    PriorityQueue<Integer> minHeap = new PriorityQueue<>();\n\n    for (int num : numbers) {\n      minHeap.add(num);\n      if (minHeap.size() > k) {\n        minHeap.poll();\n      }\n    }\n\n    return minHeap.poll();\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of list | k = k-value | Time: O(n*log(k)) | Space: O(k)"
        }
      ],
      "meta": {
        "name": "kth-largest",
        "slug": "kth-largest",
        "module": "Heap",
        "premium": true,
        "verbose": "Find the k-th largest value in an array.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int kthLargest(List<Integer> numbers, int k) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\nclass Source {\n  public static int kthLargest(List<Integer> numbers, int k) {\n    List<Integer> sortedNumbers = new ArrayList<>(numbers);\n    Collections.sort(sortedNumbers);\n    return sortedNumbers.get(sortedNumbers.size() - k);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "heap::k-smallest": {
      "statement": "Write a method that takes in a list of numbers and a value, k. The method should return the k smallest numbers in the list. The resulting list should be ordered from least to greatest.",
      "examples": [
        "kSmallest(List.of(8, 2, 7, -3, 5, 10), 3) ;\n// -> [-3, 2, 5]",
        "kSmallest(Arrays.asList(84, 22, 52, 69, 71, 22, 88, 100, 13, 89, 79), 4);\n// -> [13, 22, 22, 52]",
        "kSmallest(Arrays.asList(\n  43, 35, 62, 31, 86, 81, 58, 80, 91, 13, 54, 78, \n  75, 69, 60, 8, 22, 12, 30, 79, 100, 2, 64, 57, \n  11, 55, 7, 68, 66, 14, 45, 26, 83, 24, 28, 76, \n  34, 89, 37, 32, 41, 88, 20, 82, 59, 4, 40, 9, \n  74, 23\n), 5);\n// -> [2, 4, 7, 8, 9]"
      ],
      "testCases": [
        "kSmallest(List.of(8, 2, 7, -3, 5, 10), 3) ;\n// -> [-3, 2, 5]",
        "kSmallest(Arrays.asList(84, 22, 52, 69, 71, 22, 88, 100, 13, 89, 79), 4);\n// -> [13, 22, 22, 52]",
        "kSmallest(Arrays.asList(\n  43, 35, 62, 31, 86, 81, 58, 80, 91, 13, 54, 78, \n  75, 69, 60, 8, 22, 12, 30, 79, 100, 2, 64, 57, \n  11, 55, 7, 68, 66, 14, 45, 26, 83, 24, 28, 76, \n  34, 89, 37, 32, 41, 88, 20, 82, 59, 4, 40, 9, \n  74, 23\n), 5);\n// -> [2, 4, 7, 8, 9]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using sort",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\nclass Source {\n  public static List<Integer> kSmallest(List<Integer> numbers, int k) {\n    List<Integer> sortedNumbers = new ArrayList<>(numbers);\n    Collections.sort(sortedNumbers);\n    return sortedNumbers.subList(0, k);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of list | k = k-value | Time: O(n*log(n)) | Space: O(n)"
        },
        {
          "title": "using heap",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.PriorityQueue;\nimport java.util.Comparator;\nimport java.util.Collections;\n\nclass Source {\n  public static List<Integer> kSmallest(List<Integer> numbers, int k) {\n    PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());\n    for (int num : numbers) {\n      maxHeap.add(num);\n      if (maxHeap.size() > k) {\n        maxHeap.poll();\n      }\n    }\n    \n    List<Integer> result = new ArrayList<>();\n    while (maxHeap.size() > 0) {\n      result.add(maxHeap.poll());\n    }\n    \n    Collections.reverse(result);\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of list | k = k-value | Time: O(n*log(k)) | Space: O(k)"
        }
      ],
      "meta": {
        "name": "k smallest",
        "slug": "k-smallest",
        "module": "Heap",
        "premium": true,
        "verbose": "Find the smallest k numbers in an array.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Integer> kSmallest(List<Integer> numbers, int k) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\nclass Source {\n  public static List<Integer> kSmallest(List<Integer> numbers, int k) {\n    List<Integer> sortedNumbers = new ArrayList<>(numbers);\n    Collections.sort(sortedNumbers);\n    return sortedNumbers.subList(0, k);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "exhaustive-recursion::subsets": {
      "statement": "Write a method, *subsets*, that takes in a list as an argument. The method should return a 2D list where each subarray represents one of the possible subsets of the list. The elements within the subsets and the subsets themselves may be returned in any order. You may assume that the input list contains unique elements.",
      "examples": [
        "Source.subsets(List.of(\"a\", \"b\")); // ->\n// [ \n//   [], \n//   [ \"b\" ], \n//   [ \"a\" ], \n//   [ \"a\", \"b\" ] \n// ]",
        "Source.subsets(List.of(\"a\", \"b\", \"c\")); // ->\n// [\n//   [],\n//   [ \"c\" ],\n//   [ \"b\" ],\n//   [ \"b\", \"c\" ],\n//   [ \"a\" ],\n//   [ \"a\", \"c\" ],\n//   [ \"a\", \"b\" ],\n//   [ \"a\", \"b\", \"c\" ]\n// ]",
        "Source.subsets(List.of(\"x\")); // ->\n// [ \n//   [], \n//   [ \"x\" ] \n// ]"
      ],
      "testCases": [
        "Source.subsets(List.of(\"a\", \"b\")); // ->\n// [ \n//   [], \n//   [ \"b\" ], \n//   [ \"a\" ], \n//   [ \"a\", \"b\" ] \n// ]",
        "Source.subsets(List.of(\"a\", \"b\", \"c\")); // ->\n// [\n//   [],\n//   [ \"c\" ],\n//   [ \"b\" ],\n//   [ \"b\", \"c\" ],\n//   [ \"a\" ],\n//   [ \"a\", \"c\" ],\n//   [ \"a\", \"b\" ],\n//   [ \"a\", \"b\", \"c\" ]\n// ]",
        "Source.subsets(List.of(\"x\")); // ->\n// [ \n//   [], \n//   [ \"x\" ] \n// ]",
        "Source.subsets(List.of()); // ->\n// [ \n//   []\n// ]",
        "Source.subsets(List.of(\"q\", \"r\", \"s\", \"t\")); // ->\n// [\n//   [],\n//   [ \"t\" ],\n//   [ \"s\" ],\n//   [ \"s\", \"t\" ],\n//   [ \"r\" ],\n//   [ \"r\", \"t\" ],\n//   [ \"r\", \"s\" ],\n//   [ \"r\", \"s\", \"t\" ],\n//   [ \"q\" ],\n//   [ \"q\", \"t\" ],\n//   [ \"q\", \"s\" ],\n//   [ \"q\", \"s\", \"t\" ],\n//   [ \"q\", \"r\" ],\n//   [ \"q\", \"r\", \"t\" ],\n//   [ \"q\", \"r\", \"s\" ],\n//   [ \"q\", \"r\", \"s\", \"t\" ]\n// ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<List<String>> subsets(List<String> elements) {\n    if (elements.size() == 0) {\n      return List.of(List.of());\n    }\n    \n    List<List<String>> allSubsets = new ArrayList<>();\n    \n    String ele = elements.get(0);\n    List<List<String>> subsetsWithoutEle = subsets(elements.subList(1, elements.size()));\n    allSubsets.addAll(subsetsWithoutEle);\n    \n    for (List<String> subsetWithout : subsetsWithoutEle) {\n      List<String> subsetWith = new ArrayList<>(subsetWithout);\n      subsetWith.add(ele);\n      allSubsets.add(subsetWith);\n    }\n    \n    return allSubsets;\n  }\n\n  public static void run() {    \n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of elements list | Time: ~O(2^n) | Space: ~O(2^n)"
        }
      ],
      "meta": {
        "name": "subsets",
        "slug": "subsets",
        "module": "Exhaustive Recursion",
        "premium": true,
        "verbose": "Given a set, calculate all possible subsets. That's the power set for you math heads.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<List<String>> subsets(List<String> elements) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<List<String>> subsets(List<String> elements) {\n    if (elements.size() == 0) {\n      return List.of(List.of());\n    }\n    \n    List<List<String>> allSubsets = new ArrayList<>();\n    \n    String ele = elements.get(0);\n    List<List<String>> subsetsWithoutEle = subsets(elements.subList(1, elements.size()));\n    allSubsets.addAll(subsetsWithoutEle);\n    \n    for (List<String> subsetWithout : subsetsWithoutEle) {\n      List<String> subsetWith = new ArrayList<>(subsetWithout);\n      subsetWith.add(ele);\n      allSubsets.add(subsetWith);\n    }\n    \n    return allSubsets;\n  }\n\n  public static void run() {    \n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "exhaustive-recursion::permutations": {
      "statement": "Write a method, permutations, that takes in a list an argument. The method should return a 2D list where each subarray represents one of the possible permutations of the list. The subarrays may be returned in any order. You may assume that the input list contains unique elements.",
      "examples": [
        "Source.permutations(List.of(\"a\", \"b\", \"c\")); // -> \n// [ \n//   [ \"a\", \"b\", \"c\" ], \n//   [ \"b\", \"a\", \"c\" ], \n//   [ \"b\", \"c\", \"a\" ], \n//   [ \"a\", \"c\", \"b\" ], \n//   [ \"c\", \"a\", \"b\" ], \n//   [ \"c\", \"b\", \"a\" ] \n// ]",
        "Source.permutations(List.of(\"red\", \"blue\")); // ->\n// [ \n//   [ \"red\", \"blue\" ], \n//   [ \"blue\", \"red\" ] \n// ]",
        "Source.permutations(List.of(\"8\", \"2\", \"1\", \"4\")); // ->\n// [ \n//   [ \"8\", \"2\", \"1\", \"4\" ], [ \"2\", \"8\", \"1\", \"4\" ], \n//   [ \"2\", \"1\", \"8\", \"4\" ], [ \"2\", \"1\", \"4\", \"8\" ], \n//   [ \"8\", \"1\", \"2\", \"4\" ], [ \"1\", \"8\", \"2\", \"4\" ], \n//   [ \"1\", \"2\", \"8\", \"4\" ], [ \"1\", \"2\", \"4\", \"8\" ], \n//   [ \"8\", \"1\", \"4\", \"2\" ], [ \"1\", \"8\", \"4\", \"2\" ], \n//   [ \"1\", \"4\", \"8\", \"2\" ], [ \"1\", \"4\", \"2\", \"8\" ], \n//   [ \"8\", \"2\", \"4\", \"1\" ], [ \"2\", \"8\", \"4\", \"1\" ], \n//   [ \"2\", \"4\", \"8\", \"1\" ], [ \"2\", \"4\", \"1\", \"8\" ], \n//   [ \"8\", \"4\", \"2\", \"1\" ], [ \"4\", \"8\", \"2\", \"1\" ], \n//   [ \"4\", \"2\", \"8\", \"1\" ], [ \"4\", \"2\", \"1\", \"8\" ], \n//   [ \"8\", \"4\", \"1\", \"2\" ], [ \"4\", \"8\", \"1\", \"2\" ], \n//   [ \"4\", \"1\", \"8\", \"2\" ], [ \"4\", \"1\", \"2\", \"8\" ] \n// ]"
      ],
      "testCases": [
        "Source.permutations(List.of(\"a\", \"b\", \"c\")); // -> \n// [ \n//   [ \"a\", \"b\", \"c\" ], \n//   [ \"b\", \"a\", \"c\" ], \n//   [ \"b\", \"c\", \"a\" ], \n//   [ \"a\", \"c\", \"b\" ], \n//   [ \"c\", \"a\", \"b\" ], \n//   [ \"c\", \"b\", \"a\" ] \n// ]",
        "Source.permutations(List.of(\"red\", \"blue\")); // ->\n// [ \n//   [ \"red\", \"blue\" ], \n//   [ \"blue\", \"red\" ] \n// ]",
        "Source.permutations(List.of(\"8\", \"2\", \"1\", \"4\")); // ->\n// [ \n//   [ \"8\", \"2\", \"1\", \"4\" ], [ \"2\", \"8\", \"1\", \"4\" ], \n//   [ \"2\", \"1\", \"8\", \"4\" ], [ \"2\", \"1\", \"4\", \"8\" ], \n//   [ \"8\", \"1\", \"2\", \"4\" ], [ \"1\", \"8\", \"2\", \"4\" ], \n//   [ \"1\", \"2\", \"8\", \"4\" ], [ \"1\", \"2\", \"4\", \"8\" ], \n//   [ \"8\", \"1\", \"4\", \"2\" ], [ \"1\", \"8\", \"4\", \"2\" ], \n//   [ \"1\", \"4\", \"8\", \"2\" ], [ \"1\", \"4\", \"2\", \"8\" ], \n//   [ \"8\", \"2\", \"4\", \"1\" ], [ \"2\", \"8\", \"4\", \"1\" ], \n//   [ \"2\", \"4\", \"8\", \"1\" ], [ \"2\", \"4\", \"1\", \"8\" ], \n//   [ \"8\", \"4\", \"2\", \"1\" ], [ \"4\", \"8\", \"2\", \"1\" ], \n//   [ \"4\", \"2\", \"8\", \"1\" ], [ \"4\", \"2\", \"1\", \"8\" ], \n//   [ \"8\", \"4\", \"1\", \"2\" ], [ \"4\", \"8\", \"1\", \"2\" ], \n//   [ \"4\", \"1\", \"8\", \"2\" ], [ \"4\", \"1\", \"2\", \"8\" ] \n// ]",
        "Source.permutations(List.of()); // ->\n// [\n//  [ ]\n// ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<List<String>> permutations(List<String> elements) {\n    if (elements.size() == 0) {\n      return List.of(List.of());\n    }\n    \n    List<List<String>> allPerms = new ArrayList<>();\n    String firstEle = elements.get(0);\n    \n    List<List<String>> subPerms = permutations(elements.subList(1, elements.size()));\n    for (List<String> subPerm : subPerms) {\n      for (int i = 0; i <= subPerm.size(); i += 1) {\n        List<String> left = subPerm.subList(0, i);\n        List<String> right = subPerm.subList(i, subPerm.size());\n        List<String> newPerm = new ArrayList<>();\n        newPerm.addAll(left);\n        newPerm.add(firstEle);\n        newPerm.addAll(right);\n        allPerms.add(newPerm);\n      }\n    }\n    \n    return allPerms;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of items list | Time: ~O(n!) | Space: ~O(n!)"
        }
      ],
      "meta": {
        "name": "permutations",
        "slug": "permutations",
        "module": "Exhaustive Recursion",
        "premium": true,
        "verbose": "Given a set, calculate all possible permutations.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<List<String>> permutations(List<String> elements) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<List<String>> permutations(List<String> elements) {\n    if (elements.size() == 0) {\n      return List.of(List.of());\n    }\n    \n    List<List<String>> allPerms = new ArrayList<>();\n    String firstEle = elements.get(0);\n    \n    List<List<String>> subPerms = permutations(elements.subList(1, elements.size()));\n    for (List<String> subPerm : subPerms) {\n      for (int i = 0; i <= subPerm.size(); i += 1) {\n        List<String> left = subPerm.subList(0, i);\n        List<String> right = subPerm.subList(i, subPerm.size());\n        List<String> newPerm = new ArrayList<>();\n        newPerm.addAll(left);\n        newPerm.add(firstEle);\n        newPerm.addAll(right);\n        allPerms.add(newPerm);\n      }\n    }\n    \n    return allPerms;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "exhaustive-recursion::create-combinations": {
      "statement": "Write a method, createCombinations, that takes in a list and a length as arguments. The method should return a 2D list representing all of the combinations of the specified length. The items within the combinations and the combinations themselves may be returned in any order. You may assume that the input list contains unique elements and 1 <= k <= items.length.",
      "examples": [
        "Source.createCombinations(List.of(\"a\", \"b\", \"c\"), 2); // ->\n// [\n//   [ \"a\", \"b\" ],\n//   [ \"a\", \"c\" ],\n//   [ \"b\", \"c\" ]\n// ]",
        "Source.createCombinations(List.of(\"q\", \"r\", \"s\", \"t\"), 2); // ->\n// [\n//   [ \"q\", \"r\" ],\n//   [ \"q\", \"s\" ],\n//   [ \"q\", \"t\" ],\n//   [ \"r\", \"s\" ],\n//   [ \"r\", \"t\" ],\n//   [ \"s\", \"t\" ]\n// ]",
        "Source.createCombinations(List.of(\"q\", \"r\", \"s\", \"t\"), 3); // ->\n// [\n//   [ \"q\", \"r\", \"s\" ],\n//   [ \"q\", \"r\", \"t\" ],\n//   [ \"q\", \"s\", \"t\" ],\n//   [ \"r\", \"s\", \"t\" ]\n// ]"
      ],
      "testCases": [
        "Source.createCombinations(List.of(\"a\", \"b\", \"c\"), 2); // ->\n// [\n//   [ \"a\", \"b\" ],\n//   [ \"a\", \"c\" ],\n//   [ \"b\", \"c\" ]\n// ]",
        "Source.createCombinations(List.of(\"q\", \"r\", \"s\", \"t\"), 2); // ->\n// [\n//   [ \"q\", \"r\" ],\n//   [ \"q\", \"s\" ],\n//   [ \"q\", \"t\" ],\n//   [ \"r\", \"s\" ],\n//   [ \"r\", \"t\" ],\n//   [ \"s\", \"t\" ]\n// ]",
        "Source.createCombinations(List.of(\"q\", \"r\", \"s\", \"t\"), 3); // ->\n// [\n//   [ \"q\", \"r\", \"s\" ],\n//   [ \"q\", \"r\", \"t\" ],\n//   [ \"q\", \"s\", \"t\" ],\n//   [ \"r\", \"s\", \"t\" ]\n// ]",
        "Source.createCombinations(List.of(\"1\", \"28\", \"94\"), 3); // ->\n// [\n//   [ \"1\", \"28\", \"94\" ]\n// ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<List<String>> createCombinations(List<String> items, int k) {\n    if (k == 0) {\n      return List.of(List.of());\n    } else if (items.size() == 0) {\n      return List.of();\n    }\n    \n    String ele = items.get(0);\n    \n    List<List<String>> allCombos = new ArrayList<>();\n    for (List<String> combo : createCombinations(items.subList(1, items.size()), k - 1)) {\n      List<String> comboWithEle = new ArrayList<>(combo);\n      comboWithEle.add(ele);\n      allCombos.add(comboWithEle);\n    }\n    \n    allCombos.addAll(createCombinations(items.subList(1, items.size()), k));\n    \n    return allCombos;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of items | k = target length | Time: ~O(n choose k) | Space: ~O(n choose k)"
        }
      ],
      "meta": {
        "name": "create combinations",
        "slug": "create-combinations",
        "module": "Exhaustive Recursion",
        "premium": true,
        "verbose": "Given a set of items, create combinations of a given size.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<List<String>> createCombinations(List<String> items, int k) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<List<String>> createCombinations(List<String> items, int k) {\n    if (k == 0) {\n      return List.of(List.of());\n    } else if (items.size() == 0) {\n      return List.of();\n    }\n    \n    String ele = items.get(0);\n    \n    List<List<String>> allCombos = new ArrayList<>();\n    for (List<String> combo : createCombinations(items.subList(1, items.size()), k - 1)) {\n      List<String> comboWithEle = new ArrayList<>(combo);\n      comboWithEle.add(ele);\n      allCombos.add(comboWithEle);\n    }\n    \n    allCombos.addAll(createCombinations(items.subList(1, items.size()), k));\n    \n    return allCombos;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "exhaustive-recursion::grocery-budget": {
      "statement": "Write a method, groceryBudget, that takes in groceryList and a number budget. Every item in groceryList is a pair containing the item name and price. Your method should return a 2D list of all possible ways to purchase items without spending more than the given budget. The order of the items in the return value does not matter. You cannot purchase an item more than once. You do not have to spend the budget fully.",
      "examples": [
        "groceryBudget(List.of(  \n  Map.entry(\"eggs\", 5),\n  Map.entry(\"milk\", 3),\n  Map.entry(\"butter\", 3)\n), 7); // ->\n// [ \n//   [ \"eggs\" ], \n//   [ \"butter\", \"milk\" ], \n//   [ \"milk\" ], \n//   [ \"butter\" ], \n//   [] \n// ]",
        "groceryBudget(List.of(  \n  Map.entry(\"eggs\", 5),\n  Map.entry(\"milk\", 3),\n  Map.entry(\"butter\", 3)\n), 20); // ->\n// [ \n//   [ \"butter\", \"milk\", \"eggs\" ], \n//   [ \"milk\", \"eggs\" ], \n//   [ \"butter\", \"eggs\" ], \n//   [ \"eggs\" ], \n//   [ \"butter\", \"milk\" ], \n//   [ \"milk\" ], \n//   [ \"butter\" ], \n//   [] \n// ]",
        "groceryBudget(List.of(  \n  Map.entry(\"eggs\", 5),\n  Map.entry(\"milk\", 3),\n  Map.entry(\"butter\", 3),\n  Map.entry(\"garlic\", 1)\n), 7); // ->\n// [ \n//   [ \"garlic\", \"eggs\" ], \n//   [ \"eggs\" ], \n//   [ \"garlic\", \"butter\", \"milk\" ], \n//   [ \"butter\", \"milk\" ], \n//   [ \"garlic\", \"milk\" ], \n//   [ \"milk\" ], \n//   [ \"garlic\", \"butter\" ], \n//   [ \"butter\" ], \n//   [ \"garlic\" ], \n//   [] \n// ]"
      ],
      "testCases": [
        "groceryBudget(List.of(  \n  Map.entry(\"eggs\", 5),\n  Map.entry(\"milk\", 3),\n  Map.entry(\"butter\", 3)\n), 7); // ->\n// [ \n//   [ \"eggs\" ], \n//   [ \"butter\", \"milk\" ], \n//   [ \"milk\" ], \n//   [ \"butter\" ], \n//   [] \n// ]",
        "groceryBudget(List.of(  \n  Map.entry(\"eggs\", 5),\n  Map.entry(\"milk\", 3),\n  Map.entry(\"butter\", 3)\n), 20); // ->\n// [ \n//   [ \"butter\", \"milk\", \"eggs\" ], \n//   [ \"milk\", \"eggs\" ], \n//   [ \"butter\", \"eggs\" ], \n//   [ \"eggs\" ], \n//   [ \"butter\", \"milk\" ], \n//   [ \"milk\" ], \n//   [ \"butter\" ], \n//   [] \n// ]",
        "groceryBudget(List.of(  \n  Map.entry(\"eggs\", 5),\n  Map.entry(\"milk\", 3),\n  Map.entry(\"butter\", 3),\n  Map.entry(\"garlic\", 1)\n), 7); // ->\n// [ \n//   [ \"garlic\", \"eggs\" ], \n//   [ \"eggs\" ], \n//   [ \"garlic\", \"butter\", \"milk\" ], \n//   [ \"butter\", \"milk\" ], \n//   [ \"garlic\", \"milk\" ], \n//   [ \"milk\" ], \n//   [ \"garlic\", \"butter\" ], \n//   [ \"butter\" ], \n//   [ \"garlic\" ], \n//   [] \n// ]",
        "groceryBudget(List.of(  \n  Map.entry(\"salt\", 1),\n  Map.entry(\"apples\", 5),\n  Map.entry(\"tofu\", 7),\n  Map.entry(\"chicken\", 4),\n  Map.entry(\"salmon\", 10)\n), 9); // ->\n// [ \n//   [ \"salt\", \"apples\" ], \n//   [ \"chicken\", \"apples\" ], \n//   [ \"apples\" ], \n//   [ \"salt\", \"tofu\" ], \n//   [ \"tofu\" ], \n//   [ \"chicken\", \"salt\" ], \n//   [ \"salt\" ], \n//   [ \"chicken\" ], \n//   [] \n// ]",
        "groceryBudget(List.of(  \n  Map.entry(\"apples\", 5),\n  Map.entry(\"tofu\", 7),\n  Map.entry(\"salt\", 1),\n  Map.entry(\"chicken\", 4),\n  Map.entry(\"salmon\", 10),\n  Map.entry(\"thyme\", 2)\n), 12); // ->\n// [ \n//   [ \"tofu\", \"apples\" ], \n//   [ \"thyme\", \"chicken\", \"salt\", \"apples\" ], \n//   [ \"chicken\", \"salt\", \"apples\" ], \n//   [ \"thyme\", \"salt\", \"apples\" ], \n//   [ \"salt\", \"apples\" ], \n//   [ \"thyme\", \"chicken\", \"apples\" ], \n//   [ \"chicken\", \"apples\" ], \n//   [ \"thyme\", \"apples\" ], \n//   [ \"apples\" ], \n//   [ \"chicken\", \"salt\", \"tofu\" ], \n//   [ \"thyme\", \"salt\", \"tofu\" ], \n//   [ \"salt\", \"tofu\" ], \n//   [ \"chicken\", \"tofu\" ], \n//   [ \"thyme\", \"tofu\" ], \n//   [ \"tofu\" ], \n//   [ \"thyme\", \"chicken\", \"salt\" ], \n//   [ \"chicken\", \"salt\" ], \n//   [ \"salmon\", \"salt\" ], \n//   [ \"thyme\", \"salt\" ], \n//   [ \"salt\" ], \n//   [ \"thyme\", \"chicken\" ], \n//   [ \"chicken\" ], \n//   [ \"thyme\", \"salmon\" ], \n//   [ \"salmon\" ], \n//   [ \"thyme\" ], \n//   [] \n// ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "import java.util.List;\nimport java.util.Map;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<List<String>> groceryBudget(List<Map.Entry<String, Integer>> groceryList, int budget) {\n    if (budget < 0) {\n      return List.of();\n    }\n    \n    if (groceryList.size() == 0) {\n      List<String> innerList = new ArrayList<>(); \n      return List.of(innerList);\n    }\n\n    List<List<String>> allLists = new ArrayList<>();\n    \n    String currentItemName = groceryList.get(0).getKey();\n    int currentItemPrice = groceryList.get(0).getValue();\n    for (List<String> listWithCurrentItem: groceryBudget(groceryList.subList(1, groceryList.size()), budget - currentItemPrice)) {\n      listWithCurrentItem.add(currentItemName);\n      allLists.add(listWithCurrentItem);\n    }\n\n    List<List<String>> listsWithoutCurrentItem = groceryBudget(groceryList.subList(1, groceryList.size()), budget);\n    allLists.addAll(listsWithoutCurrentItem);\n    return allLists;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = # of groceries | Time: ~O(2^n) | Space: ~O(2^n)"
        }
      ],
      "meta": {
        "name": "grocery budget",
        "slug": "grocery-budget",
        "module": "Exhaustive Recursion",
        "premium": true,
        "verbose": "Calculate all possible ways to buy groceries given a budget.",
        "stub": "import java.util.List;\nimport java.util.Map;\n\nclass Source {\n  public static List<List<String>> groceryBudget(List<Map.Entry<String, Integer>> groceryList, int budget) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.Map;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<List<String>> groceryBudget(List<Map.Entry<String, Integer>> groceryList, int budget) {\n    if (budget < 0) {\n      return List.of();\n    }\n    \n    if (groceryList.size() == 0) {\n      List<String> innerList = new ArrayList<>(); \n      return List.of(innerList);\n    }\n\n    List<List<String>> allLists = new ArrayList<>();\n    \n    String currentItemName = groceryList.get(0).getKey();\n    int currentItemPrice = groceryList.get(0).getValue();\n    for (List<String> listWithCurrentItem: groceryBudget(groceryList.subList(1, groceryList.size()), budget - currentItemPrice)) {\n      listWithCurrentItem.add(currentItemName);\n      allLists.add(listWithCurrentItem);\n    }\n\n    List<List<String>> listsWithoutCurrentItem = groceryBudget(groceryList.subList(1, groceryList.size()), budget);\n    allLists.addAll(listsWithoutCurrentItem);\n    return allLists;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "exhaustive-recursion::lining-up": {
      "statement": "Write a method, liningUp, that takes in a list of people and a capacity number. We need to add people to the waitlist for a popular restaurant, but space is limited. The method should return a 2D list containing all the possible orders by which the people can line up. A valid line must be filled up exactly to the capacity.",
      "examples": [
        "liningUp(List.of(\"jason\", \"jen\", \"cody\", \"vicky\"), 3); // ->\n// [ \n//   [ \"jason\", \"jen\", \"cody\" ], \n//   [ \"jen\", \"jason\", \"cody\" ], \n//   [ \"jen\", \"cody\", \"jason\" ], \n//   [ \"jason\", \"cody\", \"jen\" ], \n//   [ \"cody\", \"jason\", \"jen\" ], \n//   [ \"cody\", \"jen\", \"jason\" ], \n//   [ \"jason\", \"jen\", \"vicky\" ], \n//   [ \"jen\", \"jason\", \"vicky\" ], \n//   [ \"jen\", \"vicky\", \"jason\" ], \n//   [ \"jason\", \"vicky\", \"jen\" ], \n//   [ \"vicky\", \"jason\", \"jen\" ], \n//   [ \"vicky\", \"jen\", \"jason\" ], \n//   [ \"jason\", \"cody\", \"vicky\" ], \n//   [ \"cody\", \"jason\", \"vicky\" ], \n//   [ \"cody\", \"vicky\", \"jason\" ], \n//   [ \"jason\", \"vicky\", \"cody\" ], \n//   [ \"vicky\", \"jason\", \"cody\" ], \n//   [ \"vicky\", \"cody\", \"jason\" ], \n//   [ \"jen\", \"cody\", \"vicky\" ], \n//   [ \"cody\", \"jen\", \"vicky\" ], \n//   [ \"cody\", \"vicky\", \"jen\" ], \n//   [ \"jen\", \"vicky\", \"cody\" ], \n//   [ \"vicky\", \"jen\", \"cody\" ], \n//   [ \"vicky\", \"cody\", \"jen\" ] \n// ]",
        "liningUp(List.of(\"autumn\", \"anj\", \"aud\"), 2); // ->\n// [ \n//   [ \"autumn\", \"anj\" ], \n//   [ \"anj\", \"autumn\" ], \n//   [ \"autumn\", \"aud\" ], \n//   [ \"aud\", \"autumn\" ], \n//   [ \"anj\", \"aud\" ], \n//   [ \"aud\", \"anj\" ] \n// ]",
        "liningUp(List.of(\"anj\", \"aud\"), 2); // ->\n// [ \n//   [ \"anj\", \"aud\" ], \n//   [ \"aud\", \"anj\" ] \n// ]"
      ],
      "testCases": [
        "liningUp(List.of(\"jason\", \"jen\", \"cody\", \"vicky\"), 3); // ->\n// [ \n//   [ \"jason\", \"jen\", \"cody\" ], \n//   [ \"jen\", \"jason\", \"cody\" ], \n//   [ \"jen\", \"cody\", \"jason\" ], \n//   [ \"jason\", \"cody\", \"jen\" ], \n//   [ \"cody\", \"jason\", \"jen\" ], \n//   [ \"cody\", \"jen\", \"jason\" ], \n//   [ \"jason\", \"jen\", \"vicky\" ], \n//   [ \"jen\", \"jason\", \"vicky\" ], \n//   [ \"jen\", \"vicky\", \"jason\" ], \n//   [ \"jason\", \"vicky\", \"jen\" ], \n//   [ \"vicky\", \"jason\", \"jen\" ], \n//   [ \"vicky\", \"jen\", \"jason\" ], \n//   [ \"jason\", \"cody\", \"vicky\" ], \n//   [ \"cody\", \"jason\", \"vicky\" ], \n//   [ \"cody\", \"vicky\", \"jason\" ], \n//   [ \"jason\", \"vicky\", \"cody\" ], \n//   [ \"vicky\", \"jason\", \"cody\" ], \n//   [ \"vicky\", \"cody\", \"jason\" ], \n//   [ \"jen\", \"cody\", \"vicky\" ], \n//   [ \"cody\", \"jen\", \"vicky\" ], \n//   [ \"cody\", \"vicky\", \"jen\" ], \n//   [ \"jen\", \"vicky\", \"cody\" ], \n//   [ \"vicky\", \"jen\", \"cody\" ], \n//   [ \"vicky\", \"cody\", \"jen\" ] \n// ]",
        "liningUp(List.of(\"autumn\", \"anj\", \"aud\"), 2); // ->\n// [ \n//   [ \"autumn\", \"anj\" ], \n//   [ \"anj\", \"autumn\" ], \n//   [ \"autumn\", \"aud\" ], \n//   [ \"aud\", \"autumn\" ], \n//   [ \"anj\", \"aud\" ], \n//   [ \"aud\", \"anj\" ] \n// ]",
        "liningUp(List.of(\"anj\", \"aud\"), 2); // ->\n// [ \n//   [ \"anj\", \"aud\" ], \n//   [ \"aud\", \"anj\" ] \n// ]",
        "liningUp(List.of(\"anj\", \"aud\"), 1); // ->\n// [ \n//   [ \"anj\" ], \n//   [ \"aud\" ] \n// ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<List<String>> liningUp(List<String> people, int capacity) {\n    if (capacity > people.size()) {\n      return List.of();\n    }\n\n    if (capacity == 0) {\n      return List.of(new ArrayList<>());\n    }\n\n    List<List<String>> allLines = new ArrayList<>();\n    \n    String currentPerson = people.get(0);\n    List<String> remainingPeople = people.subList(1, people.size());\n\n    for (List<String> line : liningUp(remainingPeople, capacity - 1)) {\n      for (int i = 0; i <= line.size(); i += 1) {\n        List<String> lineWithCurrent = new ArrayList<>(line);\n        lineWithCurrent.add(i, currentPerson);\n        allLines.add(lineWithCurrent);\n      }\n    }\n\n    for (List<String> lineWithoutCurrent : liningUp(remainingPeople, capacity)) {\n      allLines.add(lineWithoutCurrent);\n    }\n\n    return allLines;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = # of people | k = capacity | Time: ~O(n! / (n - k)!) | Space: ~O(n! / (n - k)!)"
        }
      ],
      "meta": {
        "name": "lining up",
        "slug": "lining-up",
        "module": "Exhaustive Recursion",
        "premium": true,
        "verbose": "Calculate all possible ways a group of people can form a line.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<List<String>> liningUp(List<String> people, int capacity) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<List<String>> liningUp(List<String> people, int capacity) {\n    if (capacity > people.size()) {\n      return List.of();\n    }\n\n    if (capacity == 0) {\n      return List.of(new ArrayList<>());\n    }\n\n    List<List<String>> allLines = new ArrayList<>();\n    \n    String currentPerson = people.get(0);\n    List<String> remainingPeople = people.subList(1, people.size());\n\n    for (List<String> line : liningUp(remainingPeople, capacity - 1)) {\n      for (int i = 0; i <= line.size(); i += 1) {\n        List<String> lineWithCurrent = new ArrayList<>(line);\n        lineWithCurrent.add(i, currentPerson);\n        allLines.add(lineWithCurrent);\n      }\n    }\n\n    for (List<String> lineWithoutCurrent : liningUp(remainingPeople, capacity)) {\n      allLines.add(lineWithoutCurrent);\n    }\n\n    return allLines;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "exhaustive-recursion::possible-paths": {
      "statement": "Write a method that takes in a graph adjacency list, a source node, and a destination node. The method should return a list containing all possible paths that travel between the source and destination. You can assume that the graph is a DAG (directed-acyclic-graph).",
      "examples": [
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"b\", \"c\", \"d\"),\n  \"b\", List.of(\"d\"),\n  \"c\", List.of(\"d\"),\n  \"d\", List.of()\n);\npossiblePaths(graph, \"a\", \"d\"); // ->\n// [\n//   [\"a\", \"b\", \"d\"],\n//   [\"a\", \"c\", \"d\"],\n//   [\"a\", \"d\"]\n// ]",
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"b\", \"c\", \"d\"),\n  \"b\", List.of(\"d\"),\n  \"c\", List.of(\"d\"),\n  \"d\", List.of()\n);\npossiblePaths(graph, \"c\", \"b\"); // ->\n// []",
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"b\", \"d\"),\n  \"b\", List.of(\"c\", \"e\"),\n  \"c\", List.of(\"e\"),\n  \"d\", List.of(\"b\", \"f\"),\n  \"e\", List.of(\"f\"),\n  \"f\", List.of()\n);\npossiblePaths(graph, \"a\", \"c\"); // ->\n// [\n//   [\"a\", \"b\", \"c\"],\n//   [\"a\", \"d\", \"b\", \"c\"]\n// ]"
      ],
      "testCases": [
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"b\", \"c\", \"d\"),\n  \"b\", List.of(\"d\"),\n  \"c\", List.of(\"d\"),\n  \"d\", List.of()\n);\npossiblePaths(graph, \"a\", \"d\"); // ->\n// [\n//   [\"a\", \"b\", \"d\"],\n//   [\"a\", \"c\", \"d\"],\n//   [\"a\", \"d\"]\n// ]",
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"b\", \"c\", \"d\"),\n  \"b\", List.of(\"d\"),\n  \"c\", List.of(\"d\"),\n  \"d\", List.of()\n);\npossiblePaths(graph, \"c\", \"b\"); // ->\n// []",
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"b\", \"d\"),\n  \"b\", List.of(\"c\", \"e\"),\n  \"c\", List.of(\"e\"),\n  \"d\", List.of(\"b\", \"f\"),\n  \"e\", List.of(\"f\"),\n  \"f\", List.of()\n);\npossiblePaths(graph, \"a\", \"c\"); // ->\n// [\n//   [\"a\", \"b\", \"c\"],\n//   [\"a\", \"d\", \"b\", \"c\"]\n// ]",
        "Map<String, List<String>> graph = Map.of(\n  \"a\", List.of(\"b\", \"d\"),\n  \"b\", List.of(\"c\", \"e\"),\n  \"c\", List.of(\"e\"),\n  \"d\", List.of(\"b\", \"f\"),\n  \"e\", List.of(\"f\"),\n  \"f\", List.of()\n);\npossiblePaths(graph, \"a\", \"f\"); // ->\n// [\n//   [\"a\", \"b\", \"c\", \"e\", \"f\"],\n//   [\"a\", \"b\", \"e\", \"f\"],\n//   [\"a\", \"d\", \"b\", \"c\", \"e\", \"f\"],\n//   [\"a\", \"d\", \"b\", \"e\", \"f\"],\n//   [\"a\", \"d\", \"f\"]\n// ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.Map;\n\nclass Source {\n  public static List<List<String>> possiblePaths(Map<String, List<String>> graph, String src, String dst) {\n    List<List<String>> paths = traversePaths(graph, src, dst);\n    for (List<String> path : paths) {\n      Collections.reverse(path);\n    }\n    return paths;\n  }\n  \n  private static List<List<String>> traversePaths(Map<String, List<String>> graph, String src, String dst) {\n    if (src == dst) {\n      List<String> innerList = new ArrayList<>();\n      innerList.add(src);\n      return List.of( innerList );\n    }\n\n    List<List<String>> allPaths = new ArrayList<>();\n    for (String neighbor : graph.get(src)) {\n      for (List<String> neighborPath : traversePaths(graph, neighbor, dst)) {\n        neighborPath.add(src);\n        allPaths.add(neighborPath);    \n      }\n    }\n    return allPaths;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n*2^n) | Space: O(n*2^n)"
        }
      ],
      "meta": {
        "name": "possible paths",
        "slug": "possible-paths",
        "module": "Exhaustive Recursion",
        "premium": true,
        "verbose": "Return all possible paths between two nodes in a graph",
        "stub": "import java.util.Map;\nimport java.util.List;\n\nclass Source {\n  public static List<List<String>> possiblePaths(Map<String, List<String>> graph, String src, String dst) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.Map;\n\nclass Source {\n  public static List<List<String>> possiblePaths(Map<String, List<String>> graph, String src, String dst) {\n    List<List<String>> paths = traversePaths(graph, src, dst);\n    for (List<String> path : paths) {\n      Collections.reverse(path);\n    }\n    return paths;\n  }\n  \n  private static List<List<String>> traversePaths(Map<String, List<String>> graph, String src, String dst) {\n    if (src == dst) {\n      List<String> innerList = new ArrayList<>();\n      innerList.add(src);\n      return List.of( innerList );\n    }\n\n    List<List<String>> allPaths = new ArrayList<>();\n    for (String neighbor : graph.get(src)) {\n      for (List<String> neighborPath : traversePaths(graph, neighbor, dst)) {\n        neighborPath.add(src);\n        allPaths.add(neighborPath);    \n      }\n    }\n    return allPaths;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "exhaustive-recursion::parenthetical-possibilities": {
      "statement": "Write a method, parentheticalPossibilities, that takes in a string as an argument. The method should return a list containing all of the strings that could be generated by expanding all parentheses of the string into its possibilities. For example, the possibilities for \"x(mn)yz\" are \"xmyz\", \"xnyz\".",
      "examples": [
        "Source.parentheticalPossibilities(\"x(mn)yz\"); // -> \n// [ \"xmyz\", \"xnyz\" ]",
        "Source.parentheticalPossibilities(\"(qr)ab(stu)c\"); // ->\n// [ \"qabsc\", \"qabtc\", \"qabuc\", \"rabsc\", \"rabtc\", \"rabuc\" ]",
        "Source.parentheticalPossibilities(\"taco\"); // ->\n// [\"taco\"]"
      ],
      "testCases": [
        "Source.parentheticalPossibilities(\"x(mn)yz\"); // -> \n// [ \"xmyz\", \"xnyz\" ]",
        "Source.parentheticalPossibilities(\"(qr)ab(stu)c\"); // ->\n// [ \"qabsc\", \"qabtc\", \"qabuc\", \"rabsc\", \"rabtc\", \"rabuc\" ]",
        "Source.parentheticalPossibilities(\"taco\"); // ->\n// [\"taco\"]",
        "Source.parentheticalPossibilities(\"\"); // ->\n// [\"\"]",
        "Source.parentheticalPossibilities(\"(etc)(blvd)(cat)\"); // ->\n// [\n//  \"ebc\", \"eba\", \"ebt\", \"elc\", \"ela\",\n//  \"elt\", \"evc\", \"eva\", \"evt\", \"edc\",\n//  \"eda\", \"edt\", \"tbc\", \"tba\", \"tbt\",\n//  \"tlc\", \"tla\", \"tlt\", \"tvc\", \"tva\",\n//  \"tvt\", \"tdc\", \"tda\", \"tdt\", \"cbc\",\n//  \"cba\", \"cbt\", \"clc\", \"cla\", \"clt\",\n//  \"cvc\", \"cva\", \"cvt\", \"cdc\", \"cda\",\n//  \"cdt\"\n// ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<String> parentheticalPossibilities(String s) {\n    if (s.length() == 0) {\n      return List.of(\"\");\n    }\n    \n    List<String> groupInfo = parseGroup(s);\n    String group = groupInfo.get(0);\n    String remainder = groupInfo.get(1);\n    \n    List<String> suffixes = parentheticalPossibilities(remainder);\n    \n    List<String> result = new ArrayList<>();\n    for (char ch : group.toCharArray()) {\n      for (String suffix : suffixes) {\n        result.add(ch + suffix);\n      }\n    }\n    \n    return result;\n  }\n  \n  private static List<String> parseGroup(String s) {\n    if (s.charAt(0) == '(') {\n      int closeIndex = s.indexOf(')');\n      String group = s.substring(1, closeIndex);\n      String remainder = s.substring(closeIndex + 1, s.length());\n      return List.of(group, remainder);\n    } else {\n      String group = String.valueOf(s.charAt(0));\n      String remainder = s.substring(1, s.length());\n      return List.of(group, remainder);\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of the string, m = length of largest parenthetical group | Time: ~O(m^n) | Space: ~O(m^n)"
        }
      ],
      "meta": {
        "name": "parenthetical possibilities",
        "slug": "parenthetical-possibilities",
        "module": "Exhaustive Recursion",
        "premium": true,
        "verbose": "Expand the parentheses of a string.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<String> parentheticalPossibilities(String s) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<String> parentheticalPossibilities(String s) {\n    if (s.length() == 0) {\n      return List.of(\"\");\n    }\n    \n    List<String> groupInfo = parseGroup(s);\n    String group = groupInfo.get(0);\n    String remainder = groupInfo.get(1);\n    \n    List<String> suffixes = parentheticalPossibilities(remainder);\n    \n    List<String> result = new ArrayList<>();\n    for (char ch : group.toCharArray()) {\n      for (String suffix : suffixes) {\n        result.add(ch + suffix);\n      }\n    }\n    \n    return result;\n  }\n  \n  private static List<String> parseGroup(String s) {\n    if (s.charAt(0) == '(') {\n      int closeIndex = s.indexOf(')');\n      String group = s.substring(1, closeIndex);\n      String remainder = s.substring(closeIndex + 1, s.length());\n      return List.of(group, remainder);\n    } else {\n      String group = String.valueOf(s.charAt(0));\n      String remainder = s.substring(1, s.length());\n      return List.of(group, remainder);\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "exhaustive-recursion::substitute-synonyms": {
      "statement": "Write a method, substitutingSynonyms, that takes in a sentence and a map as arguments. The map contains words as keys whose values are arrays containing synonyms. The method should return a list containing all possible sentences that can be formed by substituting words of the sentence with their synonyms. You may return the possible sentences in any order, as long as you return all of them.",
      "examples": [
        "String sentence = \"follow the yellow brick road\";\nMap<String, List<String>> synonyms = Map.of(\n  \"follow\", List.of(\"chase\", \"pursue\"),\n  \"yellow\", List.of(\"gold\", \"amber\", \"lemon\")\n);\n\nSource.substituteSynonyms(sentence, synonyms);\n// [\n//   \"chase the gold brick road\",\n//   \"chase the amber brick road\",\n//   \"chase the lemon brick road\",\n//   \"pursue the gold brick road\",\n//   \"pursue the amber brick road\",\n//   \"pursue the lemon brick road\"\n// ]",
        "String sentence = \"I think its gonna be a long long time\";\nMap<String, List<String>> synonyms = Map.of(\n  \"think\", List.of(\"believe\", \"reckon\"),\n  \"long\", List.of(\"lengthy\", \"prolonged\")\n);\n\nSource.substituteSynonyms(sentence, synonyms);\n// [\n//   \"I believe it's gonna be a lengthy lengthy time\",\n//   \"I believe it's gonna be a lengthy prolonged time\",\n//   \"I believe it's gonna be a prolonged lengthy time\",\n//   \"I believe it's gonna be a prolonged prolonged time\",\n//   \"I reckon it's gonna be a lengthy lengthy time\",\n//   \"I reckon it's gonna be a lengthy prolonged time\",\n//   \"I reckon it's gonna be a prolonged lengthy time\",\n//   \"I reckon it's gonna be a prolonged prolonged time\"\n// ]",
        "String sentence = \"palms sweaty knees weak arms heavy\";\nMap<String, List<String>> synonyms = Map.of(\n  \"palms\", List.of(\"hands\", \"fists\"),\n  \"heavy\", List.of(\"weighty\", \"hefty\", \"burdensome\"),\n  \"weak\", List.of(\"fragile\", \"feeble\", \"frail\", \"sickly\")\n);\n\nSource.substituteSynonyms(sentence, synonyms);\n// [\n//   \"hands sweaty knees fragile arms weighty\",\n//   \"hands sweaty knees fragile arms hefty\",\n//   \"hands sweaty knees fragile arms burdensome\",\n//   \"hands sweaty knees feeble arms weighty\",\n//   \"hands sweaty knees feeble arms hefty\",\n//   \"hands sweaty knees feeble arms burdensome\",\n//   \"hands sweaty knees frail arms weighty\",\n//   \"hands sweaty knees frail arms hefty\",\n//   \"hands sweaty knees frail arms burdensome\",\n//   \"hands sweaty knees sickly arms weighty\",\n//   \"hands sweaty knees sickly arms hefty\",\n//   \"hands sweaty knees sickly arms burdensome\",\n//   \"fists sweaty knees fragile arms weighty\",\n//   \"fists sweaty knees fragile arms hefty\",\n//   \"fists sweaty knees fragile arms burdensome\",\n//   \"fists sweaty knees feeble arms weighty\",\n//   \"fists sweaty knees feeble arms hefty\",\n//   \"fists sweaty knees feeble arms burdensome\",\n//   \"fists sweaty knees frail arms weighty\",\n//   \"fists sweaty knees frail arms hefty\",\n//   \"fists sweaty knees frail arms burdensome\",\n//   \"fists sweaty knees sickly arms weighty\",\n//   \"fists sweaty knees sickly arms hefty\",\n//   \"fists sweaty knees sickly arms burdensome\"\n// ]"
      ],
      "testCases": [
        "String sentence = \"follow the yellow brick road\";\nMap<String, List<String>> synonyms = Map.of(\n  \"follow\", List.of(\"chase\", \"pursue\"),\n  \"yellow\", List.of(\"gold\", \"amber\", \"lemon\")\n);\n\nSource.substituteSynonyms(sentence, synonyms);\n// [\n//   \"chase the gold brick road\",\n//   \"chase the amber brick road\",\n//   \"chase the lemon brick road\",\n//   \"pursue the gold brick road\",\n//   \"pursue the amber brick road\",\n//   \"pursue the lemon brick road\"\n// ]",
        "String sentence = \"I think its gonna be a long long time\";\nMap<String, List<String>> synonyms = Map.of(\n  \"think\", List.of(\"believe\", \"reckon\"),\n  \"long\", List.of(\"lengthy\", \"prolonged\")\n);\n\nSource.substituteSynonyms(sentence, synonyms);\n// [\n//   \"I believe it's gonna be a lengthy lengthy time\",\n//   \"I believe it's gonna be a lengthy prolonged time\",\n//   \"I believe it's gonna be a prolonged lengthy time\",\n//   \"I believe it's gonna be a prolonged prolonged time\",\n//   \"I reckon it's gonna be a lengthy lengthy time\",\n//   \"I reckon it's gonna be a lengthy prolonged time\",\n//   \"I reckon it's gonna be a prolonged lengthy time\",\n//   \"I reckon it's gonna be a prolonged prolonged time\"\n// ]",
        "String sentence = \"palms sweaty knees weak arms heavy\";\nMap<String, List<String>> synonyms = Map.of(\n  \"palms\", List.of(\"hands\", \"fists\"),\n  \"heavy\", List.of(\"weighty\", \"hefty\", \"burdensome\"),\n  \"weak\", List.of(\"fragile\", \"feeble\", \"frail\", \"sickly\")\n);\n\nSource.substituteSynonyms(sentence, synonyms);\n// [\n//   \"hands sweaty knees fragile arms weighty\",\n//   \"hands sweaty knees fragile arms hefty\",\n//   \"hands sweaty knees fragile arms burdensome\",\n//   \"hands sweaty knees feeble arms weighty\",\n//   \"hands sweaty knees feeble arms hefty\",\n//   \"hands sweaty knees feeble arms burdensome\",\n//   \"hands sweaty knees frail arms weighty\",\n//   \"hands sweaty knees frail arms hefty\",\n//   \"hands sweaty knees frail arms burdensome\",\n//   \"hands sweaty knees sickly arms weighty\",\n//   \"hands sweaty knees sickly arms hefty\",\n//   \"hands sweaty knees sickly arms burdensome\",\n//   \"fists sweaty knees fragile arms weighty\",\n//   \"fists sweaty knees fragile arms hefty\",\n//   \"fists sweaty knees fragile arms burdensome\",\n//   \"fists sweaty knees feeble arms weighty\",\n//   \"fists sweaty knees feeble arms hefty\",\n//   \"fists sweaty knees feeble arms burdensome\",\n//   \"fists sweaty knees frail arms weighty\",\n//   \"fists sweaty knees frail arms hefty\",\n//   \"fists sweaty knees frail arms burdensome\",\n//   \"fists sweaty knees sickly arms weighty\",\n//   \"fists sweaty knees sickly arms hefty\",\n//   \"fists sweaty knees sickly arms burdensome\"\n// ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "recursive",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.Map;\n\nclass Source {\n  public static List<String> substituteSynonyms(String sentence, Map<String, List<String>> synonyms) {\n    List<String> words = Arrays.asList(sentence.split(\" \"));\n    List<List<String>> lists = generate(words, synonyms);\n    \n    List<String> finalSentences = new ArrayList<>();\n    for (List<String> list : lists) {\n      finalSentences.add(String.join(\" \", list));\n    }\n    return finalSentences;\n  }\n  \n  public static List<List<String>> generate(List<String> words, Map<String, List<String>> synonyms) {\n    if (words.size() == 0) {\n      return List.of(List.of());\n    }\n    \n    String word = words.get(0);\n    List<List<String>> subLists = generate(words.subList(1, words.size()), synonyms);\n    \n    if (synonyms.containsKey(word)) {\n      List<List<String>> results = new ArrayList<>();\n      for (String substitute : synonyms.get(word)) {\n        for (List<String> subList : subLists) {\n          List<String> result = new ArrayList<>();\n          result.add(substitute);\n          result.addAll(subList);\n\n          results.add(result);\n        }\n      }\n      return results;\n    } else {\n      List<List<String>> results = new ArrayList<>();\n      for (List<String> subList : subLists) {\n        List<String> result = new ArrayList<>();\n        result.add(word);\n        result.addAll(subList);\n        \n        results.add(result);\n      }\n      return results;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of words in sentence | m = max number of synonyms for a word | Time: ~O(m^n) | Space: ~O(m^n)"
        }
      ],
      "meta": {
        "name": "substitute synonyms",
        "slug": "substitute-synonyms",
        "module": "Exhaustive Recursion",
        "premium": true,
        "verbose": "Generate all sentences formed by substituting words.",
        "stub": "import java.util.List;\nimport java.util.Map;\n\nclass Source {\n  public static List<String> substituteSynonyms(String sentence, Map<String, List<String>> synonyms) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.Map;\n\nclass Source {\n  public static List<String> substituteSynonyms(String sentence, Map<String, List<String>> synonyms) {\n    List<String> words = Arrays.asList(sentence.split(\" \"));\n    List<List<String>> lists = generate(words, synonyms);\n    \n    List<String> finalSentences = new ArrayList<>();\n    for (List<String> list : lists) {\n      finalSentences.add(String.join(\" \", list));\n    }\n    return finalSentences;\n  }\n  \n  public static List<List<String>> generate(List<String> words, Map<String, List<String>> synonyms) {\n    if (words.size() == 0) {\n      return List.of(List.of());\n    }\n    \n    String word = words.get(0);\n    List<List<String>> subLists = generate(words.subList(1, words.size()), synonyms);\n    \n    if (synonyms.containsKey(word)) {\n      List<List<String>> results = new ArrayList<>();\n      for (String substitute : synonyms.get(word)) {\n        for (List<String> subList : subLists) {\n          List<String> result = new ArrayList<>();\n          result.add(substitute);\n          result.addAll(subList);\n\n          results.add(result);\n        }\n      }\n      return results;\n    } else {\n      List<List<String>> results = new ArrayList<>();\n      for (List<String> subList : subLists) {\n        List<String> result = new ArrayList<>();\n        result.add(word);\n        result.addAll(subList);\n        \n        results.add(result);\n      }\n      return results;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::knight-attack": {
      "statement": "A knight and a pawn are on a chess board. Can you figure out the minimum number of moves required for the knight to travel to the same position of the pawn? On a single move, the knight can move in an \"L\" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has [eight possible positions](https://structy-static.s3.amazonaws.com/knight-movement.png) it can move to. Write a method, knightAttack, that takes in 5 arguments: n, kr, kc, pr, pc - n = the length of the chess board - kr = the starting row of the knight - kc = the starting column of the knight - pr = the row of the pawn - pc = the column of the pawn The method should return a number representing the minimum number of moves required for the knight to land ontop of the pawn. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight to attack the pawn, then return -1.",
      "examples": [
        "Source.knightAttack(8, 1, 1, 2, 2); // -> 2",
        "Source.knightAttack(8, 1, 1, 2, 3); // -> 1",
        "Source.knightAttack(8, 0, 3, 4, 2); // -> 3"
      ],
      "testCases": [
        "Source.knightAttack(8, 1, 1, 2, 2); // -> 2",
        "Source.knightAttack(8, 1, 1, 2, 3); // -> 1",
        "Source.knightAttack(8, 0, 3, 4, 2); // -> 3",
        "Source.knightAttack(8, 0, 3, 5, 2); // -> 4",
        "Source.knightAttack(24, 4, 7, 19, 20); // -> 10",
        "Source.knightAttack(100, 21, 10, 0, 0); // -> 11",
        "Source.knightAttack(3, 0, 0, 1, 2); // -> 1",
        "Source.knightAttack(3, 0, 0, 1, 1); // -> -1",
        "Source.knightAttack(8, 1, 1, 2, 2) -> 2",
        "Source.knightAttack(8, 1, 1, 2, 3) -> 1",
        "Source.knightAttack(8, 0, 3, 4, 2) -> 3",
        "Source.knightAttack(8, 0, 3, 5, 2) -> 4",
        "Source.knightAttack(24, 4, 7, 19, 20) -> 10",
        "Source.knightAttack(100, 21, 10, 0, 0) -> 11",
        "Source.knightAttack(3, 0, 0, 1, 2) -> 1",
        "Source.knightAttack(3, 0, 0, 1, 1) -> -1"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.ArrayDeque;\nimport java.util.HashSet;\n\nclass Source {\n  public static int knightAttack(int n, int kr, int kc, int pr, int pc) {\n    HashSet<List<Integer>> visited = new HashSet<>();\n    ArrayDeque<List<Integer>> queue = new ArrayDeque<>();\n    queue.add(List.of(kr, kc, 0));\n    visited.add(List.of(kr, kc));\n    while (!queue.isEmpty()) {\n      List<Integer> entry = queue.remove();\n      int r = entry.get(0);\n      int c = entry.get(1);\n      int distance = entry.get(2);\n      if (r == pr && c == pc) {\n        return distance;\n      }\n      List<List<Integer>> neighbors = getKnightMoves(n, r, c);\n      for (List<Integer> neighbor : neighbors) {\n        if (!visited.contains(neighbor)) {\n          int neighborRow = neighbor.get(0);\n          int neighborCol = neighbor.get(1);\n          queue.add(List.of(neighborRow, neighborCol, distance + 1));\n          visited.add(neighbor);\n        }\n      }\n    }\n    return -1;\n  }\n  \n  public static List<List<Integer>> getKnightMoves(int n, int r, int c) {\n    List<List<Integer>> positions = List.of(\n      List.of(r + 2, c + 1),\n      List.of(r - 2, c + 1),\n      List.of(r + 2, c - 1),\n      List.of(r - 2, c - 1),\n      List.of(r + 1, c + 2),\n      List.of(r - 1, c + 2),\n      List.of(r + 1, c - 2),\n      List.of(r - 1, c - 2)\n    );\n    \n    List<List<Integer>> inboundPositions = new ArrayList<>();\n    for (List<Integer> position : positions) {\n      int newRow = position.get(0);\n      int newCol = position.get(1);\n      \n      if (0 <= newRow && newRow < n && 0 <= newCol && newCol < n) {\n        inboundPositions.add(List.of(newRow, newCol));\n      }\n    }\n    \n    return inboundPositions;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of the board | Time: O(n^2) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "knight attack",
        "slug": "knight-attack",
        "module": "Graph II",
        "premium": true,
        "verbose": "Find the minimum number of moves a knight can take to attack a pawn.",
        "stub": "class Source {\n  public static int knightAttack(int n, int kr, int kc, int pr, int pc) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.ArrayDeque;\nimport java.util.HashSet;\n\nclass Source {\n  public static int knightAttack(int n, int kr, int kc, int pr, int pc) {\n    HashSet<List<Integer>> visited = new HashSet<>();\n    ArrayDeque<List<Integer>> queue = new ArrayDeque<>();\n    queue.add(List.of(kr, kc, 0));\n    visited.add(List.of(kr, kc));\n    while (!queue.isEmpty()) {\n      List<Integer> entry = queue.remove();\n      int r = entry.get(0);\n      int c = entry.get(1);\n      int distance = entry.get(2);\n      if (r == pr && c == pc) {\n        return distance;\n      }\n      List<List<Integer>> neighbors = getKnightMoves(n, r, c);\n      for (List<Integer> neighbor : neighbors) {\n        if (!visited.contains(neighbor)) {\n          int neighborRow = neighbor.get(0);\n          int neighborCol = neighbor.get(1);\n          queue.add(List.of(neighborRow, neighborCol, distance + 1));\n          visited.add(neighbor);\n        }\n      }\n    }\n    return -1;\n  }\n  \n  public static List<List<Integer>> getKnightMoves(int n, int r, int c) {\n    List<List<Integer>> positions = List.of(\n      List.of(r + 2, c + 1),\n      List.of(r - 2, c + 1),\n      List.of(r + 2, c - 1),\n      List.of(r - 2, c - 1),\n      List.of(r + 1, c + 2),\n      List.of(r - 1, c + 2),\n      List.of(r + 1, c - 2),\n      List.of(r - 1, c - 2)\n    );\n    \n    List<List<Integer>> inboundPositions = new ArrayList<>();\n    for (List<Integer> position : positions) {\n      int newRow = position.get(0);\n      int newCol = position.get(1);\n      \n      if (0 <= newRow && newRow < n && 0 <= newCol && newCol < n) {\n        inboundPositions.add(List.of(newRow, newCol));\n      }\n    }\n    \n    return inboundPositions;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::can-color": {
      "statement": "Write a method, canColor, that takes in an map representing the adjacency list of an undirected graph. The method should return a boolean indicating whether or not it is possible to color nodes of the graph using two colors in such a way that adjacent nodes are always different colors. ```plaintext For example, given this graph: x-y-z It is possible to color the nodes by using red for x and z, then use blue for y. So the answer is true. For example, given this graph: q / \\ s - r It is not possible to color the nodes without making two adjacent nodes the same color. So the answer is false. ```",
      "examples": [
        "For example, given this graph:\n\nx-y-z\n\nIt is possible to color the nodes by using red for x and z, \nthen use blue for y. So the answer is true.\n\nFor example, given this graph:\n\n    q\n   / \\\n  s - r\n\nIt is not possible to color the nodes without making two \nadjacent nodes the same color. So the answer is false.",
        "Source.canColor(Map.of(\n  \"x\", List.of(\"y\"),\n  \"y\", List.of(\"x\",\"z\"),\n  \"z\", List.of(\"y\")\n)); // -> true",
        "Source.canColor(Map.of(\n  \"q\", List.of(\"r\", \"s\"),\n  \"r\", List.of(\"q\", \"s\"),\n  \"s\", List.of(\"r\", \"q\")\n)); // -> false"
      ],
      "testCases": [
        "For example, given this graph:\n\nx-y-z\n\nIt is possible to color the nodes by using red for x and z, \nthen use blue for y. So the answer is true.\n\nFor example, given this graph:\n\n    q\n   / \\\n  s - r\n\nIt is not possible to color the nodes without making two \nadjacent nodes the same color. So the answer is false.",
        "Source.canColor(Map.of(\n  \"x\", List.of(\"y\"),\n  \"y\", List.of(\"x\",\"z\"),\n  \"z\", List.of(\"y\")\n)); // -> true",
        "Source.canColor(Map.of(\n  \"q\", List.of(\"r\", \"s\"),\n  \"r\", List.of(\"q\", \"s\"),\n  \"s\", List.of(\"r\", \"q\")\n)); // -> false",
        "Source.canColor(Map.of(\n  \"a\", List.of(\"b\", \"c\", \"d\"),\n  \"b\", List.of(\"a\"),\n  \"c\", List.of(\"a\"),\n  \"d\", List.of(\"a\")\n)); // -> true",
        "Source.canColor(Map.of(\n  \"a\", List.of(\"b\", \"c\", \"d\"),\n  \"b\", List.of(\"a\"),\n  \"c\", List.of(\"a\", \"d\"),\n  \"d\", List.of(\"a\", \"c\")\n)); // -> false",
        "Source.canColor(Map.of(\n  \"h\", List.of(\"i\", \"k\"),\n  \"i\", List.of(\"h\", \"j\"),\n  \"j\", List.of(\"i\", \"k\"),\n  \"k\", List.of(\"h\", \"j\")\n)); // -> true",
        "Source.canColor(Map.of(\n  \"z\", List.of()\n)); // -> true",
        "Source.canColor(Map.of(\n  \"h\", List.of(\"i\", \"k\"),\n  \"i\", List.of(\"h\", \"j\"),\n  \"j\", List.of(\"i\", \"k\"),\n  \"k\", List.of(\"h\", \"j\"),\n  \"q\", List.of(\"r\", \"s\"),\n  \"r\", List.of(\"q\", \"s\"),\n  \"s\", List.of(\"r\", \"q\")\n)); // -> false",
        "Source.canColor(Map.of(\n  \"a\", List.of(\"b\", \"d\"), \n  \"c\", List.of(\"b\", \"f\"), \n  \"b\", List.of(\"a\", \"c\"), \n  \"d\", List.of(\"a\", \"e\"), \n  \"e\", List.of(\"d\", \"f\"), \n  \"f\", List.of(\"e\", \"c\")\n)); // -> true",
        "Source.canColor(Map.of(\n  \"a\", List.of(\"b\"), \n  \"d\", List.of(\"c\"), \n  \"b\", List.of(\"a\", \"c\"), \n  \"c\", List.of(\"b\", \"d\")\n)); // -> true",
        "Source.canColor(Map.of( \"x\", List.of(\"y\"), \"y\", List.of(\"x\",\"z\"), \"z\", List.of(\"y\") )) -> true",
        "Source.canColor(Map.of( \"q\", List.of(\"r\", \"s\"), \"r\", List.of(\"q\", \"s\"), \"s\", List.of(\"r\", \"q\") )) -> false",
        "Source.canColor(Map.of( \"a\", List.of(\"b\", \"c\", \"d\"), \"b\", List.of(\"a\"), \"c\", List.of(\"a\"), \"d\", List.of(\"a\") )) -> true",
        "Source.canColor(Map.of( \"a\", List.of(\"b\", \"c\", \"d\"), \"b\", List.of(\"a\"), \"c\", List.of(\"a\", \"d\"), \"d\", List.of(\"a\", \"c\") )) -> false",
        "Source.canColor(Map.of( \"h\", List.of(\"i\", \"k\"), \"i\", List.of(\"h\", \"j\"), \"j\", List.of(\"i\", \"k\"), \"k\", List.of(\"h\", \"j\") )) -> true",
        "Source.canColor(Map.of( \"z\", List.of() )) -> true",
        "Source.canColor(Map.of( \"h\", List.of(\"i\", \"k\"), \"i\", List.of(\"h\", \"j\"), \"j\", List.of(\"i\", \"k\"), \"k\", List.of(\"h\", \"j\"), \"q\", List.of(\"r\", \"s\"), \"r\", List.of(\"q\", \"s\"), \"s\", List.of(\"r\", \"q\") )) -> false",
        "Source.canColor(Map.of( \"a\", List.of(\"b\", \"d\"), \"c\", List.of(\"b\", \"f\"), \"b\", List.of(\"a\", \"c\"), \"d\", List.of(\"a\", \"e\"), \"e\", List.of(\"d\", \"f\"), \"f\", List.of(\"e\", \"c\") )) -> true",
        "Source.canColor(Map.of( \"a\", List.of(\"b\"), \"d\", List.of(\"c\"), \"b\", List.of(\"a\", \"c\"), \"c\", List.of(\"b\", \"d\") )) -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first recursive",
          "code": "import java.util.Map;\nimport java.util.HashMap;\nimport java.util.List;\n\nclass Source {\n  public static boolean canColor(Map<String, List<String>> graph) {\n    HashMap<String, Boolean> coloring = new HashMap<>();\n    for (String node : graph.keySet()) {\n      if (!coloring.containsKey(node) && !valid(graph, node, coloring, false)) {\n        return false; \n      }\n    }\n    \n    return true;\n  }\n  \n  public static boolean valid(Map<String, List<String>> graph, String node, HashMap<String, Boolean> coloring, boolean currentColor) {\n    if (coloring.containsKey(node)) {\n      return currentColor == coloring.get(node);\n    }\n    \n    coloring.put(node, currentColor);\n    \n    for (String neighbor : graph.get(node)) {\n      if (!valid(graph, neighbor, coloring, !currentColor)) {\n        return false;\n      }\n    }\n    \n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n^2) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "can color",
        "slug": "can-color",
        "module": "Graph II",
        "premium": true,
        "verbose": "Check if nodes of a graph can be colored in an alternating pattern.",
        "stub": "import java.util.Map;\nimport java.util.List;\n\nclass Source {\n  public static boolean canColor(Map<String, List<String>> graph) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.Map;\nimport java.util.HashMap;\nimport java.util.List;\n\nclass Source {\n  public static boolean canColor(Map<String, List<String>> graph) {\n    HashMap<String, Boolean> coloring = new HashMap<>();\n    for (String node : graph.keySet()) {\n      if (!coloring.containsKey(node) && !valid(graph, node, coloring, false)) {\n        return false; \n      }\n    }\n    \n    return true;\n  }\n  \n  public static boolean valid(Map<String, List<String>> graph, String node, HashMap<String, Boolean> coloring, boolean currentColor) {\n    if (coloring.containsKey(node)) {\n      return currentColor == coloring.get(node);\n    }\n    \n    coloring.put(node, currentColor);\n    \n    for (String neighbor : graph.get(node)) {\n      if (!valid(graph, neighbor, coloring, !currentColor)) {\n        return false;\n      }\n    }\n    \n    return true;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::tolerant-teams": {
      "statement": "Write a method, tolerantTeams, that takes in a list of rivalries as an argument. A rivalry is a pair of people who should not be placed on the same team. The method should return a boolean indicating whether or not it is possible to separate people into two teams, without rivals being on the same team. The two teams formed do not have to be the same size.",
      "examples": [
        "Source.tolerantTeams(List.of(\n  List.of(\"philip\", \"seb\"),\n  List.of(\"raj\", \"nader\")\n)); // -> true",
        "Source.tolerantTeams(List.of(\n  List.of(\"philip\", \"seb\"),\n  List.of(\"raj\", \"nader\"),\n  List.of(\"raj\", \"philip\"),\n  List.of(\"seb\", \"raj\")\n)); // -> false",
        "Source.tolerantTeams(List.of(\n  List.of(\"cindy\", \"anj\"),\n  List.of(\"alex\", \"matt\"),\n  List.of(\"alex\", \"cindy\"),\n  List.of(\"anj\", \"matt\"),\n  List.of(\"brando\", \"matt\")\n)); // -> true"
      ],
      "testCases": [
        "Source.tolerantTeams(List.of(\n  List.of(\"philip\", \"seb\"),\n  List.of(\"raj\", \"nader\")\n)); // -> true",
        "Source.tolerantTeams(List.of(\n  List.of(\"philip\", \"seb\"),\n  List.of(\"raj\", \"nader\"),\n  List.of(\"raj\", \"philip\"),\n  List.of(\"seb\", \"raj\")\n)); // -> false",
        "Source.tolerantTeams(List.of(\n  List.of(\"cindy\", \"anj\"),\n  List.of(\"alex\", \"matt\"),\n  List.of(\"alex\", \"cindy\"),\n  List.of(\"anj\", \"matt\"),\n  List.of(\"brando\", \"matt\")\n)); // -> true",
        "Source.tolerantTeams(List.of(\n  List.of(\"alex\", \"anj\"),\n  List.of(\"alex\", \"matt\"),\n  List.of(\"alex\", \"cindy\"),\n  List.of(\"anj\", \"matt\"),\n  List.of(\"brando\", \"matt\")\n)); // -> false",
        "Source.tolerantTeams(List.of(\n  List.of(\"alan\", \"jj\"),\n  List.of(\"betty\", \"richard\"),\n  List.of(\"jj\", \"simcha\"),\n  List.of(\"richard\", \"christine\")\n)); // -> true",
        "Source.tolerantTeams(List.of(\n  List.of(\"alan\", \"jj\"),\n  List.of(\"jj\", \"richard\"),\n  List.of(\"betty\", \"richard\"),\n  List.of(\"jj\", \"simcha\"),\n  List.of(\"richard\", \"christine\")\n)); // -> true",
        "Source.tolerantTeams(List.of(\n  List.of(\"alan\", \"jj\"),\n  List.of(\"betty\", \"richard\"),\n  List.of(\"betty\", \"christine\"),\n  List.of(\"jj\", \"simcha\"),\n  List.of(\"richard\", \"christine\")\n)); // -> false",
        "Source.tolerantTeams(List.of(\n  List.of(\"ara\", \"boyka\"),\n  List.of(\"dennis\", \"clara\"),\n  List.of(\"boyka\", \"clara\")\n)); // -> true",
        "Source.tolerantTeams(List.of( List.of(\"philip\", \"seb\"), List.of(\"raj\", \"nader\") )) -> true",
        "Source.tolerantTeams(List.of( List.of(\"philip\", \"seb\"), List.of(\"raj\", \"nader\"), List.of(\"raj\", \"philip\"), List.of(\"seb\", \"raj\") )) -> false",
        "Source.tolerantTeams(List.of( List.of(\"cindy\", \"anj\"), List.of(\"alex\", \"matt\"), List.of(\"alex\", \"cindy\"), List.of(\"anj\", \"matt\"), List.of(\"brando\", \"matt\") )) -> true",
        "Source.tolerantTeams(List.of( List.of(\"alex\", \"anj\"), List.of(\"alex\", \"matt\"), List.of(\"alex\", \"cindy\"), List.of(\"anj\", \"matt\"), List.of(\"brando\", \"matt\") )) -> false",
        "Source.tolerantTeams(List.of( List.of(\"alan\", \"jj\"), List.of(\"betty\", \"richard\"), List.of(\"jj\", \"simcha\"), List.of(\"richard\", \"christine\") )) -> true",
        "Source.tolerantTeams(List.of( List.of(\"alan\", \"jj\"), List.of(\"jj\", \"richard\"), List.of(\"betty\", \"richard\"), List.of(\"jj\", \"simcha\"), List.of(\"richard\", \"christine\") )) -> true",
        "Source.tolerantTeams(List.of( List.of(\"alan\", \"jj\"), List.of(\"betty\", \"richard\"), List.of(\"betty\", \"christine\"), List.of(\"jj\", \"simcha\"), List.of(\"richard\", \"christine\") )) -> false",
        "Source.tolerantTeams(List.of( List.of(\"ara\", \"boyka\"), List.of(\"dennis\", \"clara\"), List.of(\"boyka\", \"clara\") )) -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first coloring",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean tolerantTeams(List<List<String>> rivalries) {\n    HashMap<String, List<String>> graph = buildGraph(rivalries);\n    HashMap<String, Boolean> coloring = new HashMap<>();\n    for (String node : graph.keySet()) {\n      if (!coloring.containsKey(node) && !isBipartite(graph, node, coloring, false)) {\n        return false;\n      }\n    }\n    System.out.println(graph);\n    System.out.println(coloring);\n    return true;\n  }\n  \n  public static boolean isBipartite(HashMap<String, List<String>> graph, String node, HashMap<String, Boolean> coloring, boolean currentColor) {\n    if (coloring.containsKey(node)) {\n      return coloring.get(node) == currentColor;\n    }\n    \n    coloring.put(node, currentColor);\n    for (String neighbor : graph.get(node)) {\n      if (!isBipartite(graph, neighbor, coloring, !currentColor)) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  public static HashMap<String, List<String>> buildGraph(List<List<String>> edges) {\n    HashMap<String, List<String>> graph = new HashMap<>();\n    for (List<String> pair : edges) {\n      String nodeA = pair.get(0);\n      String nodeB = pair.get(1);\n      if (!graph.containsKey(nodeA)) {\n        graph.put(nodeA, new ArrayList<>());\n      }\n      if (!graph.containsKey(nodeB)) {\n        graph.put(nodeB, new ArrayList<>());\n      }\n      graph.get(nodeA).add(nodeB);\n      graph.get(nodeB).add(nodeA);\n    }\n    return graph;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "e = number of rivalries | n = number of people | Time: O(e) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "tolerant teams",
        "slug": "tolerant-teams",
        "module": "Graph II",
        "premium": true,
        "verbose": "Check if two teams can be formed without rivals being on the same team.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean tolerantTeams(List<List<String>> rivalries) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean tolerantTeams(List<List<String>> rivalries) {\n    HashMap<String, List<String>> graph = buildGraph(rivalries);\n    HashMap<String, Boolean> coloring = new HashMap<>();\n    for (String node : graph.keySet()) {\n      if (!coloring.containsKey(node) && !isBipartite(graph, node, coloring, false)) {\n        return false;\n      }\n    }\n    System.out.println(graph);\n    System.out.println(coloring);\n    return true;\n  }\n  \n  public static boolean isBipartite(HashMap<String, List<String>> graph, String node, HashMap<String, Boolean> coloring, boolean currentColor) {\n    if (coloring.containsKey(node)) {\n      return coloring.get(node) == currentColor;\n    }\n    \n    coloring.put(node, currentColor);\n    for (String neighbor : graph.get(node)) {\n      if (!isBipartite(graph, neighbor, coloring, !currentColor)) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  public static HashMap<String, List<String>> buildGraph(List<List<String>> edges) {\n    HashMap<String, List<String>> graph = new HashMap<>();\n    for (List<String> pair : edges) {\n      String nodeA = pair.get(0);\n      String nodeB = pair.get(1);\n      if (!graph.containsKey(nodeA)) {\n        graph.put(nodeA, new ArrayList<>());\n      }\n      if (!graph.containsKey(nodeB)) {\n        graph.put(nodeB, new ArrayList<>());\n      }\n      graph.get(nodeA).add(nodeB);\n      graph.get(nodeB).add(nodeA);\n    }\n    return graph;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::rare-routing": {
      "statement": "Write a method, rareRouting, that takes in a number of cities (n) and a two dimensional lisList.of( where each sublist represents a direct road that connects a pair of cities. The method should return a boolean indicating whether or not there exists a unique route for every pair of cities. A route is a sequence of roads that does not visit a city more than once. Cities will be numbered 0 to n - 1. You can assume that all roads are two-way roads. This means if there is a road between A and B, then you can use that road to go from A to B or go from B to A. ```plaintext For example, given these roads: 0 --- 1 | \\ | \\ | \\ 2 3 There is a unique route for between every pair of cities. So the answer is true. For example, given these roads: 0 --- 1 | \\ | \\ | \\ 2 -- 3 There are two routes that can be used to travel from city 1 to city 2: - first route: 1, 0, 2 - second route: 1, 0, 3, 2 The answer is false, because routes should be unique. ```",
      "examples": [
        "For example, given these roads:\n\n0 --- 1\n| \\\n|  \\\n|   \\\n2    3\n\nThere is a unique route for between every pair of cities.\nSo the answer is true.\n\n\nFor example, given these roads:\n\n0 --- 1\n| \\\n|  \\\n|   \\\n2 -- 3\n\nThere are two routes that can be used to travel from city 1 to city 2:\n- first route:  1, 0, 2\n- second route: 1, 0, 3, 2 \nThe answer is false, because routes should be unique.",
        "Source.rareRouting(4, List.of(\n  List.of(0, 1),\n  List.of(0, 2),\n  List.of(0, 3)\n)); // -> true",
        "Source.rareRouting(4, List.of(\n  List.of(0, 1),\n  List.of(0, 2),\n  List.of(0, 3),\n  List.of(3, 2)\n)); // -> false"
      ],
      "testCases": [
        "For example, given these roads:\n\n0 --- 1\n| \\\n|  \\\n|   \\\n2    3\n\nThere is a unique route for between every pair of cities.\nSo the answer is true.\n\n\nFor example, given these roads:\n\n0 --- 1\n| \\\n|  \\\n|   \\\n2 -- 3\n\nThere are two routes that can be used to travel from city 1 to city 2:\n- first route:  1, 0, 2\n- second route: 1, 0, 3, 2 \nThe answer is false, because routes should be unique.",
        "Source.rareRouting(4, List.of(\n  List.of(0, 1),\n  List.of(0, 2),\n  List.of(0, 3)\n)); // -> true",
        "Source.rareRouting(4, List.of(\n  List.of(0, 1),\n  List.of(0, 2),\n  List.of(0, 3),\n  List.of(3, 2)\n)); // -> false",
        "Source.rareRouting(6, List.of(\n  List.of(1, 2),\n  List.of(5, 4),\n  List.of(3, 0),\n  List.of(0, 1),\n  List.of(0, 4)\n)); // -> true",
        "Source.rareRouting(6, List.of(\n  List.of(1, 2),\n  List.of(4, 1),\n  List.of(5, 4),\n  List.of(3, 0),\n  List.of(0, 1),\n  List.of(0, 4)\n)); // -> false",
        "Source.rareRouting(4, List.of(\n  List.of(0, 1),\n  List.of(3, 2)\n)); // -> false",
        "Source.rareRouting(4, List.of(\n  List.of(0, 1),\n  List.of(0, 2),\n  List.of(1, 2)\n)); // -> false",
        "Source.rareRouting(4, List.of()); // -> false",
        "Source.rareRouting(4, List.of( List.of(0, 1), List.of(0, 2), List.of(0, 3) )) -> true",
        "Source.rareRouting(4, List.of( List.of(0, 1), List.of(0, 2), List.of(0, 3), List.of(3, 2) )) -> false",
        "Source.rareRouting(6, List.of( List.of(1, 2), List.of(5, 4), List.of(3, 0), List.of(0, 1), List.of(0, 4) )) -> true",
        "Source.rareRouting(6, List.of( List.of(1, 2), List.of(4, 1), List.of(5, 4), List.of(3, 0), List.of(0, 1), List.of(0, 4) )) -> false",
        "Source.rareRouting(4, List.of( List.of(0, 1), List.of(3, 2) )) -> false",
        "Source.rareRouting(4, List.of( List.of(0, 1), List.of(0, 2), List.of(1, 2) )) -> false",
        "Source.rareRouting(4, List.of()) -> false"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first recursive",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashSet;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean rareRouting(int n, List<List<Integer>> roads) {\n    HashMap<Integer, List<Integer>> graph = buildGraph(n, roads);\n    HashSet<Integer> visited = new HashSet<>();\n    boolean valid = validate(graph, 0, visited, -1);\n    return valid && visited.size() == n;\n  }\n  \n  public static boolean validate(HashMap<Integer, List<Integer>> graph, int node, HashSet<Integer> visited, int prevNode) {\n    if (visited.contains(node)) {\n      return false;\n    }\n    visited.add(node);\n    \n    for (int neighbor : graph.get(node)) {\n      if(neighbor != prevNode && !validate(graph, neighbor, visited, node)) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  public static HashMap<Integer, List<Integer>> buildGraph(int numNodes, List<List<Integer>> edges)  {\n    HashMap<Integer, List<Integer>> graph = new HashMap<>();\n    for (int i = 0; i < numNodes; i += 1) {\n      graph.put(i, new ArrayList<>());\n    }\n    \n    for (List<Integer> pair : edges) {\n      int nodeA = pair.get(0);\n      int nodeB = pair.get(1);\n      graph.get(nodeA).add(nodeB);\n      graph.get(nodeB).add(nodeA);\n    }\n    return graph;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n^2) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "rare routing",
        "slug": "rare-routing",
        "module": "Graph II",
        "premium": true,
        "verbose": "Verify that there exists exactly one unique route between any two cities.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean rareRouting(int n, List<List<Integer>> roads) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashSet;\nimport java.util.HashMap;\n\nclass Source {\n  public static boolean rareRouting(int n, List<List<Integer>> roads) {\n    HashMap<Integer, List<Integer>> graph = buildGraph(n, roads);\n    HashSet<Integer> visited = new HashSet<>();\n    boolean valid = validate(graph, 0, visited, -1);\n    return valid && visited.size() == n;\n  }\n  \n  public static boolean validate(HashMap<Integer, List<Integer>> graph, int node, HashSet<Integer> visited, int prevNode) {\n    if (visited.contains(node)) {\n      return false;\n    }\n    visited.add(node);\n    \n    for (int neighbor : graph.get(node)) {\n      if(neighbor != prevNode && !validate(graph, neighbor, visited, node)) {\n        return false;\n      }\n    }\n    return true;\n  }\n  \n  public static HashMap<Integer, List<Integer>> buildGraph(int numNodes, List<List<Integer>> edges)  {\n    HashMap<Integer, List<Integer>> graph = new HashMap<>();\n    for (int i = 0; i < numNodes; i += 1) {\n      graph.put(i, new ArrayList<>());\n    }\n    \n    for (List<Integer> pair : edges) {\n      int nodeA = pair.get(0);\n      int nodeB = pair.get(1);\n      graph.get(nodeA).add(nodeB);\n      graph.get(nodeB).add(nodeA);\n    }\n    return graph;\n  }\n  \n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::topological-order": {
      "statement": "Write a method, topologicalOrder, that takes in a map representing the adjacency list for a directed-acyclic graph. The method should return an array containing the [topological-order](https://en.wikipedia.org/wiki/Topological_sorting) of the graph. The topological ordering of a graph is a sequence where \"parent nodes\" appear before their \"children\" within the sequence.",
      "examples": [
        "Source.topologicalOrder(Map.of(\n  \"a\", List.of(\"f\"),\n  \"b\", List.of(\"d\"),\n  \"c\", List.of(\"a\", \"f\"),\n  \"d\", List.of(\"e\"),\n  \"e\", List.of(),\n  \"f\", List.of(\"b\", \"e\")\n)); // -> [\"c\", \"a\", \"f\", \"b\", \"d\", \"e\"]",
        "Source.topologicalOrder(Map.of(\n  \"h\", List.of(\"l\", \"m\"),\n  \"i\", List.of(\"k\"),\n  \"j\", List.of(\"k\", \"i\"),\n  \"k\", List.of(\"h\", \"m\"),\n  \"l\", List.of(\"m\"),\n  \"m\", List.of()\n)); // -> [\"j\", \"i\", \"k\", \"h\", \"l\", \"m\"]",
        "Source.topologicalOrder(Map.of(\n  \"q\", List.of(),\n  \"r\", List.of(\"q\"),\n  \"s\", List.of(\"r\"),\n  \"t\", List.of(\"s\")\n)); // -> [\"t\", \"s\", \"r\", \"q\"]"
      ],
      "testCases": [
        "Source.topologicalOrder(Map.of(\n  \"a\", List.of(\"f\"),\n  \"b\", List.of(\"d\"),\n  \"c\", List.of(\"a\", \"f\"),\n  \"d\", List.of(\"e\"),\n  \"e\", List.of(),\n  \"f\", List.of(\"b\", \"e\")\n)); // -> [\"c\", \"a\", \"f\", \"b\", \"d\", \"e\"]",
        "Source.topologicalOrder(Map.of(\n  \"h\", List.of(\"l\", \"m\"),\n  \"i\", List.of(\"k\"),\n  \"j\", List.of(\"k\", \"i\"),\n  \"k\", List.of(\"h\", \"m\"),\n  \"l\", List.of(\"m\"),\n  \"m\", List.of()\n)); // -> [\"j\", \"i\", \"k\", \"h\", \"l\", \"m\"]",
        "Source.topologicalOrder(Map.of(\n  \"q\", List.of(),\n  \"r\", List.of(\"q\"),\n  \"s\", List.of(\"r\"),\n  \"t\", List.of(\"s\")\n)); // -> [\"t\", \"s\", \"r\", \"q\"]",
        "Source.topologicalOrder(Map.of(\n  \"v\", List.of(\"z\", \"w\"),\n  \"w\", List.of(),\n  \"x\", List.of(\"w\", \"v\", \"z\"),\n  \"y\", List.of(\"x\"),\n  \"z\", List.of(\"w\")\n)); // -> [\"y\", \"x\", \"v\", \"z\", \"w\"]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "topological order",
          "code": "import java.util.List;\nimport java.util.Stack;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.HashMap;\n\nclass Source {\n  public static List<String> topologicalOrder(Map<String, List<String>> graph) {\n    Map<String, Integer> numParents = new HashMap<>();\n    for (String node : graph.keySet()) {\n      numParents.put(node, 0);\n    }\n    for (String node : graph.keySet()) {\n      for (String child : graph.get(node)) {\n        numParents.put(child, numParents.get(child) + 1); \n      }\n    }\n    \n    Stack<String> ready = new Stack<>();\n    for (String node : numParents.keySet()) {\n      if (numParents.get(node) == 0) {\n        ready.push(node);\n      }\n    }\n    \n    List<String> order = new ArrayList<>();\n    while (!ready.isEmpty()) {\n      String node = ready.pop();\n      order.add(node);\n      for (String child : graph.get(node)) {\n        numParents.put(child, numParents.get(child) - 1);\n        if (numParents.get(child) == 0) {\n          ready.push(child);\n        }\n      }\n    }\n    \n    return order;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "e = number of edges | n = number of nodes | Time: O(e + n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "topological order",
        "slug": "topological-order",
        "module": "Graph II",
        "premium": true,
        "verbose": "Return the topological order of a directed-acyclic graph.",
        "stub": "import java.util.List;\nimport java.util.Map;\n\n\nclass Source {\n  public static List<String> topologicalOrder(Map<String, List<String>> graph) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.Stack;\nimport java.util.ArrayList;\nimport java.util.Map;\nimport java.util.HashMap;\n\nclass Source {\n  public static List<String> topologicalOrder(Map<String, List<String>> graph) {\n    Map<String, Integer> numParents = new HashMap<>();\n    for (String node : graph.keySet()) {\n      numParents.put(node, 0);\n    }\n    for (String node : graph.keySet()) {\n      for (String child : graph.get(node)) {\n        numParents.put(child, numParents.get(child) + 1); \n      }\n    }\n    \n    Stack<String> ready = new Stack<>();\n    for (String node : numParents.keySet()) {\n      if (numParents.get(node) == 0) {\n        ready.push(node);\n      }\n    }\n    \n    List<String> order = new ArrayList<>();\n    while (!ready.isEmpty()) {\n      String node = ready.pop();\n      order.add(node);\n      for (String child : graph.get(node)) {\n        numParents.put(child, numParents.get(child) - 1);\n        if (numParents.get(child) == 0) {\n          ready.push(child);\n        }\n      }\n    }\n    \n    return order;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::safe-cracking": {
      "statement": "Oh-no! You forgot the number combination that unlocks your safe. Luckily, you knew that you'd be forgetful so you previously wrote down a bunch of hints that can be used to determine the correct combination. Each hint is a pair of numbers \"x, y\" that indicates you must enter digit \"x\" before \"y\" (but not necessarily immediately before y). The keypad on the safe has digits 0-9. You can assume that the hints will generate exactly one working combination and that a digit can occur zero or one time in the answer. Write a method, safeCracking, that takes in an array of hints as an argument and determines the combination that will unlock the safe. The method should return a string representing the combination.",
      "examples": [
        "Source.safeCracking(List.of(\n  List.of(7, 1),\n  List.of(1, 8),\n  List.of(7, 8)\n)); // -> \"718\"",
        "Source.safeCracking(List.of(\n  List.of(3, 1),\n  List.of(4, 7),\n  List.of(5, 9),\n  List.of(4, 3),\n  List.of(7, 3),\n  List.of(3, 5),\n  List.of(9, 1)\n)); // -> \"473591\"",
        "Source.safeCracking(List.of(\n  List.of(2, 5),\n  List.of(8, 6),\n  List.of(0, 6),\n  List.of(6, 2),\n  List.of(0, 8),\n  List.of(2, 3),\n  List.of(3, 5),\n  List.of(6, 5)\n)); // -> \"086235\""
      ],
      "testCases": [
        "Source.safeCracking(List.of(\n  List.of(7, 1),\n  List.of(1, 8),\n  List.of(7, 8)\n)); // -> \"718\"",
        "Source.safeCracking(List.of(\n  List.of(3, 1),\n  List.of(4, 7),\n  List.of(5, 9),\n  List.of(4, 3),\n  List.of(7, 3),\n  List.of(3, 5),\n  List.of(9, 1)\n)); // -> \"473591\"",
        "Source.safeCracking(List.of(\n  List.of(2, 5),\n  List.of(8, 6),\n  List.of(0, 6),\n  List.of(6, 2),\n  List.of(0, 8),\n  List.of(2, 3),\n  List.of(3, 5),\n  List.of(6, 5)\n)); // -> \"086235\"",
        "Source.safeCracking(List.of(\n  List.of(0, 1),\n  List.of(6, 0),\n  List.of(1, 8)\n)); // -> \"6018\"",
        "Source.safeCracking(List.of(\n  List.of(8, 9),\n  List.of(4, 2),\n  List.of(8, 2),\n  List.of(3, 8),\n  List.of(2, 9),\n  List.of(4, 9),\n  List.of(8, 4)\n)); // -> \"38429\"",
        "Source.safeCracking(List.of( List.of(7, 1), List.of(1, 8), List.of(7, 8) )) -> \"718\"",
        "Source.safeCracking(List.of( List.of(3, 1), List.of(4, 7), List.of(5, 9), List.of(4, 3), List.of(7, 3), List.of(3, 5), List.of(9, 1) )) -> \"473591\"",
        "Source.safeCracking(List.of( List.of(2, 5), List.of(8, 6), List.of(0, 6), List.of(6, 2), List.of(0, 8), List.of(2, 3), List.of(3, 5), List.of(6, 5) )) -> \"086235\"",
        "Source.safeCracking(List.of( List.of(0, 1), List.of(6, 0), List.of(1, 8) )) -> \"6018\"",
        "Source.safeCracking(List.of( List.of(8, 9), List.of(4, 2), List.of(8, 2), List.of(3, 8), List.of(2, 9), List.of(4, 9), List.of(8, 4) )) -> \"38429\""
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "graph topological order",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.Stack;\n\nclass Source {\n  public static String safeCracking(List<List<Integer>> hints) {\n    HashMap<Integer, List<Integer>> graph = buildGraph(hints);\n    \n    HashMap<Integer, Integer> numParents = new HashMap<>();\n    for (int node : graph.keySet()) {\n      numParents.put(node, 0);\n    }\n    for (int node : graph.keySet()) {\n      for (Integer child : graph.get(node)) {\n        numParents.put(child, numParents.get(child) + 1); \n      }\n    }\n    \n    Stack<Integer> ready = new Stack<>();\n    for (int node : numParents.keySet()) {\n      if (numParents.get(node) == 0) {\n        ready.push(node);\n      }\n    }\n    \n    List<String> order = new ArrayList<>();\n    while (!ready.isEmpty()) {\n      int node = ready.pop();\n      order.add(Integer.toString(node));\n      for (int child : graph.get(node)) {\n        numParents.put(child, numParents.get(child) - 1);\n        if (numParents.get(child) == 0) {\n          ready.push(child);\n        }\n      }\n    }\n    \n    return String.join(\"\", order);\n  }\n  \n  public static HashMap<Integer, List<Integer>> buildGraph(List<List<Integer>> edges) {\n    HashMap<Integer, List<Integer>> graph = new HashMap<>();\n    for (List<Integer> edge : edges) {\n      int nodeA = edge.get(0);\n      int nodeB = edge.get(1);\n      if (!graph.containsKey(nodeA)) {\n        graph.put(nodeA, new ArrayList<>());\n      }\n      if (!graph.containsKey(nodeB)) {\n        graph.put(nodeB, new ArrayList<>());\n      }\n      graph.get(nodeA).add(nodeB);\n    }\n    return graph;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "e = number of hints | Time: O(e) | Space: O(e)"
        }
      ],
      "meta": {
        "name": "safe cracking",
        "slug": "safe-cracking",
        "module": "Graph II",
        "premium": true,
        "verbose": "Use a list of hints to determine the combination to unlock a safe.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static String safeCracking(List<List<Integer>> hints) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.Stack;\n\nclass Source {\n  public static String safeCracking(List<List<Integer>> hints) {\n    HashMap<Integer, List<Integer>> graph = buildGraph(hints);\n    \n    HashMap<Integer, Integer> numParents = new HashMap<>();\n    for (int node : graph.keySet()) {\n      numParents.put(node, 0);\n    }\n    for (int node : graph.keySet()) {\n      for (Integer child : graph.get(node)) {\n        numParents.put(child, numParents.get(child) + 1); \n      }\n    }\n    \n    Stack<Integer> ready = new Stack<>();\n    for (int node : numParents.keySet()) {\n      if (numParents.get(node) == 0) {\n        ready.push(node);\n      }\n    }\n    \n    List<String> order = new ArrayList<>();\n    while (!ready.isEmpty()) {\n      int node = ready.pop();\n      order.add(Integer.toString(node));\n      for (int child : graph.get(node)) {\n        numParents.put(child, numParents.get(child) - 1);\n        if (numParents.get(child) == 0) {\n          ready.push(child);\n        }\n      }\n    }\n    \n    return String.join(\"\", order);\n  }\n  \n  public static HashMap<Integer, List<Integer>> buildGraph(List<List<Integer>> edges) {\n    HashMap<Integer, List<Integer>> graph = new HashMap<>();\n    for (List<Integer> edge : edges) {\n      int nodeA = edge.get(0);\n      int nodeB = edge.get(1);\n      if (!graph.containsKey(nodeA)) {\n        graph.put(nodeA, new ArrayList<>());\n      }\n      if (!graph.containsKey(nodeB)) {\n        graph.put(nodeB, new ArrayList<>());\n      }\n      graph.get(nodeA).add(nodeB);\n    }\n    return graph;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::string-search": {
      "statement": "Write a method, *stringSearch*, that takes in a grid of letters and a string as arguments. The method should return a boolean indicating whether or not the string can be found in the grid as a path by connecting horizontal or vertical positions. The path can begin at any position, but you cannot reuse a position more than once in the path. You can assume that all letters are lowercase and alphabetic.",
      "examples": [
        "List<List<String>> grid = List.of(\n  new ArrayList<>(List.of(\"e\", \"y\", \"h\", \"i\", \"j\")),\n  new ArrayList<>(List.of(\"q\", \"x\", \"e\", \"r\", \"p\")),\n  new ArrayList<>(List.of(\"r\", \"o\", \"l\", \"l\", \"n\")),\n  new ArrayList<>(List.of(\"p\", \"r\", \"x\", \"o\", \"h\")),\n  new ArrayList<>(List.of(\"a\", \"a\", \"m\", \"c\", \"m\"))\n);\nSource.stringSearch(grid, \"hello\"); // -> true",
        "List<List<String>> grid = List.of(\n  new ArrayList<>(List.of(\"e\", \"y\", \"h\", \"i\", \"j\")),\n  new ArrayList<>(List.of(\"q\", \"x\", \"e\", \"r\", \"p\")),\n  new ArrayList<>(List.of(\"r\", \"o\", \"l\", \"l\", \"n\")),\n  new ArrayList<>(List.of(\"p\", \"r\", \"x\", \"o\", \"h\")),\n  new ArrayList<>(List.of(\"a\", \"a\", \"m\", \"c\", \"m\"))\n);\nSource.stringSearch(grid, \"proxy\"); // -> true",
        "List<List<String>> grid = List.of(\n  new ArrayList<>(List.of(\"e\", \"y\", \"h\", \"i\", \"j\"),\n  new ArrayList<>(List.of(\"q\", \"x\", \"e\", \"r\", \"p\"),\n  new ArrayList<>(List.of(\"r\", \"o\", \"l\", \"l\", \"n\"),\n  new ArrayList<>(List.of(\"p\", \"r\", \"x\", \"o\", \"h\"),\n  new ArrayList<>(List.of(\"a\", \"a\", \"m\", \"c\", \"m\")\n);\nSource.stringSearch(grid, \"rolling\"); // -> false"
      ],
      "testCases": [
        "List<List<String>> grid = List.of(\n  new ArrayList<>(List.of(\"e\", \"y\", \"h\", \"i\", \"j\")),\n  new ArrayList<>(List.of(\"q\", \"x\", \"e\", \"r\", \"p\")),\n  new ArrayList<>(List.of(\"r\", \"o\", \"l\", \"l\", \"n\")),\n  new ArrayList<>(List.of(\"p\", \"r\", \"x\", \"o\", \"h\")),\n  new ArrayList<>(List.of(\"a\", \"a\", \"m\", \"c\", \"m\"))\n);\nSource.stringSearch(grid, \"hello\"); // -> true",
        "List<List<String>> grid = List.of(\n  new ArrayList<>(List.of(\"e\", \"y\", \"h\", \"i\", \"j\")),\n  new ArrayList<>(List.of(\"q\", \"x\", \"e\", \"r\", \"p\")),\n  new ArrayList<>(List.of(\"r\", \"o\", \"l\", \"l\", \"n\")),\n  new ArrayList<>(List.of(\"p\", \"r\", \"x\", \"o\", \"h\")),\n  new ArrayList<>(List.of(\"a\", \"a\", \"m\", \"c\", \"m\"))\n);\nSource.stringSearch(grid, \"proxy\"); // -> true",
        "List<List<String>> grid = List.of(\n  new ArrayList<>(List.of(\"e\", \"y\", \"h\", \"i\", \"j\"),\n  new ArrayList<>(List.of(\"q\", \"x\", \"e\", \"r\", \"p\"),\n  new ArrayList<>(List.of(\"r\", \"o\", \"l\", \"l\", \"n\"),\n  new ArrayList<>(List.of(\"p\", \"r\", \"x\", \"o\", \"h\"),\n  new ArrayList<>(List.of(\"a\", \"a\", \"m\", \"c\", \"m\")\n);\nSource.stringSearch(grid, \"rolling\"); // -> false",
        "List<List<String>> grid = List.of(\n  new ArrayList<>(List.of(\"e\", \"y\", \"h\", \"i\", \"j\")),\n  new ArrayList<>(List.of(\"q\", \"x\", \"e\", \"r\", \"p\")),\n  new ArrayList<>(List.of(\"r\", \"o\", \"l\", \"l\", \"n\")),\n  new ArrayList<>(List.of(\"p\", \"r\", \"x\", \"o\", \"h\")),\n  new ArrayList<>(List.of(\"a\", \"a\", \"m\", \"z\", \"m\"))\n);\nSource.stringSearch(grid, \"zoo\"); // -> false",
        "List<List<String>> grid = List.of(\n  new ArrayList<>(List.of(\"q\", \"w\", \"h\", \"i\", \"j\"),\n  new ArrayList<>(List.of(\"q\", \"e\", \"r\", \"o\", \"p\"),\n  new ArrayList<>(List.of(\"h\", \"y\", \"t\", \"x\", \"z\"),\n  new ArrayList<>(List.of(\"k\", \"o\", \"m\", \"o\", \"p\")\n);\nSource.stringSearch(grid, \"qwerty\"); // -> true",
        "List<List<String>> grid = List.of( \n  new ArrayList<>(List.of( \"f\", \"d\", \"i\", \"e\", \"l\", \"u\", \"j\", \"t\", \"q\", \"v\", \"o\", \"p\" )), \n  new ArrayList<>(List.of( \"o\", \"p\", \"b\", \"e\", \"m\", \"w\", \"m\", \"l\", \"h\", \"j\", \"s\", \"v\" )), \n  new ArrayList<>(List.of( \"g\", \"b\", \"s\", \"m\", \"i\", \"w\", \"w\", \"h\", \"l\", \"m\", \"l\", \"n\" )), \n  new ArrayList<>(List.of( \"a\", \"l\", \"s\", \"k\", \"p\", \"c\", \"t\", \"u\", \"v\", \"b\", \"c\", \"m\" )), \n  new ArrayList<>(List.of( \"m\", \"t\", \"c\", \"k\", \"e\", \"n\", \"r\", \"b\", \"a\", \"z\", \"l\", \"c\" )), \n  new ArrayList<>(List.of( \"q\", \"m\", \"a\", \"p\", \"a\", \"p\", \"i\", \"i\", \"u\", \"t\", \"z\", \"z\" )), \n  new ArrayList<>(List.of( \"d\", \"u\", \"z\", \"o\", \"e\", \"r\", \"a\", \"t\", \"t\", \"c\", \"q\", \"k\" )), \n  new ArrayList<>(List.of( \"f\", \"u\", \"z\", \"g\", \"c\", \"i\", \"k\", \"v\", \"o\", \"f\", \"s\", \"w\" )), \n  new ArrayList<>(List.of( \"p\", \"h\", \"u\", \"i\", \"k\", \"c\", \"v\", \"v\", \"h\", \"q\", \"v\", \"i\" )), \n  new ArrayList<>(List.of( \"l\", \"q\", \"w\", \"f\", \"y\", \"g\", \"w\", \"f\", \"a\", \"u\", \"x\", \"q\" )) \n);\nSource.stringSearch(grid, \"paprika\"); // -> true",
        "List<List<String>> grid = List.of(\n  new ArrayList<>(List.of( \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\" )),\n  new ArrayList<>(List.of( \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\" )),\n  new ArrayList<>(List.of( \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\" )),\n  new ArrayList<>(List.of( \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\" )),\n  new ArrayList<>(List.of( \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\" )),\n  new ArrayList<>(List.of( \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\" )),\n  new ArrayList<>(List.of( \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\" )),\n  new ArrayList<>(List.of( \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"x\", \"x\" )),\n  new ArrayList<>(List.of( \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"s\", \"x\", \"h\" ))\n);\nSource.stringSearch(grid, \"sssssssh\"); // -> false",
        "List<List<String>> grid = List.of(\n  new ArrayList<>(List.of(\"a\", \"b\", \"a\")),\n  new ArrayList<>(List.of(\"t\", \"x\", \"x\")),\n  new ArrayList<>(List.of(\"x\", \"x\", \"x\"))\n);\nSource.stringSearch(grid, \"abat\"); // -> true",
        "List<List<String>> grid = List.of(\n  new ArrayList<>(List.of(\"a\", \"o\", \"o\", \"o\", \"o\")),\n  new ArrayList<>(List.of(\"b\", \"c\", \"d\", \"o\", \"o\")),\n  new ArrayList<>(List.of(\"c\", \"f\", \"e\", \"o\", \"o\")),\n  new ArrayList<>(List.of(\"d\", \"o\", \"o\", \"o\", \"o\")),\n  new ArrayList<>(List.of(\"o\", \"o\", \"o\", \"o\", \"o\"))\n);\nSource.stringSearch(grid, \"abcdefc\"); // -> true",
        "Source.stringSearch(grid, \"hello\") -> true",
        "Source.stringSearch(grid, \"proxy\") -> true",
        "Source.stringSearch(grid, \"rolling\") -> false",
        "Source.stringSearch(grid, \"zoo\") -> false",
        "Source.stringSearch(grid, \"qwerty\") -> true",
        "Source.stringSearch(grid, \"paprika\") -> true",
        "Source.stringSearch(grid, \"sssssssh\") -> false",
        "Source.stringSearch(grid, \"abat\") -> true",
        "Source.stringSearch(grid, \"abcdefc\") -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first search",
          "code": "import java.util.List;\n\nclass Source {\n  public static boolean stringSearch(List<List<String>> grid, String s) {\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        if (dfs(grid, s, r, c)) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n  \n  public static boolean dfs(List<List<String>> grid, String s, int r, int c) {\n    if (s.length() == 0) {\n      return true;\n    }\n    \n    boolean rowInbounds = r >= 0 && r < grid.size();\n    boolean colInbounds = c >= 0 && c < grid.get(0).size();\n    \n    if (!rowInbounds || !colInbounds) {\n      return false;\n    }\n    \n    String current = grid.get(r).get(c);\n    if (!current.equals(Character.toString(s.charAt(0)))) {\n      return false;\n    }\n    \n    String suffix = s.substring(1);\n    grid.get(r).set(c, \"*\");\n    boolean result = dfs(grid, suffix, r - 1, c)\n      || dfs(grid, suffix, r + 1, c)\n      || dfs(grid, suffix, r, c - 1)\n      || dfs(grid, suffix, r, c + 1);\n    grid.get(r).set(c, current);\n    \n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "r = # grid rows | c = # grid columns | Time: O(3^(r*c)) | Space: O(r*c)"
        }
      ],
      "meta": {
        "name": "string search",
        "slug": "string-search",
        "module": "Graph II",
        "premium": true,
        "verbose": "Check if a string is found within a grid of letters.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static boolean stringSearch(List<List<String>> grid, String s) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\n\nclass Source {\n  public static boolean stringSearch(List<List<String>> grid, String s) {\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        if (dfs(grid, s, r, c)) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n  \n  public static boolean dfs(List<List<String>> grid, String s, int r, int c) {\n    if (s.length() == 0) {\n      return true;\n    }\n    \n    boolean rowInbounds = r >= 0 && r < grid.size();\n    boolean colInbounds = c >= 0 && c < grid.get(0).size();\n    \n    if (!rowInbounds || !colInbounds) {\n      return false;\n    }\n    \n    String current = grid.get(r).get(c);\n    if (!current.equals(Character.toString(s.charAt(0)))) {\n      return false;\n    }\n    \n    String suffix = s.substring(1);\n    grid.get(r).set(c, \"*\");\n    boolean result = dfs(grid, suffix, r - 1, c)\n      || dfs(grid, suffix, r + 1, c)\n      || dfs(grid, suffix, r, c - 1)\n      || dfs(grid, suffix, r, c + 1);\n    grid.get(r).set(c, current);\n    \n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::union-find-code-i": {
      "statement": "Write a method, countComponents, that takes in a number of nodes (n) and a list of edges for an undirected graph. In the graph, nodes are labeled from 0 to n - 1. The method should return the number of connected components in the given graph. This will be practice for implementing the basic Union-Find algorithm for graphs. Watch the approach and walkthrough videos first!",
      "examples": [
        "countComponents(7, List.of(\n  List.of(0, 2),\n  List.of(1, 0),\n  List.of(4, 3),\n  List.of(2, 5),\n  List.of(3, 6)\n)); // -> 2",
        "countComponents(6, List.of(\n  List.of(0, 3),\n  List.of(5, 3),\n  List.of(4, 2)\n)); // -> 3",
        "countComponents(6, List.of(\n  List.of(0, 3),\n  List.of(5, 3),\n  List.of(4, 2),\n  List.of(3, 2),\n  List.of(3, 1)\n)); // -> 1"
      ],
      "testCases": [
        "countComponents(7, List.of(\n  List.of(0, 2),\n  List.of(1, 0),\n  List.of(4, 3),\n  List.of(2, 5),\n  List.of(3, 6)\n)); // -> 2",
        "countComponents(6, List.of(\n  List.of(0, 3),\n  List.of(5, 3),\n  List.of(4, 2)\n)); // -> 3",
        "countComponents(6, List.of(\n  List.of(0, 3),\n  List.of(5, 3),\n  List.of(4, 2),\n  List.of(3, 2),\n  List.of(3, 1)\n)); // -> 1",
        "countComponents(100, List.of(\n  List.of(50, 60),\n  List.of(80, 20)\n)); // -> 98",
        "Source.countComponents(7, List.of( List.of(0, 2), List.of(1, 0), List.of(4, 3), List.of(2, 5), List.of(3, 6) )) -> 2",
        "Source.countComponents(6, List.of( List.of(0, 3), List.of(5, 3), List.of(4, 2) )) -> 3",
        "Source.countComponents(6, List.of( List.of(0, 3), List.of(5, 3), List.of(4, 2), List.of(3, 2), List.of(3, 1) )) -> 1",
        "Source.countComponents(100, List.of( List.of(50, 60), List.of(80, 20) )) -> 98"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "basic union find",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  private static void union(List<Integer> roots, int nodeA, int nodeB) {\n    int rootA = find(roots, nodeA);\n    int rootB = find(roots, nodeB);   \n    roots.set(rootB, rootA);\n  }\n  \n  private static int find(List<Integer> roots, int node) {\n    if (node == roots.get(node)) {\n      return node;\n    }\n\n    return find(roots, roots.get(node));\n  }\n  \n  public static int countComponents(int n, List<List<Integer>> edges) {\n    List<Integer> roots = new ArrayList<>();\n    for (int i = 0; i < n; i += 1) {\n      roots.add(i);\n    }\n\n    for (List<Integer> edge : edges) {\n      union(roots, edge.get(0), edge.get(1));\n    }\n\n    int count = 0;\n    for (int i = 0; i < n; i += 1) {\n      if (i == roots.get(i)) {\n        count += 1;\n      }\n    }\n\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": ""
        }
      ],
      "meta": {
        "name": "union find code I",
        "slug": "union-find-code-i",
        "module": "Graph II",
        "premium": true,
        "verbose": "Let's practicing implementing the core union-find algorithm for graphs.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int countComponents(int n, List<List<Integer>> edges) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  private static void union(List<Integer> roots, int nodeA, int nodeB) {\n    int rootA = find(roots, nodeA);\n    int rootB = find(roots, nodeB);   \n    roots.set(rootB, rootA);\n  }\n  \n  private static int find(List<Integer> roots, int node) {\n    if (node == roots.get(node)) {\n      return node;\n    }\n\n    return find(roots, roots.get(node));\n  }\n  \n  public static int countComponents(int n, List<List<Integer>> edges) {\n    List<Integer> roots = new ArrayList<>();\n    for (int i = 0; i < n; i += 1) {\n      roots.add(i);\n    }\n\n    for (List<Integer> edge : edges) {\n      union(roots, edge.get(0), edge.get(1));\n    }\n\n    int count = 0;\n    for (int i = 0; i < n; i += 1) {\n      if (i == roots.get(i)) {\n        count += 1;\n      }\n    }\n\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::union-find-code-ii": {
      "statement": "Let's learn more about union-find algorithm by implementing size and path-compression. Watch the approach and walkthrough videos first. Write a method, countComponents, that takes in a number of nodes (n) and a list of edges for an undirected graph. In the graph, nodes are labeled from 0 to n - 1. The method should return the number of connected components in the given graph. Solve this by implementing the complete Union-Find algorithm with size and path-compression.",
      "examples": [
        "countComponents(10, List.of(\n  List.of(3, 2),\n  List.of(5, 4),\n  List.of(4, 3),\n  List.of(2, 1),\n  List.of(0, 1),\n  List.of(8, 9),\n  List.of(5, 6),\n  List.of(7, 8)\n)); // -> 2",
        "countComponents(7, List.of(\n  List.of(0, 2),\n  List.of(1, 0),\n  List.of(4, 3),\n  List.of(2, 5),\n  List.of(3, 6)\n)); // -> 2",
        "countComponents(6, List.of(\n  List.of(0, 3),\n  List.of(5, 3),\n  List.of(4, 2)\n)); // -> 3"
      ],
      "testCases": [
        "countComponents(10, List.of(\n  List.of(3, 2),\n  List.of(5, 4),\n  List.of(4, 3),\n  List.of(2, 1),\n  List.of(0, 1),\n  List.of(8, 9),\n  List.of(5, 6),\n  List.of(7, 8)\n)); // -> 2",
        "countComponents(7, List.of(\n  List.of(0, 2),\n  List.of(1, 0),\n  List.of(4, 3),\n  List.of(2, 5),\n  List.of(3, 6)\n)); // -> 2",
        "countComponents(6, List.of(\n  List.of(0, 3),\n  List.of(5, 3),\n  List.of(4, 2)\n)); // -> 3",
        "countComponents(6, List.of(\n  List.of(0, 3),\n  List.of(5, 3),\n  List.of(4, 2),\n  List.of(3, 2),\n  List.of(3, 1)\n)); // -> 1",
        "countComponents(100, List.of(\n  List.of(50, 60),\n  List.of(80, 20)\n)); // -> 98",
        "Source.countComponents(10, List.of( List.of(3, 2), List.of(5, 4), List.of(4, 3), List.of(2, 1), List.of(0, 1), List.of(8, 9), List.of(5, 6), List.of(7, 8) )) -> 2",
        "Source.countComponents(7, List.of( List.of(0, 2), List.of(1, 0), List.of(4, 3), List.of(2, 5), List.of(3, 6) )) -> 2",
        "Source.countComponents(6, List.of( List.of(0, 3), List.of(5, 3), List.of(4, 2) )) -> 3",
        "Source.countComponents(6, List.of( List.of(0, 3), List.of(5, 3), List.of(4, 2), List.of(3, 2), List.of(3, 1) )) -> 1",
        "Source.countComponents(100, List.of( List.of(50, 60), List.of(80, 20) )) -> 98"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "union find with size and path-compression",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  private static void union(List<Integer> roots, List<Integer> sizes, int nodeA, int nodeB) {\n    int rootA = find(roots, nodeA);\n    int rootB = find(roots, nodeB);   \n\n    if (rootA == rootB) {\n      return;\n    }\n\n    if (sizes.get(rootA) >= sizes.get(rootB)) {\n      roots.set(rootB, rootA);\n      sizes.set(rootA, sizes.get(rootA) + sizes.get(rootB));\n    } else {\n      roots.set(rootA, rootB);\n      sizes.set(rootB, sizes.get(rootB) + sizes.get(rootA));\n    }\n  }\n  \n  private static int find(List<Integer> roots, int node) {\n    if (node == roots.get(node)) {\n      return node;\n    }\n\n    int found = find(roots, roots.get(node));\n    roots.set(node, found);\n    return found;\n  }\n  \n  public static int countComponents(int n, List<List<Integer>> edges) {\n    List<Integer> roots = new ArrayList<>();\n    List<Integer> sizes = new ArrayList<>();\n    \n    for (int i = 0; i < n; i += 1) {\n      roots.add(i);\n      sizes.add(1);\n    }\n\n    for (List<Integer> edge : edges) {\n      union(roots, sizes, edge.get(0), edge.get(1));\n    }\n\n    System.out.println(roots);\n    int count = 0;\n    for (int i = 0; i < n; i += 1) {\n      if (i == roots.get(i)) {\n        count += 1;\n      }\n    }\n\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = # nodes | e = # edges | Time: O(n + e * α(n)) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "union find code II",
        "slug": "union-find-code-ii",
        "module": "Graph II",
        "premium": true,
        "verbose": "More union-find. Now with size and path-compression!",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int countComponents(int n, List<List<Integer>> edges) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  private static void union(List<Integer> roots, List<Integer> sizes, int nodeA, int nodeB) {\n    int rootA = find(roots, nodeA);\n    int rootB = find(roots, nodeB);   \n\n    if (rootA == rootB) {\n      return;\n    }\n\n    if (sizes.get(rootA) >= sizes.get(rootB)) {\n      roots.set(rootB, rootA);\n      sizes.set(rootA, sizes.get(rootA) + sizes.get(rootB));\n    } else {\n      roots.set(rootA, rootB);\n      sizes.set(rootB, sizes.get(rootB) + sizes.get(rootA));\n    }\n  }\n  \n  private static int find(List<Integer> roots, int node) {\n    if (node == roots.get(node)) {\n      return node;\n    }\n\n    int found = find(roots, roots.get(node));\n    roots.set(node, found);\n    return found;\n  }\n  \n  public static int countComponents(int n, List<List<Integer>> edges) {\n    List<Integer> roots = new ArrayList<>();\n    List<Integer> sizes = new ArrayList<>();\n    \n    for (int i = 0; i < n; i += 1) {\n      roots.add(i);\n      sizes.add(1);\n    }\n\n    for (List<Integer> edge : edges) {\n      union(roots, sizes, edge.get(0), edge.get(1));\n    }\n\n    System.out.println(roots);\n    int count = 0;\n    for (int i = 0; i < n; i += 1) {\n      if (i == roots.get(i)) {\n        count += 1;\n      }\n    }\n\n    return count;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::province-sizes": {
      "statement": "Write a method, provinceSizes, that takes in a number of cities n and a list of roads which connect cities. Roads can be traveled in both directions. Cities are named from 0 to n. A \"province\" is a group of 1 or more cities that are connected by roads. The \"size\" of a province is the number of cities that make up that province. Your method should return a list containing the sizes of the provinces. You may return the result in any order. Solve this using Union-Find.",
      "examples": [
        "provinceSizes(6, List.of(\n  List.of(4, 5),\n  List.of(1, 0),\n  List.of(2, 3),\n  List.of(0, 5),\n  List.of(5, 1),\n  List.of(4, 0)\n)); // -> [4, 2]",
        "provinceSizes(5, List.of(\n  List.of(4, 0),\n  List.of(3, 2)\n)); // -> [1, 2, 2]",
        "provinceSizes(7, List.of(\n  List.of(3, 2),\n  List.of(4, 1),\n  List.of(0, 2),\n  List.of(3, 0),\n  List.of(2, 5)\n)); // -> [2, 4, 1]"
      ],
      "testCases": [
        "provinceSizes(6, List.of(\n  List.of(4, 5),\n  List.of(1, 0),\n  List.of(2, 3),\n  List.of(0, 5),\n  List.of(5, 1),\n  List.of(4, 0)\n)); // -> [4, 2]",
        "provinceSizes(5, List.of(\n  List.of(4, 0),\n  List.of(3, 2)\n)); // -> [1, 2, 2]",
        "provinceSizes(7, List.of(\n  List.of(3, 2),\n  List.of(4, 1),\n  List.of(0, 2),\n  List.of(3, 0),\n  List.of(2, 5)\n)); // -> [2, 4, 1]",
        "provinceSizes(7, List.of(\n  List.of(1, 6),\n  List.of(0, 2),\n  List.of(6, 3),\n  List.of(5, 1),\n  List.of(1, 2),\n  List.of(3, 4),\n  List.of(1, 4),\n  List.of(3, 0)\n)); // -> [7]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "union find w/ size and path-compression",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  private static int find(List<Integer> roots, int node) {\n    if (node == roots.get(node)) {\n      return node;\n    }\n\n    int found = find(roots, roots.get(node));\n    roots.set(node, found);\n    return found;\n  }\n  \n  private static void union(List<Integer> roots, List<Integer> sizes, int nodeA, int nodeB) {\n    int rootA = find(roots, nodeA);\n    int rootB = find(roots, nodeB);\n    \n    if (rootA == rootB) {\n      return;\n    }\n\n    if (sizes.get(rootA) >= sizes.get(rootB)) {\n      roots.set(rootB, rootA);\n      sizes.set(rootA, sizes.get(rootA) + sizes.get(rootB));\n    } else {\n      roots.set(rootA, rootB);\n      sizes.set(rootB, sizes.get(rootB) + sizes.get(rootA));\n    }\n  }\n  \n  public static List<Integer> provinceSizes(int n, List<List<Integer>> roads) {\n    List<Integer> roots = new ArrayList<>();\n    List<Integer> sizes = new ArrayList<>();\n\n    for (int i = 0; i < n; i += 1) {\n      roots.add(i);\n      sizes.add(1);\n    }\n\n    for (List<Integer> road : roads) {\n      union(roots, sizes, road.get(0), road.get(1));\n    }\n\n    List<Integer> result = new ArrayList<>();\n    for (int i = 0; i < n; i += 1) {\n      if (i == roots.get(i)) {\n        result.add(sizes.get(i));\n      }\n    }\n    \n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": ""
        }
      ],
      "meta": {
        "name": "province sizes",
        "slug": "province-sizes",
        "module": "Graph II",
        "premium": true,
        "verbose": "Find the sizes of provinces based on connected cities.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Integer> provinceSizes(int n, List<List<Integer>> roads) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  private static int find(List<Integer> roots, int node) {\n    if (node == roots.get(node)) {\n      return node;\n    }\n\n    int found = find(roots, roots.get(node));\n    roots.set(node, found);\n    return found;\n  }\n  \n  private static void union(List<Integer> roots, List<Integer> sizes, int nodeA, int nodeB) {\n    int rootA = find(roots, nodeA);\n    int rootB = find(roots, nodeB);\n    \n    if (rootA == rootB) {\n      return;\n    }\n\n    if (sizes.get(rootA) >= sizes.get(rootB)) {\n      roots.set(rootB, rootA);\n      sizes.set(rootA, sizes.get(rootA) + sizes.get(rootB));\n    } else {\n      roots.set(rootA, rootB);\n      sizes.set(rootB, sizes.get(rootB) + sizes.get(rootA));\n    }\n  }\n  \n  public static List<Integer> provinceSizes(int n, List<List<Integer>> roads) {\n    List<Integer> roots = new ArrayList<>();\n    List<Integer> sizes = new ArrayList<>();\n\n    for (int i = 0; i < n; i += 1) {\n      roots.add(i);\n      sizes.add(1);\n    }\n\n    for (List<Integer> road : roads) {\n      union(roots, sizes, road.get(0), road.get(1));\n    }\n\n    List<Integer> result = new ArrayList<>();\n    for (int i = 0; i < n; i += 1) {\n      if (i == roots.get(i)) {\n        result.add(sizes.get(i));\n      }\n    }\n    \n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::extra-cable": {
      "statement": "You are given a network of computers connected by cables. A cable connects two computers and can transmit data in both directions. A fully-connected network is a network where all computers can communicate with each other by transmitting data through cables. For example: ```plaintext 1. the following network is fully-connected: 3 | 0---1---2---4 2. the following network is not fully-connected: 3 | 0---1 2---4 Example 2 is not fully-connected because computers 2 and 0 cannot communicate. There are other such pairs of computers that cannot communicate like 4 and 1, etc.. ``` A fully-connected network is also considered minimal if it uses as few cables as possible. For example: ```plaintext 1. the following network is fully-connected AND minimal: 3 | 0--1--2--4 2. the following network is fully-connected BUT NOT minimal: 3 | \\ 0--1--2--4 Example 2 is not minimal because either cable (3,1) or (3,2) or (1,2) is not needed to keep the network fully-connected. ``` You are given a computer network that started out as fully-connected and minimal, but someone added exactly one extra cable. Your job is to find a cable that can be safely removed, ensuring network is fully-connected and minimal. Write a function that takes in number *numComputers* and a list of cables that connect the computers. Computers have ids from 0 to *numComputers - 1*. The function should return a cable that can be safely removed. There will be multiple possible cables that can be chosen; you may return any of them.",
      "examples": [
        "1. the following network is fully-connected:\n    3\n    |\n0---1---2---4\n\n\n2. the following network is not fully-connected:\n    3\n    |\n0---1     2---4\n\nExample 2 is not fully-connected because computers 2 and 0 cannot communicate.\nThere are other such pairs of computers that cannot communicate like 4 and 1, etc..",
        "1. the following network is fully-connected AND minimal:\n   3\n   |\n0--1--2--4\n\n\n2. the following network is fully-connected BUT NOT minimal:\n    3\n   | \\\n0--1--2--4\n\nExample 2 is not minimal because either cable (3,1) or (3,2) or (1,2) is not needed to keep the network fully-connected.",
        "extraCable(5, List.of(\n  List.of(3, 2),\n  List.of(1, 2),\n  List.of(4, 2),\n  List.of(3, 1),\n  List.of(0, 1)\n)); // -> [3, 1]"
      ],
      "testCases": [
        "1. the following network is fully-connected:\n    3\n    |\n0---1---2---4\n\n\n2. the following network is not fully-connected:\n    3\n    |\n0---1     2---4\n\nExample 2 is not fully-connected because computers 2 and 0 cannot communicate.\nThere are other such pairs of computers that cannot communicate like 4 and 1, etc..",
        "1. the following network is fully-connected AND minimal:\n   3\n   |\n0--1--2--4\n\n\n2. the following network is fully-connected BUT NOT minimal:\n    3\n   | \\\n0--1--2--4\n\nExample 2 is not minimal because either cable (3,1) or (3,2) or (1,2) is not needed to keep the network fully-connected.",
        "extraCable(5, List.of(\n  List.of(3, 2),\n  List.of(1, 2),\n  List.of(4, 2),\n  List.of(3, 1),\n  List.of(0, 1)\n)); // -> [3, 1]",
        "extraCable(6, List.of(\n  List.of(0, 4),\n  List.of(4, 5),\n  List.of(3, 4),\n  List.of(5, 1),\n  List.of(1, 3),\n  List.of(2, 4)\n)); // -> [4, 3]",
        "extraCable(3, List.of(\n  List.of(0, 1),\n  List.of(1, 2),\n  List.of(2, 0)\n)); // -> [2, 0]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "union find w/ size and path-compression",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  private static int find(List<Integer> roots, int node) {\n    if (node == roots.get(node)) {\n      return node;\n    }\n\n    int found = find(roots, roots.get(node));\n    roots.set(node, found);\n    return found;\n  }\n  \n  private static boolean union(List<Integer> roots, List<Integer> sizes, int nodeA, int nodeB) {\n    int rootA = find(roots, nodeA);\n    int rootB = find(roots, nodeB);\n    \n    if (rootA == rootB) {\n      return false;\n    }\n\n    if (sizes.get(rootA) >= sizes.get(rootB)) {\n      roots.set(rootB, rootA);\n      sizes.set(rootA, sizes.get(rootA) + sizes.get(rootB));\n    } else {\n      roots.set(rootA, rootB);\n      sizes.set(rootB, sizes.get(rootB) + sizes.get(rootA));\n    }\n    return true;\n  }\n  \n  public static List<Integer> extraCable(int numComputers, List<List<Integer>> cables) {\n    List<Integer> roots = new ArrayList<>(); \n    List<Integer> sizes = new ArrayList<>(); \n    for (int i = 0; i < numComputers; i += 1) {\n      roots.add(i);\n      sizes.add(1);\n    }\n\n    for (List<Integer> cable : cables) {\n      if(!union(roots, sizes, cable.get(0), roots.get(1))) {\n        return cable;\n      }\n    }\n\n    return List.of();\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": ""
        }
      ],
      "meta": {
        "name": "extra cable",
        "slug": "extra-cable",
        "module": "Graph II",
        "premium": true,
        "verbose": "Find a cable that can be unplugged without breaking the connectivity of computers in a network.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Integer> extraCable(int numComputers, List<List<Integer>> cables) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  private static int find(List<Integer> roots, int node) {\n    if (node == roots.get(node)) {\n      return node;\n    }\n\n    int found = find(roots, roots.get(node));\n    roots.set(node, found);\n    return found;\n  }\n  \n  private static boolean union(List<Integer> roots, List<Integer> sizes, int nodeA, int nodeB) {\n    int rootA = find(roots, nodeA);\n    int rootB = find(roots, nodeB);\n    \n    if (rootA == rootB) {\n      return false;\n    }\n\n    if (sizes.get(rootA) >= sizes.get(rootB)) {\n      roots.set(rootB, rootA);\n      sizes.set(rootA, sizes.get(rootA) + sizes.get(rootB));\n    } else {\n      roots.set(rootA, rootB);\n      sizes.set(rootB, sizes.get(rootB) + sizes.get(rootA));\n    }\n    return true;\n  }\n  \n  public static List<Integer> extraCable(int numComputers, List<List<Integer>> cables) {\n    List<Integer> roots = new ArrayList<>(); \n    List<Integer> sizes = new ArrayList<>(); \n    for (int i = 0; i < numComputers; i += 1) {\n      roots.add(i);\n      sizes.add(1);\n    }\n\n    for (List<Integer> cable : cables) {\n      if(!union(roots, sizes, cable.get(0), roots.get(1))) {\n        return cable;\n      }\n    }\n\n    return List.of();\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::weighted-graph-min-path": {
      "statement": "Write a method that takes in the adjacency list for a weighted graph and two nodes, src and dst. The method should return the minimum cost path that travels from src to dst. The cost of a path is the sum of the weights of edges traveled. You can assume that the weights are non-negative numbers and there is at least one path between src and dst.",
      "examples": [
        "Map<String, Map<String, Integer>> graph = Map.of(\n  \"a\", Map.of( \"b\", 2, \"d\", 9, \"c\", 5 ),\n  \"b\", Map.of( \"a\", 2, \"d\", 4, \"e\", 6 ),\n  \"c\", Map.of( \"a\", 5, \"e\", 4 ),\n  \"d\", Map.of( \"a\", 9, \"b\", 4, \"e\", 1 ),\n  \"e\", Map.of( \"b\", 6, \"c\", 4, \"d\", 1 )\n);\nweightedGraphMinPath(graph, \"a\", \"e\"); // -> 7",
        "Map<String, Map<String, Integer>> graph = Map.of(\n  \"a\", Map.of( \"b\", 1, \"c\", 1 ),\n  \"b\", Map.of( \"c\", 3, \"a\", 1 ),\n  \"c\", Map.of( \"b\", 3, \"d\", 1, \"a\", 1 ),\n  \"d\", Map.of( \"c\", 1, \"b\", 2 )\n);\nweightedGraphMinPath(graph, \"a\", \"d\"); // -> 2",
        "Map<String, Map<String, Integer>> graph = Map.of(\n  \"q\", Map.of( \"r\", 5, \"s\", 10 ),\n  \"r\", Map.of( \"q\", 5, \"s\", 9, \"u\", 2 ),\n  \"s\", Map.of( \"q\", 10, \"r\", 9, \"t\", 1, \"v\", 8 ),\n  \"t\", Map.of( \"s\", 1 ),\n  \"u\", Map.of( \"r\", 2, \"s\", 1 ),\n  \"v\", Map.of()\n);\nweightedGraphMinPath(graph, \"q\", \"v\"); // -> 16"
      ],
      "testCases": [
        "Map<String, Map<String, Integer>> graph = Map.of(\n  \"a\", Map.of( \"b\", 2, \"d\", 9, \"c\", 5 ),\n  \"b\", Map.of( \"a\", 2, \"d\", 4, \"e\", 6 ),\n  \"c\", Map.of( \"a\", 5, \"e\", 4 ),\n  \"d\", Map.of( \"a\", 9, \"b\", 4, \"e\", 1 ),\n  \"e\", Map.of( \"b\", 6, \"c\", 4, \"d\", 1 )\n);\nweightedGraphMinPath(graph, \"a\", \"e\"); // -> 7",
        "Map<String, Map<String, Integer>> graph = Map.of(\n  \"a\", Map.of( \"b\", 1, \"c\", 1 ),\n  \"b\", Map.of( \"c\", 3, \"a\", 1 ),\n  \"c\", Map.of( \"b\", 3, \"d\", 1, \"a\", 1 ),\n  \"d\", Map.of( \"c\", 1, \"b\", 2 )\n);\nweightedGraphMinPath(graph, \"a\", \"d\"); // -> 2",
        "Map<String, Map<String, Integer>> graph = Map.of(\n  \"q\", Map.of( \"r\", 5, \"s\", 10 ),\n  \"r\", Map.of( \"q\", 5, \"s\", 9, \"u\", 2 ),\n  \"s\", Map.of( \"q\", 10, \"r\", 9, \"t\", 1, \"v\", 8 ),\n  \"t\", Map.of( \"s\", 1 ),\n  \"u\", Map.of( \"r\", 2, \"s\", 1 ),\n  \"v\", Map.of()\n);\nweightedGraphMinPath(graph, \"q\", \"v\"); // -> 16",
        "Map<String, Map<String, Integer>> graph = Map.of(\n  \"q\", Map.of( \"r\", 5, \"s\", 10 ),\n  \"r\", Map.of( \"q\", 5, \"s\", 9, \"u\", 2 ),\n  \"s\", Map.of( \"q\", 10, \"r\", 9, \"t\", 1, \"v\", 8 ),\n  \"t\", Map.of( \"s\", 1 ),\n  \"u\", Map.of( \"r\", 2, \"s\", 1 ),\n  \"v\", Map.of()\n);\nweightedGraphMinPath(graph, \"r\", \"v\"); // -> 11",
        "Map<String, Map<String, Integer>> graph = Map.of(\n  \"x\", Map.of(\"q\", 1, \"e\", 10 ),\n  \"b\", Map.of(\"e\", 7, \"q\", 8 ),\n  \"q\", Map.of(\"x\", 1, \"b\", 8 ),\n  \"e\", Map.of(\"b\", 7, \"x\", 10 )\n);\nweightedGraphMinPath(graph, \"b\", \"x\"); // -> 9",
        "Source.weightedGraphMinPath(graph, \"a\", \"e\") -> 7",
        "Source.weightedGraphMinPath(graph, \"a\", \"d\") -> 2",
        "Source.weightedGraphMinPath(graph, \"q\", \"v\") -> 16",
        "Source.weightedGraphMinPath(graph, \"r\", \"v\") -> 11",
        "Source.weightedGraphMinPath(graph, \"b\", \"x\") -> 9"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.Map;\nimport java.util.Set;\nimport java.util.HashSet;\n\nclass Source {\n  public static int weightedGraphMinPath(Map<String, Map<String, Integer>> graph, String src, String dst) {\n    return (int) minPath(graph, src, dst, new HashSet<>());\n  }\n\n  private static double minPath(Map<String, Map<String, Integer>> graph, String src, String dst, Set<String> visited) {\n    if (src == dst) {\n      return 0;\n    }\n\n    if (visited.contains(src)) {\n      return Double.POSITIVE_INFINITY;\n    }\n    visited.add(src);\n\n    double minCost = Double.POSITIVE_INFINITY;\n    for (String neighbor : graph.get(src).keySet()) {\n      int cost = graph.get(src).get(neighbor);\n      double totalCost = cost + minPath(graph, neighbor, dst, visited);\n      minCost = Math.min(minCost, totalCost);\n    }\n\n    visited.remove(src);\n    return minCost;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n!) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "weighted graph min path",
        "slug": "weighted-graph-min-path",
        "module": "Graph II",
        "premium": true,
        "verbose": "Find the minimum cost path between two nodes in a weighted graph.",
        "stub": "import java.util.Map;\n\nclass Source {\n  public static int weightedGraphMinPath(Map<String, Map<String, Integer>> graph, String src, String dst) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.Map;\nimport java.util.Set;\nimport java.util.HashSet;\n\nclass Source {\n  public static int weightedGraphMinPath(Map<String, Map<String, Integer>> graph, String src, String dst) {\n    return (int) minPath(graph, src, dst, new HashSet<>());\n  }\n\n  private static double minPath(Map<String, Map<String, Integer>> graph, String src, String dst, Set<String> visited) {\n    if (src == dst) {\n      return 0;\n    }\n\n    if (visited.contains(src)) {\n      return Double.POSITIVE_INFINITY;\n    }\n    visited.add(src);\n\n    double minCost = Double.POSITIVE_INFINITY;\n    for (String neighbor : graph.get(src).keySet()) {\n      int cost = graph.get(src).get(neighbor);\n      double totalCost = cost + minPath(graph, neighbor, dst, visited);\n      minCost = Math.min(minCost, totalCost);\n    }\n\n    visited.remove(src);\n    return minCost;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "graph-ii::lowest-toll": {
      "statement": "You are given the tolls for different highways. Each highway connects a pair of cities and has a particular cost that must be paid to use it. Each highway toll is a triplet (cityA, cityB, cost). Every highway can be traveled in either direction. Write a method that takes in highway tolls and two cities. The method should return the lowest cost required to travel between the two cities. You can assume that there exists at least one way to travel between the two cities.",
      "examples": [
        "List<List<Object>> highwayTolls = List.of(\n  List.of(\"Hampton\", \"Fairfax\", 7.50),\n  List.of(\"Roanoake\", \"Alexandria\", 4.20),\n  List.of(\"Alexandria\", \"Hampton\", 14.50),\n  List.of(\"Hampton\", \"Roanoake\", 8.90),\n  List.of(\"Alexandria\", \"Fairfax\", 5.90),\n  List.of(\"Hampton\", \"Manassas\", 3.50),\n  List.of(\"Fairfax\", \"Manassas\", 2.20)\n);\nlowestToll(highwayTolls, \"Alexandria\", \"Hampton\"); // -> 11.60",
        "List<List<Object>> highwayTolls = List.of(\n  List.of(\"Hampton\", \"Fairfax\", 7.50),\n  List.of(\"Roanoake\", \"Alexandria\", 4.20),\n  List.of(\"Alexandria\", \"Hampton\", 14.50),\n  List.of(\"Hampton\", \"Roanoake\", 8.90),\n  List.of(\"Alexandria\", \"Fairfax\", 5.90),\n  List.of(\"Hampton\", \"Manassas\", 3.50),\n  List.of(\"Fairfax\", \"Manassas\", 2.20)\n);\nlowestToll(highwayTolls, \"Alexandria\", \"Fairfax\"); // -> 5.90",
        "List<List<Object>> highwayTolls = List.of(\n  List.of(\"Hampton\", \"Fairfax\", 7.50),\n  List.of(\"Roanoake\", \"Alexandria\", 4.20),\n  List.of(\"Alexandria\", \"Hampton\", 14.50),\n  List.of(\"Hampton\", \"Roanoake\", 8.90),\n  List.of(\"Alexandria\", \"Fairfax\", 5.90),\n  List.of(\"Hampton\", \"Manassas\", 3.50),\n  List.of(\"Fairfax\", \"Manassas\", 2.20)\n);\nlowestToll(highwayTolls, \"Hampton\", \"Fairfax\"); // -> 5.70"
      ],
      "testCases": [
        "List<List<Object>> highwayTolls = List.of(\n  List.of(\"Hampton\", \"Fairfax\", 7.50),\n  List.of(\"Roanoake\", \"Alexandria\", 4.20),\n  List.of(\"Alexandria\", \"Hampton\", 14.50),\n  List.of(\"Hampton\", \"Roanoake\", 8.90),\n  List.of(\"Alexandria\", \"Fairfax\", 5.90),\n  List.of(\"Hampton\", \"Manassas\", 3.50),\n  List.of(\"Fairfax\", \"Manassas\", 2.20)\n);\nlowestToll(highwayTolls, \"Alexandria\", \"Hampton\"); // -> 11.60",
        "List<List<Object>> highwayTolls = List.of(\n  List.of(\"Hampton\", \"Fairfax\", 7.50),\n  List.of(\"Roanoake\", \"Alexandria\", 4.20),\n  List.of(\"Alexandria\", \"Hampton\", 14.50),\n  List.of(\"Hampton\", \"Roanoake\", 8.90),\n  List.of(\"Alexandria\", \"Fairfax\", 5.90),\n  List.of(\"Hampton\", \"Manassas\", 3.50),\n  List.of(\"Fairfax\", \"Manassas\", 2.20)\n);\nlowestToll(highwayTolls, \"Alexandria\", \"Fairfax\"); // -> 5.90",
        "List<List<Object>> highwayTolls = List.of(\n  List.of(\"Hampton\", \"Fairfax\", 7.50),\n  List.of(\"Roanoake\", \"Alexandria\", 4.20),\n  List.of(\"Alexandria\", \"Hampton\", 14.50),\n  List.of(\"Hampton\", \"Roanoake\", 8.90),\n  List.of(\"Alexandria\", \"Fairfax\", 5.90),\n  List.of(\"Hampton\", \"Manassas\", 3.50),\n  List.of(\"Fairfax\", \"Manassas\", 2.20)\n);\nlowestToll(highwayTolls, \"Hampton\", \"Fairfax\"); // -> 5.70",
        "Source.lowestToll(highwayTolls, \"Alexandria\", \"Hampton\") -> 11.60",
        "Source.lowestToll(highwayTolls, \"Alexandria\", \"Fairfax\") -> 5.90",
        "Source.lowestToll(highwayTolls, \"Hampton\", \"Fairfax\") -> 5.70"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.List;\nimport java.util.Map;\nimport java.util.Set;\nimport java.util.HashMap;\nimport java.util.HashSet;\n\nclass Source {\n  public static double lowestToll(List<List<Object>> highwayTolls, String startCity, String endCity) {\n    Map<String, Map<String, Double>> graph = new HashMap<>();\n    for(List<Object> toll : highwayTolls) {\n      String cityA = (String) toll.get(0);\n      String cityB = (String) toll.get(1);\n      double cost = (double) toll.get(2);\n      if (!graph.containsKey(cityA)) {\n        graph.put(cityA, new HashMap<>());\n      }\n      if (!graph.containsKey(cityB)) {\n        graph.put(cityB, new HashMap<>());\n      }\n      graph.get(cityA).put(cityB, cost);\n      graph.get(cityB).put(cityA, cost);\n    }\n    \n    return minPath(graph, startCity, endCity, new HashSet<>());\n  }\n\n  private static double minPath(Map<String, Map<String, Double>> graph, String src, String dst, Set<String> visited) {\n    if (src == dst) {\n      return 0;\n    }\n\n    if (visited.contains(src)) {\n      return Double.POSITIVE_INFINITY;\n    }\n    visited.add(src);\n\n    double minCost = Double.POSITIVE_INFINITY;\n    for (String neighbor : graph.get(src).keySet()) {\n      double cost = graph.get(src).get(neighbor);\n      double totalCost = cost + minPath(graph, neighbor, dst, visited);\n      if (totalCost < minCost) {\n        minCost = totalCost;\n      }\n    }\n    \n    visited.remove(src);\n    return minCost;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of cities | Time: O(n!) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "lowest toll",
        "slug": "lowest-toll",
        "module": "Graph II",
        "premium": true,
        "verbose": "Given the cost to travel between cities, find the cheapeast way to travel.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static double lowestToll(List<List<Object>> highwayTolls, String startCity, String endCity) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.Map;\nimport java.util.Set;\nimport java.util.HashMap;\nimport java.util.HashSet;\n\nclass Source {\n  public static double lowestToll(List<List<Object>> highwayTolls, String startCity, String endCity) {\n    Map<String, Map<String, Double>> graph = new HashMap<>();\n    for(List<Object> toll : highwayTolls) {\n      String cityA = (String) toll.get(0);\n      String cityB = (String) toll.get(1);\n      double cost = (double) toll.get(2);\n      if (!graph.containsKey(cityA)) {\n        graph.put(cityA, new HashMap<>());\n      }\n      if (!graph.containsKey(cityB)) {\n        graph.put(cityB, new HashMap<>());\n      }\n      graph.get(cityA).put(cityB, cost);\n      graph.get(cityB).put(cityA, cost);\n    }\n    \n    return minPath(graph, startCity, endCity, new HashSet<>());\n  }\n\n  private static double minPath(Map<String, Map<String, Double>> graph, String src, String dst, Set<String> visited) {\n    if (src == dst) {\n      return 0;\n    }\n\n    if (visited.contains(src)) {\n      return Double.POSITIVE_INFINITY;\n    }\n    visited.add(src);\n\n    double minCost = Double.POSITIVE_INFINITY;\n    for (String neighbor : graph.get(src).keySet()) {\n      double cost = graph.get(src).get(neighbor);\n      double totalCost = cost + minPath(graph, neighbor, dst, visited);\n      if (totalCost < minCost) {\n        minCost = totalCost;\n      }\n    }\n    \n    visited.remove(src);\n    return minCost;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::prefix-product": {
      "statement": "Write a method, prefixProduct, that takes in a list of *numbers*. The method should return a new list of the same length where each element contains the running product up to that index of the original list. ```plaintext For example, the i-th result should be the product of all elements 0 to i: result[i] = numbers[0] * numbers[1] * numbers[2] * ... * numbers[i] ``` You can assume that the input list is non-empty.",
      "examples": [
        "For example, the i-th result should be the product of all elements 0 to i:\n\nresult[i] = numbers[0] * numbers[1] * numbers[2] * ... * numbers[i]",
        "prefixProduct(List.of(4, 2, 1, 6, 3, 6)); // -> [ 4, 8, 8, 48, 144, 864 ]",
        "prefixProduct(List.of(10, 5, -2, 1, 1)); // -> [ 10, 50, -100, -100, -100 ]"
      ],
      "testCases": [
        "For example, the i-th result should be the product of all elements 0 to i:\n\nresult[i] = numbers[0] * numbers[1] * numbers[2] * ... * numbers[i]",
        "prefixProduct(List.of(4, 2, 1, 6, 3, 6)); // -> [ 4, 8, 8, 48, 144, 864 ]",
        "prefixProduct(List.of(10, 5, -2, 1, 1)); // -> [ 10, 50, -100, -100, -100 ]",
        "prefixProduct(List.of(2, 5)); // -> [ 2, 10 ]",
        "prefixProduct(List.of(12, 88, 0, -50, 30, 2)); // -> [ 12, 1056, 0, 0, 0, 0 ]",
        "prefixProduct(List.of(2)); // ->  [ 2 ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "prefix array",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<Integer> prefixProduct(List<Integer> numbers) {\n    int total = 1;\n    List<Integer> result = new ArrayList<>();\n    for (int num : numbers) {\n      total *= num;\n      result.add(total);\n    }\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of list | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "prefix product",
        "slug": "prefix-product",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Find the running product of an array of numbers.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<Integer> prefixProduct(List<Integer> numbers) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static List<Integer> prefixProduct(List<Integer> numbers) {\n    int total = 1;\n    List<Integer> result = new ArrayList<>();\n    for (int num : numbers) {\n      total *= num;\n      result.add(total);\n    }\n    return result;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::leaf-layers": {
      "statement": "# leaf layers Write a method, leafLayers, that takes in the root of a binary tree. The method should return a 2D list where each subarray represents a \"leaf layer\" of the tree. To get a leaf layer, take all leaf nodes in tree. Then, conceptually \"remove\" them from the tree. This will create new \"leaves\". Repeat this process until the tree is empty. You don't need to actually delete the nodes from the tree, just return the list of layers.",
      "examples": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nleafLayers(a); // ->\n// [\n//   [\"d\", \"e\", \"f\"],\n//   [\"b\", \"c\"],\n//   [\"a\"]\n// ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\nNode<String> i = new Node<>(\"i\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\nf.left = i;\n\n//         a\n//      /    \\\n//     b      c\n//   /  \\      \\\n//  d    e      f\n//      / \\    /\n//     g  h   i\n\nleafLayers(a); // ->\n// [\n//   [\"d\", \"g\", \"h\", \"i\"],\n//   [\"e\", \"f\"],\n//   [\"b\", \"c\"],\n//   [\"a\"]\n// ]",
        "Node<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\nNode<String> u = new Node<>(\"u\");\nNode<String> v = new Node<>(\"v\");\n\nq.left = r;\nq.right = s;\nr.right = t;\nt.left = u;\nu.right = v;\n\n//      q\n//    /   \\\n//   r     s\n//    \\\n//     t\n//    /\n//   u\n//  /\n// v\n\nleafLayers(q); //->\n// [\n//   [\"v\", \"s\"],\n//   [\"u\"],\n//   [\"t\"],\n//   [\"r\"],\n//   [\"q\"]\n// ]"
      ],
      "testCases": [
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nleafLayers(a); // ->\n// [\n//   [\"d\", \"e\", \"f\"],\n//   [\"b\", \"c\"],\n//   [\"a\"]\n// ]",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\nNode<String> i = new Node<>(\"i\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\nf.left = i;\n\n//         a\n//      /    \\\n//     b      c\n//   /  \\      \\\n//  d    e      f\n//      / \\    /\n//     g  h   i\n\nleafLayers(a); // ->\n// [\n//   [\"d\", \"g\", \"h\", \"i\"],\n//   [\"e\", \"f\"],\n//   [\"b\", \"c\"],\n//   [\"a\"]\n// ]",
        "Node<String> q = new Node<>(\"q\");\nNode<String> r = new Node<>(\"r\");\nNode<String> s = new Node<>(\"s\");\nNode<String> t = new Node<>(\"t\");\nNode<String> u = new Node<>(\"u\");\nNode<String> v = new Node<>(\"v\");\n\nq.left = r;\nq.right = s;\nr.right = t;\nt.left = u;\nu.right = v;\n\n//      q\n//    /   \\\n//   r     s\n//    \\\n//     t\n//    /\n//   u\n//  /\n// v\n\nleafLayers(q); //->\n// [\n//   [\"v\", \"s\"],\n//   [\"u\"],\n//   [\"t\"],\n//   [\"r\"],\n//   [\"q\"]\n// ]",
        "leafLayers(null); // -> []",
        "Node<String> a = new Node<>(\"x\");\nNode<String> b = new Node<>(\"x\");\nNode<String> c = new Node<>(\"x\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\nNode<String> h = new Node<>(\"h\");\nNode<String> i = new Node<>(\"x\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\ne.right = h;\nf.left = i;\n\n//         x\n//      /    \\\n//     x      x\n//   /  \\      \\\n//  d    e      f\n//      / \\    /\n//     g  h   x\n\nleafLayers(a); // ->\n// [\n//   [\"d\", \"g\", \"h\", \"x\"],\n//   [\"e\", \"f\"],\n//   [\"x\", \"x\"],\n//   [\"x\"]\n// ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Depth-First",
          "code": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static <T> List<List<T>> leafLayers(Node<T> root) {\n    List<List<T>> layers = new ArrayList<>();\n    traverse(root, layers);\n    return layers;\n  }\n\n  private static <T> int traverse(Node<T> root, List<List<T>> layers) {\n    if (root == null) {\n      return -1;\n    }\n    int leftHeight = traverse(root.left, layers);\n    int rightHeight = traverse(root.right, layers);\n    int height = 1 + Math.max(leftHeight, rightHeight);\n\n    if (layers.size() == height) {\n      layers.add(new ArrayList<>());\n    }\n\n    layers.get(height).add(root.val);\n    return height;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = # nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "leaf layers",
        "slug": "leaf-layers",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Transform a binary tree into an array of its leaf layers",
        "stub": "import java.util.List;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static <T> List<List<T>> leafLayers(Node<T> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\n\nclass Source {\n  public static <T> List<List<T>> leafLayers(Node<T> root) {\n    List<List<T>> layers = new ArrayList<>();\n    traverse(root, layers);\n    return layers;\n  }\n\n  private static <T> int traverse(Node<T> root, List<List<T>> layers) {\n    if (root == null) {\n      return -1;\n    }\n    int leftHeight = traverse(root.left, layers);\n    int rightHeight = traverse(root.right, layers);\n    int height = 1 + Math.max(leftHeight, rightHeight);\n\n    if (layers.size() == height) {\n      layers.add(new ArrayList<>());\n    }\n\n    layers.get(height).add(root.val);\n    return height;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::max-increasing-subseq": {
      "statement": "Write a method, maxIncreasingSubseq, that takes in a list of numbers as an argument. The method should return the length of the longest subsequence of strictly increasing numbers. A subsequence of a list can be created by deleting any elements of the list, while maintaining the relative order of elements. ``` For example, given: [4, 18, 20, 10, 12, 15, 19] The longest increasing subsequence is 4, 10, 12, 15, 19. This subsequence has a length of 5. ```",
      "examples": [
        "For example, given:\n\n[4, 18, 20, 10, 12, 15, 19]\n\nThe longest increasing subsequence is 4, 10, 12, 15, 19.\nThis subsequence has a length of 5.",
        "List<Integer> numbers = List.of(4, 18, 20, 10, 12, 15, 19);\nSource.maxIncreasingSubseq(numbers); // -> 5",
        "List<Integer> numbers = List.of(12, 9, 2, 5, 4, 32, 90, 20);\nSource.maxIncreasingSubseq(numbers); // -> 4"
      ],
      "testCases": [
        "For example, given:\n\n[4, 18, 20, 10, 12, 15, 19]\n\nThe longest increasing subsequence is 4, 10, 12, 15, 19.\nThis subsequence has a length of 5.",
        "List<Integer> numbers = List.of(4, 18, 20, 10, 12, 15, 19);\nSource.maxIncreasingSubseq(numbers); // -> 5",
        "List<Integer> numbers = List.of(12, 9, 2, 5, 4, 32, 90, 20);\nSource.maxIncreasingSubseq(numbers); // -> 4",
        "List<Integer> numbers = List.of(42, 50, 51, 60, 55, 70, 4, 5, 70);\nSource.maxIncreasingSubseq(numbers); // -> 5",
        "List<Integer> numbers = List.of(7, 14, 10, 12);\nSource.maxIncreasingSubseq(numbers); // -> 3",
        "List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21);\nSource.maxIncreasingSubseq(numbers); // -> 21",
        "List<Integer> numbers = List.of(\n  1, 2, 3, 4, 5, 12, 6, 30, 7, 8, 9, 10, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100,\n  104\n);\nSource.maxIncreasingSubseq(numbers); // -> 23",
        "List<Integer> numbers = List.of(\n  1, 2, 300, 3, 4, 305, 5, 12, 6, 30, 7, 8, 9, 10, 10, 10, 15, 11, 12, 13, 10, 18, 14, 15, 16,\n  17, 18, 19, 20, 21, 100,101 ,102, 103, 104, 105\n);\nSource.maxIncreasingSubseq(numbers); // -> 27",
        "List<Integer> numbers = List.of(\n  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,\n  1, 1, 1, 1, 1, 1, 1, 1, 1\n);\nSource.maxIncreasingSubseq(numbers); // -> 1",
        "List<Integer> numbers = List.of(\n  1, 2, 300, 3, 4, 305, 5, 10, 7, 10, 6, 12, 6, 30, 7, 8, 9, 10, 10, 16, 14, 9, 10, 15, 11, 12, 13, \n  10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100,101 ,102, 103, 104, 105\n);\nSource.maxIncreasingSubseq(numbers); // -> 27",
        "Source.maxIncreasingSubseq(numbers) -> 5",
        "Source.maxIncreasingSubseq(numbers) -> 4",
        "Source.maxIncreasingSubseq(numbers) -> 3",
        "Source.maxIncreasingSubseq(numbers) -> 21",
        "Source.maxIncreasingSubseq(numbers) -> 23",
        "Source.maxIncreasingSubseq(numbers) -> 27",
        "Source.maxIncreasingSubseq(numbers) -> 1"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int maxIncreasingSubseq(List<Integer> numbers) {\n    return maxIncreasingSubseq(numbers, 0, -1, new HashMap<>());\n  }\n  \n  public static int maxIncreasingSubseq(List<Integer> numbers, int i, int lastNum, HashMap<List<Integer>, Integer> memo) {\n    if (i == numbers.size()) {\n      return 0;\n    }\n    \n    List<Integer> key = List.of(i, lastNum);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    int dontTake = maxIncreasingSubseq(numbers, i + 1, lastNum, memo);\n    \n    int currentNum = numbers.get(i);\n    int take = -1;\n    if (currentNum > lastNum) {\n      take = 1 + maxIncreasingSubseq(numbers, i + 1, numbers.get(i), memo);\n    }\n    \n    if (dontTake > take) {\n      memo.put(key, dontTake);\n      return dontTake;\n    } else {\n      memo.put(key, take);\n      return take;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of list | Time: O(n^2) | Space: O(n^2)"
        }
      ],
      "meta": {
        "name": "max increasing subseq",
        "slug": "max-increasing-subseq",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Find the length of the longest increasing subsequence of numbers.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int maxIncreasingSubseq(List<Integer> numbers) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int maxIncreasingSubseq(List<Integer> numbers) {\n    return maxIncreasingSubseq(numbers, 0, -1, new HashMap<>());\n  }\n  \n  public static int maxIncreasingSubseq(List<Integer> numbers, int i, int lastNum, HashMap<List<Integer>, Integer> memo) {\n    if (i == numbers.size()) {\n      return 0;\n    }\n    \n    List<Integer> key = List.of(i, lastNum);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    int dontTake = maxIncreasingSubseq(numbers, i + 1, lastNum, memo);\n    \n    int currentNum = numbers.get(i);\n    int take = -1;\n    if (currentNum > lastNum) {\n      take = 1 + maxIncreasingSubseq(numbers, i + 1, numbers.get(i), memo);\n    }\n    \n    if (dontTake > take) {\n      memo.put(key, dontTake);\n      return dontTake;\n    } else {\n      memo.put(key, take);\n      return take;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::knightly-number": {
      "statement": "A knight is on a chess board. Can you figure out the total number of ways the knight can move to a target position in exactly m moves? On a single move, the knight can move in an \"L\" shape; two spaces in any direction, then one space in a perpendicular direction. This means that on a single move, a knight has [eight possible positions](https://structy-static.s3.amazonaws.com/knight-movement.png) it can move to. Write a method, knightlyNumber, that takes in 6 arguments: n, m, kr, kc, pr, pc - n = the length of the chess board - m = the number of moves that must be used - kr = the starting row of the knight - kc = the starting column of the knight - pr = the target row - pc = the target column The method should return the number of \"unique ways\" the knight can move to the target in exactly m moves. The knight can revisit positions of the board if needed. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. Note that a \"unique way\" the knight can move to the target is a unique series of positions that the knight can travel to the target.",
      "examples": [
        "Source.knightlyNumber(8, 2, 4, 4, 5, 5); // -> 2",
        "Source.knightlyNumber(8, 2, 7, 1, 7, 1); // -> 3",
        "Source.knightlyNumber(8, 2, 5, 4, 5, 4); // -> 8"
      ],
      "testCases": [
        "Source.knightlyNumber(8, 2, 4, 4, 5, 5); // -> 2",
        "Source.knightlyNumber(8, 2, 7, 1, 7, 1); // -> 3",
        "Source.knightlyNumber(8, 2, 5, 4, 5, 4); // -> 8",
        "Source.knightlyNumber(8, 3, 5, 2, 4, 4); // -> 21",
        "Source.knightlyNumber(20, 6, 18, 7, 10, 15); // -> 60",
        "Source.knightlyNumber(20, 12, 8, 3, 9, 14); // -> 98410127",
        "Source.knightlyNumber(8, 2, 0, 0, 1, 1); // -> 0",
        "Source.knightlyNumber(8, 2, 4, 4, 5, 5) -> 2",
        "Source.knightlyNumber(8, 2, 7, 1, 7, 1) -> 3",
        "Source.knightlyNumber(8, 2, 5, 4, 5, 4) -> 8",
        "Source.knightlyNumber(8, 3, 5, 2, 4, 4) -> 21",
        "Source.knightlyNumber(20, 6, 18, 7, 10, 15) -> 60",
        "Source.knightlyNumber(20, 12, 8, 3, 9, 14) -> 98410127",
        "Source.knightlyNumber(8, 2, 0, 0, 1, 1) -> 0"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "Solution",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {  \n  public static int knightlyNumber(int n, int m, int kr, int kc, int pr, int pc) {\n    return knightlyNumber(n, m, kr, kc, pr, pc, new HashMap<>());\n  }\n  \n  public static int knightlyNumber(int n, int m, int kr, int kc, int pr, int pc, HashMap<List<Integer>, Integer> memo) {\n    if (kr < 0 || kr >= n || kc < 0 || kc >= n) {\n      return 0;\n    }\n    \n    if (m == 0) {\n      if (kr == pr && kc == pc) {\n        return 1;\n      } else {\n        return 0;\n      }\n    } \n    \n    List<Integer> key = List.of(m, kr, kc);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n\n    List<List<Integer>> deltas = List.of(\n      List.of(1, 2),\n      List.of(1, -2),\n      List.of(-1, 2),\n      List.of(-1, -2),\n      List.of(2, 1),\n      List.of(2, -1),\n      List.of(-2, 1),\n      List.of(-2, -1)\n    );\n    \n    int total = 0;\n    for (List<Integer> delta : deltas) {\n      int dRow = delta.get(0);\n      int dCol = delta.get(1);\n      int newRow = kr + dRow;\n      int newCol = kc + dCol;\n      total += knightlyNumber(n, m - 1, newRow, newCol, pr, pc, memo);\n    }\n    \n    memo.put(key, total);\n    return total;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of the board | m = number of moves | Time: O(m * n^2) | Space: O(m * n^2)"
        }
      ],
      "meta": {
        "name": "knightly number",
        "slug": "knightly-number",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Find the number of different ways a knight can move to a position on a chess board.",
        "stub": "class Source {\n  public static int knightlyNumber(int n, int m, int kr, int kc, int pr, int pc)  {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {  \n  public static int knightlyNumber(int n, int m, int kr, int kc, int pr, int pc) {\n    return knightlyNumber(n, m, kr, kc, pr, pc, new HashMap<>());\n  }\n  \n  public static int knightlyNumber(int n, int m, int kr, int kc, int pr, int pc, HashMap<List<Integer>, Integer> memo) {\n    if (kr < 0 || kr >= n || kc < 0 || kc >= n) {\n      return 0;\n    }\n    \n    if (m == 0) {\n      if (kr == pr && kc == pc) {\n        return 1;\n      } else {\n        return 0;\n      }\n    } \n    \n    List<Integer> key = List.of(m, kr, kc);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n\n    List<List<Integer>> deltas = List.of(\n      List.of(1, 2),\n      List.of(1, -2),\n      List.of(-1, 2),\n      List.of(-1, -2),\n      List.of(2, 1),\n      List.of(2, -1),\n      List.of(-2, 1),\n      List.of(-2, -1)\n    );\n    \n    int total = 0;\n    for (List<Integer> delta : deltas) {\n      int dRow = delta.get(0);\n      int dCol = delta.get(1);\n      int newRow = kr + dRow;\n      int newCol = kc + dCol;\n      total += knightlyNumber(n, m - 1, newRow, newCol, pr, pc, memo);\n    }\n    \n    memo.put(key, total);\n    return total;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::all-trips": {
      "statement": "You are given a list of bus routes, a start station, and an end station. A bus route is a pair of two stations (a, b) such that the bus travels from a to b, but not from b to a. Write a method that returns a list containing all possible trips we can make that travel from the starting station to the ending station. You can assume that there are no cycles in the bus routes.",
      "examples": [
        "List<List<String>> routes = List.of(\n  List.of(\"brookdale\", \"denton junction\"),\n  List.of(\"astor place\", \"brookdale\"),\n  List.of(\"astor place\", \"cony island\"),\n  List.of(\"astor place\", \"denton junction\"),\n  List.of(\"cony island\", \"denton junction\")\n);\nallTrips(routes, \"astor place\", \"denton junction\"); // ->\n// [\n//   [\"astor place\", \"brookdale\", \"denton junction\"],\n//   [\"astor place\", \"cony island\", \"denton junction\"],\n//   [\"astor place\", \"denton junction\"]\n// ]",
        "List<List<String>> routes = List.of(\n  List.of(\"brookdale\", \"denton junction\"),\n  List.of(\"astor place\", \"brookdale\"),\n  List.of(\"astor place\", \"cony island\"),\n  List.of(\"astor place\", \"denton junction\"),\n  List.of(\"cony island\", \"denton junction\")\n);\nallTrips(routes, \"cony island\", \"brookdale\"); // ->\n// []",
        "List<List<String>> routes = List.of(\n  List.of(\"arlington\", \"boerum\"),\n  List.of(\"boerum\", \"central\"),\n  List.of(\"central\", \"euclid\"),\n  List.of(\"euclid\", \"fairfax\"),\n  List.of(\"arlington\", \"dyckman\"),\n  List.of(\"boerum\", \"euclid\"),\n  List.of(\"dyckman\", \"boerum\"),\n  List.of(\"dyckman\", \"fairfax\")\n);\nallTrips(routes, \"arlington\", \"central\"); // ->\n// [\n//   [\"arlington\", \"boerum\", \"central\"],\n//   [\"arlington\", \"dyckman\", \"boerum\", \"central\"]\n// ]"
      ],
      "testCases": [
        "List<List<String>> routes = List.of(\n  List.of(\"brookdale\", \"denton junction\"),\n  List.of(\"astor place\", \"brookdale\"),\n  List.of(\"astor place\", \"cony island\"),\n  List.of(\"astor place\", \"denton junction\"),\n  List.of(\"cony island\", \"denton junction\")\n);\nallTrips(routes, \"astor place\", \"denton junction\"); // ->\n// [\n//   [\"astor place\", \"brookdale\", \"denton junction\"],\n//   [\"astor place\", \"cony island\", \"denton junction\"],\n//   [\"astor place\", \"denton junction\"]\n// ]",
        "List<List<String>> routes = List.of(\n  List.of(\"brookdale\", \"denton junction\"),\n  List.of(\"astor place\", \"brookdale\"),\n  List.of(\"astor place\", \"cony island\"),\n  List.of(\"astor place\", \"denton junction\"),\n  List.of(\"cony island\", \"denton junction\")\n);\nallTrips(routes, \"cony island\", \"brookdale\"); // ->\n// []",
        "List<List<String>> routes = List.of(\n  List.of(\"arlington\", \"boerum\"),\n  List.of(\"boerum\", \"central\"),\n  List.of(\"central\", \"euclid\"),\n  List.of(\"euclid\", \"fairfax\"),\n  List.of(\"arlington\", \"dyckman\"),\n  List.of(\"boerum\", \"euclid\"),\n  List.of(\"dyckman\", \"boerum\"),\n  List.of(\"dyckman\", \"fairfax\")\n);\nallTrips(routes, \"arlington\", \"central\"); // ->\n// [\n//   [\"arlington\", \"boerum\", \"central\"],\n//   [\"arlington\", \"dyckman\", \"boerum\", \"central\"]\n// ]",
        "List<List<String>> routes = List.of(\n  List.of(\"arlington\", \"boerum\"),\n  List.of(\"boerum\", \"central\"),\n  List.of(\"central\", \"euclid\"),\n  List.of(\"euclid\", \"fairfax\"),\n  List.of(\"arlington\", \"dyckman\"),\n  List.of(\"boerum\", \"euclid\"),\n  List.of(\"dyckman\", \"boerum\"),\n  List.of(\"dyckman\", \"fairfax\")\n);\nallTrips(routes, \"arlington\", \"fairfax\"); // ->\n// [\n//   [\"arlington\", \"boerum\", \"central\", \"euclid\", \"fairfax\"],\n//   [\"arlington\", \"boerum\", \"euclid\", \"fairfax\"],\n//   [\"arlington\", \"dyckman\", \"boerum\", \"central\", \"euclid\", \"fairfax\"],\n//   [\"arlington\", \"dyckman\", \"boerum\", \"euclid\", \"fairfax\"],\n//   [\"arlington\", \"dyckman\", \"fairfax\"]\n// ]"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.Collections;\n\nclass Source {\n  public static List<List<String>> allTrips(List<List<String>> routes, String startStation, String endStation) {\n    HashMap<String, List<String>> graph = buildGraph(routes);\n    List<List<String>> paths = getAllPaths(graph, startStation, endStation);\n    for (List<String> path : paths) {\n      Collections.reverse(path);\n    }\n    return paths;\n  }\n  \n  private static List<List<String>> getAllPaths(HashMap<String, List<String>> graph, String src, String dst) {\n    if (src == dst) {\n      List<String> innerList = new ArrayList<>();\n      innerList.add(src);\n      return List.of( innerList );\n    }\n\n    List<List<String>> allPaths = new ArrayList<>();\n    for (String neighbor : graph.get(src)) {\n      for (List<String> neighborPath : getAllPaths(graph, neighbor, dst)) {\n        neighborPath.add(src);\n        allPaths.add(neighborPath);    \n      }\n    }\n    return allPaths;\n  }\n\n  private static HashMap<String, List<String>> buildGraph(List<List<String>> edges) {\n    HashMap<String, List<String>> graph = new HashMap<>();\n    for (List<String> edge : edges) {\n      String a = edge.get(0);\n      String b = edge.get(1);\n      if (!graph.containsKey(a)) {\n        graph.put(a, new ArrayList<>());\n      }\n      if (!graph.containsKey(b)) {\n        graph.put(b, new ArrayList<>());\n      }\n      graph.get(a).add(b);\n    }\n    return graph;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of bus stops | Time: O(2^n) | Space: O(2^n)"
        }
      ],
      "meta": {
        "name": "all trips",
        "slug": "all-trips",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Generate all possible trips between two bus stops.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static List<List<String>> allTrips(List<List<String>> routes, String startStation, String endStation) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.Collections;\n\nclass Source {\n  public static List<List<String>> allTrips(List<List<String>> routes, String startStation, String endStation) {\n    HashMap<String, List<String>> graph = buildGraph(routes);\n    List<List<String>> paths = getAllPaths(graph, startStation, endStation);\n    for (List<String> path : paths) {\n      Collections.reverse(path);\n    }\n    return paths;\n  }\n  \n  private static List<List<String>> getAllPaths(HashMap<String, List<String>> graph, String src, String dst) {\n    if (src == dst) {\n      List<String> innerList = new ArrayList<>();\n      innerList.add(src);\n      return List.of( innerList );\n    }\n\n    List<List<String>> allPaths = new ArrayList<>();\n    for (String neighbor : graph.get(src)) {\n      for (List<String> neighborPath : getAllPaths(graph, neighbor, dst)) {\n        neighborPath.add(src);\n        allPaths.add(neighborPath);    \n      }\n    }\n    return allPaths;\n  }\n\n  private static HashMap<String, List<String>> buildGraph(List<List<String>> edges) {\n    HashMap<String, List<String>> graph = new HashMap<>();\n    for (List<String> edge : edges) {\n      String a = edge.get(0);\n      String b = edge.get(1);\n      if (!graph.containsKey(a)) {\n        graph.put(a, new ArrayList<>());\n      }\n      if (!graph.containsKey(b)) {\n        graph.put(b, new ArrayList<>());\n      }\n      graph.get(a).add(b);\n    }\n    return graph;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::has-path-sum": {
      "statement": "# has path sum Write a method, hasPathSum, that takes in the root of a binary tree and a target number. The method should return a boolean indicating whether or not there is a path through the tree that sums to the target. A path must begin at the root and end at a leaf.",
      "examples": [
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(4);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nhasPathSum(a, 8); // -> true",
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(4);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nhasPathSum(a, 12); // -> true",
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(4);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nhasPathSum(a, 7); // -> false"
      ],
      "testCases": [
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(4);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nhasPathSum(a, 8); // -> true",
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(4);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nhasPathSum(a, 12); // -> true",
        "Node<Integer> a = new Node<>(3);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(4);\nNode<Integer> d = new Node<>(4);\nNode<Integer> e = new Node<>(-2);\nNode<Integer> f = new Node<>(1);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//       3\n//    /    \\\n//   11     4\n//  / \\      \\\n// 4   -2     1\n\nhasPathSum(a, 7); // -> false",
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(54);\nNode<Integer> d = new Node<>(20);\nNode<Integer> e = new Node<>(15);\nNode<Integer> f = new Node<>(1);\nNode<Integer> g = new Node<>(3);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\ne.left = f;\ne.right = g;\n\n//        5\n//     /    \\\n//    11    54\n//  /   \\\n// 20   15\n//      / \\\n//     1  3\n\nhasPathSum(a, 16); // -> false",
        "Node<Integer> a = new Node<>(5);\nNode<Integer> b = new Node<>(11);\nNode<Integer> c = new Node<>(54);\nNode<Integer> d = new Node<>(20);\nNode<Integer> e = new Node<>(15);\nNode<Integer> f = new Node<>(1);\nNode<Integer> g = new Node<>(3);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\ne.left = f;\ne.right = g;\n\n//        5\n//     /    \\\n//    11    54\n//  /   \\\n// 20   15\n//      / \\\n//     1  3\n\nhasPathSum(a, 32); // -> true",
        "Node<Integer> a = new Node<>(-1);\nNode<Integer> b = new Node<>(-6);\nNode<Integer> c = new Node<>(-5);\nNode<Integer> d = new Node<>(-3);\nNode<Integer> e = new Node<>(0);\nNode<Integer> f = new Node<>(-13);\nNode<Integer> g = new Node<>(-1);\nNode<Integer> h = new Node<>(-2);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   0    -13\n//     /       \\\n//    -1       -2\n\nhasPathSum(a, -10); // -> true",
        "Node<Integer> a = new Node<>(-1);\nNode<Integer> b = new Node<>(-6);\nNode<Integer> c = new Node<>(-5);\nNode<Integer> d = new Node<>(-3);\nNode<Integer> e = new Node<>(0);\nNode<Integer> f = new Node<>(-13);\nNode<Integer> g = new Node<>(-1);\nNode<Integer> h = new Node<>(-2);\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\ne.left = g;\nf.right = h;\n\n//        -1\n//      /   \\\n//    -6    -5\n//   /  \\     \\\n// -3   0    -13\n//     /       \\\n//    -1       -2\n\nhasPathSum(a, -5); // -> false",
        "Node<Integer> a = new Node<>(42);\n\n//        42\n\nhasPathSum(a, 42); // -> true",
        "Source.hasPathSum(a, 8) -> true",
        "Source.hasPathSum(a, 12) -> true",
        "Source.hasPathSum(a, 7) -> false",
        "Source.hasPathSum(a, 16) -> false",
        "Source.hasPathSum(a, 32) -> true",
        "Source.hasPathSum(a, -10) -> true",
        "Source.hasPathSum(a, -5) -> false",
        "Source.hasPathSum(a, 42) -> true"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first",
          "code": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static boolean hasPathSum(Node<Integer> root, int target) {\n    if (root == null) {\n      return false;\n    }\n\n    if (root.left == null && root.right == null && root.val == target) {\n      return true;\n    }\n    \n    return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = number of nodes | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "has path sum",
        "slug": "has-path-sum",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Check if a binary tree has a path that sums to the target.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static boolean hasPathSum(Node<Integer> root, int target) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static boolean hasPathSum(Node<Integer> root, int target) {\n    if (root == null) {\n      return false;\n    }\n\n    if (root.left == null && root.right == null && root.val == target) {\n      return true;\n    }\n    \n    return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::knapsack": {
      "statement": "Write a function knapsack that takes in a list of item values, a list of item weights, and a weight limit. The i-th item has a value of values[i] and a weight of weights[i]. Your job is to pick items to pack into your knapsack so that its total weight does not exceed the limit and the value of the items is maximized. You may either take an item once or not at all. You cannot take the same item multiple times. Return the maximum total value of items you can pack into the knapsack.",
      "examples": [
        "Source.knapsack(List.of(5, 4, 9), List.of(6, 1, 15), 20); // -> 13",
        "Source.knapsack(List.of(5, 1, 6), List.of(4, 1, 5), 20); // -> 12",
        "Source.knapsack(List.of(5, 1, 7, 3), List.of(4, 1, 5, 2), 8); // -> 11"
      ],
      "testCases": [
        "Source.knapsack(List.of(5, 4, 9), List.of(6, 1, 15), 20); // -> 13",
        "Source.knapsack(List.of(5, 1, 6), List.of(4, 1, 5), 20); // -> 12",
        "Source.knapsack(List.of(5, 1, 7, 3), List.of(4, 1, 5, 2), 8); // -> 11",
        "Source.knapsack(List.of(89, 45, 12, 50), List.of(40, 20, 10, 15), 50); // -> 107",
        "Source.knapsack(List.of(3, 5, 8, 7), List.of(2, 4, 8, 6), 15); // -> 16",
        "Source.knapsack(\n  List.of(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1), \n  List.of(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1), \n  100); // -> 42",
        "Source.knapsack(List.of(5, 4, 9), List.of(6, 1, 15), 20) -> 13",
        "Source.knapsack(List.of(5, 1, 6), List.of(4, 1, 5), 20) -> 12",
        "Source.knapsack(List.of(5, 1, 7, 3), List.of(4, 1, 5, 2), 8) -> 11",
        "Source.knapsack(List.of(89, 45, 12, 50), List.of(40, 20, 10, 15), 50) -> 107",
        "Source.knapsack(List.of(3, 5, 8, 7), List.of(2, 4, 8, 6), 15) -> 16",
        "Source.knapsack(List.of(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1), List.of(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1), 100) -> 42"
      ],
      "hints": [],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static double knapsack(List<Integer> values, List<Integer> weights, int weightLimit, int i, HashMap<List<Integer>, Double> memo) {\n    if (weightLimit < 0) {\n      return Double.NEGATIVE_INFINITY;\n    }\n\n    if (i == values.size()) {\n      return 0;\n    }\n\n    List<Integer> key = List.of(weightLimit, i);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    Double result = Math.max(\n      values.get(i) + knapsack(values, weights, weightLimit - weights.get(i), i + 1, memo),\n      knapsack(values, weights, weightLimit, i + 1, memo)\n    );\n    memo.put(key, result);\n    return result;\n  }\n  \n  public static int knapsack(List<Integer> values, List<Integer> weights, int weightLimit) {\n    return (int) knapsack(values, weights, weightLimit, 0, new HashMap<>());\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
          "complexity": "n = number of items | w = weight limit | Time: O(nw) | Space: O(nw)"
        }
      ],
      "meta": {
        "name": "knapsack",
        "slug": "knapsack",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Pack a knapsack with the most valuable items while staying under the weight limit.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int knapsack(List<Integer> values, List<Integer> weights, int weightLimit) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static double knapsack(List<Integer> values, List<Integer> weights, int weightLimit, int i, HashMap<List<Integer>, Double> memo) {\n    if (weightLimit < 0) {\n      return Double.NEGATIVE_INFINITY;\n    }\n\n    if (i == values.size()) {\n      return 0;\n    }\n\n    List<Integer> key = List.of(weightLimit, i);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    Double result = Math.max(\n      values.get(i) + knapsack(values, weights, weightLimit - weights.get(i), i + 1, memo),\n      knapsack(values, weights, weightLimit, i + 1, memo)\n    );\n    memo.put(key, result);\n    return result;\n  }\n  \n  public static int knapsack(List<Integer> values, List<Integer> weights, int weightLimit) {\n    return (int) knapsack(values, weights, weightLimit, 0, new HashMap<>());\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n"
      }
    },
    "mixed-recall::virus-spread": {
      "statement": "Oh no! There is a computer virus going around in our data center. The virus spreads to adjacent computers. Write a method, virusSpread, that takes in a grid. In the grid, 0's are empty spaces, 1's are clean computers, and 2's are infected computers. Every hour, the virus spreads from infected computers to immediately adjacent clean computers. The virus can only spread to adjacent computers that are up, down, left, or right. The method should return the number of hours it will take for all computers to be infected. If it is impossible for all computers to become infected, then return -1.",
      "examples": [
        "List<List<Integer>> grid = List.of(\n  List.of(1,1,1),\n  List.of(0,1,0),\n  List.of(0,1,2)\n);\nvirusSpread(grid); // -> 4",
        "List<List<Integer>> grid = List.of(\n  List.of(1,0,1),\n  List.of(0,1,0),\n  List.of(0,1,2)\n);\nvirusSpread(grid); // -> -1",
        "List<List<Integer>> grid = List.of(\n  List.of(0,0,0,0,1,1,2),\n  List.of(0,1,1,1,1,1,0),\n  List.of(0,2,0,0,0,0,0)\n);\nvirusSpread(grid); // -> 3"
      ],
      "testCases": [
        "List<List<Integer>> grid = List.of(\n  List.of(1,1,1),\n  List.of(0,1,0),\n  List.of(0,1,2)\n);\nvirusSpread(grid); // -> 4",
        "List<List<Integer>> grid = List.of(\n  List.of(1,0,1),\n  List.of(0,1,0),\n  List.of(0,1,2)\n);\nvirusSpread(grid); // -> -1",
        "List<List<Integer>> grid = List.of(\n  List.of(0,0,0,0,1,1,2),\n  List.of(0,1,1,1,1,1,0),\n  List.of(0,2,0,0,0,0,0)\n);\nvirusSpread(grid); // -> 3",
        "List<List<Integer>> grid = List.of(\n  List.of(0,0,0,0,1,1,2),\n  List.of(0,1,1,1,1,1,0),\n  List.of(0,2,0,0,0,0,0),\n  List.of(0,0,0,0,1,1,0)\n);\nvirusSpread(grid); // -> -1",
        "List<List<Integer>> grid = List.of(\n  List.of(2,1,1,1,1,0,0),\n  List.of(0,0,0,0,0,0,0),\n  List.of(0,0,0,0,1,0,0),\n  List.of(0,0,0,1,1,0,1),\n  List.of(0,0,0,2,2,0,1),\n  List.of(0,0,0,0,0,0,1),\n  List.of(2,1,1,1,1,1,1)\n);\nvirusSpread(grid); // -> 9",
        "Source.virusSpread(grid) -> 4",
        "Source.virusSpread(grid) -> -1",
        "Source.virusSpread(grid) -> 3",
        "Source.virusSpread(grid) -> 9"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "breadth first",
          "code": "import java.util.List;\nimport java.util.ArrayDeque;\nimport java.util.HashSet;\n\nclass Source {\n  public static int virusSpread(List<List<Integer>> grid) {\n    int cleanComputers = 0;\n    HashSet<List<Integer>> visited = new HashSet<>();\n    ArrayDeque<List<Integer>> queue = new ArrayDeque<>();\n\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        List<Integer> pos = List.of(r, c);\n        if (grid.get(r).get(c) == 1) {\n          cleanComputers += 1;\n        } else if (grid.get(r).get(c) == 2) {\n          visited.add(pos);\n          queue.add(List.of(r, c, 0));\n        }\n      } \n    }\n\n    List<List<Integer>> deltas = List.of(\n      List.of(1, 0),\n      List.of(-1, 0),\n      List.of(0, 1),\n      List.of(0, -1)\n    );\n    int maxTime = 0;\n    while (queue.size() > 0) {\n      List<Integer> entry = queue.remove();\n      int r = entry.get(0);\n      int c = entry.get(1);\n      int t = entry.get(2); \n      maxTime = t;\n      for (List<Integer> delta : deltas) {\n        int deltaRow = delta.get(0);\n        int deltaCol = delta.get(1);\n        int newRow = r + deltaRow;\n        int newCol = c + deltaCol;\n        List<Integer> newPos = List.of(newRow, newCol);\n        boolean rowInbounds = 0 <= newRow && newRow < grid.size();\n        boolean colInbounds = 0 <= newCol && newCol < grid.get(0).size();\n        if (rowInbounds && colInbounds && grid.get(newRow).get(newCol) != 0 && !visited.contains(newPos)) {\n          cleanComputers -= 1;\n          visited.add(newPos);\n          queue.add(List.of(newRow, newCol, t + 1));\n        }\n      }\n    }\n\n    if (cleanComputers > 0) {\n      return -1;\n    } else {\n      return maxTime;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "r = number of rows | c = number of columns | Time: O(rc) | Space: O(rc)"
        }
      ],
      "meta": {
        "name": "virus spread",
        "slug": "virus-spread",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Find how long it will take for a computer virus to spread.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int virusSpread(List<List<Integer>> grid) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n\n",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayDeque;\nimport java.util.HashSet;\n\nclass Source {\n  public static int virusSpread(List<List<Integer>> grid) {\n    int cleanComputers = 0;\n    HashSet<List<Integer>> visited = new HashSet<>();\n    ArrayDeque<List<Integer>> queue = new ArrayDeque<>();\n\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        List<Integer> pos = List.of(r, c);\n        if (grid.get(r).get(c) == 1) {\n          cleanComputers += 1;\n        } else if (grid.get(r).get(c) == 2) {\n          visited.add(pos);\n          queue.add(List.of(r, c, 0));\n        }\n      } \n    }\n\n    List<List<Integer>> deltas = List.of(\n      List.of(1, 0),\n      List.of(-1, 0),\n      List.of(0, 1),\n      List.of(0, -1)\n    );\n    int maxTime = 0;\n    while (queue.size() > 0) {\n      List<Integer> entry = queue.remove();\n      int r = entry.get(0);\n      int c = entry.get(1);\n      int t = entry.get(2); \n      maxTime = t;\n      for (List<Integer> delta : deltas) {\n        int deltaRow = delta.get(0);\n        int deltaCol = delta.get(1);\n        int newRow = r + deltaRow;\n        int newCol = c + deltaCol;\n        List<Integer> newPos = List.of(newRow, newCol);\n        boolean rowInbounds = 0 <= newRow && newRow < grid.size();\n        boolean colInbounds = 0 <= newCol && newCol < grid.get(0).size();\n        if (rowInbounds && colInbounds && grid.get(newRow).get(newCol) != 0 && !visited.contains(newPos)) {\n          cleanComputers -= 1;\n          visited.add(newPos);\n          queue.add(List.of(newRow, newCol, t + 1));\n        }\n      }\n    }\n\n    if (cleanComputers > 0) {\n      return -1;\n    } else {\n      return maxTime;\n    }\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::positioning-plants": {
      "statement": "You've been hired to plant flowers in a garden with n different positions. There are m different flower types. The prices of flowers types vary depending on which position they are planted. Your bosses are picky, they tell you to *never plant two of the same flower type right next to each other*. What is the minimum cost we need to plant a flower in each position of the garden? Write a method, positioningPlants, that takes in a 2D list with dimensions n * m. Each row of the list represents the costs of the flower types at that position. This means that costs\\[i\\]\\[j\\] represents the cost of planting flower type j at position i. For example: ```plaintext Given these costs, costs = [ [4, 3, 7], [6, 1, 9], [2, 5, 3] ] The costs of plants at position 1 are $6, $1, and $9. The cost of planting flower type 0 at position 1 is $6. The cost of planting flower type 2 at position 1 is $9. ``` The method should return the minimum cost of planting flowers without placing the same flower type in adjacent positions.",
      "examples": [
        "Given these costs,\n\ncosts = [\n  [4, 3, 7],\n  [6, 1, 9],\n  [2, 5, 3]\n]\n\nThe costs of plants at position 1 are $6, $1, and $9.\nThe cost of planting flower type 0 at position 1 is $6.\nThe cost of planting flower type 2 at position 1 is $9.",
        "Source.positioningPlants(List.of(\n  List.of(4, 3, 7),\n  List.of(6, 1, 9),\n  List.of(2, 5, 3)\n)); // -> 7, by doing 4 + 1 + 2.",
        "Source.positioningPlants(List.of(\n  List.of(12, 14, 5),\n  List.of(6, 3, 2)\n)); // -> 8"
      ],
      "testCases": [
        "Given these costs,\n\ncosts = [\n  [4, 3, 7],\n  [6, 1, 9],\n  [2, 5, 3]\n]\n\nThe costs of plants at position 1 are $6, $1, and $9.\nThe cost of planting flower type 0 at position 1 is $6.\nThe cost of planting flower type 2 at position 1 is $9.",
        "Source.positioningPlants(List.of(\n  List.of(4, 3, 7),\n  List.of(6, 1, 9),\n  List.of(2, 5, 3)\n)); // -> 7, by doing 4 + 1 + 2.",
        "Source.positioningPlants(List.of(\n  List.of(12, 14, 5),\n  List.of(6, 3, 2)\n)); // -> 8",
        "Source.positioningPlants(List.of(\n  List.of(12, 14, 5),\n  List.of(6, 3, 2),\n  List.of(4, 2, 7),\n  List.of(4, 8, 4),\n  List.of(1, 13, 5),\n  List.of(8, 6, 7)\n)); // -> 23",
        "Source.positioningPlants(List.of(\n  List.of(12, 14, 5, 13),\n  List.of(6, 3, 20, 3),\n  List.of(24, 12, 7, 2),\n  List.of(4, 80, 45, 3),\n  List.of(104, 13, 5, 14),\n  List.of(38, 19, 7, 6),\n  List.of(12, 2, 1, 2)\n)); // -> 26",
        "Source.positioningPlants(List.of(\n  List.of(12, 14, 50, 12),\n  List.of(6, 3, 20, 3),\n  List.of(24, 12, 7, 2),\n  List.of(4, 80, 45, 3),\n  List.of(104, 13, 5, 14),\n  List.of(38, 19, 7, 6),\n  List.of(1, 20, 1, 2),\n  List.of(13, 12, 5, 13),\n  List.of(60, 32, 20, 3),\n  List.of(24, 12, 7, 2),\n  List.of(4, 80, 44, 1),\n  List.of(104, 13, 5, 14),\n  List.of(38, 19, 76, 6),\n  List.of(12, 23, 12, 20),\n  List.of(1, 3, 1, 1),\n  List.of(1, 2, 12, 5)\n)); // -> 74",
        "Source.positioningPlants(List.of(\n  List.of(12, 14, 50, 12, 13),\n  List.of(6, 3, 20, 3, 16),\n  List.of(24, 12, 7, 2, 74),\n  List.of(4, 80, 45, 3, 100),\n  List.of(104, 13, 5, 14, 3),\n  List.of(38, 19, 7, 6, 24),\n  List.of(1, 20, 1, 2, 31),\n  List.of(13, 12, 5, 13, 9),\n  List.of(60, 32, 20, 3, 2),\n  List.of(24, 12, 7, 2, 42),\n  List.of(4, 80, 44, 1, 23),\n  List.of(104, 13, 5, 14, 28),\n  List.of(38, 19, 76, 6, 12),\n  List.of(12, 23, 12, 20, 13),\n  List.of(1, 3, 1, 1, 50),\n  List.of(1, 2, 12, 5, 36),\n  List.of(6, 2, 3, 12, 20),\n  List.of(4, 6, 4, 11, 15)\n)); // -> 75",
        "Source.positioningPlants(List.of( List.of(4, 3, 7), List.of(6, 1, 9), List.of(2, 5, 3) )) -> 7",
        "Source.positioningPlants(List.of( List.of(12, 14, 5), List.of(6, 3, 2) )) -> 8",
        "Source.positioningPlants(List.of( List.of(12, 14, 5), List.of(6, 3, 2), List.of(4, 2, 7), List.of(4, 8, 4), List.of(1, 13, 5), List.of(8, 6, 7) )) -> 23",
        "Source.positioningPlants(List.of( List.of(12, 14, 5, 13), List.of(6, 3, 20, 3), List.of(24, 12, 7, 2), List.of(4, 80, 45, 3), List.of(104, 13, 5, 14), List.of(38, 19, 7, 6), List.of(12, 2, 1, 2) )) -> 26",
        "Source.positioningPlants(List.of( List.of(12, 14, 50, 12), List.of(6, 3, 20, 3), List.of(24, 12, 7, 2), List.of(4, 80, 45, 3), List.of(104, 13, 5, 14), List.of(38, 19, 7, 6), List.of(1, 20, 1, 2), List.of(13, 12, 5, 13), List.of(60, 32, 20, 3), List.of(24, 12, 7, 2), List.of(4, 80, 44, 1), List.of(104, 13, 5, 14), List.of(38, 19, 76, 6), List.of(12, 23, 12, 20), List.of(1, 3, 1, 1), List.of(1, 2, 12, 5) )) -> 74",
        "Source.positioningPlants(List.of( List.of(12, 14, 50, 12, 13), List.of(6, 3, 20, 3, 16), List.of(24, 12, 7, 2, 74), List.of(4, 80, 45, 3, 100), List.of(104, 13, 5, 14, 3), List.of(38, 19, 7, 6, 24), List.of(1, 20, 1, 2, 31), List.of(13, 12, 5, 13, 9), List.of(60, 32, 20, 3, 2), List.of(24, 12, 7, 2, 42), List.of(4, 80, 44, 1, 23), List.of(104, 13, 5, 14, 28), List.of(38, 19, 76, 6, 12), List.of(12, 23, 12, 20, 13), List.of(1, 3, 1, 1, 50), List.of(1, 2, 12, 5, 36), List.of(6, 2, 3, 12, 20), List.of(4, 6, 4, 11, 15) )) -> 75"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int positioningPlants(List<List<Integer>> costs) {\n    return positioningPlants(costs, 0, -1, new HashMap<>());\n  }\n  \n  public static int positioningPlants(List<List<Integer>> costs, int pos, int prevPlantIdx, HashMap<List<Integer>, Integer> memo) {\n    List<Integer> key = List.of(pos, prevPlantIdx);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    if (pos == costs.size()) {\n      return 0;\n    }\n    \n    int minCost = -1;\n    for (int plantIdx = 0; plantIdx < costs.get(pos).size(); plantIdx += 1) {\n      if (plantIdx != prevPlantIdx) {\n        int candidateCost = costs.get(pos).get(plantIdx) + positioningPlants(costs, pos + 1, plantIdx, memo);\n        if (minCost == -1 || candidateCost < minCost) {\n          minCost = candidateCost;\n        }\n      }\n    }\n    memo.put(key, minCost);\n    return minCost;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = # of garden positions (rows) | m = # of plant types (columns) | Time: O(nm) | Space: O(nm)"
        }
      ],
      "meta": {
        "name": "positioning plants",
        "slug": "positioning-plants",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Calculate the minimum cost of planting flowers of different prices.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int positioningPlants(List<List<Integer>> costs) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  public static int positioningPlants(List<List<Integer>> costs) {\n    return positioningPlants(costs, 0, -1, new HashMap<>());\n  }\n  \n  public static int positioningPlants(List<List<Integer>> costs, int pos, int prevPlantIdx, HashMap<List<Integer>, Integer> memo) {\n    List<Integer> key = List.of(pos, prevPlantIdx);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    if (pos == costs.size()) {\n      return 0;\n    }\n    \n    int minCost = -1;\n    for (int plantIdx = 0; plantIdx < costs.get(pos).size(); plantIdx += 1) {\n      if (plantIdx != prevPlantIdx) {\n        int candidateCost = costs.get(pos).get(plantIdx) + positioningPlants(costs, pos + 1, plantIdx, memo);\n        if (minCost == -1 || candidateCost < minCost) {\n          minCost = candidateCost;\n        }\n      }\n    }\n    memo.put(key, minCost);\n    return minCost;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::flatten-tree": {
      "statement": "# flatten tree Write a method, flattenTree, that takes in the root of a binary tree. The method should modify the binary tree by flattening it into a \"linked-list\" using the same tree nodes. In the resulting \"linked-list\", left pointers should be null and right pointers should point to the next node in the list. The order of the nodes in the resulting \"linked-list\" should follow pre-order. Your method should return the root/head of the list. You can assume the tree contains at least one node. ```plaintext For example, this tree: a / \\ b c / \\ \\ d e f Should be flattened into: a \\ b \\ d \\ e \\ c \\ f ```",
      "examples": [
        "For example, this tree:\n \n        a\n      /   \\\n    b      c\n   / \\      \\\n  d   e      f\n\nShould be flattened into:\n\n      a\n       \\\n        b\n         \\\n          d\n           \\\n            e\n             \\\n              c\n               \\\n                f",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nflattenTree(a); // ->\n//      a\n//       \\\n//        b\n//         \\\n//          d\n//           \\\n//            e\n//            \\\n//             c\n//              \\\n//               f",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> e = new Node<>(\"e\");\n\na.left = b;\na.right = c;\nb.right = e;\n\n//      a\n//    /   \\\n//   b     c\n//   \\     \n//    e     \n\nflattenTree(a); // ->\n//      a\n//       \\\n//        b\n//         \\\n//          e\n//           \\\n//            c"
      ],
      "testCases": [
        "For example, this tree:\n \n        a\n      /   \\\n    b      c\n   / \\      \\\n  d   e      f\n\nShould be flattened into:\n\n      a\n       \\\n        b\n         \\\n          d\n           \\\n            e\n             \\\n              c\n               \\\n                f",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\n\na.left = b;\na.right = c;\nb.left = d;\nb.right = e;\nc.right = f;\n\n//      a\n//    /   \\\n//   b     c\n//  / \\     \\\n// d   e     f\n\nflattenTree(a); // ->\n//      a\n//       \\\n//        b\n//         \\\n//          d\n//           \\\n//            e\n//            \\\n//             c\n//              \\\n//               f",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> e = new Node<>(\"e\");\n\na.left = b;\na.right = c;\nb.right = e;\n\n//      a\n//    /   \\\n//   b     c\n//   \\     \n//    e     \n\nflattenTree(a); // ->\n//      a\n//       \\\n//        b\n//         \\\n//          e\n//           \\\n//            c",
        "Node<String> a = new Node<>(\"a\");\nNode<String> b = new Node<>(\"b\");\nNode<String> c = new Node<>(\"c\");\nNode<String> d = new Node<>(\"d\");\nNode<String> e = new Node<>(\"e\");\nNode<String> f = new Node<>(\"f\");\nNode<String> g = new Node<>(\"g\");\n\na.left = b;\na.right = c;\nb.left = d;\nd.left = e;\ne.left = f;\nf.left = g;\n\n//             a\n//           /   \\\n//          b     c\n//         /     \n//        d     \n//       / \n//      e\n//     /\n//    f\n//   /\n//  g\n\nflattenTree(a); // ->\n//      a\n//       \\\n//        b\n//         \\\n//          d\n//           \\\n//            e\n//            \\\n//             f\n//             \\\n//              g\n//              \\\n//               c"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "depth first traversal",
          "code": "import java.util.Stack;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> flattenTree(Node<String> root) {\n    Stack<Node<String>> stack = new Stack<>(); \n    stack.push(root);\n\n    Node<String> prev = null;\n    while (!stack.isEmpty()) {\n      Node<String> current = stack.pop();\n\n      if (prev != null) {\n        prev.right = current;\n      }\n      prev = current;\n\n      if (current.right != null) {\n        stack.push(current.right);\n      }\n\n      if (current.left != null) {\n        stack.push(current.left);\n      }\n\n      current.left = null;\n      current.right = null;\n    }\n\n    return root;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = size of tree | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "flatten tree",
        "slug": "flatten-tree",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Flatten a binary tree into a 'linked-list'.",
        "stub": "class Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> flattenTree(Node<String> root) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.Stack;\n\nclass Node<T> {\n  T val;\n  Node<T> left;\n  Node<T> right;\n  \n  public Node(T val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass Source {\n  public static Node<String> flattenTree(Node<String> root) {\n    Stack<Node<String>> stack = new Stack<>(); \n    stack.push(root);\n\n    Node<String> prev = null;\n    while (!stack.isEmpty()) {\n      Node<String> current = stack.pop();\n\n      if (prev != null) {\n        prev.right = current;\n      }\n      prev = current;\n\n      if (current.right != null) {\n        stack.push(current.right);\n      }\n\n      if (current.left != null) {\n        stack.push(current.left);\n      }\n\n      current.left = null;\n      current.right = null;\n    }\n\n    return root;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::best-house-build": {
      "statement": "You are building a new house in the neighborhood and want to choose a location so that the house is as close as possible to all other houses. Write a method, bestHouseBuild, that takes in a grid. In the grid, 0's are empty spaces, 1's are houses, and 2's are trees. Your job is to find an empty space on the grid that has the shortest total travel distance to all houses. Your method should return a number that corresponds to this shortest total travel distance. If it is not possible to choose a location that is that is reachable by all houses, then return -1. When calculating the distance, you can only move up, down, left, or right. You may not pass through houses or trees.",
      "examples": [
        "List.of(\n  List.of(1,0,0,0,1),\n  List.of(0,0,0,0,0),\n  List.of(0,0,1,0,0)\n);\nbestHouseBuild(grid); // -> 6",
        "List.of(\n  List.of(1,0,2,0,1),\n  List.of(0,0,0,0,0),\n  List.of(0,0,1,0,0)\n);\nbestHouseBuild(grid); // -> 7",
        "List.of(\n  List.of(0,0,0,1,0,0,0,0),\n  List.of(0,1,0,0,0,0,0,1),\n  List.of(0,0,0,1,0,0,0,0),\n  List.of(0,0,0,0,0,0,0,0),\n  List.of(0,0,0,0,0,0,0,0)\n);\nbestHouseBuild(grid); // -> 8"
      ],
      "testCases": [
        "List.of(\n  List.of(1,0,0,0,1),\n  List.of(0,0,0,0,0),\n  List.of(0,0,1,0,0)\n);\nbestHouseBuild(grid); // -> 6",
        "List.of(\n  List.of(1,0,2,0,1),\n  List.of(0,0,0,0,0),\n  List.of(0,0,1,0,0)\n);\nbestHouseBuild(grid); // -> 7",
        "List.of(\n  List.of(0,0,0,1,0,0,0,0),\n  List.of(0,1,0,0,0,0,0,1),\n  List.of(0,0,0,1,0,0,0,0),\n  List.of(0,0,0,0,0,0,0,0),\n  List.of(0,0,0,0,0,0,0,0)\n);\nbestHouseBuild(grid); // -> 8",
        "List.of(\n  List.of(0,0,0,1,0,0,0,0),\n  List.of(0,1,0,0,0,0,0,0),\n  List.of(0,0,0,1,0,0,0,0),\n  List.of(0,0,0,0,0,0,0,0),\n  List.of(0,0,0,0,0,0,0,1)\n);\nbestHouseBuild(grid); // -> 11",
        "List.of(\n  List.of(0,0,0,1,0,0,0,0),\n  List.of(0,1,0,0,0,2,0,0),\n  List.of(0,0,0,1,0,2,0,0),\n  List.of(0,0,0,0,0,2,0,0),\n  List.of(0,0,0,0,0,2,0,1)\n);\nbestHouseBuild(grid); // -> 13",
        "List.of(\n  List.of(0,0,0,1,0,0,0,0),\n  List.of(0,1,0,0,0,0,0,0),\n  List.of(0,0,0,1,0,2,2,2),\n  List.of(0,0,0,0,0,2,0,0),\n  List.of(0,0,0,0,0,2,0,1)\n);\nbestHouseBuild(grid); // -> -1",
        "List.of(\n  List.of(1,0)\n);\nbestHouseBuild(grid); // -> 1",
        "Source.bestHouseBuild(grid) -> 6",
        "Source.bestHouseBuild(grid) -> 7",
        "Source.bestHouseBuild(grid) -> 8",
        "Source.bestHouseBuild(grid) -> 11",
        "Source.bestHouseBuild(grid) -> 13",
        "Source.bestHouseBuild(grid) -> -1",
        "Source.bestHouseBuild(grid) -> 1"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "breadth first",
          "code": "import java.util.List;\nimport java.util.HashMap;\nimport java.util.HashSet;\nimport java.util.ArrayDeque;\n\nclass Source {\n  public static int bestHouseBuild(List<List<Integer>> grid) {\n    ArrayDeque<List<List<Integer>>> queue = new ArrayDeque<>();\n    HashMap<List<Integer>, Integer> totalDistance = new HashMap<>();\n    HashMap<List<Integer>, HashSet<List<Integer>>> visited = new HashMap<>();\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        List<Integer> pos = List.of(r, c);\n        totalDistance.put(pos, 0);\n        visited.put(pos, new HashSet<>());\n        if (grid.get(r).get(c) == 1) {\n          queue.add(List.of(\n            List.of(r, c, 0), \n            List.of(r, c)\n          ));\n          visited.get(pos).add(pos);\n        }\n      }\n    }\n\n    int numHouses = queue.size();\n\n    List<List<Integer>> deltas = List.of(\n      List.of(1, 0),\n      List.of(-1, 0),\n      List.of(0, 1),\n      List.of(0, -1)\n    );\n    while (queue.size() > 0) {\n      List<List<Integer>> entry = queue.remove();\n      List<Integer> current = entry.get(0);\n      List<Integer> src = entry.get(1);\n      int r = current.get(0);\n      int c = current.get(1);\n      int dist = current.get(2);\n      for (List<Integer> delta : deltas) {\n        int deltaRow = delta.get(0);\n        int deltaCol = delta.get(1);\n        int newRow = r + deltaRow;\n        int newCol = c + deltaCol;\n        List<Integer> newPos = List.of(newRow, newCol);\n        boolean rowInbounds = 0 <= newRow && newRow < grid.size();\n        boolean colInbounds = 0 <= newCol && newCol < grid.get(0).size();\n        if (rowInbounds && colInbounds && grid.get(newRow).get(newCol) == 0 && !visited.get(newPos).contains(src)) {\n          visited.get(newPos).add(src);\n          queue.add(List.of(\n            List.of(newRow, newCol, dist + 1), \n            src\n          ));\n          totalDistance.put(newPos, totalDistance.get(newPos) + dist + 1);\n        }\n      } \n    }\n\n    int minDistance = -1;\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        List<Integer> pos = List.of(r, c);\n        if (visited.get(pos).size() == numHouses && totalDistance.get(pos) > 0 && (totalDistance.get(pos) < minDistance || minDistance == -1)) {\n          minDistance = totalDistance.get(pos);\n        }\n      }\n    }\n\n    return minDistance;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "r = number of rows | c = number of columns | Time: O(r^2 * c^2) | Space: O(r^2 * c^2)"
        }
      ],
      "meta": {
        "name": "best house build",
        "slug": "best-house-build",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Find the best location to build a house so it is close to all other houses.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int bestHouseBuild(List<List<Integer>> grid) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\nimport java.util.HashSet;\nimport java.util.ArrayDeque;\n\nclass Source {\n  public static int bestHouseBuild(List<List<Integer>> grid) {\n    ArrayDeque<List<List<Integer>>> queue = new ArrayDeque<>();\n    HashMap<List<Integer>, Integer> totalDistance = new HashMap<>();\n    HashMap<List<Integer>, HashSet<List<Integer>>> visited = new HashMap<>();\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        List<Integer> pos = List.of(r, c);\n        totalDistance.put(pos, 0);\n        visited.put(pos, new HashSet<>());\n        if (grid.get(r).get(c) == 1) {\n          queue.add(List.of(\n            List.of(r, c, 0), \n            List.of(r, c)\n          ));\n          visited.get(pos).add(pos);\n        }\n      }\n    }\n\n    int numHouses = queue.size();\n\n    List<List<Integer>> deltas = List.of(\n      List.of(1, 0),\n      List.of(-1, 0),\n      List.of(0, 1),\n      List.of(0, -1)\n    );\n    while (queue.size() > 0) {\n      List<List<Integer>> entry = queue.remove();\n      List<Integer> current = entry.get(0);\n      List<Integer> src = entry.get(1);\n      int r = current.get(0);\n      int c = current.get(1);\n      int dist = current.get(2);\n      for (List<Integer> delta : deltas) {\n        int deltaRow = delta.get(0);\n        int deltaCol = delta.get(1);\n        int newRow = r + deltaRow;\n        int newCol = c + deltaCol;\n        List<Integer> newPos = List.of(newRow, newCol);\n        boolean rowInbounds = 0 <= newRow && newRow < grid.size();\n        boolean colInbounds = 0 <= newCol && newCol < grid.get(0).size();\n        if (rowInbounds && colInbounds && grid.get(newRow).get(newCol) == 0 && !visited.get(newPos).contains(src)) {\n          visited.get(newPos).add(src);\n          queue.add(List.of(\n            List.of(newRow, newCol, dist + 1), \n            src\n          ));\n          totalDistance.put(newPos, totalDistance.get(newPos) + dist + 1);\n        }\n      } \n    }\n\n    int minDistance = -1;\n    for (int r = 0; r < grid.size(); r += 1) {\n      for (int c = 0; c < grid.get(0).size(); c += 1) {\n        List<Integer> pos = List.of(r, c);\n        if (visited.get(pos).size() == numHouses && totalDistance.get(pos) > 0 && (totalDistance.get(pos) < minDistance || minDistance == -1)) {\n          minDistance = totalDistance.get(pos);\n        }\n      }\n    }\n\n    return minDistance;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::breaking-boundaries": {
      "statement": "Write a method, breakingBoundaries, that takes in 5 arguments: a number of rows (m), a number of columns (n), a number of moves (k), a starting row (r), and a starting column (c). Say you were situated in a grid with dimensions m * n. If you had to start at position (r,c), in how many different ways could you move out of bounds if you could take at most k moves. A single move is moving one space up, down, left, or right. During a path you may revisit a position. For example: ```plaintext Given m, n, k, r, c: 3, 4, 2, 0, 0 This input asks us to count the numbers of ways to move out of bounds in a 3 by 4 grid, starting at position (0, 0) if we could take at most 2 moves. The answer is 4 because of these 4 distinct ways: 1. left 2. up 3. right, up 4. down, left ``` The method should return a number representing how many ways you can move out of bounds.",
      "examples": [
        "Given m, n, k, r, c:\n\n3, 4, 2, 0, 0\n\nThis input asks us to count the numbers of ways\nto move out of bounds in a 3 by 4 grid, starting at\nposition (0, 0) if we could take at most 2 moves.\n\nThe answer is 4 because of these 4 distinct ways:\n 1. left\n 2. up\n 3. right, up\n 4. down, left",
        "Source.breakingBoundaries(3, 4, 2, 0, 0); // -> 4",
        "Source.breakingBoundaries(2, 2, 2, 1, 1); // -> 6"
      ],
      "testCases": [
        "Given m, n, k, r, c:\n\n3, 4, 2, 0, 0\n\nThis input asks us to count the numbers of ways\nto move out of bounds in a 3 by 4 grid, starting at\nposition (0, 0) if we could take at most 2 moves.\n\nThe answer is 4 because of these 4 distinct ways:\n 1. left\n 2. up\n 3. right, up\n 4. down, left",
        "Source.breakingBoundaries(3, 4, 2, 0, 0); // -> 4",
        "Source.breakingBoundaries(2, 2, 2, 1, 1); // -> 6",
        "Source.breakingBoundaries(3, 4, 3, 0, 0); // -> 11",
        "Source.breakingBoundaries(4, 4, 5, 2, 1); // -> 160",
        "Source.breakingBoundaries(5, 6, 9, 2, 5); // -> 11635",
        "Source.breakingBoundaries(6, 6, 12, 3, 4); // -> 871065",
        "Source.breakingBoundaries(6, 6, 15, 3, 4); // -> 40787896",
        "Source.breakingBoundaries(6, 8, 16, 2, 1); // -> 137495089",
        "Source.breakingBoundaries(3, 4, 2, 0, 0) -> 4",
        "Source.breakingBoundaries(2, 2, 2, 1, 1) -> 6",
        "Source.breakingBoundaries(3, 4, 3, 0, 0) -> 11",
        "Source.breakingBoundaries(4, 4, 5, 2, 1) -> 160",
        "Source.breakingBoundaries(5, 6, 9, 2, 5) -> 11635",
        "Source.breakingBoundaries(6, 6, 12, 3, 4) -> 871065",
        "Source.breakingBoundaries(6, 6, 15, 3, 4) -> 40787896",
        "Source.breakingBoundaries(6, 8, 16, 2, 1) -> 137495089"
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "dynamic programming with memoization",
          "code": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  \n  public static int breakingBoundaries(int m, int n, int k, int r, int c) {\n    return breakingBoundaries(m, n, k, r, c, new HashMap<>());\n  }\n  \n  public static int breakingBoundaries(int m, int n, int k, int r, int c, HashMap<List<Integer>, Integer> memo) {\n    List<Integer> key = List.of(k, r, c);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    if (k == -1) {\n      return 0;\n    }\n    \n    if (r < 0 || r >= m || c < 0 || c >= n) {\n      return 1;\n    }\n    \n    int answer = breakingBoundaries(m, n, k - 1, r + 1, c, memo) \n      + breakingBoundaries(m, n, k - 1, r - 1, c, memo)\n      + breakingBoundaries(m, n, k - 1, r, c + 1, memo)\n      + breakingBoundaries(m, n, k - 1, r, c - 1, memo);\n    memo.put(key, answer);\n    return answer;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "breakingBoundaries(m, n, k - 1, r - 1, c, memo) | breakingBoundaries(m, n, k - 1, r, c + 1, memo) | breakingBoundaries(m, n, k - 1, r, c - 1, memo); | m = # rows | n = # columns | k = # moves | Time: O(mnk) | Space: O(mnk)"
        }
      ],
      "meta": {
        "name": "breaking boundaries",
        "slug": "breaking-boundaries",
        "module": "Mixed Recall",
        "premium": true,
        "verbose": "Count the numbers of ways possible to move out of bounds in a grid.",
        "stub": "import java.util.List;\n\nclass Source {\n  public static int breakingBoundaries(int m, int n, int k, int r, int c) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}\n",
        "solutionCode": "import java.util.List;\nimport java.util.HashMap;\n\nclass Source {\n  \n  public static int breakingBoundaries(int m, int n, int k, int r, int c) {\n    return breakingBoundaries(m, n, k, r, c, new HashMap<>());\n  }\n  \n  public static int breakingBoundaries(int m, int n, int k, int r, int c, HashMap<List<Integer>, Integer> memo) {\n    List<Integer> key = List.of(k, r, c);\n    if (memo.containsKey(key)) {\n      return memo.get(key);\n    }\n    \n    if (k == -1) {\n      return 0;\n    }\n    \n    if (r < 0 || r >= m || c < 0 || c >= n) {\n      return 1;\n    }\n    \n    int answer = breakingBoundaries(m, n, k - 1, r + 1, c, memo) \n      + breakingBoundaries(m, n, k - 1, r - 1, c, memo)\n      + breakingBoundaries(m, n, k - 1, r, c + 1, memo)\n      + breakingBoundaries(m, n, k - 1, r, c - 1, memo);\n    memo.put(key, answer);\n    return answer;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::token-replace": {
      "statement": "Write a method, tokenReplace, that takes in a map of tokens and a string. The method should return a new string where tokens are replaced. Tokens are enclosed in a pair of \"$\". You can assume that the input string is properly formatted and \"$\" is not used in the string except to enclose a token. Tokens should be replaced from left to right in the string (see test_05).",
      "examples": [
        "Map<String, String> tokens = Map.of(\n  \"$LOCATION$\", \"park\",\n  \"$ANIMAL$\", \"dog\"\n);\nSource.tokenReplace(\"Walk the $ANIMAL$ in the $LOCATION$!\", tokens);\n// -> \"Walk the dog in the park!\"",
        "Map<String, String> tokens = Map.of(\n  \"$ADJECTIVE$\", \"quick\",\n  \"$VERB$\", \"hopped\",\n  \"$DIRECTION$\", \"North\"\n);\nSource.tokenReplace(\"the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward\", tokens);\n// -> \"the quick fox hopped quickly Northward\"",
        "Map<String, String> tokens = Map.of(\n  \"$greeting$\", \"hey programmer\"\n);\nSource.tokenReplace(\"his greeting is always $greeting$.\", tokens);\n// -> \"his greeting is always hey programmer.\""
      ],
      "testCases": [
        "Map<String, String> tokens = Map.of(\n  \"$LOCATION$\", \"park\",\n  \"$ANIMAL$\", \"dog\"\n);\nSource.tokenReplace(\"Walk the $ANIMAL$ in the $LOCATION$!\", tokens);\n// -> \"Walk the dog in the park!\"",
        "Map<String, String> tokens = Map.of(\n  \"$ADJECTIVE$\", \"quick\",\n  \"$VERB$\", \"hopped\",\n  \"$DIRECTION$\", \"North\"\n);\nSource.tokenReplace(\"the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward\", tokens);\n// -> \"the quick fox hopped quickly Northward\"",
        "Map<String, String> tokens = Map.of(\n  \"$greeting$\", \"hey programmer\"\n);\nSource.tokenReplace(\"his greeting is always $greeting$.\", tokens);\n// -> \"his greeting is always hey programmer.\"",
        "Map<String, String> tokens = Map.of(\n  \"$A$\", \"lions\",\n  \"$B$\", \"tigers\",\n  \"$C$\", \"bears\"\n);\nSource.tokenReplace(\"$A$$B$$C$, oh my.\", tokens);\n// -> \"lionstigersbears, oh my.\"",
        "Map<String, String> tokens = Map.of(\n  \"$A$\", \"lions\",\n  \"$B$\", \"tigers\",\n  \"$C$\", \"bears\"\n);\nSource.tokenReplace(\"$B$\", tokens);\n// -> \"tigers\"",
        "Map<String, String> tokens = Map.of(\n  \"$second$\", \"beta\",\n  \"$first$\", \"alpha\",\n  \"$third$\", \"gamma\"\n);\nSource.tokenReplace(\"$first$second$third$\", tokens);\n// -> \"alphasecondgamma\"",
        "Source.tokenReplace(\"Walk the $ANIMAL$ in the $LOCATION$!\", tokens) -> \"Walk the dog in the park!\"",
        "Source.tokenReplace(\"the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward\", tokens) -> \"the quick fox hopped quickly Northward\"",
        "Source.tokenReplace(\"his greeting is always $greeting$.\", tokens) -> \"his greeting is always hey programmer.\"",
        "Source.tokenReplace(\"$A$$B$$C$, oh my.\", tokens) -> \"lionstigersbears, oh my.\"",
        "Source.tokenReplace(\"$B$\", tokens) -> \"tigers\"",
        "Source.tokenReplace(\"$first$second$third$\", tokens) -> \"alphasecondgamma\""
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using two pointers",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\n\nclass Source {\n  public static String tokenReplace(String s, Map<String, String> tokens) {\n    List<String> output = new ArrayList<>();\n    int i = 0;\n    int j = 1;\n    while (i < s.length()) {\n      if (s.charAt(i) != '$') {\n        output.add(Character.toString(s.charAt(i)));\n        i += 1;\n        j = i + 1;\n      } else if (s.charAt(j) != '$') {\n        j += 1;\n      } else {\n        String key = s.substring(i, j + 1);\n        output.add(tokens.get(key));\n        i = j + 1;\n        j = i + 1;\n      }\n    }\n    return String.join(\"\", output);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of string | Time: O(n) | Space: O(n)"
        }
      ],
      "meta": {
        "name": "token replace",
        "slug": "token-replace",
        "module": "Mixed Recall",
        "premium": false,
        "verbose": "Replace tokens within a string.",
        "stub": "import java.util.List;\nimport java.util.Map;\n\nclass Source {\n  public static String tokenReplace(String s, Map<String, String> tokens) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\n\nclass Source {\n  public static String tokenReplace(String s, Map<String, String> tokens) {\n    List<String> output = new ArrayList<>();\n    int i = 0;\n    int j = 1;\n    while (i < s.length()) {\n      if (s.charAt(i) != '$') {\n        output.add(Character.toString(s.charAt(i)));\n        i += 1;\n        j = i + 1;\n      } else if (s.charAt(j) != '$') {\n        j += 1;\n      } else {\n        String key = s.substring(i, j + 1);\n        output.add(tokens.get(key));\n        i = j + 1;\n        j = i + 1;\n      }\n    }\n    return String.join(\"\", output);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    },
    "mixed-recall::token-transform": {
      "statement": "Write a method, tokenTransform, that takes in an map of tokens and a string. In the map, the replacement values for a token may reference other tokens. The method should return a new string where tokens are replaced with their fully evaluated string values. Tokens are enclosed in a pair of \"$\". You can assume that the input string is properly formatted and \"$\" is not used in the string except to enclose a token. You may assume that there are no circular token dependencies.",
      "examples": [
        "Map<String, String> tokens = Map.of(\n  \"$LOCATION$\", \"$ANIMAL$ park\",\n  \"$ANIMAL$\", \"dog\"\n);\nSource.tokenTransform(\"Walk the $ANIMAL$ in the $LOCATION$!\", tokens);\n// -> \"Walk the dog in the dog park!\"",
        "Map<String, String> tokens = Map.of(\n  \"$ADJECTIVE_1$\", \"quick\",\n  \"$ADJECTIVE_2$\", \"eager\",\n  \"$ADVERBS$\", \"$ADJECTIVE_1$ly and $ADJECTIVE_2$ly\",\n  \"$VERB$\", \"hopped $DIRECTION$\",\n  \"$DIRECTION$\", \"North\"\n);\nSource.tokenTransform(\"the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward\", tokens);\n// -> \"the quick fox quickly and eagerly hopped Northward\"",
        "Map<String, String> tokens = Map.of(\n  \"$B$\", \"epicly $C$\",\n  \"$A$\", \"pretty $B$ problem $D$\",\n  \"$D$\", \"we have\",\n  \"$C$\", \"clever\"\n);\nSource.tokenTransform(\"What a $A$ here!\", tokens);\n// -> \"What a pretty epicly clever problem we have here!\""
      ],
      "testCases": [
        "Map<String, String> tokens = Map.of(\n  \"$LOCATION$\", \"$ANIMAL$ park\",\n  \"$ANIMAL$\", \"dog\"\n);\nSource.tokenTransform(\"Walk the $ANIMAL$ in the $LOCATION$!\", tokens);\n// -> \"Walk the dog in the dog park!\"",
        "Map<String, String> tokens = Map.of(\n  \"$ADJECTIVE_1$\", \"quick\",\n  \"$ADJECTIVE_2$\", \"eager\",\n  \"$ADVERBS$\", \"$ADJECTIVE_1$ly and $ADJECTIVE_2$ly\",\n  \"$VERB$\", \"hopped $DIRECTION$\",\n  \"$DIRECTION$\", \"North\"\n);\nSource.tokenTransform(\"the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward\", tokens);\n// -> \"the quick fox quickly and eagerly hopped Northward\"",
        "Map<String, String> tokens = Map.of(\n  \"$B$\", \"epicly $C$\",\n  \"$A$\", \"pretty $B$ problem $D$\",\n  \"$D$\", \"we have\",\n  \"$C$\", \"clever\"\n);\nSource.tokenTransform(\"What a $A$ here!\", tokens);\n// -> \"What a pretty epicly clever problem we have here!\"",
        "Map<String, String> tokens = Map.of(\n  \"$1$\", \"a$2$\",\n  \"$2$\", \"b$3$\",\n  \"$3$\", \"c$4$\",\n  \"$4$\", \"d$5$\",\n  \"$5$\", \"e$6$\",\n  \"$6$\", \"f!\"\n);\nSource.tokenTransform(\"$1$ $1$ $1$ $1$ $1$ $1$ $4$ $4$\", tokens);\n// -> \"abcdef! abcdef! abcdef! abcdef! abcdef! abcdef! def! def!\"",
        "Map<String, String> tokens = Map.of(\n  \"$0$\", \"$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$\",\n  \"$1$\", \"$2$$2$$2$$2$$2$$2$$2$$2$$2$\",\n  \"$2$\", \"$3$$3$$3$$3$$3$$3$$3$\",\n  \"$3$\", \"$4$$4$$4$$4$$4$$4$\",\n  \"$4$\", \"$5$$5$$5$$5$$5$\",\n  \"$5$\", \"$6$$6$$6$$6$\",\n  \"$6$\", \"$7$$7$$7$\",\n  \"$7$\", \"$8$$8$\",\n  \"$8$\", \"\"\n);\nSource.tokenTransform(\"z$0$z$0$z$0$z$0$z$0$z$0$z\", tokens);\n// -> \"zzzzzzz\"",
        "Source.tokenTransform(\"Walk the $ANIMAL$ in the $LOCATION$!\", tokens) -> \"Walk the dog in the dog park!\"",
        "Source.tokenTransform(\"the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward\", tokens) -> \"the quick fox quickly and eagerly hopped Northward\"",
        "Source.tokenTransform(\"What a $A$ here!\", tokens) -> \"What a pretty epicly clever problem we have here!\"",
        "Source.tokenTransform(\"$1$ $1$ $1$ $1$ $1$ $1$ $4$ $4$\", tokens) -> \"abcdef! abcdef! abcdef! abcdef! abcdef! abcdef! def! def!\"",
        "Source.tokenTransform(\"z$0$z$0$z$0$z$0$z$0$z$0$z\", tokens) -> \"zzzzzzz\""
      ],
      "hints": [
        "",
        "",
        ""
      ],
      "pseudocode": [],
      "solutions": [
        {
          "title": "using two pointers + recursion",
          "code": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\n\nclass Source {\n  public static String tokenTransform(String s, Map<String, String> tokens) {\n    List<String> output = new ArrayList<>();\n    int i = 0;\n    int j = 1;\n    while (i < s.length()) {\n      if (s.charAt(i) != '$') {\n        output.add(Character.toString(s.charAt(i)));\n        i += 1;\n        j = i + 1;\n      } else if (s.charAt(j) != '$') {\n        j += 1;\n      } else {\n        String key = s.substring(i, j + 1);\n        String evaluatedValue = tokenTransform(tokens.get(key), tokens);\n        output.add(evaluatedValue);\n        i = j + 1;\n        j = i + 1;\n      }\n    }\n    \n    return String.join(\"\", output);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
          "complexity": "n = length of longest string of value | m = # of unique tokens | Time: ~O(n^m) | Space: ~O(n^m)"
        }
      ],
      "meta": {
        "name": "token transform",
        "slug": "token-transform",
        "module": "Mixed Recall",
        "premium": false,
        "verbose": "Recursively transform tokens within a string.",
        "stub": "import java.util.List;\nimport java.util.Map;\n\nclass Source {\n  public static String tokenTransform(String s, Map<String, String> tokens) {\n    // todo\n    return;\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}",
        "solutionCode": "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\n\nclass Source {\n  public static String tokenTransform(String s, Map<String, String> tokens) {\n    List<String> output = new ArrayList<>();\n    int i = 0;\n    int j = 1;\n    while (i < s.length()) {\n      if (s.charAt(i) != '$') {\n        output.add(Character.toString(s.charAt(i)));\n        i += 1;\n        j = i + 1;\n      } else if (s.charAt(j) != '$') {\n        j += 1;\n      } else {\n        String key = s.substring(i, j + 1);\n        String evaluatedValue = tokenTransform(tokens.get(key), tokens);\n        output.add(evaluatedValue);\n        i = j + 1;\n        j = i + 1;\n      }\n    }\n    \n    return String.join(\"\", output);\n  }\n\n  public static void run() {\n    // this function behaves as `main()` for the 'run' command\n    // you may sandbox in this function , but should not remove it\n  }\n}"
      }
    }
  }
};
