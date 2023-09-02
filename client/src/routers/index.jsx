import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import Sidebar from "../layout/Sidebar/index";
import Dashboard from '../pages/Dashboard';
import Account from "../pages/Account"
import SearchBar from '../components/search-bar';


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar />,
        errorElement: <p>Error</p>,
        children: [
            {
                path: "/",
                element: <Dashboard />,
                handle: {
                    crumb: () => <SearchBar />,
                },
            },
            {
                path: "/accounts",
                element: <Account />,

            }
        ]
    }
]);

function RootRoute() {
    return <RouterProvider router={routes} />;
}
export default RootRoute;
