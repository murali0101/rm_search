import axios from "axios";
import {
  ADD_DATA,
  ADD_DATA_DETAILS_USER_CARD_DATA,
  ADD_INFO,
  ADD_RESULTS,
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

export const getData = (value) => async (dispatch) => {
  try {
    let res = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=Morty&page=1`
    );
    // let res = await axios.get(`https://rickandmortyapi.com/api/character/?${value[0]!=null?"name=morty":""}&page=1`);
    dispatch(addData(res.data));

    // console.log(res);
  } catch (error) {
    console.log("error:", error);
  }
};
