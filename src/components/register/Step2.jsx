/* eslint-disable react/prop-types */
import InputField from "../form/Input";
import Animal from "../ui/Animal";
import { useForm } from "react-hook-form";

const Step2 = ({ next }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex">
      <div className="hidden lg:block w-fit">
        <Animal
          className="regImg left-0 top-10"
          src="../../public/images/step2.png"
          bg="bg-[#FF8D4C] max-w-[65%] h-[70%]"
          txt="Step 2 of 2"
        />
      </div>

      <div className="w-full h-[81vh] lg:w-1/2 lg:ml-[50%] mt-0 lg:mt-32 overflow-y-auto px-6 sm:px-16 py-6 text-center">
        <h1 className="text-5xl text-[#0A0075] font-normal">Sign up</h1>
        <p className="text-[#9E9E9D] font-medium text-xl leading-6 tracking-widest mt-1 mb-6">
          Register to your Account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="form w-full ">
          <div className="flex items-center justify-between space-x-6 mb-6">
            <button className="flex items-center justify-center w-full border-2 border-[#FF8D4C] rounded-3xl mb-1 py-3 px-6 focus:outline-none placeholder:capitalize">
              <img src="../../../public/images/catVec.png" />
              <span className="ml-3 font-medium text-orange text-xl">Cat</span>
            </button>
            <button className="flex items-center justify-center w-full border-2 border-[#FF8D4C] rounded-3xl mb-1 py-3 px-6 focus:outline-none placeholder:capitalize">
              <img src="../../../public/images/dogVec.png" />
              <span className="ml-3 font-medium text-orange text-xl">Dog</span>
            </button>
          </div>

          <InputField
            {...register("petName", {
              required: "Pet name is required",
              pattern: {
                value: /^[A-Za-z]+$/g,
                message: "Not valid user name",
              },
            })}
            type="text"
            placeholder="Enter your pet name"
            className="bg-transparent text-[#FF8D4C]"
          />
          {errors.petName && <p className="err">{errors.petName.message}</p>}
          <InputField
            {...register("age", {
              required: "Age is required",
              max: { value: 4, message: "Max age is 4" },
            })}
            type="text"
            placeholder="Enter your pet age"
            className="bg-transparent text-[#FF8D4C] mt-6"
          />
          {errors.age && <p className="err">{errors.age.message}</p>}

          <InputField
            type="submit"
            value="Sign up"
            className="bg-[#FF8D4C] hover:bg-[#CF550F] cursor-pointer text-lg text-white capitalize font-medium mt-6"
          />

          <InputField
            type="button"
            onClick={() => next(false)}
            value="prev"
            className="bg-[#FF8D4C] hover:bg-[#CF550F] cursor-pointer text-lg text-white capitalize font-medium mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default Step2;
