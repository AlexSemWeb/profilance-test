import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addNews } from "../../../store/newsReducer";

// components
import Popup from "reactjs-popup";
import PopupWrapper from "../PopupWrapper";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";
import Label from "../../UI/Label";

// utils
import { checkEmptyFields } from "../../../helpers/validate";

const defaultState = {
  title: "",
  text: "",
};

const AddNewsPopup = ({ user }) => {
  const dispatch = useDispatch();
  const [newsInfo, setNewsInfo] = useState(defaultState);
  const [error, setError] = useState({ title: false, text: false });

  const handleChange = (e) => {
    setNewsInfo({ ...newsInfo, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: false });
  };

  const handleSubmit = (close) => {
    let validation = checkEmptyFields(newsInfo);

    if (validation) {
      setError({ ...error, ...validation });
      return;
    }

    dispatch(
      addNews({
        title: newsInfo.title.trim(),
        text: newsInfo.text.trim(),
        isApproved: user.isAdmin,
        time: new Date().getTime(),
      })
    );

    setNewsInfo(defaultState);
    close();
  };

  return (
    <Popup
      trigger={
        <Button>
          {user.isAdmin ? "Добавить новость" : "Предложить новость"}
        </Button>
      }
      modal
      nested
    >
      {(close) => (
        <PopupWrapper close={close} title="Добавить новость">
          <Label title="Название новости" error={error.title}>
            <Input
              type="text"
              name="title"
              value={newsInfo.title}
              onChange={handleChange}
            />
          </Label>
          <Label title="Текст новости" error={error.text}>
            <Textarea
              rows="10"
              value={newsInfo.text}
              name="text"
              onChange={handleChange}
            />
          </Label>
          <Button onClick={() => handleSubmit(close)}>Добавить новость</Button>
        </PopupWrapper>
      )}
    </Popup>
  );
};

Popup.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(null)]),
};

export default AddNewsPopup;
