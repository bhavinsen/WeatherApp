import * as actionTypes from "./actionType";

export const actions = {
  cityDataAction: (payload) => ({
    type: actionTypes.CITYDATA,
    payload,
  }),
};

const initialState = {
  cityData: [],
};

const cityData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CITYDATA: {
      return {
        cityData : action.payload,
      };
    }
  }

  return state;
};

export default cityData;