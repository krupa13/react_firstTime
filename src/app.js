import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestuarantMenu from './components/RestuarantMenu';
// import GroceryStore from './components/GroceryStore';

const Grocery = lazy(() => import("./components/GroceryStore"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading......</h1>}>
                        <Grocery />
                    </Suspense>
                )
            },
            {
                path: "/restuarants/:resId",
                element: <RestuarantMenu />
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('heading'));

root.render(<RouterProvider router={appRouter} />);