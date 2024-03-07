import TicketCard from "@/components/ticket-card";
import React from "react";

const VerifyTIckTokenPage = (props) => {
    return (
        <div className=" w-full min-h-96 flex justify-center  mt-16 items-center ">
          <TicketCard event={props.event} account={props.account}/>
        </div>
      );
};

export default VerifyTIckTokenPage;
