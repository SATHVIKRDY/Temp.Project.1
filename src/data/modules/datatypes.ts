import { Module } from "../types";

export const dataTypesModule: Module = {
  id: "datatypes",
  title: "Data Types",
  description: "Understand JavaScript's primitive and reference data types.",
  icon: "🔤",
  topics: [
    {
      id: "numbers",
      title: "Numbers",
      theory: `JavaScript has a single \`number\` type for both integers and decimals.

\`\`\`js
let integer = 42;
let decimal = 3.14;
let negative = -7;
let result = 10 / 3; // 3.3333...

console.log(typeof integer); // "number"
\`\`\`

**Special values:** \`Infinity\`, \`-Infinity\`, and \`NaN\` (Not a Number).

\`\`\`js
console.log(1 / 0);          // Infinity
console.log("hello" * 2);    // NaN
console.log(isNaN("hello")); // true
\`\`\``
    },
    {
      id: "strings",
      title: "Strings",
      theory: `Strings represent text and can be created with single quotes, double quotes, or backticks.

\`\`\`js
let single = 'Hello';
let double = "World";
let template = \`Hello \${double}\`; // template literal

console.log(template); // "Hello World"
console.log(typeof single); // "string"
\`\`\`

Strings are **immutable** — you can't change individual characters, but you can create new strings.`
    },
    {
      id: "booleans",
      title: "Booleans",
      theory: `Booleans have only two values: \`true\` or \`false\`. Used in conditions and logic.

\`\`\`js
let isActive = true;
let isLoggedIn = false;

console.log(5 > 3);  // true
console.log(5 < 3);  // false
console.log(typeof isActive); // "boolean"
\`\`\`

**Truthy & Falsy:** Values that act as true/false in conditions.
- **Falsy:** \`false\`, \`0\`, \`""\`, \`null\`, \`undefined\`, \`NaN\`
- **Truthy:** Everything else`
    },
    {
      id: "null-undefined",
      title: "null & undefined",
      theory: `Both represent "no value" but with different meanings:

- **\`undefined\`**: Variable declared but not assigned. JavaScript sets this automatically.
- **\`null\`**: Intentionally empty. You set this to mean "no value on purpose."

\`\`\`js
let x;
console.log(x);        // undefined
console.log(typeof x);  // "undefined"

let y = null;
console.log(y);        // null
console.log(typeof y);  // "object" (this is a known JS quirk!)
\`\`\`

**Rule of thumb:** Use \`null\` when you want to intentionally clear a value. Let JavaScript handle \`undefined\`.`
    },
    {
      id: "typeof-operator",
      title: "typeof Operator",
      theory: `The \`typeof\` operator returns a string indicating the type of a value.

\`\`\`js
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (quirk!)
console.log(typeof {});        // "object"
console.log(typeof []);        // "object" (arrays are objects)
\`\`\`

Use \`typeof\` to check variable types before performing operations.`
    }
  ],
  problems: [
    {
      id: 1, title: "Check Number Type",
      description: "Declare a variable `num` with value `42.5`. Log its type using `typeof`.",
      starterCode: "// Your code here\n", expectedOutput: "number",
      hint: "Use typeof operator", solution: "let num = 42.5;\nconsole.log(typeof num);"
    },
    {
      id: 2, title: "String or Number?",
      description: 'Declare `a = "100"` and `b = 100`. Log the typeof each on separate lines.',
      starterCode: "// Declare a and b\n\n// Log typeof each\n", expectedOutput: "string\nnumber",
      hint: "Quotes make it a string", solution: 'let a = "100";\nlet b = 100;\nconsole.log(typeof a);\nconsole.log(typeof b);'
    },
    {
      id: 3, title: "Boolean Expressions",
      description: "Log the results of: `10 > 5`, `3 === \"3\"`, `3 == \"3\"` on separate lines.",
      starterCode: "// Log three comparisons\n", expectedOutput: "true\nfalse\ntrue",
      hint: "=== checks type too, == doesn't", solution: 'console.log(10 > 5);\nconsole.log(3 === "3");\nconsole.log(3 == "3");'
    },
    {
      id: 4, title: "Null vs Undefined",
      description: "Declare `let x;` and `let y = null;`. Log both values and their typeof on separate lines (value first, then type, for each).",
      starterCode: "// Declare x and y\n\n// Log value and type of each\n",
      expectedOutput: "undefined\nundefined\nnull\nobject",
      hint: "typeof null returns 'object' — it's a JS quirk!",
      solution: "let x;\nlet y = null;\nconsole.log(x);\nconsole.log(typeof x);\nconsole.log(y);\nconsole.log(typeof y);"
    },
    {
      id: 5, title: "NaN Check",
      description: 'Log the result of `"hello" * 2` and check if it is NaN using `isNaN()`. Log both.',
      starterCode: "// Your code here\n", expectedOutput: "NaN\ntrue",
      hint: "Multiplying a string by number gives NaN",
      solution: 'let result = "hello" * 2;\nconsole.log(result);\nconsole.log(isNaN(result));'
    },
    {
      id: 6, title: "Type Conversion",
      description: 'Convert the string `"42"` to a number using `Number()`. Log the value and its type.',
      starterCode: "// Convert and log\n", expectedOutput: "42\nnumber",
      hint: "Use Number('42')",
      solution: 'let num = Number("42");\nconsole.log(num);\nconsole.log(typeof num);'
    },
    {
      id: 7, title: "String Concatenation",
      description: 'Declare `num = 5` and `str = "10"`. Log `num + str` and its typeof.',
      starterCode: "// Your code here\n", expectedOutput: "510\nstring",
      hint: "When you add a number to a string, JS converts the number to string",
      solution: 'let num = 5;\nlet str = "10";\nconsole.log(num + str);\nconsole.log(typeof (num + str));'
    },
    {
      id: 8, title: "Truthy & Falsy",
      description: "Log `Boolean(0)`, `Boolean(\"\")`, `Boolean(\"hello\")`, `Boolean(1)` on separate lines.",
      starterCode: "// Log Boolean conversions\n", expectedOutput: "false\nfalse\ntrue\ntrue",
      hint: "0 and empty string are falsy",
      solution: 'console.log(Boolean(0));\nconsole.log(Boolean(""));\nconsole.log(Boolean("hello"));\nconsole.log(Boolean(1));'
    },
    {
      id: 9, title: "Array Type Check",
      description: "Declare an array `arr = [1, 2, 3]`. Log `typeof arr` and `Array.isArray(arr)`.",
      starterCode: "// Your code here\n", expectedOutput: "object\ntrue",
      hint: "typeof array returns 'object'. Use Array.isArray() for proper check.",
      solution: "let arr = [1, 2, 3];\nconsole.log(typeof arr);\nconsole.log(Array.isArray(arr));"
    },
    {
      id: 10, title: "Type Detective",
      description: "For each value: `undefined`, `null`, `42`, `\"hi\"`, `true` — log its typeof. Each on a new line.",
      starterCode: "// Log typeof for each value\n", expectedOutput: "undefined\nobject\nnumber\nstring\nboolean",
      hint: "Remember typeof null is 'object'!",
      solution: 'console.log(typeof undefined);\nconsole.log(typeof null);\nconsole.log(typeof 42);\nconsole.log(typeof "hi");\nconsole.log(typeof true);'
    }
  ]
};
