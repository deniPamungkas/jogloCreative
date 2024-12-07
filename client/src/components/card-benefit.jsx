import PropTypes from "prop-types";

const Benefit = ({ label, description, img }) => {
  return (
    <div className=" h-[100px] flex justify-center gap-5">
      <div className="bg-fuchsia-600 rounded-full w-[60px] h-[60px]">
        <img src={img || ""} alt="" />
      </div>
      <div className="w-[200px] flex flex-col gap-2">
        <h2 className="font-semibold text-lg">{label}</h2>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

Benefit.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default Benefit;
