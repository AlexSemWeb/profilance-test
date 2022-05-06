import PropTypes from "prop-types";

// styles
import "./style.scss";

const PopupWrapper = ({ children, close, title }) => {
  return (
    <div className="popup">
      <button className="popup-close" onClick={close}>
        х
      </button>
      <p className="popup-title">{title}</p>
      {children}
    </div>
  );
};

PopupWrapper.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default PopupWrapper;
