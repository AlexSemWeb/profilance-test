import Wrapper from "../../components/UI/Wrapper";

//styles
import "./style.scss";

const NotFound = () => {
  return (
    <section className="error">
      <Wrapper>
        <h2 className="error__title">Такой страницы нет</h2>
      </Wrapper>
    </section>
  );
};

export default NotFound;
