import React, {
    useState,
    useCallback,
    useRef,
    useEffect,
    useMemo,
} from "react";
import "./App.css";

import Child from "./components/Child";

function App() {
    const [i, setI] = useState(0);

    const incrementHandler = () => {
        setI((i) => i + 1);
    };

    const memoChild = useMemo(() => {
        return <Child />;
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h3>Use Memo</h3>
                <h2>i: {i}</h2>
                <button id="submitButton" onClick={incrementHandler}>
                    Submit
                </button>
                <Child />
                {memoChild}
            </header>
        </div>
    );
}

export default App;
