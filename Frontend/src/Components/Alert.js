import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function Alert(props) {
  if (!props.alert) return <div style={{ height: '0px' }}></div>;

  return (
    <div className="alert-toast-wrapper">
      <div className="alert-toast" role="alert">
        <FontAwesomeIcon icon={faCircleInfo} className="toast-icon" />
        <span className="toast-message">{props.alert}</span>
      </div>
    </div>
  );
}

export default Alert;
