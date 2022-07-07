import axios from "axios";
import { notify } from "../../utils/extrafunctions";
import {
  ADD_DATA,
  ADD_DATA_DETAILS_USER_CARD_DATA,
  ADD_PAGINATED_DATA,
  DETAILS_USER_CARD,
} from "./actionType";

export const addData = (value) => {
  return { type: ADD_DATA, payload: value };
};

export const detailsUserCard = (value) => {
  return { type: DETAILS_USER_CARD, payload: value };
};

export const addDataDetailsUserCardData = (value) => {
  return { type: ADD_DATA_DETAILS_USER_CARD_DATA, payload: value };
};

export const addPaginatedData = (value) => {
  return { type: ADD_PAGINATED_DATA, payload: value };
};

export const getData = (value) => async (dispatch) => {
  try {
    let url = `https://rickandmortyapi.com/api/character/?${
      !!value[0] ? `name=${value[0]}` : ""
    }&${!!value[1] ? `page=1` : ""}`;
    // console.log(url);
    let res = await axios.get(url);
    dispatch(addData(res.data));
  } catch (error) {
    notify(value[2], "Data Not Found", "info");
    // console.log("error:", error);
  }
};
export const getPaginatedData = (value, toast) => async (dispatch) => {
  try {
    let res = await axios.get(value);
    dispatch(addPaginatedData(res.data));
  } catch (error) {
    notify(toast, "You Reached The End Page", "info");
    // console.log("error:", error);
  }
};
