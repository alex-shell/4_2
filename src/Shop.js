import React, { useState } from "react";
import uuid from "react-uuid";
import AddItem from "./AddItem.js";
import ItemsList from "./ItemsList.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showError, setShowError] = useState(false);

  const addItem = (event) => {
    event.preventDefault();
    if (!title || !description) {
      setShowError(true);
      return;
    }
    setItems([...items, { name: title, desc: description, id: uuid() }]);
    setTitle("");
    setDescription("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const onTitleChange = (event) => {
    setShowError(false);
    setTitle(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setShowError(false);
    setDescription(event.target.value);
  };

  return (
    <>
      <AddItem
        addItem={addItem}
        onTitleChange={onTitleChange}
        onDescriptionChange={onDescriptionChange}
        showError={showError}
        title={title}
        description={description}
      />
      {items.length === 0 && (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      )}
      <ItemsList items={items} deleteItem={deleteItem} />
    </>
  );
}
