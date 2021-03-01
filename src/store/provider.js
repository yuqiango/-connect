import React from 'react';

const Context = React.createContext();

export { Context };

const Provider = ({ children, store }) => {
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}

export default Provider;