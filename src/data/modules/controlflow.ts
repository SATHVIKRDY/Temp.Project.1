import { Module } from "../types";

export const controlFlowModule: Module = {
  id: "controlflow",
  title: "Control Flow",
  description: "Make decisions in your code with if, else if, else, and switch.",
  icon: "🔀",
  topics: [
    {
      id: "if-statement",
      title: "if Statement",
      theory: `The simplest conditional — runs code only if condition is true.

\`\`\`js
let temp = 35;

if (temp > 30) {
  console.log("It's hot!"); // This runs
}
\`\`\`

The code inside \`{}\` only executes when the condition evaluates to \`true\`.`
    },
    {
      id: "if-else",
      title: "if...else",
      theory: `Handles two paths — one when true, one when false.

\`\`\`js
let age = 16;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("Too young to vote"); // This runs
}
\`\`\``
    },
    {
      id: "else-if",
      title: "else if Chain",
      theory: `Check multiple conditions in sequence:

\`\`\`js
let score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C"); // This runs
} else {
  console.log("F");
}
\`\`\`

Only the **first** matching block executes. Order matters!`
    },
    {
      id: "switch",
      title: "Switch Statement",
      theory: `Best for comparing one value against multiple exact matches:

\`\`\`js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Regular day");
}
\`\`\`

⚠️ Always include \`break\` or cases will "fall through" to the next one.`
    }
  ],
  problems: [
    { id: 1, title: "Simple if", description: "Declare `num = 15`. If num > 10, log `\"big\"`. Otherwise log `\"small\"`.", starterCode: "let num = 15;\n// Your code here\n", expectedOutput: "big", hint: "Use if-else", solution: 'let num = 15;\nif (num > 10) {\n  console.log("big");\n} else {\n  console.log("small");\n}' },
    { id: 2, title: "Grade Calculator", description: "Given `score = 82`, log the grade: A (>=90), B (>=80), C (>=70), D (>=60), F (below 60).", starterCode: "let score = 82;\n// Your code here\n", expectedOutput: "B", hint: "Use else-if chain", solution: 'let score = 82;\nif (score >= 90) console.log("A");\nelse if (score >= 80) console.log("B");\nelse if (score >= 70) console.log("C");\nelse if (score >= 60) console.log("D");\nelse console.log("F");' },
    { id: 3, title: "Even or Odd", description: 'Check if `num = 13` is even or odd. Log `"even"` or `"odd"`.', starterCode: "let num = 13;\n// Your code here\n", expectedOutput: "odd", hint: "Use num % 2 === 0", solution: 'let num = 13;\nif (num % 2 === 0) {\n  console.log("even");\n} else {\n  console.log("odd");\n}' },
    { id: 4, title: "Positive/Negative/Zero", description: "Check if `num = -5` is positive, negative, or zero. Log the word.", starterCode: "let num = -5;\n// Your code here\n", expectedOutput: "negative", hint: "Three conditions: > 0, < 0, and === 0", solution: 'let num = -5;\nif (num > 0) console.log("positive");\nelse if (num < 0) console.log("negative");\nelse console.log("zero");' },
    { id: 5, title: "Largest of Three", description: "Find the largest of `a=10, b=25, c=18`. Log it.", starterCode: "let a = 10, b = 25, c = 18;\n// Your code here\n", expectedOutput: "25", hint: "Compare using if-else if chains or Math.max", solution: "let a = 10, b = 25, c = 18;\nif (a >= b && a >= c) console.log(a);\nelse if (b >= a && b >= c) console.log(b);\nelse console.log(c);" },
    { id: 6, title: "Switch Day", description: 'Use switch to log `"Weekday"` for Mon-Fri and `"Weekend"` for Sat/Sun. Test with `day = "Saturday"`.', starterCode: 'let day = "Saturday";\n// Your code here\n', expectedOutput: "Weekend", hint: "Multiple cases can share the same code by omitting break", solution: 'let day = "Saturday";\nswitch (day) {\n  case "Monday": case "Tuesday": case "Wednesday": case "Thursday": case "Friday":\n    console.log("Weekday");\n    break;\n  case "Saturday": case "Sunday":\n    console.log("Weekend");\n    break;\n}' },
    { id: 7, title: "Leap Year", description: "Check if `year = 2024` is a leap year. Log `true` or `false`.\nRule: divisible by 4 AND (not divisible by 100 OR divisible by 400).", starterCode: "let year = 2024;\n// Your code here\n", expectedOutput: "true", hint: "(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0", solution: "let year = 2024;\nconsole.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);" },
    { id: 8, title: "Age Category", description: 'Categorize `age = 15`: child (0-12), teen (13-17), adult (18-64), senior (65+). Log the category.', starterCode: "let age = 15;\n// Your code here\n", expectedOutput: "teen", hint: "Use else-if chain with ranges", solution: 'let age = 15;\nif (age <= 12) console.log("child");\nelse if (age <= 17) console.log("teen");\nelse if (age <= 64) console.log("adult");\nelse console.log("senior");' },
    { id: 9, title: "Multiple Conditions", description: 'Given `temp = 25` and `isRaining = false`. If temp > 20 AND not raining, log `"Go outside!"`. Else log `"Stay home"`.', starterCode: "let temp = 25;\nlet isRaining = false;\n// Your code here\n", expectedOutput: "Go outside!", hint: "Use && and ! operators", solution: 'let temp = 25;\nlet isRaining = false;\nif (temp > 20 && !isRaining) {\n  console.log("Go outside!");\n} else {\n  console.log("Stay home");\n}' },
    { id: 10, title: "Calculator Switch", description: 'Given `a=10, b=3, op="*"`. Use switch on op to calculate and log the result (+, -, *, /).', starterCode: 'let a = 10, b = 3, op = "*";\n// Your code here\n', expectedOutput: "30", hint: "switch(op) { case '*': console.log(a*b); break; ... }", solution: 'let a = 10, b = 3, op = "*";\nswitch (op) {\n  case "+": console.log(a + b); break;\n  case "-": console.log(a - b); break;\n  case "*": console.log(a * b); break;\n  case "/": console.log(a / b); break;\n}' }
  ]
};
