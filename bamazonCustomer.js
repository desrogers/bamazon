const mysql = require('mysql');
const inquirer = require ('inquirer');
const cTable = require('console.table');
const DBLayer = require('./database.js');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

const dbLayer = new DBLayer(connection);

connection.connect(function(err) {
  if (err) throw err;
  dbLayer.readProducts();
});


//display all items from database products table (in table(id/name/price/qty) >> using console.table npm package)
//connection.query(SELECT WHERE…)
//NEW console.table npm package NEW//
// inquirer
// inquirer.prompt ().then()
// .validate()????? For must be a number equal to the number of items in the table printed through console.table
// THIS IS SIMILAR TO THE SOLUTION ERIC SHOWED FOR GREATBAY inClassActivity
// --look for isNaN for quantity must be a number
// If console.table takes an array- we can use array.length for the validation check  where 0 > inquirerAnswer > array.length

   // prompt "Which item would you like to buy"
   // prompt "How many would you like"
// question? [Type ‘Q’ to Quit]. << not in instructions, but how does //program end if we recall wouldYouLikeToBuy()

// read value of selection based on number input used as index of the array passed to console.table (array[response.itemSelected].itemId)

   // read data from the table
       // if customerQuantity <= inventory then allow the sale
           // update SQL Database to reflect current inventory
// ^probably its own function (purchase(itemId, quantity);

           // show the total cost of their purchase
               // ParseFloat ( total = itemCost * customer Quantity )
			//print success message with total cost of purchase
       // else
           // log `Insufficient quantity!`
           // prevent order from going through
           // offer option to buy what's available
		// if buy whats available>>>
		// calls purchase() with parameters (itemId, qty as recieved from database query)

// else just recall the function

// In both cases - reprompt with print updated table, prompt wouldYouLikeToBuy();
