import PropTypes from "prop-types";

// components
import ButtonSmall from "../UI/ButtonSmall";
///images
import { ReactComponent as Add } from "../../assets/icons/approve.svg";
import { ReactComponent as Cancel } from "../../assets/icons/cancel.svg";

// utils
import { converDate } from "../../helpers/utils";

// styles
import "./style.scss";

const Card = ({
  time,
  title,
  text,
  isApproved,
  user,
  approveCard,
  deleteCard,
}) => {
  return (
    <div className="card">
      {user && user.isAdmin && (
        <div className="card__buttons">
          {!isApproved && (
            <ButtonSmall
              onClick={() => approveCard(time)}
              type="add"
              children={<Add />}
            />
          )}
          <ButtonSmall
            type="cancel"
            onClick={() => deleteCard(time)}
            children={<Cancel />}
          />
        </div>
      )}
      <span className="card__time">{converDate(time)}</span>
      <span className="card__title">{title}</span>
      <span className="card__text">{text}</span>
    </div>
  );
};

Card.propTypes = {
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isApproved: PropTypes.bool.isRequired,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(null)]),
  approveCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
