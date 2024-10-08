import { createContext, useState } from "react";

const SidebarStateContext = createContext();

const SidebarStateContextProvider = ({ children }) => {
    const [collapse, setCollapse] = useState(true);

    return (
        <SidebarStateContext.Provider value={{ collapse, setCollapse }}>
            {children}
        </SidebarStateContext.Provider>
    )
}

export {SidebarStateContext, SidebarStateContextProvider}