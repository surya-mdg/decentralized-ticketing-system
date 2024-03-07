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

const EventCard = (props) => {
    const setEvent = () => {
        props.event({tokenId: 0, name: props.name, time: props.time, location: props.location, seat: ""});
    }

    return (
    <Card className=" md:min-w-56 md:w-56 p-4  w-full  justify-center  items-center flex md:block">
        <CardContent className=" border aspect-video h-24  ">
            <ImageIcon className=" w-16 h-16  m-auto" />
        </CardContent>

        <div>
            <CardHeader>
            <CardTitle>{props.name}</CardTitle>
            <CardDescription>{props.time + " " + props.location}</CardDescription>
            </CardHeader>
            <CardFooter>
            <Link to={"/book-event"}>
                <Button size="sm" onClick={setEvent}> Book Event </Button>
            </Link>
            </CardFooter>
        </div>
    </Card>
  );
};

export default EventCard;
