import { cn } from "@/lib/utils";
import { Armchair } from "lucide-react";
const SeatingSvg = ({ isSelected }) => {
  return (
    <div
      className={cn(
        " grid  grid-cols-12 w-72 max-w-72 gap-1 dark:text-gray-700   text-gray-400 p-2 bg-slate-300  dark:bg-primary/10 ",
        isSelected === true &&
          " dark:text-secondary-foreground  text-secondary-foreground"
      )}
    >
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
      <Armchair className=" rotate-180 " />
    </div>
  );
};

export default SeatingSvg;
