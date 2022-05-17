import Error404 from "../utils/error/Error404";
import Error500 from "../utils/error/Error500";
import Home from "../pages/Home";
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import OAuth2RedirectHandler from "../pages/auth/OAuth2RedirectHandler";
import Profile from "../pages/user/Profile";
import ShopProfile from "../pages/shop/ShopProfile";

const authRoutes = [
    { path: "/home" , component: Home},
    { path: "/profile" , component: Profile},
    { path: "/shop/profile" , component: ShopProfile}
];

const publicRoutes = [
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/oauth2/redirect", component: OAuth2RedirectHandler },
    { path: "/forgot-password", component: ForgotPassword },
    { path: "/page-404", component: Error404 },
    { path: "/page-500", component: Error500 }
];

export { authRoutes, publicRoutes };