# Week 0: Getting Started with JavaScript

## Introduction

This week we will introduce JavaScript (JS) in the context of data visualization. While JS is the language of the web, we use it here specifically for creating interactive, web-based visualizations using libraries like **D3.js**.

### Goals

- **Get started with JS**: Setup a simple environment.
- **Tools**: Browser Developer Tools and code editors (VS Code).
- **Basics**: Variables, Arrays, Objects, and Functions.
- **Introduction to D3**: Understanding the Data-Driven Documents library.

---

## Why Choose JavaScript?

If you want your visualization to live on the web and be interactive (clickable, zoomable, dynamic), JavaScript is the tool.

### Strengths

- **Interactivity**: Unmatched capability for creating dynamic user experiences.
- **Ubiquity**: Runs in every web browser; easy to share your work.
- **D3.js**: The industry standard for custom, complex data visualizations.

### Weaknesses

- **Complexity**: Building visualizations from scratch in D3 can be verbose and complex compared to R or Python.
- **Async**: Handling data often requires understanding asynchronous programming (Promises).

---

## Getting Started

You need:
1. **A Code Editor**: We recommend [Visual Studio Code (VS Code)](https://code.visualstudio.com/).
2. **A Browser**: Chrome, Firefox, or Edge.

### Your First HTML Page

Visualization usually starts with an HTML file.

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Viz</title>
</head>
<body>
    <h1>Hello World</h1>
    <script>
        console.log("Hello from JavaScript!");
    </script>
</body>
</html>
```

Open this file in your browser and check the **Console** (Right-click > Inspect > Console).

---

## JavaScript Basics

### Variables

```javascript
let x = 10;
const name = "Alice"; // Constant, cannot change
let isValid = true;

console.log(x, name);
```

### Arrays and Objects

JSON (JavaScript Object Notation) is the standard data format for the web.

```javascript
// Array
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => console.log(n * 2));

// Object
let student = { name: "Bob", age: 21 };
console.log(student.name);
```

### Functions

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("World"));
```

---

## Introduction to D3.js

**D3 (Data-Driven Documents)** allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document.

### Quick Example

To use D3, include it in your HTML:
`<script src="https://d3js.org/d3.v7.min.js"></script>`

Then select elements and change them:

```javascript
// Select the body and add a paragraph
d3.select("body")
  .append("p")
  .text("Hello from D3!");
```

In the coming weeks, we will use D3 to build bar charts, scatter plots, and more from scratch.
