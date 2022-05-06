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

const AddNewsPopup = ({ user }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState({ title: false, text: false });

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setError({ ...error, title: false });
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
    setError({ ...error, text: false });
  };

  const handleSubmit = (close) => {
    let validation = checkEmptyFields({ title, text });

    if (validation) {
      setError({ ...error, ...validation });
      return;
    }

    dispatch(
      addNews({
        title: title.trim(),
        text: text.trim(),
        isApproved: user.isAdmin,
        time: new Date().getTime(),
      })
    );

    setTitle("");
    setText("");
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
            <Input type="text" value={title} onChange={handleChangeTitle} />
          </Label>
          <Label title="Текст новости" error={error.text}>
            <Textarea rows="10" value={text} onChange={handleChangeText} />
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
