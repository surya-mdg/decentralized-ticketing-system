import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageIcon } from "lucide-react";

const TicketCard = () => {
  return (
    <Card className=" min-w-72 aspect-[9/14] ">
      <ImageIcon className=" w-20 h-20 " />{" "}
    </Card>
  );
};

export default TicketCard;
