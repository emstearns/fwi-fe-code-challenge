import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export const Button = (props) => {
  const { buttonType, children, className, ...additionalProps } = props;

  const classNames =
    'button' +
    (!!className ? ` ${className}` : '') +
    (!!buttonType ? ` ${buttonType}` : '');

  return (
    <button className={classNames} {...additionalProps}>
      {children}
    </button>
  );
};
Button.propTypes = {
  buttonType: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
