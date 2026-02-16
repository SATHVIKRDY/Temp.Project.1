import { Module } from "../types";

export const stringsModule: Module = {
  id: "strings",
  title: "Strings",
  description: "Work with text — template literals, common string methods, and more.",
  icon: "📝",
  topics: [
    {
      id: "creating-strings",
      title: "Creating Strings",
      theory: `Three ways to create strings:

\`\`\`js
let s1 = 'single quotes';
let s2 = "double quotes";
let s3 = \`template literal\`;  // backticks — most powerful!
\`\`\`

**Template literals** support:
- **Embedded expressions**: \`\${variable}\`
- **Multi-line strings** without escape characters

\`\`\`js
let name = "Alice";
let greeting = \`Hello, \${name}! 
Welcome aboard.\`;
console.log(greeting);
\`\`\``
    },
    {
      id: "string-methods",
      title: "Common String Methods",
      theory: `Strings have many built-in methods:

\`\`\`js
let str = "Hello, World!";

str.length;           // 13
str.toUpperCase();    // "HELLO, WORLD!"
str.toLowerCase();    // "hello, world!"
str.trim();           // removes whitespace from both ends
str.indexOf("World"); // 7 (position where found)
str.includes("Hello"); // true
str.slice(0, 5);      // "Hello" (start, end)
str.replace("World", "JS"); // "Hello, JS!"
str.split(", ");      // ["Hello", "World!"]
str.charAt(0);        // "H"
str.startsWith("He"); // true
str.endsWith("!");    // true
\`\`\`

⚠️ Strings are **immutable** — methods return new strings, they don't modify the original.`
    },
    {
      id: "string-concatenation",
      title: "String Concatenation",
      theory: `Combining strings together:

**Using \`+\` operator:**
\`\`\`js
let first = "Hello";
let second = "World";
console.log(first + " " + second); // "Hello World"
\`\`\`

**Using template literals (preferred):**
\`\`\`js
let name = "Alice";
let age = 25;
console.log(\`\${name} is \${age} years old\`);
\`\`\`

Template literals are cleaner and easier to read, especially with multiple variables.`
    }
  ],
  problems: [
    { id: 1, title: "String Length", description: 'Declare `str = "JavaScript"`. Log its length.', starterCode: "// Your code here\n", expectedOutput: "10", hint: "Use .length property", solution: 'let str = "JavaScript";\nconsole.log(str.length);' },
    { id: 2, title: "Uppercase & Lowercase", description: 'Declare `str = "Hello World"`. Log it in uppercase, then lowercase, on separate lines.', starterCode: "// Your code here\n", expectedOutput: "HELLO WORLD\nhello world", hint: "Use .toUpperCase() and .toLowerCase()", solution: 'let str = "Hello World";\nconsole.log(str.toUpperCase());\nconsole.log(str.toLowerCase());' },
    { id: 3, title: "Slice a String", description: 'Extract "Java" from "JavaScript" using `.slice()`. Log it.', starterCode: "// Your code here\n", expectedOutput: "Java", hint: "slice(0, 4)", solution: 'let str = "JavaScript";\nconsole.log(str.slice(0, 4));' },
    { id: 4, title: "Find Position", description: 'Find the index of "World" in "Hello, World!" and log it.', starterCode: "// Your code here\n", expectedOutput: "7", hint: "Use .indexOf()", solution: 'let str = "Hello, World!";\nconsole.log(str.indexOf("World"));' },
    { id: 5, title: "Replace Text", description: 'Replace "bad" with "good" in "This is a bad day". Log the result.', starterCode: "// Your code here\n", expectedOutput: "This is a good day", hint: "Use .replace('bad', 'good')", solution: 'let str = "This is a bad day";\nconsole.log(str.replace("bad", "good"));' },
    { id: 6, title: "Split and Count", description: 'Split "apple,banana,cherry,date" by comma. Log the number of items.', starterCode: "// Your code here\n", expectedOutput: "4", hint: "Split gives an array, use .length", solution: 'let str = "apple,banana,cherry,date";\nconsole.log(str.split(",").length);' },
    { id: 7, title: "Trim Whitespace", description: 'Trim "   Hello!   " and log the result.', starterCode: "// Your code here\n", expectedOutput: "Hello!", hint: "Use .trim()", solution: 'let str = "   Hello!   ";\nconsole.log(str.trim());' },
    { id: 8, title: "Template Literal", description: 'Declare `item = "book"`, `price = 15`. Log "The book costs $15" using a template literal.', starterCode: "// Your code here\n", expectedOutput: "The book costs $15", hint: "Use `The ${item} costs $${price}`", solution: 'let item = "book";\nlet price = 15;\nconsole.log(`The ${item} costs $${price}`);' },
    { id: 9, title: "Repeat a String", description: 'Use `.repeat()` to log "Ha" repeated 3 times.', starterCode: "// Your code here\n", expectedOutput: "HaHaHa", hint: "Use 'Ha'.repeat(3)", solution: "console.log(\"Ha\".repeat(3));" },
    { id: 10, title: "Character Access", description: 'Log the first and last character of "JavaScript" on separate lines.', starterCode: "// Your code here\n", expectedOutput: "J\nt", hint: "Use charAt(0) and charAt(str.length - 1)", solution: 'let str = "JavaScript";\nconsole.log(str.charAt(0));\nconsole.log(str.charAt(str.length - 1));' }
  ]
};
