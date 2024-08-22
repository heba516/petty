import { NavLink, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#FFF6F2]
    hidden 
    lg:flex items-center justify-between 
    px-10 py-3 
    rounded-[247px]
    shadow-md shadow-[#00000040]"
    >
      <div className="logo">
        <div className="img"></div>
        <h2 className="uppercase text-[#0A0075] font-medium text-3xl">
          mypetty
        </h2>
      </div>
      <ul className="none md:flex items-center space-x-16">
        <li className="text-[#0A0075] font-medium text-2xl cursor-pointer">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="text-[#0A0075] font-medium text-2xl cursor-pointer">
          <NavLink to="/adopt">Adopt</NavLink>
        </li>
        <li className="text-[#0A0075] font-medium text-2xl cursor-pointer">
          <NavLink to="/care">Care</NavLink>
        </li>
        <li className="text-[#0A0075] font-medium text-2xl cursor-pointer">
          <NavLink to="/vets">Vets</NavLink>
        </li>
      </ul>
      <div className="btns">
        <Button
          txt="Signin"
          border={true}
          onClick={() => navigate("/signin")}
        />
        <Button
          txt="Signup"
          border={false}
          onClick={() => navigate("/signup")}
        />
      </div>
    </div>
  );
};

export default NavBar;
