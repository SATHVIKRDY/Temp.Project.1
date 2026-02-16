import { Module } from "../types";

export const operatorsModule: Module = {
  id: "operators",
  title: "Operators",
  description: "Master arithmetic, comparison, logical, and ternary operators.",
  icon: "➕",
  topics: [
    {
      id: "arithmetic",
      title: "Arithmetic Operators",
      theory: `Used for math operations.

| Operator | Meaning | Example |
|----------|---------|---------|
| \`+\` | Addition | \`5 + 3 = 8\` |
| \`-\` | Subtraction | \`5 - 3 = 2\` |
| \`*\` | Multiplication | \`5 * 3 = 15\` |
| \`/\` | Division | \`6 / 3 = 2\` |
| \`%\` | Modulus (remainder) | \`7 % 3 = 1\` |
| \`**\` | Exponentiation | \`2 ** 3 = 8\` |

\`\`\`js
console.log(10 % 3); // 1 (remainder)
console.log(2 ** 4); // 16 (2 to the power 4)
\`\`\``
    },
    {
      id: "assignment",
      title: "Assignment Operators",
      theory: `Shorthand for assigning and modifying values.

\`\`\`js
let x = 10;
x += 5;  // x = x + 5  → 15
x -= 3;  // x = x - 3  → 12
x *= 2;  // x = x * 2  → 24
x /= 4;  // x = x / 4  → 6
x %= 4;  // x = x % 4  → 2
x++;     // x = x + 1  → 3
x--;     // x = x - 1  → 2
\`\`\`

\`++\` and \`--\` are **increment** and **decrement** operators.`
    },
    {
      id: "comparison",
      title: "Comparison Operators",
      theory: `Return \`true\` or \`false\` based on comparison.

| Operator | Meaning | Example |
|----------|---------|---------|
| \`==\` | Equal (loose) | \`"5" == 5 → true\` |
| \`===\` | Equal (strict) | \`"5" === 5 → false\` |
| \`!=\` | Not equal (loose) | \`"5" != 5 → false\` |
| \`!==\` | Not equal (strict) | \`"5" !== 5 → true\` |
| \`>\` \`<\` | Greater/Less than | \`5 > 3 → true\` |
| \`>=\` \`<=\` | Greater/Less or equal | \`5 >= 5 → true\` |

⚡ **Always use \`===\` and \`!==\`** to avoid type coercion bugs.`
    },
    {
      id: "logical",
      title: "Logical Operators",
      theory: `Combine multiple conditions.

| Operator | Meaning | Example |
|----------|---------|---------|
| \`&&\` | AND | \`true && false → false\` |
| \`\\|\\|\` | OR | \`true \\|\\| false → true\` |
| \`!\` | NOT | \`!true → false\` |

\`\`\`js
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID); // true (both must be true)
console.log(age >= 21 || hasID); // true (at least one true)
console.log(!hasID);             // false
\`\`\``
    },
    {
      id: "ternary",
      title: "Ternary Operator",
      theory: `A compact **if-else** in one line:

\`\`\`
condition ? valueIfTrue : valueIfFalse
\`\`\`

\`\`\`js
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Equivalent to:
// if (age >= 18) { status = "adult"; }
// else { status = "minor"; }
\`\`\`

Great for simple conditions. Avoid nesting ternaries — use if-else for complex logic.`
    }
  ],
  problems: [
    { id: 1, title: "Basic Math", description: "Log the result of `15 + 7 * 2` (remember operator precedence).", starterCode: "// Your code here\n", expectedOutput: "29", hint: "Multiplication happens before addition", solution: "console.log(15 + 7 * 2);" },
    { id: 2, title: "Remainder Operator", description: "Log the remainder when 17 is divided by 5.", starterCode: "// Use % operator\n", expectedOutput: "2", hint: "Use 17 % 5", solution: "console.log(17 % 5);" },
    { id: 3, title: "Power Operator", description: "Calculate 3 to the power of 4 and log the result.", starterCode: "// Your code here\n", expectedOutput: "81", hint: "Use ** operator: 3 ** 4", solution: "console.log(3 ** 4);" },
    { id: 4, title: "Increment Counter", description: "Start with `let count = 5`. Use `++` to increment it twice, then log.", starterCode: "let count = 5;\n// Increment twice\n\n// Log count\n", expectedOutput: "7", hint: "count++ increments by 1", solution: "let count = 5;\ncount++;\ncount++;\nconsole.log(count);" },
    { id: 5, title: "Strict vs Loose", description: 'Log the result of `5 == "5"` and `5 === "5"` on separate lines.', starterCode: "// Compare\n", expectedOutput: "true\nfalse", hint: "== converts types, === doesn't", solution: 'console.log(5 == "5");\nconsole.log(5 === "5");' },
    { id: 6, title: "Logical AND/OR", description: "Declare `a = true`, `b = false`. Log `a && b` and `a || b` on separate lines.", starterCode: "// Your code here\n", expectedOutput: "false\ntrue", hint: "AND requires both true, OR requires at least one", solution: "let a = true;\nlet b = false;\nconsole.log(a && b);\nconsole.log(a || b);" },
    { id: 7, title: "Ternary Operator", description: "Declare `score = 85`. Use a ternary to set `grade` to `\"Pass\"` if score >= 60, else `\"Fail\"`. Log grade.", starterCode: "let score = 85;\n// Use ternary\n\n// Log grade\n", expectedOutput: "Pass", hint: "condition ? 'Pass' : 'Fail'", solution: 'let score = 85;\nlet grade = score >= 60 ? "Pass" : "Fail";\nconsole.log(grade);' },
    { id: 8, title: "Compound Assignment", description: "Start with `let x = 20`. Apply `+= 10`, then `*= 2`, then `-= 5`. Log final value.", starterCode: "let x = 20;\n// Apply operations\n\n// Log result\n", expectedOutput: "55", hint: "20+10=30, 30*2=60, 60-5=55", solution: "let x = 20;\nx += 10;\nx *= 2;\nx -= 5;\nconsole.log(x);" },
    { id: 9, title: "Even or Odd", description: "Declare `num = 7`. Use ternary and `%` to log `\"even\"` or `\"odd\"`.", starterCode: "let num = 7;\n// Your code here\n", expectedOutput: "odd", hint: "num % 2 === 0 means even", solution: 'let num = 7;\nconsole.log(num % 2 === 0 ? "even" : "odd");' },
    { id: 10, title: "NOT Operator", description: "Declare `let loggedIn = false`. Log `!loggedIn` and `!!loggedIn` on separate lines.", starterCode: "// Your code here\n", expectedOutput: "true\nfalse", hint: "! flips boolean, !! converts to boolean", solution: "let loggedIn = false;\nconsole.log(!loggedIn);\nconsole.log(!!loggedIn);" }
  ]
};
