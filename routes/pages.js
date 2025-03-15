const express = require("express");
const app = express();
const port = 3000;

// Defina o caminho para a pasta views e arquivos estáticos
app.set("view engine", "ejs");
app.set("views", "views"); // O caminho para as views é a pasta 'views'
app.use(express.static("public")); // Para arquivos estáticos como CSS, imagens

// Rota para a landing page
app.get("/", (req, res) => {
  res.render("landing"); // Alterando para 'landing.ejs' (antes 'index.ejs')
});

// Rota para login
app.get("/login", (req, res) => {
  res.render("login");
});

// Rota para cadastro
app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
