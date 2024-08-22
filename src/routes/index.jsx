import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Register from "../pages/Register"
import Layout from "../components/Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="signup" element={<Register />}/>
            <Route path="home" />
            <Route path="adopt" element={<Register />}/>
            <Route path="care" element={<Register />}/>
            <Route path="vets" element={<Register />}/>
        </Route>
    )
)


export default router;