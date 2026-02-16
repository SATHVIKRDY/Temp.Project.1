import { Module } from "../types";

export const objectsModule: Module = {
  id: "objects",
  title: "Objects",
  description: "Create, access, and manipulate objects — the backbone of JavaScript.",
  icon: "🧱",
  topics: [
    {
      id: "creating-objects",
      title: "Creating Objects",
      theory: `Objects store data as **key-value pairs**.

\`\`\`js
let user = {
  name: "Alice",
  age: 25,
  isActive: true
};

console.log(user);
\`\`\`

Keys are strings (quotes optional if valid identifier). Values can be any type.`
    },
    {
      id: "accessing-properties",
      title: "Accessing Properties",
      theory: `Two ways to access object properties:

**Dot notation** (preferred for known keys):
\`\`\`js
console.log(user.name);  // "Alice"
\`\`\`

**Bracket notation** (for dynamic/special keys):
\`\`\`js
console.log(user["age"]); // 25
let key = "name";
console.log(user[key]);  // "Alice"
\`\`\``
    },
    {
      id: "object-methods",
      title: "Object Methods & Built-ins",
      theory: `Objects can have functions as values — called **methods**.

\`\`\`js
let calc = {
  add: function(a, b) { return a + b; },
  multiply(a, b) { return a * b; } // shorthand
};
console.log(calc.add(2, 3)); // 5
\`\`\`

**Built-in methods:**
\`\`\`js
let obj = { a: 1, b: 2, c: 3 };
Object.keys(obj);    // ["a", "b", "c"]
Object.values(obj);  // [1, 2, 3]
Object.entries(obj); // [["a",1], ["b",2], ["c",3]]
\`\`\``
    },
    {
      id: "destructuring",
      title: "Destructuring",
      theory: `Extract properties into variables in one line:

\`\`\`js
let user = { name: "Alice", age: 25, city: "NYC" };

let { name, age } = user;
console.log(name); // "Alice"
console.log(age);  // 25

// Rename while destructuring:
let { name: userName } = user;
console.log(userName); // "Alice"

// Default values:
let { country = "USA" } = user;
console.log(country); // "USA"
\`\`\``
    }
  ],
  problems: [
    { id: 1, title: "Create an Object", description: 'Create a `person` object with `name: "John"`, `age: 30`. Log the name.', starterCode: "// Your code here\n", expectedOutput: "John", hint: "Use dot notation to access name", solution: 'let person = { name: "John", age: 30 };\nconsole.log(person.name);' },
    { id: 2, title: "Add a Property", description: 'Create `car = { brand: "Toyota" }`. Add `color: "red"`. Log the object using JSON.stringify.', starterCode: "// Your code here\n", expectedOutput: '{"brand":"Toyota","color":"red"}', hint: "car.color = 'red'", solution: 'let car = { brand: "Toyota" };\ncar.color = "red";\nconsole.log(JSON.stringify(car));' },
    { id: 3, title: "Object.keys", description: 'Get all keys of `{ x: 1, y: 2, z: 3 }` and log the result as a string (join with comma).', starterCode: "// Your code here\n", expectedOutput: "x,y,z", hint: "Object.keys(obj).join(',')", solution: 'let obj = { x: 1, y: 2, z: 3 };\nconsole.log(Object.keys(obj).join(","));' },
    { id: 4, title: "Object.values Sum", description: 'Calculate the sum of all values in `{ a: 10, b: 20, c: 30 }`. Log it.', starterCode: "// Your code here\n", expectedOutput: "60", hint: "Use Object.values() and reduce", solution: "let obj = { a: 10, b: 20, c: 30 };\nconsole.log(Object.values(obj).reduce((sum, v) => sum + v, 0));" },
    { id: 5, title: "Destructuring Basics", description: 'Destructure `name` and `age` from `{ name: "Alice", age: 25, city: "NYC" }`. Log both on separate lines.', starterCode: "// Your code here\n", expectedOutput: "Alice\n25", hint: "let { name, age } = obj;", solution: 'let obj = { name: "Alice", age: 25, city: "NYC" };\nlet { name, age } = obj;\nconsole.log(name);\nconsole.log(age);' },
    { id: 6, title: "Bracket Notation", description: 'Access the property `"full name"` (with space) from `{ "full name": "John Doe" }`. Log it.', starterCode: "// Your code here\n", expectedOutput: "John Doe", hint: "Use bracket notation for keys with spaces", solution: 'let obj = { "full name": "John Doe" };\nconsole.log(obj["full name"]);' },
    { id: 7, title: "Nested Object", description: 'Create `student = { name: "Bob", scores: { math: 90, science: 85 } }`. Log the math score.', starterCode: "// Your code here\n", expectedOutput: "90", hint: "student.scores.math", solution: 'let student = { name: "Bob", scores: { math: 90, science: 85 } };\nconsole.log(student.scores.math);' },
    { id: 8, title: "Check Property Exists", description: 'Check if `"email"` exists in `{ name: "Alice", age: 25 }`. Log the boolean result.', starterCode: "// Your code here\n", expectedOutput: "false", hint: 'Use "email" in obj', solution: 'let obj = { name: "Alice", age: 25 };\nconsole.log("email" in obj);' },
    { id: 9, title: "Delete Property", description: 'Create `obj = { a: 1, b: 2, c: 3 }`. Delete property `b`. Log Object.keys joined by comma.', starterCode: "// Your code here\n", expectedOutput: "a,c", hint: "Use delete obj.b", solution: 'let obj = { a: 1, b: 2, c: 3 };\ndelete obj.b;\nconsole.log(Object.keys(obj).join(","));' },
    { id: 10, title: "Object.entries", description: 'Log each key-value pair of `{ x: 10, y: 20 }` in format `"key: value"` on separate lines.', starterCode: "// Your code here\n", expectedOutput: "x: 10\ny: 20", hint: "Use Object.entries and forEach", solution: 'let obj = { x: 10, y: 20 };\nObject.entries(obj).forEach(([k, v]) => console.log(`${k}: ${v}`));' }
  ]
};
