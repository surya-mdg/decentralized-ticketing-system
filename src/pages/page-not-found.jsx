import React from "react";
import { Button } from "../components/ui/button";
import { LoaderIcon } from "lucide-react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className=" w-full min-h-screen  flex justify-center items-center">
      <Link to="/">
        <Button size={"lg"} variant={"secondary"}>
          <LoaderIcon className="w-6 h-6 animate-spin mr-3" /> Page Not Found
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
