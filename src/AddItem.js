import React from "react";

export default function AddItem(props) {
  const {
    addItem,
    title,
    onTitleChange,
    description,
    onDescriptionChange,
    showError
  } = props;
  return (
    <>
      <form onSubmit={addItem}>
        <div>
          <input
            value={title}
            onChange={onTitleChange}
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
          />
        </div>
        <div>
          <input
            value={description}
            onChange={onDescriptionChange}
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation">
            {showError && "Заполнены не все обязательные поля"}
          </div>
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>
    </>
  );
}
