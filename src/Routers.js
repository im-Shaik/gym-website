import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/UserDashboard";
import PaymentMethod from "./components/PaymentMethod";
import Settings from "./components/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/userDashboard/:id",
    element: <UserDashboard />,
  },
  {
    path: "/paymentMethod/:id",
    element: <PaymentMethod />,
  },
  {
    path: "/settings/:id",
    element: <Settings />,
  },
]);
