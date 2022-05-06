import PropTypes from "prop-types";

// components
import Wrapper from "../../components/UI/Wrapper";

// styles
import "./style.scss";

const Home = ({ user }) => {
  return (
    <section className="main">
      <h2 className="visualy-hidden">Главная</h2>
      <Wrapper>
        <div className="main--container">
          Приветствую, {user && user.login ? user.login : "Гость"}
        </div>
      </Wrapper>
    </section>
  );
};

Home.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(null)]),
};

export default Home;
