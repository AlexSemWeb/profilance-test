import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../../../store/userReducer";

// components
import PopupWrapper from "../PopupWrapper";
import Label from "../../UI/Label";
import Input from "../../UI/Input";

// utils
import { checkEmptyFields, checkUser } from "../../../helpers/validate";

// data
import { users } from "../../../data/users";

const defaultState = {
  login: "",
  password: "",
};

const LoginPopup = () => {
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState(defaultState);
  const [isNotValidUser, setIsNotValidUser] = useState(false);

  const [error, setError] = useState({
    login: false,
    password: false,
  });

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false, checkUser: false });
    setIsNotValidUser(false);
  };

  const handleSubmit = (e, close) => {
    e.preventDefault();

    let validationFields = checkEmptyFields(loginInfo);

    if (validationFields) {
      setError({ ...error, ...validationFields });
      return;
    }

    let validationUser = checkUser(loginInfo, users);

    if (!validationUser) {
      setIsNotValidUser(true);
      return;
    }

    localStorage.setItem("user", JSON.stringify(validationUser));
    dispatch(setUsers(validationUser));

    setLoginInfo(defaultState);
    close();
  };

  const popupButton = <span className="header__link">Вход</span>;

  return (
    <PopupWrapper
      title="Вход"
      closeButton={popupButton}
      handleSubmit={handleSubmit}
    >
      {isNotValidUser && (
        <p className="popup-error">Неверный пользователь/пароль</p>
      )}
      <Label title="Логин" error={error.login}>
        <Input
          type="text"
          name="login"
          value={loginInfo.login}
          onChange={handleChange}
        />
      </Label>
      <Label title="Пароль" error={error.password}>
        <Input
          type="password"
          name="password"
          autocomplete="current-password"
          value={loginInfo.password}
          onChange={handleChange}
        />
      </Label>
    </PopupWrapper>
  );
};

export default LoginPopup;
