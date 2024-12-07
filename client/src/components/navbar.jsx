import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full h-[60px] px-20 flex justify-center items-center bg-secondaryColor bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 z-20">
      <div className="w-full h-[35px] flex justify-between items-center">
        <Link to={"/"}>Joglo Creative</Link>
        <div className="flex justify-between items-center w-[50%]">
          <div className="flex justify-center items-center gap-10">
            <Link className="" to={"/"}>
              Services ^
            </Link>
            <Link to={"/"}>Portfolio</Link>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Blog</Link>
          </div>
          <Button className="bg-thirdColor text-black hover:bg-thirdColor">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
