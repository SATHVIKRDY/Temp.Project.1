import { Module } from "../types";

export const arraysModule: Module = {
  id: "arrays",
  title: "Arrays & Methods",
  description: "Create arrays, manipulate them with powerful built-in methods.",
  icon: "📚",
  topics: [
    {
      id: "creating-arrays",
      title: "Creating & Accessing Arrays",
      theory: `Arrays store ordered lists of values.

\`\`\`js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);     // "apple" (0-indexed)
console.log(fruits.length); // 3
fruits[1] = "blueberry";    // modify element
\`\`\`

Arrays can hold **mixed types**: \`[1, "hello", true, null]\``
    },
    {
      id: "add-remove",
      title: "Adding & Removing Elements",
      theory: `**End of array:**
\`\`\`js
let arr = [1, 2, 3];
arr.push(4);     // [1,2,3,4] — add to end
arr.pop();       // [1,2,3]   — remove from end
\`\`\`

**Start of array:**
\`\`\`js
arr.unshift(0);  // [0,1,2,3] — add to start
arr.shift();     // [1,2,3]   — remove from start
\`\`\`

**Middle:**
\`\`\`js
arr.splice(1, 1);       // remove 1 item at index 1
arr.splice(1, 0, "new"); // insert "new" at index 1
\`\`\``
    },
    {
      id: "array-methods",
      title: "map, filter, reduce",
      theory: `The big three array methods that return new arrays/values:

**map** — transform each element:
\`\`\`js
let nums = [1, 2, 3];
let doubled = nums.map(n => n * 2); // [2, 4, 6]
\`\`\`

**filter** — keep elements that pass a test:
\`\`\`js
let evens = nums.filter(n => n % 2 === 0); // [2]
\`\`\`

**reduce** — combine all into one value:
\`\`\`js
let sum = nums.reduce((acc, n) => acc + n, 0); // 6
\`\`\``
    },
    {
      id: "other-methods",
      title: "find, indexOf, includes, slice, spread",
      theory: `**find** — first element matching condition:
\`\`\`js
[1,2,3,4].find(n => n > 2); // 3
\`\`\`

**includes** — check if value exists:
\`\`\`js
[1,2,3].includes(2); // true
\`\`\`

**slice** — copy part of array (doesn't modify original):
\`\`\`js
[1,2,3,4].slice(1, 3); // [2, 3]
\`\`\`

**spread** — expand array:
\`\`\`js
let a = [1, 2];
let b = [...a, 3, 4]; // [1, 2, 3, 4]
\`\`\``
    }
  ],
  problems: [
    { id: 1, title: "Create & Access", description: 'Create array `colors = ["red", "green", "blue"]`. Log the second element.', starterCode: "// Your code here\n", expectedOutput: "green", hint: "Arrays are 0-indexed, so index 1", solution: 'let colors = ["red", "green", "blue"];\nconsole.log(colors[1]);' },
    { id: 2, title: "Push & Pop", description: "Start with `[1, 2, 3]`. Push `4`, then pop. Log the array using join.", starterCode: "// Your code here\n", expectedOutput: "1,2,3", hint: "Push adds, pop removes last", solution: 'let arr = [1, 2, 3];\narr.push(4);\narr.pop();\nconsole.log(arr.join(","));' },
    { id: 3, title: "Map — Double Values", description: "Use `.map()` to double each number in `[1, 2, 3, 4, 5]`. Log the result joined by comma.", starterCode: "// Your code here\n", expectedOutput: "2,4,6,8,10", hint: "arr.map(n => n * 2)", solution: 'let arr = [1, 2, 3, 4, 5];\nconsole.log(arr.map(n => n * 2).join(","));' },
    { id: 4, title: "Filter — Even Numbers", description: "Filter even numbers from `[1, 2, 3, 4, 5, 6]`. Log joined by comma.", starterCode: "// Your code here\n", expectedOutput: "2,4,6", hint: "n % 2 === 0", solution: 'let arr = [1, 2, 3, 4, 5, 6];\nconsole.log(arr.filter(n => n % 2 === 0).join(","));' },
    { id: 5, title: "Reduce — Sum", description: "Use `.reduce()` to sum `[10, 20, 30, 40]`. Log the result.", starterCode: "// Your code here\n", expectedOutput: "100", hint: "reduce((acc, n) => acc + n, 0)", solution: "let arr = [10, 20, 30, 40];\nconsole.log(arr.reduce((acc, n) => acc + n, 0));" },
    { id: 6, title: "Find an Element", description: "Find the first number greater than 10 in `[3, 7, 12, 5, 20]`. Log it.", starterCode: "// Your code here\n", expectedOutput: "12", hint: "Use .find(n => n > 10)", solution: "let arr = [3, 7, 12, 5, 20];\nconsole.log(arr.find(n => n > 10));" },
    { id: 7, title: "Includes Check", description: 'Check if `"banana"` is in `["apple", "banana", "cherry"]`. Log the result.', starterCode: "// Your code here\n", expectedOutput: "true", hint: "Use .includes()", solution: 'let arr = ["apple", "banana", "cherry"];\nconsole.log(arr.includes("banana"));' },
    { id: 8, title: "Slice Array", description: "Get elements at index 1 to 3 from `[10, 20, 30, 40, 50]`. Log joined by comma.", starterCode: "// Your code here\n", expectedOutput: "20,30,40", hint: "slice(1, 4) — end is exclusive", solution: 'let arr = [10, 20, 30, 40, 50];\nconsole.log(arr.slice(1, 4).join(","));' },
    { id: 9, title: "Spread Operator", description: "Merge `[1, 2]` and `[3, 4]` using spread. Log joined by comma.", starterCode: "// Your code here\n", expectedOutput: "1,2,3,4", hint: "let merged = [...a, ...b]", solution: 'let a = [1, 2];\nlet b = [3, 4];\nconsole.log([...a, ...b].join(","));' },
    { id: 10, title: "Reverse & Sort", description: 'Sort `[3, 1, 4, 1, 5]` in ascending order. Log joined by comma.', starterCode: "// Your code here\n", expectedOutput: "1,1,3,4,5", hint: "Use .sort((a,b) => a - b)", solution: 'let arr = [3, 1, 4, 1, 5];\nconsole.log(arr.sort((a, b) => a - b).join(","));' }
  ]
};
