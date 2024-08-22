import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Layout from "../components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="signup" element={<Register />} />
      <Route path="signin" element={<Login />} />
      <Route path="home" />
      <Route path="adopt" />
      <Route path="care" />
      <Route path="vets" />
    </Route>
  )
);

export default router;
