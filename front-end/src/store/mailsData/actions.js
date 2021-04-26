import Axios from "axios";

export async function initStore({ commit }) {
  const response = await Axios.get("http://www.json-generator.com/api/json/get/bOhsueHygi?indent=2");

  commit("SET_BODY", response.data);
  commit("SET_COLUMNS", response.data);
}
