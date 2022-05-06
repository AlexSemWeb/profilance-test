import classNames from "classnames";
import PropTypes from "prop-types";

///images
import Add from "../../../assets/icons/approve.svg";
import Cancel from "../../../assets/icons/cancel.svg";

// styles
import "./style.scss";

const ButtonSmall = ({ type, ...props }) => {
  let btnClass = classNames("btn-small", type);
  let backgroundImg = {
    backgroundImage: `url(${type === "cancel" ? Cancel : Add})`,
  };

  return (
    <button style={backgroundImg} className={btnClass} {...props}></button>
  );
};

ButtonSmall.propTypes = {
  type: PropTypes.string,
};

ButtonSmall.defaultProps = {
  type: "add",
};

export default ButtonSmall;
