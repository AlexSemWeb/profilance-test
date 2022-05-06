import React from "react";
import PropTypes from "prop-types";

// styles
import "./style.scss";

const Button = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <button className="btn" {...props} ref={ref}>
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
