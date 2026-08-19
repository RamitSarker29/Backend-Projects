# 💰 CLI Expense Tracker

A simple **command-line Expense Tracker** built with Node.js.

This project allows users to add, list, delete, and calculate the total of their expenses directly from the terminal. Expense data is stored persistently in a local `expenses.json` file.

---

## 🚀 Features

* ➕ Add expenses with a product name and price
* 📋 List all saved expenses
* 🗑️ Delete an expense by its number
* 💰 Calculate the total amount spent
* 💾 Persist expense data using a JSON file
* ❌ Display a message when the expense list is empty
* 🔢 Automatically number expenses when listing them
* ⚡ Use terminal commands to interact with the application

---

## 🛠️ Technologies Used

* Node.js
* JavaScript
* File System (`fs`) module
* JSON
* Command Line Arguments
* Array Methods
* `reduce()`
* `filter()`
* `forEach()`
* `try...catch`

---

## ▶️ How To Use

Run the commands from the project directory.

### ➕ Add an Expense

```bash
node expense.js add "Food" 250
```

Output:

```text
Added to the List -->Food - $250
```

The expense is saved to `expenses.json`.

---

### 📋 List Expenses

```bash
node expense.js list
```

Example:

```text
1. Food : $250
2. Transport : $100
3. Books : $500
```

If there are no expenses:

```text
The List is Empty
```

---

### 💰 Calculate Total

```bash
node expense.js total
```

Example:

```text
Your Total is: $850.
```

The application uses `reduce()` to add all the saved expense prices together.

---

### 🗑️ Delete an Expense

Delete an expense using its number:

```bash
node expense.js delete 2
```

Example:

```text
Transport: $100 Deleted
```

The selected expense is removed and the updated list is saved back to `expenses.json`.

---

## 🧠 How It Works

The application follows a simple data flow:

```text
             Terminal Command
                    ↓
              process.argv
                    ↓
            Application Logic
                    ↓
              loadExpenses()
                    ↓
              expenses array
                    ↓
             Modify / Calculate
                    ↓
              saveExpenses()
                    ↓
             expenses.json
```

### Adding

```text
Terminal
   ↓
add command
   ↓
load expenses
   ↓
add new expense
   ↓
save updated array
   ↓
expenses.json
```

### Listing

```text
Terminal
   ↓
list command
   ↓
load expenses
   ↓
forEach()
   ↓
display expenses
```

### Total

```text
Terminal
   ↓
total command
   ↓
load expenses
   ↓
reduce()
   ↓
calculate total
   ↓
display result
```

### Deleting

```text
Terminal
   ↓
delete command
   ↓
load expenses
   ↓
find selected expense
   ↓
filter it out
   ↓
save filtered array
   ↓
expenses.json
```

---

## 💾 Data Storage

Expenses are stored in:

```text
expenses.json
```

Example:

```json
[
    {
        "productName": "Food",
        "productPrice": "250"
    },
    {
        "productName": "Books",
        "productPrice": "500"
    }
]
```

The application reads this file when it needs the current expenses and writes the updated array whenever an expense is added or deleted.

---

## 📂 Project Structure

```text
expense-tracker/
│
├── expense.js
└── expenses.json
```

### `expense.js`

Contains the application logic for:

* Loading expenses
* Saving expenses
* Adding expenses
* Listing expenses
* Calculating the total
* Deleting expenses
* Processing terminal commands

### `expenses.json`

Acts as the local storage for the application's expense data.

---

## 📚 Concepts Practiced

* Node.js fundamentals
* `require()`
* File System module
* `fs.readFileSync()`
* `fs.writeFileSync()`
* Buffers
* `.toString()`
* `JSON.parse()`
* `JSON.stringify()`
* `process.argv`
* Command-line arguments
* Functions
* Arrow functions
* Objects
* Arrays
* `.push()`
* `.forEach()`
* `.filter()`
* `.reduce()`
* Array indexes
* `parseInt()`
* `parseFloat()`
* Template literals
* `try...catch`
* Error handling
* Persistent data
* CLI applications

---

## 💡 What I Learned

This project helped me practice:

* Building a command-line application with Node.js
* Reading and writing files
* Using JSON as simple persistent storage
* Working with command-line arguments
* Storing related information inside objects
* Adding objects to arrays
* Removing items from arrays with `filter()`
* Calculating values with `reduce()`
* Looping through data with `forEach()`
* Working with array indexes
* Converting strings into numbers
* Handling an empty data list
* Managing application data between program executions
* Breaking an application into separate functions
* Debugging JavaScript errors

---

## 🧠 Important Concepts

### `filter()`

The delete functionality uses `filter()` to create a new array without the selected expense.

```javascript
const filtered = expenses.filter((expense, index) => {
    return index !== expenseNumber - 1
})
```

### `reduce()`

The total functionality uses `reduce()` to calculate the total expense:

```javascript
const total = expenses.reduce(
    (total, expense) => total + parseFloat(expense.productPrice),
    0
)
```

---

## 🎯 Future Improvements

Possible improvements:

* ✏️ Edit an existing expense
* 📅 Add expense dates
* 🏷️ Add expense categories
* 🔍 Search expenses
* 📊 Show spending by category
* 📈 Display monthly spending
* 💵 Add income tracking
* ⚠️ Validate invalid prices
* ❌ Handle invalid expense numbers
* 🧹 Add a command to clear all expenses
* 📦 Add `package.json` and npm scripts

---

## 🎯 Purpose

This project is part of my **backend development learning journey**.

The goal was to build something slightly more complex than a Todo CLI while practicing the same Node.js fundamentals in a different problem.

Through this project, I practiced working with **files, JSON, command-line arguments, arrays, objects, and common array methods** while building an application that maintains persistent data.

---

## 👨‍💻 Author

**Ramit Sarker**
