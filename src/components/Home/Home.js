import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import RenderItem from '../rednderItem/RenderItem';
import Loader from '../Loader/Loader';

class Home extends Component {
  state = {
    query: '',
  };
  // setting searching query for state
  hanldeChange = e => {
    this.setState({
      query: e.target.value,
    });
  };
  //showing our forecast for today
  showForecast = query => {
    const { getWeather, addToHistory } = this.props;
    this.setState({
      query: '',
    });
    addToHistory(query);
    getWeather(query);
  };

  render() {
    const { loading, weather, getWeather, history } = this.props;
    const { query } = this.state;
    return (
      <>
        {history.length !== 0 && (
          <div className="history">
            <h2>History :</h2>
            {/* maping our history data */}
            {history.map((item, i) => {
              return (
                <p onClick={() => getWeather(item)} key={i}>
                  {item}
                </p>
              );
            })}
          </div>
        )}

        <form
          onSubmit={e => {
            e.preventDefault();
          }}
          className="form"
        >
          <TextField
            onChange={this.hanldeChange}
            className="form__input"
            label="Your location"
            value={query}
          />
          <Button
            onClick={() => this.showForecast(query)}
            className="form__btn"
            variant="contained"
            color="secondary"
            disabled={!query ? true : false}
          >
            SEARCH
          </Button>
        </form>
        {loading && <Loader />}
        {weather ? (
          <div className="container">
            {weather.forecast.forecastday.map((item, i) => {
              return (
                <RenderItem
                  city={this.props.weather.location.name}
                  item={item}
                  key={i}
                />
              );
            })}
          </div>
        ) : null}
      </>
    );
  }
}
const mapStateToProps = state => {
  const { loading, weather, history } = state;
  return {
    loading,
    weather,
    history:
      history.length > 5
        ? history.slice(history.length - 5, history.length)
        : history,
  };
};

export default connect(
  mapStateToProps,
  actions
)(Home);
