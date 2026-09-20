
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

import './index.css'

import Layout from './Layout.jsx'

import Home from './components/Home/Home.jsx'

import About from './components/About/About.jsx'

import Contact from './components/Contact/Contact.jsx'

import User from './components/User/User.jsx'

import Github, {
    githubInfoLoader
} from './components/Github/Github.jsx'


// =====================================================
// OLD METHOD: createBrowserRouter with route objects
// =====================================================

/*

const router = createBrowserRouter([

    {
        path: '/',
        element: <Layout />,

        children: [

            {
                index: true,
                element: <Home />,
            },

            {
                path: 'about',
                element: <About />,
            },

            {
                path: 'contact',
                element: <Contact />,
            },

        ],
    },

])

*/


// =====================================================
// NEW METHOD: createBrowserRouter with JSX routes
// =====================================================

const router = createBrowserRouter(

    createRoutesFromElements(

        <Route path="/" element={<Layout />}>

            <Route
                index
                element={<Home />}
            />

            <Route
                path="about"
                element={<About />}
            />

            <Route
                path="contact"
                element={<Contact />}
            />

            <Route
                path="user/:userid"
                element={<User />}
            />

            <Route
                path="github"
                loader={githubInfoLoader}
                element={<Github />}
            />

        </Route>

    )

)


// =====================================================
// RENDER APPLICATION
// =====================================================

createRoot(document.getElementById('root')).render(

    <StrictMode>

        <RouterProvider router={router} />

    </StrictMode>

)