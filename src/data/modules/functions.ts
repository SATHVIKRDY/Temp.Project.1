import { Module } from "../types";

export const functionsModule: Module = {
  id: "functions",
  title: "Functions",
  description: "Declare functions, use arrow syntax, parameters, return values, and callbacks.",
  icon: "⚡",
  topics: [
    {
      id: "function-declaration",
      title: "Function Declaration",
      theory: `The classic way to create a function:

\`\`\`js
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // "Hello, Alice!"
\`\`\`

- Declared with \`function\` keyword
- **Hoisted** — can be called before it's defined in the code
- Has its own \`this\` context`
    },
    {
      id: "function-expression",
      title: "Function Expression",
      theory: `A function stored in a variable:

\`\`\`js
const greet = function(name) {
  return "Hello, " + name;
};

console.log(greet("Bob")); // "Hello, Bob"
\`\`\`

- **Not hoisted** — can only be called after the line where it's defined
- Useful for passing functions as arguments`
    },
    {
      id: "arrow-functions",
      title: "Arrow Functions",
      theory: `Modern, concise syntax:

\`\`\`js
// Full form
const add = (a, b) => {
  return a + b;
};

// Short form (implicit return)
const add = (a, b) => a + b;

// Single parameter (no parens needed)
const double = x => x * 2;

console.log(add(2, 3));    // 5
console.log(double(4));    // 8
\`\`\`

Arrow functions don't have their own \`this\` — they inherit it from the surrounding scope.`
    },
    {
      id: "parameters-defaults",
      title: "Parameters & Default Values",
      theory: `Functions can have default values for parameters:

\`\`\`js
function greet(name = "World") {
  console.log("Hello, " + name);
}

greet();        // "Hello, World"
greet("Alice"); // "Hello, Alice"
\`\`\`

**Rest parameters** collect remaining arguments:
\`\`\`js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
\`\`\``
    },
    {
      id: "callbacks",
      title: "Callbacks",
      theory: `A **callback** is a function passed as an argument to another function:

\`\`\`js
function doOperation(a, b, callback) {
  return callback(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(doOperation(5, 3, add));      // 8
console.log(doOperation(5, 3, multiply)); // 15
\`\`\`

Callbacks are everywhere: \`forEach\`, \`map\`, \`filter\`, event listeners.`
    }
  ],
  problems: [
    { id: 1, title: "Basic Function", description: "Create a function `square(n)` that returns n squared. Log `square(5)`.", starterCode: "// Your code here\n", expectedOutput: "25", hint: "function square(n) { return n * n; }", solution: "function square(n) {\n  return n * n;\n}\nconsole.log(square(5));" },
    { id: 2, title: "Arrow Function", description: "Create an arrow function `greet` that takes a name and returns `\"Hi, name!\"`. Log `greet(\"Alice\")`.", starterCode: "// Your code here\n", expectedOutput: "Hi, Alice!", hint: "const greet = name => `Hi, ${name}!`;", solution: "const greet = name => `Hi, ${name}!`;\nconsole.log(greet(\"Alice\"));" },
    { id: 3, title: "Default Parameters", description: 'Create `multiply(a, b = 2)`. Log `multiply(5)` and `multiply(5, 3)` on separate lines.', starterCode: "// Your code here\n", expectedOutput: "10\n15", hint: "Set default value in parameter", solution: "function multiply(a, b = 2) {\n  return a * b;\n}\nconsole.log(multiply(5));\nconsole.log(multiply(5, 3));" },
    { id: 4, title: "Rest Parameters", description: "Create a function `sum(...nums)` using rest params. Log `sum(1,2,3,4,5)`.", starterCode: "// Your code here\n", expectedOutput: "15", hint: "Use reduce inside the function", solution: "function sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3, 4, 5));" },
    { id: 5, title: "Return Multiple Values", description: 'Create `getMinMax(arr)` returning `{min, max}`. Test with `[3,7,1,9,4]`. Log min and max on separate lines.', starterCode: "// Your code here\n", expectedOutput: "1\n9", hint: "Return { min: Math.min(...arr), max: Math.max(...arr) }", solution: "function getMinMax(arr) {\n  return { min: Math.min(...arr), max: Math.max(...arr) };\n}\nlet result = getMinMax([3, 7, 1, 9, 4]);\nconsole.log(result.min);\nconsole.log(result.max);" },
    { id: 6, title: "Callback Function", description: "Create `operate(a, b, fn)` that calls fn(a,b). Create add and subtract functions. Log operate(10, 3, add) and operate(10, 3, subtract).", starterCode: "// Your code here\n", expectedOutput: "13\n7", hint: "Pass functions as arguments", solution: "function operate(a, b, fn) {\n  return fn(a, b);\n}\nconst add = (a, b) => a + b;\nconst subtract = (a, b) => a - b;\nconsole.log(operate(10, 3, add));\nconsole.log(operate(10, 3, subtract));" },
    { id: 7, title: "IIFE", description: "Create an Immediately Invoked Function Expression that logs `\"I ran immediately!\"`.", starterCode: "// Your code here\n", expectedOutput: "I ran immediately!", hint: "(function() { ... })()", solution: '(function() {\n  console.log("I ran immediately!");\n})();' },
    { id: 8, title: "Recursive Function", description: "Create a recursive `factorial(n)` function. Log `factorial(5)`.", starterCode: "// Your code here\n", expectedOutput: "120", hint: "Base case: n <= 1 returns 1; recursive: n * factorial(n-1)", solution: "function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5));" },
    { id: 9, title: "Higher-Order Function", description: 'Create `repeat(fn, n)` that calls fn() n times. Call `repeat(() => console.log("Hi"), 3)`', starterCode: "// Your code here\n", expectedOutput: "Hi\nHi\nHi", hint: "Use a for loop inside repeat", solution: 'function repeat(fn, n) {\n  for (let i = 0; i < n; i++) fn();\n}\nrepeat(() => console.log("Hi"), 3);' },
    { id: 10, title: "Closure Counter", description: "Create `makeCounter()` that returns a function. Each call to the returned function returns the next count. Call it 3 times and log each result.", starterCode: "// Your code here\n", expectedOutput: "1\n2\n3", hint: "Use a closure — a variable inside makeCounter that the inner function accesses", solution: "function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst counter = makeCounter();\nconsole.log(counter());\nconsole.log(counter());\nconsole.log(counter());" }
  ]
};
