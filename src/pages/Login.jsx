import InputField from "../components/form/Input";
import Animal from "../components/ui/Animal";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex">
      <div className="regImg hidden lg:block lg:fixed left-0">
        <Animal
          className="-left-20 2xl:-left-40 -top-10"
          src="../../public/images/cats.png"
          bg="bg-green max-w-[70%] xl:max-w-[55%] h-1/2 xl:h-[55%]"
          txt=""
        />

        <Animal
          className="left-40 top-20"
          src="../../public/images/dog.png"
          bg="bg-orange max-w-[70%] xl:max-w-[55%] h-1/2 xl:h-[60%] "
          txt=""
        />
      </div>
      <div className="w-full lg:ml-[50%] mt-0 lg:mt-20  overflow-y-auto px-6 sm:px-16 py-6 text-center">
        <h1 className="text-5xl text-[#0A0075] font-normal">Sign in</h1>
        <p className="text-[#9E9E9D] font-medium text-xl leading-6 tracking-widest mt-1 mb-6">
          to keep touch with All pets
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="form w-full">
          <InputField
            {...register("email", {
              required: "Email address is required",
            })}
            type="text"
            placeholder="Enter your email address"
            className="bg-transparent text-[#FF8D4C] mt-6"
          />
          {errors.email && <p className="err">{errors.email.message}</p>}
          <InputField
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            placeholder="Enter your password"
            className="bg-transparent text-[#FF8D4C] mt-6"
          />
          {errors.password && <p className="err">{errors.password.message}</p>}

          <InputField
            type="submit"
            value="Sign in"
            className="bg-[#FF8D4C] hover:bg-[#CF550F] cursor-pointer text-lg text-white capitalize font-medium mt-6"
          />
        </form>

        <div className="flex flex-col mt-3  mb-20 space-y-6">
          <div className="relative flex items-center justify-center text-[#0A0075] font-medium">
            <img src="../../public/images/blue.png" className="w-3 h-3 mr-3" />
            <hr className="bg-[#0A0075] h-1 w-1/2" />
            <p className="absolute border-4 border-[#FFF6F2] z-50 bg-[#FFF6F2]">
              OR
            </p>
            <img src="../../public/images/blue.png" className="w-3 h-3 ml-3" />
          </div>

          <Link className="flex items-center justify-center w-full bg-transparent text-[#FF8D4C] border-2 border-[#FF8D4C] rounded-3xl py-3 px-6 placeholder:capitalize">
            <FcGoogle className="text-2xl mr-2" />
            sign in with google
          </Link>
          <Link className="flex items-center justify-center w-full bg-transparent text-[#FF8D4C] border-2 border-[#FF8D4C] rounded-3xl py-3 px-6 placeholder:capitalize">
            <BsFacebook className="text-blue-600 text-xl mr-2" />
            sign in with facebook
          </Link>

          <p className="text-[#CF550F]">
            Donot have any account ?
            <Link to="/signup" className="text-[#0A0075] ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
