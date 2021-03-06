import styled from "styled-components";

export const StyledContainer = styled.main`
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
export const StyledWallet = styled.ul`
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
export const StyledTransactions = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  overflow-y: auto;
  height: 90%;
`;
export const StyledBalance = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 17px;
  }
  .money {
    ${(props) => (props.isPositive ? "color:green;" : "color:red;")}
  }
`;
export const StyledNav = styled.nav`
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
export const StyledMove = styled.li`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    time {
      font-family: "Raleway", sans-serif;
      font-size: 16px;
      color: #c6c6c6;
      margin-right: 8px;
    }
    p {
      font-family: "Raleway", sans-serif;
      font-size: 16px;
      color: #000000;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 152px;
    }
  }
  h3 {
    width: 72px;
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props) => (props.isPositive ? "color:green;" : "color:red;")}
  }
  button {
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    color: #c6c6c6;
    margin-right: 8px;
    border: none;
    background:none;
  }
`;
