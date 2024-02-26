import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import { siteConfig } from "@/utils/site-config";

const Headings = () => {
  return (
    <>
      <div className="max-w-6xl  space-y-6 flex justify-center flex-col  items-center min-h-screen ">
        <h1 className=" text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent  bg-gradient-to-tr from-stone-800  via-primary to-secondary-foreground dark:bg-gradient-to-tr dark:from-stone-300  dark:via-primary dark:to-secondary-foreground">
          Your Entertainment <br className="   " /> Hub{" "}
          <span className="underline  dark:text-stone-300 text-stone-900">
            {siteConfig.name}
          </span>
          .
        </h1>
        <h3 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
          Unleash the Power of Shows.
        </h3>

        <Link to={"/events"}>
          <Button variant={"default"} size={"lg"}>
            Explore shows <ArrowRightIcon className="h-4 w-4 ml-2  " />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Headings;
