import { Card, CardDescription, CardHeader, CardTitle , CardContent, CardFooter} from "@/components/ui/card";
import { ImageIcon } from "lucide-react";


const TicketCard = (props) => {
  return (
    <Card className=" min-w-72 aspect-[9/12] flex flex-col  items-center  gap-y-4   justify-center">
<CardHeader className="text-3xl">
    <CardTitle>{props.event.name}</CardTitle>
    <CardDescription className="flex  items-center     justify-center">{props.event.tokenId}</CardDescription>
    </CardHeader>
    <CardContent>
        <CardDescription>{props.event.seat}</CardDescription>
    </CardContent>  
    <CardContent>
        <CardDescription>{props.event.time}</CardDescription>
    </CardContent>  
    <CardContent>
        <CardDescription>{props.event.location}</CardDescription>
    </CardContent> 
      
    <CardFooter>{props.account.substring(0,10) + "..."}</CardFooter> 
    </Card>
  );
};

export default TicketCard;
