import InputField from "../components/ui/Input";
import Animal from "../components/ui/Animal";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex">
      <Animal src="../../public/images/login_cat.png" bg="#FF8D4C" txt={true} />
      <div className="w-full lg:w-1/2 lg:ml-[50%] mt-20 overflow-y-auto px-16 py-6 text-center">
        <h1 className="text-5xl text-[#0A0075] font-normal">Sign up</h1>
        <p className="text-[#9E9E9D] font-medium text-xl leading-6 tracking-widest mt-1 mb-6">
          Register to your Account
        </p>
        <form className="form w-full space-y-6">
          <InputField
            type="text"
            name="name"
            placeholder="Enter your user name"
            className="bg-transparent text-[#FF8D4C]"
          />
          <InputField
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="bg-transparent text-[#FF8D4C]"
          />
          <InputField
            type="password"
            name="pass"
            placeholder="Enter your password"
            className="bg-transparent text-[#FF8D4C]"
          />
          <InputField
            type="password"
            name="confPass"
            placeholder="Confirm password"
            className="bg-transparent text-[#FF8D4C]"
          />
          <InputField
            type="submit"
            value="Next"
            className="bg-[#FF8D4C] text-lg text-white capitalize font-medium"
          />
        </form>
        <div className="flex flex-col mt-3 space-y-6">
          <p className="text-[#0A0075] font-medium">OR</p>
          <Link className="w-full bg-transparent text-[#FF8D4C] border-2 border-[#FF8D4C] rounded-3xl py-3 px-6 placeholder:capitalize">
            signup with google
          </Link>
          <Link className="w-full bg-transparent text-[#FF8D4C] border-2 border-[#FF8D4C] rounded-3xl py-3 px-6 placeholder:capitalize">
            signup with facebook
          </Link>

          <p className="text-[#CF550F]">
            Already have account ?{" "}
            <Link to="signin" className="text-[#0A0075]">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
