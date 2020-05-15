import React, { useState, useCallback } from "react";
import "./App.css";
import Item from "./components/Item/Item";

const initialState = [
    {
        name: "tomato",
        calories: 20,
    },
    {
        name: "rice",
        calories: 30,
    },
];

function App() {
    const [list, setList] = useState(initialState);

    const addItemHandler = useCallback(() => {
        setList([
            ...list,
            {
                name: "candy",
                calories: 100,
            },
        ]);
    }, [list]);

    const removeItemHandler = (i) => {
        const filteredList = list.slice(0, i).concat(list.slice(i + 1, list.length));
        setList(filteredList);
    };

    const listDOM = list.map((item, key) => {
        return (
            <Item
                key={key}
                index={key}
                item={item}
                removeItemHandler={(index) => removeItemHandler(index)}
            />
        );
    });

    return (
        <div className="App">
            <header className="App-header content">
                {listDOM}
                <div className="buttons-div">
                    <button className="add-button" onClick={addItemHandler}>
                        Add Item
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
