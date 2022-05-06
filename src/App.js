import { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // HashRouter для деплоя
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "./store/userReducer";
import { setNews } from "./store/newsReducer";

// components
import Header from "./components/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import NotFound from "./pages/404";

// data
import { news } from "./data/news";

const App = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let userFromStorage = localStorage.getItem("user");

    if (userFromStorage) {
      let parsedUser = JSON.parse(userFromStorage);
      dispatch(setUsers(parsedUser.login ? parsedUser : null));
    }

    dispatch(setNews(news));
  }, [dispatch]);

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route exact path="/" element={<Home user={user} />} />
        <Route path="/news" element={<News user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
