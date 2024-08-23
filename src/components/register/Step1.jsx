/* eslint-disable react/prop-types */
import InputField from "../form/Input";
import Animal from "../ui/Animal";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const Step1 = ({ next }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex">
      <div className="hidden lg:block w-fit">
        <Animal
          className="regImg left-0 top-10"
          src="../../public/images/login_cat.png"
          bg="bg-[#FF8D4C] max-w-[65%] h-[70%]"
          txt="Step 1 of 2"
        />
      </div>

      <div className="w-full lg:w-1/2 lg:ml-[50%] mt-0 lg:mt-20 overflow-y-auto px-6 sm:px-16 py-6 text-center">
        <h1 className="text-5xl text-[#0A0075] font-normal">Sign up</h1>
        <p className="text-[#9E9E9D] font-medium text-xl leading-6 tracking-widest mt-1 mb-6">
          Register to your Account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="form w-full ">
          <InputField
            {...register("name", {
              required: "User name is required",
              pattern: {
                value: /^[A-Za-z\d]+$/g,
                message: "Not valid user name",
              },
              minLength: { value: 3, message: "Min length is 3" },
            })}
            type="text"
            placeholder="Enter your user name"
            className="bg-transparent text-[#FF8D4C]"
          />
          {errors.name && <p className="err">{errors.name.message}</p>}
          <InputField
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[a-zA-Z\d]+@gmail.com$/g,
                message: "Not valid email address",
              },
            })}
            type="text"
            placeholder="Enter your email address"
            className="bg-transparent text-[#FF8D4C] mt-6"
          />
          {errors.email && <p className="err">{errors.email.message}</p>}
          <InputField
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d).+$/g,
                message: "Not valid password",
              },
              minLength: { value: 3, message: "Min length is 6" },
              maxLength: { value: 10, message: "Max length is 10" },
            })}
            type="password"
            placeholder="Enter your password"
            className="bg-transparent text-[#FF8D4C] mt-6"
          />
          {errors.password && <p className="err">{errors.password.message}</p>}

          <InputField
            {...register("confPass", {
              required: "Confirm password is required",
              validate: (value) => {
                const { password } = getValues();
                return password === value || "Passwords should match!";
              },
            })}
            type="password"
            name="confPass"
            placeholder="Confirm password"
            className="bg-transparent text-[#FF8D4C] mt-6"
          />
          {errors.confPass && <p className="err">{errors.confPass.message}</p>}

          <InputField
            type="button"
            value="Next"
            onClick={() => next(true)}
            className="bg-[#FF8D4C] hover:bg-[#CF550F] cursor-pointer text-lg text-white capitalize font-medium mt-6"
          />
        </form>

        <div className="flex flex-col mt-3 space-y-6">
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
            signup with google
          </Link>
          <Link className="flex items-center justify-center w-full bg-transparent text-[#FF8D4C] border-2 border-[#FF8D4C] rounded-3xl py-3 px-6 placeholder:capitalize">
            <BsFacebook className="text-blue-600 text-xl mr-2" />
            signup with facebook
          </Link>

          <p className="text-[#CF550F]">
            Already have account ?
            <Link to="/signin" className="text-[#0A0075] ml-1">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step1;
