import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SidebarStateContextProvider } from "./context/SidebarStateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarStateContextProvider>
    <App />
  </SidebarStateContextProvider>
);
