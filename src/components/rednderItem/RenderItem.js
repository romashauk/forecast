import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class renderItem extends Component {
  render() {
    const { item, detailed } = this.props;
    return (
      <div className="details__item">
        {detailed && <div className="data">{item.date}</div>}
        <img alt="img" src={item.day.condition.icon} />
        <p>
          {item.day.avgtemp_c > 0
            ? `+${item.day.mintemp_c}`
            : item.day.mintemp_c}
          <span>
            {item.day.avgtemp_c > 0
              ? `+${item.day.maxtemp_c}`
              : item.day.maxtemp_c}
          </span>
        </p>
        <p>
          <span>Wind:</span>
          {item.day.avgvis_km} m/s
        </p>
        <p>{item.day.condition.text}</p>
        {!detailed && (
          <Link to={this.props.city}>
            <Button className="form__btn" variant="contained" color="secondary">
              view more
            </Button>
          </Link>
        )}
      </div>
    );
  }
}
