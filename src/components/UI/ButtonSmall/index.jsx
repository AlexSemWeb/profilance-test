import classNames from "classnames";
import PropTypes from "prop-types";

// styles
import "./style.scss";

const ButtonSmall = ({ type, ...props }) => {
  let btnClass = classNames("btn-small", type);

  return <button className={btnClass} {...props}></button>;
};

ButtonSmall.propTypes = {
  type: PropTypes.string,
};

export default ButtonSmall;
