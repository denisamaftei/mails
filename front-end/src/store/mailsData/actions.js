import Axios from "axios";
import template from "./template";
import columns from "./columns";

export async function initStore({ commit }) {
  const response = await Axios.get("http://www.json-generator.com/api/json/get/cpKErTFIzm?indent=2");

  commit("SET_TEMPLATE", response.data);
  commit("SET_COLUMNS", response.data);
  columns, template
}
