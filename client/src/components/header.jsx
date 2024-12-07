import { Button } from "@/components/ui/button";
import "../App.css";

const Header = () => {
  return (
    <header className="h-[100vh] top-0 flex px-20">
      <div className="flex flex-col gap-10 w-[50%] justify-center">
        <h1 className="text-4xl font-bold">
          <span className="text-gradient">Lorem ipsum dolor sit, </span>
          amet consectetur adipisicing elit. Omnis aut officia
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
          recusandae, ea quo perspiciatis dicta at temporibus rem optio
          necessitatibus aut nulla soluta non eos atque ex? Explicabo modi enim
          neque?
        </p>
        <div>
          <div className="p-[3px] bg-gradient-to-br from-secondaryColor via-thirdColor to-primaryColor w-fit rounded-lg">
            <Button className="text-start text-mask bg-white font-bold hover:text-white">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[50%] overflow-hidden">
        <img
          src="images/web-development.jpg"
          alt="web-development"
          className="object-cover translate-x-10 scale-90"
        />
      </div>
    </header>
  );
};

export default Header;
