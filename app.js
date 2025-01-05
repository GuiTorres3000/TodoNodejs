const express = require("express");
const app = express();

moogose.connect("mongodb://localhost/todo_express", {
    usedNewUrlParser: true,
    usedUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true})) 

app.use(express.static("public"));
app.set("view engine", "ejs");
 
app.use(require("./routes/index"))

app.listen(3000, () => console.log("Server lendo na porta 3000"))