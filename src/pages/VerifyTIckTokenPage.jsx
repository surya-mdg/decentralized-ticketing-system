import TicketCard from "@/components/ticket-card";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import VerifyTicketTokenForm from "@/components/verify-ticket-token-form";
import { ImageIcon } from "@radix-ui/react-icons";

const VerifyTIckTokenPage = () => {
  return (
    <div className=" w-full h-full  mt-16 ">
      <div className=" w-full flex  flex-col gap-y-5 h-full mt-16 ">
        <div className=" flex   w-full px-6  justify-between md:flex-row flex-col  gap-y-3.5 items-center">
          <div className="text-xl  justify-between items-center   flex">
            <div className="  w-14 h-14 bg-primary/50 rounded-full items-center mr-5 text-center flex justify-center ">
              <ImageIcon className="w-7 h-7  " />
            </div>
            event title
          </div>
          <div className=" text-muted-foreground ">Time & Location </div>
        </div>
        <Separator className=" bg-muted h-0.5" />
      </div>
      <Card className="  flex  md:flex-row flex-col justify-between gap-5 *: items-center mt-16 p-8  mx-8  ">
        <VerifyTicketTokenForm />
        <TicketCard />
      </Card>
    </div>
  );
};

export default VerifyTIckTokenPage;
