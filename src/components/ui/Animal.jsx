/* eslint-disable react/prop-types */
const Animal = ({bg, src, txt}) => {
  return (
    <div className="hidden lg:flex flex-col regImg w-full h-full p-14 text-center">
        <div className={txt ? "mb-14" : "hidden"}>step 1</div>
            <div className={`max-w-sm h-[70%] m-auto bg-[${bg}] flex items-center`}
            style={{ borderRadius: '310.5px 310.5px 0px 0px' }}
            >
            <img src={src} alt="" className="mb-10"/>
        </div>
    </div>
  )
}

export default Animal