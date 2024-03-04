import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const VerifyTicketCard = () => {
  return (
    <Card className=" md:min-w-56 md:w-56 p-4  w-full  justify-center  items-center flex md:block">
      <CardContent className=" border aspect-video h-24  ">
        <ImageIcon className=" w-16 h-16  m-auto" />
      </CardContent>

      <div>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardFooter>
          <Link to={"/verify-ticket"}>
            <Button size="sm"> Verify </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default VerifyTicketCard;
