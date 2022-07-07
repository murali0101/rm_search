import axios from "axios";
import { ADD_DATA, ADD_INFO, ADD_RESULTS } from "./actionType";

// export const addResults = (value) => {
//   return { type: ADD_RESULTS, payload: value };
// };
// export const addInfo = (value) => {
//   return { type: ADD_INFO, payload: value };
// };
export const addData = (value) => {
  return { type: ADD_DATA, payload: value };
};

export const getData = (page) => async (dispatch) => {
  try {
    let res = await axios.get("https://rickandmortyapi.com/api/character");
    dispatch(addData(res.data));
    
    // console.log(res);
  } catch (error) {
    console.log("error:", error);
  }
};
