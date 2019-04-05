const mysql = require('mysql');
const inquirer = require('inquirer');
const DBLayer = require('./database.js');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

const dbLayer = new DBLayer(connection);

connection.connect(function (err) {
  if (err) throw err;

  console.log("\n\n");
  console.log(`
          Hi! Welcome to BAMazon!
  `);

  buy();
});

function buy() {
  dbLayer.readProducts(function (err, res) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "productId",
          type: "input",
          message: "What's the ID of the item you would like to buy?"
        },
        {
          name: "qty",
          type: "input",
          message: "How many would you like?",
          validate: function (value) {
            return !isNaN(value) && value > 0;
          }
        }
      ])
      .then(function (answer) {

        let storeQty = 0;
        let chosenItem;
        for (let i = 0; i < res.length; i++) {
          if (res[i].productId == answer.productId) {
            chosenItem = res[i];
            storeQty = res[i].qty;
          };
        };

        let remainingQty = parseInt(storeQty - answer.qty);

        if (remainingQty < 0) {
          console.log(`

Insufficient quantity!
Sorry, you cannot buy more than ${storeQty}.

            `);
          restart();
        } else {

          // show the total cost of their purchase
          let total = parseFloat(chosenItem.price * answer.qty);
          console.log(`

Your purchase has been processed! Your total is $${total}.

        `);

          dbLayer.checkout(answer, remainingQty, function (err, res) {
            if (err) throw err;
            restart();
          });
        };
      });
  });
};

function restart() {
  inquirer
    .prompt([
      {
        name: "confirm",
        type: "confirm",
        message: "Would you like to continue shopping?"
      }
    ])
    .then(function (answer) {
      switch (answer.confirm) {
        case true:
          return buy();
        case false:
          return quit();
      };
    });
};

function quit() {
  console.log("\nThank you come again!\n");
  connection.end();
};