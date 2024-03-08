import { Card, CardDescription, CardHeader, CardTitle , CardContent, CardFooter} from "@/components/ui/card";
import { ImageIcon } from "lucide-react";


const TicketCard = (props) => {
  return (
    <Card className=" min-w-72 aspect-[9/12] flex flex-col items-center gap-y-4 justify-center" style={{ backgroundImage: `url(${"/src/img/concert-3-bw.jpg"})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <CardHeader className="text-2xl">
            <CardTitle>{props.event.name}</CardTitle>
            <CardDescription className="flex items-center justify-center" style={{backgroundColor: 'black'}}>{"ID: "}<span style={{ color: 'white' }}>{props.event.tokenId}</span></CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4 justify-left">
            <CardDescription style={{ backgroundColor: 'black' , padding: "0.1em 0.3em"}}>{"Row: "}
                <span style={{ color: 'white' }}>{props.event.seat}</span>
            </CardDescription>
            <CardDescription style={{ backgroundColor: 'black' , padding: "0.1em 0.3em" }}>{"Date & Time: "}
                <span style={{ color: 'white' }}>{props.event.time}</span>
            </CardDescription>
            <CardDescription style={{ backgroundColor: 'black' , padding: "0.1em 0.3em" }}>{"Location: "}
                <span style={{ color: 'white' }}>{props.event.location}</span>
            </CardDescription>
        </CardContent>  
        <CardContent>
        </CardContent>  
        <CardFooter>{props.account.substring(0,10) + "..."}</CardFooter> 
    </Card>
  );
};

export default TicketCard;
