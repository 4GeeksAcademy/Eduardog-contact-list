// useGlobalReducer.js - Modificado para integrar contactos
import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    // Función para inicializar el estado con datos de localStorage
    const initializeStore = () => {
        const savedStore = localStorage.getItem('globalStore');
        return savedStore ? JSON.parse(savedStore) : initialStore();
    };

    const [store, dispatch] = useReducer(storeReducer, initializeStore());

   
    useEffect(() => {
        localStorage.setItem('globalStore', JSON.stringify(store));
    }, [store]);

    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}


export default function useGlobalReducer() {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useGlobalReducer must be used within a StoreProvider');
    }
    return context;
}