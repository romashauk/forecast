import React, { Component } from 'react';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import RenderItem from '../rednderItem/RenderItem';
import { Button } from '@material-ui/core';
import Loader from '../Loader/Loader';

class Details extends Component {
  componentDidMount() {
    const { match, getForecast } = this.props;
    const city = match.params.city;
    getForecast(city, 3);
  }

  render() {
    const { loading, forecast, history } = this.props;

    return (
      <>
        <Button
          onClick={() => history.push('/')}
          className="details__btn"
          variant="contained"
          color="secondary"
        >
          back
        </Button>
        <div className=" details">
          {loading && <Loader />}
          {forecast.map((item, i) => (
            <RenderItem detailed item={item} key={i} />
          ))}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  const { loading, forecast, weather } = state;
  return {
    loading,
    forecast,
    weather,
  };
};

export default connect(
  mapStateToProps,
  actions
)(Details);
