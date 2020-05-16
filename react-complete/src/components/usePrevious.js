import { useEffect, useRef } from "react";

function usePrevious(i) {
    const iRef = useRef(null);
    useEffect(() => {
        iRef.current = i;
    });

    return iRef.current;
}

export default usePrevious;
