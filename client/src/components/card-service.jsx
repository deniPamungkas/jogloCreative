import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import PropTypes from "prop-types";

const CardService = ({ title, description, img }) => {
  return (
    <Card className="w-[350px] h-[400px] flex flex-col justify-center gap-y-8">
      <CardHeader className="flex flex-col gap-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-[100px] h-[100px] m-auto">
          <img src={img} alt={img} className="" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-colorGradient">Details</Button>
      </CardFooter>
    </Card>
  );
};

CardService.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default CardService;
