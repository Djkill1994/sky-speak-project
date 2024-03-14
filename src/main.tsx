import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createRouter} from '@tanstack/react-router'
import {routeTree} from './routeTree.gen'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from './theme';

const router = createRouter({routeTree})
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>,
)
