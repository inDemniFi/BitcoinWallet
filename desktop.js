import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/screens/home';
import DesktopSpecificComponent from './DesktopSpecificComponent'; // Import components specific to the desktop version
import { useMediaQuery } from 'react-responsive';

const rootElement = document.getElementById('root');

const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {isDesktop ? (
      <>
        <App /> {/* Render your mobile app */}
        <DesktopSpecificComponent /> {/* Render desktop-specific components */}
      </>
    ) : (
      <App /> {/* Render your mobile app for smaller screens */}
    )}
  </React.StrictMode>
);
