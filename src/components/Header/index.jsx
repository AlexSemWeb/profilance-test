import PropTypes from "prop-types";

// components
import { Link } from "react-router-dom";
import LoginPopup from "../Popups/LoginPopup";
import Logout from "../Logout";
import Wrapper from "../UI/Wrapper";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

// styles
import "./style.scss";

const Header = ({ user }) => {
  return (
    <header className="header">
      <Wrapper>
        <ul className="header__list">
          <li className="header__item">
            <Link to="/" className="header__link">
              <Logo />
            </Link>
          </li>
          <li className="header__item">
            <Link to="/news" className="header__link">
              Новости
            </Link>
          </li>
          <li className="header__item">{user ? <Logout /> : <LoginPopup />}</li>
        </ul>
      </Wrapper>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(null)]),
};

export default Header;
