import React, { useState } from "react";
import "./App.css";

import useCustomFetch from "./hooks/useCustomFetch";

function App() {
    const [url, setUrl] = useState("");
    const [userName, loading, error] = useCustomFetch(url);

    const changeUserNameHandler = (e) => {
        if (e.key === "Enter") {
            setUrl("http://api.github.com/users/" + e.target.value);
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    GitID:
                    <input
                        type="text"
                        onKeyPress={changeUserNameHandler}
                    ></input>
                    {loading && url && <div>Loading ...</div>}
                    {!loading && userName && userName.data && userName.data.followers && (
                        <div>Followers: {userName.data.followers}</div>
                    )}
                    {error && <div>Error: {error}</div>}
                </h2>
            </header>
        </div>
    );
}

export default App;
