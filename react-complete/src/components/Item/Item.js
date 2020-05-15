import React, { useState } from "react";
import "./Item.css";
import { FaTrashAlt } from "react-icons/fa";

const item = (props) => {
    return (
        <div className="Item">
            <div className="item-description">{props.item.name}</div>
            <div className="item-description">{props.item.calories}</div>
            <FaTrashAlt
                className="delete-icon"
                onClick={() => props.removeItemHandler(props.index)}
            />
        </div>
    );
};

export default item;
