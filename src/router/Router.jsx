import Home from "../Home/Home";
import Root from "../Layout/Root";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])
export default router;