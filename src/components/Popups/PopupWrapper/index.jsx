import PropTypes from "prop-types";

//components
import Popup from "reactjs-popup";
import Button from "../../UI/Button";

// styles
import "./style.scss";

const PopupWrapper = ({ children, title, closeButton, handleSubmit }) => {
  return (
    <Popup trigger={closeButton} modal nested>
      {(close) => (
        <div className="popup">
          <button className="popup-close" onClick={close}>
            х
          </button>
          <p className="popup-title">{title}</p>
          <form onSubmit={(e) => handleSubmit(e, close)}>
            {children}
            <Button type="submit">{title}</Button>
          </form>
        </div>
      )}
    </Popup>
  );
};

PopupWrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  closeButton: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default PopupWrapper;
