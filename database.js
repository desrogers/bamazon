const cTable = require('console.table');

const DBLayer = function DBLayer(connection) {
  this.readProducts = function (callback) {

    connection.query(`select * from products`, function (err, res) {
      if (err) throw err;

      const inventory = cTable.getTable(res);
      console.log(inventory);
      callback(err, res);

    })
  };

  this.checkout = function (answer, remainingQty, callback) {
    
    connection.query(
      `UPDATE products SET ? WHERE ?`,
      [
        {
          qty: remainingQty
        },
        {
          productId: answer.productId
        }
      ],
      function (err, res) {
        if (err) throw err;
        callback(err, res);
      })
  };
}

module.exports = DBLayer;
