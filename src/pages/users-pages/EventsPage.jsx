import EventCard from "@/components/event-card";

const EventsPage = (props) => {
  return (
    <div className=" w-full px-8 py-32 flex items-center justify-center gap-8 flex-wrap ">
      <EventCard event={props.event} name={"Harmony Haven Live"} time={"15:00 | 19/09/2024"} location={"Neon Nights Club, Brickton"} img={"/src/img/concert-0.jpg"} type={0}/>
      <EventCard event={props.event} name={"Melody Meadow Music Fest"} time={"18:00 | 19/09/2024"} location={"Victoria Memorial Gardens, Kolkata"} img={"/src/img/concert-1.jpg"} type={0}/>
      <EventCard event={props.event} name={"Groovefest Jam Session"} time={"20:00 | 19/09/2024"} location={"Starlight Stadium, Brooksville"} img={"/src/img/concert-2.jpg"} type={0}/>
      <EventCard event={props.event} name={"Urban Beats Bash"} time={"19:00 | 19/09/2024"} location={"Groove Grove Lounge, Riverdale"} img={"/src/img/concert-3.jpg"} type={0}/>
      <EventCard event={props.event} name={"Sunset Serenade Soiree"} time={"21:00 | 19/09/2024"} location={"Marina Beach Stage, Chennai"} img={"/src/img/concert-4.jpeg"} type={2}/>
    </div>
  );
};

export default EventsPage;
