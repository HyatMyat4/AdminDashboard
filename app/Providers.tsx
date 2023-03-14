"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { SessionProvider } from "next-auth/react";
function Providers({ children }: { children: React.ReactNode }) {


  
  return (
    <SessionProvider>      
        <Provider store={store}>
          <ThemeProvider enableSystem={true} attribute="class">
            {children}
          </ThemeProvider>
        </Provider>      
    </SessionProvider>
  );
}

export default Providers;
