const fs = require('fs')
const filePath = './expenses.json'


const loadExpenses = ()=>{
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const validData = dataBuffer.toString()
        return JSON.parse(validData)
    } catch (error) {
        return []
    }
}



const addExpenses = (productName , productPrice) =>{
    const expenses = loadExpenses()
    expenses.push({productName,productPrice})
    
    saveExpenses(expenses)
    console.log(`Added to the List -->${productName} - $${productPrice}`)
    


}


const saveExpenses = (expenses) =>{
    const validData = JSON.stringify(expenses)
    fs.writeFileSync(filePath,validData)
}


const totalExpenses = () =>{
    const expenses = loadExpenses()
    const total = expenses.reduce((total , expense) => total + parseFloat(expense
        .productPrice) , 0)
    console.log(`Your Total is: $${total}.`)
  
    
}


const listExpenses = () =>{
    const expenses = loadExpenses()
    if (expenses.length === 0){
        console.log (`The List is Empty`)
        return
    }
    expenses.forEach((expense, index) =>
        console.log (`${index + 1}. ${expense.productName} : $${expense.productPrice}`))
}


const deleteExpenses = (expenseNumber)=>{
    const expenses = loadExpenses()
    const deletedExpense = expenses[expenseNumber - 1]
    const filtered = expenses.filter((expense , index) =>{
        return index !== expenseNumber - 1
    })
    console.log(`${deletedExpense.productName}: $${deletedExpense.productPrice} Deleted`)

    saveExpenses(filtered)
}
const command = process.argv[2]
const argumentName = process.argv[3]
const argumentPrice = process.argv[4]

if (command === 'add'){
    addExpenses(argumentName,argumentPrice)
}

else if (command === 'delete'){
    deleteExpenses(parseInt(argumentName))
}

else if (command === 'total'){
    totalExpenses()
}

else if (command === 'list'){
    listExpenses()
}

else {
    console.log('Invalid Command')
}