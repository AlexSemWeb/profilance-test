import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../../../store/userReducer";

// components
import Popup from "reactjs-popup";
import PopupWrapper from "../PopupWrapper";
import Label from "../../UI/Label";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

// utils
import { checkEmptyFields, checkUser } from "../../../helpers/validate";

// data
import { users } from "../../../data/users";

const LoginPopup = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    login: false,
    password: false,
    checkUser: false,
  });

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    setError({ ...error, login: false, checkUser: false });
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setError({ ...error, password: false, checkUser: false });
  };

  const handleSubmit = (close) => {
    let validationFields = checkEmptyFields({ login, password });

    if (validationFields) {
      setError({ ...error, ...validationFields });
      return;
    }

    let validationUser = checkUser({ login, password }, users);

    if (!validationUser) {
      setError({ ...error, checkUser: true });
      return;
    }

    localStorage.setItem("user", JSON.stringify(validationUser));
    dispatch(setUsers(validationUser));

    setLogin("");
    setPassword("");
    close();
  };

  return (
    <Popup trigger={<span className="header__link">Вход</span>} modal nested>
      {(close) => (
        <PopupWrapper close={close} title="Вход">
          {error.checkUser && (
            <p className="popup-error">Неверный пользователь/пароль</p>
          )}
          <Label title="Логин" error={error.login}>
            <Input type="text" value={login} onChange={handleChangeLogin} />
          </Label>
          <Label title="Пароль" error={error.password}>
            <Input
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
          </Label>
          <Button onClick={() => handleSubmit(close)}>Вход</Button>
        </PopupWrapper>
      )}
    </Popup>
  );
};

export default LoginPopup;
