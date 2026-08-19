# ⚙️ Backend Projects

Welcome to my **Backend Projects** repository!

This repository contains a collection of projects I'm building while learning **backend development and Node.js**.

The projects focus on understanding how JavaScript works outside the browser, how programs interact with the file system, how command-line applications work, and how data can be stored and managed.

---

## 🚀 Purpose

The goal of this repository is to:

* Learn backend development by building projects
* Understand Node.js fundamentals
* Practice writing JavaScript outside the browser
* Work with the file system
* Build command-line applications
* Understand how data can be stored and retrieved
* Practice working with JSON
* Improve problem-solving skills
* Gradually move from simple scripts to larger backend applications
* Track my backend development journey

---

## 🛠️ Technologies Used

* Node.js
* JavaScript
* CommonJS
* File System (`fs`)
* JSON
* Command Line Arguments
* Arrays
* Objects
* Functions
* Error Handling
* File Read/Write Operations

More technologies will be added as the repository grows.

---

## 📂 Projects

| Project                      | Description                                                                                                                                                           |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 📝 CLI Todo App              | A command-line Todo application that allows users to add, list, and remove tasks. Tasks are stored persistently in a JSON file.                                       |
| 💰 CLI Expense Tracker       | A command-line Expense Tracker that allows users to add, list, delete, and calculate the total of their expenses. Expense data is stored persistently in a JSON file. |
| 🚧 More Projects Coming Soon | This repository will be expanded with more backend projects as I continue learning.                                                                                   |

---

## 📝 CLI Todo App

The first project in this repository is a simple command-line Todo application built with Node.js.

It allows tasks to be managed directly from the terminal.

### Available Commands

Add a task:

```bash
node todo.js add "buy milk"
```

List tasks:

```bash
node todo.js list
```

Remove a task:

```bash
node todo.js remove 2
```

The application stores tasks inside:

```text
tasks.json
```

The Todo App helped me practice working with Node.js, the file system, JSON data, command-line arguments, arrays, and array methods.

---

## 💰 CLI Expense Tracker

The second project is a command-line Expense Tracker built with Node.js.

It allows users to manage expenses directly from the terminal.

### Available Commands

Add an expense:

```bash
node expense.js add "Food" 250
```

List expenses:

```bash
node expense.js list
```

Calculate total expenses:

```bash
node expense.js total
```

Delete an expense:

```bash
node expense.js delete 2
```

The application stores expense data inside:

```text
expenses.json
```

The Expense Tracker helped me practice working with objects, `filter()`, `forEach()`, `reduce()`, number conversion, and persistent JSON data.

---

## 🧠 How The Backend Projects Work

The projects in this repository are designed to gradually introduce backend concepts.

The current projects follow a similar basic flow:

```text
User
  ↓
Terminal Command
  ↓
Node.js
  ↓
Application Logic
  ↓
Load Data
  ↓
Modify / Process Data
  ↓
Save Data
```

For example, adding an expense:

```text
node expense.js add "Food" 250
              ↓
          process.argv
              ↓
       addExpenses()
              ↓
       loadExpenses()
              ↓
       Add new expense
              ↓
       saveExpenses()
              ↓
        expenses.json
```

---

## 📚 Concepts Practiced

* Node.js fundamentals
* Running JavaScript with Node.js
* CommonJS modules
* `require()`
* File System module
* `fs.readFileSync()`
* `fs.writeFileSync()`
* Reading files
* Writing files
* Buffers
* `.toString()`
* JSON
* `JSON.parse()`
* `JSON.stringify()`
* Command-line arguments
* `process.argv`
* Functions
* Arrow functions
* Variables
* `const` and `let`
* Arrays
* Objects
* `.push()`
* `.filter()`
* `.forEach()`
* `.reduce()`
* Array indexes
* `parseInt()`
* `parseFloat()`
* Template literals
* Conditional statements
* `try...catch`
* Error handling
* Persistent data
* Command-line applications
* Basic application state

---

## 💡 What I'm Learning

Through these projects, I'm learning how backend programs work without relying on a browser.

I'm currently practicing:

* Running JavaScript using Node.js
* Working with the file system
* Reading and writing data
* Using JSON for simple data storage
* Receiving input from the terminal
* Building command-line applications
* Managing data using arrays and objects
* Creating reusable functions
* Handling errors
* Using array methods to manipulate data
* Calculating values from stored data
* Understanding how application logic interacts with stored data
* Breaking larger problems into smaller functions
* Debugging problems and understanding why they happen

---

## 🎯 Learning Approach

I'm building these projects to **understand the concepts rather than simply copy code**.

For each project, I'm trying to:

1. Understand the problem
2. Break it into smaller parts
3. Write the logic
4. Test the application
5. Debug errors
6. Understand why the solution works
7. Improve the project

The projects may start simple, but the goal is to gradually increase their complexity as my understanding improves.

---

## 🔮 Future Projects

As I continue learning backend development, this repository will grow to include projects involving concepts such as:

* 🌐 HTTP servers
* 🚏 Routing
* 📦 npm packages
* 📡 APIs
* 🔗 REST APIs
* 🗄️ Databases
* 🔐 Authentication
* 👤 User management
* 🛡️ Middleware
* ⚡ Express.js
* 🔄 CRUD operations
* 🧪 API testing
* 🌍 Deployment

These will be added gradually as I learn and build them.

---

## 📈 Progress

This repository represents my transition from **frontend JavaScript to backend development**.

The projects are intentionally built incrementally so that each one introduces new concepts while reinforcing things I've already learned.

```text
JavaScript
    ↓
Node.js
    ↓
File System
    ↓
CLI Applications
    ↓
APIs
    ↓
Databases
    ↓
Express
    ↓
Authentication
    ↓
Larger Backend Applications
```

---

## 📌 Note

This repository documents my **backend development learning journey**.

The projects are not intended to be perfect or production-ready. They represent what I'm learning at each stage.

As my knowledge improves, I plan to revisit older projects, refactor them, improve their structure, and apply better practices.

The goal is progress — **learning by building, breaking, debugging, and rebuilding.**

---

## 👨‍💻 Author

**Ramit Sarker**
