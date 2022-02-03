import { RiLogoutBoxRLine } from "react-icons/ri";
import {
  AiOutlinePlusCircle as PlusCircle,
  AiOutlineMinusCircle as MinusCircle,
} from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Wallet() {
  const navigate = useNavigate();

  const { token, user } = JSON.parse(localStorage.getItem("session"));
  if (!token) navigate("/");

  return (
    <StyledContainer>
      <header>
        <h1>
          <strong>Olá, {user}</strong>
        </h1>
        <button>
          <RiLogoutBoxRLine />
        </button>
      </header>
      <StyledWallet isEmpty={true}>
        <h2>Não há registros de entrada ou saída</h2>
      </StyledWallet>
      <StyledNav>
        <Link to="/entrada">
          <button>
            <PlusCircle />
            Nova entrada
          </button>
        </Link>
        <Link to="/saida">
          <button>
            <MinusCircle />
            Nova saída
          </button>
        </Link>
      </StyledNav>
    </StyledContainer>
  );
}

const StyledContainer = styled.main`
  width: 85%;
  max-width: 326px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-size: 26px;
    color: #ffffff;
    button {
      border: none;
      color: inherit;
      background-color: inherit;
      font-size: inherit;
      cursor: pointer;
    }
  }
`;
const StyledWallet = styled.ul`
  width: 100%;
  height: 446px;
  background-color: #fff;
  border-radius: 5px;
  padding: 23px 12px;
  display: flex;
  ${(props) =>
    props.isEmpty
      ? `
    align-items: center;
    justify-content: center;`
      : `flex-direction: column;
    justify-content: space-between;`}

  h2 {
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    text-align: center;
    color: #868686;
    width: 180px;
  }
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  a,
  button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    width: 48%;
    height: 114px;
    background: #a328d6;
    border-radius: 5px;
    border: none;
  }
`;
