import React, { createContext, useContext } from 'react';

const dataContext = createContext({
    mail: 'name@example.com',
    text: 'some text'
})

function Input  () {
    const context = useContext(dataContext);

    return (
        <input
            value={context.mail}
            type="email"
            className="form-control"
            id="e1"
            placeholder="name@example.com"
        />
    )
}