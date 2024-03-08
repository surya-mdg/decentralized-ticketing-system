import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";

const RootLayout = (props) => {
  return (
    <div className=" bg-background text-foreground capitalize">
      <Navbar login={props.login} contract={props.contract}/>
      <main className="  min-h-screen">
        <Outlet />
      </main>
      <Footer contractAdd={props.contractAdd}/>
    </div>
  );
};

export default RootLayout;
