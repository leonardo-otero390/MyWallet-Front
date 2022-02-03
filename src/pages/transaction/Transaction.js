import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as requests from "../../services/requests";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledContainer,
} from "./style.js";

export default function Transaction({ type }) {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const navigate = useNavigate();
  const { token } = JSON.parse(localStorage.getItem("session"));
  if (!token) navigate("/");

  function requestTransaction(e) {
    e.preventDefault();
    const valueToSend = Number(value.replace(",", "."));
    if (isNaN(valueToSend)) {
      setIsLoading(false);
      return alert("O valor deve ser um número decimal");
    }
    const body = {
      value: valueToSend,
      description: description,
    };
    requests
      .postTransaction({ body, token })
      .then(() => {
        alert("Valor registrado com sucesso!");
        navigate("/carteira");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Houve um erro na autenticação, faça o login novamente");
          navigate("/");
          return
        }
        console.log("o erro é", err.response.status);
        alert("Houve um erro ao adicionar registro");
        setIsLoading(false);
      });
  }
  return (
    <StyledContainer>
      <header>
        <h1>
          <strong>{type === "entry" ? "Nova entrada " : "Nova saída"}</strong>
        </h1>
      </header>
      <StyledForm
        onSubmit={(e) => {
          setIsLoading(true);
          requestTransaction(e);
        }}
      >
        <StyledInput
          placeholder="Valor"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <StyledInput
          placeholder="Descrição"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <StyledButton type="submit" isLoading={isLoading} disabled={isLoading}>
          {isLoading
            ? "Carregando..."
            : type === "entry"
            ? "Salvar entrada "
            : "Salvar saída"}
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}
