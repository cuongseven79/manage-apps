import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "../layout/index";
import Dashboard from '../pages/Dashboard';
import Account from "../pages/Account"
import SearchBar from '../components/SearchBar/index';
import LoginPage from '../pages/LoginPage';
import { ButtonCreate } from '../components/PostDialog/CreatePost';
import DashBoardBreadcumb from '../components/Breadcumb/DashBoardBreadcumb';


const routes = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        element: <Layout />,
        errorElement: <p>Error</p>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
                handle: {
                    crumb: () => <DashBoardBreadcumb />
                },
            },
            {
                path: "/accounts",
                element: <Account />,
            },
        ]
    }
]);

function RootRoute() {
    return <RouterProvider router={routes} />;
}
export default RootRoute;
