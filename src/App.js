import React from "react";
import Routes from "./Routes";
import ChocolateContextProvider from "./context/ChocolateContext";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ConfirmProvider } from "material-ui-confirm";

toast.configure();

const defaultConfirmOptions = {
  title: "Вы уверены?",
  confirmationText: "Да",
  cancellationText: "Отмена",
};

function App() {
  return (
    <ConfirmProvider defaultOptions={defaultConfirmOptions}>
      <ChocolateContextProvider>
        <Routes />
      </ChocolateContextProvider>
    </ConfirmProvider>
  );
}

export default App;
