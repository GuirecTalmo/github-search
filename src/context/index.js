import React, {createContext, useState} from 'react';

const DarkModeContest = createContext();

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <DarkModeContest.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContest.Provider>
    </div>
  );
}

export { DarkModeContest, DarkModeProvider };
