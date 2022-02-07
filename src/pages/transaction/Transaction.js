import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as requests from "../../services/requests";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledContainer,
} from "./style.js";

export default function Transaction({ pageType }) {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const navigate = useNavigate();
  const { token } = JSON.parse(localStorage.getItem("session"));
  if (!token) navigate("/");
  const { transactionType, transactionId } = useParams();

  function requestTransaction(e) {
    e.preventDefault();
    let valueToSend = Number(value.replace(",", "."));
    if (isNaN(valueToSend)) {
      setIsLoading(false);
      return alert("O valor deve ser um número decimal");
    }
    if (pageType === "exit" || transactionType === "saida") valueToSend *= -1;
    const body = {
      value: valueToSend.toFixed(2),
      description: description,
    };
    if (pageType === "edit") {
      if (description === "") delete body.description;
      if (value === "") delete body.value;
      requests
        .editTransaction({ body, token, transactionId })
        .then(() => {
          navigate("/carteira");
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("Houve um erro na autenticação, faça o login novamente");
            navigate("/");
            return;
          }
          alert("Houve um erro ao adicionar registro");
          setIsLoading(false);
        });
      return;
    }
    requests
      .postTransaction({ body, token })
      .then(() => {
        navigate("/carteira");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Houve um erro na autenticação, faça o login novamente");
          navigate("/");
          return;
        }
        alert("Houve um erro ao adicionar registro");
        setIsLoading(false);
      });
  }
  let headerText = "";
  let buttonText = "";
  if (transactionType === "entrada") {
    headerText = "Editar entrada";
    buttonText = "Atualizar entrada";
  } else if (transactionType === "saida") {
    headerText = "Editar saída";
    buttonText = "Atualizar saída";
  } else if (pageType === "entry") {
    headerText = "Nova entrada";
    buttonText = "Salvar entrada";
  } else {
    headerText = "Nova saída";
    buttonText = "Salvar saída";
  }
  return (
    <StyledContainer>
      <header>
        <h1>
          <strong>{headerText}</strong>
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
          required={pageType !== "edit"}
        />
        <StyledInput
          placeholder="Descrição"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required={pageType !== "edit"}
        />
        <StyledButton type="submit" isLoading={isLoading} disabled={isLoading}>
          {isLoading ? "Carregando..." : buttonText}
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}
