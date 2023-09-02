import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
                    // heading: "Dashboard",
                },
            },
            {
                path: "/accounts",
                element: <Account />,
                handle: {
                    crumb: () => <span>{"Accoi"}</span>,
                    heading: "Account",
                },
            }
        ]
    }
]);

function RootRoute() {
    return <RouterProvider router={routes} />;
}
export default RootRoute;
