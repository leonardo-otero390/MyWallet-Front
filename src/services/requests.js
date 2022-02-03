import axiosBase from "./axiosBase";

function createBearerAuthorization(token) {
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
}

export const postUser = (body) => axiosBase.post("/sign-up", body);
export const login = (body) => axiosBase.post("/log-in", body);
export const postTransaction = ({ body, token }) =>
  axiosBase.post("/wallet", body, createBearerAuthorization(token));
export const getWallet = (token) =>
  axiosBase.get("/wallet", createBearerAuthorization(token));
