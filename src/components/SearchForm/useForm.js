import { useReducer, useCallback } from "react";

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "rating_keyword",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return { ...state, keyword: action.payload, times: state.times + 1 };
    case ACTIONS.UPDATE_RATING:
      return { ...state, rating: action.payload, times: state.times + 1 };
    default:
      return state;
  }
};

export default function useForm({ lastKeyword, lastRating }) {
  //usereducer
  const [state, dispatch] = useReducer(reducer, {
    keyword: lastKeyword,
    rating: lastRating,
    times: 0,
  });

  const { keyword, rating, times } = state;

  const updateKeyword = useCallback(
    (keyword) => {
      dispatch({
        type: ACTIONS.UPDATE_KEYWORD,
        payload: keyword,
      });
    },
    [dispatch]
  );

  const updateRating = useCallback(
    (rating) => {
      dispatch({
        type: ACTIONS.UPDATE_RATING,
        payload: rating,
      });
    },
    [dispatch]
  );

  return {
    keyword,
    rating,
    times,
    updateKeyword,
    updateRating,
  };
}
