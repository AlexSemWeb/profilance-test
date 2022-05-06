import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { approveNews, deleteNews } from "../../store/newsReducer";

// components
import Card from "../../components/Card";
import AddNewsPopup from "../../components/Popups/AddNewsPopup";
import Wrapper from "../../components/UI/Wrapper";
import Input from "../../components/UI/Input";

// styles
import "./style.scss";

// utils
import { searchFilter } from "../../helpers/utils";

const News = ({ user }) => {
  const newsList = useSelector((state) => state.newsReducer.news);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const newsSorted = useMemo(() => {
    return [...newsList]
      .sort((a, b) => b.time - a.time)
      .filter((item) => item.isApproved || (user && user.isAdmin))
      .filter((item) => searchFilter(item, search));
  }, [newsList, user, search]);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const approveCard = (time) => {
    dispatch(approveNews(time));
  };

  const deleteCard = (time) => {
    dispatch(deleteNews(time));
  };

  return (
    <section className="news">
      <h2 className="visualy-hidden">Новости</h2>
      <Wrapper>
        <div className="news--top">
          <Input
            value={search}
            onChange={handleChangeSearch}
            placeholder={"Поиск новостей"}
          />
          {user && <AddNewsPopup user={user} />}
        </div>
        <div className="news--container">
          {newsSorted.length ? (
            newsSorted.map((item) => (
              <Card
                time={item.time}
                title={item.title}
                text={item.text}
                isApproved={item.isApproved}
                key={item.time}
                user={user}
                approveCard={approveCard}
                deleteCard={deleteCard}
              />
            ))
          ) : (
            <p className="news__empty">Новостей не нашлось</p>
          )}
        </div>
      </Wrapper>
    </section>
  );
};

News.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(null)]),
};

export default News;
