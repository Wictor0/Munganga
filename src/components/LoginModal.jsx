import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importado para navegação
import "./LoginModal.css"; // Arquivo para estilização
import solImg from "./assets/sol.png"; // Adapte o caminho
import fecharImg from "./assets/fechar.png"; // Adapte o caminho

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState(""); // Para armazenar o valor do email
  const [senha, setSenha] = useState(""); // Para armazenar o valor da senha
  const [errorMessage, setErrorMessage] = useState(""); // Estado para mensagem de erro
  const [isTouched, setIsTouched] = useState(false); // Para saber se o campo foi tocado (clicado)
  const [isErrorVisible, setIsErrorVisible] = useState(false); // Para controlar a visibilidade da mensagem de erro
  const navigate = useNavigate(); // Hook de navegação

  useEffect(() => {
    if (!isOpen) {
      setErrorMessage(""); // Limpar a mensagem de erro quando o modal for fechado
      setIsTouched(false); // Resetar o estado de "tocado"
      setIsErrorVisible(false); // Esconde a mensagem de erro quando o modal é fechado
    }
  }, [isOpen]);

  const handleLogin = (e) => {
    e.preventDefault(); // Impede a validação nativa do HTML
    setIsTouched(true); // Marca os campos como tocados

    if (!email || !senha) {
      setErrorMessage("Preenche aqui, visse!"); // Texto de erro mais curto
      setIsErrorVisible(true); // Exibe a mensagem de erro
      setTimeout(() => {
        setIsErrorVisible(false); // Esconde a mensagem após 3 segundos com a transição
      }, 2500); // Esconde a mensagem após 2,5 segundos
    } else {
      setErrorMessage(""); // Limpa a mensagem de erro se tudo estiver correto
      console.log("Login feito com sucesso!");
    }
  };

  if (!isOpen) return null; // Se o modal não estiver aberto, ele não será renderizado.

  return (
    <div className="overlay open">
      <div className="modal">
        <img src={solImg} alt="Sol" className="sol" />
        <button className="fechar" onClick={onClose}>
          <img src={fecharImg} alt="Fechar" />
        </button>
        <h2>Entrar</h2>
        <p>Acesse sua conta</p>

        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label className="input-label" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isTouched && errorMessage && (
              <div
                className={`error-message ${isErrorVisible ? "show" : "hide"}`}
              >
                {errorMessage}
              </div>
            )}
          </div>

          <div className="input-container">
            <label className="input-label" htmlFor="senha">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            {isTouched && errorMessage && (
              <div
                className={`error-message ${isErrorVisible ? "show" : "hide"}`}
              >
                {errorMessage}
              </div>
            )}
          </div>

          <a href="#" className="forgot-password">
            Esqueci minha senha
          </a>

          <button className="botao verde" type="submit">
            Entrar
          </button>
        </form>

        {/* Botão para criar conta */}
        <div className="criar-conta">
          <p>Ainda não tem uma conta?</p>
          <button
            className="botao amarelo"
            onClick={() => navigate("/cadastro")}
          >
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
