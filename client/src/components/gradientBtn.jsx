import { Button } from "./ui/button";
import PropTypes from "prop-types";

const GradientBtn = ({ children }) => {
  return (
    <div className="p-[3px] bg-gradient-to-br from-secondaryColor via-thirdColor to-primaryColor w-fit rounded-lg">
      <Button className="text-start text-mask bg-white font-bold hover:text-white">
        {children}
      </Button>
    </div>
  );
};

GradientBtn.propTypes = {
  children: PropTypes.string,
};

export default GradientBtn;
