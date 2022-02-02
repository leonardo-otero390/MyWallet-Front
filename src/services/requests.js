import axiosBase from "./axiosBase";

export const postUser = (body) => axiosBase.post("/sign-up", body);
export const login = (body) => axiosBase.post("/log-in", body);
