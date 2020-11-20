const customExpress = require("./config/customExpress");

const app = customExpress();

app.listen(3333, () => console.log("Server running on http://localhost:3333"));