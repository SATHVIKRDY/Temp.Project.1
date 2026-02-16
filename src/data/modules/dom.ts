import { Module } from "../types";

export const domModule: Module = {
  id: "dom",
  title: "DOM Manipulation",
  description: "Select, modify, and interact with HTML elements using JavaScript.",
  icon: "🌐",
  topics: [
    {
      id: "selecting-elements",
      title: "Selecting Elements",
      theory: `The DOM (Document Object Model) represents HTML as a tree of objects. You select elements to manipulate them.

\`\`\`js
// By ID (returns single element)
document.getElementById("myId");

// By CSS selector (first match)
document.querySelector(".myClass");
document.querySelector("#myId");
document.querySelector("div > p");

// All matches (returns NodeList)
document.querySelectorAll(".item");
document.querySelectorAll("p");
\`\`\`

\`querySelector\` is the most flexible — use any CSS selector.`
    },
    {
      id: "modifying-content",
      title: "Modifying Content & Styles",
      theory: `**Change text/HTML:**
\`\`\`js
let el = document.querySelector("#title");
el.textContent = "New Text";    // plain text
el.innerHTML = "<b>Bold</b>";   // HTML content
\`\`\`

**Change styles:**
\`\`\`js
el.style.color = "red";
el.style.fontSize = "20px";
el.style.backgroundColor = "#333";
\`\`\`

**Add/remove classes:**
\`\`\`js
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("dark-mode");
el.classList.contains("active"); // true/false
\`\`\``
    },
    {
      id: "event-listeners",
      title: "Event Listeners",
      theory: `Respond to user interactions:

\`\`\`js
let btn = document.querySelector("#myBtn");

btn.addEventListener("click", function() {
  console.log("Button clicked!");
});

// With arrow function
btn.addEventListener("click", () => {
  console.log("Clicked again!");
});

// Event object gives details
btn.addEventListener("click", (event) => {
  console.log(event.target);  // the clicked element
  console.log(event.type);    // "click"
});
\`\`\`

Common events: \`click\`, \`input\`, \`submit\`, \`keydown\`, \`mouseover\`, \`load\``
    },
    {
      id: "creating-elements",
      title: "Creating & Removing Elements",
      theory: `**Create and add elements:**
\`\`\`js
let newDiv = document.createElement("div");
newDiv.textContent = "I'm new!";
newDiv.classList.add("card");

document.body.appendChild(newDiv);       // add at end
parent.insertBefore(newDiv, reference);  // add before element
\`\`\`

**Remove elements:**
\`\`\`js
let el = document.querySelector("#old");
el.remove();  // modern way
// or
el.parentNode.removeChild(el);  // older way
\`\`\`

**Modify attributes:**
\`\`\`js
el.setAttribute("data-id", "123");
el.getAttribute("data-id");    // "123"
el.removeAttribute("data-id");
\`\`\``
    }
  ],
  problems: [
    { id: 1, title: "Select by ID", description: "Write code to select an element with id `\"title\"` using getElementById. Log `\"selected\"` to confirm you wrote the syntax correctly.", starterCode: "// Write the getElementById syntax\n// Since there's no actual DOM, just log to show you know it\n", expectedOutput: "selected", hint: "document.getElementById('title'); then console.log('selected')", solution: 'let el = document.getElementById("title");\nconsole.log("selected");' },
    { id: 2, title: "querySelector Syntax", description: 'Write 3 querySelector examples as strings and log them: select by class `.btn`, by id `#header`, by tag `p`. Log each selector string.', starterCode: "// Log each CSS selector string\n", expectedOutput: ".btn\n#header\np", hint: "Just log the selector strings", solution: 'console.log(".btn");\nconsole.log("#header");\nconsole.log("p");' },
    { id: 3, title: "textContent vs innerHTML", description: 'Explain the difference by logging: `"textContent: plain text only"` and `"innerHTML: can include HTML tags"`.', starterCode: "// Log the difference\n", expectedOutput: "textContent: plain text only\ninnerHTML: can include HTML tags", hint: "Just log both strings", solution: 'console.log("textContent: plain text only");\nconsole.log("innerHTML: can include HTML tags");' },
    { id: 4, title: "Style Properties", description: 'CSS uses kebab-case (background-color) but JS uses camelCase. Convert and log these JS property names: `backgroundColor`, `fontSize`, `borderRadius`.', starterCode: "// Log the camelCase versions\n", expectedOutput: "backgroundColor\nfontSize\nborderRadius", hint: "Just log the property names", solution: 'console.log("backgroundColor");\nconsole.log("fontSize");\nconsole.log("borderRadius");' },
    { id: 5, title: "classList Methods", description: 'Log the 4 classList methods: `"add"`, `"remove"`, `"toggle"`, `"contains"` on separate lines.', starterCode: "// Log each method name\n", expectedOutput: "add\nremove\ntoggle\ncontains", hint: "Just console.log each", solution: 'console.log("add");\nconsole.log("remove");\nconsole.log("toggle");\nconsole.log("contains");' },
    { id: 6, title: "Event Types", description: 'Log 5 common DOM event types on separate lines: click, input, submit, keydown, mouseover.', starterCode: "// Log event types\n", expectedOutput: "click\ninput\nsubmit\nkeydown\nmouseover", hint: "Just log the event name strings", solution: 'console.log("click");\nconsole.log("input");\nconsole.log("submit");\nconsole.log("keydown");\nconsole.log("mouseover");' },
    { id: 7, title: "Create Element Steps", description: 'Log the 3 steps to add an element: `"1. createElement"`, `"2. set content"`, `"3. appendChild"`.', starterCode: "// Log the steps\n", expectedOutput: "1. createElement\n2. set content\n3. appendChild", hint: "Log each step", solution: 'console.log("1. createElement");\nconsole.log("2. set content");\nconsole.log("3. appendChild");' },
    { id: 8, title: "Simulate Event Handler", description: 'Create a function `handleClick` that logs `"Button was clicked!"`. Call it to simulate a click event.', starterCode: "// Your code here\n", expectedOutput: "Button was clicked!", hint: "Just create the function and call it", solution: 'function handleClick() {\n  console.log("Button was clicked!");\n}\nhandleClick();' },
    { id: 9, title: "Attribute Methods", description: 'Log the 3 attribute methods: `"setAttribute"`, `"getAttribute"`, `"removeAttribute"` on separate lines.', starterCode: "// Log attribute methods\n", expectedOutput: "setAttribute\ngetAttribute\nremoveAttribute", hint: "Log each method name", solution: 'console.log("setAttribute");\nconsole.log("getAttribute");\nconsole.log("removeAttribute");' },
    { id: 10, title: "DOM Traversal", description: 'Log these DOM traversal properties: `"parentNode"`, `"children"`, `"firstChild"`, `"nextSibling"` on separate lines.', starterCode: "// Log traversal properties\n", expectedOutput: "parentNode\nchildren\nfirstChild\nnextSibling", hint: "Log each property name", solution: 'console.log("parentNode");\nconsole.log("children");\nconsole.log("firstChild");\nconsole.log("nextSibling");' }
  ]
};
