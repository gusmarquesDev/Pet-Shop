import axios, { AxiosHeaders, AxiosResponse } from "axios";

import { UsersApi } from "./typesApi";

const api = "https://jsonplaceholder.typicode.com";

const apiPoker = axios.create({
  baseURL: `${api}`,
});

export const apis = {
  get: axios.get,

  getUsers: async () =>
   apiPoker.get<UsersApi>("/users/1"),
  
};