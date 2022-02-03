import axiosBase from "./axiosBase";

function createBearerAuthorization(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export const postUser = (body) => axiosBase.post("/sign-up", body);
export const login = (body) => axiosBase.post("/log-in", body);
export const postTransaction = ({ body, token }) =>
  axiosBase.post("/wallet", body, createBearerAuthorization(token));
