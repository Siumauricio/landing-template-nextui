import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {useEffect, useState} from 'react';

const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

// const darkTheme = createTheme({
//    type: 'dark',
//    theme: {
//       colors: {},
//    },
// });

function MyApp({Component, pageProps}: AppProps) {
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
   }, []);

   if (!isClient) {
      return null; // Prevent rendering on the server
   }

   return (
      <NextThemesProvider
         defaultTheme="system"
         attribute="class"
         value={{
            light: lightTheme.className,
            // dark: darkTheme.className,
         }}
      >
         <NextUIProvider>
            <Component {...pageProps} />
         </NextUIProvider>
      </NextThemesProvider>
   );
}

export default MyApp;
