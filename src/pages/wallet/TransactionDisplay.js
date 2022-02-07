import dayjs from "dayjs";
import { StyledMove, StyledTransactions } from "./style";
import * as requests from "../../services/requests";

export default function TransactionDisplay({
  walletMovements,
  token,
  navigate,
}) {
  function requestDelete(transactionId) {
    console.log(transactionId);
    requests
      .deleteTransaction({ token, transactionId })
      .then(() => {
        navigate(0);
      })
      .catch(() =>
        alert("Houve uma falha ao deletar, por favor atualize a página")
      );
  }
  return (
    <StyledTransactions>
      {walletMovements
        .slice(0)
        .reverse()
        .map(({ date, description, value, _id: transactionId }, index) => {
          const isPositive = value >= 0;
          let type = "entrada";
          if (!isPositive) {
            value *= -1;
            type = "saida";
          }
          return (
            <StyledMove key={index} isPositive={isPositive}>
              <div>
                <time date={date}>{dayjs(date).format("DD/MM")}</time>
                <p
                  onClick={() =>
                    navigate("/editar/" + type + "/" + transactionId)
                  }
                >
                  {description}
                </p>
              </div>
              <h3>{value}</h3>
              <button onClick={() => requestDelete(transactionId)}>X</button>
            </StyledMove>
          );
        })}
    </StyledTransactions>
  );
}
