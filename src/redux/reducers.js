import initialState from './initialState';
import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
  GET_FORECAST_REQUEST,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAILURE,
  ADD_TO_HISTORY,
} from './actions';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weather: action.weather,
      };

    case GET_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case GET_FORECAST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_FORECAST_SUCCESS:
      return {
        ...state,
        forecast: action.forecast,
        loading: false,
      };

    case GET_FORECAST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.query],
      };
    default:
      return state;
  }
};
export default reducers;
