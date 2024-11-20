import { forwardRef } from "react";
import icon from "../assets/heroIcon.jpg";

const Home = forwardRef(({ handleScrollToItem }, ref) => {
  return (
    <section
      className=" max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center min-h-dvh md:mt-0 text-darkSlateGreen "
      ref={ref}
    >
      <div className="flex flex-col items-center md:flex-col enter text-center">
        <h1 className="text-3xl font-bold mb-2 lg:text-5xl">
          Hi, I am Michael Angelo
        </h1>
        <div className="w-max text-center">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 text-deepCyan border-r-white pr-5 text-3xl font-bold lg:text-5xl mb-4">
            Front-End Developer
          </h1>
        </div>
        <p className="text-sm mb-4 md:text-lg">
          I am a Front-End Developer currently expanding my skills and
          transitioning to a full stack developer.
        </p>
        <div>
          <button
            className="border-2 border-deepCyan px-3 py-2 rounded-3xl  mr-4 hover:bg-teal-200"
            onClick={() => handleScrollToItem("Contact")}
          >
            Contact Me
          </button>
          <button
            className="border-2 border-deepCyan bg-deepCyan px-3 py-2 rounded-3xl text-lightMint hover:bg-cyan-800 transition-all duration-300"
            onClick={() => window.open("/My-Portfolio/Michael_Soreta_Resume.pdf", "_blank")}
          >
            Resume
          </button>
        </div>
      </div>

      <div className="flex w-2/3 bg-transparent justify-center items-center mt-20 lg:mt-0">
        <img
          src={icon}
          alt="Hero Icon Programmer Illustration"
          className="w-6/12"
        />
      </div>
    </section>
  );
});

export default Home;
