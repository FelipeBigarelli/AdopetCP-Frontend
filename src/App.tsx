import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';
import { PostProvider } from './hooks/post';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <PostProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </PostProvider>
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
