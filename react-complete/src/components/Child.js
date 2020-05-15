import React, { useEffect } from "react";

let renderCount = 0;

function child() {
    useEffect(() => {
        renderCount++;
    });

    return <div>renderCount: {renderCount}</div>;
}

export default child;
