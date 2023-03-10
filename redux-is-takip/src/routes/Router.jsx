import { useRoutes } from "react-router-dom";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import HomeView from "../views/HomeView";
import PageNotFound from "../views/PageNotFound";
import Dashboard from "../components/Dashboard";
import Employees from "../components/Employees/Employees";
import Products from "../components/Products/Products";
import Tasks from "../components/Tasks/Tasks";
import UserSettings from "../components/UserSettings";
import EmployeeNewForm from "../components/Employees/EmployeeNewForm";

const Router = () => {
  const routes = useRoutes([
    { path: "/login", element: <LoginView /> },
    { path: "/register", element: <RegisterView /> },
    {
      path: "/dashboard",
      element: <HomeView />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        { path: "userSettings", element: <UserSettings /> },
        {
          path: "employees",
          element: <Employees />,
        },
        {
          path: "newEmployee",
          element: <EmployeeNewForm />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "tasks",
          element: <Tasks />,
        },
      ],
    },
    { path: "*", element: <PageNotFound /> },
  ]);
  return routes;
};

export default Router;
