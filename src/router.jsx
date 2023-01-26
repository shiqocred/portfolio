import { createBrowserRouter } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import ArticlesIndex from "./views/articles/Index";
import ArticlesShow from "./views/articles/Show";
import Projects from "./views/Projects";
import Speaking from "./views/Speaking";
import Uses from "./views/Uses";
import App from "./layouts/App";
import NotFound from "./views/NotFound";
import data from './utils/data.json';
import Thanks from "./views/Thanks";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App {...data[1]} />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home articles={data[0].data} jobs={data[5].data} />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/articles',
                element: <ArticlesIndex {...data[0]} />
            },
            {
                path: '/articles/:slug',
                element: <ArticlesShow {...data[0]} />
            },
            {
                path: '/projects',
                element: <Projects {...data[2]} />
            },
            {
                path: '/speaking',
                element: <Speaking {...data[3]} />
            },
            {
                path: '/uses',
                element: <Uses {...data[4]} />
            },
            {
                path: '/thank-you',
                element: <Thanks />
            },
        ]
    }
])

export default router;