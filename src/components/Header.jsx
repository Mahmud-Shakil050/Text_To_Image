import React, { useContext, useEffect, useState } from 'react';
import Home from './Home';
import Download from './Download';
import { ThemeContext } from '../context';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Header = () => {
  const [route, setRoute] = useState(true);
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
  }
  
  /*
  const [route, setRoute] = useState('home');
  const renderPage = () => {
    switch (route) {
      case 'home':
        return <Home />;

      case 'download':
        return <Download />;
      default:
        return <Home />;
    }
  };
  */
  return (
    <>
      <div>
        <ul className="flex justify-end gap-3 px-7 py-3 bg-gray-200 dark:bg-black dark:text-white shadow-md fixed w-full">
          <li>
            <button onClick={toggleDarkMode}>{darkTheme ?< MdLightMode/> :<MdDarkMode />}</button>
          </li>
          <li>
            <button onClick={route => setRoute(route)}>Home</button>
          </li>
          <li>
            <button onClick={route => setRoute(!route)}>Download</button>
          </li>
        </ul>
      </div>

      {route ? <Home /> : <Download />}

      {/*
      <div>
        <ul className="flex justify-end gap-3 px-7 py-3 bg-gray-200 shadow-md fixed w-full">
          <li>
            <button onClick={() => setRoute('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => setRoute('download')}>Download</button>
          </li>
        </ul>
      </div>
      <div>{renderPage()}</div>
      */}
    </>
  );
};

export default Header;
