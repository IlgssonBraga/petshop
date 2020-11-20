const customExpress = require("./config/customExpress");
const { connection } = require("./infra/database");
const { Tables } = require('./infra/tables');

const tables = new Tables()

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connection to the database was successfu!");
    const app = customExpress();

        tables.init(connection);

        app.listen(3333, () =>
   
        console.log("Server running on http://localhost:3333")
    
    );
  }
});
