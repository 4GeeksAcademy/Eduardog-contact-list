
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StoreProvider } from './hooks/useGlobalReducer';
import { ContactProvider } from './contact/ContactContext';

const Main = () => {
    return (
        <React.StrictMode>
            <StoreProvider>
                <ContactProvider>
                    <RouterProvider router={router}>
                    </RouterProvider>
                </ContactProvider>
            </StoreProvider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
