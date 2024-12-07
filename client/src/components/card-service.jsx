import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
        <Button className="w-full bg-gradient-to-r from-cyan-400 to-teal-700">
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardService;