import { ADD_DATA } from "./actionType";

const init = {
    info: {},
    results: [],
};

export const homePageReducer = (state = init, { type, payload}) => {
    switch (type) {
      case ADD_DATA:{return {...state,results:payload.results,info:payload.info}}
  
    default:
      return state;
  }
};
