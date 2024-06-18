import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye opening", "presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[9vw] h-[5.7vw] relative -top-[1vw] bg-red-500"
                ></motion.div>
              )}
              <h1 className="uppercase text-[9vw] leading-[7vw] font-['Founders_Grotesk_X-Condensed'] font-bold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For Public and Private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-4 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
