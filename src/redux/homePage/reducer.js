import {
  ADD_DATA,
  ADD_DATA_DETAILS_USER_CARD_DATA,
  ADD_PAGINATED_DATA,
  DETAILS_USER_CARD,
} from "./actionType";

const init = {
  info: {},
  results: [],
  detailsUserCard: false,
  detailsUserCardData: {},
};

export const homePageReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_DATA: {
      return { ...state, results: payload.results, info: payload.info };
    }

    case DETAILS_USER_CARD: {
      return {
        ...state,
        detailsUserCard: payload[0],
        detailsUserCardData: payload[1],
      };
    }

    case ADD_DATA_DETAILS_USER_CARD_DATA: {
      return { ...state, detailsUserCardData: payload };
    }

    case ADD_PAGINATED_DATA: {
      return {
        ...state,
        results: [...state.results, ...payload.results],
        info: payload.info,
      };
    }

    default:
      return state;
  }
};
