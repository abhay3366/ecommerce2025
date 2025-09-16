import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import DataContextProvider from "./context/DataContextProvider.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { Provider } from "react-redux";
import { store } from "./utils/appStore.jsx";
import { Bounce, ToastContainer } from "react-toastify";
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <DataContextProvider>
        <Provider store={store}>
        <App />
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
                </Provider>
      </DataContextProvider>
    </ClerkProvider>
  // </StrictMode>
);
