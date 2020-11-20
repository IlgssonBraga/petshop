class Tables {
  init(connection) {
    this.connection = connection;
    this.createServices();
  }

  createServices() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Services (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(50), service varchar(20) NOT NULL, status VARCHAR(20) NOT NULL, observations text, PRIMARY KEY(id))";

    this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Table created!");
      }
    });
  }
}

module.exports = { Tables };
