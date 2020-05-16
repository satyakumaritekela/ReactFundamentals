import React, {
    useState,
} from "react";
import "./App.css";

import usePrevious from "./components/usePrevious";

function App() {
    const [i, setI] = useState(0);
    const previousI = usePrevious(i);
    const incrementHandler = () => {
        setI((i) => i + 1);
    };

    console.log("previousI", previousI);
    return (
        <div className="App">
            <header className="App-header">
                <h3>Use Memo</h3>
                <h2>i: {i}</h2>
                <button id="submitButton" onClick={incrementHandler}>
                    Submit
                </button>
                <h2>Previous Child: {previousI}</h2>
            </header>
        </div>
    );
}

export default App;
