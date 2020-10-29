import axios from 'axios';
import env from "../../config/env";
import * as actions from "../api";

const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apifetchRequest.type) return next(action);

  const { url, method, data, onSuccess, onError } = action.payload;

  next(action);

  try {
    const response = await axios.request({
      baseURL: env.api,
      url,
      method,
      data,
    });

    dispatch(actions.apifetchSuccess(response.data));

    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch(actions.apifetchFailure(error.message));

    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
