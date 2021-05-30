const express = require("express");
const routes = require("./routes");
const path = require("path");

const app = express();
//cargar archivos estaticos
app.use(express.static("public"));

//habilitar pug
app.set("view engine", "pug");
//añadir carpertas de las vistas
app.set("views", path.join(__dirname, "./views"));
app.use("/", routes());

app.listen(3000);
