import classNames from "classnames";
import PropTypes from "prop-types";

// styles
import "./style.scss";

const Label = ({ title, error, children }) => {
  let labelClass = classNames({
    label: true,
    __error: error,
  });

  return (
    <label className={labelClass}>
      <p className="label__title">{title}</p>
      {children}
      <p className="label__error">Заполните поле</p>
    </label>
  );
};

Label.propTypes = {
  title: PropTypes.string.isRequired,
  error: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Label;
