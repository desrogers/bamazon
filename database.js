const cTable = require('console.table');

const DBLayer = function DBLayer(connection){
    this.readProducts = function(callback){
        connection.query(`select * from products`, function(err, res){
          if (err) throw err;
          
          const inventory = cTable.getTable(res);
          console.log(inventory);
          })

        connection.end();
    }
}

module.exports = DBLayer;
