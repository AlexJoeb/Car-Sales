import React from 'react';

// ! Redux
import { connect } from 'react-redux';
import { buyItem } from '../actions/Actions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => {
        props.buyItem(props.feature);
      }} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(() => ({}), {
  buyItem
})(AdditionalFeature);
