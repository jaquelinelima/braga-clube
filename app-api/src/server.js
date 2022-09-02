const app = require("./app.js");
const path = require('path')
require("dotenv").config({path: path.resolve(__dirname + "/config/.env")});

const port = process.env.SERVER_PORT || 8080;
const host = process.env.SERVER_HOST || "localhost"

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
    console.log(`http://${host}:${port}`);
});