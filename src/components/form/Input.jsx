/* eslint-disable react/prop-types */

const InputField = ({ className, ...rest }) => {
  return (
    <input
      {...rest}
      className={`${className} w-full border-2 border-[#FF8D4C] rounded-3xl py-3 px-6 focus:outline-none placeholder:capitalize `}
    />
  );
};

export default InputField;
