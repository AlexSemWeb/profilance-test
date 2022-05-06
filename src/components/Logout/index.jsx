import { useDispatch } from "react-redux";
import { setUsers } from "../../store/userReducer";

const Logout = () => {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    localStorage.removeItem("user");
    dispatch(setUsers(null));
  };

  return (
    <span className="header__link" onClick={handleClickLogout}>
      Выйти
    </span>
  );
};

export default Logout;
