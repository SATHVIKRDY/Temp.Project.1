

# JavaScript Learning Platform — "JS Mastery"

## Overview
A dark-themed, VS Code-inspired interactive JavaScript learning website built with React and Tailwind CSS. Each module contains brief theory explanations followed by 8-10 hands-on coding problems solved in a built-in code editor with live output.

---

## Design & Theme
- **Dark code editor aesthetic** — dark background (#1e1e2e), syntax-highlighting-inspired accent colors, monospace fonts for code
- **VS Code-like layout** — sidebar navigation, split-pane editor + output view
- Clean typography for theory sections with code snippets styled like editor blocks

---

## Pages & Navigation

### 1. Landing Page
- Hero section with title "JS Mastery" and tagline
- Visual grid/list of all 10 modules with icons and completion indicators (visual only, no persistence)
- Quick "Start Learning" CTA

### 2. Module Overview Page
- Lists all topics within a module (e.g., Variables module → var, let, const, naming rules, hoisting basics)
- Each topic shown as a clickable card

### 3. Topic Learning Page (Theory + Practice)
- **Top section — Theory**: Brief, beginner-friendly explanation of the topic with inline code examples styled like editor snippets. Concise paragraphs, bullet points, and highlighted key terms
- **Bottom section — Practice**: Navigate through 8-10 coding problems for that topic/module

### 4. Practice Problem View (Code Editor + Output)
- **Split-pane layout**:
  - **Left panel**: Problem description — what to solve, expected output, hints
  - **Right panel (top)**: Code editor textarea with monospace font, line numbers feel, dark theme — user writes JavaScript here
  - **Right panel (bottom)**: Output console — displays the result when user clicks "Run Code"
- **Run button**: Executes the user's JavaScript using `new Function()` or `eval` safely, captures `console.log` output and displays it in the output panel
- **Check Answer button**: Compares user output against expected output and shows success/failure feedback
- **Navigation**: Previous / Next problem buttons, problem counter (e.g., "Problem 3 of 10")

---

## Modules & Content

Each module includes theory explanations + 8-10 progressive coding problems:

1. **Variables** — var, let, const, scope basics, naming conventions
2. **Data Types** — number, string, boolean, null, undefined, typeof
3. **Operators** — arithmetic, assignment, comparison, logical, ternary
4. **Strings** — creation, template literals, common methods (length, slice, indexOf, replace, split, trim, toUpperCase, etc.)
5. **Objects** — creation, accessing properties, methods, Object.keys/values/entries, destructuring
6. **Arrays & Methods** — creation, push/pop/shift/unshift, map, filter, reduce, find, indexOf, splice, slice, spread
7. **Control Flow** — if, if-else, else-if chains, switch statement, truthy/falsy values
8. **Loops** — for, while, do-while, for...of, for...in, forEach — when to use which
9. **Functions** — declaration, expression, arrow functions, parameters, return values, scope, callbacks basics
10. **DOM** — selecting elements, modifying content/styles, event listeners, creating/removing elements (theory-heavy with simulated examples since there's no real DOM sandbox)

---

## Code Editor Features
- Dark-themed textarea with monospace font mimicking a code editor
- "Run Code" button that executes JavaScript and captures console.log output
- Output panel shows results or error messages in red
- "Check Answer" compares output to expected result and shows ✅ or ❌ with feedback
- "Show Hint" button for each problem
- "Show Solution" toggle to reveal the answer after attempting

---

## User Flow
1. User lands on homepage → picks a module
2. Sees module overview with topics listed → picks a topic
3. Reads the brief theory with code examples
4. Clicks "Start Practice" → enters the code editor view
5. Solves problems one by one, running code and checking answers
6. Navigates to next problem or back to module overview

---

## Key UX Details
- No backend, no login, no progress saving — pure client-side
- All theory content and problems are hardcoded in the React app
- Responsive but optimized for desktop (code editing is better on larger screens)
- Smooth transitions between sections
- Toast notifications for success/error on answer checking

