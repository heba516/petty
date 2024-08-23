/* eslint-disable react/prop-types */
const Animal = ({ bg: imgClassName, src, txt, className }) => {
  return (
    <div
      className={`
        hidden
        fixed ${className}
        w-1/2 h-full
        p-14
        text-center
        bg-transparent 
        lg:flex flex-col
        `}
    >
      <div className={txt ? "mb-14" : "hidden"}>
        <div className="mt-10 flex justify-center items-center">
          <img src="../../../public/images/nav.png" alt="" className="w-11" />
          <img src="../../../public/images/Line 12.png" />
          <img src="../../../public/images/nav.png" alt="" className="w-11" />
        </div>
        <p className="text-xl font-medium text-[#0A0075]">{txt}</p>
      </div>

      <div
        className={` m-auto ${imgClassName} flex items-center`}
        style={{ borderRadius: "310.5px 310.5px 0px 0px" }}
      >
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default Animal;
