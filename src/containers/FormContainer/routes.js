import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Profile from "../../pages/Profile/Profile";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import NotFound from "../../pages/NotFound/NotFound";

const routes = [
  {
    id: 1,
    exact: true,
    path: ["", "/login"],
    Component: Login,
  },
  { id: 3, path: "/signup", component: Signup },
  { id: 2, path: "/profile", component: Profile },
  { id: 4, path: "/forgot-password", component: ForgotPassword },
  { id: 5, path: "*", component: NotFound },
];

export default routes;
