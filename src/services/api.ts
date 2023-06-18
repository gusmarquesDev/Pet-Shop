import axios, { AxiosHeaders, AxiosResponse } from "axios";

import { PokemonData } from "./typesApi";

const api = "https://jsonplaceholder.typicode.com/";

const apiPoker = axios.create({
  baseURL: `${api}`,
});

export const apis = {
  get: axios.get,

  getPokemons: async () =>
    apiPoker.get<PokemonData>("/pokemon?limit=20&offset=0"),
};