import { Module } from "../types";

export const variablesModule: Module = {
  id: "variables",
  title: "Variables",
  description: "Learn var, let, const — how to store and manage data in JavaScript.",
  icon: "📦",
  topics: [
    {
      id: "var-keyword",
      title: "var Keyword",
      theory: `The \`var\` keyword is the oldest way to declare variables in JavaScript.

**Key points:**
- \`var\` is **function-scoped** (not block-scoped)
- Variables declared with \`var\` are **hoisted** to the top of their scope
- You can **redeclare** and **reassign** \`var\` variables

\`\`\`js
var name = "Alice";
var name = "Bob"; // ✅ redeclaration allowed
name = "Charlie";  // ✅ reassignment allowed
console.log(name); // "Charlie"
\`\`\`

⚠️ **Why avoid var?** Because of function-scoping and hoisting, \`var\` can lead to unexpected bugs. Prefer \`let\` and \`const\`.`
    },
    {
      id: "let-keyword",
      title: "let Keyword",
      theory: `\`let\` was introduced in ES6 and is the preferred way to declare variables that change.

**Key points:**
- \`let\` is **block-scoped** (lives inside \`{}\`)
- Cannot be **redeclared** in the same scope
- Can be **reassigned**

\`\`\`js
let age = 25;
age = 26;        // ✅ reassignment works
// let age = 30; // ❌ Error: already declared

if (true) {
  let x = 10;
  console.log(x); // 10
}
// console.log(x); // ❌ Error: x is not defined
\`\`\``
    },
    {
      id: "const-keyword",
      title: "const Keyword",
      theory: `\`const\` declares variables whose **reference** cannot change.

**Key points:**
- \`const\` is **block-scoped**
- Cannot be **reassigned** or **redeclared**
- Must be **initialized** when declared
- Objects/arrays declared with \`const\` can still have their contents modified

\`\`\`js
const PI = 3.14159;
// PI = 3; // ❌ Error: Assignment to constant

const user = { name: "Alice" };
user.name = "Bob"; // ✅ This works! Object contents can change
// user = {};      // ❌ Error: Can't reassign the reference
\`\`\``
    },
    {
      id: "naming-conventions",
      title: "Naming Conventions",
      theory: `Good variable names make your code readable.

**Rules:**
- Must start with a **letter**, \`_\`, or \`$\`
- Cannot use **reserved words** (\`let\`, \`class\`, \`return\`, etc.)
- Are **case-sensitive** (\`name\` ≠ \`Name\`)

**Conventions:**
- Use **camelCase** for variables: \`firstName\`, \`totalPrice\`
- Use **UPPER_SNAKE_CASE** for constants: \`MAX_SIZE\`, \`API_URL\`
- Use **descriptive names**: \`userAge\` instead of \`x\`

\`\`\`js
let firstName = "Alice";      // ✅ camelCase
const MAX_RETRIES = 3;        // ✅ constant convention
let _privateVar = "hidden";   // ✅ starts with _
// let 2cool = "no";          // ❌ can't start with number
\`\`\``
    },
    {
      id: "scope-basics",
      title: "Scope Basics",
      theory: `**Scope** determines where a variable is accessible in your code.

**Types of scope:**
- **Global scope**: Variables declared outside any function/block
- **Function scope**: Variables declared inside a function (\`var\`)
- **Block scope**: Variables declared inside \`{}\` (\`let\`, \`const\`)

\`\`\`js
let globalVar = "I'm global";

function example() {
  let functionVar = "I'm local";
  console.log(globalVar);   // ✅ accessible
  console.log(functionVar); // ✅ accessible
}

// console.log(functionVar); // ❌ not accessible here
\`\`\`

Think of scope like rooms in a house — you can see outside from any room, but you can't see inside a room from outside.`
    }
  ],
  problems: [
    {
      id: 1,
      title: "Declare and Log a Variable",
      description: "Declare a variable called `greeting` using `let` and assign it the value `\"Hello, World!\"`. Then log it using `console.log()`.",
      starterCode: "// Declare your variable here\n\n// Log it here\n",
      expectedOutput: "Hello, World!",
      hint: "Use `let greeting = \"Hello, World!\";` then `console.log(greeting);`",
      solution: 'let greeting = "Hello, World!";\nconsole.log(greeting);'
    },
    {
      id: 2,
      title: "Const vs Let",
      description: "Declare a constant `PI` with value `3.14159` and a variable `radius` with value `5`. Log the area of a circle (PI * radius * radius).",
      starterCode: "// Declare PI and radius\n\n// Calculate and log the area\n",
      expectedOutput: "78.53975",
      hint: "Use `const` for PI and `let` for radius. Area = PI * radius * radius.",
      solution: "const PI = 3.14159;\nlet radius = 5;\nconsole.log(PI * radius * radius);"
    },
    {
      id: 3,
      title: "Variable Reassignment",
      description: "Declare a variable `score` with initial value `0`. Reassign it to `100`. Then log the value.",
      starterCode: "// Declare score\n\n// Reassign score\n\n// Log it\n",
      expectedOutput: "100",
      hint: "Use `let` since you need to reassign. Then `score = 100;`",
      solution: "let score = 0;\nscore = 100;\nconsole.log(score);"
    },
    {
      id: 4,
      title: "Multiple Variables",
      description: "Declare three variables: `firstName` as `\"John\"`, `lastName` as `\"Doe\"`, and `age` as `30`. Log them in format: `John Doe is 30 years old`.",
      starterCode: "// Declare variables\n\n// Log the formatted string\n",
      expectedOutput: "John Doe is 30 years old",
      hint: "Use template literals: `${firstName} ${lastName} is ${age} years old`",
      solution: 'let firstName = "John";\nlet lastName = "Doe";\nlet age = 30;\nconsole.log(`${firstName} ${lastName} is ${age} years old`);'
    },
    {
      id: 5,
      title: "Swap Two Variables",
      description: "Declare `a = 5` and `b = 10`. Swap their values using a temporary variable. Log both values after swapping.",
      starterCode: "let a = 5;\nlet b = 10;\n\n// Swap values here\n\nconsole.log(a);\nconsole.log(b);",
      expectedOutput: "10\n5",
      hint: "Use a temp variable: `let temp = a; a = b; b = temp;`",
      solution: "let a = 5;\nlet b = 10;\nlet temp = a;\na = b;\nb = temp;\nconsole.log(a);\nconsole.log(b);"
    },
    {
      id: 6,
      title: "Block Scope Test",
      description: "Declare `let x = \"outside\"`. Inside an if block (`if (true)`), declare `let x = \"inside\"` and log it. After the block, log x again. What are the two outputs?",
      starterCode: 'let x = "outside";\n\nif (true) {\n  // Declare x inside block and log it\n}\n\n// Log x here\n',
      expectedOutput: "inside\noutside",
      hint: "Block-scoped `let` creates a separate variable inside the if block.",
      solution: 'let x = "outside";\n\nif (true) {\n  let x = "inside";\n  console.log(x);\n}\n\nconsole.log(x);'
    },
    {
      id: 7,
      title: "Const with Objects",
      description: "Declare a `const` object called `car` with properties `brand: \"Toyota\"` and `year: 2020`. Change the year to `2024`. Log the car object.",
      starterCode: "// Declare the car object\n\n// Change the year\n\n// Log the car\n",
      expectedOutput: '{"brand":"Toyota","year":2024}',
      hint: "const prevents reassigning the variable, but you can modify object properties.",
      solution: 'const car = { brand: "Toyota", year: 2020 };\ncar.year = 2024;\nconsole.log(JSON.stringify(car));'
    },
    {
      id: 8,
      title: "Naming Practice",
      description: "Fix the variable names to follow camelCase convention, then log all three values on separate lines:\n`my first name = \"Alice\"`, `USERAGE = 25`, `user-city = \"NYC\"`",
      starterCode: "// Fix and declare with proper camelCase names\n\n// Log all three\n",
      expectedOutput: "Alice\n25\nNYC",
      hint: "camelCase: myFirstName, userAge, userCity",
      solution: 'let myFirstName = "Alice";\nlet userAge = 25;\nlet userCity = "NYC";\nconsole.log(myFirstName);\nconsole.log(userAge);\nconsole.log(userCity);'
    },
    {
      id: 9,
      title: "Counter Variable",
      description: "Create a counter variable starting at `0`. Increment it 3 times using `+=`. Log the final value.",
      starterCode: "// Create counter\n\n// Increment 3 times\n\n// Log final value\n",
      expectedOutput: "3",
      hint: "Use `counter += 1` three times, or `counter++` three times.",
      solution: "let counter = 0;\ncounter += 1;\ncounter += 1;\ncounter += 1;\nconsole.log(counter);"
    },
    {
      id: 10,
      title: "Variable Types Check",
      description: "Declare: `let num = 42`, `let str = \"hello\"`, `let bool = true`. Log the typeof each on a new line.",
      starterCode: "// Declare variables\n\n// Log typeof each\n",
      expectedOutput: "number\nstring\nboolean",
      hint: "Use `typeof` operator: `console.log(typeof num);`",
      solution: 'let num = 42;\nlet str = "hello";\nlet bool = true;\nconsole.log(typeof num);\nconsole.log(typeof str);\nconsole.log(typeof bool);'
    }
  ]
};
