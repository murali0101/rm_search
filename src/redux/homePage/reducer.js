import { ADD_DATA, ADD_DATA_DETAILS_USER_CARD_DATA, DETAILS_USER_CARD } from "./actionType";

const init = {
  info: {},
  results: [],
  detailsUserCard: false,
  detailsUserCardData:{}
};

export const homePageReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_DATA: {
      return { ...state, results: payload.results, info: payload.info };
    }
    case DETAILS_USER_CARD: {
      return { ...state, detailsUserCard: payload };
    }
    case ADD_DATA_DETAILS_USER_CARD_DATA: {
      return { ...state, detailsUserCard: payload };
    }

    default:
      return state;
  }
};
