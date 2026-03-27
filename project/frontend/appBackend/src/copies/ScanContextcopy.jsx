import {createContext, useState } from "react";


const ScanContext = createContext();

function ScanProvider({children}){
    const [scanData, setScanData] = useState(null);

    return (
        <ScanContext.Provider value={{scanData, setScanData}}>
            {children}
        </ScanContext.Provider>
    )
}

export { ScanProvider, ScanContext }