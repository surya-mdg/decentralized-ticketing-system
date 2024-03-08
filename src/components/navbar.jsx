import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BoxIcon } from "lucide-react";
import { siteConfig } from "@/utils/site-config";
import { useIsSiteScrolled } from "@/hooks/Is-site-scrolled";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { ethers } from "ethers";

const Navbar = (props) => {
    const login = () => {
        props.login();
    };

    const isScrolled = useIsSiteScrolled();
    return (
        <>
            <div
                className={cn(
                    "navbar  p-0 m-0 fixed top-0  bg-background  text-foreground   z-40 h-8",
                    isScrolled && " border-b-2  shadow shadow-muted "
                )}
            >
                <Link to={"/"}>
                    <Button variant={"navbar"} className=" text-lg   gap-2">
                        <BoxIcon className=" w-5 h-5 mr-2" /> {siteConfig.name}
                    </Button>
                </Link>

                <div className=" flex  space-x-6 ml-auto  mr-5">
                    <Link to={"/check-ticket"}>
                        <Button variant={"ghost"}> check </Button>
                    </Link>
                    <Link to={"/verify-event"}>
                        <Button variant={"ghost"}> verify </Button>
                    </Link>
                    <Link to={"/buy-ticket"}>
                        <Button variant={"ghost"}> buy </Button>
                    </Link>
                    <Link to={"/sell-ticket"}>
                        <Button variant={"ghost"}> sell </Button>
                    </Link>
                    <Link to={"/"}>
                        <Button variant={"ghost"} onClick={login}>
                            {" "}
                            login{" "}
                        </Button>
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </>
    );
};

export default Navbar;
