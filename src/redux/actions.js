import axios from 'axios';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WETHER_FAILURE';
export const GET_FORECAST_REQUEST = 'GET_FORECAST_REQUEST';
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';
export const GET_FORECAST_FAILURE = 'GET_FORECAST_FAILURE';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

//getting forecast for today
export function getWeather(query) {
  return dispatch => {
    dispatch({ type: GET_WEATHER_REQUEST });
    const baseURL = `http://api.apixu.com/v1/forecast.json?key=7a6d75538bc8444fbca142932191603`;
    const searchMode = `&q=${query}`;
    return axios
      .get(`${baseURL}${searchMode}`)
      .then(({ data }) => {
        dispatch({
          type: GET_WEATHER_SUCCESS,
          weather: data,
        });
      })
      .catch(() =>
        dispatch({
          type: GET_WEATHER_FAILURE,
        })
      );
  };
}
//getting forecast for a 3 days
export function getForecast(query, day) {
  return dispatch => {
    dispatch({ type: GET_FORECAST_REQUEST });
    const baseURL = `http://api.apixu.com/v1/forecast.json?key=7a6d75538bc8444fbca142932191603`;
    const searchMode = `&q=${query}&days=${day}`;
    return axios
      .get(`${baseURL}${searchMode}`)
      .then(({ data }) => {
        dispatch({
          type: GET_FORECAST_SUCCESS,
          forecast: data.forecast.forecastday,
        });
      })
      .catch(() =>
        dispatch({
          type: GET_FORECAST_FAILURE,
        })
      );
  };
}
//adding history to the redux state
export function addToHistory(query) {
  return dispatch => {
    dispatch({
      type: ADD_TO_HISTORY,
      query,
    });
  };
}
