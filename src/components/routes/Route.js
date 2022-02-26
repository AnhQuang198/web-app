import Error404 from "../utils/error/Error404";
import Error500 from "../utils/error/Error500";
import Home from "../pages/Home";
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

const authRoutes = [
    { path: "/home" , component: Home}
];

const publicRoutes = [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forgot-password", component: ForgotPassword },
    { path: "/page-404", component: Error404 },
    { path: "/page-500", component: Error500 }
];

export { authRoutes, publicRoutes };