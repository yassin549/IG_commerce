import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './QuantityStepper.scss';

export default function QuantityStepper({ initialValue = 1, minValue = 1, maxValue = 99, onValueChange }) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onValueChange(value);
  }, [value]);

  const increment = () => {
    if (value < maxValue) {
      setValue(value + 1);
    }
  };

  const decrement = () => {
    if (value > minValue) {
      setValue(value - 1);
    }
  };

  return (
    <div className="quantity-stepper">
      <button type="button" className="stepper-button minus" onClick={decrement}>-</button>
      <input type="text" className="quantity-value" value={value} readOnly />
      <button type="button" className="stepper-button plus" onClick={increment}>+</button>
    </div>
  );
}

QuantityStepper.propTypes = {
  initialValue: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onValueChange: PropTypes.func.isRequired
};

QuantityStepper.defaultProps = {
    initialValue: 1,
    minValue: 1,
    maxValue: 99
};
