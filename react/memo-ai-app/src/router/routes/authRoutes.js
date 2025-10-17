import AuthLayout from "../../layout/AuthLayout";
import Login from "../../page/AuthPages/Login";
import Signup from "../../page/AuthPages/Signup";

const authRoutes = [
  {
    Component: AuthLayout,
    children: [
      {
        path: "/Login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
];

export default authRoutes;
