/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';
import {
  FormControl, InputLabel, Select,
} from '@material-ui/core';

const allowedDirections = [
  'asc',
  'desc',
];

const allowedOrders = [
  'match',
  'alphabetical',
];

class ResultOrderer extends React.Component {
  isValidDirection = direction => direction && allowedDirections.indexOf(direction) > -1;

  isValidOrder = order => order && allowedOrders.indexOf(order) > -1;

  handleChange = (event) => {
    const {
      setDirection, setOrder,
    } = this.props;
    const array = event.target.value.split('-');
    const direction = array[1];
    const order = array[0];

    if (this.isValidDirection(direction) && this.isValidOrder(order)) {
      setDirection(direction);
      setOrder(order);
    }
  };

  render() {
    const {
      classes, direction, intl, order,
    } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel style={{ color: 'inherit' }} htmlFor="result-sorter"><FormattedMessage id="sorting.label" /></InputLabel>
          <Select
            className={classes.select}
            native
            value={`${order}-${direction}`}
            onChange={this.handleChange}
            inputProps={{
              name: 'result-sorter',
              id: 'result-sorter',
              classes: {
                icon: classes.icon,
              },
              className: `${classes.input}`,
            }}
          >
            <option className={classes.black} value="match-desc">{intl.formatMessage({ id: 'sorting.match.desc' })}</option>
            <option className={classes.black} value="alphabetical-desc">{intl.formatMessage({ id: 'sorting.alphabetical.desc' })}</option>
            <option className={classes.black} value="alphabetical-asc">{intl.formatMessage({ id: 'sorting.alphabetical.asc' })}</option>
          </Select>
        </FormControl>
      </form>
    );
  }
}

ResultOrderer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  direction: PropTypes.oneOf(allowedDirections).isRequired,
  intl: intlShape.isRequired,
  order: PropTypes.oneOf(allowedOrders).isRequired,
  setDirection: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
};

export default ResultOrderer;
