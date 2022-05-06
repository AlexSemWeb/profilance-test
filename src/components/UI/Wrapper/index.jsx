import PropTypes from "prop-types";

// styles
import "./style.scss";

const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
