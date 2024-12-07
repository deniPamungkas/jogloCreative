import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full h-[100px] bg-gradient-to-r from-cyan-50 to-cyan-200 px-20">
      <div className="w-full h-full flex justify-between items-center gap-5">
        <div className="flex">
          <div className="bg-cyan-200 rounded-full w-[30px] h-[30px] flex justify-center items-center">
            <FaInstagram />
          </div>
          <div className="bg-cyan-200 rounded-full w-[30px] h-[30px] flex justify-center items-center">
            <FaLinkedinIn />
          </div>
          <div className="bg-cyan-200 rounded-full w-[30px] h-[30px] flex justify-center items-center">
            <IoLogoFacebook />
          </div>
        </div>
        <span className="text-end font-semibold">C 2024-Joglo Creative</span>
      </div>
    </footer>
  );
};

export default Footer;
