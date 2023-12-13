"use client";

import Header from "@src/Components/Header/Header";
import { ThemeContextProvider } from "@src/Components/context/ThemeContext";
import ThemeProvider from "@src/Components/providers/ThemeProvider";
import { Provider } from "react-redux";
import "../styles/globals.css";
import AuthProvider from "./api/auth/Context/AuthProvider";
import { store } from "./store";

const RootLayout = ({ children }) => (
  <html lang="en">
    <head></head>
    <body>
      {/* FontAwesome */}
      <script
        src="https://kit.fontawesome.com/f1226663b7.js"
        crossorigin="anonymous"
      ></script>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
      {/* TailWind */}

      <AuthProvider>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="">
                <Header />
                <Provider store={store}>{children}</Provider>
              </div>{" "}
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;
