const express = require("express");
const app = express();
const port = 3000;

// Configurar o Express para usar EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware para servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static("public"));

// Middleware para processar dados de formulário (caso precise usar POST futuramente)
app.use(express.urlencoded({ extended: true }));

// Rota para a página inicial (landing)
app.get("/", (req, res) => {
  res.render("landing", {
    title: "Muganga - Início",
    isOpen: false, // Controla se o modal deve ser exibido (geralmente é manipulado pelo JS)
    isTouched: false,
    errorMessage: "",
    isErrorVisible: false,
  });
});

app.get("/loginModal", (req, res) => {
  res.render("partials/loginModal", {
    // Ajustando o caminho para incluir 'partials'
    title: "Muganga - Login",
    isTouched: false,
    errorMessage: "",
    isErrorVisible: false,
    isOpen: false, // Define o modal como aberto
  });
});

// Rota para cadastro
app.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    title: "Muganga - Cadastro",
  });
});

// Rota para cadastro
app.get("/login", (req, res) => {
  res.render("login", {
    title: "Muganga - Login",
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
