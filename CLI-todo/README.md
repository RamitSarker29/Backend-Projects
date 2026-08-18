# 📝 CLI Todo App

A simple **command-line Todo application** built with Node.js.

This project allows users to add, list, and remove tasks directly from the terminal. Tasks are stored in a local `tasks.json` file so they persist between commands. 

---

## 🚀 Features

* ➕ Add new tasks
* 📋 List all saved tasks
* 🗑️ Remove tasks by their task number
* 💾 Persist tasks using a JSON file
* 🖥️ Interact with the application through the terminal
* 🔢 Automatically number tasks when listing them
* ⚡ Simple command-based interface

---

## 🛠️ Technologies Used

* Node.js
* JavaScript
* File System (`fs`) module
* JSON
* Command Line Arguments
* Array Methods
* Functions
* `try...catch`
* File Read/Write Operations

---

## ▶️ How To Use

Run the commands from the project directory.

### ➕ Add a Task

```bash
node todo.js add "buy milk"
```

Output:

```text
Task Added: buy milk
```

The task is stored in `tasks.json`. 

---

### 📋 List Tasks

```bash
node todo.js list
```

Example:

```text
1 - learn dsa
2 - learn dev
3 - sleep
4 - clg
```

The application reads the saved tasks and displays them with their task numbers. 

---

### 🗑️ Remove a Task

Remove a task by providing its number:

```bash
node todo.js remove 2
```

Example output:

```text
Task 2 - learn dev Deleted
```

The program finds the selected task, creates a new array without it, and saves the updated list. 

---

## 🧠 How It Works

The application has three main operations:

```text
                CLI Command
                     ↓
              process.argv
                     ↓
          ┌──────────┼──────────┐
          ↓          ↓          ↓
         add        list      remove
          ↓          ↓          ↓
       Add task    Read tasks   Filter task
          ↓          ↓          ↓
          └──────────┼──────────┘
                     ↓
                tasks.json
```

The command and its argument are received from the terminal using:

```javascript
const command = process.argv[2]
const argument = process.argv[3]
```

The program then decides which operation to perform based on the command. 

---

## 💾 Data Storage

Tasks are stored inside:

```text
tasks.json
```

For example:

```json
[
    {
        "task": "learn dsa"
    },
    {
        "task": "learn dev"
    },
    {
        "task": "sleep"
    },
    {
        "task": "clg"
    }
]
```

The current task data is stored in this JSON file. 

---

## 📂 Project Structure

```text
backend/
│
├── todo.js
└── tasks.json
```

### `todo.js`

Contains the application logic for:

* Loading tasks
* Saving tasks
* Adding tasks
* Removing tasks
* Listing tasks
* Processing terminal commands

### `tasks.json`

Acts as the application's simple local data storage.

---

## 📚 Concepts Practiced

* Node.js
* CommonJS `require()`
* File System module
* `fs.readFileSync()`
* `fs.writeFileSync()`
* JSON parsing
* JSON stringifying
* Command-line arguments
* `process.argv`
* Functions
* Arrow functions
* Arrays
* `.push()`
* `.filter()`
* `.forEach()`
* Array indexes
* `try...catch`
* Error handling
* Reading files
* Writing files
* Persistent data
* CLI applications

---

## 💡 What I Learned

This project helped me understand how a JavaScript program can work **outside the browser** using Node.js.

I practiced:

* Reading data from a file
* Writing data to a file
* Using JSON as simple data storage
* Passing information through terminal commands
* Understanding `process.argv`
* Creating a command-based application
* Adding and removing objects from arrays
* Using `filter()` to remove items
* Keeping application data between executions
* Handling missing files with `try...catch`
* Connecting JavaScript logic with the file system

---

## 🔄 Data Flow

### Adding

```text
Terminal
   ↓
add command
   ↓
load tasks
   ↓
add new task
   ↓
save tasks
   ↓
tasks.json
```

### Removing

```text
Terminal
   ↓
remove command
   ↓
load tasks
   ↓
find task number
   ↓
filter it out
   ↓
save updated tasks
   ↓
tasks.json
```

### Listing

```text
Terminal
   ↓
list command
   ↓
load tasks
   ↓
loop through tasks
   ↓
display tasks
```

---

## 🎯 Future Improvements

Possible improvements:

* ✏️ Edit existing tasks
* ✅ Mark tasks as completed
* 🔍 Search tasks
* 🧹 Clear all tasks
* 📅 Add due dates
* 🏷️ Add task categories
* ⚠️ Handle invalid task numbers
* ❌ Handle removing a task that doesn't exist
* 📊 Show the total number of tasks
* 🎨 Improve CLI output
* 📦 Add `package.json` and npm scripts

---

## 🎯 Purpose

This project is part of my **backend and JavaScript learning journey**.

The goal was to move beyond browser-based JavaScript and understand how Node.js can interact with the file system, receive terminal input, process commands, and persist application data.

---

## 👨‍💻 Author

**Ramit Sarker**
