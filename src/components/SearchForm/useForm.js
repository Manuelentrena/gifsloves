import { useReducer, useCallback } from "react";

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
  UPDATE_LANGUAGE: "update_language",
  RESET: "reset",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return { ...state, keyword: action.payload, times: state.times + 1 };
    case ACTIONS.UPDATE_RATING:
      return { ...state, rating: action.payload, times: state.times + 1 };
    case ACTIONS.UPDATE_LANGUAGE:
      return { ...state, language: action.payload, times: state.times + 1 };
    case ACTIONS.RESET:
      return { keyword: "", rating: "g", language: "es", times: 0 };
    default:
      return state;
  }
};

export default function useForm({
  inicialKeyword,
  inicialRating,
  inicialLanguage,
}) {
  //usereducer
  const [state, dispatch] = useReducer(reducer, {
    keyword: inicialKeyword,
    rating: inicialRating,
    language: inicialLanguage,
    times: 0,
  });

  const { keyword, rating, times, language } = state;

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

  const updateLanguage = useCallback(
    (language) => {
      dispatch({
        type: ACTIONS.UPDATE_LANGUAGE,
        payload: language,
      });
    },
    [dispatch]
  );

  const reset = useCallback(() => {
    dispatch({
      type: ACTIONS.RESET,
    });
  }, [dispatch]);

  return {
    keyword,
    rating,
    times,
    language,
    updateKeyword,
    updateRating,
    updateLanguage,
    reset,
  };
}
