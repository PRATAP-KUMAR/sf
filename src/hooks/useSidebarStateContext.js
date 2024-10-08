import { useContext } from "react";
import { SidebarStateContext } from "../context/SidebarStateContext";

const useSidebarStateContext = () => {
    const context = useContext(SidebarStateContext);

    if (!context) {
        throw Error('Context must be used only inside provider');
    }

    return context;
}

export { useSidebarStateContext };