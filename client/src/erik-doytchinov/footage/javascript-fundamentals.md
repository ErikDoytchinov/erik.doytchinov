
# JavaScript Fundamentals

JavaScript is the language of the web, powering everything from simple animations to complex single-page applications. Whether you're new to coding or sharpening your skills, understanding these core principles will help you write cleaner and more efficient code.

---

## Table of Contents

1. **Variables & Data Types**
2. **Operators**
3. **Functions**
4. **Scope & Closures**
5. **Objects & Prototypes**
6. **ES6+ Features**

---

## 1. Variables & Data Types

JavaScript provides different variable declarations:

- **`var`**: Function-scoped, can lead to unexpected behavior if you’re not careful.
- **`let`**: Block-scoped, recommended for re-assignable variables.
- **`const`**: Block-scoped, must be initialized. Cannot be re-assigned.

Common data types include:

- **Number** (`42`, `3.14`)
- **String** (`"hello"`, `'world'`)
- **Boolean** (`true`, `false`)
- **Null** (intentional empty value)
- **Undefined** (no assigned value)
- **Object** (arrays, functions, objects)

```javascript
let username = "Alice";
const pi = 3.14;
var age = 25;
```

---

## 2. Operators

JavaScript supports a range of operators for arithmetic, comparison, and logical operations.

- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Comparison: `===` (strict equality), `==` (loose equality), `!=`, `!==`, `>`, `<`
- Logical: `&&`, `||`, `!`

```javascript
console.log(3 + 2);       // 5
console.log(10 === "10"); // false
console.log(true && false); // false
```

---

## 3. Functions

Functions are reusable blocks of code. They can be defined using function declarations, function expressions, or arrow functions (ES6+).

```javascript
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

console.log(greet("Alice")); // Hello, Alice!
console.log(add(3, 5));      // 8
```

---

## 4. Scope & Closures

- **Scope**: Determines where variables are accessible. JavaScript uses function and block scope for `let` and `const`.
- **Closure**: A function that “remembers” its surrounding state. Essentially, an inner function has access to the variables of its outer function, even after the outer function returns.

```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

Here, `count` lives on in the returned function’s closure.

---

## 5. Objects & Prototypes

Everything in JavaScript (except primitive data types) is an object or inherits from `Object`. Prototypes define a way for objects to share properties and methods.

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, I’m ${this.name}.`);
  },
};

person.greet(); // Hello, I’m Alice.
```

When you create multiple objects, you can use prototypes (or ES6 classes) to share functionality.

---

## 6. ES6+ Features

Modern JavaScript has many new features:

- **Arrow Functions**: Shorter syntax for function expressions.
- **Template Literals**: Use backticks for multiline strings or interpolation:

```javascript
const greeting = `Hello, ${name}!`;
```

- **Destructuring**: Easily extract values from arrays or objects:

```javascript
const [first, second] = [10, 20];
const { name, age } = { name: "Bob", age: 30 };
```

- **Spread & Rest**: The `...` syntax can expand or collect items in arrays/objects:

```javascript
const numbers = [1, 2, 3];
const more = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
```

- **Modules**: Import/export functionality for cleaner code organization.

---

## Final Thoughts

Mastering these fundamentals sets the stage for exploring the vast JavaScript ecosystem—frameworks like React, Vue, or Angular, and back-end solutions like Node.js.

Remember: The best way to learn is by building. Write small, focused pieces of code to solidify concepts. Good luck on your JavaScript journey!
