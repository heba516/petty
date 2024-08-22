import { forwardRef } from "react";

/* eslint-disable react/prop-types */

const InputField = forwardRef(({ className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      {...rest}
      className={`${className} w-full border-2 border-[#FF8D4C] rounded-3xl mb-1 py-3 px-6 focus:outline-none placeholder:capitalize`}
    />
  );
});

InputField.displayName = "InputField";

export default InputField;
