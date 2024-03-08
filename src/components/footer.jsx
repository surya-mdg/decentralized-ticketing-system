import { siteConfig } from "@/utils/site-config";
//import { prependOnceListener } from "process";

const Footer = (props) => {
  return (
    <footer className="footer footer-center p-4  border-t-2  pb-10 mt-8 ">
      <aside>
        <p>Contract Address: {props.contractAdd}</p>
      </aside>
    </footer>
  );
};

export default Footer;
