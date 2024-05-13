import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react';
import SiteBackground from './SiteBackground.tsx';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <SiteBackground>
        <App />
      </SiteBackground>
    </ChakraProvider>
  </React.StrictMode>
);
