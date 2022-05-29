import React from "react";

import Item from "./Item";

export default function ItemsList(props) {
  const { items, deleteItem } = props;
  return (
    <>
      <ul className="ui-list">
        {items.map((item) => (
          <li className="ui-item-list" key={item.id}>
            <Item info={item} />
            <button onClick={() => deleteItem(item.id)} className="item-button">
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
