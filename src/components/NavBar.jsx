import { NavLink, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="
      bg-[#FFF6F2]
        hidden 
        lg:fixed
        lg:left-[2.5%]
        w-[95%]
        h-fit
        lg:flex items-center justify-between 
        px-10 py-3 
        rounded-[247px]
        shadow-md shadow-[#00000040]
        z-50"
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
          <img
            src="../../public/images/nav.png"
            className="w-3 h-3 m-auto z-50"
          />
        </li>
        <li className="text-[#0A0075] font-medium text-2xl cursor-pointer">
          <NavLink to="/adopt">Adopt</NavLink>
          <img
            src="../../public/images/nav.png"
            className="w-3 h-3 m-auto z-50"
          />
        </li>
        <li className="text-[#0A0075] font-medium text-2xl cursor-pointer">
          <NavLink to="/care">Care</NavLink>
          <img
            src="../../public/images/nav.png"
            className="w-3 h-3 m-auto z-50"
          />
        </li>
        <li className="text-[#0A0075] font-medium text-2xl cursor-pointer">
          <NavLink to="/vets">Vets</NavLink>
          <img
            src="../../public/images/nav.png"
            className="w-3 h-3 m-auto z-50"
          />
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
    </nav>
  );
};

export default NavBar;
