import { Button } from "./ui/button";

const GradientBtn = ({ children }) => {
  return (
    <div className="p-[3px] bg-gradient-to-br from-secondaryColor via-thirdColor to-primaryColor w-fit rounded-lg">
      <Button className="text-start text-mask bg-white font-bold hover:text-white">
        {children}
      </Button>
    </div>
  );
};

export default GradientBtn;
