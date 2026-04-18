
import { useState } from "react";
import { InstalledAppContext } from "./InstalledAppContext";


const InstalledAppContextProvider = ({children}) => {
const [installedApps, setInstalledApps] = useState([]);
//    const data = [
//     installedApps, setInstalledApps
//    ]
    return (
        <div>
            <InstalledAppContext.Provider value= {{installedApps, setInstalledApps}} >
                {children}
            </InstalledAppContext.Provider>
        </div>
    );
};

export default InstalledAppContextProvider;

/**
 * 1. createContext() দিয়ে context তৈরি করো (separate file এ)
 * 2. একটা Provider component বানাও
 * 3. Provider এর ভিতরে state (useState) বা data রাখো
 * 4. সেই data `value` prop দিয়ে pass করো
 * 5. যেই component এ দরকার, সেখানে useContext() দিয়ে data access করো
 * 6. Context use করার আগে Provider দিয়ে wrap করতেই হবে main or root e.
 */