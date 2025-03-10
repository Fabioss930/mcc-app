import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/signIn/signIn";
import Home from "../../pages/home/home";
import SignUp from "../../pages/signUp/signUp";
import PrivateRoute from "./privateRoute";

export default function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route element={<PrivateRoute />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}
