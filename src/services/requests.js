import axiosBase from "./axiosBase";

export const postUser = (body) => axiosBase.post("/sign-up",body);
