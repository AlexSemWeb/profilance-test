import classNames from "classnames";
import PropTypes from "prop-types";

// styles
import "./style.scss";

const ButtonSmall = ({ type, children, ...props }) => {
  let btnClass = classNames("btn-small", type);

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
};

ButtonSmall.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

ButtonSmall.defaultProps = {
  type: "add",
};

export default ButtonSmall;
