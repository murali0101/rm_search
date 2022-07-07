import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_DATA,
  ADD_DATA_DETAILS_USER_CARD_DATA,
  ADD_INFO,
  ADD_PAGINATED_DATA,
  ADD_RESULTS,
  ADD_SEARCH,
  DETAILS_USER_CARD,
} from "./actionType";

// export const addResults = (value) => {
//   return { type: ADD_RESULTS, payload: value };
// };
// export const addInfo = (value) => {
//   return { type: ADD_INFO, payload: value };
// };
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
  return { type:ADD_PAGINATED_DATA, payload: value };
};

export const getData = (value) => async (dispatch) => {
  try {
    console.log(value[0]);
    let url = `https://rickandmortyapi.com/api/character/?${
      !!value[0] ? `name=${value[0]}` : ""
    }&${!!value[1] ? `page=1` : ""}`;
    console.log(url);
    let res = await axios.get(url);
    dispatch(addData(res.data));

    // console.log(res);
  } catch (error) {
    console.log("error:", error);
  }
};
export const getPaginatedData = (value) => async (dispatch) => {
  try {
 
    console.log(value);
    let res = await axios.get(value);
    dispatch(addPaginatedData(res.data));

    // console.log(res);
  } catch (error) {
    console.log("error:", error);
  }
};
