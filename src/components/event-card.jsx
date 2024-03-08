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
        props.event({tokenId: 0, name: props.name, time: props.time, location: props.location, seat: "", type: props.type});
    }

    const bookString = () => {
        switch(props.type){
            case 1:
                return "Book*";
            case 2:
                return "Book**";
            default:
                return "Book";
        }
    }

    return (
    <Card className=" md:min-w-56 md:w-56 p-4  w-full  justify-center  items-center flex md:block">
        <CardContent className=" border aspect-video h-24 p-0 m-0 ">
            <img src={props.img} alt="Header" className="w-full h-full object-cover"/>
        </CardContent>

        <div>
            <CardHeader>
            <CardTitle>{props.name}</CardTitle>
            <CardDescription>{props.time }</CardDescription>
            </CardHeader>
            <CardContent>
                <CardDescription>{props.location}</CardDescription>
            </CardContent>  
            <CardFooter className="flex items-center justify-center">
            <Link to={"/book-event"} >
                <Button size="sm" onClick={setEvent}>{bookString()}</Button>
            </Link>
            </CardFooter>
        </div>
    </Card>
  );
};

export default EventCard;
