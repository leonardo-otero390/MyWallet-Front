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
export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  function requestLogIn(e) {
    e.preventDefault();
    setIsLoading(true);
    const requestBody = {
        email,
        password,
      };
    requests.login(requestBody)
      .then((res) => {
        const session = JSON.stringify(res.data);
        localStorage.setItem("session", session);
        navigate("/carteira");
      })
      .catch((err) => {
        alert("Não foi possível conectar, verifique se o e-mail e senha estão corretos")
        setIsLoading(false);
      });
  }
  return (
    <StyledContainer>
      <StyledTitle>MyWallet</StyledTitle>
      <StyledForm
        onSubmit={(e) => {
          setIsLoading(true);
          requestLogIn(e);
        }}
      >
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
        <StyledButton type="submit" isLoading={isLoading} disabled={isLoading}>
          {isLoading ? "Carregando..." : "Entrar"}
        </StyledButton>
      </StyledForm>
      <Link to="/cadastro">
        <strong>Primeira vez? Cadastre-se!</strong>
      </Link>
    </StyledContainer>
  );
}
