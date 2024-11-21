import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = forwardRef((_, ref) => {
  return (
    <footer
      ref={ref}
      className="px-4 min-h-dvh mt-20 md:min-h-[70vh] flex justify-center items-center text-lightMint bg-darkTeal "
    >
      <div className="max-w-7xl  text-lightMint mx-auto  flex flex-col gap-4 w-full">
        <h1 className="text-3xl text-deepBlue font-bold mb-6 lg:mb-10 lg:text-5xl">
          Contact Me
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-6 flex-1 w-full h-full justify-around">
            <a
              className="cursor-pointer flex gap-2 border-2 font-semibold border-lightMint p-5 rounded-lg text-sm sm:text-lg items-center text-white w-full"
              href="https://www.linkedin.com/in/angelosoreta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="#0A66C2" size={40} /> LinkedIn
            </a>
            <a
              className="cursor-pointer flex gap-2 border-2 font-semibold border-lightMint p-5 rounded-lg text-sm sm:text-lg items-center  text-white w-full"
              href="https://github.com/angelosoreta123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="#fffff" size={40} /> Github
            </a>
            <a
              className="cursor-pointer flex gap-2 border-2 font-semibold border-lightMint p-5 rounded-lg text-sm sm:text-lg items-center  text-white w-full"
              href="mailto:angelosoreta12.as@gmail.com"
            >
              <div className="flex items-center gap-2 w-full">
                <SiGmail color="#DB4437" size={40} />{" "}
                angelosoreta12.as@gmail.com
              </div>
            </a>
          </div>
          <form
            className="flex flex-col gap-6 flex-1 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you for your interest! Unfortunately, the contact form is not functional at the moment. Please feel free to reach out to me directly at my email."
              );
            }}
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="border border-lightMint p-2 rounded-lg text-sm w-full"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border border-lightMint p-2 rounded-lg text-sm w-full"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here"
              className="border border-lightMint p-2 rounded-lg text-sm w-full h-24"
            ></textarea>
            <button className="text-center text-darkSlateGreen bg-white p-3 rounded-lg text-sm w-full border hover:bg-slate-400">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
});

export default Contact;
