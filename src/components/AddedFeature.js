import React from 'react';

// ! Redux
import { connect } from 'react-redux';
import { removeFeature } from '../actions/Actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      {props.feature.name}
      {" "}
      <span className='tag is-danger'>
        Remove
        <a onClick={() => props.removeFeature(props.feature)} className="delete is-small"></a>
      </span>
    </li>
  );
};

export default connect(() => ({}), {
  removeFeature
})(AddedFeature);