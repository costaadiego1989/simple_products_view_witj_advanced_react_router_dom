import React, { useEffect } from 'react'

const UseLocalStorage = (key, inicial) => {
    const [state, setState] = React.useState(() => {
        const local = window.localStorage.getItem(key);
        local ? local : inicial;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
}

export default UseLocalStorage