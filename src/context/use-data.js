import { createContext, useContext, useState } from "react";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({children}) => {
    const [mode , setMode] = useState("Light")

    return (
        <DataContext.Provider
            value={{
                mode,
                setMode,
            }}
        >{children}
        </DataContext.Provider>
    )
}
export default Provider