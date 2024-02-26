import SeatingSvg from "./seating-svg";

const BookImageSvg = ({ seatPosition }) => {
  return (
    <div className=" flex  justify-center bottom-2  rounded-lg m-4  items-center  flex-col gap-4 p-4 mx-6 relative">
      <img
        src="/Blue_Lights.jpg"
        alt=" event"
        className="  w-72  aspect-video  image-full   max-h-96 absolute top-0  opacity-35 "
      />
      <div className=" mt-28">
        <SeatingSvg isSelected={seatPosition === "front"} />
        <SeatingSvg isSelected={seatPosition === "middle"} />
        <SeatingSvg isSelected={seatPosition === "back"} />
      </div>
    </div>
  );
};

export default BookImageSvg;
