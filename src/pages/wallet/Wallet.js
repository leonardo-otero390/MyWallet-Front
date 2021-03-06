import { RiLogoutBoxRLine } from "react-icons/ri";
import {
  AiOutlinePlusCircle as PlusCircle,
  AiOutlineMinusCircle as MinusCircle,
} from "react-icons/ai";
import {
  StyledWallet,
  StyledContainer,
  StyledBalance,
  StyledNav,
} from "./style";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as requests from "../../services/requests";
import TransactionDisplay from "./TransactionDisplay";
export default function Wallet() {
  const [walletMovements, setWalletMovements] = useState([]);
  const navigate = useNavigate();

  const { token, user } = JSON.parse(localStorage.getItem("session"));
  if (!token) navigate("/");
  useEffect(() => {
    requests
      .getWallet(token)
      .then((res) => {
        setWalletMovements(res.data);
      })
      .catch(() =>
        alert(
          "Houve uma falha ao obter os registros, por favor atualize a página"
        )
      );
  }, [token]);
  let totalMoney = 0;
  if (walletMovements.length)
    totalMoney = walletMovements.reduce(
      (acc, curr) => acc + Number(curr.value),
      0
    );
  function requestLogOut() {
    requests
      .logout(token)
      .then(() => {
        localStorage.removeItem("session");
        navigate("/");
      })
      .catch(() =>
        alert("Houve uma falha ao fazer log-out, por favor atualize a página")
      );
  }
  return (
    <StyledContainer>
      <header>
        <h1>
          <strong>Olá, {user}</strong>
        </h1>
        <button onClick={requestLogOut}>
          <RiLogoutBoxRLine />
        </button>
      </header>
      <StyledWallet isEmpty={!walletMovements.length}>
        {walletMovements.length ? (
          <>
            <TransactionDisplay
              walletMovements={walletMovements}
              token={token}
              navigate={navigate}
            />
            <StyledBalance isPositive={totalMoney >= 0}>
              <h3>SALDO</h3>
              <h3 className="money">
                {totalMoney >= 0 ? totalMoney : -totalMoney}
              </h3>
            </StyledBalance>
          </>
        ) : (
          <h2>Não há registros de entrada ou saída</h2>
        )}
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
