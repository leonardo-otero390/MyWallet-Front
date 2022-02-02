import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as requests from "../../services/requests";
import {
  StyledButton,
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledTitle,
} from "./style.js";
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const requestBody = {
    email: email,
    password: password,
    name: username,
    repeat_password: repeatPassword,
  };
  function errorAlert(error) {
    if (error.status === 409) {
      alert("O e-mail escolhido já está em uso. Por favor escolha outro.");
    } else {
      alert("Não foi possível concluir o cadastro");
    }
  }
  function requestSignUp(e) {
    e.preventDefault();
    setIsLoading(true);
    if (password !== repeatPassword) {
      alert("A senha e a confirmação devem ser iguais");
      setIsLoading(false);
      return;
    }

    const request = requests.postUser(requestBody);
    request
      .then(() => navigate("/"))
      .catch((err) => {
        errorAlert(err.response);
        setIsLoading(false);
      });
  }

  return (
    <StyledContainer>
      <StyledTitle>MyWallet</StyledTitle>
      <StyledForm
        onSubmit={(e) => {
          setIsLoading(true);
          requestSignUp(e);
        }}
      >
        <StyledInput
          type="text"
          placeholder="Nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <StyledInput
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledInput
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <StyledInput
          placeholder="Confirme a senha"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />
        <StyledButton type="submit" isLoading={isLoading} disabled={isLoading}>
          {isLoading ? "Carregando..." : "Cadastrar"}
        </StyledButton>
      </StyledForm>
      <Link to="/">
        <strong>Já tem uma conta? Entre agora!</strong>
      </Link>
    </StyledContainer>
  );
}
