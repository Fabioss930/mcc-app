import { BrowserRouter } from "react-router-dom";
import AppProvider from "./hooks";
import RoutePage from "./components/routes";
import GlobalStyle from "./global";

function App() {
  return (
    <BrowserRouter>
      <>
        <AppProvider>
          <RoutePage />

          <GlobalStyle />
        </AppProvider>
      </>
    </BrowserRouter>
  );
}

export default App;
