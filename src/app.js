import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestuarantMenu from './components/RestuarantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import GroceryStore from './components/GroceryStore';

const Grocery = lazy(() => import("./components/GroceryStore"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    //* API Call
    useEffect(() => {
        //* Make an API call and send username and pwd 
        const data = {
            name: "Krupa Nandh",
        }
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}> 
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app">
                        <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
                element: (
                    <Suspense fallback={<h1>Loading......</h1>}>
                        <About />
                    </Suspense>
                )
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
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('heading'));

root.render(<RouterProvider router={appRouter} />);