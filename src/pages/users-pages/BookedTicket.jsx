import TicketCard from "@/components/ticket-card";
import React from "react";

const BookedTicket = (props) => {
  return (
    <div className=" w-full min-h-96 pt-16 flex justify-center  mt-16 items-center ">
      <TicketCard event={props.event} account={props.account}/>
    </div>
  );
};

export default BookedTicket;
