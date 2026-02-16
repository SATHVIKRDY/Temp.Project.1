import { Module } from "../types";

export const loopsModule: Module = {
  id: "loops",
  title: "Loops",
  description: "Repeat actions with for, while, do-while, for...of, for...in, forEach.",
  icon: "🔁",
  topics: [
    {
      id: "for-loop",
      title: "for Loop",
      theory: `The classic loop with a counter:

\`\`\`js
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
\`\`\`

**Structure:** \`for (initialization; condition; update)\`
- **Initialization**: runs once at start
- **Condition**: checked before each iteration
- **Update**: runs after each iteration`
    },
    {
      id: "while-loop",
      title: "while Loop",
      theory: `Runs as long as condition is true:

\`\`\`js
let count = 0;
while (count < 3) {
  console.log(count); // 0, 1, 2
  count++;
}
\`\`\`

⚠️ Make sure the condition eventually becomes false, or you'll create an infinite loop!`
    },
    {
      id: "do-while",
      title: "do...while Loop",
      theory: `Always runs **at least once**, then checks condition:

\`\`\`js
let num = 10;
do {
  console.log(num); // 10 (runs even though condition is false)
  num++;
} while (num < 5);
\`\`\`

Use when you need the code to execute before checking.`
    },
    {
      id: "for-of",
      title: "for...of Loop",
      theory: `Iterates over **values** of iterable objects (arrays, strings):

\`\`\`js
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// apple, banana, cherry

let word = "Hi";
for (let char of word) {
  console.log(char); // H, i
}
\`\`\``
    },
    {
      id: "for-in",
      title: "for...in Loop",
      theory: `Iterates over **keys** of an object:

\`\`\`js
let user = { name: "Alice", age: 25 };
for (let key in user) {
  console.log(key + ": " + user[key]);
}
// name: Alice
// age: 25
\`\`\`

⚠️ Don't use \`for...in\` for arrays — use \`for...of\` or \`forEach\` instead.`
    },
    {
      id: "foreach",
      title: "forEach Method",
      theory: `An array method that runs a function for each element:

\`\`\`js
let nums = [10, 20, 30];
nums.forEach((num, index) => {
  console.log(\`\${index}: \${num}\`);
});
// 0: 10
// 1: 20
// 2: 30
\`\`\`

Clean and readable, but you can't \`break\` out of forEach.`
    }
  ],
  problems: [
    { id: 1, title: "Count to 5", description: "Use a `for` loop to log numbers 1 through 5, each on a new line.", starterCode: "// Your code here\n", expectedOutput: "1\n2\n3\n4\n5", hint: "for (let i = 1; i <= 5; i++)", solution: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}" },
    { id: 2, title: "Sum 1 to 10", description: "Use a `while` loop to calculate the sum of 1 to 10. Log the sum.", starterCode: "// Your code here\n", expectedOutput: "55", hint: "Keep adding i to sum while i <= 10", solution: "let sum = 0;\nlet i = 1;\nwhile (i <= 10) {\n  sum += i;\n  i++;\n}\nconsole.log(sum);" },
    { id: 3, title: "Do-While at Least Once", description: "Use `do...while` to log `\"Hello\"` exactly once (set condition to be false from start).", starterCode: "// Your code here\n", expectedOutput: "Hello", hint: "do { ... } while (false)", solution: 'do {\n  console.log("Hello");\n} while (false);' },
    { id: 4, title: "Loop Through Array", description: 'Use `for...of` to log each fruit in `["apple", "banana", "cherry"]`.', starterCode: "// Your code here\n", expectedOutput: "apple\nbanana\ncherry", hint: "for (let fruit of fruits)", solution: 'let fruits = ["apple", "banana", "cherry"];\nfor (let fruit of fruits) {\n  console.log(fruit);\n}' },
    { id: 5, title: "Object Keys with for...in", description: 'Log each key-value pair of `{ a: 1, b: 2, c: 3 }` using `for...in`. Format: `"key = value"`.', starterCode: "// Your code here\n", expectedOutput: "a = 1\nb = 2\nc = 3", hint: "for (let key in obj) { console.log(key + ' = ' + obj[key]) }", solution: 'let obj = { a: 1, b: 2, c: 3 };\nfor (let key in obj) {\n  console.log(key + " = " + obj[key]);\n}' },
    { id: 6, title: "forEach with Index", description: 'Use `forEach` on `["x", "y", "z"]` to log `"0: x"`, `"1: y"`, `"2: z"`.', starterCode: "// Your code here\n", expectedOutput: "0: x\n1: y\n2: z", hint: "forEach((item, index) => ...)", solution: '["x", "y", "z"].forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});' },
    { id: 7, title: "Multiplication Table", description: "Print the multiplication table of 3 (3x1=3 through 3x5=15). Format: `\"3 x 1 = 3\"`.", starterCode: "// Your code here\n", expectedOutput: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15", hint: "Use a for loop from 1 to 5", solution: "for (let i = 1; i <= 5; i++) {\n  console.log(`3 x ${i} = ${3 * i}`);\n}" },
    { id: 8, title: "Even Numbers Only", description: "Use a for loop to log even numbers from 2 to 10.", starterCode: "// Your code here\n", expectedOutput: "2\n4\n6\n8\n10", hint: "Use i += 2 or check with %", solution: "for (let i = 2; i <= 10; i += 2) {\n  console.log(i);\n}" },
    { id: 9, title: "Reverse Loop", description: "Log numbers from 5 down to 1 using a for loop.", starterCode: "// Your code here\n", expectedOutput: "5\n4\n3\n2\n1", hint: "for (let i = 5; i >= 1; i--)", solution: "for (let i = 5; i >= 1; i--) {\n  console.log(i);\n}" },
    { id: 10, title: "Nested Loop Pattern", description: 'Print a right triangle pattern with stars:\n`"*"`, `"**"`, `"***"`', starterCode: "// Your code here\n", expectedOutput: "*\n**\n***", hint: "Outer loop for rows, build string with inner loop or repeat", solution: 'for (let i = 1; i <= 3; i++) {\n  console.log("*".repeat(i));\n}' }
  ]
};
