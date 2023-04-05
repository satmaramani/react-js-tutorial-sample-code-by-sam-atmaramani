import { useState, createContext } from 'react';

const Context = createContext();

export function ContextProvider(props) {
  const [firstName, setFirstName] = useState('Rick');
  const [lastName, setLastName] = useState('Astley');

  return (
    <Context.Provider value={{ firstName, lastName }}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;