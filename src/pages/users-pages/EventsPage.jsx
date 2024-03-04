import EventCard from "@/components/event-card";

const EventsPage = (props) => {
  return (
    <div className=" w-full px-8 py-16 flex items-center justify-center gap-8 flex-wrap ">
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
      <EventCard event={props.event} name={"Concert"} time={"19/09/2002"} location={"Mysore"}/>
    </div>
  );
};

export default EventsPage;
