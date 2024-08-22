/* eslint-disable react/prop-types */
const Button = ({ txt, border = false, ...rest }) => {
  return (
    <button
      {...rest}
      className={`
        w-[118px] h-[44px] 
        rounded-[25px] 
        font-semibold
        ${
          border
            ? "border-b-2 border-dashed border-[#0A0075] text-white bg-[#FF8D4C] hover:bg-[#CF550F]"
            : "text-[#0A0075] hover:text-[#FF8D4C]"
        }
      `}
    >
      {txt}
    </button>
  );
};

export default Button;
