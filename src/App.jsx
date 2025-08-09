import React, { useState } from 'react';
import Header from './components/Header';
import { ThemeContext } from './context';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div>
        <Header />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
