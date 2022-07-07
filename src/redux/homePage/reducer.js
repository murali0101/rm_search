import { ADD_DATA, Details_User_Card } from "./actionType";

const init = {
  info: {},
  results: [],
  detailsUserCard: false,
};

export const homePageReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_DATA: {
      return { ...state, results: payload.results, info: payload.info };
    }
    case Details_User_Card: {
      return { ...state, detailsUserCard: payload };
    }

    default:
      return state;
  }
};
